// Angular modules
import { NgIf }                 from '@angular/common';
import { Component }            from '@angular/core';
import { OnInit }               from '@angular/core';

// Services
import { StoreService }         from '@services/store.service';

// Components
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent }  from '@layouts/page-layout/page-layout.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector    : 'app-home',
  templateUrl : './home.component.html',
  styleUrls   : ['./home.component.scss'],
  standalone  : true,
  imports     : [PageLayoutComponent, NgIf, ProgressBarComponent]
})
export class HomeComponent implements OnInit
{
  constructor
  (
    public storeService : StoreService,
    titleService:Title
  )
  {

    this.storeService.setAppPageData({
      title: 'Home',
      description: 'Home page'
    });
    const app = this.storeService.getAppPageData();
    titleService.setTitle(app.title);
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public ngOnInit() : void
  {
    setTimeout(_ =>
    {
      this.storeService.isLoading.set(false);
    }, 2000);
  }

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Computed props -----------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Subscriptions ------------------------------------------------------------
  // -------------------------------------------------------------------------------

}
