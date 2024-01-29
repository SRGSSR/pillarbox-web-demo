# Pillarbox-web Demo

![Pillarbox logo](README-images/logo.jpg)

This is a demo application for the [pillarbox-web](https://github.com/SRGSSR/pillarbox-web), a web
SDK that extends the functionality of video.js.

You can use this demo to see how `pillarbox-web` works and how to integrate it into your own web
projects.

## Requirements

To run this demo, you need to have the following installed on your system:

- Node.js (version 14 or higher)

## Quick start

To run this demo locally, follow these steps:

1. Clone this repository: `git clone https://github.com/SRGSSR/pillarbox-web-demo.git`
2. Navigate to the project folder: `cd pillarbox-web-demo`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:9696`

You should see a web page with a video player that uses `pillarbox-web`. You can play around with
the player settings and see how they affect the player behavior and appearance.

Sure, I can help you with that. Here is the updated contributing section with the added information:

## Contributing

If you want to contribute to this demo, you are welcome to do so. Please follow the code style and
linting rules defined in this project. You can use the following commands to check and fix your
code:

- `npm run eslint` to check your JavaScript code
- `npm run stylelint` to check your CSS and SCSS code
- `npm run stylelint:fix` to fix your CSS and SCSS code

This project also has a pre-commit hook that runs the linting check automatically before you commit
your changes. You can enable this hook by running the `prepare` script: `npm run prepare`.

Before submitting a pull request, please make sure that your code builds successfully. You can use
the following commands to do that: `npm run build` to build the project.

Please take note of our [Contribution Guide](CONTRIBUTING.md).

## Licensing

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.
