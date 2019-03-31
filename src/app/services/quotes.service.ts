import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Http} from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Block } from './../block/block.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable()
export class QuotesService {

  constructor(private http: Http) { }

  getQuote(): Observable <any>{
    return this.http.get('http://quotes.rest/qod').map(response => response.json().contents)
    .catch((err: Response|any)=>{
      return Observable.throw(err.statusText);
    });
  }
}
