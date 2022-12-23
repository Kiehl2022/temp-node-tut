//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const name = require('./4-name');
const sayHi = require('./5-utils');
const person = require('./6-alternative-flavor');
require('./7-mind-grenade');  //autmatically runs the function in the mind-grenade if it is defined

sayHi(name.agnes);
sayHi(name.shirley);
sayHi(name.prime);