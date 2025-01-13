import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TramitoCoreComponent } from './tramito-core.component';

describe('TramitoCoreComponent', () => {
  let component: TramitoCoreComponent;
  let fixture: ComponentFixture<TramitoCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramitoCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TramitoCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
