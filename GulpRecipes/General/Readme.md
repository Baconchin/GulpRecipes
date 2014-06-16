## Gulp Config for a One Page Website

When setting up a simple one page website, there are loads of corners that can be cut especially when
it comes to frontend compiling.

This script takes into account a really simple folder structure; The structure is as follows:

```
- coffee
-- main.coffee
- js
- less
-- main.less
- styles
- vendor
gulpfile.js
index.php

Put all vendor js into the vendor folder as it will be minimised and compiled to one lovely
file.

There is no need to create a main.css file as gulp will create that for you; the same goes
for the main.js

A simple gulp config that will get you going
