import {
  getAnchors,
  getHome,
  getPages
} from "./_helpers.js";

export async function get(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const pages = await getPages();
  if (pages !== null) {
    const html = await getHome();
    if (html !== null) {
      res.status = 200;
      const anchors = getAnchors(html);
      return res.end(JSON.stringify({ pages, html, anchors }));
    }
    res.status = 404;
    const message = `No such home (README) document.`;
    return res.end(JSON.stringify({ error: { message } }));
  }
  res.status = 500;
  const message = `Documentation could not be found.`;
  return res.end(JSON.stringify({ error: { message } }));
}