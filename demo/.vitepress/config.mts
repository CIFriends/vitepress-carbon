import { defineConfigWithTheme } from 'vitepress'
import path from 'path'
import baseConfig from '../../src/theme/config/baseConfig'
import type { Config as ThemeConfig } from '../../src/theme/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-US',
  title: 'VitePress Mono',
  description: 'Your VitePress Theme',
  srcDir: 'src',
  base: '/vitepress-mono/',
  themeConfig: {
    logo: {
      src: "https://imgur.com/76Ls3no.png"
    },
    search: {
      provider: "local"
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    outline: [2, 3],
    editLink: {
      pattern: 'https://github.com/brenoepics/vitepress-mono/edit/main/demo/src/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/brenoepics/vitepress-mono' },
    ],

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {
            text: "Lorem ipsum dolor",
            link: "/api-examples1"
          },
          {
            text: "Sit amet consectetur",
            link: "/another-route"
          },
          {
            text: "Adipiscing elit sed",
            link: "/yet-another-route"
          },
          {
            text: "Non risus suspendisse",
            link: "/one-more-route"
          },
          {
            text: "Tortor dignissim sit",
            link: "/some-route"
          },
          {
            text: "Amet adipiscing nec",
            link: "/another-one"
          },
          {
            text: "Ultricies sed dolor",
            link: "/last-one"
          },
          {
            text: "Lorem ipsum dolor",
            link: "/api-examples1"
          },
          {
            text: "Sit amet consectetur",
            link: "/another-route"
          },
          {
            text: "Adipiscing elit sed",
            link: "/yet-another-route"
          }
        ]
      }
    ],
  },
  vite: {
    build: {
      minify: false
    },
    resolve: {
      alias: {
        'vitepress-mono': path.join(__dirname, '../../src')
      }
    }
  },
})
