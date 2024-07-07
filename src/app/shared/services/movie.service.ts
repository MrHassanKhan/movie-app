import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class MovieService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(environment.baseUrl+'/discover/movie', options)
  }

  getTvShows() {
    return this.http.get<any>(environment.baseUrl+'/discover/tv', options)
  }

  getRatedMovies() {
    return this.http.get<any>(environment.baseUrl+'/account/21369281/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(environment.baseUrl+`/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get<any>(environment.baseUrl+`/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get<any>(environment.baseUrl+`/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get<any>(environment.baseUrl+'/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get<any>(environment.baseUrl+'/movie/popular', options)
  }

  getTopRated() {
    return this.http.get<any>(environment.baseUrl+'/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get<any>(environment.baseUrl+'/movie/upcoming', options)
  }

  search(query: string) {
    return this.http.get<any>(environment.baseUrl+`/search/movie?query=${query}`, options)
  }
}
