import Anchors from "./components/Anchors.mjs";
import Navigation from "./components/Navigation.mjs";

export default ({ title, pages, content, anchors, style, base }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css">
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <style>${style}</style>
</head>
<body>
  ${t}
</body>
</html>
`;

const onSidebarOpen = () => {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.remove('hidden');
};

const onSidebarClose = () => {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.add('hidden');
};

const inline = fn => `(${fn.toString()})()`;

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

const t = `<div class="h-screen">
<div class="h-screen flex overflow-hidden bg-white dark:bg-light-black-900">
  <!-- -->
  <div id="sidebar" class="hidden md:hidden enter-done">
    <div class="fixed inset-0 flex z-40">
      <div class="fixed inset-0 appear-done enter-done">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-light-black-950 appear-done enter-done">
        <div class="absolute top-0 right-0 -mr-14 p-1">
          <button onclick="${inline(onSidebarClose)}" role="button" class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
            <svg class="h-6 w-6 text-gray-600 dark:text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <!-- Header -->
        <div class="pt-2 pb-8 h-0 flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-4">
            <div class="mt-2 mb-4">
              <!-- Navigation -->
            </div>
            <div class="mt-2 mb-4">
              <div class="mb-1 text-lg text-gray-900 dark:text-gray-200 font-bold">Enums</div>
              <div>
                <p class="text-gray-800 dark:text-gray-300"><a class="link" href="#EOL">EOL</a></p>
              </div>
            </div>
            <div class="mt-2 mb-4">
              <div class="mb-1 text-lg text-gray-900 dark:text-gray-200 font-bold">Interfaces</div>
              <div>
                <p class="text-gray-800 dark:text-gray-300"><a class="link" href="#CopyOptions">CopyOptions</a></p>
                <p class="text-gray-800 dark:text-gray-300"><a class="link" href="#ExpandGlobOptions">ExpandGlobOptions</a></p>
                <p class="text-gray-800 dark:text-gray-300"><a class="link" href="#WalkEntry">WalkEntry</a></p>
                <p class="text-gray-800 dark:text-gray-300"><a class="link" href="#WalkOptions">WalkOptions</a></p>
                <p class="text-gray-800 dark:text-gray-300"><a class="link" href="#WriteJsonOptions">WriteJsonOptions</a></p>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="flex-shrink-0 w-14"></div>
    </div>
  </div>
  <!-- -->
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-72 border-r border-gray-200 dark:border-light-black-800 bg-gray-50 dark:bg-light-black-950">
      <div class="bg-gray-100 dark:bg-black pb-4 pt-4 border-b border-gray-200 dark:border-light-black-800">
        <a class="flex items-center flex-shrink-0 px-4" href="/">
          <div class="mx-4 flex flex-col justify-center">
            <div class="font-bold text-gray-900 dark:text-gray-200 leading-6 text-2xl tracking-tight">deno doc</div>
          </div>
        </a>
        <header class="px-4 pt-3 sm:px-6 sm:pt-4">
          <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <!-- Last Publish date and time -->
            Last refreshed 7/29/2020, 4:36:21 PM.
          </div>
        </header>
      </div>
      <div class="pt-2 pb-8 h-0 flex-1 flex flex-col overflow-y-auto">
        <nav class="flex-1 px-4">
          <div class="mt-2 mb-4">
            <!-- Navigation -->
          </div>
        </nav>
      </div>
    </div>
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
          <!-- Link to source file on github -->
          <a class="break-words cursor-pointer link" href="https://deno.land/std/fs/mod.ts">https://deno.land/std/fs/mod.ts</a>
          <div>
            <!-- Content -->
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</div>`;