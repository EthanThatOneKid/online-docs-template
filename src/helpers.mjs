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
  const md = String(fs.readFileSync(path));
  const html = marked(md);
  return html;
};

export const getDocument = (tree, leaves) => {
  const name = leaves.shift();
  return name in tree
    ? typeof tree[name] === "string"
      ? tree[name]
      : getDocument(tree[name], leaves)
    : null;
};

export const getHome = (root) => {
  return getHTML(path.join(root, "../pages/README.md"));
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

export const getStyle = (root) => {
  return String(fs.readFileSync(path.join(root, "./style/index.css")));
}