import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SubChildComponent } from './sub-child/sub-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    SubChildComponent,
  ],
  imports: [
    BrowserModule ,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,

    RouterModule.forRoot([
      
      {path: '' , component: ParentComponent},
      {path :'child' , component:ChildComponent},
      {path: 'subchild', component: SubChildComponent},
      {path:'**',
    redirectTo:''}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }