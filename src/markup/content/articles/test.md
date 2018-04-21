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

### Generate a new Hugo Site

```
hugo new site netlify-cms
```

### Install a Hugo theme

Use git to clone the theme of your choice inside the `themes` directory. In this case we’re using the [Hyde theme](https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fspf13%2Fhyde).

```
cd netlify-cms/themes
git clone https://github.com/spf13/hyde
```

Then specify “hyde” as your default theme in the `config.toml` file by adding the following line.

``` toml
# config.toml
theme = “hyde”
```

### Upload your site to a GitHub repo

[Create a new repository on GitHub](https://medium.com/r/?url=https%3A%2F%2Fhelp.github.com%2Farticles%2Fcreate-a-repo%2F). Do NOT initialize the new repository with README, license, or gitignore files.

In the “Quick setup” section copy your GitHub Repository URL for the next step.

![Screenshot of GitHub showing the Repository URL field](/images/git-hub-netlify-cms/github.jpg)

From inside the `netlify-cms` root directory run the following (replacing `YOUR_GITHUB_REPOSITORY_URL` with the text you just copied.

```
git init
git add .
git commit -m 'First commit'
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push origin master
```

## Add the Netlify CMS admin to Hugo

Create a new `admin` directory inside `netlify-cms/static` directory.

### Create index.html

Inside the `admin` directory create an `index.html` file with the following contents.

``` html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>

  <!-- Include the styles for the Netlify CMS UI, after your own styles -->
  <link rel="stylesheet" href="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.css" />

</head>
<body>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.js"></script>
</body>
</html>
```

This is the entry point for the Netlify CMS admin interface that loads the necessary CSS and JavaScript files from a public CDN.

### Create an uploads directory

Inside the `netlify-cms/static` directory create an `images/uploads` directory. This is required so the CMS can upload images.

### Create config.yml

Next, create a `config.yml` file inside the `admin` directory with the following contents. Make sure to replace `yourGitHubUsername/netlify-cms` with the actual URL of your repo.

``` yml
backend:
  name: github
  repo: yourGitHubUsername/netlify-cms
  branch: master
  site_domain: http://localhost:1313
  base_url: http://localhost:3000
media_folder: "static/images/uploads"
public_folder: "/images/uploads"
collections:
  - label: "Pages"
  name: "pages"
  files:
    - file: "config.toml"
      label: "Site-wide"
      name: "config"
      fields:
        - {label: "Site Title", name: "title", widget: "string"}
```
`backend`: Configure 

- `name`: The backend protocol to use.
- `repo`: Path to your GitHub repository
- `branch`: (optional) The branch you want the CMS to update on your repo. Defaults to master.
- `site_domain`: Your site’s URL. This is used to set the site_id query parameter sent to the OAuth API endpoint.
- `base_url`: The base URL of your OAuth client (Which we will setup below).

`media_folder`: Folder where user uploaded files will be saved in the repo

`public_folder`: Folder where upload files can be found on public site

`collections`: I won’t go into details

There are a lot of other configuration options you should explore, but they don’t have anything to do with authentication.
