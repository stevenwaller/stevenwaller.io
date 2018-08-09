+++
title = "Npm Build Scripts"
date = 2018-08-01T16:18:52-07:00
description = "Build site using NPM scripts without Gulp or Grunt"
draft = true
tags = []
+++

<div class="markdown article__column">
{{% md %}}

Yes make files are amazing, but JS all the things.
Yes Webpack is amazing, but you have to jump through a lot of hoops if it's not a single page site. (How to render multiple static, HTML files)

## Features

- Javascript module bundling and tree shaking with Webpack
- Compile Sass
- Sourcemaps for JS and CSS
- Cache busting
- HTML templating

## Downsides to Gulp Grunt

One more layer of abstraction. You can just use the source (ESLint).

Fewer dependencies.

When you read the instructions for how to use something they don't mention Gulp/Webpack.

## Pros

Split complex scripts out into their own file.

You are not limited to Node scripts. Can run other language too.

Use the tools for what they are good at.
- Javascript => Webpack
- CSS => Sass, Less, PostCss
- HTML => Handlebars, Pug, etc...

Works will all the static HTML generators out there. Their command is just like the others.

## Cons

Can't leave inline comments.

Hard to do conditional logic

- Not-compress files on dev (rely on sourcemaps).
- Only add hash in production.

Can rely on scripts for more complex stuff, or create duplicate commands that are slightly different.

Might be slower.

Things are siloed. You need something like Webpack if you are doing automatic optimization.

## Tips

Don't use the short version of arguments.

Use the watch functionality provided by each package for faster results.

## Takeaways

- Start with command line arguments
- Add a few scripts for more complex stuff.
- If you find yourself writing to many scripts, maybe it's time to reach for Gulp

{{% /md %}}
</div>
