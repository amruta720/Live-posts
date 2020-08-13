import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   isAuthenticated=false;
  constructor(private dataStorageService: DataStorageService,private auhService:AuthService) { }

  ngOnInit(): void {
    //Automation
    this.auhService.user.subscribe((user)=>{
      this.isAuthenticated=!!user;
      this.dataStorageService.fetchData();
    })
  }
   onSaveData(){
     this.dataStorageService.saveData();
   }
   onFetchData(){
     this.dataStorageService.fetchData();
   }
  
  
}
