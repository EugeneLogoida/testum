import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurObjectsComponent } from './our-objects.component';

describe('OurObjectsComponent', () => {
  let component: OurObjectsComponent;
  let fixture: ComponentFixture<OurObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurObjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
