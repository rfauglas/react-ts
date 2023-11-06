import { ActionType } from "../action-types";

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}
interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    error: string;
}
export type Action = SearchRepositoriesAction | SearchRepositoriesErrorAction | SearchRepositoriesSuccessAction;
