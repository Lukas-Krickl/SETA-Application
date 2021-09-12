import { Component, OnInit } from '@angular/core';
import { AppDaoService } from '../../../services/app-dao.service';

@Component({
  selector: 'app-kapitel3',
  templateUrl: './kapitel3.component.html',
  styleUrls: ['./kapitel3.component.sass']
})
export class Kapitel3Component implements OnInit {

  constructor(public appDao: AppDaoService) { }

  ngOnInit(): void {
  }

}
