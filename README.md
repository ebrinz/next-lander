## Getting Started

This blog template is meant for an easy set-up blog for using markdown files to make posts
Each file should have metadata at the top like the following

`title: First post`
`description: The first post is the least memorable.`
`updatedAt: '2020-04-16'`
`tag: songs`

See the example .md files in /data

Title will be the title of your post.
Description isn't used yet.
UpdatedAt is used to order posts.

Tag is used to organize posts into buckets
Each unique tag will make up a menu option for navigatin

To run:

Run `npm install`

For dev, run `npm run start dev` and navigate to localhost:3000 in your browser

Or, for testing prod, run `npm run build && npm run start` and navigate to localhost:3000 in your browser


Adjust values in /config/params.json to change default template values

Copy a new font into the /public folder and point to it in /config/params.json

To change the logo svg, copy a new svg into the /public/logo.svg file

Erase height and with attributes of svg tag in /public/logo.svg file to allow webpack to resize svg to proper dimensions

To pick icons for the links in the nav bar, use icon names from Font Awesome fab search
