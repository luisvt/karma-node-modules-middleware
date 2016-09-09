# karma-node-modules-middleware

Middleware to serve static node_modules directory.
 
This is useful if yue use `requirejs` and `npm` together.

# Install

```
npm i --save-dev karma-node-modules-middleware
```

# Usage

Add next line to `karma.conf.js`:

```
midleware: ['node-modules']
```

For example you could use next configuration file if you want to use: `karma`, `requirejs` `jasmine` and `npm`

```
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'requirejs'],

    middleware: ['node-modules'],

    files: [
      'test-main.js',
      {pattern: 'src/**/*.js', include: false},
      {pattern: 'test/**/*.js', include: false}
    ],

    browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],

    autoWatch: true
  })
}

```
