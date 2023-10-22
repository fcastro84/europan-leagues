import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService <T> {

  private cache: Map<string, T> = new Map();

  constructor() { }

  put( url: string, response: T){
    console.log(`cache miss: put ${url}`);
    this.cache.set( url, response);
  }

  get( url: string ){
    console.log(`cache hit: get ${url}`);
    return this.cache.get( url );
  }

  clear(  ){
    this.cache.clear();
  }
}
