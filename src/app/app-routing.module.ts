import { Routes, RouterModule, } from "@angular/router";
import { NgModule } from "@angular/core";
import { CarsComponent } from "./cars/cars.component";

const appRoutes: Routes  = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'cars', component: CarsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}