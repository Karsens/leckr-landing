# TODO

## Upgrade dependencies

 Add the proper (newer) version of javascript/react/babel. On dunbar, it's all fine. Here it doesn't accept types, gives many stupid ESLint errors... I should have the same compiler and rules.
 
  1) update package.json things
  2) get the right babel, compiler, eslint, prettier, etc.
  3) get rid of all those annoying red lines everywhere that don't even resolve themselves (ESLINT SHIT)
  4) Make sure I can use types and optional chaining.
 
## Better typing of Settings

There is a simple structure in Settings:

  type Settings = { pages: Page[], assets: Assets, ...Global }
  
  type Page = { title: string, showInMenu: boolean, showInFooter: boolean, sections: Section[] }
  type Section = { type: enum, options: Options[] }
  type Options = { ref?: string, ...options: any }
  
  type Assets = { logo: img, image1: img, image2: img }

  type Global = { appName: string, copyrightYear: string, apiUrl: string, driftId: string, companyName: string, colors: Colors, style: Style }

  type Colors = { primary, primaryDarker, primaryLighter }
  type Style = { fontFamily: { title, text } }


  To summarize, all pages are just a set of sections, which can have options or no options to use default options. If multiple options are given, the right options are chosen based on the ref key.



## New sections

- [x] Make it possible to add multiple of the same section (with different values)
- [x] Add Features section (Copy OVFiets)
- [ ] Add Story Section
- [ ] Add Timeline Section
- [ ] Improve Blog Section
- [ ] Add Team Section
- [ ] Add Blurp Section

## Improved title/favicon

Try React helmet for dynamic favicon, and better way to set title than I do now
https://github.com/nfl/react-helmet


## Profile feature for Dunbar

- [ ] Route https://dunbar.site/u?x=y&a=b&c=d should simply render those values, with the first as title.

## Add content + assets

- [ ] Dunbar.site , Dunbar.club , Dunbar.vip
- [ ] LECKR.io
- [ ] GoBooki.co
- [ ] Karsens.com
- [ ] OVFiets.net
- [ ] Colivingnet.com
- [ ] CoworkerEvents.com
- [ ] Hood.li
- [ ] Dyme.karsens.com

## MailChimp (for all above websites)

- [ ] Set up mailaddress (noreply) through outlook, gmail or ImprovMX
- [ ] Create MailChimp audience
- [ ] Add audience ID to script

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


## Get rid of SCSS

  preferably, get rid of all SCSS. It's so fucking annoy. I just want React Style Objects. Inline or outline, I don't care.