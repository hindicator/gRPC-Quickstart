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
  "0.0.0.0:4045",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
  }
);

function addUser(call, callback) {
  console.log(call);
}
function getUsers(call, callback) {
  console.log(call);
}
// const addUser = (call, callback) => {
//   console.log("a");
// };
// const getUsers = (call, callback) => {
//   console.log("a");
// };
