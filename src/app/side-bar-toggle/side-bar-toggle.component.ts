import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: './app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})
export class SideBarToggleComponent {

  @Output() toggle: EventEmitter<null> = new EventEmitter();

  @HostListener('click')
  click() {
    this.toggle.emit();
  }

}
