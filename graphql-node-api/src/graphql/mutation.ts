import { tokenMutations } from "./resources/token/token.schema";
import { userMutations } from './resources/user/user.schema'
import { postMutations } from './resources/post/post.schema'
import { commentMutations } from './resources/comment/comment.schema'

const Mutation = `
    type Mutation {
        ${ tokenMutations }
        ${ userMutations }
        ${ postMutations }
        ${ commentMutations }
    }
`;

export { Mutation }