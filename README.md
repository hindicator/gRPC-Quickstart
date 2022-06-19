# gRPC Tutorial

```diff
-Please note :
protobuf Version v21 (current latest) has BUGS with javascript,
Consider using protoc version 3.15.7 and below.
```

<br>

- ProtoC download :

  - ```
    https://github.com/protocolbuffers/protobuf/releases
    ```

- gRPC Docs :

  - ```
    https://grpc.io/docs/languages/node/quickstart/
    ```

- proto file config

  - ```
    /* Specify the syntax type */
    syntax = "proto3";

    /* Set the package name */
    package packageName;

    /* Define object methods */
    service Users {
        rpc addUser (User) returns (User);
        rpc getUsers (no_params) returns (getUsers);
    }

    /* Declare object attributes */
    message User {
        int32 id = 1;
        string name = 2;
        int32 age = 3;
        string password = 4;
    }

    /* All-In-One object to contain all the childrens */
    message getAllUsers {
        /* repeated needed for protocol buffer (arr2bin) */
        repeated User users = 1;
    }

    /* Declaring no params props for getUsers function */
    message no_params {}
    ```

- Activating protoc

  - ```
    ./path_to_file/protoc.exe --js_out=import_style=commonjs,binary:. filename.proto
    ./path_to_file/protoc.exe --js_out=import_style=module,binary:. filename.proto

    npm i google-protobuf
    ```

- Required packages :

  - ```
    // grpc is not maintained anymore,
    // therefor it's recommended to use @grpc/grpc-js

    grpc
    // or
    @grpc/grpc-js

    @grpc/protoloader

    npm install @grpc/grpc-js @grpc/proto-loader
    ```

../proto/bin/protoc --js_out=import_style=commonjs,binary:. ./proto/example.proto

npm i google-protobuf

<br>
<br>
<br>
<br>

- Private notes :
- ```
  // Adding github ssh-key to the ssh-agent 
  eval "$(ssh-agent -s)"
  
  // Add ssh key
  ssh-add ~/.ssh/id_rsa
  ```

