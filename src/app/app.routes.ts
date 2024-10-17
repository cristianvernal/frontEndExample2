// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Importa tu AuthGuard

export const routes: Routes = [
    {
        path: 'login', // Ruta para la página de login
        loadComponent: () => import('./business/login/login.component')
    },
    {
        path: '',
        redirectTo: 'login', // Redirige a login por defecto
        pathMatch: 'full'
    },
    {
        path: 'app', // Ruta protegida para las secciones de la aplicación
        loadComponent: () => import('./shared/components/layout/layout.component'),
        canActivate: [AuthGuard], // Protege la ruta con AuthGuard
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component')
            },
            {
                path: 'tables',
                loadComponent: () => import('./business/tables/tables.component')
            },
            {
                path: 'usuario',
                loadComponent: () => import('./business/usuario/usuario.component')
            },
            {
                path: 'reportes',
                loadComponent: () => import('./business/reportes/reportes.component')
            },
            {
                path: 'crear-faena', 
                loadComponent: () => import('./shared/components/crear-faena/crear-faena.component')
            },
            {
                path: 'agregar-trabajador',
                loadComponent: () => import('./shared/components/agregar-trabajador/agregar-trabajador.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full' // Redirige a dashboard si no se especifica nada
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login' // Redirige a login para rutas no encontradas
    }
];
