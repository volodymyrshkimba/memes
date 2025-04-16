export const titleValidation = (value) => {
  if (!value) {
    return "Title is required";
  }
  if (value.length < 3) {
    return "Title must be at least 3 characters long";
  }
  if (value.length > 100) {
    return "Title must be less than or equal to 100 characters";
  }
  return null;
};

export const imageURLValidation = (value) => {
  if (!value) {
    return "Image URL is required";
  }

  const isValidUrl = /^https?:\/\/.*\.(jpg|jpeg)$/i.test(value);
  if (!isValidUrl) {
    return "Enter a valid JPG image URL (must end with .jpg or .jpeg)";
  }

  return null;
};

export const likesValidation = (value) => {
  const num = Number(value);

  if (isNaN(num)) {
    return "Likes must be a number";
  }

  if (!Number.isInteger(num)) {
    return "Likes must be an integer";
  }

  if (num < 0 || num > 99) {
    return "Likes must be between 0 and 99";
  }

  return null;
};
