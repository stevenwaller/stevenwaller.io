# StevenWaller.io

My professional online presence.

## Stack

### Client
- [Lodash](https://lodash.com/) - Little utilities like throttle/debounce
- [Modernizr](https://modernizr.com) - Browser feature detection (touch-events)

### Development

- [Hugo](https://gohugo.io/) - Generate static site
- [Gulp](http://gulpjs.com/) - Efficient, configurable, streaming task runner
- [BrowserSync](https://www.browsersync.io/) - Live reload changes
- [Webpack](https://webpack.github.io) - Automatic common module chunk bundling and tree shaking
- [Babel](https://babeljs.io/) - Use the latest ECMAScript features
- [Sass](http://sass-lang.com/) - Easier CSS dev with variables, nesting, partials, import, mixins, inheritance, and operators
- [PostCSS](http://postcss.org/) - Autoprefix CSS
- [ESLint](http://eslint.org/) - Catch syntax and style issues

## Get Started

1. Install [Node v6.9+](https://nodejs.org/en/) globally if you don't have it already
1. Install [Yarn](https://yarnpkg.com/) globally if you don't have it already
1. Install [Hugo](https://gohugo.io/getting-started/quick-start/) globally if you don't have it already
1. Clone or download this repo
1. Using terminal change directories to the project root `cd /path/to/hugo-starter`
1. Install dependencies by running `yarn`
1. Run any of the available commands found below

## Commands

| Command | Description |
|---------|-------------|
| `yarn` | Install dependencies |
| `yarn dev` | - Transpile CSS and Javascript <br>- View at [http://localhost:3000/](http://localhost:3000/) <br>- BrowserSync will automatically reload CSS or refresh the page when stylesheets or content changes. |
| `yarn build` | Use Gulp to build your static output to the `/dist` folder |
| `yarn build-preview` | - `build`, including drafts and future posts |
| `yarn lint` | Lint code using ESLint |
| `hugo new <page-name>.md` | Create new page in `content` directory |
| `hugo new <content-type>/<content-name>.md` | Create new file in `content/<content-type>` directory |

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
