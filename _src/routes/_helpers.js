import fetch from "node-fetch";
import marked from "marked";

export const getAnchors = (html) => {
  const pattern = /<([^\s]+).*?id="([^"]*?)".*?>(.+?)<\/\1>/gi;
  return html !== null
    ? html.match(pattern).reduce((result, cur) => {
        const [,, id, content] = pattern.exec(cur);
        result[id] = content;
        return result;
      }, {})
    : undefined;
};

export const getHTML = async (path) => {
  const url = `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/${process.env.PROJECT_NAME}/master/pages/${path}.md`;
  const res = await fetch(url);
  const md = await res.text();
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

export const getPages = async () => {
  const url = `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/${process.env.PROJECT_NAME}/master/pages.json`;
  const res = await fetch(url);
  return res.statusText === "OK"
    ? await res.json()
    : null;
};

export const getHome = async () => {
  const url = `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/${process.env.PROJECT_NAME}/master/pages/README.md`;
  const res = await fetch(url);
  const md = await res.text();
  const html = marked(md);
  return res.statusText === "OK" ? html : null;
};