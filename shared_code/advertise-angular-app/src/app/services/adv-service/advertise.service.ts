import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import { Advertise } from "../../entities/advertise.entity";
@Injectable()
export class AdvertiseService {
    BASE_REST_URL:string = 'http://localhost:8080/advertise';

    constructor(private httpClient: HttpClient) {
    }

    getAllAdvertises():Observable<Advertise[]> {
        return this.httpClient.get<Advertise[]>(this.BASE_REST_URL);
    }
    getAdvertiseById(advId:string):Observable<Advertise> {
        return this.httpClient.get<Advertise>(this.BASE_REST_URL + '/' + advId);
    }

    addNewAdvertise(advertise:Advertise):Observable<Advertise> {
        const headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        return this.httpClient.post<Advertise>(this.BASE_REST_URL, JSON.stringify(advertise), {headers: headers});
    }
    updateAdvertise(advId:string, advertise:Advertise):Observable<Advertise> {
        const headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        return this.httpClient.put<Advertise>(this.BASE_REST_URL + '/' + advId, JSON.stringify(advertise), {headers: headers});
    }
    deleteAdvertise(advId:string):Observable<Boolean> {
        const headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        return this.httpClient.delete<Boolean>(this.BASE_REST_URL + '/' + advId, {headers: headers});
    }
}
// httpClient.get(xx)   httpClient.post(xx), httpClient.put(xx), httpClient.delete(xx)
//List of advertises
