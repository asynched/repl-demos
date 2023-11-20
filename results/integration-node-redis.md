# Testes de integração - Node + Redis

## 50 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.85ms    2.98ms  85.21ms   97.75%
    Req/Sec     1.87k   259.20     2.12k    88.00%
  37205 requests in 10.00s, 8.69MB read
Requests/sec:   3719.34
Transfer/sec:      0.87MB
```

- Latência

```
[bench] type='latency' messages=25000 duration=257 rate=3876.00
[bench] type='latency' messages=26000 duration=252 rate=3958.03
[bench] type='latency' messages=27000 duration=262 rate=3807.54
[bench] type='latency' messages=28000 duration=307 rate=3249.48
[bench] type='latency' messages=29000 duration=261 rate=3828.23
[bench] type='latency' messages=30000 duration=252 rate=3961.57
[bench] type='latency' messages=31000 duration=262 rate=3816.63
[bench] type='latency' messages=32000 duration=254 rate=3936.89
[bench] type='latency' messages=33000 duration=256 rate=3891.14
[bench] type='latency' messages=34000 duration=267 rate=3739.97
[bench] type='latency' messages=35000 duration=254 rate=3929.28
[bench] type='latency' messages=36000 duration=258 rate=3862.88
[bench] type='latency' messages=37000 duration=260 rate=3833.57
```

## 100 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.36ms    3.61ms  79.08ms   93.84%
    Req/Sec     1.20k   156.77     1.40k    81.00%
  23837 requests in 10.00s, 5.57MB read
Requests/sec:   2382.85
Transfer/sec:    570.12KB
```

- Latência

```
[bench] type='latency' messages=8000 duration=416 rate=2398.24
[bench] type='latency' messages=9000 duration=427 rate=2341.83
[bench] type='latency' messages=10000 duration=462 rate=2163.29
[bench] type='latency' messages=11000 duration=392 rate=2546.57
[bench] type='latency' messages=12000 duration=436 rate=2290.31
[bench] type='latency' messages=13000 duration=381 rate=2623.28
[bench] type='latency' messages=14000 duration=393 rate=2538.21
[bench] type='latency' messages=15000 duration=384 rate=2603.06
[bench] type='latency' messages=16000 duration=377 rate=2648.45
[bench] type='latency' messages=17000 duration=401 rate=2491.42
[bench] type='latency' messages=18000 duration=389 rate=2565.04
[bench] type='latency' messages=19000 duration=393 rate=2538.69
[bench] type='latency' messages=20000 duration=402 rate=2485.74
[bench] type='latency' messages=21000 duration=401 rate=2489.58
[bench] type='latency' messages=22000 duration=414 rate=2414.85
[bench] type='latency' messages=23000 duration=395 rate=2530.84
```

## 500 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.80ms   14.12ms 130.23ms   56.64%
    Req/Sec   324.88     51.46   404.00     71.50%
  6470 requests in 10.01s, 1.51MB read
Requests/sec:    646.62
Transfer/sec:    154.71KB
```

- Latência

```
[bench] type='latency' messages=2000 duration=1551 rate=644.44
[bench] type='latency' messages=3000 duration=1521 rate=657.14
[bench] type='latency' messages=4000 duration=1509 rate=662.48
[bench] type='latency' messages=5000 duration=1505 rate=664.18
[bench] type='latency' messages=6000 duration=1523 rate=656.20
```

## 1000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:3000/chat'
Running 10s test @ http://localhost:3000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    37.21ms   32.69ms 217.66ms   62.77%
    Req/Sec   141.22     49.70   210.00     58.79%
  2803 requests in 10.01s, 670.64KB read
Requests/sec:    279.89
Transfer/sec:     66.97KB
```

- Latência

```
[bench] type='latency' messages=16000 duration=3804 rate=262.83
[bench] type='latency' messages=17000 duration=3766 rate=265.48
[bench] type='latency' messages=18000 duration=3811 rate=262.37
[bench] type='latency' messages=19000 duration=3751 rate=266.54
[bench] type='latency' messages=20000 duration=3882 rate=257.55
[bench] type='latency' messages=21000 duration=3796 rate=263.38
[bench] type='latency' messages=22000 duration=3843 rate=260.19
[bench] type='latency' messages=23000 duration=3766 rate=265.53
[bench] type='latency' messages=24000 duration=3800 rate=263.10
[bench] type='latency' messages=25000 duration=3699 rate=270.34
[bench] type='latency' messages=26000 duration=3789 rate=263.89
[bench] type='latency' messages=27000 duration=3986 rate=250.86
[bench] type='latency' messages=28000 duration=3868 rate=258.52
[bench] type='latency' messages=29000 duration=3938 rate=253.90
[bench] type='latency' messages=30000 duration=3850 rate=259.71
[bench] type='latency' messages=31000 duration=3795 rate=263.46
```
