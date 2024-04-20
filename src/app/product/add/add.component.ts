import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit{
  constructor(private fb: FormBuilder,
              private ps: ProductService,
              private routing: Router){}
  addForm!: FormBuilder;

  ngOnInit(){
    this.addForm = this.fb.group({
      name:['',{}]
    })
  }

  get f(){

  return this.addForm.control;
  }

  addProduct(){
    console.log(this.addForm.value);
  }

}
