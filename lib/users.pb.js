"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersServiceDefinition = exports.DeleteUserRequest = exports.CreateUserRequest = exports.GetAllUsersResponse = exports.GetAllUsersRequest = exports.User = exports.protobufPackage = void 0;
var _m0 = require("protobufjs/minimal");
var empty_pb_1 = require("./google/protobuf/empty.pb");
exports.protobufPackage = "users";
function createBaseUser() {
    return { user_id: 0, name: "", email: "" };
}
exports.User = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUser();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            user_id: isSet(object.user_id) ? Number(object.user_id) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.user_id !== undefined && (obj.user_id = Math.round(message.user_id));
        message.name !== undefined && (obj.name = message.name);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    create: function (base) {
        return exports.User.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUser();
        message.user_id = (_a = object.user_id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.email = (_c = object.email) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseGetAllUsersRequest() {
    return { limit: "", offset: "" };
}
exports.GetAllUsersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.limit !== "") {
            writer.uint32(10).string(message.limit);
        }
        if (message.offset !== "") {
            writer.uint32(18).string(message.offset);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAllUsersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            limit: isSet(object.limit) ? String(object.limit) : "",
            offset: isSet(object.offset) ? String(object.offset) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.limit !== undefined && (obj.limit = message.limit);
        message.offset !== undefined && (obj.offset = message.offset);
        return obj;
    },
    create: function (base) {
        return exports.GetAllUsersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetAllUsersRequest();
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : "";
        message.offset = (_b = object.offset) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetAllUsersResponse() {
    return { users: [] };
}
exports.GetAllUsersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.users; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAllUsersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.users.push(exports.User.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { users: Array.isArray(object === null || object === void 0 ? void 0 : object.users) ? object.users.map(function (e) { return exports.User.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.users) {
            obj.users = message.users.map(function (e) { return e ? exports.User.toJSON(e) : undefined; });
        }
        else {
            obj.users = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.GetAllUsersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetAllUsersResponse();
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.User.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseCreateUserRequest() {
    return { name: "", email: "" };
}
exports.CreateUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    create: function (base) {
        return exports.CreateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateUserRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteUserRequest() {
    return { user_id: 0 };
}
exports.DeleteUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.user_id !== 0) {
            writer.uint32(8).int32(message.user_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { user_id: isSet(object.user_id) ? Number(object.user_id) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.user_id !== undefined && (obj.user_id = Math.round(message.user_id));
        return obj;
    },
    create: function (base) {
        return exports.DeleteUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDeleteUserRequest();
        message.user_id = (_a = object.user_id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
exports.UsersServiceDefinition = {
    name: "UsersService",
    fullName: "users.UsersService",
    methods: {
        getAllUsers: {
            name: "GetAllUsers",
            requestType: exports.GetAllUsersRequest,
            requestStream: false,
            responseType: exports.GetAllUsersResponse,
            responseStream: false,
            options: {},
        },
        createUser: {
            name: "CreateUser",
            requestType: exports.CreateUserRequest,
            requestStream: false,
            responseType: empty_pb_1.Empty,
            responseStream: false,
            options: {},
        },
        deleteUser: {
            name: "DeleteUser",
            requestType: exports.DeleteUserRequest,
            requestStream: false,
            responseType: empty_pb_1.Empty,
            responseStream: false,
            options: {},
        },
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
