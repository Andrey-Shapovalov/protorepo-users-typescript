import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty.pb";
export declare const protobufPackage = "users";
/** users.proto */
export interface User {
    user_id: number;
    name: string;
    email: string;
}
export interface GetAllUsersRequest {
    limit: string;
    offset: string;
}
export interface GetAllUsersResponse {
    users: User[];
}
export interface CreateUserRequest {
    name: string;
    email: string;
}
export interface DeleteUserRequest {
    user_id: number;
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create(base?: DeepPartial<User>): User;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const GetAllUsersRequest: {
    encode(message: GetAllUsersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUsersRequest;
    fromJSON(object: any): GetAllUsersRequest;
    toJSON(message: GetAllUsersRequest): unknown;
    create(base?: DeepPartial<GetAllUsersRequest>): GetAllUsersRequest;
    fromPartial(object: DeepPartial<GetAllUsersRequest>): GetAllUsersRequest;
};
export declare const GetAllUsersResponse: {
    encode(message: GetAllUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUsersResponse;
    fromJSON(object: any): GetAllUsersResponse;
    toJSON(message: GetAllUsersResponse): unknown;
    create(base?: DeepPartial<GetAllUsersResponse>): GetAllUsersResponse;
    fromPartial(object: DeepPartial<GetAllUsersResponse>): GetAllUsersResponse;
};
export declare const CreateUserRequest: {
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    create(base?: DeepPartial<CreateUserRequest>): CreateUserRequest;
    fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest;
};
export declare const DeleteUserRequest: {
    encode(message: DeleteUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest;
    fromJSON(object: any): DeleteUserRequest;
    toJSON(message: DeleteUserRequest): unknown;
    create(base?: DeepPartial<DeleteUserRequest>): DeleteUserRequest;
    fromPartial(object: DeepPartial<DeleteUserRequest>): DeleteUserRequest;
};
export type UsersServiceDefinition = typeof UsersServiceDefinition;
export declare const UsersServiceDefinition: {
    readonly name: "UsersService";
    readonly fullName: "users.UsersService";
    readonly methods: {
        readonly getAllUsers: {
            readonly name: "GetAllUsers";
            readonly requestType: {
                encode(message: GetAllUsersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUsersRequest;
                fromJSON(object: any): GetAllUsersRequest;
                toJSON(message: GetAllUsersRequest): unknown;
                create(base?: DeepPartial<GetAllUsersRequest>): GetAllUsersRequest;
                fromPartial(object: DeepPartial<GetAllUsersRequest>): GetAllUsersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAllUsersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUsersResponse;
                fromJSON(object: any): GetAllUsersResponse;
                toJSON(message: GetAllUsersResponse): unknown;
                create(base?: DeepPartial<GetAllUsersResponse>): GetAllUsersResponse;
                fromPartial(object: DeepPartial<GetAllUsersResponse>): GetAllUsersResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly createUser: {
            readonly name: "CreateUser";
            readonly requestType: {
                encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest;
                fromJSON(object: any): CreateUserRequest;
                toJSON(message: CreateUserRequest): unknown;
                create(base?: DeepPartial<CreateUserRequest>): CreateUserRequest;
                fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly deleteUser: {
            readonly name: "DeleteUser";
            readonly requestType: {
                encode(message: DeleteUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest;
                fromJSON(object: any): DeleteUserRequest;
                toJSON(message: DeleteUserRequest): unknown;
                create(base?: DeepPartial<DeleteUserRequest>): DeleteUserRequest;
                fromPartial(object: DeepPartial<DeleteUserRequest>): DeleteUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface UsersServiceImplementation<CallContextExt = {}> {
    getAllUsers(request: GetAllUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAllUsersResponse>>;
    createUser(request: CreateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    deleteUser(request: DeleteUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}
export interface UsersServiceClient<CallOptionsExt = {}> {
    getAllUsers(request: DeepPartial<GetAllUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAllUsersResponse>;
    createUser(request: DeepPartial<CreateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    deleteUser(request: DeepPartial<DeleteUserRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
