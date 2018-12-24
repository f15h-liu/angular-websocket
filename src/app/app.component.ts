import { Component } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cloud Classroom';

  greetings: string[] = [];
  ws: any;
  name: string;
  constructor(){}
  connect(){
    let socket = new WebSocket("ws://localhost:8080/gs-room");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function(frame){
    that.ws.subscribe("/classroom/chat", function(message){
          console.log(message);
        });
    }); 
  }
}
