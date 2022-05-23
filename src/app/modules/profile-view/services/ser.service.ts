import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Exam } from 'src/app/modules/profile-view/models/example.interface';

const url="https://jsonplaceholder.typicode.com/posts";

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http:HttpClient) { }
  gettodos():Observable<Exam[]> {
    return this.http.get<Exam[]>(url);
  }
}
