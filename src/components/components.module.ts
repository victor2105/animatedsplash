import { NgModule } from '@angular/core';
import { GrupoComponent } from './grupo/grupo';
import { CelulaComponent } from './celula/celula';
@NgModule({
	declarations: [GrupoComponent,
    CelulaComponent],
	imports: [],
	exports: [GrupoComponent,
    CelulaComponent]
})
export class ComponentsModule {}
