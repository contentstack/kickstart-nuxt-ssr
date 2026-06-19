// https://nuxt.com/docs/api/configuration/nuxt-config

import { getContentstackEndpoint, type ContentstackEndpoints } from "@contentstack/utils";
const endpoints = getContentstackEndpoint(process.env.NUXT_CONTENTSTACK_REGION || 'NA', '', true) as ContentstackEndpoints

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    // Certain API endpoints can be set via environment variables for custom or dedicated Contentstack environments.
    // You can omit these in your project. Use @contentstack/utils getContentstackEndpoint to get the right urls for your region.
    public: {
      apiKey: process.env.NUXT_CONTENTSTACK_API_KEY,
      deliveryToken: process.env.NUXT_CONTENTSTACK_DELIVERY_TOKEN,
      previewToken: process.env.NUXT_CONTENTSTACK_PREVIEW_TOKEN,
      environment: process.env.NUXT_CONTENTSTACK_ENVIRONMENT,
      preview: process.env.NUXT_CONTENTSTACK_PREVIEW === "true",
      region: process.env.NUXT_CONTENTSTACK_REGION as any,
      contentDelivery: process.env.NUXT_CONTENTSTACK_CONTENT_DELIVERY || endpoints.contentDelivery as string,
      previewHost: process.env.NUXT_CONTENTSTACK_PREVIEW_HOST || endpoints.preview as string,
      applicationHost: process.env.NUXT_CONTENTSTACK_CONTENT_APPLICATION || endpoints.application as string
    },
  },
})