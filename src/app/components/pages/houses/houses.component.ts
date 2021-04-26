import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {



  url = `http://hp-api.herokuapp.com/api/characters/house/gryffindor`;
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(data[key]);
    });
  }




  ngOnInit(): void {
  }

}
