import { NgModule } from '@angular/core'
import { DefaultLayoutComponent } from './default-layout/default-layout.component'
import { SharedModule } from '~/shared/shared.module'
import { LayoutComponent } from './layout.component'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'

/**
 * 支持布局
 */
const LAYOUTS = [DefaultLayoutComponent]

/**
 * 布局组件
 */
const COMPONENTS = []

const ROOT = LayoutComponent

@NgModule({
  imports: [NzLayoutModule, NzMenuModule, SharedModule],
  declarations: [ROOT, ...LAYOUTS, ...COMPONENTS],
  entryComponents: [ROOT, ...LAYOUTS, ...COMPONENTS],
  exports: [ROOT]
})
export class LayoutModule {}
