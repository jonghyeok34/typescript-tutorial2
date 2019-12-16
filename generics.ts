import { Person } from "./classes";

function echo<T>(arg: T): T {
  return arg;
}

// var myStr: string = echo(1); //Type '1' is not assignable to type 'string'
var myStr: number = echo(1);

class Admin extends Person {}
class Manager extends Person {}

let admin = new Admin("a", "a");
let manager = new Manager("a", "a");

// function personEcho(person: Person): Person {
//   return person;
// }
// var foo = personEcho(admin);
// return Person
function personEcho<T extends Person>(person: T): T {
  return person;
}
//return Admin
var foo = personEcho(admin);
//return manager
var bar = personEcho(manager);
