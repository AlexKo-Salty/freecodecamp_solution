function truthCheck(collection, pre) {
  console.log(collection.filter(function(obj){
    return obj.hasOwnProperty(pre) && obj[pre];
  }))
  return collection.filter(function(obj){
    return obj.hasOwnProperty(pre) && obj[pre];
  }).length === collection.length;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");