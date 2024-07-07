import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { TvShowsService } from "src/app/shared/services/tv-shows.service";
import * as SearchActions from "./search.actions";
import { MovieService } from "src/app/shared/services/movie.service";

@Injectable()
export class SearchEffects {
  private actions$ = inject(Actions);
  private tvShowsService = inject(TvShowsService);
  private movieService = inject(MovieService);

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchMovies),
      mergeMap((action) =>
        this.movieService.search(action.query).pipe(
          map(movies => SearchActions.searchMoviesSuccess({ searchMovies: movies.results })),
          catchError(error => of(SearchActions.searchMoviesFailure({ error })))
        )
      )
    )
  )

  searchTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchTvShows),
      mergeMap((action) =>
        this.tvShowsService.search(action.query).pipe(
          map(tvShows => SearchActions.searchTvShowsSuccess({ searchTvShows: tvShows.results })),
          catchError(error => of(SearchActions.searchTvShowsFailure({ error })))
        )
      )
    )
  )

}