import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadersampComponent } from './uploadersamp.component';

describe('UploadersampComponent', () => {
  let component: UploadersampComponent;
  let fixture: ComponentFixture<UploadersampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadersampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadersampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
