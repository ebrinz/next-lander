## Getting Started

This blog template is meant for an easy set-up blog for using markdown files to make posts.
Each file should have metadata at the top like the following.

`
title: First post
description: The first post is the least memorable.
updatedAt: '2020-04-16'
tag: songs
`

Title will be the title of your post.
Description isn't used yet.
UpdatedAt is used to order posts.
Tag is used to organize posts into buckets. Each unique tag will make up a menu option for navigating.

First run `npm run index-files`
This will walk through all the markdown files and read the metadata from each file.

then for dev, run `npm run start dev`

or for testing prod, run `npm run build && npm start`


Adjust values in /config/params.json to change default template values.

To pick icons for the links in the nav bar, use icon names from Font Awesome fab search.
