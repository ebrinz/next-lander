
# Getting Started

This blog template is designed for an easy setup using Markdown files for posts.  
Each Markdown file (\`.md\`) should include metadata at the top, similar to:

```
title: First post
description: The first post is the least memorable.
updatedAt: '2020-04-16'
tag: songs
```

- **title**: Title of your post (displayed in headings, links, etc.)  
- **description**: Not currently used, but available for future expansions.  
- **updatedAt**: Date the post was last updated; also used to order posts.  
- **tag**: Used to organize posts into categories (one unique tag = one menu option).

You can see example \`.md\` files in the \`/data\` directory.

---

## Running the Blog

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Development Mode**  
   ```bash
   npm run start dev
   ```
   Then navigate to \`http://localhost:3000\` in your browser.

3. **Production Build**  
   ```bash
   npm run build && npm run start
   ```
   Then navigate to \`http://localhost:3000\`.

---

## Configuration

Adjust values in \`/config/params.json\` to change default template settings (e.g., site name, tagline, etc.).

- **Fonts**  
  Place a new font inside the \`/public\` folder and reference it in \`/config/params.json\`.

- **Logo SVG**  
  Copy your desired SVG file over \`/public/logo.svg\` to customize the site logo.  
  Remove any fixed \`height\` or \`width\` attributes in the \`<svg>\` tag, letting webpack resize it as needed.

- **Icon Links**  
  Navigation icons are from **Font Awesome**. For each link in \`/config/params.json\`, specify an icon name (e.g., \`fab\`, \`fas\`) that Font Awesome recognizes.
