var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    metalsmith_in_place = require('metalsmith-in-place'),
    metalsmith_layouts = require('metalsmith-layouts'),
    metalsmith_json = require('./load_json');


Metalsmith(__dirname)
    .source('./src')
    .use(markdown())
    .use(metalsmith_json())
    .use(metalsmith_in_place({engine: "handlebars"}))
    .use(metalsmith_layouts({engine: "handlebars"}))
    .destination('./build')
    .build((err) => {console.log(err)})
