import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  sideBarIsOpened = false;

  ngOnInit() {
    this.sideBarIsOpened = true;
  }

  toggleSideBar() {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }
}
