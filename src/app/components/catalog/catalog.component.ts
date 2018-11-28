import { Component, OnInit } from '@angular/core';

import { CatalogService } from './catalog.service';
import { ICatalog } from './catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public catalogs: ICatalog[];

  constructor(private catalogService: CatalogService) {
    this.catalogs = [];
  }

  public ngOnInit(): void {
    this.getAvailableCatalogs();
  }

  public getAvailableCatalogs(): void {
    this.catalogs = this.catalogService.getCatalogs();
  }
}
