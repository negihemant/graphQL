import { mergeTypes } from "merge-graphql-schemas";

import Calculator from "./Calculator/";

const typeDefs = [Calculator];

export default mergeTypes(typeDefs, { all: true });