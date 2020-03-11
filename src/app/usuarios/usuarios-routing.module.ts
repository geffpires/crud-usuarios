import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuariosViewComponent } from './usuarios-view/usuarios-view.component';

const routes: Routes = [
    {
        path: '',
        component: UsuariosListComponent,
    },
    {
        path: "create",
        component: UsuarioCreateComponent,
    },
    {
        path: "edit/:id",
        component: UsuarioEditComponent,
    },
    {
        path: "view/:id",
        component: UsuariosViewComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }