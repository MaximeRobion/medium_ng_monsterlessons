import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "src/app/types/registerRequest.interface";

export const register = createAction('[Auth] Register', props<{request: RegisterRequestInterface}>());
