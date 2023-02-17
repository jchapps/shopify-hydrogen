import { defineConfig } from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'polyjewels.myshopify.com',
    storefrontToken: import.meta.env.PUBLIC_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
  },
});
