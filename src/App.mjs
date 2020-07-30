// import Anchors from "./components/Anchors.mjs";
import Sidebar from "./components/Sidebar.mjs";

export default ({ title, pages, content, style, base, location }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${process.env.PROJECT_TITLE}${!!title && title.length > 0 ? ` | ${title}` : ""}</title>
  <link rel="icon" href="https://github.com/${process.env.GH_USERNAME}/${process.env.PROJECT_NAME}/blob/master/static/favicon.svg?raw=true"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css">
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <style>${style}</style>
</head>
<body>
  <div class="h-screen">
    <div class="h-screen flex overflow-hidden bg-white dark:bg-light-black-900">
      <!-- Start Popup Sidebar -->
      <div id="sidebar" class="hidden md:hidden enter-done">
        <div class="fixed inset-0 flex z-40">
          <div class="fixed inset-0 appear-done enter-done">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          ${Sidebar({ isPopup: true, navigation: { pages, base } })}
          <div class="flex-shrink-0 w-14"></div>
        </div>
      </div>
      <!-- End Popup Sidebar -->
      <div class="hidden md:flex md:flex-shrink-0">
        ${Sidebar({ navigation: { pages, base } })}
      </div>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="relative z-10 flex-shrink-0 flex h-16 bg-white dark:bg-black shadow md:hidden border-b border-gray-200 dark:border-light-black-800">
          <a class="px-4 flex items-center justify-center md:hidden" href="/${process.env.PROJECT_NAME}">
            <img src="https://github.com/${process.env.GH_USERNAME}/${process.env.PROJECT_NAME}/blob/master/static/favicon.svg?raw=true" alt="logo" class="w-auto h-10">
          </a>
          <div class="flex-1 px-4 flex justify-between">
            <div class="flex-1 flex"></div>
          </div>
          <button onclick="${inline(onSidebarOpen)}" class="px-4 text-gray-500 dark:text-gray-200 focus:outline-none focus:bg-gray-100 dark:focus:bg-light-black-950 focus:text-gray-600 dark:focus:text-gray-400 md:hidden" aria-label="Open sidebar">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
            </svg>
          </button>
        </div>
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
          <div class="max-w-screen-lg px-4 sm:px-6 md:px-8 pb-12">
            <div class="py-6">
              <a href="https://${getGithubLink(location)}">
                📝 ${getGithubLink(location)}
              </a>
              <div>
                <div class="markdown-body">${content}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</body>
</html>
`;

const onSidebarOpen = () => {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.remove('hidden');
};

const inline = fn => `(${fn.toString()})()`;

const getGithubLink = (location) => {
  return `github.com/${process.env.GH_USERNAME}/${process.env.PROJECT_NAME}/edit/master/pages/${location.replace("\\", "/")}.md`;
};

/*
  ${Navigation({ pages, base })}
  <div class="markdown-body">${content}</div>
  ${Anchors({ anchors })}
*/

/*
  NOTES
  * Crazy Sidebar starts under:
    * `relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-light-black-950 appear-done enter-done`
  * Normal Sidebar starts under:
    * `hidden md:flex md:flex-shrink-0`
*/

/*
const t = `<div class="h-screen">
<div class="h-screen flex overflow-hidden bg-white dark:bg-light-black-900">
  <!-- Start Popup Sidebar -->
  <div id="sidebar" class="hidden md:hidden enter-done">
    <div class="fixed inset-0 flex z-40">
      <div class="fixed inset-0 appear-done enter-done">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      ${Sidebar({ isPopup: true, navigation: { pages, base } })}
      <div class="flex-shrink-0 w-14"></div>
    </div>
  </div>
  <!-- End Popup Sidebar -->
  <div class="hidden md:flex md:flex-shrink-0">
    ${Sidebar({ navigation: { pages, base } })}
  </div>
  <div class="flex flex-col w-0 flex-1 overflow-hidden">
    <div class="relative z-10 flex-shrink-0 flex h-16 bg-white dark:bg-black shadow md:hidden border-b border-gray-200 dark:border-light-black-800">
      <a class="px-4 flex items-center justify-center md:hidden" href="/"><img src="/favicon.svg" alt="logo" class="w-auto h-10"></a>
      <div class="flex-1 px-4 flex justify-between">
        <div class="flex-1 flex"></div>
      </div>
      <button onclick="${inline(onSidebarOpen)}" class="px-4 text-gray-500 dark:text-gray-200 focus:outline-none focus:bg-gray-100 dark:focus:bg-light-black-950 focus:text-gray-600 dark:focus:text-gray-400 md:hidden" aria-label="Open sidebar">
        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
        </svg>
      </button>
    </div>
    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
      <div class="max-w-screen-lg px-4 sm:px-6 md:px-8 pb-12">
        <div class="py-6">
          <a href="${getGithubLink(base, path)}">${getGithubLink(base, path)}</a>
          <a class="break-words cursor-pointer link" href="https://deno.land/std/fs/mod.ts">https://deno.land/std/fs/mod.ts</a>
          <div>
            <div class="markdown-body">${content}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</div>`;
*/