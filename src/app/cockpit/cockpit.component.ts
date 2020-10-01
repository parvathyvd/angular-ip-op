import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>()
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent:string}>()


  ngOnInit(): void {
  }


  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
  

  onAddBlueprint() {
   this.bluePrintCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
   })
  }

}
