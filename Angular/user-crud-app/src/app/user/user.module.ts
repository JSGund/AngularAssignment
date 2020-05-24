import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './user-modal/user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListComponent, UserComponent, UserModalComponent],
  imports: [
    CommonModule,
    GridModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ReactiveFormsModule
  ],
  providers: [PageService, SortService, FilterService, GroupService],
  entryComponents: [
    UserModalComponent
  ]
})
export class UserModule { }
