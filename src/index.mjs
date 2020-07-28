import fs from "fs";
import path from "path";
import App from "./App.mjs";
import {
  readdirRecursive,
  getAnchors,
  getDocument,
  getHTML,
  getStyle,
  getHome
} from "./helpers.mjs";
import { fileURLToPath } from 'url';

const savePage = ({ savePath, title, content, anchors }) => {
  fs.mkdirSync(savePath, { recursive: true });
  fs.writeFileSync(
    path.join(savePath, "index.html"),
    App({ title, pages, content, anchors, style, dirname: savePath })
  );
};

const createHome = (root) => {
  const content = getHome(root);
  savePage({
    savePath: dist,
    title: "Home",
    anchors: getAnchors(content),
    content
  });
};

const createPage = (title, location, root) => {
  const doc = getDocument(pages, location.split("\\"));
  const content = getHTML(path.join(root, `${doc}.md`));
  const anchors = getAnchors(content);
  const savePath = path.join(dist, location);
  savePage({ savePath, title, content, anchors });
};

const createApp = (pages, dir, root = dir) => {
  Object.entries(pages || {})
    .forEach(([title, location]) => {
      typeof location === "string"
        ? createPage(title, location, root)
        : createApp(location, path.join(dir, title), root);
    });
};

const dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(dirname, "../dist");
const root = path.join(dirname, "../pages");
const pages = readdirRecursive(root);
const style = getStyle(dirname);

try {
  fs.rmdirSync(dist, { recursive: true });
  fs.mkdirSync(dist);
} catch (error) {
  console.log({ error });
}

createApp(pages, root);
createHome(root);