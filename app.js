import {createConnection}  from './build/package/index.js'

console.log(createConnection)

createConnection({
  type: "oracle",
  url: "oracle ://SYSDBA:SYSDBA@adfc9b64d5bfe417d8f3b21552ebf4eb-efba96f50ef7fa67.elb.cn-north-1.amazonaws.com.cn:5236/authing-server"
});