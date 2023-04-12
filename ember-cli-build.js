'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      alias: {
        //"prismjs": "prismjs",
        //'prism-core': "prismjs/components/prism-core",
        'zero-md': "zero-md/dist/zero-md.min",
      } ,
      
      skipBabel: [
        {
          package: 'babel-plugin-prismjs',
          semverRange: '*',
        },
      ],

      webpack: {
        target: 'web',
        node: {
          global: true,
          fs: 'empty'
        },
        resolve: {
          extensions: ['.js'],
          symlinks: false
        }
      }
      
    },
    babel: {
      plugins: [
        //require.resolve('ember-auto-import/babel-plugin'),
        [ 
          "prismjs", 
          {
            "languages": ["javascript", "css", "bash", "lisp"],
            "plugins": [],
            "theme": "tomorrow",
            "css": true
          }
        ]
      ]
    },    
    codemirror: {
      modes: ['javascript', 'ruby']
    }
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
