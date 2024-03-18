import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'benefits', 'actions' ];
  dataSource: any;
  listusers: user[] = [];
    
 @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;




constructor(private userService: UsersService){}

  ngOnInit() {
      this.getListUsers();
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
    
  getListUsers() {
    this.userService.getAllUsers().subscribe({
      next: (response: any) => {
        console.log('Lista de usuários FireBase', response);
        this.listusers = response;
            this.dataSource = new MatTableDataSource(users);


      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
