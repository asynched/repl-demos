pid=$1

echo "[INFO] Watching process $pid"
while true
do
  ps -p $pid -o %cpu,%mem
  sleep 1
done