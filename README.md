# StevenWaller.io

## Stack

### Client
- [Lodash](https://lodash.com/) - Little utilities like throttle/debounce
- [Modernizr](https://modernizr.com) - Browser feature detection (touch-events)

### Development

- [Hugo](https://gohugo.io/) - Generate static site
- [BrowserSync](https://www.browsersync.io/) - Live reload changes
- [Webpack](https://webpack.github.io) - Automatic common module chunk bundling and tree shaking
- [Babel](https://babeljs.io/) - Use the latest ECMAScript features
- [Sass](http://sass-lang.com/) - Easier CSS dev with variables, nesting, partials, import, mixins, inheritance, and operators
- [PostCSS](http://postcss.org/) - Autoprefix CSS
- [ESLint](http://eslint.org/) - Catch syntax and style issues

## Project Structure

- **dist** - Files compiled by the Gulp/Hugo build pipeline
- **i18n** - Hugo multilingual configurations
- **src** - Files that will pass through the Gulp/Hugo build pipeline and be output in the `dist` directory
	- **data** - Custom data in YAML/JSON/TOML files to be used in templates, shortcodes, and javascript
	- **docs** - PDFs and other static files that can be linked to. Copied over to the `dist` directory
  - **fonts** - Copied over to the `dist` directory
	- **images** - Copied over to the `dist` directory
	- **markup** - Everything in here will be built with Hugo
		- **archetypes** - Blueprints that define default [front mater](https://gohugo.io/content/front-matter/) and Markdown structure for different types of content. (e.g. Post, Tutorial, Product)
		- **content** - Content pages and sections
			- **< section-name >** - Nested group of pages. Renders to example.com/section-name. (e.g. posts, tutorials, products)
			- `page-name.md` - Individual page. Renders to example.com/page-name
		- **layouts** - Template files using the [Go html/template language](https://gohugo.io/templates/go-templates/)
			- **_defaults** - Default templates
			- **partials** - Reusable template partials (e.g. header, footer)
			- **shortcodes** - Reusable partials used inside templates
			- **< content-type >** - Templates for custom content type (e.g. posts, tutorials, products)
			- `index.html` - The index page
	- **scripts** - Scripts will be compiled with Webpack. See `webpack.config.js` for more details
		- **components** - javascript class files grouped by the areas of the application that they are used
		- **constants** - Constants groups into files by type (ActionTypes.js, NotificationTypes.js, etc..)
		- **services** - Stand-alone JavaScript modules (non-class components)
		- `scripts.js` - File is the entrypoint for webpack and will be built to `/dist/scripts.js`
	- **styles** - Sass files in the root of this folder will end up in /css/...
- `config.toml` - Site wide Hugo configuration. (e.g. Title, global variables, permalinks)
- `dotfiles` - Various configs for the different parts of the stack

## Get Started

1. Install [Node v6.9+](https://nodejs.org/en/) globally if you don't have it already
1. Install [Yarn](https://yarnpkg.com/) globally if you don't have it already
1. Install [Hugo](https://gohugo.io/getting-started/quick-start/) globally if you don't have it already
1. Clone or download this repo
1. Using terminal change directories to the project root `cd /path/to/stevenwaller.io`
1. Install dependencies by running `yarn`
1. Run any of the available commands found below `yarn <command-name>`

## Commands


#### `build`

```
"npm run clean && npm-run-all build:assets build:html build:sass build:autoprefixer \"build:js -- --mode production\" asset-cache-bust"
```

- Clean out the `dist` directory
- Run all the `build` commands
- Run `build:js` in `production` mode

#### `dev`

```
"npm run clean && npm-run-all --parallel watch serve"
```

- Cleans out the `dist` directory
- Runs the `watch` and `serve` commands in parallel.

### `clean`

```
"rimraf dist && mkdir dist"
```

- Remove the `dist` directory
- Create a new, empty `dist` directory.

#### `watch`

```
"npm-run-all --parallel \"build:* -- --watch\""
```

- Run all the commands that start with `build:` and pass the `--watch` flag through

#### `serve`

```
"browser-sync start --server dist --files dist --no-ghost-mode --no-open"
```

- Serve all files in the `dist` directory
- Can be viewed at [http://localhost:3000/](http://localhost:3000/)
- Watch files and automatically sync and live-reload any changes
- Don't sync event's like scrolling (ghost mode)
- Don't automatically open the browser window

#### `build:assets`

```
"cpx \"src/**/*.!(hbs|scss|js)\" dist"
```

- Copy all the files from the `src` to `dist` directory
- Ignore files that are `.hbs`, `.scss`, or `.js`.
- Optionally watch the files for changes

#### `build:html`

```
"eleventy --config=eleventy.config.js"
```

- Use the `eleventy` library to compile all handlebar files (`.hbs`) into HTML files in the `dist` directory
- See `eleventy.config.js` for more details and the [Eleventy docs](https://www.11ty.io/docs/config/) for all the options
- Optionally watch the files for changes

#### `build:sass`

```
"node-sass-chokidar src/styles/ --source-map dist/css --output .temp --output-style compressed"
```

- Transpile `.scss` files from `src/styles` to `.temp` directory (where they will be autoprefixed)
- Output sourcemaps to `dist/css`
- Compress the output
- Optionally watch the files for changes

#### `build:autoprefixer`

```
"postcss .temp/*.css --use autoprefixer --dir dist/css"
```

- Add vendor prefixes to `.css` files in the `.temp` directory
- Output files to the `dist` directory
- Optionally watch the files for changes

#### `build:lint`

```
"esw src/scripts/{,**/}*.js"
```

- Lint the `.js` files in the `src/scripts` directory using ESLint
- Optionally watch the files for changes

#### `build:js`

```
"webpack"
```

- Compile all `.js` files from `src/scripts` using Babel and Webpack
- Optionally watch the files for changes
- See the `webpack.config.js` file for more details

#### `bust-cache`

```
"asset-cache-bust \"dist/**/*html\" --asset-root dist --verbose"
```

- Append a hash url parameter to CSS and JS links to bust the cache


