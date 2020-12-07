import { Component } from '@angular/core';
@Component({
    selector:"ptab",
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']
})
export class PtabComponent{
    name:string="Rupali";
    sal=123456;
    flag=true;
    flag1=false;
    ob={id:11,name:"Sara",desg:"Manager",dept:"IT"};
    arr=[
        {id:11,name:"Sara",desg:"Manager",dept:"IT"},
        {id:12,name:"mira",desg:"CEO",dept:"SupplyChain"},
        {id:13,name:"vira",desg:"developer",dept:"IT"}
    ];
    changeFlag(){
        this.flag=!this.flag;
    }

}