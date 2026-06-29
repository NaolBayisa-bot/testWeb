import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonImgComponent } from './skeleton-img.component';

describe('SkeletonImgComponent', () => {
  let component: SkeletonImgComponent;
  let fixture: ComponentFixture<SkeletonImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonImgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default shape rectangle and not loaded', () => {
    expect(component.shape).toBe('rectangle');
    expect(component.loaded()).toBe(false);
    expect(component.errored()).toBe(false);
  });

  it('should accept custom inputs', () => {
    component.src = 'assets/image1.svg';
    component.alt = 'Project 1';
    component.shape = 'circle';
    component.objectFit = 'contain';
    expect(component.src).toBe('assets/image1.svg');
    expect(component.alt).toBe('Project 1');
    expect(component.shape).toBe('circle');
    expect(component.objectFit).toBe('contain');
  });
});
