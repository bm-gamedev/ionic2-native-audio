import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  msgList: Array<Object>;
  audioLoaded: boolean = false;

  constructor(private nativeAudio: NativeAudio) {
    this.msgList = [];
  }

  preloadAudio() {
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/audio/alert.mp3')
      .then(() => {
        this.audioLoaded = true;
        this.msgList.push({ 'message': 'preloadSimple successfully' });
      })
      .catch((err) => {
        this.msgList.push({ 'message': 'preloadSimple error: ' + err });
      })
  }

  playAudio() {
    this.nativeAudio.play('uniqueId1')
      .then(() => {
        this.msgList.push({ 'message': 'play successfully' });
      })
      .catch((err) => {
        this.msgList.push({ 'message': 'play error: ' + err });
      })
  }

  unloadAudio() {
    this.nativeAudio.unload('uniqueId1')
      .then(() => {
        this.audioLoaded = false;
        this.msgList.push({ 'message': 'unload successfully' });
      })
      .catch((err) => {
        this.msgList.push({ 'message': 'unload error: ' + err });
      })
  }

  clearList() {
    this.msgList = [];
  }

}
