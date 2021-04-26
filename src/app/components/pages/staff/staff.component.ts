import { Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  url = `http://hp-api.herokuapp.com/api/characters/staff`;
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
