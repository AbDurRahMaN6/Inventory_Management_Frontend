import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { UsersDetailsListService } from 'src/app/_services/users-details-list.service';
import { UsersList } from 'src/app/models/usersList.model';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  id: any;
  user: UsersList = new UsersList();
  constructor(private usersDetailsListService: UsersDetailsListService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usersDetailsListService.getUsers(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSub(){
    this.usersDetailsListService.updateUsers(this.id, this.user).subscribe( data =>{
      this.goToUsersList();
    }
    , error => console.log(error));
  }

  goToUsersList(){
    this.router.navigate(['/manager/users']);
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}