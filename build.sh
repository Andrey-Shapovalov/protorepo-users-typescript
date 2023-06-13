#!/usr/bin/env bash
PROTO_IMPORT_DIR="./proto"
GEN_OUT_DIR="./lib/grpc"

# Create the generated output dir if it doesn't exist
if [ ! -d "$GEN_OUT_DIR" ]; then
  mkdir -p ${GEN_OUT_DIR}
fi

FILE_PATHS='./proto/*.proto'

# grpc_tools_node_protoc \
#     --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --ts_out=grpc_js:${GEN_OUT_DIR} \
#     --js_out=import_style=commonjs:${GEN_OUT_DIR} \
#     --grpc_out=grpc_js:${GEN_OUT_DIR} \
#     -I ${PROTO_IMPORT_DIR} \
#     ${FILE_PATHS}

grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false \
  --ts_proto_opt=fileSuffix=.pb \
  --ts_proto_opt=snakeToCamel=false \
  -I ${PROTO_IMPORT_DIR} \
  ${FILE_PATHS}