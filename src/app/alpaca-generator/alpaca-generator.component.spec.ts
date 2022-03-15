import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaGeneratorComponent } from './alpaca-generator.component';

describe('AlpacaGeneratorComponent', () => {
  let component: AlpacaGeneratorComponent;
  let fixture: ComponentFixture<AlpacaGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpacaGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
