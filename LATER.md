# Todo after T.N.W

## MailChimp Advanced Features

- [ ] `#later` Integrate with [SimpleTexting](https://mailchimp.com/integrations/sms-and-text-message-marketing/) to ask for phone numbers and send SMS with app links instead.
- [ ] `#later` it would be ideal if we can also connect the e-mail to user-data (pixel and other trackers, ad segment) and actual in-app data (if we also track a user there with the same trackers). This is definitely possible. I can tag whatever I want and they have an API and Zapier integrations so there's many possibilities to connect in-app events to a mail account. Maybe I can even build my own site to app connector, based on device info, ip, time, geo-location, whatever.
- [ ] `#later` it would also be necessary to be able to tag payments information with [rcur](https://rcur.nl)
- [ ] also, a tag for when a user that churned after putting in the email, should be noted.
- [ ] retargeting after a user downloaded the app but didn't do much with it. with tags I can basically know if a user is active and how much the user uses the app. However, this is probably easier to do from firebase... I don't know... I think I should just try...

- [ ] It would be ideal to add a new subscriber to multiple lists with one signup. Possible lists: - Critical List: Only critical news updates (Big updates, releases, etc.) --> Barely send anything. - Beta List: Feedback requests forms & asking for questions - Blog List: Get e-mails whenever there are new posts, or, for example, one mail per week/month with blog updates - Newsletter List: Weekly or monthly newsletter, success stories, tips, tricks, new features, etc. - Onboarding List: Why, How, What, etc.

- [ ] Marnix suggested adding checkboxes for these lists so you can choose not to subscribe to everything. If we do this, the form should have info about all lists in type MailChimpList = { url: string, title: string, description: string, optin: boolean, disabled: boolean, hidden: boolean }. There are many possibilites, and it's unsure (and may differ per segment) what people like, and what gets a high conversion rate.

## Png to Gif

First, show the regular screenshot. A small size png.
After it's loaded, show a gif 3D animation (made with Rotato.xyz)
https://medium.com/front-end-weekly/how-to-optimize-image-loading-on-your-website-855020fb41ae

This technique can be used to do this.


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

### Add more Sections and possibilities `#toPlan #later`

These are all only interesting in later stages, when there are already active users, and money is coming in.

- [ ] Video Section
- [ ] Presskit Page
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

## Get rid of SCSS and tests and simplify codebase a lot

I could remove all SCSS and use inline styles and React.StyleSheet everywhere instead. This will make time to context much faster, and this will also simplify the codebase (less layers, 4x less files), better overview.

But it's not a priority. At least, I know it's possible. But there's a big chance that I'll end up moving towards React Native Web anyway later.

By the way... if that's really the case... should I really be making the website better now? Is that really a priority? I think the app may be more important even! Okay... It's nice to have a bit more info. The feature section and a story would be nice. But I don't think I should put many many more hours into this. Let's just add the features section to dunbar, booki, leckr, and yeah.. just make it pretty a bit more. focus on that.

## TypeScript

Make it possible to automatically check whether or not the types are correct. This is better to do when we migrate to Expo Web (This can be SDK 33 or SDK 34)

## Prepare for RN Web migration

Not important as we don't know if we'll ever do this or soon, but:

- div can be View which is a div wrapper
- same goes for all other html tags: p, b, i, li, ul, etc.
- minimize SCSS and separate it as much as possible from the actual functionality, so that it can easily be extracted (if we can't remove it now)
