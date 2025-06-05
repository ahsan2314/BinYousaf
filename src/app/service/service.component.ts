import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterModule, CommonModule,NavbarComponent,FooterComponent,CounterComponent],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {}
