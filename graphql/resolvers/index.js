import { mergeResolvers } from "merge-graphql-schemas";

import Calculator from "./Calculator/";
// import Post from "./Post/";
// import Comment from "./Comment/";

const resolvers = [Calculator];

export default mergeResolvers(resolvers);