# jstnmcbrd.com

[![Status](https://img.shields.io/github/actions/workflow/status/JstnMcBrd/jstnmcbrd.com/status.yml?logo=github&label=Status)](https://github.com/JstnMcBrd/jstnmcbrd.com/actions/workflows/status.yml)
[![CI](https://img.shields.io/github/actions/workflow/status/JstnMcBrd/jstnmcbrd.com/ci.yml?logo=github&label=CI)](https://github.com/JstnMcBrd/jstnmcbrd.com/actions/workflows/ci.yml)

## About

This is my personal website. It uses [Bootstrap](https://getbootstrap.com/), [React](https://react.dev/), and [Vite](https://vite.dev/), written in [TypeScript](https://www.typescriptlang.org/).

## Licensing

Without a specific license, this code is the direct intellectual property of the original developer. It may not be used, copied, modified, or shared without explicit permission.
Please see [GitHub's guide on licensing](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) and [choosealicense.com](https://choosealicense.com/no-permission/).

For legal reasons, if you choose to contribute to this project, you agree to give up your copyright and hand over full rights to your contribution. However, you will still be attributed for your work on GitHub. Thank you!

## Development

First, download all dependencies.
```sh
npm install
```

Then start the local development server.
```sh
npm start
```

Make sure to validate any changes before submitting them.
```sh
npm run lint
npm run build
```

## Deployment

Build the project.
```sh
npm run build
```

Preview the project build to verify it performs as expected.
```sh
npm run preview
```

Copy the contents of the `dist` folder to your deployment location.
