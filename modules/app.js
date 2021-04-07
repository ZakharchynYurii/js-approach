//CommonJS Module Syntax
const person = require('./mymodule');
console.log(person.name);

// import {person, sayHello} from "./mympdule2";
import * as mod from './mympdule2';

console.log(mod.person.name);
console.log(mod.sayHello());
