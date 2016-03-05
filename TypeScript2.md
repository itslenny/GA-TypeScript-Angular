#TypeScript part 2

In this part we will cover the basics of using TypeScript with external modules and node.

##External Modules

What about all of our JavaScript modules?!?

Don't worry. Any JavaScript module will work great with TypeScript as-is, but if you want type checking and auto-complete you have to install type definitions (.d.ts files) for each module. 

There is a project called Definitely Typed which is like the npm for type definitions. In fact, the command line usage and package names are identical which makes it super easy.

Learn More Here: [Definitely Typed Site](https://github.com/DefinitelyTyped/DefinitelyTyped)

Installing tsd:

```
npm install -g tsd
```

Install some packages.

```
#install the node modules
npm install express lodash request --save

#install the type definitions
tsd install express lodash request --save
```

##TSConfig (again)

Currently the basic typescript compiler won't concatenate files using commonjs (the standard node js module loader) so we're going to look at a slightly different configuration.

```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "watch": true
        
    },
    "filesGlob" : [
        "./src/**/*.ts"
    ]
}
```

* module - commonjs (use node require() syntax)
* filesGlob - allows us to use wildcards to load files. This works because we're manually importing / loading files.

##Loading files and using type definitions

There are two syntaxes we can use to load files in typescript. Notice both use the `import` keyword instead of `var`.

```
import * as _ from "lodash";
import express = require('express');
```

To get the benefit of type checking and for the editor's auto complete to work correctly we have to tell it where to look for the type definitions. 

Thanks to TSD it's as simple as adding this one line to the top of each ts file.

```
/// <reference path="../typings/tsd.d.ts" />
```

##Arrow Functions

In typescript we can use arrow functions aka lambda functions. These functions work basically the same as anonymous functions with a couple small differences.

* Syntax
    * much shorter and easier to type
    * parenthesis are optional for single parameter functions
    * braces are optional for 1 line functions
    * return statements are optional for 1 line functions
* Context is retained. The context of the parent scope (if you reference `this` it is the parent context)

All three of these examples are identical...

```
var sum = function(a,b) {
    return a + b;
}
var sum = (a,b) => {
    return a + b;
}
var sum = (a,b) => a + b;
```

These are very useful with iterators (notice the parameter "i" doesn't have parenthesis.

```
items.map(i => i.data.title)
items.filter(i => i.data.score > 5)
```

##Challenge

Using what you've learned today let's create a basic in-memory blog (like the daily planet assignment). Uses a classes and interfaces to create a model for your blog entry and it's properties.

####Classes

* Blog
    * private variable for posts
    * public funcitons
        * addPost
        * getPost
        * listPosts
* Post
    * public title, body, author

When the node app initlizes it should initlize an instance of the `Blog` class. When a user adds a blog post it should use the `addPost` method to add it to the private post array.

####Bonus

Add a `save` and `load` funtion to the blog that reads/writes to a json file on disk. You should be able to use `JSON.stringify` and the [node fs module](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) to store the class to a file.

When you load the app it should load the file and when users add new posts it should save to the file.