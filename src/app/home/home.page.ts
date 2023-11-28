import { Component, ViewChild } from '@angular/core';
import { CompchildComponent } from '../compchild/compchild.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(CompchildComponent) comChild!: CompchildComponent;
  constructor() {}

  title:string='';
  ngAfterViewInit() {
    // this.comChild.showmePomeInfo();
  }
  showmeInfo(){
    this.title = this.comChild.showmePomeInfo();
  }
}
