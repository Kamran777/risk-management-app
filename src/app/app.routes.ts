import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./features/account/account.component').then(
        (m) => m.AccountsComponent
      ),
  },
  {
    path: 'brokers',
    loadComponent: () =>
      import('./features/brokers/brokers.component').then(
        (m) => m.BrokersComponent
      ),
  },
  {
    path: 'submissions',
    loadComponent: () =>
      import('./features/submissions/submissions.component').then(
        (m) => m.SubmissionsComponent
      ),
  },
  {
    path: 'organizations',
    loadComponent: () =>
      import('./features/organizations/organizations.component').then(
        (m) => m.OrganizationsComponent
      ),
  },
  {
    path: 'goals-and-rules',
    loadComponent: () =>
      import('./features/goals-and-rules/goals-and-rules.component').then(
        (m) => m.GoalsAndRulesComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then((m) => m.AdminComponent),
  },
];
