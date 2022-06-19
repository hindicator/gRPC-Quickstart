const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("users.proto", {});

const grpcObject = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObject.userPackage;

const server = new grpc.Server();
/**
 * Declareing the server services
 */
server.addService(userPackage.Users.service, {
  addUser: addUser,
  getUsers: getUsers,
});
server.bindAsync(
  "0.0.0.0:4040",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
  }
);

const users = [];

function addUser(call, callback) {
  const newUser = {
    id: users.length + 1,
    name: call.request.name,
    password: call.request.password,
  };
  users.push(newUser);
  console.log(newUser);

  callback(null, newUser);
}
function getUsers(call, callback) {
  const data = {
    users: users,
  };
  callback(null, data);
}

console.log("Server running on localhost:4040");
// const addUser = (call, callback) => {
//   console.log("a");
// };
// const getUsers = (call, callback) => {
//   console.log("a");
// };
