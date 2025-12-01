import { Component } from '@angular/core';
import { ImportsModule } from './imports';
import { UserOverview } from './user-overview';
import { CompanyOverview } from './company-overview';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.scss'],
  standalone: true,
  imports: [ImportsModule, UserOverview, CompanyOverview],
})
export class Dashboard {
  activeView: 'user' | 'company' = 'user';

  showUserOverview() {
    this.activeView = 'user';
  }

  showCompanyOverview() {
    this.activeView = 'company';
  }
}
