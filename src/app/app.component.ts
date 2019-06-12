import { Component } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleAPP';
  animal = ["dog","cat"];
  newAnimal:string='';
  removeAnimal:string='';
  list = [];
  newList :string='';

  addNew(){
    this.animal.push(this.newAnimal)

  }

  removeNew(list) {
let index = list.indexOf(list)   
      this.animal.splice(index,1) 

  } 



  addList(){
    let index = 
    this.list.push(this.newList)

  }

  delete(display) {
    let index = display.indexOf(display)   
          this.list.splice(index,1) 
    
      }
}
