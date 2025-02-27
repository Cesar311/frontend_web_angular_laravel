import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

interface Credencial {
    email: string,
    password: string,
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    urlBase = "http://127.0.0.1:8000/api"

    http = inject(HttpClient);

    constructor() { }

    login(credenciales: any){
        return this.http.post(this.urlBase + "/v1/auth/login", credenciales);
    }

    register(datos: any){
        return this.http.post(this.urlBase + "/v1/auth/register", datos);
    }

    perfil(){
        return this.http.get(this.urlBase + "/v1/auth/profile", {headers: {Authorization: 'Bearer 24|YUrr0Rb8879xScDMOgkWpKK5ayP92LcdefZOaEZG1111d6a0'}});
    }

    logout(){
        return this.http.post(this.urlBase + "/v1/auth/logout", {});
    }

}
