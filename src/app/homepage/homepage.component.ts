import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuitableServiceComponent } from '../suitable-service/suitable-service.component';
import { InovateComponent } from '../inovate/inovate.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { FactsComponent } from '../facts/facts.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutAComponent } from '../about-a/about-a.component';
import { ServiceAComponent } from '../service-a/service-a.component';
import { TechnologyAComponent } from '../technology-a/technology-a.component';
import { ProjectAComponent } from '../project-a/project-a.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterModule,
    SuitableServiceComponent,
    FooterComponent,
    FaqsComponent,
    FactsComponent,
    InovateComponent,
    NavbarComponent,
    AboutAComponent,
    ServiceAComponent,
    TechnologyAComponent,
    ProjectAComponent,
    
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'] // 🛠️ Changed `styleUrl` to `styleUrls`
})
export class HomepageComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    let currentIndex: number = 0;
    const slides = document.getElementById('slides') as HTMLElement;
    const totalSlides: number = document.querySelectorAll('.slide').length;

    function showNextSlide(): void {
      currentIndex = (currentIndex + 1) % totalSlides;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000);
  }

}
