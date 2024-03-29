import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlisteComponent } from './vliste.component';

describe('VlisteComponent', () => {
  let component: VlisteComponent;
  let fixture: ComponentFixture<VlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
