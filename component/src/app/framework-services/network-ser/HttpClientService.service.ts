import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';


@Injectable()
export class HttpClientService {

  constructor(private http:Http) { }
  
  
  /**
   * 异步网络请求
   */
  
   httpAsyncGet(url:string):Promise<any>{
      return new Promise((resolve,reject)=>{
          this.http.get(url).toPromise().then(reponse=>{
                console.log("ret:"+JSON.stringify(reponse));
                resolve(reponse['_body']);
              }).catch(error=>{
               // alert("err:"+JSON.stringify(error));
                reject(error);
              });
      
      });
  }
  
   /**
   * 异步网络请求
   */
  
  httpAsyncPost(url:string,data:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return new Promise((resolve,reject)=>{
        this.http.post(url, JSON.stringify(data), options).toPromise().then(reponse=>{
            console.log("ret:"+JSON.stringify(reponse));
            resolve(reponse['_body']);
        }).catch(error=>{
             reject(error);
        });
    });
  }
  
  
  

}
