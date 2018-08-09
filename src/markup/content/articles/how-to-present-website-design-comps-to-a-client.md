+++
title = "How to present website design comps to a client"
date = 2010-08-31T17:03:12-07:00
description = "So you have toiled away through blood sweat and tears to create the perfect design for you client’s new website, but how to you show it to them?"
draft = false
tags = []
+++

<div class="article__column markdown">
{{% md %}}

<p class="page-intro__description">So you have toiled away through blood sweat and tears to create the perfect design for you client’s new website, but how to you show it to them?</p>

## The regular image method

The easiest thing to do is save a flattened comp of the design as a jpg and email it to your client, but there are a couple drawbacks to this approach:

- You can’t control what program the client opens you image file in. Ever tried to view your site design in MS Paint?
- Depending what image viewer your client uses the image may be zoomed out too far.
- If you have a large margin around the site it may not appear centered in the client’s image viewer.
- If the design goes through multiple revisions client might get confused about which image is the latest version

<img src="/files/how-to-present/ms-paint.jpg" alt="MS Paint">

*Don't let MS Paint happen to you!*

## The HTML embed method

I have found the best option is to add the image in an HTML file and upload it to a server. Then you can simply email the client a link to the HTML file. This method has a couple benefits:

- The client get to see the site design in it’s natural environment, the web browser.
- Actual size – no zoomed out version.
- Site can appeared centered.
- Easy to see different versions; the client doesn’t have to manage multiple email attachments
- Gives you a little security if you make a mistake. You spelled something wrong? Simply save out a new flattened jpg and replace the current one on your server. No need to send the client another email, they won’t even know it happened.

The only real downside to this is some clients will think that it is a functioning website and wonder why the navigation doesn’t work. *sigh* Well you can’t in them all…

<img src="/files/how-to-present/ms-paint.jpg" alt="MS Paint">

## How To

In the past I would add the design comp image to the HTML page and link it to the next page so the client could click the image to view the Home Page, About Us Page, etc… But I recently created a jQuery plugin to streamline this whole process so all you have to do is add the images in an unordered list to one page. [Check out the Comp-Presenter jQuery plugin](/articles/comp-presenter-jquery-plugin).

{{% /md %}}
</div>
