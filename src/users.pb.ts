/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty.pb";

export const protobufPackage = "users";

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

function createBaseUser(): User {
  return { user_id: 0, name: "", email: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== 0) {
      writer.uint32(8).int32(message.user_id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.user_id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      user_id: isSet(object.user_id) ? Number(object.user_id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.user_id !== undefined && (obj.user_id = Math.round(message.user_id));
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.user_id = object.user_id ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseGetAllUsersRequest(): GetAllUsersRequest {
  return { limit: "", offset: "" };
}

export const GetAllUsersRequest = {
  encode(message: GetAllUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== "") {
      writer.uint32(10).string(message.limit);
    }
    if (message.offset !== "") {
      writer.uint32(18).string(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUsersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.limit = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.offset = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllUsersRequest {
    return {
      limit: isSet(object.limit) ? String(object.limit) : "",
      offset: isSet(object.offset) ? String(object.offset) : "",
    };
  },

  toJSON(message: GetAllUsersRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = message.limit);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  create(base?: DeepPartial<GetAllUsersRequest>): GetAllUsersRequest {
    return GetAllUsersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetAllUsersRequest>): GetAllUsersRequest {
    const message = createBaseGetAllUsersRequest();
    message.limit = object.limit ?? "";
    message.offset = object.offset ?? "";
    return message;
  },
};

function createBaseGetAllUsersResponse(): GetAllUsersResponse {
  return { users: [] };
}

export const GetAllUsersResponse = {
  encode(message: GetAllUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllUsersResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: GetAllUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetAllUsersResponse>): GetAllUsersResponse {
    return GetAllUsersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetAllUsersResponse>): GetAllUsersResponse {
    const message = createBaseGetAllUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateUserRequest(): CreateUserRequest {
  return { name: "", email: "" };
}

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create(base?: DeepPartial<CreateUserRequest>): CreateUserRequest {
    return CreateUserRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { user_id: 0 };
}

export const DeleteUserRequest = {
  encode(message: DeleteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== 0) {
      writer.uint32(8).int32(message.user_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.user_id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserRequest {
    return { user_id: isSet(object.user_id) ? Number(object.user_id) : 0 };
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    message.user_id !== undefined && (obj.user_id = Math.round(message.user_id));
    return obj;
  },

  create(base?: DeepPartial<DeleteUserRequest>): DeleteUserRequest {
    return DeleteUserRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteUserRequest>): DeleteUserRequest {
    const message = createBaseDeleteUserRequest();
    message.user_id = object.user_id ?? 0;
    return message;
  },
};

export type UsersServiceDefinition = typeof UsersServiceDefinition;
export const UsersServiceDefinition = {
  name: "UsersService",
  fullName: "users.UsersService",
  methods: {
    getAllUsers: {
      name: "GetAllUsers",
      requestType: GetAllUsersRequest,
      requestStream: false,
      responseType: GetAllUsersResponse,
      responseStream: false,
      options: {},
    },
    createUser: {
      name: "CreateUser",
      requestType: CreateUserRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    deleteUser: {
      name: "DeleteUser",
      requestType: DeleteUserRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UsersServiceImplementation<CallContextExt = {}> {
  getAllUsers(
    request: GetAllUsersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetAllUsersResponse>>;
  createUser(request: CreateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  deleteUser(request: DeleteUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}

export interface UsersServiceClient<CallOptionsExt = {}> {
  getAllUsers(
    request: DeepPartial<GetAllUsersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetAllUsersResponse>;
  createUser(request: DeepPartial<CreateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  deleteUser(request: DeepPartial<DeleteUserRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
