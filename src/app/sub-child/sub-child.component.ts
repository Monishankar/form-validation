import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent implements OnInit {
  @Input() age: number;
  @Output() messageEvent = new EventEmitter<string>();
  temp: string;
  
  childmessage='HelloViewChildFromchildcomponent';

  constructor() { }
  

  ngOnInit() {
  }
  
  onClick() {
    
  if(this.age >= 18 && this.age <=115)
  {
  this.temp= "You are eligible for vote.... Proceed and cast your vote... ";
  this.messageEvent.emit(this.temp);
  }

  else if (!this.age||this.age<0)
  {
    this.temp="Please enter a correct Value ";
    this.messageEvent.emit(this.temp);
  }

  else if (this.age>150)
  {
    this.temp="Please enter a correct Value";
    this.messageEvent.emit(this.temp);
  }
  else
   {
    this.temp="Sorry !!!You are not eligible for vote!!!!! Wait for "+(18-this.age)+" more years";
    this.messageEvent.emit(this.temp);
  }
}
}