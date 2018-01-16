import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData = 'hello'
  imageFolder:String = 'http://media.mw.metropolia.fi/wbma/uploads/';
  imgUrl:String = '';

  constructor(private http:HttpClient) { }

  getJSON() {
    this.http.get('assets/package.json').subscribe(( data ) => {
      console.log(data);
      this.someData = data.license;
    });
  }

  getMedia(){
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe( (data) => {
      console.log(data);
      this.imgUrl = this.imageFolder + data[0].filename;
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }
}

