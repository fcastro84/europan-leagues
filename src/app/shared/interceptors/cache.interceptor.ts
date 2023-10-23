import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, finalize, of, tap } from 'rxjs';
import { CacheService } from '../services/cache.service';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  private readonly API_KEY = '2b3a0dde64897b0f536b5b666996624b';

  private cacheService = inject(CacheService);
  private spinnerService = inject(SpinnerService);

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method !== 'GET'){
      return next.handle(request);
    }

    const cachedResponse = this.cacheService.get( request.url );
    if(cachedResponse){
      return of(cachedResponse);
    }

    const cloneRequest = request.clone({
      setHeaders: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": this.API_KEY
      }
    }); 

    this.spinnerService.show();

    return next.handle( cloneRequest ).pipe(
      tap(( event ) => {
        if( event.type === HttpEventType.Response ){
          this.cacheService.put( cloneRequest.url, event );
        }
      }),
      finalize(() => this.spinnerService.hide())
    );
    
  }
}
