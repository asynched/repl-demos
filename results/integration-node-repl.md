# Testes de integração - REPL

## 50 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.26ms    1.84ms  66.35ms   92.39%
    Req/Sec     1.20k   188.09     1.40k    85.50%
  23810 requests in 10.01s, 5.56MB read
Requests/sec:   2379.29
Transfer/sec:    569.26KB
```

- Latência

```
[bench] type='latency' messages=11000 duration=403 rate=2479.39
[bench] type='latency' messages=12000 duration=402 rate=2486.01
[bench] type='latency' messages=13000 duration=399 rate=2500.17
[bench] type='latency' messages=14000 duration=401 rate=2492.56
[bench] type='latency' messages=15000 duration=400 rate=2494.45
[bench] type='latency' messages=16000 duration=400 rate=2497.89
[bench] type='latency' messages=17000 duration=401 rate=2487.88
[bench] type='latency' messages=18000 duration=398 rate=2506.42
[bench] type='latency' messages=19000 duration=300 rate=3322.72
[bench] type='latency' messages=20000 duration=499 rate=2002.26
[bench] type='latency' messages=21000 duration=401 rate=2492.36
[bench] type='latency' messages=22000 duration=398 rate=2508.64
[bench] type='latency' messages=23000 duration=402 rate=2487.11
```

## 100 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.82ms    9.69ms 178.27ms   98.65%
    Req/Sec     1.30k   271.18     1.60k    84.42%
  25707 requests in 10.01s, 6.01MB read
Requests/sec:   2569.15
Transfer/sec:    614.69KB
```

- Latência

```
[bench] type='latency' messages=13000 duration=401 rate=2489.92
[bench] type='latency' messages=14000 duration=402 rate=2484.05
[bench] type='latency' messages=15000 duration=403 rate=2481.34
[bench] type='latency' messages=16000 duration=301 rate=3320.33
[bench] type='latency' messages=17000 duration=400 rate=2495.57
[bench] type='latency' messages=18000 duration=302 rate=3310.61
[bench] type='latency' messages=19000 duration=398 rate=2506.38
[bench] type='latency' messages=20000 duration=400 rate=2499.81
[bench] type='latency' messages=21000 duration=301 rate=3320.35
[bench] type='latency' messages=22000 duration=298 rate=3346.12
[bench] type='latency' messages=23000 duration=301 rate=3319.98
[bench] type='latency' messages=24000 duration=397 rate=2512.66
[bench] type='latency' messages=25000 duration=303 rate=3292.17
```

## 500 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.15ms    1.98ms  54.66ms   89.68%
    Req/Sec     1.24k   143.14     1.46k    86.00%
  24813 requests in 10.04s, 5.80MB read
Requests/sec:   2471.97
Transfer/sec:    591.44KB
```

- Latência

```
[bench] type='latency' messages=35000 duration=396 rate=2521.70
[bench] type='latency' messages=36000 duration=409 rate=2443.48
[bench] type='latency' messages=37000 duration=396 rate=2521.88
[bench] type='latency' messages=38000 duration=418 rate=2387.19
[bench] type='latency' messages=39000 duration=405 rate=2468.86
[bench] type='latency' messages=40000 duration=394 rate=2535.80
[bench] type='latency' messages=41000 duration=331 rate=3016.47
[bench] type='latency' messages=42000 duration=397 rate=2512.78
[bench] type='latency' messages=43000 duration=411 rate=2432.66
[bench] type='latency' messages=44000 duration=390 rate=2561.56
[bench] type='latency' messages=45000 duration=427 rate=2338.37
[bench] type='latency' messages=46000 duration=400 rate=2498.43
[bench] type='latency' messages=47000 duration=390 rate=2557.65
```

## 1000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.90ms    2.78ms  33.31ms   89.04%
    Req/Sec     1.08k   134.88     1.52k    72.50%
  21537 requests in 10.05s, 5.03MB read
Requests/sec:   2143.78
Transfer/sec:    512.92KB
```

- Latência

```
[bench] type='latency' messages=10000 duration=372 rate=2684.82
[bench] type='latency' messages=11000 duration=558 rate=1791.66
[bench] type='latency' messages=12000 duration=393 rate=2543.45
[bench] type='latency' messages=13000 duration=541 rate=1847.31
[bench] type='latency' messages=14000 duration=394 rate=2532.36
[bench] type='latency' messages=15000 duration=414 rate=2413.26
[bench] type='latency' messages=16000 duration=481 rate=2078.85
[bench] type='latency' messages=17000 duration=500 rate=1999.48
[bench] type='latency' messages=18000 duration=509 rate=1960.90
[bench] type='latency' messages=19000 duration=558 rate=1789.87
```
