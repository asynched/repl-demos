# repl

## 50 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   573.75us    1.94ms  31.19ms   94.09%
    Req/Sec    53.62k    18.60k   74.97k    79.00%
  1067115 requests in 10.01s, 313.45MB read
Requests/sec: 106598.16
Transfer/sec:     31.31MB
```

- Latência

```
[bench] type='latency' messages=121000 duration=110 rate=9022.71
[bench] type='latency' messages=122000 duration=105 rate=9487.53
[bench] type='latency' messages=123000 duration=81 rate=12250.36
[bench] type='latency' messages=124000 duration=90 rate=11068.88
[bench] type='latency' messages=125000 duration=138 rate=7243.17
[bench] type='latency' messages=126000 duration=107 rate=9301.98
[bench] type='latency' messages=127000 duration=112 rate=8884.45
[bench] type='latency' messages=128000 duration=103 rate=9672.66
[bench] type='latency' messages=129000 duration=22 rate=44077.03
[bench] type='latency' messages=130000 duration=95 rate=10430.28
[bench] type='latency' messages=131000 duration=114 rate=8757.90
[bench] type='latency' messages=132000 duration=112 rate=8908.86
[bench] type='latency' messages=133000 duration=86 rate=11575.50
[bench] type='latency' messages=134000 duration=80 rate=12393.76
[bench] type='latency' messages=135000 duration=119 rate=8403.27
[bench] type='latency' messages=136000 duration=134 rate=7427.06
[bench] type='latency' messages=137000 duration=76 rate=13155.59
```

- Memória e CPU

```
%CPU %MEM
82.3  1.6
%CPU %MEM
94.7  2.1
%CPU %MEM
 106  2.3
%CPU %MEM
 117  2.7
%CPU %MEM
 128  2.9
%CPU %MEM
 134  3.0
%CPU %MEM
 138  3.0
%CPU %MEM
 144  3.0
```

## 100 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.20ms   11.85ms 124.41ms   94.98%
    Req/Sec    28.61k    15.09k   57.12k    66.00%
  569455 requests in 10.00s, 167.27MB read
Requests/sec:  56927.73
Transfer/sec:     16.72MB
```

- Latência

```
[bench] type='latency' messages=111000 duration=68 rate=14574.96
[bench] type='latency' messages=112000 duration=110 rate=9019.21
[bench] type='latency' messages=113000 duration=109 rate=9153.47
[bench] type='latency' messages=114000 duration=201 rate=4974.75
[bench] type='latency' messages=115000 duration=147 rate=6787.28
[bench] type='latency' messages=116000 duration=91 rate=10888.92
[bench] type='latency' messages=117000 duration=228 rate=4367.47
[bench] type='latency' messages=118000 duration=195 rate=5122.47
[bench] type='latency' messages=119000 duration=59 rate=16894.14
[bench] type='latency' messages=120000 duration=85 rate=11708.62
[bench] type='latency' messages=121000 duration=209 rate=4780.86
[bench] type='latency' messages=122000 duration=188 rate=5309.72
[bench] type='latency' messages=123000 duration=90 rate=11041.42
[bench] type='latency' messages=124000 duration=141 rate=7066.10
[bench] type='latency' messages=125000 duration=181 rate=5510.59
[bench] type='latency' messages=126000 duration=104 rate=9613.36
[bench] type='latency' messages=127000 duration=127 rate=7848.60
[bench] type='latency' messages=128000 duration=40 rate=24943.35
[bench] type='latency' messages=129000 duration=77 rate=12876.86
[bench] type='latency' messages=130000 duration=110 rate=9071.84
```

- Memória e CPU

```
%CPU %MEM
85.0  0.6
%CPU %MEM
 109  0.6
%CPU %MEM
 129  0.9
%CPU %MEM
 148  1.1
%CPU %MEM
 165  1.2
%CPU %MEM
 181  1.4
%CPU %MEM
 196  1.5
%CPU %MEM
 202  1.7
%CPU %MEM
 210  1.8
%CPU %MEM
 219  1.8
%CPU %MEM
 226  1.8
%CPU %MEM
 234  1.8
%CPU %MEM
 231  1.8
```

## 500 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    28.61ms   49.36ms 387.43ms   86.22%
    Req/Sec     4.72k     8.93k   62.48k    92.97%
  95575 requests in 10.02s, 28.07MB read
Requests/sec:   9534.40
Transfer/sec:      2.80MB
```

- Latência

```
[bench] type='latency' messages=67000 duration=251 rate=3976.80
[bench] type='latency' messages=68000 duration=130 rate=7682.94
[bench] type='latency' messages=69000 duration=219 rate=4550.68
[bench] type='latency' messages=70000 duration=109 rate=9135.12
[bench] type='latency' messages=71000 duration=229 rate=4356.80
[bench] type='latency' messages=72000 duration=210 rate=4741.13
[bench] type='latency' messages=73000 duration=139 rate=7176.18
[bench] type='latency' messages=74000 duration=143 rate=6945.19
[bench] type='latency' messages=75000 duration=214 rate=4657.79
[bench] type='latency' messages=76000 duration=237 rate=4213.94
[bench] type='latency' messages=77000 duration=201 rate=4952.06
[bench] type='latency' messages=78000 duration=267 rate=3735.77
[bench] type='latency' messages=79000 duration=181 rate=5495.30
[bench] type='latency' messages=80000 duration=146 rate=6842.08
[bench] type='latency' messages=81000 duration=220 rate=4527.20
[bench] type='latency' messages=82000 duration=239 rate=4176.03
[bench] type='latency' messages=83000 duration=150 rate=6633.97
[bench] type='latency' messages=84000 duration=48 rate=20445.59
[bench] type='latency' messages=85000 duration=361 rate=2763.71
[bench] type='latency' messages=86000 duration=66 rate=14982.30
```

- Memória e CPU

```
%CPU %MEM
 258  0.5
%CPU %MEM
 273  0.5
%CPU %MEM
 289  0.5
%CPU %MEM
 303  0.5
%CPU %MEM
 317  0.5
%CPU %MEM
 329  0.5
%CPU %MEM
 340  0.4
%CPU %MEM
 351  0.4
%CPU %MEM
 356  0.4
```

## 1000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    79.48ms  119.31ms 613.30ms   83.13%
    Req/Sec     3.29k     9.12k   57.35k    92.11%
  46886 requests in 10.05s, 13.77MB read
Requests/sec:   4666.60
Transfer/sec:      1.37MB
```

- Latência

```
[bench] type='latency' messages=27000 duration=527 rate=1894.37
[bench] type='latency' messages=28000 duration=241 rate=4141.94
[bench] type='latency' messages=29000 duration=401 rate=2492.63
[bench] type='latency' messages=30000 duration=221 rate=4524.04
[bench] type='latency' messages=31000 duration=374 rate=2666.76
[bench] type='latency' messages=32000 duration=451 rate=2212.51
[bench] type='latency' messages=33000 duration=268 rate=3718.51
[bench] type='latency' messages=34000 duration=493 rate=2024.57
[bench] type='latency' messages=35000 duration=327 rate=3055.10
[bench] type='latency' messages=36000 duration=350 rate=2849.16
[bench] type='latency' messages=37000 duration=193 rate=5162.36
[bench] type='latency' messages=38000 duration=563 rate=1774.31
[bench] type='latency' messages=39000 duration=454 rate=2199.52
[bench] type='latency' messages=40000 duration=234 rate=4260.09
[bench] type='latency' messages=41000 duration=249 rate=4015.19
[bench] type='latency' messages=42000 duration=497 rate=2009.59
[bench] type='latency' messages=43000 duration=157 rate=6337.34
[bench] type='latency' messages=44000 duration=3 rate=254048.90
[bench] type='latency' messages=45000 duration=388 rate=2573.11
[bench] type='latency' messages=46000 duration=292 rate=3419.20
```

- Memória e CPU

```
%CPU %MEM
 199  0.7
%CPU %MEM
 216  0.7
%CPU %MEM
 233  0.7
%CPU %MEM
 248  0.6
%CPU %MEM
 262  0.7
%CPU %MEM
 275  0.6
%CPU %MEM
 288  0.7
%CPU %MEM
 299  0.6
%CPU %MEM
 300  0.6
%CPU %MEM
 295  0.5
%CPU %MEM
 286  0.5
```

## 2000 clientes

- RP/s

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   162.69ms  230.60ms   1.03s    81.49%
    Req/Sec     3.17k     7.98k   38.51k    88.89%
  25204 requests in 10.02s, 7.40MB read
Requests/sec:   2514.47
Transfer/sec:    756.30KB
```

- Latência

```
[bench] type='latency' messages=1000 duration=2829 rate=353.41
[bench] type='latency' messages=2000 duration=843 rate=1185.15
[bench] type='latency' messages=3000 duration=902 rate=1108.05
[bench] type='latency' messages=4000 duration=879 rate=1136.46
[bench] type='latency' messages=5000 duration=143 rate=6961.22
[bench] type='latency' messages=6000 duration=556 rate=1797.84
[bench] type='latency' messages=7000 duration=441 rate=2267.33
[bench] type='latency' messages=8000 duration=711 rate=1406.05
[bench] type='latency' messages=9000 duration=1224 rate=816.92
[bench] type='latency' messages=10000 duration=352 rate=2839.04
[bench] type='latency' messages=11000 duration=1114 rate=897.22
[bench] type='latency' messages=12000 duration=244 rate=4085.30
[bench] type='latency' messages=13000 duration=733 rate=1364.02
[bench] type='latency' messages=14000 duration=526 rate=1900.34
[bench] type='latency' messages=15000 duration=855 rate=1168.52
[bench] type='latency' messages=16000 duration=900 rate=1110.52
[bench] type='latency' messages=17000 duration=462 rate=2160.63
[bench] type='latency' messages=18000 duration=640 rate=1560.78
[bench] type='latency' messages=19000 duration=776 rate=1288.21
[bench] type='latency' messages=20000 duration=403 rate=2476.18
[bench] type='latency' messages=21000 duration=828 rate=1206.45
```

- Memória e CPU

```
%CPU %MEM
 159  1.1
%CPU %MEM
 179  1.0
%CPU %MEM
 197  1.1
%CPU %MEM
 214  1.1
%CPU %MEM
 229  1.0
%CPU %MEM
 243  1.1
%CPU %MEM
 256  1.1
%CPU %MEM
 268  1.1
```
