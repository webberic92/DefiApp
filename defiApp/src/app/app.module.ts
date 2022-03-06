import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import Web3 from 'web3';
// import { ImmutableXClient, Link } from '@imtbl/imx-sdk';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
// import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
// import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
// import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
// import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
// import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
// import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
// import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
// import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
// import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
// import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
// import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
// import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { YourKrowsComponent } from './your-krows/your-krows.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    RoadMapComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    YourKrowsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ImmutableXClient,
    // Web3, 
    // MdbAccordionModule,
    // MdbCarouselModule,
    // MdbCheckboxModule,
    MdbCollapseModule,
    // MdbDropdownModule,
    // MdbFormsModule,
    // MdbModalModule,
    // MdbPopoverModule,
    // MdbRadioModule,
    // MdbRangeModule,
    // MdbRippleModule,
    // MdbScrollspyModule,
    // MdbTabsModule,
    // MdbTooltipModule,
    // MdbValidationModule,
    // NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
