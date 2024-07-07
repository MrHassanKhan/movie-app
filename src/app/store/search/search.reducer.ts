import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IVideoContent } from "src/app/shared/models/video-content.interface";
import * as SearchActions from './search.actions';

export interface SearchState {
    movies: IVideoContent[];
    tvShows: IVideoContent[];
    error: any;
}

const initialState: SearchState = {
    movies: [],
    tvShows: [],
    error: null
}

export const searchReducer = createReducer(
    initialState,
    on(SearchActions.searchMoviesSuccess, (state, { searchMovies }) => ({ ...state, movies:searchMovies })),
    on(SearchActions.searchMoviesFailure, (state, { error }) => ({ ...state, error })),

    on(SearchActions.searchTvShowsSuccess, (state, { searchTvShows }) => ({ ...state, tvShows:searchTvShows })),
    on(SearchActions.searchTvShowsFailure, (state, { error }) => ({ ...state, error })),
)

export const FeatureKey = 'SEARCH_STATE';
export const selectTvShowState = createFeatureSelector<SearchState>(FeatureKey);
export const selectMovies = createSelector(selectTvShowState, (state) => state.movies);
export const selectTvShows = createSelector(selectTvShowState, (state) => state.tvShows);
export const selectError = createSelector(selectTvShowState, (state) => state.error);