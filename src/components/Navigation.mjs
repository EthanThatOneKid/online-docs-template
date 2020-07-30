const Navigation = ({ pages, base }) => `
<ul class="list-disc">
${
    Object.entries(pages || {})
        .map(([title, link]) => `
        <li class="ml-3">
            ${
                typeof link === "string"
                    ? `<a class="hover:underline" href="${new URL(link, base)}">${title}</a>`
                    : title + Navigation({ pages: link, base })
            }
        </li>
        `)
        .join("")
}
</ul>
`;

export default Navigation;