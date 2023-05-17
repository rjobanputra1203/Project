import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { authservice } from '../auth/auth.servises';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService , private authservice : authservice , private router: Router){}

  onSaveData(){
    this.dataStorageService.storeRecipe();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipe().subscribe();
  }
  logout() {
    this.authservice.logout();
    this.router.navigate(['auth']);
  }

}
