import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SomethingModule } from './something/something.module';
import { SomethingComponent } from './something/something.component';
import { NodesComponent } from './nodes/nodes.component';

const routes: Routes = [
  {
    path: 'users',
    component: SomethingComponent,
  },
  {
    path: 'nodes',
    component: NodesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
