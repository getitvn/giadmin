import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutheaderComponent } from './layoutheader.component';

describe('LayoutheaderComponent', () => {
  let component: LayoutheaderComponent;
  let fixture: ComponentFixture<LayoutheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
