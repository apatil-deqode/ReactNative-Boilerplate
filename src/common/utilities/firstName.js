export const firstName = fullName => {
  if (!fullName) {
    return '';
  }

  return fullName.split(' ')[0];
};
