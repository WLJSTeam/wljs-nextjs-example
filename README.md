# Static Blog with Interactive WLJS Notebooks (Next.js + MDX)

This is a basic **Next.js** project suitable for statically hosted websites and blogs. It renders [**WLJS Notebook**](https://wljs.io) cells exported as an MDX file. Learn how to export and publish your interactive notebooks [here](#).

## Online Demo
[The demo](https://github.com/JerryI/wljs-mdx-blog-example) is hosted on GitHub Pages and deployed using this template.

## Stack
- **Next.js**
- **@next/mdx**
- **Twind**
- **remark-mdx**
- **wljs-notebook-react** (see [here](https://github.com/JerryI/wljs-notebook-react))

## How to Run
Clone the repository and then run:

```bash
npm install
npm start
```

## How to run with your notebook
Export a notebook as `index.mdx` directly to `/pages/index.mdx` and restart a development server