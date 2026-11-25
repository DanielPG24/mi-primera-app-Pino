import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg } from '@ionic/angular';
import { IonGrid, IonRow, IonCol, IonList, IonItem, IonInput, IonButton, IonButtons, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

import { Producto } from '../models/producto';
import { ProductoItemComponent } from
  '../components/producto-item/producto-item.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ProductoItemComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonButtons,
    IonIcon,
    RouterLink,
    IonButtons,
    IonIcon,
    IonImg
]
})
export class Tab1Page {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Portátil MSI Katana 15 HX',
      descripcion: '15.6", Intel Core i9-14900HX, 32GB de RAM, 1TB SSD y RTX 5060',
      precio: 699,
      imagen: 'https://dam.elcorteingles.es/producto/www-001015215506195-03.jpg'
    },
    {
      id: 2,
      nombre: 'Poco X8 Pro',
      descripcion: 'Con 12GB de RAM y con 512GB de almacenamiento',
      precio: 415,
      imagen: 'https://m.media-amazon.com/images/I/61YY6oXdMFL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 3,
      nombre: 'Auricular Beats Studio Pro Circumaural',
      descripcion: 'Bluetooth 5.3 y Cancelación de Ruido 40h',
      precio: 128,
      imagen: 'https://m.media-amazon.com/images/I/61c8vBJoCmL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 4,
      nombre: 'iPad',
      descripcion: 'Tablet de 10 pulgadas.',
      precio: 449,
      imagen: 'https://supermercado.eroski.es/imagesMarket/MP80463_1_l.webp'
    },
    {
      id: 5,
      nombre: 'Teclado mecánico',
      descripcion: 'Teclado mecánico con switches rojos.',
      precio: 49,
      imagen: 'https://thumb.pccomponentes.com/w-44-44/articles/1046/10467407/1110-logitech-g413-tkl-se-teclado-gaming-mecanico-retroiluminado-caracteristicas.jpg'
    },
    {
      id: 6,
      nombre: 'JBL Charge 6',
      descripcion: 'Altavoz inalámbrico',
      precio: 148,
      imagen: 'https://www.jbl.es/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf730bf50/LS_JBL_CHARGE_6_BLACK_HERO_071_x1.png?sw=680&sh=680'
    },
    
  ];

  // Nueva propiedad: un objeto Producto para enlazar con el formulario
  public nuevoProducto: Producto = {
    id: 0, // Daremos un ID real al añadirla
    nombre: '', // Enlazaremos esto al input
    descripcion: '', // Valor por defecto
    precio: 0,
    imagen: ''
  };

  constructor(){
    addIcons({ settingsOutline });
  }

  // Método modificado para añadir la tarea desde el objeto
  agregarProducto() {
    // Verificamos que el título no esté vacío
    if (this.nuevoProducto.nombre.trim().length === 0) {
      return; // No hacemos nada si está vacío
    }
    if (this.nuevoProducto.descripcion.trim().length === 0) {
      return; // No hacemos nada si está vacío
    }
    if (this.nuevoProducto.precio.toString().trim().length === 0) {
      return; // No hacemos nada si está vacío
    }
    if (this.nuevoProducto.imagen.trim().length === 0) {
      return; // No hacemos nada si está vacío
    }

    // Creamos una copia del objeto para añadir a la lista
    // Le asignamos un ID único y usamos el título del formulario
    const productoParaAnadir: Producto = {
      ...this.nuevoProducto, // Copia las propiedades existentes (titulo, completada)
      id: Date.now()     // Asigna un nuevo ID
    };

    // Añadimos la nueva tarea al principio del array
    this.productos.unshift(productoParaAnadir);

    // Reseteamos el objeto del formulario para la siguiente tarea
    this.nuevoProducto = { id: 0, nombre: "",descripcion: '', precio: 0, imagen: ''};
  }
}