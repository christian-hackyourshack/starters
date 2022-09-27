import mdx from '@astrojs/mdx';
import m2dx from 'astro-m2dx';

import { defineConfig } from 'astro/config';

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  autoImports: '_autoimports.ts',
  scanTitle: true,
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    extendDefaultPlugins: true,
  },
});
