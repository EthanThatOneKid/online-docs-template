const ghpages = require("gh-pages");
const { exec } = require("child_process");
const pkg = require("../package.json");
require("dotenv").config();

const {
	GITHUB_USERNAME,
	GITHUB_NAME,
	GITHUB_EMAIL,
	PROJECT_NAME,
} = process.env;

const exportCommand = `${pkg.scripts.build}`;
const deployURL = `https://${GITHUB_USERNAME}.github.io/${PROJECT_NAME}`.toLowerCase();

exec(
	exportCommand,
	(error, stdout, stderr) => {
		if (error !== null) {
			return console.error({ error, stderr });
		}
		console.log(stdout);
		console.log("Deploying to GitHub Pages...");
		ghpages.publish(
			`dist/${PROJECT_NAME}`,
			{
				branch: "gh-pages",
				repo: `https://github.com/${GITHUB_USERNAME}/${PROJECT_NAME}.git`,
				user: {
					name: GITHUB_NAME,
					email: GITHUB_EMAIL,
				},
			},
			() => {
				console.log(`Project '${PROJECT_NAME}' has been deployed to '${deployURL}'`);
			},
		);
	},
);
