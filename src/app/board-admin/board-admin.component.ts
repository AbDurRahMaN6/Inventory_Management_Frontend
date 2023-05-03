import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private storageService: StorageService, private router:Router){}
  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }

}
