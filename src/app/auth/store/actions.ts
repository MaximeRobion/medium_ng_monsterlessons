import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { LoginRequestInterface } from "../types/loginRequest.interface";

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        Register: props<{request: RegisterRequestInterface}>(),
        "Register Success": props<{currentUser: CurrentUserInterface}>(),
        "Register Failure": props<{errors: BackendErrorsInterface}>(),

        Login: props<{request: LoginRequestInterface}>(),
        "Login Success": props<{currentUser: CurrentUserInterface}>(),
        "Login Failure": props<{errors: BackendErrorsInterface}>(),

        "Get current user": emptyProps(),
        "Get current user success": props<{currentUser: CurrentUserInterface}>(),
        "Get current user failure": emptyProps(),
    }
});
