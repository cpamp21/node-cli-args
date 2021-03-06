# node-cli-args

A simple argument manager for node

## Installation

`npm i --save node-cli-args`

## Usage

``` javascript
var nodeArgs = require('node-cli-args');
var argManager = new nodeArgs.ArgumentManager();

// Argument(long, short, defaultValue)
argManager.on(new nodeArgs.Argument('url','u', 'localhost'), function(val, defaultValue) {
    // val will be default value if no value is provided
    console.log('Your url argument has a value of: ' + val);
});

argManager.onDefault(function(defaults) {
    defaults.forEach(function(arg) {
        console.log('Unprefixed argument: ' + arg);
    });
});
```

Command line:
```
mycli --url=localhost helloWorld goodbye
```
or (short args don't support assigning values)
```
mycli -u helloWorld goodbye
```

Output:
```
Your url argument has a value of: localhost
Unprefixed argument: helloWorld
Unprefixed argument: goodbye
```