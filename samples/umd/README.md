# pillarbox-web umd sample

This project demonstrates how to use the UMD build of pillarbox in a plain browser environment:
no bundler, no npm, just a simple `index.html`.

You can explore and experiment with this sample directly in the browser via the following
playground:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)][stackblitz]

You can also use this project as a template.

## Quick guide

This project uses a bare HTML + JavaScript setup with no dependencies or framework tooling.

- Open the `index.html` file on your preferred browser or
- run a simple static server (e.g. with npx): `npx serve`

## Plugin demonstration

This sample includes two plugins to demonstrate how plugin integration works in a UMD environment:

* [`@srgssr/thumbnail-preview`](https://www.npmjs.com/package/@srgssr/thumbnail-preview)
* [`videojs-contrib-quality-menu`](https://www.npmjs.com/package/videojs-contrib-quality-menu)

These plugins are loaded via `<script>` tags and registered globally. The player is then initialized
with both plugins via the `plugins` option. Check the [`index.html`](index.html) file.

This setup mirrors a real-world integration scenario for third-party environments or legacy
applications that do not use module bundlers.

[stackblitz]: https://stackblitz.com/github/srgssr/pillarbox-web-demo/tree/main/samples/umd
