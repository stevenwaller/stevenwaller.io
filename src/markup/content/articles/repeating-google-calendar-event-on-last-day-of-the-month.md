+++
title = "Repeating Google Calendar event on the last day of the month"
date = 2017-03-04T14:10:23-07:00
description = "I was trying to create an event in Google Calendar that takes place on the last day of each month. Unfortunately there is not an easy way to this."
draft = false
tags = []
+++

<div class="article__column markdown">
{{% md %}}

I was trying to create an event in Google Calendar that takes place on the last day of each month. Unfortunately there is not an easy way to do this since Google Calendar only supports the following:

- Daily
- Weekly on <day of the week>
- Monthly on the first <day of the week>
- Annually on <date of the month>
- Every weekday (Monday to Friday)
- Custom

Custom looks promising, but doesn't have an "End of the month" option.

![Google calendar custom recurrence interface](/images/repeating-event/custom-ui.jpg)

## .ICS file to the rescue

Fortunately Google Calendar supports importing `.ics` files which are a plain-text calendar format that originated with Apple iCal (now just called Calendar). Microsoft Outlook also supports importing `.ics` files. Sometimes you will see people send `.ics` files as part of meeting request since they don't know what calendar app you may be using.

### Create an .ics file

You can create a new, blank `.ics` file in your favorite text editor and copy and past the following code into it.

```
BEGIN:VCALENDAR
BEGIN:VEVENT
DTSTART:20180131
RRULE:FREQ=MONTHLY;BYDAY=SU,MO,TU,WE,TH,FR,SA;BYSETPOS=-1;WKST=MO
SUMMARY:Your event title goes here
END:VEVENT
END:VCALENDAR
```

Or [download this one](/files/repeating-event.calendar.ics) to get you started.

### Update the .ics file

As you can see there are a couple properties set up in the file to make a recurring event, but we only need to update the `DTSTART` and `SUMMARY`.

- `BEGIN:VCALENDAR` and `BEGIN:VEVENT` lines create the "calendar object". If you wanted you could even group multiple calendar objects into one file.
- `BEGIN:VEVENT` and `END:VEVENT` lines describe your actual event.
- `DTSTART` is the start time of the first event and follows a YYYYMMDD format. In this case it is the last day of January in 2018 `20180131`.
- `RRULE` is the recurrence rule which looks a bit confusing, but is setting your event's date to be the first day of the month minus one day. No need to update this.
- `SUMMARY` is essentially the title for you event and what you will see in your calendar.

Some optional properties are `DTEND` if you don't want your event to repeat forever and `DESCRIPTION` where you can add more info about the event.

If you want to know all the available properties you should check out this [iCalendar Wikipedia Article](https://en.wikipedia.org/wiki/ICalendar). You can even do some interesting things like set up To Dos or Reminders for the event.

### Import the .ics file

After updating the `DTSTART` and `SUMMARY` properties of the `.ics` file open up your [Google Calendar](https://calendar.google.com/calendar/b/1/r/month) and click the plus icon next to "Add a friend's calendar" and select "Import".

Note: this might say "Add a coworker's calendar" if you are using an office account.

![Google Calendar Import drop-down option](/images/repeating-event/import.jpg)

Select the file from your computer and make sure you are adding the event to the right calendar.

![Google Calendar select file interface](/images/repeating-event/select-file.jpg)

Then click the "IMPORT" button.

![Google Calendar import button](/images/repeating-event/import-btn.jpg)

If everything worked you should see a messaging saying "Imported 1 out of 1 event."

![Google Calendar success message](/images/repeating-event/success.jpg)

### Celebrate

You should now see your event repeating on the last day of the month!


{{% /md %}}
</div>
