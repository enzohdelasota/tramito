import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TramitoUiComponent } from './tramito-ui.component';

describe('TramitoUiComponent', () => {
  let component: TramitoUiComponent;
  let fixture: ComponentFixture<TramitoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramitoUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TramitoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
