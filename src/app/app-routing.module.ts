/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ShopComponent } from './shop/shop.component';

// TODO: #4. Define unique page titles
const routes: Routes = [
  { path: 'shop', component: ShopComponent, data: {title: 'Our Shop | Angular Accessibility'} },
  { path: 'about', component: AboutComponent, data: {title: 'About | Angular Accessibility'} },
  { path: 'locate', component: LocationComponent, data: {title: 'Locate | Angular Accessibility'} },
  { path: '',   redirectTo: '/shop', pathMatch: 'full' },
  { path: '**', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
