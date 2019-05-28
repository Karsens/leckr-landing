# TODO

## Sharing Component

Button which can be added to multiple different sections

This Share Section should be able to make an estimation of virality of the app.

- [ ] Share button to share on WhatsApp (or in other places)
- [ ] Measure clicks on this
- [ ] Create nice short links that still can be tracked
- [ ] Measure clicks on links in whatsapp messages

## Profile feature for Dunbar

- [ ] Route https://dunbar.site/u?x=y&a=b&c=d should simply render those values, with the first as title.

## Add content + assets

- [ ] Dunbar.id (people API)
- [ ] Dunbar.vip (super premium, coaching, affiliate)
- [ ] Dunbar.doctor/help (psychological help)
- [ ] Dunbar.business (b2b sales to companies)
- [ ] Communify.cc (Dunbar for communities)
- [ ] Hood.li (Dunbar for neighborhoods)

## Cleanup

- [ ] proper typing of all sections

## Support all browsers

Galaxy S6 has stock Android browser by default, which doesn't support the current setup. A white screen appears.
This probably has to do with newer React 16.8 while not using babel. Communify.cc and OVFiets.net still work fine.

https://reactjs.org/docs/javascript-environment-requirements.html

https://facebook.github.io/create-react-app/docs/supported-browsers-features

Weirdly enough, the default browserl.ist says only 90% global is supported. But maybe it's because that exlcludes a lot of smaller devices.

Options are

1. Downgrade to lower react again, use packages same as in communify's script. Problem: no type support.

2. Use babel and see if that works.

3. Try to setup clean react project using babel and all recommended polyfills so it works on all old browsers too.

However, it's not that important. There aren't that many old browsers under the early adopters. This has to be done before the #launch, so before August. Let's wait for SDK33 and see if we can convert to RN Web.
