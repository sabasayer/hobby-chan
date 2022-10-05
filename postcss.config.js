/* eslint-disable no-undef */

const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: [
        `./public/**/*.html`,
        `./src/**/*.vue`,
        `./node_modules/primevue/**/*.js`,
        `./node_modules/primevue/**/*.css`,
        `./node_modules/primevue/**/*.vue`,
        `./node_modules/@fullcalendar/**/*.css`,
        `./node_modules/@fullcalendar/**/*.js`,
      ],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ""
        );
        return (
          contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
          []
        );
      },
      safelist: [
        "body",
        "html",
        /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
        /^(?!cursor-move).+-move$/, // Move transitions
        /.*data-v-.*/, // Keep scoped styles
        // New Vue3 selectors
        /:slotted/,
        /:deep/,
        /:global/,
        /p-*/,
      ],
    }),
  ],
};
