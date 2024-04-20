import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";
import { UpdateComponent } from "./update/update.component";
import { ViewComponent } from "./view/view.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";



const routes: Routes = [
    { path: '' ,component: ListComponent, title: 'List Product' },
    { path: 'add' ,component: AddComponent, title: 'Add Product' },
    { path: ':id/update' ,component: UpdateComponent, title: 'Update Component' },
    { path: ':id/view' ,component: ViewComponent, title: 'View Component' }
]

@NgModule({
    imports:[
       RouterModule.forChild(routes)        
    ]

})
export class ProductRoutingModule{

}