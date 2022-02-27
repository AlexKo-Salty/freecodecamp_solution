function mutation(arr) {
  let stringArray = arr[0].toLowerCase().split("");
  for (let i = 0; i < arr[1].length; i++)
  {
    if (!stringArray.includes(arr[1][i].toLowerCase()))
    {
      console.log(arr[1][i])
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);