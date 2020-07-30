export default ({ title }) => `
<div class="bg-gray-100 dark:bg-black pb-4 pt-4 border-b border-gray-200 dark:border-light-black-800">
  <a class="flex items-center flex-shrink-0 px-4" href="/${process.env.PROJECT_NAME}">
    <img src="https://github.com/${process.env.GITHUB_USERNAME}/${process.env.PROJECT_NAME}/blob/master/static/favicon.svg?raw=true" alt="logo" class="w-auto h-12">
    <div class="mx-4 flex flex-col justify-center">
      <div class="font-bold text-gray-900 dark:text-gray-200 leading-6 text-2xl tracking-tight">
        ${title}
      </div>
    </div>
  </a>
  <header class="px-4 pt-3 sm:px-6 sm:pt-4">
    <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Last published ${getDateTime()}.
    </div>
  </header>
</div>
`;

const getDateTime = () => {
  const localeString = `${(new Date()).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST`;
  return localeString.replace(",", ",<br>");
};