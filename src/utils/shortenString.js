export function shortenString(inputString, maxLength) {
  if (inputString.length <= maxLength) return inputString;
  else {
    const words = inputString.split(" ");

    let shortenedString = "";
    let currentLength = 0;

    for (const word of words)
      if (currentLength + word.length + 1 <= maxLength) {
        shortenedString += word + " ";
        currentLength += word.length + 1;
      } else break;
    shortenedString = shortenedString.trim() + "...";
    return shortenedString;
  }
}
