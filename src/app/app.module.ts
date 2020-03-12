import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import { LayoutModule } from './layout/layout.module'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { AppAdminModule } from 'projects/admin/src/app/app.module'
import { AppRoutingModule } from 'projects/admin/src/app/app-routing.module'

registerLocaleData(zh)

const APPLICATIONS = [AppAdminModule.forRoot()]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgZorroAntdModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    LayoutModule,
    ...APPLICATIONS
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
