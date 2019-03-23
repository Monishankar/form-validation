import { Component, OnInit,Input,ViewChild,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import { SubChildComponent } from '../sub-child/sub-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child;
  constructor(private cdr : ChangeDetectorRef ) { }



  values ='';

  onKey(event: any)
  {
    this.values = event.target.value;
}
   

  message:string;
  receiveMessage($event) {
    this.message = $event;
  }
  

 
  ngOnInit() {
  }
  message1:string;

  ngAfterViewInit() {
    this.message1 = this.child.message;
    this.cdr.detectChanges();
    console.log(this.message1);
  }

}