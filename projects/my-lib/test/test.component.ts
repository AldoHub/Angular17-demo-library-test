import { Component } from '@angular/core';
import { format } from "date-fns";
 
@Component({
  selector: 'lib-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  public printDate(){
    console.log(format(new Date(), "MM/dd/yyyy"));
  }


}
