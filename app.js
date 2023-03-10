// npm - global command, comes with node
// syntax. npm --version

// local dependency - use it only in this particular project
// syntax. npm i <packageName>

// global dependency - use it in any project
// syntax. npm install -g <packageName>

//package.json - manifest file (stores important info about project.package)
//manual approach (create package.json in the root, ceate properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
