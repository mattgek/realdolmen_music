import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePlaylistComponent } from './active-playlist.component';

describe('ActivePlaylistComponent', () => {
  let component: ActivePlaylistComponent;
  let fixture: ComponentFixture<ActivePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
