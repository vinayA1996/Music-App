import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.css'],
})
export class SongPlayerComponent {
  @Input()
  songPath: string = '';
  d = false;
  audio = new Audio();
  number: number = 0;
  constructor() {}

  play() {
    console.log(this.songPath);

    this.audio.src = this.songPath;
    this.audio.load();
    this.audio.currentTime = this.number;
    this.audio.play();
  }
  pause() {
    const num = this.audio.currentTime;
    this.audio.pause();
    this.number = num;
  }
}
