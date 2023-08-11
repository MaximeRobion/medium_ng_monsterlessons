import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleRequestInterface } from "src/app/shared/types/articleRequest.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

export const editArticleActions = createActionGroup({
    source: 'update article',
    events: {
        'Get Article': props<{slug: string}>(),
        'Get Article success': props<{article: ArticleInterface}>(),
        'Get Article failure': emptyProps(),

        'Update Article': props<{request: ArticleRequestInterface, slug: string}>(),
        'Update Article success': props<{article: ArticleInterface}>(),
        'Update Article failure': props<{errors: BackendErrorsInterface}>(),
    }
})
