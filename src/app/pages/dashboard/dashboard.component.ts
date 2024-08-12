import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports     : [PageLayoutComponent, NgIf, ProgressBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    constructor(
      public storeService : StoreService,
      private titleService:Title,

    ) {
      this.storeService.setAppPageData({
        title: 'Dashboard',
        description: 'Dashboard page'
      });
      const app = this.storeService.getAppPageData();
      titleService.setTitle(app.title);
     }
}
