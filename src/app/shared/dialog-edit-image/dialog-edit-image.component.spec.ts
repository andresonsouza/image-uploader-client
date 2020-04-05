import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditImageComponent } from './dialog-edit-image.component';

describe('DialogEditImageComponent', () => {
  let component: DialogEditImageComponent;
  let fixture: ComponentFixture<DialogEditImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
