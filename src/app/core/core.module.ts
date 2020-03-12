import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core'
import { CommonModule, APP_BASE_HREF } from '@angular/common'
import { ModuleWithProviders } from '@angular/compiler/src/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

/**
 * 相对根路径
 */
const appBaseHrefFactory = () => '/'

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`already been loaded`)
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: EmptyInterceptor,
        //   multi: true
        // },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: DefaultInterceptor,
        //   multi: true
        // },
        // {
        //   provide: APP_INITIALIZER,
        //   useFactory: startupFactory,
        //   deps: [StartupService],
        //   multi: true
        // },
        {
          provide: APP_BASE_HREF,
          useFactory: appBaseHrefFactory
        }
      ]
    }
  }
}
