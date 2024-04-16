# Pillarbox-web Demo

![Pillarbox logo](README-images/logo.jpg)

This is a demo application for the [pillarbox-web](https://github.com/SRGSSR/pillarbox-web), a web
SDK that extends the functionality of video.js. You can use this demo to see how `pillarbox-web`
works and how to integrate it into your own web projects.

The latest demo build is also accessible here: https://srgssr.github.io/pillarbox-web-demo/

## Requirements

To run this demo, you need to have the following installed on your system:

- Node.js

## Quick start

To run this demo locally, follow these steps:

Add the `@srgssr` registry in your `.npmrc` file:

```text
//npm.pkg.github.com/:_authToken=TOKEN
@srgssr:registry=https://npm.pkg.github.com
```

To generate an authentication token follow this
guide: [Authenticating with a personal access token](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token)

Clone this repository:
```shell
git clone https://github.com/SRGSSR/pillarbox-web-demo.git
```

Install the dependencies:
```shell
npm install
```

Start the development server:
```shell
npm run start
```

Open your browser and go to `http://localhost:9696`

You should see a web page with a video player that uses `pillarbox-web`. You can play around with
the player settings and see how they affect the player behavior and appearance.

## Contributing

If you want to contribute to this demo, you are welcome to do so. Please follow the code style and
linting rules defined in this project. You can use the following commands to check and fix your
code:

Check your javascript code:
```shell
npm run eslint
```

Check your CSS and SCSS code:
```shell
npm run stylelint
```

Fix your CSS and SCSS code:
```shell
npm run stylelint:fix
```

This project also has a pre-commit hook that runs the linting check automatically before you commit
your changes. You can enable this hook by running the `prepare` script: `npm run prepare`.

Before submitting a pull request, please make sure that your code builds successfully. You can use
the following commands to build the project:
```shell
npm run build
```

Please take note of our [Contribution Guide](CONTRIBUTING.md).

## Licensing

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.
