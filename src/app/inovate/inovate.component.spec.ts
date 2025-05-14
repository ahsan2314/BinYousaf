import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovateComponent } from './inovate.component';

describe('InovateComponent', () => {
  let component: InovateComponent;
  let fixture: ComponentFixture<InovateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InovateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InovateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
