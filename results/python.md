# Resultados Python

## 50 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.93ms    1.65ms  50.12ms   84.73%
    Req/Sec     1.03k   102.58     1.21k    68.50%
  20455 requests in 10.00s, 2.73MB read
Requests/sec:   2044.61
Transfer/sec:    279.54KB
```

- Latência

```
[bench] type='latency' messages=10000 duration=1908 rate=523.92
[bench] type='latency' messages=11000 duration=1784 rate=560.41
[bench] type='latency' messages=12000 duration=1796 rate=556.52
[bench] type='latency' messages=13000 duration=1786 rate=559.61
[bench] type='latency' messages=14000 duration=1787 rate=559.54
[bench] type='latency' messages=15000 duration=1924 rate=519.67
[bench] type='latency' messages=16000 duration=1916 rate=521.69
[bench] type='latency' messages=17000 duration=1841 rate=543.17
[bench] type='latency' messages=18000 duration=1786 rate=559.88
[bench] type='latency' messages=19000 duration=1830 rate=546.21
[bench] type='latency' messages=20000 duration=1790 rate=558.57
```

- Memória e CPU

```
%CPU %MEM
31.5  0.3
%CPU %MEM
31.6  0.3
%CPU %MEM
31.7  0.3
%CPU %MEM
31.8  0.3
%CPU %MEM
32.0  0.3
%CPU %MEM
32.1  0.3
%CPU %MEM
32.2  0.3
%CPU %MEM
32.3  0.3
%CPU %MEM
32.0  0.3
%CPU %MEM
31.8  0.3
%CPU %MEM
31.6  0.3
%CPU %MEM
31.0  0.3
```

## 100 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     6.23ms    1.71ms  54.42ms   91.65%
    Req/Sec   813.06     90.22     0.91k    77.00%
  16188 requests in 10.00s, 2.16MB read
Requests/sec:   1618.08
Transfer/sec:    221.22KB
```

- Latência

```
[bench] type='latency' messages=7000 duration=2482 rate=402.85
[bench] type='latency' messages=8000 duration=2490 rate=401.50
[bench] type='latency' messages=9000 duration=2493 rate=401.02
[bench] type='latency' messages=10000 duration=2489 rate=401.73
[bench] type='latency' messages=11000 duration=2490 rate=401.60
[bench] type='latency' messages=12000 duration=2492 rate=401.24
[bench] type='latency' messages=13000 duration=2498 rate=400.30
[bench] type='latency' messages=14000 duration=2495 rate=400.71
[bench] type='latency' messages=15000 duration=2500 rate=399.94
[bench] type='latency' messages=16000 duration=2497 rate=400.45
```

- Memória e CPU

```
%CPU %MEM
54.9  0.3
%CPU %MEM
55.0  0.3
%CPU %MEM
55.0  0.3
%CPU %MEM
55.1  0.3
%CPU %MEM
55.2  0.3
%CPU %MEM
55.3  0.3
%CPU %MEM
55.3  0.3
%CPU %MEM
55.4  0.3
%CPU %MEM
54.3  0.3
%CPU %MEM
53.6  0.3
%CPU %MEM
52.9  0.3
%CPU %MEM
52.2  0.3
%CPU %MEM
51.6  0.3
```

## 500 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    14.42ms    3.97ms 120.14ms   94.34%
    Req/Sec   351.79     40.35   404.00     74.50%
  7010 requests in 10.01s, 0.94MB read
Requests/sec:    700.63
Transfer/sec:     95.79KB
```

- Latência

```
[bench] type='latency' messages=2000 duration=8745 rate=114.34
[bench] type='latency' messages=3000 duration=8809 rate=113.51
[bench] type='latency' messages=4000 duration=8695 rate=115.00
[bench] type='latency' messages=5000 duration=8764 rate=114.10
[bench] type='latency' messages=6000 duration=8635 rate=115.80
[bench] type='latency' messages=7000 duration=8885 rate=112.54
```

- Memória e CPU

```
%CPU %MEM
79.5  0.3
%CPU %MEM
79.8  0.3
%CPU %MEM
80.1  0.3
%CPU %MEM
80.4  0.3
%CPU %MEM
80.6  0.3
%CPU %MEM
80.9  0.3
%CPU %MEM
81.1  0.3
%CPU %MEM
81.4  0.3
%CPU %MEM
81.6  0.3
%CPU %MEM
81.8  0.3
%CPU %MEM
81.0  0.3
%CPU %MEM
80.1  0.3
```

## 1000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    27.27ms   15.00ms 275.57ms   97.06%
    Req/Sec   193.85     31.32   252.00     81.41%
  3843 requests in 10.01s, 525.41KB read
Requests/sec:    383.99
Transfer/sec:     52.50KB
```

- Latência

```
[bench] type='latency' messages=2000 duration=21822 rate=45.82
[bench] type='latency' messages=3000 duration=19311 rate=51.78
[bench] type='latency' messages=4000 duration=21900 rate=45.66
[bench] type='latency' messages=5000 duration=19244 rate=51.96
[bench] type='latency' messages=6000 duration=19329 rate=51.73
[bench] type='latency' messages=7000 duration=19429 rate=51.47
[bench] type='latency' messages=8000 duration=19256 rate=51.93
[bench] type='latency' messages=9000 duration=19301 rate=51.81
```

- Memória e CPU

```
%CPU %MEM
93.6  0.4
%CPU %MEM
93.6  0.4
%CPU %MEM
93.7  0.4
%CPU %MEM
93.7  0.4
%CPU %MEM
93.8  0.4
%CPU %MEM
93.8  0.4
%CPU %MEM
93.8  0.4
%CPU %MEM
93.4  0.4
%CPU %MEM
93.4  0.4
%CPU %MEM
93.5  0.4
%CPU %MEM
93.5  0.4
%CPU %MEM
93.5  0.4
%CPU %MEM
93.6  0.4
%CPU %MEM
93.6  0.4
%CPU %MEM
93.6  0.4
%CPU %MEM
93.3  0.4
```

## 2000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    56.49ms   49.79ms 665.43ms   95.76%
    Req/Sec   103.28     22.06   151.00     78.42%
  1986 requests in 10.01s, 271.52KB read
Requests/sec:    198.37
Transfer/sec:     27.12KB
```

- Latência

```
[bench] type='latency' messages=1000 duration=47876 rate=20.89
[bench] type='latency' messages=2000 duration=42550 rate=23.50
[bench] type='latency' messages=3000 duration=42450 rate=23.56
[bench] type='latency' messages=4000 duration=41720 rate=23.97
[bench] type='latency' messages=5000 duration=41794 rate=23.93
[bench] type='latency' messages=6000 duration=41144 rate=24.30
[bench] type='latency' messages=7000 duration=41149 rate=24.30
```

- Memória e CPU

```
%CPU %MEM
96.8  0.6
%CPU %MEM
96.8  0.6
%CPU %MEM
96.8  0.6
%CPU %MEM
96.9  0.6
%CPU %MEM
96.9  0.6
%CPU %MEM
96.9  0.6
%CPU %MEM
96.9  0.6
%CPU %MEM
96.9  0.6
%CPU %MEM
96.9  0.6
%CPU %MEM
96.9  0.6
%CPU %MEM
96.9  0.6
```
