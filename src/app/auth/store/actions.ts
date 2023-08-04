import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        Register: props<{request: RegisterRequestInterface}>(),
        "Register Success": props<{currentUser: CurrentUserInterface}>(),
        "Register Failure": emptyProps(),
    }
});
