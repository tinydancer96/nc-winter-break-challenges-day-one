function substringTest(str1, str2) {
  const splitStrOne = str1.toLowerCase().split("");
  for (i = 0; i < splitStrOne.length; i++) {
    if (splitStrOne[i + 1] !== undefined) {
      const splitStrOneRegexp = new RegExp(
        `${splitStrOne[i]}${splitStrOne[i + 1]}`
      );
      if (str2.match(splitStrOneRegexp)) {
        return true;
      }
    }
  }
  return false;
}
