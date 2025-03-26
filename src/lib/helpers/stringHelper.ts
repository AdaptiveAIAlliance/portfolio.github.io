export const replaceLastOccurrence = (
  originalString: string,
  searchString: string,
  replaceString: string
) => {
  const lastIndex = originalString.lastIndexOf(searchString);

  if (lastIndex === -1) {
    return originalString; // searchString not found
  }

  const before = originalString.substring(0, lastIndex);
  const after = originalString.substring(lastIndex + searchString.length);

  return before + replaceString + after;
};
