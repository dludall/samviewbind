import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compchild',
  templateUrl: './compchild.component.html',
  styleUrls: ['./compchild.component.scss'],
})
export class CompchildComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  showmePomeInfo():string{
    console.log('김춘수 꽃');
    return '김춘수님의 꽃';
  }

}
