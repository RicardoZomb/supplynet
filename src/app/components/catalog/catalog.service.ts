import { Injectable } from '@angular/core';

import { ICatalog } from './catalog';
import { CATALOG_MOCK } from './catalog.mock';

@Injectable()
export class CatalogService {
  constructor() {}

  /**
   * @description Get catalog to user logged in.
   */
  public getCatalogs(): ICatalog[] {
    return CATALOG_MOCK;
  }
}
