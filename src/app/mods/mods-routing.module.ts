import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: ModsHomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
