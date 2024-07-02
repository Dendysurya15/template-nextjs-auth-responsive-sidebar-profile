export const getInitials = (name) => {
  if (!name) return "NA"; // default initials if name is not provided
  const words = name.trim().split(" ");
  if (words.length > 1) {
    return words[0][0] + words[1][0];
  }
  return name.length > 1 ? name[0] + name[1] : name[0];
};
