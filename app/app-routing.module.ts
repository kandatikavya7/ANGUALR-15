import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomercardComponent } from './customer/customercard/customercard.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { CustomermapComponent } from './customer/customermap/customermap.component';
import { AddcustomerComponent } from './customer/addcustomer/addcustomer.component';
import { EditcustomerComponent } from './customer/editcustomer/editcustomer.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent  },
  { path: 'cardview', component: CustomercardComponent  },
  { path: 'listview', component: CustomerlistComponent  },
  { path: 'mapview', component: CustomermapComponent  },
  { path: 'addcustomer', component: AddcustomerComponent  },
  { path: 'edit/:id', component: EditcustomerComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
