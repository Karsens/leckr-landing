
## `#todo` 4th of May, 2019

The #todo today: Fix MVP Dunbar landing page with leads aquiring possibility.

### Assets

- [x] Logo
- [x] Design: homescreen, actions

### Set up new boilerplate (3h)

- [x] Pick Communify react folder, put it in `leckr-landing`
- [x] Start some extraction...
- [x] extract `pages/Unsubscribe`
- [x] extract `pages/Home/images`
- [x] extract `pages/Home/index`
- [x] extract `MastHead`
- [x] extract `Navigation`
- [x] extract `News`
- [x] Make it look the same for Communify 
- [x] publish Communify from this new codebase

### DNS

- [x] Setup DNS for Dunbar.site, Dunbar.vip, Dunbar.club, and all others.


### Other differentiations 

- [ ] Change of title
- [ ] Change of favicon
- [ ] Change of main colors
- [ ] Change of bg pattern
- [ ] Change which sections to include `Settings.sections: string[]`
- [ ] Change wether or not to use the GraphQL API

### New sections `#toplan`

- [ ] Story Section
- [ ] Features section (Copy OVFiets)
- [ ] Improve Blogs Section
- [ ] Team Section

### Copy

- [ ] Get copy from [beta blog](https://karsens.com/dunbar-beta) (and Typeform), put it in different landing pages.

### Cleanup

- [ ] better naming for communify-specific components and pages like `CommunityDirectory` instead of `Directory` and `communifyUnsubscribe` instead of `unsubscribe`

### Dynamic CSS

- [x] Try it for Dunbar. Extract unnessecary stuff
- [ ] Figure out how to also extract CSS from JS file; one CSS source of truth could be a good start (and some cleanup wouldn't be too bad either)
- [ ] extract `styles/_variables.js`



### Landing page online with A/B (2h)

- [ ] See if it's possible to A/B test with top-level domain.
- [ ] How to change landing page for different origins? For example, if you have ?ref=fb|tnw|phia

### Email collection

- [ ] Collect email on MastHead in order to download app. If this flag is true, remove iOS and Android buttons, just show form to fill in e-mail.
- [ ] Set up third-party backend for this, like mailchimp.
- [ ] Make it work, make it automatically send an email with some data, when we receive form-submission

### Share section

This Share Section should be able to make an estimation of virality of the app.

- [ ] Share button to share on WhatsApp (or in other places)
- [ ] Measure clicks on this
- [ ] Create nice short links that still can be tracked
- [ ] Measure clicks on links in whatsapp messages

--------------------
