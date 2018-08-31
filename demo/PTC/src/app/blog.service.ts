import {Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Blog } from './blog';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {
    private url = "/api/Blogs";

    constructor(private http: Http) {

    }

    getBlogs(): Observable<Blog[]> {
        return this.http.get(this.url).map(this.extractData);
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}

