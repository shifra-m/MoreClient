import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// PrimeNg
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabMenuModule } from 'primeng/tabmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PrimeIcons } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    TableModule,
    DividerModule,
    AppRoutingModule,
    AccordionModule,
    MenuModule,
    ConfirmDialogModule,
    MultiSelectModule,
    TabMenuModule,
    SlideMenuModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    TriStateCheckboxModule,
    PanelMenuModule,
    StepsModule,
    TooltipModule,
    RadioButtonModule,
    MessagesModule,
    MessageModule,
    RippleModule,
    SidebarModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    TableModule,
    DividerModule,
    AppRoutingModule,
    AccordionModule,
    MenuModule,
    ConfirmDialogModule,
    MultiSelectModule,
    TabMenuModule,
    SlideMenuModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    TriStateCheckboxModule,
    PanelMenuModule,
    StepsModule,
    TooltipModule,
    RadioButtonModule,
    MessagesModule,
    MessageModule,
    RippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
