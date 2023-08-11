import { createActionGroup, props } from "@ngrx/store";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleRequestInterface } from "src/app/shared/types/articleRequest.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

export const createArticleActions = createActionGroup({
    source: 'create article',
    events: {
        'Create Article': props<{request: ArticleRequestInterface}>(),
        'Create Article success': props<{article: ArticleInterface}>(),
        'Create Article failure': props<{errors: BackendErrorsInterface}>(),
    }
})
