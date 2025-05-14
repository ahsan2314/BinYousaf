import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

}
