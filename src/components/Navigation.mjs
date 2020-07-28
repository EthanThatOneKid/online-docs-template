import path from "path";

const Navigation = ({ pages, dirname }) => `
<ul>
${
    Object.entries(pages || {})
        .map(([title, link]) => `
        <li>
            ${
                typeof link === "string"
                    ? `<a href="${
                        path.relative(link, dirname || "")
                    }">${title}</a>`
                    : title + Navigation({ pages: link })
            }
        </li>
        `)
        .join("")
}
</ul>
`;
export default Navigation;