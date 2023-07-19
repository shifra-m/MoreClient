import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NedarimComponent } from './nedarim.component';

describe('NedarimComponent', () => {
  let component: NedarimComponent;
  let fixture: ComponentFixture<NedarimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NedarimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NedarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
