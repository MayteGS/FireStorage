import { RouterModule, Routes } from '@angular/router';
import { CargarFotosComponent } from './components/cargar-fotos/cargar-fotos.component';
import { FotosComponent } from './components/fotos/fotos.component';

const routes: Routes = [
    { path: 'fotos', component: FotosComponent },
    { path: 'cargarFotos', component: CargarFotosComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);