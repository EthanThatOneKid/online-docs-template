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
import dotenv from "dotenv";
dotenv.config();

const savePage = ({ location, title, content }) => {
  const savePath = path.join(dist, location === "README" ? "" : location);
  fs.mkdirSync(savePath, { recursive: true });
  fs.writeFileSync(
    path.join(savePath, "index.html"),
    App({ title, pages, content, style, base, location })
  );
  console.log(`Saved '${title}' as '${path.join(savePath, "index.html")}'!`);
};

const createHome = (root) => {
  const content = getHome(root);
  savePage({
    location: "README",
    title: "",
    anchors: getAnchors(content),
    content
  });
};

const createPage = (title, location, root) => {
  const doc = getDocument(pages, location.split(/\\|\//g));
  if (doc !== null) {
    const content = getHTML(path.join(root, `${doc}.md`));
    savePage({ location, title, content });
  }
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
const dist = path.join(dirname, `../dist`);
const root = path.join(dirname, "../pages");
const pages = readdirRecursive(root);
const style = getStyle(dirname);
const base = process.env.npm_lifecycle_event !== "dev"
  ? `https://${process.env.GH_USERNAME}.github.io/${process.env.PROJECT_NAME}/`
  : "http://localhost:3000/";

try {
  fs.rmdirSync(dist, { recursive: true });
  fs.mkdirSync(dist, { recursive: true });
  console.log({ pages });
} catch (error) {
  console.log({ error });
}

createApp(pages, root);
createHome(root);