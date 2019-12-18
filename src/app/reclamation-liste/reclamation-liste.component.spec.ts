import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationListeComponent } from './reclamation-liste.component';

describe('ReclamationListeComponent', () => {
  let component: ReclamationListeComponent;
  let fixture: ComponentFixture<ReclamationListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
