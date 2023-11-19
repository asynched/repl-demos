# Resultados Node

## 50 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.09ms    1.15ms  46.95ms   99.42%
    Req/Sec     4.83k   831.31     6.83k    77.00%
  96028 requests in 10.00s, 17.03MB read
Requests/sec:   9601.31
Transfer/sec:      1.70MB
```

- Latência

```
[bench] type='latency' messages=13000 duration=1173 rate=851.94
[bench] type='latency' messages=14000 duration=1171 rate=853.37
[bench] type='latency' messages=15000 duration=1147 rate=871.58
[bench] type='latency' messages=16000 duration=1143 rate=874.62
[bench] type='latency' messages=17000 duration=1117 rate=894.60
[bench] type='latency' messages=18000 duration=1135 rate=880.43
[bench] type='latency' messages=19000 duration=1210 rate=826.34
[bench] type='latency' messages=20000 duration=1128 rate=886.03
[bench] type='latency' messages=21000 duration=1121 rate=891.37
[bench] type='latency' messages=22000 duration=1118 rate=893.67
[bench] type='latency' messages=23000 duration=1116 rate=895.35
```

- Memória e CPU

```
%CPU %MEM
30.9  0.4
%CPU %MEM
31.6  0.4
%CPU %MEM
32.3  0.4
%CPU %MEM
32.9  0.4
%CPU %MEM
33.6  0.4
%CPU %MEM
34.2  0.4
%CPU %MEM
34.8  0.4
%CPU %MEM
35.4  0.4
%CPU %MEM
35.9  0.4
%CPU %MEM
36.4  0.4
%CPU %MEM
36.9  0.4
%CPU %MEM
37.3  0.4
```

## 100 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.52ms    1.07ms  43.75ms   98.62%
    Req/Sec     3.43k   598.71     4.59k    62.00%
  68202 requests in 10.00s, 12.10MB read
Requests/sec:   6818.51
Transfer/sec:      1.21MB
```

- Latência

```
[bench] type='latency' messages=27000 duration=1357 rate=736.66
[bench] type='latency' messages=28000 duration=1385 rate=721.76
[bench] type='latency' messages=29000 duration=1404 rate=712.23
[bench] type='latency' messages=30000 duration=1361 rate=734.46
[bench] type='latency' messages=31000 duration=1355 rate=737.87
[bench] type='latency' messages=32000 duration=1387 rate=720.57
[bench] type='latency' messages=33000 duration=1384 rate=722.18
[bench] type='latency' messages=34000 duration=1401 rate=713.47
[bench] type='latency' messages=35000 duration=1377 rate=725.82
[bench] type='latency' messages=36000 duration=1428 rate=700.08
[bench] type='latency' messages=37000 duration=1430 rate=699.29
```

- Memória e CPU

```
%CPU %MEM
65.2  0.4
%CPU %MEM
65.7  0.4
%CPU %MEM
66.1  0.4
%CPU %MEM
66.6  0.4
%CPU %MEM
66.9  0.4
%CPU %MEM
67.2  0.4
%CPU %MEM
67.6  0.4
%CPU %MEM
67.9  0.5
%CPU %MEM
68.3  0.5
%CPU %MEM
68.7  0.5
%CPU %MEM
69.1  0.5
%CPU %MEM
69.4  0.5
%CPU %MEM
69.8  0.5
%CPU %MEM
70.1  0.5
```

## 500 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.12ms    5.56ms 134.55ms   99.18%
    Req/Sec   741.83    122.20     0.96k    72.00%
  14776 requests in 10.01s, 2.62MB read
Requests/sec:   1475.92
Transfer/sec:    268.09KB
```

- Latência

```
[bench] type='latency' messages=1000 duration=9329 rate=107.19
[bench] type='latency' messages=2000 duration=6442 rate=155.23
[bench] type='latency' messages=3000 duration=6068 rate=164.79
[bench] type='latency' messages=4000 duration=6206 rate=161.11
[bench] type='latency' messages=5000 duration=6205 rate=161.16
[bench] type='latency' messages=6000 duration=6295 rate=158.84
[bench] type='latency' messages=7000 duration=6095 rate=164.05
[bench] type='latency' messages=8000 duration=6212 rate=160.95
[bench] type='latency' messages=9000 duration=6298 rate=158.76
[bench] type='latency' messages=10000 duration=5981 rate=167.20
```

- Memória e CPU

```
%CPU %MEM
82.3  0.5
%CPU %MEM
82.6  0.5
%CPU %MEM
82.8  0.5
%CPU %MEM
83.1  0.5
%CPU %MEM
83.3  0.5
%CPU %MEM
83.6  0.5
%CPU %MEM
83.8  0.5
%CPU %MEM
84.0  0.5
%CPU %MEM
84.3  0.5
%CPU %MEM
84.5  0.5
%CPU %MEM
84.7  0.5
%CPU %MEM
84.9  0.5
%CPU %MEM
84.6  0.5
%CPU %MEM
83.6  0.5
%CPU %MEM
82.7  0.5
```

## 1000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    13.26ms    5.32ms 133.27ms   99.35%
    Req/Sec   384.73     58.71   505.00     66.00%
  7665 requests in 10.01s, 1.36MB read
Requests/sec:    765.88
Transfer/sec:    139.11KB
```

- Latência

```
[bench] type='latency' messages=1000 duration=14680 rate=68.12
[bench] type='latency' messages=2000 duration=12977 rate=77.06
[bench] type='latency' messages=3000 duration=12871 rate=77.69
[bench] type='latency' messages=4000 duration=13058 rate=76.58
[bench] type='latency' messages=5000 duration=12770 rate=78.31
[bench] type='latency' messages=6000 duration=12988 rate=76.99
[bench] type='latency' messages=7000 duration=12917 rate=77.41
[bench] type='latency' messages=8000 duration=12614 rate=79.28
```

- Memória e CPU

```
%CPU %MEM
85.2  0.6
%CPU %MEM
85.3  0.6
%CPU %MEM
85.5  0.6
%CPU %MEM
85.6  0.6
%CPU %MEM
85.7  0.6
%CPU %MEM
85.9  0.6
%CPU %MEM
86.0  0.6
%CPU %MEM
86.1  0.6
%CPU %MEM
86.2  0.6
%CPU %MEM
86.4  0.6
%CPU %MEM
86.5  0.6
%CPU %MEM
86.6  0.6
%CPU %MEM
86.7  0.6
%CPU %MEM
86.9  0.4
%CPU %MEM
87.0  0.5
%CPU %MEM
86.5  0.5
```

## 2000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    28.62ms   26.51ms 396.83ms   97.85%
    Req/Sec   195.88     38.84   252.00     61.11%
  3865 requests in 10.01s, 702.04KB read
Requests/sec:    386.11
Transfer/sec:     70.13KB
```

- Latência

```
[bench] type='latency' messages=1000 duration=27933 rate=35.80
[bench] type='latency' messages=2000 duration=24495 rate=40.82
[bench] type='latency' messages=3000 duration=25058 rate=39.91
[bench] type='latency' messages=4000 duration=24520 rate=40.78
[bench] type='latency' messages=5000 duration=25316 rate=39.50
[bench] type='latency' messages=6000 duration=24945 rate=40.09
[bench] type='latency' messages=7000 duration=26042 rate=38.40
```

- Memória e CPU

```
%CPU %MEM
92.8  0.6
%CPU %MEM
92.8  0.6
%CPU %MEM
92.9  0.6
%CPU %MEM
92.9  0.6
%CPU %MEM
93.0  0.6
%CPU %MEM
93.0  0.6
%CPU %MEM
93.0  0.6
%CPU %MEM
93.1  0.6
%CPU %MEM
93.1  0.6
%CPU %MEM
93.2  0.6
%CPU %MEM
93.2  0.6
%CPU %MEM
93.3  0.6
%CPU %MEM
93.3  0.6
%CPU %MEM
93.3  0.7
```
