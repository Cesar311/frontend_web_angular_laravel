import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'app-perfil',
    standalone: false,

    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

    AuthService = inject(AuthService)
    perfil:any  = {}

    constructor() {
        this.funGetPerfil()
    }

    funGetPerfil() {
        this.AuthService.perfil().subscribe(
            (resp) => {
                this.perfil = resp;
            },
            (error) => {
                alert("Error al recuperar el perfil")
            },
        )
    }
}
