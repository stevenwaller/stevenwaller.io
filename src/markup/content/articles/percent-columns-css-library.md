+++
title = "% Columns CSS Library"
date = 2010-04-13T17:03:12-07:00
description = "The goal of this system is to allow users to easily divide content into two, three, four or five columns based upon percentages; with the ability to then divide each column further."
draft = false
tags = []
+++
<div class="article__column markdown">
{{% md %}}

## The goal

The goal of this system is to allow users to easily divide content into two, three, four or five columns based upon percentages; with the ability to then divide each column further.

## What this is not

This is not a grid system with set content widths, which is the beauty of it. I can’t count the number of times I’ve wanted to divide a column into three equal parts, but couldn’t because it wouldn’t fit the grid.

It’s not even really even much of a framework since it’s only one CSS file, but I wasn’t sure what else to call it. The CSS won’t reset the browser styles, make your headers look good, or walk your dog. It was designed to work with whatever CSS styles you already use. If you need a more robust framework I suggest you take a look at [this list](http://www.libhound.com/web-development/user-interfaces/longest-list-of-css-frameworks) to find one that suits your needs.

I made this really more for myself to see what it takes to build a basic framework. I am publishing in-case someone else want to use it.

## The thinking behind the system

I approached this system by looking at the end goal of the user. The purpose of a grid system when used for content is to create columns. The user doesn’t care how wide the content area is and how many pixels a third of that is, they just want a certain number of columns. Based upon that thinking I’ve used percentages to divide up the content, that way the user never needs to know how wide the content area is or how it fits into the grid system. In my research I came across the CSS library called [MALO](http://code.google.com/p/malo/) that uses this idea of percentages and after seeing his approach I devised my own.

## Naming Conventions

For the names of the CSS classes I based them upon how many columns the user is trying to make instead of percentages, so the user doesn’t have to try and remember that 33% is a third and 20% is a fifth. I know that using underscores for class names is not best practice, but for usability’s sake I think that col_1-3_4 makes more sense than col-1-3-4. I also chose to give each column a unique name so the user doesn’t have to add a “first” or “last” class to the columns to adjust the padding on the first and last column. Plus it’s easier to tell which column is which with unique names.

#### The css classes are based upon the following naming convention:

```
col_(number of current column(s) out of total columns) _ (total number of columns you want)
```

#### For example, you would use the following classes to make a two column layout:

```html
<div class="col_1_2"></div>  //Column one of two
<div class="col_2_2"></div>   //Column two of two
```

{{% /md %}}
</div>

<div class="article__column-full">
  <img src="/images/percent-columns/two-columns.gif" alt="Two columns" class="percent-columns__img">
</div>

<div class="article__column markdown">
{{% md %}}

#### If you wanted to create a four column layout:

```html
<div class="col_1_4"></div>  //Column one of four
<div class="col_2_4"></div>  //Column two of four
<div class="col_3_4"></div>  //Column three of four
<div class="col_4_4"></div>  //Column four of four
```
{{% /md %}}
</div>

<div class="article__column-full">
  <img src="/images/percent-columns/four-columns.gif" alt="Four columns" class="percent-columns__img">
</div>

<div class="article__column markdown">
{{% md %}}

#### If you wanted to create a four column layout with the first column spanning three of the four columns:

```html
<div class="col_1-3_4"></div>  //Column one through three of four
<div class="col_4_4"></div>  //Column four of four
```

{{% /md %}}
</div>

<div class="article__column-full">
  <img src="/images/percent-columns/1-3-of-4.gif" alt="1/3 and 1/4 columns" class="percent-columns__img">
</div>

<div class="article__column markdown">
{{% md %}}

## Column Gutters

Ideally I would add padding to each columns div to create space between them but based upon the css box model this makes them wider and breaks the layout. Along the same line, I could have used 1% padding, but I wanted the gutters to be consistent. Another option is to add margins to every block element inside the div, but this seemed too tedious and would mess with any styles that have already been defined. So I opted to use extra markup with a “content” div for padding within each column. So once you have your columns created simply add another div with the class “content”. The other benefit of this is you can nest as many columns as you want without extra padding adding up. The default gutter between columns is 20 pixels. If the design needs more space between columns this can be changed on one line in the css and won’t break anything.

### Example of three column layout with content div added:

```html
<div class="col_1_3">
	<div class="content"></div>
</div>
<div class="col_2_3">
	<div class="content"></div>
</div>
<div class="col_3_3">
	<div class="content"></div>
</div>
```

## Clearing a div
Depending on the design, if one column if taller than the other you may need to add a clearing div to keep the content below the columns from messing up. To do this simply add a div with the class “clear” after the columns. Or use your clearfix of choice.

#### Example of two column layout with clearing div

```html
<div class="col_1_2">
	<div class="content"></div>
</div>
<div class="col_2_2">
	<div class="content"></div>
</div>
<div class="clear"></div>
```

## Nesting Columns

You can keep dividing columns into smaller and smaller increments by nesting columns inside one another.

#### Example of two column layout with right column divided into three

```html
<div class="col_1_2">
	<div class="content"></div>
</div>
<div class="col_2_2">
	<div class="col_1_3">
		<div class="content"></div>
	</div>
	<div class="col_2_3">
		<div class="content"></div>
	</div>
	<div class="col_3_3">
		<div class="content"></div>
	</div>
</div>
```

{{% /md %}}
</div>

<div class="article__column-full">
  <img src="/images/percent-columns/two-columns-into-three.gif" alt="Two columns with the right column divided into three" class="percent-columns__img">
</div>

<div class="article__column markdown">
{{% md %}}

## How to use

[Download the CSS file](/files/percent-columns/percent-column-system-min.css), upload it to your website and add the following code to the header of your HTML page and *BOOM* you are good to go, no need for reset files or anything else.

```html
<link href="percent-column-system.css" media="screen" type="text/css" rel="stylesheet">
```

#### Download CSS

- [Compressed (1.98kb)](/files/percent-columns/percent-column-system-min.css)
- [Uncompressed (3.98kb)](/files/percent-columns/percent-column-system.css)

#### Examples

- [Basic column options](/files/percent-columns/example-1.html)
- [Layout with content](/files/percent-columns/example-2.html)

#### License

The % Columns CSS library is free to use and you can re-purpose it to suit your needs. Licensed under [GPL](http://www.gnu.org/licenses/gpl.html) and [MIT](http://www.opensource.org/licenses/mit-license.php).

{{% /md %}}
</div>
