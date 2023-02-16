import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RnpService {
  host= 'http://localhost:8088'
  // host ='//10.39.6.25:8088'
  jwtToken = null;
 constructor(private http: HttpClient) { }

 getResourceAll(resource: String):Observable<any[]>{
   if(this.jwtToken ==null)
   this.loadToken()
   return this.http.get<any[]>(`${this.host}/${resource}`);
}
 getResource(resource: String,page:number,size:number):Observable<any[]>{ if(this.jwtToken ==null)
   this.loadToken()
     return this.http.get<any[]>(`${this.host}/${resource}?page=${page}&size=${size}`);
 }

 getLast():Observable<any[]>{ if(this.jwtToken ==null)
  this.loadToken()
    return this.http.get<any[]>(`${this.host}/getLast`);
}

 addResource(resource: string,value:any):Observable<any>{ if(this.jwtToken ==null)
   this.loadToken()
   return this.http.post<any>(`${this.host}/${resource}`,value);
}

 getResourceByKeyword(resource: String,page:number,size:number,mc:string,source:string):Observable<any[]>{ if(this.jwtToken ==null)
   this.loadToken()
   console.log(`${this.host}/${resource}/search/by${source}Page?mc=${mc}&page=${page}&size=${size}`,"aaaaaaaaaaaaaaaaaaaaa")
   return this.http.get<any[]>(`${this.host}/${resource}/search/by${source}Page?mc=${mc}&page=${page}&size=${size}`);

}

getResourceByKeywordNoPage(resource: String,size:number,mc:string,source:string):Observable<any[]>{ if(this.jwtToken ==null)
 this.loadToken()
 return this.http.get<any[]>(`${this.host}/${resource}/search/by${source}Page?mc=${mc}&size=${size}`);
}


deleteResource(resource:string,url:string){ if(this.jwtToken ==null)
 this.loadToken()
return this.http.delete(url);
}
getOneResource(url:string):Observable<any>{ if(this.jwtToken ==null)
 this.loadToken()
return this.http.get<any>(url)
}
getOneResourceById(resource:string,id:number):Observable<any>{ if(this.jwtToken ==null)
 this.loadToken()
 return this.http.get<any>(`${this.host}/${resource}/${id}`)
}




updateResource(url:string,data:any){ if(this.jwtToken ==null)
 this.loadToken()
 console.log(url)
 return this.http.patch(url,data)
}
login(user){ 
  return this.http.post(this.host+"/login",user,{observe: 'response'})
}

saveToken(jwt){
  localStorage.setItem('token',jwt);
}
loadToken(){
  this.jwtToken = localStorage.getItem('token');
  return this.jwtToken
}
downloadAll(url){
  console.log(this.host+url,"azazazzaazzzzzzzzzzzzz")
  return this.http.get(this.host+url)
}
uploadFile(i){
  return this.http.get(this.host+'/report/pdf/'+i)
}

logout(){
  this.jwtToken = null
  localStorage.removeItem('token')

}
loggedIn(){
  return !!localStorage.getItem('token')
}

}
