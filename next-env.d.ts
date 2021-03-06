/* eslint-disable spaced-comment */
/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare module 'remark-breaks';
declare module 'remark-emoji';

declare module '@socialgouv/matomo-next' {
  export function init({ url: string, siteId: string }): void;
}
