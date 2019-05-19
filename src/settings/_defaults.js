import { Page } from "./_types";

const privacy: Page = {
  title: "Privacy",
  route: "privacy",
  showInMenu: false,
  showInFooter: true,
  internalPage: true,
  sections: [{ type: "Privacy" }]
};

const emailsuccess: Page = {
  title: "Success",
  route: "emailsuccess",
  showInMenu: false,
  showInFotter: false,
  internalPage: true,
  sections: [{ type: "EmailSuccess" }]
};

const paymentsuccess: Page = {
  title: "Success",
  route: "paymentsuccess",
  showInMenu: false,
  showInFotter: false,
  internalPage: true,
  sections: [
    {
      type: "Markdown",
      optionsArray: [
        {
          markdown: "Thank you! Your code is: **ASDFKA234**"
        }
      ]
    }
  ]
};

const defaults = { privacy, emailsuccess, paymentsuccess };

export default defaults;
