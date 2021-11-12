import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagingSchedulerComponent } from './staging-scheduler.component';

describe('StagingSchedulerComponent', () => {
  let component: StagingSchedulerComponent;
  let fixture: ComponentFixture<StagingSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagingSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagingSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
