import { StateSchema } from "../ui/stateSchema";

export const getSearchValue = ((state: StateSchema) => state?.search?.searchInput)