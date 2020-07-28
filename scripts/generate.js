const fs = require('fs');
const path = require('path');

const readdirRecursive = (dir, root = dir) => {
  const result = {};
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.lstatSync(filePath);
    const { name, ext } = path.parse(filePath);
    result[name] = fileStat.isDirectory()
      ? readdirRecursive(filePath, root)
      : ext === ".md" && name !== "README"
      ? path.relative(root, filePath)
      : undefined;
  });
  return result;
};

const root = path.join(__dirname, "../pages");
const pages = readdirRecursive(root);
const serializedPages = JSON.stringify(pages, null, 2);
fs.writeFileSync(path.join(__dirname, "../pages.json"), serializedPages);
