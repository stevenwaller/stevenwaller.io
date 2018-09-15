+++
title = "Hack for Internet Explorer invisible hover bug"
date = 2010-09-05T17:03:12-07:00
description = "While working on the Comp-Presenter jQuery Plugin I came across a really obscure bug in Internet Explorer that effect IE6 to IE8"
draft = false
tags = []
+++

<script src="https://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
<script src="/files/ie-hover-bug/post.js" type="text/javascript"></script>

<div class="markdown post__column">
{{% md %}}

## The Bug

While working on the [Comp-Presenter jQuery Plugin](/articles/comp-presenter-jquery-plugin/) I came across a really obscure bug in Internet Explorer that effect IE6 to IE8 (I haven’t tried it in IE9 yet). Essentially if you have an empty element positioned over an image in Internet Explorer you can not add a mouseover event to it. This is probably easier to show than to explain so take a look at the three examples on the right. If you are using anything other than IE you will see the text below each box change from “Normal” to “Mouse Over” when you move your mouse over the box in the top left corner. In IE it will work with the first example because it has a background color and it will only work in the second example if you get the mouse directly touching the one pixel border.

<div class="ie-hover-bug__example-container">
  <div class="example one">
    <h3>Example One</h3>
    <p class="small">With background color</p>
    <div class="example__img-wrapper">
      <div class="invisible-btn"></div>
      <div class="visible-box"><img src="/files/ie-hover-bug/bg.gif"></div>
      <div class="alert-box">Normal</div>
    </div>
  </div>
  <div class="example two">
    <h3>Example Two</h3>
    <p class="small">With Border</p>
    <div class="example__img-wrapper">
      <div class="invisible-btn"></div>
      <div class="visible-box"><img src="/files/ie-hover-bug/bg.gif"></div>
      <div class="alert-box">Normal</div>
    </div>
  </div>
  <div class="example three">
    <h3>Example Three</h3>
    <p class="small">Invisible</p>
    <div class="example__img-wrapper">
      <div class="invisible-btn"></div>
      <div class="visible-box"><img src="/files/ie-hover-bug/bg.gif"></div>
      <div class="alert-box">Normal</div>
    </div>
  </div>
</div>

## Nuances

I have tried using [every know fix to the haslayout bug](http://www.satzansatz.de/cssd/onhavinglayout.html), but nothing will work. The strange thing is it only breaks when the invisible div is over an image. You can see in example four if it’s placed over an empty div it works fine. Unfortunately I was using this method to create a hotspot on a slideshow so I it was always going to be over an image. The box also works if you add a background image, but that ruins the whole idea of it being invisible. I also tried using an anchor tag instead of a div for the hotspot with no avail.

<div class="ie-hover-bug__example-container">
  <div class="example four">
    <h3>Example Four</h3>
    <p class="small">Over div instead of image</p>
    <div class="example__img-wrapper">
      <div class="invisible-btn"></div>
      <div class="visible-box with-background"></div>
      <div class="alert-box">Normal</div>
    </div>
  </div>
  <div class="example five">
    <h3>Example Five</h3>
    <p class="small">With background image</p>
    <div class="example__img-wrapper">
      <div class="invisible-btn"></div>
      <div class="visible-box with-background"><img src="/files/ie-hover-bug/bg.gif" alt="half tone background pattern"></div>
      <div class="alert-box">Normal</div>
    </div>
  </div>
</div>

## Solution

After a lot of trial and error I found a solution that makes IE render the box correctly so you can add a mouseover event to it. All you have to do is add the CSS background-image property with a made up URL like this:

```css
.invisible-btn {
	background-image:url(hack);
}
```

<div class="ie-hover-bug__example-container">
  <div class="example six">
    <h3>Example Six</h3>
    <p class="small">With background hack</p>
    <div class="example__img-wrapper">
      <div class="invisible-btn"></div>
      <div class="visible-box with-background"><img src="/files/ie-hover-bug/bg.gif" alt="half tone background pattern"></div>
      <div class="alert-box">Normal</div>
    </div>
  </div>
</div>

{{% /md %}}
</div>

<link rel="stylesheet" type="text/css" href="/css/articles/ie-hover-bug.css"/>
