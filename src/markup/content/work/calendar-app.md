+++
title = "Calendar App"
date = 2018-04-20T14:54:44-07:00
description = "A touch-friendly, drag-and-drop collaborative event planning app that syncs in real-time and is optimized to work on the Microsoft Surface Hub"
draft = false
nda = true
client = "NDA"
year = "2017"
roles = ["Developer", "Designer", "IA"]
agency = "Sisu"
tools = ["React", "React-DnD", "Express", "Socket.IO", "MongoDB", "Jenkins", "Docker"]
featured_image = "images/work/calendar/featured.png"
index = "02"
+++

<div class="markdown article__column">
{{% md %}}

## Highlights

### Design in Build

Created the wire frames for this project and designed/styled the UI while building it in the browser to save time and easily iterate. This worked well since everything in the app had a functional purpose and it allowed the technology requirements to drive the UI.

### Microsoft Surface Hub

The app was made to replace a physical board with the massive 84" [Microsoft Surface Hub](https://www.microsoft.com/en-us/surface/business/surface-hub). This required following Microsoft's user interface guidelines for the Hub and taking into special consideration that multiple people can use it at the same time.

### Custom API with authentication

Built a custom [Node](https://nodejs.org/en/)/[Express](https://expressjs.com/) API that stores all the data using MongoDB and uses the Express [Session middleware](https://github.com/expressjs/session) for authentication and session management.

### Real Time

To prevent scheduling conflicts the app uses [socket.io](https://socket.io/get-started/chat) to update and sync events in real time.

### Drag-and-Drop with multi-touch support

Uses the [React DnD](https://github.com/react-dnd/react-dnd) library to implement drag-and-drop events that play nicely with Redux. Leverages feature detection to switch between HTML5 or Touch backend as needed.

Users can drag an event while also swiping across the app to move to a different month or year.

### Automated Deploys

All of the source code is hosted in GitLab and utilizes git-hooks with [Jenkins](https://jenkins.io/) so any code pushed to the master branch is automatically deployed to production.

### Testing

Unit tests created using [Karma](https://karma-runner.github.io/2.0/index.html) and [Mocha](https://mochajs.org/) with [Flow](https://flow.org/) for type checking.

{{% /md %}}
</div>
