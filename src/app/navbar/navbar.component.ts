import { Component } from '@angular/core';
import{RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   toggleMenu(): void {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.classList.toggle("active");
    }
  }

}
