import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNoteComponent } from './default-note.component';

describe('DefaultNoteComponent', () => {
  let component: DefaultNoteComponent;
  let fixture: ComponentFixture<DefaultNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
