+++
title = "Create Advertising"
date = 2018-04-17T14:54:44-07:00
description = "Custom WordPress theme built with React to showcase Create Advertising's amazing catalog of work using an expandable grid and custom Vimeo video player carousel."
draft = false
nda = false
client = "Create Advertising"
year = "2018"
roles = ["Developer", "Designer"]
agency = "Sisu"
tools = ["WordPress", "React", "Isotope.js", "Trellis", "Vimeo"]
featured_image = "images/work/create/featured.png"
index = "04"
+++

<div class="markdown article__column">
{{% md %}}

## Highlights

### Automated server provisioning and deployment

Uses the [Trellis](https://roots.io/trellis/) framework combine with a custom WordPress theme build process. See the Sisu [Wordpress Roots](https://github.com/UncleSisu/wordpress-roots) starter repo for more info.

### Optimized, expandable masonry grid

The grid is made to load the image first, then when the user scrolls down and a grid item comes into view it will load the video behind the scenes; when the video is ready the image will fade out and the video will play. All of this is done so the page will load fast and the user doesn't see any blank spaces while the videos load.

The grid uses [React](https://reactjs.org/) combined with the [Isotope](https://isotope.metafizzy.co/) library for the masonry effect and allow elements to expand in-between the rows similar to Google Image search.

![Grid of video thumbnails](/images/work/create/grid.jpg)

### Custom video player and touch-friendly carousel

Created custom React component that uses Vimeo's [player.js](https://github.com/vimeo/player.js/) library to add custom skinned controls to the embedded video complete with buffering, seeking, play/pause, and sound.

The user can navigate multiple videos through a touch-friendly, swipeable carousel with unique dot pagination for each category.

![Black Panther video playing with custom controls](/images/work/create/video-player.jpg)

### Flexible page builder

Using the WordPress [Advanced Custom Fields Plugin](https://www.advancedcustomfields.com/) the client can build unique page layouts by adding and re-arranging horizontal page components including video marquees, grids, columns, slideshows, WYSIWYG, and more.

![Company page of website with horizontal page sections](/images/work/create/company.jpg)

{{% /md %}}
</div>
