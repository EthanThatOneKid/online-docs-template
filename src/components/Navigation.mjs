const Navigation = ({ pages, base }) => `
<ul class="list-disc">
${
    Object.entries(pages || {})
        .map(([title, link]) => `
        <li>
            ${
                typeof link === "string"
                    ? `<a href="${new URL(link, base)}">${title}</a>`
                    : title + Navigation({ pages: link, base })
            }
        </li>
        `)
        .join("")
}
</ul>
`;

export default Navigation;