+++
title = "Buick: Enclave & TourX"
date = 2018-04-21T14:54:44-07:00
description = "A multi-agency effort to introduce consumers to Buick’s revitalized brand through micro-sites, which utilized interactive 3D-rendered video assets to unveil Buick’s new flagship cars. "
draft = false
nda = false
client = "Buick"
year = "2016"
roles = ["Director", "Developer"]
agency = "Sisu"
tools = ["React", "React-Router", "Typescript", "GSAP", "Easel.js"]
featured_image = "images/work/buick/featured.png"
index = "01"
+++

<div class="markdown article__column">
{{% md %}}

## Highlights

### Interactive hotspots

Each section of the site had unique interactive hotspots allowing the user to explore different parts of the car from changing its color to turning on the headlights or seeing an x-ray view of the suspension as the car traveled over bumps in the road.

We achieved these various interactive effects by working with the [EaselJS](https://www.createjs.com/easeljs) library to use HTML5 Canvas and combine videos, image stills, and PNG animated sequences. We also used the [Green Sock Animation Platform](https://greensock.com/gsap) to coordinate the complex animation timelines.

![Website with interface to toggle car lights off and on](/images/work/buick/Buick_0001_winged-headlamps-off.jpg)

![Website with interface to open the car's tailgate](/images/work/buick/Buick_0003_liftgate.jpg)

### Video page transitions

As a user navigated through the sections of the site the canvas would seamlessly show video sequences moving around the car that would end with higher resolution still images for the final screen.

### Highly configurable

Each microsite is completely configurable using a JSON file making it easy for the client to swap out asset, pages, or spin up an entirely new site.

### Optimized performance

Due to the size of the assets we built a custom asset preloader that would start downloading prioritized assets for the current route, once those were done it would start downloading assets for the next probable route. This process could be paused, delayed, or re-prioritized based on the user's navigation through the site. This minimized delays between page transitions and the amount of time a user at to see a loading indicator.

### Unique mobile experience

Because the desktop site was so media heavy we served up a simplified experience for mobile users with more still images and a few select video interactions.

![Website with interface to open the car's tailgate](/images/work/buick/mobile.png)


{{% /md %}}
</div>
