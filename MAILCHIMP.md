# MailChimp

How to set up mailchimp

## Setup

### Going to the right URL

To make sure people end up on yourwebsite.com/emailsuccess, please do this:

In MailChimp,

1. audience
2. Manage audience
3. signup forms
4. form builder
5. forms and response emails -> confirmation thank you page
6. send subs to another URL
7. fill in something like https://yourdomain.com/emailsuccess
8. hit save

## URL

Get an URL like this:

https://kjkljlkjlj.us16.list-manage.com/subscribe/post?u=211c8e286b504f8faf1b92bb2&amp;id=74a7bddfd2

NB: with post-json instead of post, you'll get JSON in return instead.

## Setup e-mail address

1. From NameCheap, nameservers to CloudFlare
2. From CloudFlare, mx records to FastMail
3. Get e-mail, verify it in MailChimp
