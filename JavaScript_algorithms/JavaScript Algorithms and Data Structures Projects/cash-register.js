function checkCashRegister(price, cash, cid) {
  const moneyAmount = { "PENNY":0.01, "NICKEL":0.05,"DIME":0.1, "QUARTER": 0.25, "ONE":1, "FIVE":5,"TEN":10,"TWENTY":20, "ONE HUNDRED":100}
  const cloneCid = JSON.parse(JSON.stringify(cid));
  let changeAmount = cash - price, change = [];
  cid.sort(function(a,b){
    return moneyAmount[b[0]] - moneyAmount[a[0]];
  });

  cid.map(function(x){
    if (moneyAmount[x[0]] <= changeAmount && changeAmount > 0)
    {
      let count = 0;
      while (x[1] > 0 && changeAmount - moneyAmount[x[0]] >= 0)
      {
        changeAmount = changeAmount - moneyAmount[x[0]];
        x[1] = x[1] - moneyAmount[x[0]];
        changeAmount = changeAmount.toFixed(2);
        x[1] = x[1].toFixed(2);
        count++;
      }

      change.unshift([x[0],  moneyAmount[x[0]] * count]);
    }
  })

  if (changeAmount > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (!cid.some(item => item[1] > 0)) {
     return {status: "CLOSED", change: cloneCid};
  } else {
    return {status: "OPEN", change: change.sort(function(a,b){
    return moneyAmount[b[0]] - moneyAmount[a[0]];
  })};
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));