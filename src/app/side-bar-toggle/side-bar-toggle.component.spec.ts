import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarToggleComponent } from './side-bar-toggle.component';

describe('SideBarToggleComponent', () => {
  let component: SideBarToggleComponent;
  let fixture: ComponentFixture<SideBarToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
