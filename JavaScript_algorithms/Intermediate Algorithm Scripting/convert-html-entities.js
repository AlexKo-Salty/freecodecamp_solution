function convertHTML(str) {
  return str.split('').map(function(x){
    switch(x) {
      case "&":
        return "&amp;";
        break;
      case "<":
        return "&lt;";
        break;
      case ">":
        return "&gt;";
        break;
      case '"':
        return "&quot;";
        break;
      case "'":
        return "&apos;";
        break;
      default:
        return x;
    }
  }).join('');
}

convertHTML("Dolce & Gabbana");