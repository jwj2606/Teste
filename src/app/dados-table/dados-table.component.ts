import { Component, OnInit, ViewChild } from '@angular/core';
import { DesafioTeiaService } from '../desafio-teia.service';
import { CamposTabela } from 'src/camposTabela';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

declare var $: any;


@Component({
  selector: 'app-table',
  templateUrl: './dados-table.component.html',
  styleUrls: ['./dados-table.component.css']
})
export class DadosTableComponent implements OnInit {
  

  ELEMENT_DATA : CamposTabela[];
  displayedColumns: string[] = ['albumId','id','title','url','thumbnailUrl'];
  dataSource = new MatTableDataSource<CamposTabela>(this.ELEMENT_DATA);
  showTable = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service:DesafioTeiaService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllReports();
  }

  public getAllReports(){
    this.showTable = false;

    let resp = this.service.apiServicoConsome();
    resp.subscribe((report : any)=>{
      this.dataSource.data=report  as CamposTabela[];
      var column_names = []; //Array com confi das colunas

      var jsonObj = this.dataSource.data;
      //console.log('jsonObj[0]',jsonObj[0][1])

      $.each(Object.keys(jsonObj[0]),function(idx,obj){
        let dadoIncluir = '{' + obj + ':' + typeof jsonObj[0][obj] + '}'
        column_names.push(dadoIncluir);
      });
  
      console.log('column_names',column_names)
      this.showTable = true;

    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearTable() {
    this.dataSource.data = [];
  }

  addData() {
    this.getAllReports();
  }

}
