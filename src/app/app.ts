import { HeaderComponent } from './shared/components/header/header.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavbarComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
