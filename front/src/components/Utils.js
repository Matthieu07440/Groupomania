export const dateParser = (num) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let timestamp = Date.parse(num);

  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

  return date.toString();
};

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "String" && value.trim().length === 0)
  );
};

export const timeStampParser = (num) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  let date = new Date(num).toLocaleDateString("fr-FR", options);

  return date.toString();
};
