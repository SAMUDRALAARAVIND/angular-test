import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RemoteService } from './remote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: RemoteService) {

  }
  public remoteData: any ;
  public registrationForm = new FormGroup({
    name: new FormControl('Aravind'),
    email: new FormControl('s@gmail.com'),
    address: new FormControl('address'),
      city: new FormControl('Thorrur'),
      pincode: new FormControl('506163')

  });
  ngOnInit(): void {
    this.service.getData()
        .subscribe((data) => { this.remoteData = data; });
  }
}
