import { DbConnection } from "./DbConnectionInterface";
import { AuthUser } from "./AuthUserInterface";
import { DataLoaders } from "./DataLoadersInterface";

export interface ResolverContext {
    db?: DbConnection;
    authorization?: String;
    authUser?: AuthUser;
    dataLoaders?: DataLoaders;
}