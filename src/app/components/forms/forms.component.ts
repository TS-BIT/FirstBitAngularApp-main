import { Product } from './../../models/Product';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
testProduct: Product;
  @ViewChild('f') private myForm!: NgForm;
  //@ViewChild('f') private myForm: NgForm | undefined;

  constructor() {
    this.testProduct = {

    }

   }

  ngOnInit(): void {
  }

  formSubmitted($event: MouseEvent): void {
    console.log(this.myForm.value);
  }


}
