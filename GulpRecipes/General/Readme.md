## Gulp Config for a general site

When setting up a simple one page website, there are loads of corners that can be cut especially when
it comes to frontend compiling.

This script takes into account a really simple folder structure; The structure is as follows:

```
- coffee
- js
- less
- styles
- vendor
gulpfile.js
index.php

Put all vendor js into the vendor folder as it will be minimised and compiled to one lovely
file
