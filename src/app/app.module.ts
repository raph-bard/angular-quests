import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { IsAdminComponent } from './is-admin/is-admin.component';
import { Forms1Component } from './forms1/forms1.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DevelopperComponent } from './developper/developper.component';
import { SkillComponent } from './skill/skill.component';
import { Error404Component } from './error-404/error-404.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    IsAdminComponent,
    Forms1Component,
    SignUpComponent,
    DevelopperComponent,
    SkillComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
