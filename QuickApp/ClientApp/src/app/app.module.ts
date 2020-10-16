import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { ToastaModule } from 'ngx-toasta';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app-error.handler';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { AlertService } from './services/alert.service';
import { ThemeManager } from './services/theme-manager';
import { LocalStoreManager } from './services/local-store-manager.service';
import { AuthStorage } from './services/auth-storage';
import { NotificationService } from './services/notification.service';
import { NotificationEndpoint } from './services/notification-endpoint.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';

import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { GroupByPipe } from './pipes/group-by.pipe';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { BannerDemoComponent } from './components/controls/banner-demo.component';
import { TodoDemoComponent } from './components/controls/todo-demo.component';
import { StatisticsDemoComponent } from './components/controls/statistics-demo.component';
import { NotificationsViewerComponent } from './components/controls/notifications-viewer.component';
import { SearchBoxComponent } from './components/controls/search-box.component';
import { UserInfoComponent } from './components/controls/user-info.component';
import { UserPreferencesComponent } from './components/controls/user-preferences.component';
import { UsersManagementComponent } from './components/controls/users-management.component';
import { RolesManagementComponent } from './components/controls/roles-management.component';
import { RoleEditorComponent } from './components/controls/role-editor.component';

import { DragulaModule } from 'ng2-dragula';
import { MaterialModule } from './material.module';
import { MatAutocompleteModule, MatFormFieldModule } from '@angular/material';

import { BoardComponent } from './components/board/board.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PieceDialogComponent } from './components/piece-dialog/piece-dialog.component';

import { Select2Module } from 'ng2-select2';
import { DynamicCrudService } from './services/dynamic-crud/dynamic-crud.service';
import { DataCreate } from './services/dynamic-crud/create.service';
import { DataUpdate } from './services/dynamic-crud/update.service';
import { DataRead } from './services/dynamic-crud/read.service';
import { DataDelete } from './services/dynamic-crud/delete.service';
import { ApiEndpoint } from './services/dynamic-crud/api-endpoint.service';
import { LaneFilterPipe } from './pipes/lane-filter.pipe';
import { ContentTagComponent } from './components/content-tag/content-tag.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { UploadComponent } from './components/upload/upload.component';
import { ContentImageComponent } from './components/content-image/content-image.component';
import { ContentFileComponent } from './components/content-file/content-file.component';
import { ContentTagFilterPipe } from './pipes/content-tag-filter.pipe';
import { ContentRelatedComponent } from './components/content-related/content-related.component';



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: TranslateLanguageLoader
            }
        }),
        NgxDatatableModule,
        OAuthModule.forRoot(),
        ToastaModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
        ModalModule.forRoot(),
        ChartsModule,
        DragulaModule.forRoot(),
        MaterialModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        Select2Module
    ],
    declarations: [
        AppComponent,
        LoginComponent,
      BoardComponent,
      PieceDialogComponent,
      ContentTagComponent,
      ContentRelatedComponent,
      UploadComponent,
      ContentImageComponent,
      ContentFileComponent,
      GalleryComponent,
        HomeComponent,
        CustomersComponent,
        ProductsComponent,
        OrdersComponent,
        SettingsComponent,
        UsersManagementComponent, UserInfoComponent, UserPreferencesComponent,
        RolesManagementComponent, RoleEditorComponent,
        AboutComponent,
        NotFoundComponent,
        NotificationsViewerComponent,
        SearchBoxComponent,
        StatisticsDemoComponent, TodoDemoComponent, BannerDemoComponent,
        EqualValidator,
        LastElementDirective,
        AutofocusDirective,
        BootstrapTabDirective,
        BootstrapToggleDirective,
        BootstrapSelectDirective,
        BootstrapDatepickerDirective,
      GroupByPipe,
      ContentTagFilterPipe,
      LaneFilterPipe,
      CarouselComponent
    ],
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandler },
        AlertService,
        ThemeManager,
        ConfigurationService,
        AppTitleService,
        AppTranslationService,
        NotificationService,
        NotificationEndpoint,
        AccountService,
        AccountEndpoint,
        LocalStoreManager,
        DynamicCrudService,
        DataCreate,
        DataUpdate,
        DataRead,
        DataDelete,
        ApiEndpoint
    ],
  bootstrap: [AppComponent],
  entryComponents: [PieceDialogComponent]
})
export class AppModule {
}
