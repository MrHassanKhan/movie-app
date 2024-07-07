import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { TvShowsService } from "src/app/shared/services/tv-shows.service";
import * as TvShowActions from "./tv-shows.actions";

@Injectable()
export class TvShowsEffects {
  private actions$ = inject(Actions);
  private tvShowsService = inject(TvShowsService);

  loadTrendingTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TvShowActions.loadTrendingTvShows),
      mergeMap(() =>
        this.tvShowsService.getTrendingTvShows().pipe(
          map(trendingTvShows => TvShowActions.loadTrendingTvShowsSuccess({ trendingTvShows: trendingTvShows.results})),
          catchError(error => of(TvShowActions.loadTrendingTvShowsFailure({ error })))
        )
      )
    )
  )

  loadPopularTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TvShowActions.loadPopularTvShows),
      mergeMap(() =>
        this.tvShowsService.getPopularTvShows().pipe(
          map(popularTvShows => TvShowActions.loadPopularTvShowsSuccess({ popularTvShows: popularTvShows.results })),
          catchError(error => of(TvShowActions.loadPopularTvShowsFailure({ error })))
        )
      )
    )
  )

  loadTopRatedTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TvShowActions.loadTopRatedTvShows),
      mergeMap(() =>
        this.tvShowsService.getTopRatedTvShows().pipe(
          map(topRatedTvShows => TvShowActions.loadTopRatedTvShowsSuccess({ topRatedTvShows: topRatedTvShows.results })),
          catchError(error => of(TvShowActions.loadTopRatedTvShowsFailure({ error })))
        )
      )
    )
  )

  loadOnTheAirTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TvShowActions.loadOnTheAirTvShows),
      mergeMap(() =>
        this.tvShowsService.getOnTheAirTvShows().pipe(
          map(onTheAirTvShows => TvShowActions.loadOnTheAirTvShowsSuccess({ onTheAirTvShows: onTheAirTvShows.results })),
          catchError(error => of(TvShowActions.loadOnTheAirTvShowsFailure({ error })))
        )
      )
    )
  )

  loadAiringTodayTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TvShowActions.loadAiringTodayTvShows),
      mergeMap(() =>
        this.tvShowsService.getAiringTodayTvShows().pipe(
          map(airingTodayTvShows => TvShowActions.loadAiringTodayTvShowsSuccess({ airingTodayTvShows: airingTodayTvShows.results })),
          catchError(error => of(TvShowActions.loadAiringTodayTvShowsFailure({ error })))
        )
      )
    )
  )



}