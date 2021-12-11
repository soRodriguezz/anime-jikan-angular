import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anime } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor( private http: HttpClient) { }


  getAnime( name: string): Observable<Anime> {
    return this.http.get<Anime>(`${environment.URL_API}${name}`);
  }



}
