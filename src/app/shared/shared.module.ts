import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { IconsProviderModule } from './icons-provider.module'

/**
 * 公共模块
 */
const COMMON = [
  IconsProviderModule,
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
]

/**
 * 指令模块
 */
const DIRECTIVES = []

/**
 * 管道模块
 */
const PIPES = []

/**
 * 第三方模块
 */
const THIRDS = []

/**
 * 组件模块
 */
const COMPONENTS = []

@NgModule({
  imports: [...COMMON],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [...COMMON, ...COMPONENTS, ...DIRECTIVES, ...PIPES]
})
export class SharedModule {}
