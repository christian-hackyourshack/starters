import mdx from '@astrojs/mdx';
import m2dx from 'astro-m2dx';
import { defineConfig } from 'astro/config';
/** @type {import('astro-m2dx').Options} */

import tailwind from '@astrojs/tailwind';
const m2dxOptions = {
  autoImports: '_autoimports.ts',
  scanAbstract: true,
  scanTitle: true,
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    extendDefaultPlugins: true,
  },
});
