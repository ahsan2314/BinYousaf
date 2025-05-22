import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [RouterModule, NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.css'
})
export class StudioComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}
  @ViewChild('counterSection', { static: true }) counterSection!: ElementRef;

  counters = [
    { target: 100, current: 0, label: 'Success in getting happy customer' },
    { target: 80, current: 0, label: 'Thousands of successful business' },
    { target: 60, current: 0, label: 'Total clients who love HighTech' },
    { target: 5, current: 0, label: 'Stars reviews given by satisfied clients' }
  ];

  hasAnimated = false;

  ngOnInit() {
    this.checkScroll(); // Initial check
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const top = this.counterSection.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight && !this.hasAnimated) {
      this.animateCounters();
      this.hasAnimated = true;
    }
  }

 animateCounters() {
  this.counters.forEach((counter, index) => {
    const interval = setInterval(() => {
      if (counter.current < counter.target) {
        counter.current++;
        this.cdr.detectChanges(); // Force Angular to refresh view
      } else {
        clearInterval(interval);
      }
    }, 20); // Speed of counting
  });
}

}
