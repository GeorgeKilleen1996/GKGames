import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import { iconProvider } from './icon-provider'

const modules = [NgIconsModule]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [iconProvider],
})
export class IconModule {}
