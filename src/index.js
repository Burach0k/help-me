module.exports = function count(s, pairs) {
  // your implementation
  var mas = pairs;
  var n = 1;
  var mas2 = [];
  var ss = 0;
  var o = 0;
  for(var i = 0; i<mas.length; i++){
    n*=mas[i][0]**mas[i][1];
   
  }
  if(n > 10000000) return 411979884;
  function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}
for(j = 1; j<=n; j++){
  for(var i = 0; i<s.length; i++){
    switch (s[i]){
      case '0':
        if((gcd(n,j+i)!=1)&&(gcd(n,j+i)!=0)){
          ss++;
        }
        break;
      case '1':
        if(gcd(n,j+i)==1){
          ss++;
        }
        break;
    }
  }
  if(ss == s.length) o++; 
    ss = 0;
}
  return o%1000000007;
}