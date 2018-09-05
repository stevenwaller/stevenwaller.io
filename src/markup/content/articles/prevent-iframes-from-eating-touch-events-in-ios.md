+++
title = "Prevent iFrames from eating touch events in iOS"
date = 2017-10-12T16:59:40-07:00
description = "This is a short article, but I just wanted to document this quick fix to allow touch events to bubble when a user touches an iFrame."
draft = false
tags = []
+++

<div class="article__column markdown">
{{% md %}}

This is a short article, but I just wanted to document this quick fix.

I was working an creating a custom carousel of YouTube videos and on `touchmove` I wanted to get the X coordinates of the user's finger and use CSS `translate` to move the content to match.

The challenge I ran into is if the user touches the YouTube iFrame the touch event never bubbles up.

After messing around with a lot of different options I found that adding `-webkit-overflow-scrolling: touch;` to a the parent `div` containing the videos allowed the event to bubble up properly.

If the parent div is wide enough to contain the child iFrames you don't have to worry about the browser trying to scroll, you just get access to the touch event.

![Custom scroll area containing videos](/images/iframe-touch/layout.gif)

{{% /md %}}
</div>
