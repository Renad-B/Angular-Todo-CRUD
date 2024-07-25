import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    //default path
    {path:'', redirectTo:'/todos', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Home'},
    {path:'todos', component:TodosComponent, title:'Todos'},
    {path:'todos/:id', component:TodoDetailsComponent, title:'Todos Details'},
    {path:'contact-us', component:ContactusComponent, title:'Contact us'},
    {path:'about-us', component:AboutusComponent, title:'About us'},
    //Should always be the last route.
    {path:'**', component:NotFoundComponent, title:'Not found'}
]; 
