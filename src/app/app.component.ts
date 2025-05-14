import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SuitableServiceComponent } from './suitable-service/suitable-service.component';
import { InovateComponent } from './inovate/inovate.component';
// import { SolutionsComponent } from './solutions/solutions.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FactsComponent } from './facts/facts.component';
import { FooterComponent } from './footer/footer.component';
import { Router } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'binyousaf';
}
