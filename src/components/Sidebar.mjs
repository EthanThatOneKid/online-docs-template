import Navigation from "./Navigation.mjs";
import Header from "./Header.mjs";

const onSidebarClose = () => {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.add('hidden');
};

const inline = fn => `(${fn.toString()})()`;

export default ({ title, isPopup, navigation }) => `
<div class="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-light-black-950 appear-done enter-done">
  ${
    isPopup
      ? `<div class="absolute top-0 right-0 -mr-14 p-1">
        <button onclick="${inline(onSidebarClose)}" role="button" class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
          <svg class="h-6 w-6 text-gray-600 dark:text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>`
      : ""
  }
  ${Header({ title })}
  <div class="pt-2 pb-8 h-0 flex-1 flex flex-col overflow-y-auto">
    <nav class="flex-1 px-4">
      <div class="mt-2 mb-4">
        ${Navigation({ ...navigation })}
      </div>
    </nav>
  </div>
</div>
`;