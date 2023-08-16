import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-imc',
  templateUrl: './dialog-imc.component.html',
  styleUrls: ['./dialog-imc.component.scss']
})
export class DialogImcComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  
}
