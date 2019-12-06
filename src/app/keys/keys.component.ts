import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent {

  keyData = {
    q: {
      img: "this would be an image",
      sound: new Howl({
        src: ['../assets/sounds/bubbles.mp3'],
        autoplay: false,
        loop: false,
        volume: 1,
        onend: function () {
          console.log('Finished!');
        }
      }),
      // color: '#1abc9c'
    },
    w: {
      sound: new Howl({
        src: ['../assets/sounds/clay.mp3']
      }),
      // color: '#1abc9c'
    },
    e: {
      sound: new Howl({
        src: ['/assets/sounds/confetti.mp3']
      }),
      // color: '#1abc9c'
    },
    r: {
      sound: new Howl({
        src: ['../assets/sounds/corona.mp3']
      }),
      // color: '#1abc9c'
    },
    t: {
      sound: new Howl({
        src: ['../assets/sounds/dotted-spiral.mp3']
      }),
      // color: '#1abc9c'
    },
    a: {
      sound: new Howl({
        src: ['../assets/sounds/flash-1.mp3']
      }),
      // color: '#1abc9c'
    },
    s: {
      sound: new Howl({
        src: ['../assets/sounds/flash-2.mp3']
      }),
      // color: '#1abc9c'
    },
    d: {
      sound: new Howl({
        src: ['../assets/sounds/flash-3.mp3']
      }),
      // color: '#1abc9c'
    },
    f: {
      sound: new Howl({
        src: ['../assets/sounds/glimmer.mp3']
      }),
      // color: '#1abc9c'
    },
    g: {
      sound: new Howl({
        src: ['../assets/sounds/moon.mp3']
      }),
      // color: '#1abc9c'
    },
    z: {
      sound: new Howl({
        src: ['../assets/sounds/pinwheel.mp3']
      }),
      // color: '#1abc9c'
    },
    x: {
      sound: new Howl({
        src: ['../assets/sounds/piston-1.mp3']
      }),
      // color: '#1abc9c'
    },
    c: {
      sound: new Howl({
        src: ['../assets/sounds/piston-2.mp3']
      }),
      // color: '#1abc9c'
    },
    v: {
      sound: new Howl({
        src: ['../assets/sounds/piston-3.mp3']
      }),
      // color: '#1abc9c'
    },
    b: {
      sound: new Howl({
        src: ['../assets/sounds/prism-1.mp3']
      }),
      // color: '#1abc9c'
    },






    //separate key sounds split at 7yhn





    y: {
      sound: new Howl({
        src: ['../assets/sounds/prism-2.mp3']
      }),
      // color: '#1abc9c'
    },
    u: {
      sound: new Howl({
        src: ['../assets/sounds/prism-3.mp3']
      }),
      // color: '#1abc9c'
    },
    i: {
      sound: new Howl({
        src: ['../assets/sounds/splits.mp3']
      }),
      // color: '#1abc9c'
    },
    o: {
      sound: new Howl({
        src: ['../assets/sounds/squiggle.mp3']
      }),
      // color: '#1abc9c'
    },
    p: {
      sound: new Howl({
        src: ['../assets/sounds/strike.mp3']
      }),
      // color: '#1abc9c'
    },
    h: {
      sound: new Howl({
        src: ['../assets/sounds/suspension.mp3']
      }),
      // color: '#1abc9c'
    },
    j: {
      sound: new Howl({
        src: ['../assets/sounds/timer.mp3']
      }),
      // color: '#1abc9c'
    },
    k: {
      sound: new Howl({
        src: ['../assets/sounds/ufo.mp3']
      }),
      // color: '#1abc9c'
    },
    l: {
      sound: new Howl({
        src: ['../assets/sounds/veil.mp3']
      }),
      // color: '#1abc9c'
    },
    n: {
      sound: new Howl({
        src: ['../assets/sounds/wipe.mp3']
      }),
      // color: '#1abc9c'
    },
    m: {
      sound: new Howl({
        src: ['../assets/sounds/zig-zag.mp3'],

      }),
      // color: '#1abc9c'
    },




  }

  handleClick(id: string) {
    this.keyData[id].sound.play();
    console.log(this.keyData);
    var element = document.getElementById(`${id + 'New'}`);
    element.classList.toggle("transform-active");
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
    this.keyData[event.key.toLowerCase()].sound.play();
    const ele = document.getElementById(`${event.key + 'New'}`);
    ele.classList.toggle("transform-active");
  }

  ngOnInit() {



  }


  constructor() {

  }
}
