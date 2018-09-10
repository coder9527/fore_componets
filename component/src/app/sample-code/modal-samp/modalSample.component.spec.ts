import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsampleComponent } from './modalsample.component';

describe('ModalsampleComponent', () => {
  let component: ModalsampleComponent;
  let fixture: ComponentFixture<ModalsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
