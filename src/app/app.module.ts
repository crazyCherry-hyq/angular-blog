import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideItemComponent } from './side/item/item.component';
import { SvgComponent } from './svg/svg.component';
import { ArticleItemComponent } from './article/item/item.component';
import { ArticleDetailComponent } from './article/detail/detail.component';
import { ArticleEditComponent } from './article/edit/edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideItemComponent,
    SvgComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
