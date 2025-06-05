import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CounterComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

}
