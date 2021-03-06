import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})

export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    search: any = "";
    
    constructor(private router: Router,
        private api: ApiService) { }
  
  ngOnInit() {
       this.deaths = this.api.getDeaths();
         this.router.navigateByUrl(`/tabs/deaths}`);
    
  }
  filter(death){
    // console.log(death.author);
    return death.responsible.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
  }
}
