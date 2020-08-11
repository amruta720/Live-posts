import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    //Automation
    this.dataStorageService.fetchData();
  }
   onSaveData(){
     this.dataStorageService.saveData();
   }
   onFetchData(){
     this.dataStorageService.fetchData();
   }
  
  
}
