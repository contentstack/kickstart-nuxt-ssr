// https://nuxt.com/docs/api/configuration/nuxt-config

import { getContentstackEndpoints, getRegionForString } from "@timbenniks/contentstack-endpoints";
const region = getRegionForString(process.env.NUXT_CONTENTSTACK_REGION as string)
const endpoints = getContentstackEndpoints(region, true)

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    // Certain API endpoints can be set via environment variables for internal testing at Contentstack
    // You can omit in your project. Use @timbenniks/contentstack-endpoints to get the right urls for your region.
    public: {
      apiKey: process.env.NUXT_CONTENTSTACK_API_KEY,
      deliveryToken: process.env.NUXT_CONTENTSTACK_DELIVERY_TOKEN,
      previewToken: process.env.NUXT_CONTENTSTACK_PREVIEW_TOKEN,
      environment: process.env.NUXT_CONTENTSTACK_ENVIRONMENT,
      preview: process.env.NUXT_CONTENTSTACK_PREVIEW === "true",
      region: region ? region : process.env.NUXT_CONTENTSTACK_REGION as any,
      contentDelivery: process.env.NUXT_CONTENTSTACK_CONTENT_DELIVERY || endpoints && endpoints.contentDelivery,
      previewHost: process.env.NUXT_CONTENTSTACK_PREVIEW_HOST || endpoints && endpoints.preview,
      applicationHost: process.env.NUXT_CONTENTSTACK_CONTENT_APPLICATION || endpoints && endpoints.application
    },
  },
})