import {
  getAnchors,
  getHTML,
  getDocument,
  getPages
} from "../_helpers.js";

export async function get(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const { path } = req.params;
  const pages = await getPages();
  if (pages !== null) {
    const doc = getDocument(pages, path);
    if (doc !== null) {
      res.status = 200;
      const html = await getHTML(doc);
      const anchors = getAnchors(html);
      return res.end(JSON.stringify({ pages, html, anchors }));
    }
    res.status = 404;
    const message = `No such '${path.join("/")}' document.`;
    return res.end(JSON.stringify({ error: { message } }));
  }
  res.status = 500;
  const message = `Documentation could not be found.`;
  return res.end(JSON.stringify({ error: { message } }));
}