import { NgComponentOutlet, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';
import { FeaturesComponent } from '../features/features.component';
import { SecurityComponent } from '../security/security.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgComponentOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  tabs: any = ['Overview', 'Features','Security'];
  lazyLoadTab: any = ['OverviewLazyLoad', 'FeaturesLazyLoad','SecurityLazyLoad'];

  componentsMapper: any = {
    Overview: OverviewComponent,
    Features: FeaturesComponent,
    Security: SecurityComponent
  };
  activeTab = '';
  activeLazyTab = '';
  activeLazyComponent: any = null;

  get activeComponent() {
    return this.componentsMapper[this.activeTab]
  }

  async loadTabLazily(tab: string){
    this.activeLazyTab = tab;

    switch(tab) {
      case 'OverviewLazyLoad':
        const {OverviewLazyLoadComponent} = await import('../overview-lazy-load/overview-lazy-load.component');
        this.activeLazyComponent = OverviewLazyLoadComponent;
        break;
      
      case 'FeaturesLazyLoad' :
        const {FeaturesLazyLoadComponent} = await import('../features-lazy-load/features-lazy-load.component');
        this.activeLazyComponent = FeaturesLazyLoadComponent;
        break;

      case 'SecurityLazyLoad':
         const {SecurityLazyLoadComponent} = await import('../security-lazy-load/security-lazy-load.component');
        this.activeLazyComponent = SecurityLazyLoadComponent;
        break;

    }
  }
}
