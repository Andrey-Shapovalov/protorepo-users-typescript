// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// users.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_CreateUserRequest(arg) {
  if (!(arg instanceof users_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type users.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_CreateUserRequest(buffer_arg) {
  return users_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_DeleteUserRequest(arg) {
  if (!(arg instanceof users_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type users.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_DeleteUserRequest(buffer_arg) {
  return users_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetAllUsersRequest(arg) {
  if (!(arg instanceof users_pb.GetAllUsersRequest)) {
    throw new Error('Expected argument of type users.GetAllUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetAllUsersRequest(buffer_arg) {
  return users_pb.GetAllUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetAllUsersResponse(arg) {
  if (!(arg instanceof users_pb.GetAllUsersResponse)) {
    throw new Error('Expected argument of type users.GetAllUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetAllUsersResponse(buffer_arg) {
  return users_pb.GetAllUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersServiceService = exports.UsersServiceService = {
  getAllUsers: {
    path: '/users.UsersService/GetAllUsers',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetAllUsersRequest,
    responseType: users_pb.GetAllUsersResponse,
    requestSerialize: serialize_users_GetAllUsersRequest,
    requestDeserialize: deserialize_users_GetAllUsersRequest,
    responseSerialize: serialize_users_GetAllUsersResponse,
    responseDeserialize: deserialize_users_GetAllUsersResponse,
  },
  createUser: {
    path: '/users.UsersService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.CreateUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_users_CreateUserRequest,
    requestDeserialize: deserialize_users_CreateUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteUser: {
    path: '/users.UsersService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.DeleteUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_users_DeleteUserRequest,
    requestDeserialize: deserialize_users_DeleteUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService);
