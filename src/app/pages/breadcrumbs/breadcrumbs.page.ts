import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.page.html',
  styleUrls: ['./breadcrumbs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BreadcrumbsPage implements OnInit {
    maxBreadcrumbs: any = 4;

  constructor() { }


  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }

  ngOnInit() {
  }

}
