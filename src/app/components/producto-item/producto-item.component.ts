import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonItem, IonLabel} from '@ionic/angular';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonItem, IonLabel]
})
export class ProductoItemComponent {
  @Input() producto!: Producto;
}
