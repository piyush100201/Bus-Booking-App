import { HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { User } from './models/user';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  uri = 'http://localhost:4000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {


  }

 

  //to get list of users
  getUsers()
  {
    return this.http.get(`${this.uri}`);
  }

  //to get user details for single user using id
  getUserById(id: number) {
    const userId = localStorage.getItem('userId')
    return this.http.get(`${this.uri}/${userId}`);
  }

  //to create/add new user
  addUser(user:User):Observable<any>
  {
    let url=`${this.uri}/addUser`;
    return this.http.post(url,user).pipe(catchError(this.errorMgmt));
  }

  //update user
  updateUser(id:any, data:User): Observable<any>
  {
    let url = `${this.uri}/updateUser/${id}`;
    return this.http
    .put(url, data, {headers:this.headers})
    .pipe(catchError(this.errorMgmt));
  }

  //delete user
  deleteUser(id : any) :Observable<any>{
    let url=`${this.uri}/deleteUser/${id}`;
    return this.http
    .delete(url, {headers:this.headers})
    .pipe(catchError(this.errorMgmt));
  }
   
  //error handling
  errorMgmt(error:HttpErrorResponse)
  {
    let errorMessage = '';
      if(error.error instanceof ErrorEvent){
        //Get client side error
        errorMessage = error.error.message;
      }else{
        //Get server side error
        errorMessage = `Error Code : ${error.status}\n Message:${error.message}`;
      }
      console.log(errorMessage);
      return throwError(()=>{
        return errorMessage;
      })
  }

}
