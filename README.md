# TailwindLibDemo

This is a demo workspace setup with a [TailwindCSS](https://tailwindcss.com/) configuration library.

## Applications

The way it works is by adding a reference to the tailwind.css file in the styles part of your app's project.json file under the build target.

```json
        "styles": [
          "apps/base-app/src/styles.css",
          {
            "bundleName": "tailwindCss",
            "inject": true,
            "input": "libs/tailwind-styles/tailwind.css"
          }
        ],

```

This will bundle the tailwind.css file with your app's styles.css file.

next to that you also import the tailwind.config.js as preset into your apps tailwind.config.js file.

```javascript
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../libs/tailwind-styles/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
};
```

## Library

When using the library within your apps the library do not need any tailwind config, as tailwind will be added in the buildstep of the app.

However, if you want to publish your library, or develop your components in storybook. You'll need to add tailwind config to the lib.

Here you import your preset in the same way

```javascript
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../libs/tailwind-styles/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
};
```

## Storybook

for storybook you'll need to add the tailwind.css file to the project.json file of the storybook lib

```json
    "storybook": {
      "executor": "@storybook/angular:start-storybook",
      "options": {
        "styles": ["libs/tailwind-styles/tailwind.css"],
        "port": 4400,
        "configDir": "libs/using-tailwind/.storybook",
        "browserTarget": "using-tailwind:build-storybook",
        "compodoc": false
      },
      "configurations": {
        "ci": {
          "quiet": true
        }
      }
    },
```