import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RnpService } from "../../services/my-service.service";

@Component({
  selector: 'app-maejorins',
  templateUrl: './maejorins.component.html',
  
  styleUrls: ['./maejorins.component.css']
})
export class MaejorinsComponent implements OnInit {
candidats
sommeInscrits
sommeMos
sommmeSupprime
sommeVoix
sommeTable1
sommeTable2
sommeTable3
sommePourcentage
sommeTableTotale
  constructor(private rnpService:RnpService,private router:Router) { }

  ngOnInit(): void {
    this.rnpService.getResourceAll('maejors').subscribe(data=>{
      this.candidats = data['_embedded'].maejors
      console.log(this.candidats)
      this.sommeInscrits = 0
      for(let i=0;i<this.candidats.length;i++){
        
        this.sommeInscrits +=this.candidats[i].nbrInscrits
        console.log(this.candidats[i],"ppppppppppppppppppppppppppppppppp")
      }
     
      this.sommeMos = 0
      for(let i=0;i<this.candidats.length;i++){
        
        this.sommeMos +=this.candidats[i].nbrMos
        console.log(this.candidats[i],"ppppppppppppppppppppppppppppppppp")
      }
      this.sommmeSupprime = 0
      for(let i=0;i<this.candidats.length;i++){
        
        this.sommmeSupprime +=this.candidats[i].feuillesSupprimes
        console.log(this.candidats[i],"ppppppppppppppppppppppppppppppppp")
      }
      this.sommeVoix = 0
      for(let i=0;i<this.candidats.length;i++){
        
        this.sommeVoix +=this.candidats[i].voix
        console.log(this.candidats[i],"ppppppppppppppppppppppppppppppppp")
      }
      this.sommeTable1 = 0
      for(let i=0;i<this.candidats.length;i++){
        
        this.sommeTable1 +=this.candidats[i].table1
        console.log(this.candidats[i],"ppppppppppppppppppppppppppppppppp")
      }
      this.sommeTable2 = 0
      for(let i=0;i<this.candidats.length;i++){
        
        this.sommeTable2 +=this.candidats[i].table2
        console.log(this.candidats[i],"ppppppppppppppppppppppppppppppppp")
      }
      this.sommeTable3 = 0
      for(let i=0;i<this.candidats.length;i++){
        
        this.sommeTable3 +=this.candidats[i].table3
        console.log(this.candidats[i],"ppppppppppppppppppppppppppppppppp")
      }
      this.sommePourcentage = ((this.sommeMos/this.sommeInscrits)*100).toFixed(2)
      this.sommeTableTotale = 0
      for(let i=0;i<this.candidats.length;i++){
        
        this.sommeTableTotale +=this.candidats[i].sommeTables
        console.log(this.candidats[i],"ppppppppppppppppppppppppppppppppp")
      }
     
    })
  }

  onEditRNP(p:any){
 
    let url = p['_links'].self.href;
    this.router.navigateByUrl("elections/editMaejor/"+btoa(url))
}

}
