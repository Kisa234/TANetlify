import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { Author } from 'src/model/author';
;

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = `${baseUrl}/authors`;

  constructor(private http:HttpClient) { } //inyectar httpClient

  list():Observable<any>{
    return this.http.get<Author[]>(this.url); 
  }

  insert(author : Author){
     return this.http.post(this.url, author);
  }
  delete(id:string){
    return this.http.delete(this.url + "/" + id);
  }
  listId(id:number){
    return this.http.get<Author>(`${this.url}/${id}`);
  }
  update(aut: Author){
    return this.http.put(this.url+"/"+aut.id, aut);
  }

}
