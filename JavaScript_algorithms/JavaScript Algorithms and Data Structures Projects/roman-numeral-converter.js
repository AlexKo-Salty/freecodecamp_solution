function convertToRoman(num) {
//index is used to define the position of digit
  let romanNo = "", index = 0;
  while (num) {
    let last = num % 10;
    let lastRomanNo = "";
    if (last !== 0){
      switch (index)
      {
        case 0:
          if (last == 9) {
            lastRomanNo = "IX";
          } else if (last <= 3) {
            while (last > 0) {
              lastRomanNo = lastRomanNo + "I";
              last--;
            }
          } else if (last <= 8 && last != 4) {
            lastRomanNo = "V";
            while (last > 5) {
              lastRomanNo = lastRomanNo + "I";
              last--;
            }
          } else {
            lastRomanNo = "IV";
          }
          break;
        case 1:
          if (last == 9) {
            lastRomanNo = "XC";
          } else if (last <= 3) {
            while (last > 0) {
              lastRomanNo = lastRomanNo + "X";
              last--;
            }
          } else if (last <= 8 && last != 4) {
            lastRomanNo = "L";
            while (last > 5) {
              lastRomanNo = lastRomanNo + "X";
              last--;
            }
          } else {
            lastRomanNo = "XL";
          }
          break;
        case 2:
          if (last == 9) {
            lastRomanNo = "CM";
          } else if (last <= 3) {
            while (last > 0) {
              lastRomanNo = lastRomanNo + "C";
              last--;
            }
          } else if (last <= 8 && last != 4) {
            lastRomanNo = "D";
            while (last > 5) {
              lastRomanNo = lastRomanNo + "C";
              last--;
            }
          } else {
            lastRomanNo = "CD";
          }
          break;
        case 3:
          while (last > 0) {
            lastRomanNo = lastRomanNo + "M";
            last--;
          }
          break;
      }
    }
    console.log(lastRomanNo);
    romanNo = lastRomanNo + romanNo;
    num = Math.floor(num / 10);
    index++;
  }

  return romanNo;
}

console.log(convertToRoman(1999));