+++
title = "How to use Netlify CMS with GitHub OAuth — Without using Netlify’s CDN"
date = 2018-04-18T14:54:44-07:00
description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est."
draft = false
tags = ["CSS", "Dev"]
+++

Netlify CMS is an amazing piece of open source software that makes it easy to update content on sites built using static site generators like Hugo or <asdf>.

<Explain how Netlify CMS is git based>

<Explain how it is hard to use it without using Netlify’s CDN>
Netlify offers a built-in authentication service called Identity. In order to use it, you’ll need to connect your site repo with Netlify.

Using GitHub for authentication allows CMS users to log in directly with their GitHub account. Note that the user’s GitHub account must have push access to your content repository for this to work.

We will be using Hugo as our static site generator of choice, but you can use other generators like Jekyll, Gatsby, Hexo, etc… Follow the instructions to Add Netlify CMS to your site, then skip down to the Setup your OAuth provider step. <Add the Netlify CMS admin to Hugo>.

## Create a Hugo site

### Install Hugo on your computer

This assumes you are on a Mac. See the [Hugo install instructions](https://medium.com/r/?url=https%3A%2F%2Fgohugo.io%2Fgetting-started%2Finstalling) for other operating systems.

```
brew install hugo
```
