import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdescriptionComponent } from './dialogdescription.component';

describe('DialogdescriptionComponent', () => {
  let component: DialogdescriptionComponent;
  let fixture: ComponentFixture<DialogdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogdescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
