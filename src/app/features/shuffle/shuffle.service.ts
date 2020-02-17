import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICardModel } from './card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {

  private url = environment.publicBaseUrl + "/api";

  constructor(private httpClient: HttpClient) {
  }

  apiShuffle(): Observable<ICardModel[]> {
    var endpoint = this.url + "/deck";
    console.log(endpoint);
    return this.httpClient.get<ICardModel[]>(endpoint);
  }

  socketShuffle(): Observable<ICardModel[]> {
    return this.httpClient.get<ICardModel[]>(this.url + "/deck/socket");
  }
}
