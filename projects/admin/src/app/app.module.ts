import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from 'src/app/shared/shared.module'

/**
 * 应用根模块
 */
const ROOT = AppComponent

/**
 * 支持页面列表
 */
const PAGES = []

/**
 * 支持组件列表
 */
const COMPONENTS = []

/**
 * 内部模块
 */
@NgModule({
  declarations: [ROOT, ...PAGES, ...COMPONENTS],
  imports: [SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 * 公开模块
 */
@NgModule({})
export class AppAdminModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
