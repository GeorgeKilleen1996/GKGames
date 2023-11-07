import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconModule } from './icon/icon.module'

const modules = [
  IconModule,
]

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
  declarations: [],
})
export class UiModule {}