import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NavbarComponent } from './estrutura/navbar/navbar.component';
import { FooterComponent } from './estrutura/footer/footer.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {MatTableModule} from '@angular/material/table';	
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DadosTableComponent } from './componentes/dados-table/dados-table.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material';
import { MatTableExporterModule } from 'mat-table-exporter';
import {MatButtonModule} from '@angular/material/button';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DadosTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableExporterModule,
    MatButtonModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-br" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
