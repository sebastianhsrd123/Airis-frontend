import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { userLogin } from 'src/app/interfaces/user-login.interface';
import { EXTERNAL_ROUTES } from '../../routes/external.routes';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { ResponseData } from 'src/app/interfaces/response-data.interface';

const endpointUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class LoginService extends BaseService {

  constructor(
    protected override http: HttpClient) {
    super(http, endpointUrl);
  }

  login(data:userLogin):Observable<ResponseData>{
    return this.postDataNoAuth(EXTERNAL_ROUTES.ROUTE_LOGIN, data).pipe(
      map((response) => {
        localStorage.setItem( 'token', response.token || '');
        return response.data;
      })
    );
  }

}
