export default ({ anchors }) => `
<ul>
    ${
        Object.entries(anchors)
            .map(([id, content]) => `
            <li>
                <a href="#${id}">${content}</a>
            </li>
            `)
            .join("")
    }
</ul>
`;