import Anchors from "./components/Anchors.mjs";
import Navigation from "./components/Navigation.mjs";

export default ({ title, pages, content, anchors, style, base }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <style>${style}</style>
</head>
<body>
  ${t}
</body>
</html>
`;

const t = `<div class="h-screen">
  <div>
    <div class="h-screen flex overflow-hidden">
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-72 border-r border-gray-200 bg-gray-50">
          <div class="bg-gray-100 pb-4 pt-4 border-b border-gray-200">
            <a class="block flex items-center flex-shrink-0 px-4" href="/">
              <img src="/logo.svg" alt="logo" class="w-auto h-12">
              <div class="mx-4 flex flex-col justify-center">
                <div class="font-bold text-gray-900 leading-6 text-2xl tracking-tight">Deno Manual</div>
              </div>
            </a>
            <div class="mt-5 px-4">
              <label for="version" class="sr-only">Version</label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-xs rounded-md shadow-sm">
                  <select id="version" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    <option value="">master</option>
                    <option value="v1.2.1">v1.2.1</option>
                    <option value="v1.2.0">v1.2.0</option>
                    <option value="v1.1.3">v1.1.3</option>
                    <option value="v1.1.2">v1.1.2</option>
                    <option value="v1.1.1">v1.1.1</option>
                    <option value="v1.1.0">v1.1.0</option>
                    <option value="v1.0.5">v1.0.5</option>
                    <option value="v1.0.4">v1.0.4</option>
                    <option value="v1.0.3">v1.0.3</option>
                    <option value="v1.0.2">v1.0.2</option>
                    <option value="v1.0.1">v1.0.1</option>
                    <option value="v1.0.0">v1.0.0</option>
                    <option value="v1.0.0-rc3">v1.0.0-rc3</option>
                    <option value="v1.0.0-rc2">v1.0.0-rc2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-2 pb-8 h-0 flex-1 flex flex-col overflow-y-auto">
            <nav class="flex-1 px-2 px-4">
              <ol class="pl-2 list-decimal list-inside font-semibold nested">
                <li class="my-2"><a class="text-blue-600 hover:text-blue-500 toc-active font-bold" href="/manual/introduction">Introduction</a></li>
                <li class="my-2">
                  <a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/getting_started">Getting Started</a>
                  <ol class="pl-4 list-decimal nested">
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/getting_started/installation">Installation</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/getting_started/setup_your_environment">Setup your environment</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/getting_started/first_steps">First steps</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/getting_started/command_line_interface">Command line interface</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/getting_started/permissions">Permissions</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/getting_started/typescript">Using TypeScript</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/getting_started/webassembly">Using WebAssembly</a></li>
                  </ol>
                </li>
                <li class="my-2">
                  <a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/runtime">The Runtime</a>
                  <ol class="pl-4 list-decimal nested">
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/runtime/stability">Stability</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/runtime/program_lifecycle">Program lifecycle</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/runtime/compiler_apis">Compiler APIs</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/runtime/workers">Workers</a></li>
                  </ol>
                </li>
                <li class="my-2">
                  <a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/linking_to_external_code">Linking to external code</a>
                  <ol class="pl-4 list-decimal nested">
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/linking_to_external_code/reloading_modules">Reloading modules</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/linking_to_external_code/integrity_checking">Integrity checking</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/linking_to_external_code/proxies">Proxies</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/linking_to_external_code/import_maps">Import maps</a></li>
                  </ol>
                </li>
                <li class="my-2"><a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/standard_library">Standard library</a></li>
                <li class="my-2">
                  <a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/testing">Testing</a>
                  <ol class="pl-4 list-decimal nested">
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/testing/assertions">Assertions</a></li>
                  </ol>
                </li>
                <li class="my-2">
                  <a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/tools">Tools</a>
                  <ol class="pl-4 list-decimal nested">
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/tools/debugger">Debugger</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/tools/script_installer">Script installer</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/tools/formatter">Formatter</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/tools/bundler">Bundler</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/tools/documentation_generator">Documentation generator</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/tools/dependency_inspector">Dependency inspector</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/tools/linter">Linter</a></li>
                  </ol>
                </li>
                <li class="my-2"><a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/embedding_deno">Embedding Deno</a></li>
                <li class="my-2">
                  <a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/contributing">Contributing</a>
                  <ol class="pl-4 list-decimal nested">
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/contributing/building_from_source">Building from source</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/contributing/development_tools">Development tools</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/contributing/style_guide">Style guide</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/contributing/architecture">Architecture</a></li>
                  </ol>
                </li>
                <li class="my-2">
                  <a class="text-gray-900 hover:text-gray-600 font-bold" href="/manual/examples">Examples</a>
                  <ol class="pl-4 list-decimal nested">
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/examples/unix_cat">Unix cat program</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/examples/file_server">File server</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/examples/tcp_echo">TCP echo server</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/examples/subprocess">Creating a subprocess</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/examples/permissions">Inspecting and revoking permissions</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/examples/os_signals">OS Signals</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/examples/file_system_events">File system events</a></li>
                    <li class="my-0.5"><a class="text-gray-900 hover:text-gray-600 font-normal" href="/manual/examples/testing_if_main">Checking if file is main</a></li>
                  </ol>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow md:hidden">
          <a class="px-4 flex items-center justify-center md:hidden" href="/"><img src="/logo.svg" alt="logo" class="w-auto h-10"></a>
          <div class="flex-1 px-4 flex justify-between">
            <div class="flex-1 flex"></div>
          </div>
          <button class="px-4 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden" aria-label="Open sidebar">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
            </svg>
          </button>
        </div>
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
          <div class="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-20">
            <a href="https://github.com/denoland/deno/blob/master/docs/introduction.md" class="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out float-right mt-1">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6 inline" fill="currentColor" viewBox="0 0 24 24">
                <title>Github | Deno</title>
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <div class="markdown">
              <h1 id="introduction"><a href="#introduction" class="hover:underline">Introduction</a></h1>
              <p>Deno is a JavaScript/TypeScript runtime with secure defaults and a great
                developer experience.
              </p>
              <p>It's built on V8, Rust, and Tokio.</p>
              <h2 id="feature-highlights"><a href="#feature-highlights" class="hover:underline">Feature Highlights</a></h2>
              <ul>
                <li>Secure by default. No file, network, or environment access (unless explicitly
                  enabled).
                </li>
                <li>Supports TypeScript out of the box.</li>
                <li>Ships a single executable (<code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">deno</code>).</li>
                <li>Has built-in utilities like a dependency inspector (<code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">deno info</code>) and a code
                  formatter (<code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">deno fmt</code>).
                </li>
                <li>Has
                  <a href="https://github.com/denoland/deno/tree/master/std" class="link">a set of reviewed (audited) standard
                  modules</a> that are guaranteed
                  to work with Deno.
                </li>
                <li>Scripts can be bundled into a single JavaScript file.</li>
              </ul>
              <h2 id="philosophy"><a href="#philosophy" class="hover:underline">Philosophy</a></h2>
              <p>Deno aims to be a productive and secure scripting environment for the modern
                programmer.
              </p>
              <p>Deno will always be distributed as a single executable. Given a URL to a Deno
                program, it is runnable with nothing more than
                <a href="https://github.com/denoland/deno/releases" class="link">the ~15 megabyte zipped executable</a>.
                Deno explicitly takes on the role of both runtime and package manager. It uses a
                standard browser-compatible protocol for loading modules: URLs.
              </p>
              <p>Among other things, Deno is a great replacement for utility scripts that may
                have been historically written with bash or python.
              </p>
              <h2 id="goals"><a href="#goals" class="hover:underline">Goals</a></h2>
              <ul>
                <li>Only ship a single executable (<code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">deno</code>).</li>
                <li>
                  Provide Secure Defaults
                  <ul>
                    <li>Unless specifically allowed, scripts can't access files, the environment, or
                      the network.
                    </li>
                  </ul>
                </li>
                <li>Browser compatible: The subset of Deno programs which are written completely
                  in JavaScript and do not use the global <code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">Deno</code> namespace (or feature test for
                  it), ought to also be able to be run in a modern web browser without change.
                </li>
                <li>Provide built-in tooling like unit testing, code formatting, and linting to
                  improve developer experience.
                </li>
                <li>Does not leak V8 concepts into user land.</li>
                <li>Be able to serve HTTP efficiently</li>
              </ul>
              <h2 id="comparison-to-nodejs"><a href="#comparison-to-nodejs" class="hover:underline">Comparison to Node.js</a></h2>
              <ul>
                <li>
                  Deno does not use <code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">npm</code>
                  <ul>
                    <li>It uses modules referenced as URLs or file paths</li>
                  </ul>
                </li>
                <li>Deno does not use <code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">package.json</code> in its module resolution algorithm.</li>
                <li>All async actions in Deno return a promise. Thus Deno provides different APIs
                  than Node.
                </li>
                <li>Deno requires explicit permissions for file, network, and environment access.</li>
                <li>Deno always dies on uncaught errors.</li>
                <li>
                  <p>Uses "ES Modules" and does not support <code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">require()</code>. Third party modules are
                    imported via URLs:
                  </p>
                  <pre class="prism-code language-javascript flex overflow-y-auto rounded border border-gray-200 p-1 px-2 sm:px-3" style="color: rgb(57, 58, 52); background-color: rgb(246, 248, 250);"><code><div class="token-line text-xs" style="color: rgb(57, 58, 52);"><span class="token keyword module" style="color: rgb(0, 0, 159);">import</span><span class="token plain"> </span><span class="token operator" style="color: rgb(57, 58, 52);">*</span><span class="token plain"> </span><span class="token keyword module" style="color: rgb(0, 0, 159);">as</span><span class="token plain"> log </span><span class="token keyword module" style="color: rgb(0, 0, 159);">from</span><span class="token plain"> </span><span class="token string" style="color: rgb(227, 17, 108);">"https://deno.land/std/log/mod.ts"</span><span class="token punctuation" style="color: rgb(57, 58, 52);">;</span></div></code></pre>
                </li>
              </ul>
              <h2 id="other-key-behaviors"><a href="#other-key-behaviors" class="hover:underline">Other key behaviors</a></h2>
              <ul>
                <li>Remote code is fetched and cached on first execution, and never updated until
                  the code is run with the <code class="py-0.5 px-1 font-mono rounded-sm bg-gray-100 deno-inlinecode">--reload</code> flag. (So, this will still work on an
                  airplane.)
                </li>
                <li>Modules/files loaded from remote URLs are intended to be immutable and
                  cacheable.
                </li>
              </ul>
            </div>
            <div class="pt-4 border-t border-gray-200"><a class="text-gray-900 hover:text-gray-600 font-normal float-right" href="/manual/getting_started">Getting Started →</a></div>
          </div>
        </main>
      </div>
    </div>
  </div>
</div>`;