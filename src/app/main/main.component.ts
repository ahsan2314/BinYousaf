import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    let currentIndex: number = 0;
    const slides = document.getElementById('slides') as HTMLElement;
    const totalSlides: number = document.querySelectorAll('.slide').length;

    function showNextSlide(): void {
      currentIndex = (currentIndex + 1) % totalSlides;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 2000);
  }

}
