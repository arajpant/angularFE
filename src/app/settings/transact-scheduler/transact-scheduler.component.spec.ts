import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactSchedulerComponent } from './transact-scheduler.component';

describe('TransactSchedulerComponent', () => {
  let component: TransactSchedulerComponent;
  let fixture: ComponentFixture<TransactSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
