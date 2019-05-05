
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

- [x] Change of title
- [x] Remove favicon
- [x] Change of main colors
- [x] Change/removal of bg pattern
- [x] Make it possible to change which sections to include `Settings.sections: string[]`

### Dynamic CSS

- [x] Try it for Dunbar. Extract unnessecary stuff
- [x] extract `styles/_variables.js` and add all css variables needed there

### Copy

- [x] Get copy from [beta blog](https://karsens.com/dunbar-beta) (and Typeform), put it in different landing pages.

### Cleanup

- [x] better naming for communify-specific components and pages like `CommunityDirectory` instead of `Directory` and `communifyUnsubscribe` instead of `unsubscribe`

# MailChimp

For [Communify](https://communify.cc), I used Sendgrid and did the whole activation of account etc. myself. This can be done, but I could greatly benefit from a service like MailChimp for many reasons: Security, No Spam, Lot's of options and automation from a dashboard, and best of all: no backend needed. Especially the last one is something that appeals to me, as a solo devpreneur.

Disadvantage is, of course, pricing. But once I convert a bit, this should be doable, as it's about 0,4 cent per subscriber per month. And I'll make about a dollar per subscriber per month, or even more. 

To set it all up, I did the following things:

- [x] Set up MailChimp list Dunbar
- [x] Redirect thank you page MailChimp to `https://dunbar.site/success-signup`
- [x] Create dunbar campain for welcome email
- [x] Try [react-mailchimp-subscribe](https://www.npmjs.com/package/react-mailchimp-subscribe)
- [x] Change MastHead UI, like `Your e-mail` [Get] with subtitle so it's clear you'll receive a download link.
- [x] Create `/success-signup` that also shows download links.
- [x] Edit MailChimp campain so it looks good, and says you'll get the app later, you're enrolled for the beta.
- [x] How not to get in SPAM? [Read this](https://mailchimp.com/resources/avoid-spam-filters/)
