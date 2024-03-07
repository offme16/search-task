import { searchSchema } from '../service/type';

export interface StateSchema {
    search: searchSchema;
}

export type StateSchemaKey = keyof StateSchema;