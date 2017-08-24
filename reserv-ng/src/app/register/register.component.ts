import { Component, OnInit } from '@angular/core';
import { Client } from '../_models/Client';
import {RegisterService} from "../_services/register.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  client;

  constructor(private registerService: RegisterService, private router: Router) {
    this.client=new Client();
  }

  ngOnInit() {
  }
  register(){
    this.registerService.register(this.client);
    this.router.navigate(['']);
  }

}
