import * as commonmark from "commonmark";
import moment from "moment";

export const commonmarkReader = new commonmark.Parser();

export type TOC = { text: string; level: number }[];
export const headingLevelColors = {
  1: "green",
  2: "blue",
  3: "yellow",
  4: "red",
  5: "indigo",
};

export const getTocFromMDText = (text: string) => {
  const tree = commonmarkReader.parse(text);
  const walker = tree.walker();
  const toc: TOC = [];
  let event;
  while ((event = walker.next())) {
    if (event.entering && event.node.type === "heading") {
      let text = ""; // text for heading so we can accum
      while ((event = walker.next())) {
        if (!event.entering && event.node.type === "heading") {
          if (text.length > 0) {
            toc.push({ text, level: event.node.level }); // only take non-empty headings
          }
          break;
        } else if (event.node.type === "text") {
          text += event.node.literal;
        }
      }
    }
  }
  return toc;
};

export const snakeCase = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replaceAll(/(\?|!|:|')/g, "")
    .split(" ")
    .join("-");
};

// wrapper
export const dateToText = (date: Date) => {
  return moment(date).format("MM/YYYY");
};
