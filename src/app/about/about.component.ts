import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, NavbarComponent,FooterComponent,CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
