import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RnpService } from "../../services/my-service.service";

@Component({
  selector: 'app-edit-maejor',
  templateUrl: './edit-maejor.component.html',
  styleUrls: ['./edit-maejor.component.css']
})
export class EditMaejorComponent implements OnInit {

  currentAxe: any
  url: string
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:RnpService) { }
  
    ngOnInit(): void {
       this.url = atob(this.activatedRoute.snapshot.params['id'])
      this.pdiService.getOneResource(this.url).subscribe(data=>{
        console.log(data,"888888888888888888888888888888")
        this.currentAxe = data;
        console.log(this.currentAxe)
      },err=>{
        console.log(err)
      })
      console.log(this.url);
    }
    onUpdateAxe(value: any){
      value.pourcentage = ((value.nbrMos / value.nbrInscrits)*100).toFixed(2)
      value.voix = value.nbrMos - value.feuillesSupprimes
      value.sommeTables = value.table1 + value.table2 + value.table3
      console.log(value.table1 + value.table2 + value.table3 ,"&&")
      console.log(value.voix,"pp")
      if(value.table1 + value.table2 + value.table3 == value.voix){
        value.confirmation = true
      }else{
        value.confirmation = false
      }
      this.pdiService.updateResource(this.url,value).subscribe(data=>{
        alert("Mise a jour effectuée avec succès")
      },err=>{
        
      })
    }
    gotoList(){
      this.router.navigateByUrl('elections/maejorins');
    }

}
