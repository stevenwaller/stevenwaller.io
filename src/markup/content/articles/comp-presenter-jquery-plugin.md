+++
title = "Comp-Presenter jQuery Plugin"
date = 2010-08-30T17:03:12-07:00
description = "This jQuery plugin was made to help present website design comps to clients. By using the web browser for presentation you can keep your client from opening your comp in an image viewing program that may confuse the client on how the final product will look."
draft = false
tags = []
+++

<div class="post__column markdown">
{{% md %}}

## Easily present website design comps

This jQuery plugin was made to help present website design comps to clients. By using the web browser for presentation you can keep your client from opening your comp in an image viewing program that may confuse the client on how the final product will look. You can read my blog post about [how to present design comps to a client](/articles/how-to-present-website-design-comps-to-a-client/) for more information on this. This plugin works in IE6+, Firefox, Chrome, and Safari.

The Comp-Presenter jQuery plugin is free to use and you can re-purpose it to suit your needs. Licensed under [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php)

## Example

[See the plugin in action!](/files/comp-presenter/index.html)

## How to Use

### Download JS

- [Compressed (3kb)](/files/comp-presenter/js/jquery.comp-presenter-min.js)
- [Uncompressed (5kb)](/files/comp-presenter/js/jquery.comp-presenter-min.js)

### Download CSS

- [Uncompressed (2kb)](/files/comp-presenter/css/comp-presenter.css)

### Add Markup

Add the following code to the header of a new HTML page. Note, I am using the Microsoft Ajax CDN to include jQuery, but you can download it from [jquery.com](http://jquery.com/) and include it directly if you want.

```html
<link rel="stylesheet" type="text/css" media="screen" href="comp-presenter.css" />
<script src="https://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
<script src="jquery.comp-presenter-min.js" type="text/javascript"></script>
```

In the body of the HTML page add an unordered list of your design comp images. Make sure the unordered list has a unique id. The alt text is displayed in the header of the presentation to show what slide the user is on. If you don’t want to use this feature you don’t have to add it to the image tag.

```html
<ul id="slideshow">
	<li><img src="path/to/example-image-1.jpg" alt="Slide title" /></li>
	<li><img src="path/to/example-image-2.jpg" alt="Slide title" /></li>
	<li><img src="path/to/example-image-3.jpg" alt="Slide title" /></li>
</ul>
```

Back in the header of the HTML file add the following code below the code we added previously. Make sure you change the id to match the one you used.

```html
<script type="text/javascript">
	$(document).ready(function() {
		$("#slideshow").compPresenter();
	});
</script>
```

## Plugin Options

<div class="table-wrapper">
<table class="comp-presenter__table">
  <thead>
    <tr>
      <th>Key</th>
      <th>Options</th>
      <th width="200">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>true<br>
          false<br>
          “string”</td>
      <td>true</td>
      <td>Title of presentation that appears on top left. True uses the HTML pages  title. False removes it. Or you can use any custom text in parentheses  like "My Title"</td>
    </tr>
    <tr>
      <td>prevText</td>
      <td>“string”</td>
      <td>“&lt;span&gt;&amp;larr;&lt;/span&gt; Previous”</td>
      <td>The text in the previous button.</td>
    </tr>
    <tr>
      <td>nextText</td>
      <td>“string”</td>
      <td>“Next &lt;span&gt;&amp;rarr;&lt;/span&gt;”</td>
      <td>The text in the next button.</td>
    </tr>
    <tr>
      <td>paging</td>
      <td>true<br>
            false</td>
      <td>true</td>
      <td>Paging keeps track of what number slide you are on.</td>
    </tr>
    <tr>
      <td>align</td>
      <td>“left”<br>
      “center”<br>
      “right”</td>
      <td>“center”</td>
      <td>Aligns the images to the left, right, or center of the stage. Choose “center” for a centered design.</td>
    </tr>
    <tr>
      <td>autoHide</td>
      <td>true<br>
      false</td>
      <td>true</td>
      <td>true	Slides the header off screen until the user hovers over it. Or keeps the header visible at all times.</td>
    </tr>
    <tr>
      <td>pause</td>
      <td>number</td>
      <td>3000</td>
      <td>Time in milliseconds before the header slides of screen for the first time. Doesn’t matter if autoHide is set to false.</td>
    </tr>
    <tr>
      <td>speed</td>
      <td>“slow”<br>
      “normal”<br>
      “fast”<br>
      number</td>
      <td>“slow”</td>
      <td>“slow”	Speed of slide transition. Number uses milliseconds.</td>
    </tr>
  </tbody>
  </table>
</div>


</div>

<link rel="stylesheet" type="text/css" href="/css/articles/comp-presenter.css"/>

