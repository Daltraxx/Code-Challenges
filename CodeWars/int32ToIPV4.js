function int32ToIp(int32){
    const octet1 = int32 & 255;
    const octet2 = (int32 >> 8) & 255;
    const octet3 = (int32 >> 16) & 255;
    const octet4 = (int32 >> 24) & 255;

    return `${octet4}.${octet3}.${octet2}.${octet1}`;
}

function ipToInt(ip) {
    const octets = ip.split('.');
  
    let result = 0;
    for (let i = 0; i < 4; i++) {
      const num = parseInt(octets[i], 10);
      
      result = (result << 8) + num;
    }

    return result >>> 0; // Ensure the result is unsigned
  }


const ipv4 = int32ToIp(2149583361) // 128.32.10.1
// console.log(ipv4);
// console.log(ipToInt(ipv4));

let string = JSON.stringify({squirrel: false, events: ["weekend"]});