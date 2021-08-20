import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarItems : any[] = []

  constructor() { }

  ngOnInit(): void {
    this.sidebarItems = [{
      title:'',
      link:''
    }]
  }

}
