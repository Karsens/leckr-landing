
# `#todo` 4th of May, 2019

The #todo today: Fix MVP Dunbar landing page with leads aquiring possibility.

## MailChimp

For [Communify](https://communify.cc), I used Sendgrid and did the whole activation of account etc. myself. This can be done, but I could greatly benefit from a service like MailChimp for many reasons: Security, No Spam, Lot's of options and automation from a dashboard, and best of all: no backend needed. Especially the last one is something that appeals to me, as a solo devpreneur.

Disadvantage is, of course, pricing. But once I convert a bit, this should be doable, as it's about 0,4 cent per subscriber per month. And I'll make about a dollar per subscriber per month, or even more. 

To set it all up, I did the following things:

- [x] Set up MailChimp list Dunbar
- [x] Redirect thank you page MailChimp to `https://dunbar.site/success-signup`
- [x] Create dunbar campain for welcome email
- [ ] Use [react-mailchimp-subscribe](https://www.npmjs.com/package/react-mailchimp-subscribe)
- [ ] Change MastHead UI, like `Your e-mail` [Get] with subtitle so it's clear you'll receive a download link.
- [ ] Create `/success-signup` that also shows download links.
- [ ] Edit MailChimp campain so it looks good, and says you'll get the app later, you're enrolled for the beta.
- [ ] How not to get in SPAM? [Read this](https://mailchimp.com/resources/avoid-spam-filters/)


- [ ] `#later` Integrate with [SimpleTexting](https://mailchimp.com/integrations/sms-and-text-message-marketing/) to ask for phone numbers and send SMS with app links instead.
- [ ] `#later` it would be ideal if we can also connect the e-mail to user-data (pixel and other trackers, ad segment) and actual in-app data (if we also track a user there with the same trackers). This is definitely possible. I can tag whatever I want and they have an API and Zapier integrations so there's many possibilities to connect in-app events to a mail account. Maybe I can even build my own site to app connector, based on device info, ip, time, geo-location, whatever. 
- [ ] `#later` it would also be necessary to be able to tag payments information with [rcur](https://rcur.nl)
- [ ] also, a tag for when a user that churned after putting in the email, should be noted. 
- [ ] retargeting after a user downloaded the app but didn't do much with it. with tags I can basically know if a user is active and how much the user uses the app. However, this is probably easier to do from firebase... I don't know... I think I should just try...



## Sharing Feature

Button which can be added to multiple different sections

This Share Section should be able to make an estimation of virality of the app.

- [ ] Share button to share on WhatsApp (or in other places)
- [ ] Measure clicks on this
- [ ] Create nice short links that still can be tracked
- [ ] Measure clicks on links in whatsapp messages

## Deploy

- [ ] Deploy this for Dunbar, LECKR, and Booki

Then start with sunday!