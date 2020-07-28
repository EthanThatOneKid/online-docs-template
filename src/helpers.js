import marked from "marked";
import path from "path";
import fs from "fs";

export const getAnchors = (html) => {
  const pattern = /<([^\s]+).*?id="([^"]*?)".*?>(.+?)<\/\1>/gi;
  return html !== null
    ? html.match(pattern).reduce((result, cur) => {
        const [,, id, content] = pattern.exec(cur);
        result[id] = content;
        return result;
      }, {})
    : null;
};

export const getHTML = (path) => {
  const md = String(readFileSync(path));
  const html = marked(md);
  return res.statusText === "OK" ? html : null;
};

export const getDocument = (tree, path) => {
  const name = path.shift();
  return name in tree
    ? typeof tree[name] === "string"
      ? tree[name]
      : getDocument(tree[name], path)
    : null;
};

export const getHome = () => {
  return getHTML("../pages/README.md");
};

export const readdirRecursive = (dir, root = dir) => {
  const result = {};
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.lstatSync(filePath);
    const { name, ext } = path.parse(filePath);
    result[name] = fileStat.isDirectory()
      ? readdirRecursive(filePath, root)
      : ext === ".md" && name !== "README"
      ? path.relative(root, filePath).slice(0, -3)
      : undefined;
  });
  return result;
};

export const getStyle = () => {
  return String(fs.readFileSync("./style/index.css"));
}