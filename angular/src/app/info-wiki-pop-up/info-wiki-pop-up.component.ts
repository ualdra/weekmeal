import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle, MatDialogActions, MatDialogClose} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { WIKI } from '../common/wikiEnum'
import { wikiInputData } from '../interfaces/wikiInputData'
import { wikiData } from '../interfaces/wikiData'

@Component({
  selector: 'app-info-wiki-pop-up',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './info-wiki-pop-up.component.html',
  styleUrl: './info-wiki-pop-up.component.css'
})

export class InfoWikiPopUpComponent implements OnInit{
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<InfoWikiPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: wikiInputData) { }
  title: string = ""
  text: string = ""
  ngOnInit(){
    let url: string = `http://localhost:8080/api/wiki/veganismo`
    switch(this.data.option){
      case WIKI.VEGANISMO: {
        url = "http://localhost:8080/api/wiki/veganismo"
        this.title = "Veganismo";
        break;
      }

      case WIKI.VEGETARIANISMO: {
        url = "http://localhost:8080/api/wiki/vegetarianismo"
        this.title = "Vegetarianismo";
        break;
      }

      case WIKI.CETOGENICO: {
        url = "http://localhost:8080/api/wiki/cetogenico"
        this.title = "Dieta cetogénica";
        break;
      }

      case WIKI.GLUTEN: {
        url = "http://localhost:8080/api/wiki/gluten"
        this.title = "Gluten";
        break;
      }

      case WIKI.LOWFODMAP: {
        url = "http://localhost:8080/api/wiki/lowfodmap"
        this.title = "Dieta Low FODMAP";
        break;
      }

      case WIKI.LACTEO: {
        url = "http://localhost:8080/api/wiki/lacteo";
        this.title = "Lácteo";
        break;
      }

      
    }
    
    this.http.get<wikiData>(url).subscribe((response: any) => {
      this.text = response.text;
    });
  }
}
