# Testes de integração - Node standalone

## 50 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    10.43ms    5.33ms 131.65ms   94.70%
    Req/Sec   494.73     99.56   640.00     71.00%
  9851 requests in 10.00s, 2.30MB read
Requests/sec:    984.66
Transfer/sec:    235.59KB
```

- Latência

```
[bench] type='latency' messages=1000 duration=5202 rate=192.21
[bench] type='latency' messages=2000 duration=956 rate=1045.39
[bench] type='latency' messages=3000 duration=1007 rate=992.39
[bench] type='latency' messages=4000 duration=1183 rate=845.00
[bench] type='latency' messages=5000 duration=1022 rate=978.17
[bench] type='latency' messages=6000 duration=944 rate=1058.68
[bench] type='latency' messages=7000 duration=887 rate=1127.33
[bench] type='latency' messages=8000 duration=925 rate=1080.51
[bench] type='latency' messages=9000 duration=994 rate=1006.03
```

## 100 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.37ms    8.10ms 189.15ms   97.09%
    Req/Sec   281.13     41.33   353.00     80.40%
  5581 requests in 10.01s, 1.30MB read
Requests/sec:    557.81
Transfer/sec:    133.46KB
```

- Latência

```
[bench] type='latency' messages=1000 duration=4956 rate=201.74
[bench] type='latency' messages=2000 duration=1329 rate=752.24
[bench] type='latency' messages=3000 duration=1418 rate=704.75
[bench] type='latency' messages=4000 duration=1369 rate=729.98
[bench] type='latency' messages=5000 duration=1303 rate=767.09
[bench] type='latency' messages=6000 duration=1343 rate=744.09
[bench] type='latency' messages=7000 duration=1426 rate=700.86
```

## 500 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    76.57ms   41.69ms 621.13ms   97.64%
    Req/Sec    68.74     13.03   100.00     79.90%
  1369 requests in 10.01s, 327.54KB read
Requests/sec:    136.76
Transfer/sec:     32.72KB
```

- Latência

```
[bench] type='latency' messages=1000 duration=11959 rate=83.61
[bench] type='latency' messages=2000 duration=6487 rate=154.14
[bench] type='latency' messages=3000 duration=7878 rate=126.93
[bench] type='latency' messages=4000 duration=8271 rate=120.90
[bench] type='latency' messages=5000 duration=8159 rate=122.56
[bench] type='latency' messages=6000 duration=8313 rate=120.29
[bench] type='latency' messages=7000 duration=8287 rate=120.66
```

## 1000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   154.05ms   71.05ms 959.29ms   95.04%
    Req/Sec    34.02     13.09    60.00     44.16%
  671 requests in 10.01s, 160.54KB read
Requests/sec:     67.03
Transfer/sec:     16.04KB
```

- Latência

```
[bench] type='latency' messages=2000 duration=16835 rate=59.40
[bench] type='latency' messages=3000 duration=17499 rate=57.14
[bench] type='latency' messages=4000 duration=17185 rate=58.19
[bench] type='latency' messages=5000 duration=16119 rate=62.04
[bench] type='latency' messages=6000 duration=17511 rate=57.11
```
