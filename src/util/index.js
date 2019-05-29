const getLinkObject = query => {
  const linkDetails = query && query.substring(1, query.length).split("&");

  const linkObject = linkDetails
    && linkDetails.reduce(
      (result, detail) => ({
        ...result,
        [detail.split("=")[0]]: detail.split("=")[1]
      }),
      {}
    );

  return linkObject;
};

const getObjectLink = queryObject => Object.keys(queryObject)
  .map(key => ({ key, value: queryObject[key] }))
  .map(({ key, value }, index) => `${index === 0 ? "?" : "&"}${key}=${value}`)
  .join("");

const firstLetters = text => text
  .split(" ")
  .map(word => word.substring(0, 1))
  .join("")
  .substring(0, 2);

const stringToNumber = t => parseInt(
  t
    .split("")
    .map(l => l.charCodeAt(0))
    .join(""),
  10
) % 1000000;

const colors = "#1abc9c, #f1c40f, #f39c12, #2ecc71, #27ae60, #27ae60, #e67e22, #3498db, #2980b9, #e74c3c, #c0392b, #9b59b6, #9b59b6, #ecf0f1, #bdc3c7, #34495e, #2c3e50, #2c3e50, #7f8c8d".split(
  ", "
);
const randomColor = id => colors[id % colors.length];

export {
  getObjectLink, getLinkObject, firstLetters, stringToNumber, randomColor
};
