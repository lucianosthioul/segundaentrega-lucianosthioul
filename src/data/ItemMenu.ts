export interface MenuItem {
  name: string;
  href: string;
  text: string;
  isButton?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    name: 'catalogo',
    href: 'catalogo',
    text: 'Catálogo',
    isButton: false
  },
  {
    name: 'masVendidos',
    href: '#masVendidos',
    text: 'Más Vendidos',
    isButton: false
  },
  {
    name: 'nosotros',
    href: 'nosotros',
    text: 'Nosotros',
    isButton: false
  },
  {
    name: 'contacto',
    href: 'contacto',
    text: 'Contacto',
    isButton: true
  }
];