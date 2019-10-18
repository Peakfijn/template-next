# PROJECT-NAME

PROJECT-INFO

- [Project Notes](#markdown-header-project-notes)
- [Getting started](#markdown-header-getting-started)
- [Folder structure](#markdown-header-folder-structure)
- [Coding rules](#markdown-header-coding-rules)
- [Commit guidelines](#markdown-header-commit-guidelines)
- [Deploy to Heroku](#markdown-header-deploy-to-heroku)


## Project notes

_none_


## Getting started

To get up and running and start developing, follow the steps below.

1. Copy `.env.example` to `.env` and set it up for your machine
2. Install Node dependencies using `npm ci` (or `npm install`)
3. Run the project with `npm start`
4. Or test the project with `npm test` and `npm run lint`
5. Finally, build a production-ready version with `npm run build` and serve it with `npm run serve`

> Or run the project with docker `docker-compose up`

### Troubleshooting project

Node/React apps can be complex projects; a lot of things can go wrong.
Here are some steps to quickly reset your local environment to start all over again.

1. Make sure you followed the **Getting started** steps
2. Reset all local changes to start over with these commands
	- `git reset --hard HEAD` — resets all local changes to the last commit
	- `git checkout develop` — changes the current branch back to the main branch
	- `git clean -xdf ./src` — removes all files in src not listed in the repo, _use with caution_
3. Reset node modules and node caches using `npm ci`

> Or rebuild the project with docker `docker-compose up --build`


## Folder structure

Every project needs a folder structure.
This one uses the [Atomic Design][link-atomic-design] principles as structure.
The rules are relatively simple, each folder has a specific meaning related to the types of components.

1. `atoms` — only the smallest "building blocks" of the project, like `text` or `buttons` _(may include other atoms)_
2. `molecules` — a group of atoms with a reusable intention, like `app-frame` or `notifications` _(may include other atoms and molecules)_
3. `organisms` — a group of components for a specific area of the project, like `Auth` or certain business-related pages _(may include or contain other atoms and molecules)_

Next to these folders, there are some extra non-atomic folders with a special meaning.

1. `pages` — **NextJS only** simple and "dumb" files that connects [NextJS routing][link-nextjs-routing] to particular page-components
2. `providers` — a file, or group of files, that "provide" a certain feature or integration, like `theme` or `auth`

> We also recommend using a [folder-component][link-folder-component] for complex multi-file components.

> Please keep nesting minimal as possible, it's hard for developers if they have to search through all folders.


## Coding rules

Be a good colleague and make your code stable and predictable by adhering to our shared coding rules.

- Follow the [Airbnb JavaScript style guide][link-airbnb-js]
- Use **tabs** for _indentation_, **spaces** for _alignment_
- Make sure the automated tests (CI) are successful
- **WRITE TESTS**


## Commit guidelines

Make sure you follow the [Conventional Commits][link-convcomm] rules when formatting your commit messages.

> You can view the most up-to-date version of these guidelines in the [Peakfijn Conventions][link-peakfijn-commits] repository.


## Deploy to Heroku

To deploy this project with Heroku, make sure you have the [Heroku CLI][link-heroku-cli] up and running.
With the CLI you can deploy this project to any Heroku environment using the following commands.

> Please use the pipelines to deploy this project to staging or production

```bash
$ heroku login

// build the image yourself and push to Heroku
$ heroku container:login
$ heroku container:push --app <NAME> web
$ heroku container:release --app <NAME> web

// or let Heroku build the the image
$ heroku stack:set container
$ git push heroku master
```

### Troubleshooting Heroku

If there are issues with your deployment, you can access the logs from Heroku.

```bash
$ heroku logs --tail --app <NAME>
```


[link-airbnb-js]: https://github.com/airbnb/javascript
[link-atomic-design]: https://bradfrost.com/blog/post/atomic-web-design/
[link-convcomm]: https://www.conventionalcommits.org
[link-folder-component]: https://medium.com/styled-components/component-folder-pattern-ee42df37ec68
[link-heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli#download-and-install
[link-peakfijn-commits]: https://github.com/Peakfijn/Conventions/tree/develop/packages/commit-types-peakfijn
[link-nextjs-routing]: https://github.com/zeit/next.js/#routing
