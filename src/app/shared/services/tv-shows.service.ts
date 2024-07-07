import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+environment.apiReadKey
  }
}
@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  http = inject(HttpClient);


  getTrendingTvShows() {
    return this.http.get<any>(environment.baseUrl+'/trending/tv/week', options)
  }

  getPopularTvShows() {
    return this.http.get<any>(environment.baseUrl+'/tv/popular', options)
  }

  getTopRatedTvShows() {
    return this.http.get<any>(environment.baseUrl+'/tv/top_rated', options)
  }

  getAiringTodayTvShows() {
    return this.http.get<any>(environment.baseUrl+'/tv/airing_today', options)
  }

  getOnTheAirTvShows() {
    return this.http.get<any>(environment.baseUrl+'/tv/on_the_air', options)
  }

  getTvShowDetails(id: number) {
    return this.http.get<any>(environment.baseUrl+'/tv/'+id, options)
  }

  getTvShowVideos(id: number) {
    return this.http.get<any>(environment.baseUrl+'/tv/'+id+'/videos', options)
  }

  getSimilarTvShows(id: number) {
    return this.http.get<any>(environment.baseUrl+'/tv/'+id+'/similar', options)
  }

  getRecommendedTvShows(id: number) {
    return this.http.get<any>(environment.baseUrl+'/tv/'+id+'/recommendations', options)
  }

  search(query: string) {
    return this.http.get<any>(environment.baseUrl+`/search/tv?query=${query}`, options)
  }

}
