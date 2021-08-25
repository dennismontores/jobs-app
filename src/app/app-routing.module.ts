import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login-page/login-page.module').then(
                (m) => m.LoginPageModule
            ),
    },
    {
        path: 'create-account',
        loadChildren: () =>
            import(
                './pages/create-account-page/create-account-page.module'
            ).then((m) => m.CreateAccountPageModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
