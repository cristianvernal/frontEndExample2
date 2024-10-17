import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule,  CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private authService: AuthService, private router: Router){}

  logOut() {
    this.authService.logout(); // Cambia el estado a no autenticado
    this.router.navigate(['/login']); // Redirige a la página de login
    
  }

  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}