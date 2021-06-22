import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "not defined";
  @Input() color: string = "not defined";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //console.log(this.text, this.color);
  }

  onClick(){
    this.btnClick.emit();
  }

}
