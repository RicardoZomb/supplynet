import { ICatalog } from './catalog';

export const CATALOG_MOCK: ICatalog[] = [
  {
    avatar: 'assets/catalogs/jewerly.png',
    description: 'Catálogo de joyeria',
    title: 'Joyeria',
    subtitle: 'Módulo de joyeria',
    text: 'Este es un módulo etc etc etc ...',
    router: 'jewerly'
  },
  {
    avatar: 'assets/catalogs/equipment.png',
    description: 'Catálogo de equipos tecnológicos',
    title: 'Equipos',
    subtitle: 'Módulo de equipos',
    text: 'Este es un módulo etc etc etc ...',
    router: 'equipment'
  },
  {
    avatar: 'assets/catalogs/products.png',
    description: 'Catálogo de productos',
    title: 'Productos',
    subtitle: 'Módulo de productos',
    text: 'Este es un módulo etc etc etc ...',
    router: 'product'
  },
  {
    avatar: 'assets/catalogs/family.png',
    description: 'Catálogo de familias',
    title: 'Familias',
    subtitle: 'Módulo de familias',
    text: 'Este es un módulo etc etc etc ...',
    router: 'family'
  }
];
