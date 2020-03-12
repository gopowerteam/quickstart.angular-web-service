import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

/**
 * 公共模块
 */
const COMMON = [CommonModule, BrowserModule, BrowserAnimationsModule, FormsModule, RouterModule, ReactiveFormsModule]

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
