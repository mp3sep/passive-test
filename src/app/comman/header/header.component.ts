import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  orgApiData; flexiableData; getPageDate; incrementUserID;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.incrementUserID = 1;
    const urlApi = 'https://newsapi.org/v2/everything?q=tesla&from=2021-06-13&sortBy=publishedAt&apiKey=d2cfb9e41e9948a8a9192c614191fb06';
    this.http.get(urlApi).subscribe(res =>{
      this.orgApiData = res;
      this.flexiableData = this.orgApiData;
      this.getPageDate = this.orgApiData.articles;
      this.incrementUserID = this.getPageDate.length;
      console.log(this.incrementUserID);
    })
  }

}
