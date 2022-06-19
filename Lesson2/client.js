const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("users.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObject.userPackage;

const client = new userPackage.Users(
  "localhost:4040",
  grpc.credentials.createInsecure()
);

client.addUser(
  {
    id: -1,
    name: "gal",
    password: "123456",
  },
  (err, response) => {
    console.log("Received " + JSON.stringify(response));
  }
);

client.getUsers({}, (err, response) => {
    console.log("second : " + JSON.stringify(response, null, 4));
})