import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyAComponent } from './technology-a.component';

describe('TechnologyAComponent', () => {
  let component: TechnologyAComponent;
  let fixture: ComponentFixture<TechnologyAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
