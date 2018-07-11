import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsampComponent } from './tabsamp.component';

describe('TabsampComponent', () => {
  let component: TabsampComponent;
  let fixture: ComponentFixture<TabsampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
