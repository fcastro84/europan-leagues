import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService <T> {

  private cache: Map<string, T> = new Map();

  constructor() { }

  put( url: string, response: T){
    this.cache.set( url, response);
  }

  get( url: string ){
    return this.cache.get( url );
  }

  clear(){
    this.cache.clear();
  }
}
