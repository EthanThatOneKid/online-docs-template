# Getting Started
> This page explains how to get started with the [Online-Docs-Template](https://github.com/EthanThatOneKid/online-docs-template)

By the end of these instructions, you should have a working GitHub-powered content management system ([CMS](https://en.wikipedia.org/wiki/Content_management_system)) that updates your site as you choose to edit it!

If you are unfamiliar with markdown, visit [this link](https://commonmark.org/help/) to help you out! ⚔

## Getting Started 🍎
1. Create a new repository using this one as a [template](https://github.com/EthanThatOneKid/online-docs-template/generate).
1. Clone your new repository to your desktop.
1. Initialize your repository...
	1. Install the dependencies with `npm i`.
	1. Rename [`.env.sample`](.env.sample) to `.env` and fill it with the appropriate info.
	1. [*optional*] Customize the metadata within your [`package.json`](package.json).
1. Make it your own by editing the [`pages`](pages) directory!

> 💡 Note: The [`README.md`](pages/README.md) file in the [`pages`](pages) directory represents the *homepage* of the site!

## Editing Documents 🖊

### Edit Existing (Online) 📝
1. Visit your live site.
1. Navigate to the page that you wish to edit.
1. Click the link at the top of the page to edit the document.
1. Commit your changes.

### Create New (Online) 💡
1. Visit the [`pages`](pages) directory on GitHub.
1. Navigate: `Add file > Create new file`.
1. Commit the new file.

### Work on Desktop
1. Open your repository in your favorite code editor.
1. Edit the contents of the [`pages`](pages) directory.
1. Commit and push your changes.

## Deployment 🚀
1. Set your [`.env`](.env.sample) secrets in your GitHub repository: `Settings > Secrets > New Secret`.
1. Now, every push will trigger a deployment!
