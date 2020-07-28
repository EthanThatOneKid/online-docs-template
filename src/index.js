import fs from "fs";
import path from "path";
import App from "./App";
import {
  readdirRecursive,
  getAnchors,
  getDocument,
  getHTML,
  getHome
} from "./helpers";

const dist = "../dist/";
const root = path.join(__dirname, "../pages");
const pages = readdirRecursive(root);

const createPage = (title, location) => {
  const doc = getDocument(pages, `${location}.md`);
  const content = getHTML(doc);
  const anchors = getAnchors(content);
  const savePath = path.join(__dirname, dist, location);
  fs.mkdirSync(savePath, { recursive: true });
  fs.writeFileSync(`${savePath}/index.html`, App({ title, pages, content, anchors }));
};

const make = (pages, root, depth = 0) => {
  Object.entries(pages)
    .forEach(([title, location]) => {
      // recursively createPage and make
    });
};