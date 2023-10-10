import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './main/menu/sidenav/sidenav.component';
import { BodyComponent } from './main/menu/body/body.component';
import { ScoringComponent } from './main/menu/menu_lists/scoring/scoring.component';
import { SettingsComponent } from './main/menu/menu_lists/settings/settings.component';
import { SublevelMenuComponent } from './main/menu/sidenav/sublevel-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StrictNumberOnlyDirective } from './main/Utils/StrictNumberOnlyDirective';
import { SecondInputComponent } from './main/menu/menu_lists/scoring/second-input/second-input.component';
import { ResultScoringComponent } from './main/menu/menu_lists/scoring/result-scoring/result-scoring.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    ScoringComponent,
    SettingsComponent,
    SublevelMenuComponent,
    StrictNumberOnlyDirective,
    SecondInputComponent,
    ResultScoringComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
