import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: './app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  @HostBinding('class.is-open') @Input()
  isOpen = false;

}
