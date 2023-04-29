import { Component, OnInit } from '@angular/core';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private song:SongService){}

  songs:any = [];
  ngOnInit(): void {
    this.song.getSongs().subscribe({
      next:data=>{
      console.log(data);
      this.songs=data;
    }

    })
    
  }

 
}
