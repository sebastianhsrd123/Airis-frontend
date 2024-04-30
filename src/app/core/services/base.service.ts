import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { catchError, map, Observable, of, switchMap, throwError } from "rxjs";
import { ResponseData } from "src/app/interfaces/response-data.interface";
import { userLogin } from "src/app/interfaces/user-login.interface";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private headers: any;
  constructor(protected http: HttpClient, @Inject('endpointUrl') protected endpointUrl: string) { }

  protected getDataNoAuth(path: string): Observable<ResponseData> {
    const headers = {
      ...this.getHeadersNoAuth()
    }
    return this.http.get<ResponseData>(`${this.endpointUrl}/${path}`, { headers: headers.headers }).pipe(
      map((response: ResponseData) => response),
      catchError(this.handleError)
    );
  }

  protected postDataNoAuth(path: string, data: userLogin): Observable<ResponseData> {
    const headers = {
      ...this.getHeadersNoAuth()
    }
    return this.http.post<ResponseData>(`${this.endpointUrl}/${path}`, data, { headers: headers.headers }).pipe(
      map((response: ResponseData) => response),
      catchError(this.handleError)
    );
  }

  protected handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error. Por favor, inténtalo de nuevo.';
    let errorCode = 500;

    console.log("ERROR",error.error.message);
    if (error.status) {
      switch (error.status) {
        case 400:
          errorMessage = error.error.message || 'Petición incorrecta.';
          errorCode = 400;
          break;
        case 401:
          errorMessage = error.error.message || 'No autorizado. Inicia sesión para acceder.';
          errorCode = 401;
          break;
        case 403:
          errorMessage = error.error.message || 'Acceso prohibido. No tienes permisos para realizar esta acción.';
          errorCode = 403;
          break;
        case 404:
          errorMessage = error.error.message || 'Recurso no encontrado.';
          errorCode = 404;
          break;
        case 405:
          errorMessage = error.error.message || 'Método no permitido.';
          errorCode = 405;
          break;
        case 406:
          errorMessage = error.error.message || 'No aceptable. El servidor no puede producir una respuesta acorde a los encabezados aceptados.';
          errorCode = 406;
          break;
        case 422:
          errorMessage = error.error.message || 'Contenido no procesable.';
          errorCode = 422;
          break;
        case 500:
          errorMessage = error.error.message || 'Error interno del servidor.';
          errorCode = 500;
          break;
        case 501:
          errorMessage = error.error.message || 'No implementado. El servidor no reconoce el método o carece de la capacidad para cumplir la solicitud.';
          errorCode = 501;
          break;
        case 502:
          errorMessage = error.error.message || 'Gateway incorrecto. El servidor, mientras trabaja como puerta de enlace para obtener una respuesta necesaria para manejar la solicitud, recibió una respuesta no válida desde el servidor ascendente.';
          errorCode = 502;
          break;
        case 503:
          errorMessage = error.error.message || 'Servicio no disponible. El servidor no puede manejar la solicitud (por ejemplo, está sobrecargado o en mantenimiento).';
          errorCode = 503;
          break;
        case 504:
          errorMessage = error.error.message || 'Tiempo de espera de la puerta de enlace. El servidor ascendente no recibió una respuesta oportuna desde el servidor ascendente o desde otro componente necesario para completar la solicitud.';
          errorCode = 504;
          break;
        case 505:
          errorMessage = error.error.message || 'Versión de HTTP no compatible.';
          errorCode = 505;
          break;
        case 506:
          errorMessage = error.error.message || 'Variante también negocia.';
          errorCode = 506;
          break;
        // Agrega más casos según tus necesidades
        default:
          errorMessage = error.error.message ||'Error inesperado. Por favor, inténtalo de nuevo.';
          errorCode = 500;
          break;
      }
    }

    throw { message: errorMessage, code: errorCode, error: error.error?.message };

  }

  getHeadersNoAuth() {
    return this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      })
    };
  }

  getHeadersAuth() {
    let token = sessionStorage.getItem("token");
    return this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
        //'accept': 'application/vnd.api+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      })
    };
  }

}
