import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerCreated(server: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name : server.serverName,
      content : server.serverContent
    })
  }

  onBluePrintCreated(blueprint: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name : blueprint.serverName,
      content : blueprint.serverContent
    })  
  
  }

}
