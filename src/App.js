import {
  Navigation,
  Anchors
} from "./components";

export default ({ title, pages, content, anchors, style }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="style.css">
  <style>${style}</style>
</head>
<body>
  ${Navigation({ pages })}
  ${content}
  ${Anchors({ anchors })}
</body>
</html>
`;

