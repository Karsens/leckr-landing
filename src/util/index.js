
import { getLinkObject } from "../import";
import Settings from "../settings/index";

const getCopySettings = query => {
  const ref = (query && getLinkObject(query).ref) || "default";
  const copySettings = Settings.copy[ref] || Settings.copy.default;
  return copySettings;
};


const firstLetters = text =>
  text
    .split(" ")
    .map(word => word.substring(0, 1))
    .join("")
    .substring(0, 2);

const stringToNumber = t =>
  parseInt(
    t
      .split("")
      .map(l => l.charCodeAt(0))
      .join(""),
    10
  ) % 1000000;

const colors = "#1abc9c, #f1c40f, #f39c12, #2ecc71, #27ae60, #27ae60, #e67e22, #3498db, #2980b9, #e74c3c, #c0392b, #9b59b6, #9b59b6, #ecf0f1, #bdc3c7, #34495e, #2c3e50, #2c3e50, #7f8c8d".split(", ");
const randomColor = id => colors[id % colors.length];

export { getCopySettings, firstLetters, stringToNumber, randomColor };