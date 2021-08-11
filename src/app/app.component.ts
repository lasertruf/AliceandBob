import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alice and Bob Problem';
constructor(private  fb:FormBuilder)
{}
 

  formN = this.fb.group({
    0: [''],
    1: [''],
    2: [''],
    3: [''],
    4: [''],
    5: [''],
    });
arr1=[0,0,0,];    
arr2=[0,0,0,];
res =[0,0];
AP:number = 0;
BP:number = 0;

a:number = 0;
b:number = 0;
result:boolean =false;

submit(){
this.res=[];
this.AP=0;
this.BP=0;
this.result=false;

for (let index = 0; index < 3; index++) {
   this.arr1[index]=this.formN.value[index];
  
}
for (let index = 0; index < 3; index++) {
  this.arr2[index]=this.formN.value[index+3];
 
}


for (let index = 0; index < 3; index++) {

     
       if(this.arr1[index]>this.arr2[index]){
              
         this.AP++;
         
       }
  
       if(this.arr1[index]<this.arr2[index]){
    this.BP++;
  }
  
  if(this.arr1[index]==this.arr2[index]){
         
  }

  if(index==2){
    this.result=true;

  }
  
}

this.res[0]=this.AP;
this.res[1]=this.BP;

}


}





