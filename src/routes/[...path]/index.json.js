import fetch from "node-fetch";
import marked from "marked";

// Helpers
const getHTML = (path) => {
  const url = `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/${process.env.PROJECT_NAME}/master/pages/${path}`;
  const res = await fetch(url);
  return res.statusText === "OK"
    ? marked(await res.text())
    : null;
};

const getDocument = (tree, path) => {
  const name = path.shift();
  return name in tree
    ? typeof tree[name] === "string"
      ? tree[name]
      : getDocument(tree[name], path)
    : null;
};

const getPages = async () => {
  const url = `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/${process.env.PROJECT_NAME}/master/pages.json`;
  const res = await fetch(url);
  return res.statusText === "OK"
    ? await res.json()
    : null;
};

// REST Server
export async function get(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const { path } = req.params;
  const pages = await getPages();
  if (pages !== null) {
    const doc = getDocument(pages, path);
    if (doc !== null) {
      res.status = 200;
      const html = getHTML(doc);
      return res.end(JSON.stringify({ pages, html }));
    }
    res.status = 404;
    const message = `No such '${path.join("/")}' document.`;
    return res.end({ error: { message } });
  }
  res.status = 500;
  const message = `Documentation could not be found.`;
  return res.end({ error: { message } });
}