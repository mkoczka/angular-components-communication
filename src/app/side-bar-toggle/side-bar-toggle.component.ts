import { Component, HostListener } from '@angular/core';
import { SideBarService } from '../side-bar/side-bar.service';

@Component({
  selector: './app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})
export class SideBarToggleComponent {

  constructor(
    private sideBarService: SideBarService
  ) { }

  @HostListener('click')
  click() {
    this.sideBarService.toggle();
  }

}
