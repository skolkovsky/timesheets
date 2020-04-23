import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { WelcomePageComponent } from "./components/welcome/welcome-page.component";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRouterModule } from "./components/app-router.module";
import { RouterModule } from "@angular/router";
import {
  AlertModule,
  BsDropdownModule,
  ButtonsModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  CarouselModule,
} from "ngx-bootstrap";
import { SelectorComponent } from "./shared/selector/selector.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminParsingComponent } from "./components/admin-parsing/admin-parsing.component";
import { AdminParsingService } from "./services/admin-parsing.service";
import { TimetableParsingComponent } from "./components/timetable-parsing/timetable-parsing.component";
import { CardComponent } from "./shared/card/card.component";
import { IconComponent } from "./shared/icon/icon.component";
import { StateService } from "./services/state.service";
import { TableComponent } from "./components/timetable-parsing/table/table.component";
import { TtpGroupButtonComponent } from "./shared/group-button/ttp-group-button.component";
import { TtpButtonComponent } from "./shared/button/ttp-button.component";
import { TtpBaseComponent } from "./ng-core/ttp-base.component";
import { TtpBannerComponent } from "./shared/banner/ttp-banner.component";
import { LoginComponent } from "./components/login/login.component";
import { NotificationComponent } from "./shared/notification/notification.component";
import { LoginService } from "./services/login.service";
import { TtpLoaderComponent } from "./shared/loader/ttp-loader.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderService } from "./services/loader.service";
import { TimetableService } from "./services/timetable.service";
import { TtpEditTimetableComponent } from "./components/timetable-parsing/edit-timetable/edit-timetable.component";

let adminConfigurations = [
  AppComponent,
  WelcomePageComponent,
  HeaderComponent,
  TimetableParsingComponent,
  AdminParsingComponent,
  TableComponent,
  LoginComponent,
  TtpEditTimetableComponent,
];

let sharedComponents = [
  SelectorComponent,
  CardComponent,
  IconComponent,
  TtpGroupButtonComponent,
  TtpButtonComponent,
  TtpBannerComponent,
  NotificationComponent,
  TtpLoaderComponent,
];

export const AppComponents = [sharedComponents, adminConfigurations];

let externalLibs = [
  ButtonsModule.forRoot(),
  ModalModule.forRoot(),
  AlertModule.forRoot(),
  TabsModule.forRoot(),
  ProgressbarModule.forRoot(),
  BsDropdownModule.forRoot(),
  CarouselModule.forRoot(),
  NgxSpinnerModule,
];

@NgModule({
  declarations: [AppComponents],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    externalLibs,
  ],
  providers: [
    AdminParsingService,
    StateService,
    LoginService,
    LoaderService,
    TimetableService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
