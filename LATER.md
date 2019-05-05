
# `#todo`, After PHIA

## Tuesday: Dunbar, LECKR, Booki, Dyme, Deploy


- [ ] Fill in basics for leckr, booki & dyme too
- [ ] Deploy and set up DNS correctly. That's a start!

## MailChimp Advanced Features 

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


## Pricing Page with Payment Gateway

- [ ] Add pricing page on landing-page
- [ ] Add multiple monetization options in the json-object (Fixed price and recurring, for now)
- [ ] Fill in options in json
- [ ] Link pay button to payment screen
- [ ] Add mollie or stripe or something else [like rcur](https://rcur.nl/) that lets you get a subscripition in a WebView (like Spotify)
- [ ] After doing rcur, come back to landing-page success page

## More design

- [ ] sketch insights
- [ ] sketch challenge
- [ ] .gif with all 4 screenshots



## New sections

- [x] Make it possible to add multiple of the same section (with different values)
- [ ] Add Features section (Copy OVFiets)
- [ ] Add Story Section
- [ ] Improve Blog Section
- [ ] Add Team Section
- [ ] Add Reviews Section


## Landing page online with A/B (2h)

- [ ] See if it's possible to A/B test with top-level domain. (easy: https://www.w3schools.com/js/js_window_location.asp)
- [ ] How to change landing page for different origins? For example, if you have ?ref=fb|tnw|phia

### FB Pixel for ads

### New Phone design

#### Huawei mate X design

It's brilliant. Just like putting a hot girl in front of your Volkswagen. Just like a guy driving a Lamborghini when all they sell is a watch. Just like celebrating love and happiness when selling Coca Cola.

When selling our app, we can show it being rendered on a Huawei Mate X. This will look expensive, as it is. 

![huawei](https://user-images.githubusercontent.com/1976888/56899590-16b25200-6a94-11e9-8dcb-2dd36e9bac99.jpg)
On the right half, contacts will be shown. On the left half, the statistics will be rendered. It will be purrfect!

#### Copy Dyme

More easier, would be the design of DYME x2: Left and right, so you can add two screen shots.

### Personalization

The https://unless.com/ idea. Brilliant.

## `#later`

### Improved title/favicon

Try React helmet for dynamic favicon, and better way to set title than I do now
https://github.com/nfl/react-helmet


### Add more Sections and possibilities `#toPlan #later` 

These are all only interesting in later stages, when there are already active users, and money is coming in. 

- [ ] Video Section
- [ ] Presskit Page
- [ ] Reviews Section
- [ ] Privacy Policy, Terms of Use, Data Policy, Cookie Policy
- [ ] More detailed contacting page
- [ ] Careers

### Set up universal `leckr-landing-api` `#later`

Figure out what' s needed for endpoints (probably subscriptions and email collection, however, it might be able to be done without backend at all, so don't do this too fast)

- [ ] Simply use Node JS, Express, REST, SQLite on Linode 
- [ ] Every thing needs other endpoints. For example, you also may need to unsubscribe, or settings accessible from the email. It's hard to provide a universal api for this as it's integrated with the userbase. Therefore, the endpoint could be listed in the settings of the landingpage


### Simple deploy script (great for white labeling) `#later`

This would be nice, especially if I end up making small changes that I want to deploy to many many websites. However, I think it's not relly needed yet if I just have a couple of sites. Deploying them all takes about 30 seconds per site anyway. No big deal. 

- [ ] Create a single bash script that deploys all sites
- [ ] Get next `.js-file` (skip `index.js`) inside settings folder. 
- [ ] Copy file to `index.js`, overwrite older index.
- [ ] Get next `.scss-file` (skip `_variables.scss`) inside settings folder.
- [ ] Copy file to `_variables.scss`, overwrite older one.
- [ ] Run `yarn build` && `yarn deploy{sitename}`
- [ ] Do this for all sites in a single script.

------------
