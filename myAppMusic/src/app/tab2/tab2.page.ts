import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { Howl } from 'howler';


export interface Track {
  name: string;
  path: string;
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  playlist: Track[] = [
    {
      name: 'Un Verano Sin Ti.',
      path: '../../assets/music/Un-Verano-Sin-Ti.mp3'
    },
    {
      name: 'Titi Me Preguntó',
      path: '../../assets/music/Titi-me-pregunto.mp3'
    },

    {
      name: 'Un Ratito',
      path: '../../assets/music/Un-ratito.mp3'
    },

    {
      name: 'Me Fui De Vacaciones',
      path: '../../assets/music/Vacaciones.mp3'
    },

    {
      name: 'XXXX',
      path: '../../assets/music/XXXX.mp3'
    },

    {
      name: 'En un avión',
      path: '../../assets/music/En-un-avion.mp3'
    },

    {
      name: 'Tú No Vive Así',
      path: '../../assets/music/Tu-No-Vive-Asi.mp3'
    },
    {
      name: 'Volando Remix',
      path: '../../assets/music/Volando-remix.mp3'
    },
    {
      name: 'Hablamos Mañana',
      path: '../../assets/music/Hablamos-mañana.mp3'
    },
    {
      name: 'Volando Remix',
      path: '../../assets/music/Volando-remix.mp3'
    },
    {
      name: 'Volando Remix',
      path: '../../assets/music/Volando-remix.mp3'
    },

  ]

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', { static: false}) range: IonRange;


  constructor() { }

  
  start(track: Track) {
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        console.log('onplay')
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgress();
      },

      onend: () => {
        console.log('onend')
      }
    });
    this.player.play();
  }

  togglePlayer(pause) {

    this.isPlaying= !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }

  }

  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length -1) {
      this.start(this.playlist[index +1]);

    } else {
      this.start(this.playlist[0]);
    }
  }

  prev() {

    let index = this.playlist.indexOf(this.activeTrack);
    if (index >0) {
      this.start(this.playlist[index -1]);

    } else {
      this.start(this.playlist[this.playlist.length -1]);
    }

  }

  seek() {

    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration *(newValue / 100));

  }

  updateProgress() {

    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress()
    }, 100)
  }
}

