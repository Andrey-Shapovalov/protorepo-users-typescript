// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as users_pb from "./users_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUsersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllUsers: IUsersServiceService_IGetAllUsers;
    createUser: IUsersServiceService_ICreateUser;
    deleteUser: IUsersServiceService_IDeleteUser;
}

interface IUsersServiceService_IGetAllUsers extends grpc.MethodDefinition<users_pb.GetAllUsersRequest, users_pb.GetAllUsersResponse> {
    path: "/users.UsersService/GetAllUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetAllUsersRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetAllUsersRequest>;
    responseSerialize: grpc.serialize<users_pb.GetAllUsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetAllUsersResponse>;
}
interface IUsersServiceService_ICreateUser extends grpc.MethodDefinition<users_pb.CreateUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/users.UsersService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<users_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUsersServiceService_IDeleteUser extends grpc.MethodDefinition<users_pb.DeleteUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/users.UsersService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<users_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const UsersServiceService: IUsersServiceService;

export interface IUsersServiceServer extends grpc.UntypedServiceImplementation {
    getAllUsers: grpc.handleUnaryCall<users_pb.GetAllUsersRequest, users_pb.GetAllUsersResponse>;
    createUser: grpc.handleUnaryCall<users_pb.CreateUserRequest, google_protobuf_empty_pb.Empty>;
    deleteUser: grpc.handleUnaryCall<users_pb.DeleteUserRequest, google_protobuf_empty_pb.Empty>;
}

export interface IUsersServiceClient {
    getAllUsers(request: users_pb.GetAllUsersRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: users_pb.GetAllUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: users_pb.GetAllUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class UsersServiceClient extends grpc.Client implements IUsersServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllUsers(request: users_pb.GetAllUsersRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: users_pb.GetAllUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: users_pb.GetAllUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
