package main

import (
	"bufio"
	"flag"
	"log"
	"net/http"
	"sync"
	"time"
)

var (
	connections = flag.Int("c", 1, "Number of connections")
	address     = flag.String("a", "", "Address to connect to")
)

func init() {
	log.SetFlags(log.Ldate | log.Ltime | log.Lmsgprefix)
	log.SetPrefix("[bench] ")
}

func main() {
	flag.Parse()

	if *address == "" {
		log.Fatal("Address is required")
	}

	log.Printf("type='info' message='startup' address='%s' connections=%d\n", *address, *connections)

	wg := sync.WaitGroup{}

	for i := 0; i < *connections; i++ {
		wg.Add(1)
		go DoSSERequest(i, *address, &wg)
	}

	log.Println("type='info' message='waiting'")
	wg.Wait()
}

func DoSSERequest(id int, address string, wg *sync.WaitGroup) {
	defer wg.Done()

	req, err := http.NewRequest("GET", address, nil)

	if err != nil {
		log.Printf("type='error' error='%s'\n", err)
		return
	}

	client := &http.Client{}

	response, err := client.Do(req)

	if err != nil {
		log.Printf("type='error' error='%s'\n", err)
		return
	}

	defer response.Body.Close()

	scanner := bufio.NewScanner(response.Body)

	if scanner.Scan() {
		log.Println("type='info' message='connected'")
	}

	counter := 0
	start := time.Now()
	for scanner.Scan() {

		line := scanner.Text()

		if line == "" {
			continue
		}

		counter++
		if counter%1000 == 0 {
			if id == 0 {
				rate := 1000 / float64(time.Since(start).Milliseconds())
				log.Printf("type='latency' messages=%d duration=%d rate=%.2f\n", counter, time.Since(start).Milliseconds(), rate)
				start = time.Now()
			}
		}
	}

	if err := scanner.Err(); err != nil {
		log.Printf("type='error' error='%s'\n", err)
		return
	}

	log.Println("type='info' message='Connection closed'")
}
