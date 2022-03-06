import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourKrowsComponent } from './your-krows.component';

describe('YourKrowsComponent', () => {
  let component: YourKrowsComponent;
  let fixture: ComponentFixture<YourKrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourKrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourKrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
