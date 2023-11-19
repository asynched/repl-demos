# Python

1. 50 clientes

```
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.78ms    2.14ms  40.26ms   75.05%
    Req/Sec     1.07k   176.71     1.32k    70.00%
  21242 requests in 10.01s, 2.84MB read
Requests/sec:   2121.99
Transfer/sec:    290.12KB
```

2. 100 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     5.11ms    3.46ms  91.84ms   92.03%
    Req/Sec     1.02k   173.50     1.24k    79.50%
  20398 requests in 10.01s, 2.72MB read
Requests/sec:   2037.81
Transfer/sec:    278.61KB
```

3. 500 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     6.71ms    4.21ms  46.54ms   82.08%
    Req/Sec   794.43    150.15     1.04k    74.50%
  15819 requests in 10.00s, 2.11MB read
Requests/sec:   1581.14
Transfer/sec:    216.17KB
```

4. 1000 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.97ms    8.28ms  85.12ms   83.87%
    Req/Sec   580.09    155.67     0.89k    69.50%
  11560 requests in 10.01s, 1.54MB read
Requests/sec:   1154.46
Transfer/sec:    157.84KB
```

5. 2000 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    25.96ms   21.10ms 183.93ms   70.16%
    Req/Sec   206.38     80.11   430.00     66.50%
  4115 requests in 10.01s, 562.60KB read
Requests/sec:    410.95
Transfer/sec:     56.18KB
```

## NodeJS

1. 50 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.31ms    1.18ms  35.62ms   90.35%
    Req/Sec     2.24k   556.95     4.08k    74.00%
  44568 requests in 10.01s, 7.91MB read
Requests/sec:   4450.88
Transfer/sec:    808.46KB
```

Latência

```
send=33000 duration=1067ms rate=30.93msg/ms
send=34000 duration=1078ms rate=31.54msg/ms
send=35000 duration=1080ms rate=32.41msg/ms
send=36000 duration=1096ms rate=32.85msg/ms
send=37000 duration=1070ms rate=34.58msg/ms
send=38000 duration=1086ms rate=34.99msg/ms
send=39000 duration=1128ms rate=34.57msg/ms
send=40000 duration=1076ms rate=37.17msg/ms
send=41000 duration=1092ms rate=37.55msg/ms
send=42000 duration=1082ms rate=38.82msg/ms
```

Recursos

```
%CPU %MEM
51.7  0.4
%CPU %MEM
51.8  0.4
%CPU %MEM
52.0  0.4
%CPU %MEM
52.2  0.4
%CPU %MEM
52.4  0.4
%CPU %MEM
52.6  0.4
%CPU %MEM
52.7  0.4
%CPU %MEM
```

2. 100 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.32ms    1.54ms  56.63ms   98.12%
    Req/Sec     2.23k   416.40     3.35k    74.50%
  44485 requests in 10.01s, 7.89MB read
Requests/sec:   4446.10
Transfer/sec:    807.59KB
```

3. 500 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.91ms    7.92ms 168.06ms   98.95%
    Req/Sec   604.28     97.02   808.00     76.00%
  12035 requests in 10.01s, 2.13MB read
Requests/sec:   1202.64
Transfer/sec:    218.45KB
```

4. 1000 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.75ms   11.58ms 223.79ms   96.20%
    Req/Sec   283.05     63.04   400.00     69.35%
  5615 requests in 10.01s, 1.00MB read
Requests/sec:    560.88
Transfer/sec:    101.88KB
```

5. 2000 clientes

```
wrk -s benchmark.lua 'http://localhost:8000/chat'
Running 10s test @ http://localhost:8000/chat
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    36.94ms   22.38ms 358.59ms   95.26%
    Req/Sec   142.87     36.77   202.00     63.32%
  2835 requests in 10.01s, 514.95KB read
Requests/sec:    283.19
Transfer/sec:     51.44KB
```

## REPL

1. 50 clientes

RP/s

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.71ms    8.32ms 102.03ms   96.59%
    Req/Sec    48.27k    20.93k   72.64k    71.50%
  963091 requests in 10.03s, 282.89MB read
Requests/sec:  96031.02
Transfer/sec:     28.21MB
```

2. 100 clientes

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.70ms   24.25ms 207.94ms   92.69%
    Req/Sec    21.90k    14.11k   51.06k    56.99%
  429046 requests in 10.01s, 126.02MB read
Requests/sec:  42843.89
Transfer/sec:     12.58MB
```

3. 500 clientes

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    47.92ms   74.79ms 384.29ms   83.63%
    Req/Sec     3.04k     7.29k   69.80k    93.88%
  50911 requests in 10.06s, 14.95MB read
Requests/sec:   5061.42
Transfer/sec:      1.49MB
```

4. 1000 clientes

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    91.09ms  132.33ms 710.53ms   82.38%
    Req/Sec     2.82k     6.77k   36.32k    92.86%
  31450 requests in 10.03s, 9.24MB read
Requests/sec:   3135.29
Transfer/sec:      0.92MB
```

5. 2000 clientes

```
wrk -s benchmark.lua 'http://localhost:9000/topics/demo'
Running 10s test @ http://localhost:9000/topics/demo
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   226.79ms  356.49ms   1.71s    84.13%
    Req/Sec     2.75k     7.00k   30.96k    94.44%
  19113 requests in 10.04s, 5.61MB read
Requests/sec:   1903.74
Transfer/sec:    572.61KB
```
