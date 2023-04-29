import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient:HttpClient) { }

  

  songsUrl:string="http://localhost:63300/song/getall"

  getSongs(){
    return this.httpClient.get(this.songsUrl);
}

}
