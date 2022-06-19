// const Scheme = require()
// import Scheme from "./proto/greeting";
const Scheme = require('./proto/example_pb')

const gal = new Scheme.User();

gal.setId(100);
gal.setName("gal");
gal.setSalary(10000);

console.log("Name is " + gal.getName());
console.log(gal);
// console.log(gal.serializeBinary());
console.log(gal.toString());
console.log("aaaaaaaa");
