import { StateSchema } from "../ui/stateSchema";

export const getResult = ((state: StateSchema) => state?.search?.result);