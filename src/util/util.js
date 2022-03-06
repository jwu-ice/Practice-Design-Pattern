export const $ = (selector, base = document) => base.querySelector(selector);
export const $$ = (selectors, base = document) =>
  base.querySelectorAll(selectors);
