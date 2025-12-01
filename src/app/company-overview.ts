import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { ReusableTable } from './reusable-table';

interface Company {
  id: string;
  name: string;
  industry: string;
  employees: number;
  revenue: number;
  location: string;
}

@Component({
  selector: 'company-overview',
  templateUrl: 'company-overview.html',
  styleUrls: ['company-overview.scss'],
  standalone: true,
  imports: [ImportsModule, ReusableTable],
})
export class CompanyOverview implements OnInit {
  companies: Company[] = [];
  selectedCompanies: Company[] = [];
  
  columnDefinition = [
    { field: 'name', header: 'Company Name' },
    { field: 'industry', header: 'Industry' },
    { field: 'employees', header: 'Employees' },
    { field: 'revenue', header: 'Revenue (M)' },
    { field: 'location', header: 'Location' },
  ];

  ngOnInit() {
    this.loadCompanies();
    this.setInitialSelection();
  }

  loadCompanies() {
    // Sample company data
    this.companies = [
      { id: '1', name: 'Tech Corp', industry: 'Technology', employees: 5000, revenue: 500, location: 'San Francisco' },
      { id: '2', name: 'Finance Ltd', industry: 'Finance', employees: 3000, revenue: 300, location: 'New York' },
      { id: '3', name: 'Health Plus', industry: 'Healthcare', employees: 2000, revenue: 200, location: 'Boston' },
      { id: '4', name: 'Retail Giant', industry: 'Retail', employees: 10000, revenue: 1000, location: 'Chicago' },
      { id: '5', name: 'Auto Works', industry: 'Automotive', employees: 8000, revenue: 800, location: 'Detroit' },
      { id: '6', name: 'Energy Co', industry: 'Energy', employees: 4000, revenue: 600, location: 'Houston' },
      { id: '7', name: 'Media House', industry: 'Media', employees: 1500, revenue: 150, location: 'Los Angeles' },
      { id: '8', name: 'Food Inc', industry: 'Food & Beverage', employees: 6000, revenue: 400, location: 'Seattle' },
      { id: '9', name: 'Pharma Labs', industry: 'Pharmaceutical', employees: 3500, revenue: 450, location: 'Philadelphia' },
      { id: '10', name: 'Consulting Group', industry: 'Consulting', employees: 2500, revenue: 250, location: 'Washington DC' },
    ];
  }

  setInitialSelection() {
    // Pre-select some companies (e.g., Tech Corp, Health Plus, and Energy Co)
    this.selectedCompanies = [
      this.companies[0], // Tech Corp
      this.companies[2], // Health Plus
      this.companies[5], // Energy Co
    ];
    console.log('Initial selection:', this.selectedCompanies);
  }
}
