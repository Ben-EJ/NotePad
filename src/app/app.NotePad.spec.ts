import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotePad } from './app.NotePadComponent';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NotePad
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NotePad);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NotePad'`, () => {
    const fixture = TestBed.createComponent(NotePad);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NotePad');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NotePad);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('NotePad app is running!');
  });
});
