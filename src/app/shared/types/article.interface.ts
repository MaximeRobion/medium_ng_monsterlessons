import { PopularTagType } from "./popularTags.type";
import { ProfileInterface } from "./profile.inteface";

export interface ArticleInterface {
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: PopularTagType[];
    title: string;
    updatedAt: string;
    author: ProfileInterface;
}
