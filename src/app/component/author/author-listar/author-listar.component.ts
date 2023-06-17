import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Author } from 'src/model/author';
import { AuthorService } from 'src/service/author.service';


@Component({
  selector: 'app-author-listar',
  templateUrl: './author-listar.component.html',
  styleUrls: ['./author-listar.component.css']
})
export class AuthorListarComponent implements OnInit {
  lista: Author[] = [];
  displayedColumns = ['id','nameAuthor','emailAuthor','birthDateAuthor'];
  dataSource = new MatTableDataSource<Author>();


  constructor(private authorService: AuthorService,
     private router: Router){
  }
  ngOnInit(): void {
    this.authorService.list().subscribe(data => {


      this.dataSource.data = data; // asíncrona
      });
  }

  
}
