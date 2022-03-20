function telephoneCheck(str) {
  let nostr = str.match(/\d/g).join('')
  let phoneRegex = /^\d?(\s?\(?)\d{3}\)?(\s|-)?\d{3}(\s|-)?\d{4}$/g;
  let isCompleted = (str.includes('(') || str.includes(')')) ? (str.includes('(') && str.includes(')')) : true
  return (((nostr.length == 10) || (nostr.length == 11 && nostr.slice(0, 1) == "1")) && phoneRegex.test(str) && isCompleted);
}

telephoneCheck("1 555)555-5555");