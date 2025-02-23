import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PriceComponent } from './components/pages/price/price.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "about",
                component: AboutComponent
            },
            {
                path: "contact",
                component: ContactComponent
            },
            {
                path: "prices",
                component: PriceComponent
            }
        ]
    },
    {
        path: "**",
        component: NotfoundComponent
    }
];
