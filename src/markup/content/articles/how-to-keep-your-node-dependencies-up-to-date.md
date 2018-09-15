+++
title = "How to keep your node dependencies up to date"
date = 2017-11-20T17:29:48-07:00
description = "Here are a couple techniques I have found helpful to remind me to update my project's node dependencies as new versions come out."
draft = false
tags = []
+++

<div class="post__column markdown">
{{% md %}}

If you anything like me once you've started a project it is tough to remember to updated your node dependencies as new version come out. Here are a couple techniques I have found helpful.

## Get notified every time you build your project

[Yarn](https://yarnpkg.com/en/) has the useful command `yarn outdated` which checks your dependencies and lets you know which ones are out of date.

![Yarn list of outdated dependencies](/images/dependencies/outdated.gif)

While this is useful it only really helps you when you remember to run it. At first I thought about just sticking it in front of my `build` script in my `package.json`.

```json
"scripts": {
  "build": "yarn outdated && more-build-stuff",
}
```

But if there are outdated dependencies the process exits with an error code of `1`; essentially stopping your build from happening.

Since I may not want to update your dependencies right away, but do want to complete my build, I created a separate script file aptly named `check-for-outdated-dependencies.js` where I can run `yarn outdated` as a child process.

```javascript
// check-for-outdated-dependencies.js

const { exec } = require('child_process');

exec('yarn outdated --color', (error, stdout) => {
  console.log(stdout);
});
```

Now all I have to do is update my `package.json` to

```json
"scripts": {
  "build": "node check-for-outdated-dependencies.js && more-build-stuff",
}
```

And now every time I run my build I get notified if any of my dependencies are out of date.

## Get email notifications when new releases are up on GitHub

While getting notified every time you build your projects works well when it is under active development, it doesn't do you much good if you have multiple repos that might not be used that often.

There are a couple services that will notify you of new dependency versions, some like [Greenkeeper](https://greenkeeper.io/) or [dependencies.io](https://www.dependencies.io/) can even automate the process of updating them, but they tend to cost money.

[GitPunch](https://gitpunch.com/) is a free and simple solution that lets you login with your GitHub account and you can either manually list which repos you want to watch or just watch repos that you have stared. If you star a new repo in the future the notification list will update automatically.

Then whenever a new release comes out you will get an email like this:

![gitpunch email notification for new version of react-native](/images/dependencies/email.gif)

## Subscribe via RSS

If you use an RSS reader you can subscribe to GitHub release RSS feeds directly. If the regular url for the releases page is:

```
https://github.com/facebook/react-native/releases
```

All you need to do is tack `.atom` on to the end of it and put it in your favorite RSS reader and you are good to go.

```
https://github.com/facebook/react-native/releases.atom
```


## Scheduled a recurring event

Sometimes it's just easiest to set up a calendar reminder to go through your repositories once a month. I just so happen to have an article on how to [setup a repeating event on the last day of the month](https://stevendesigns.io/articles/repeating-google-calendar-event-on-last-day-of-the-month/).

I hope you find some of these tips useful for staying on top of the never ending mountain of Node dependencies.

{{% /md %}}
</div>


