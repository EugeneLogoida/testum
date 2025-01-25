import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-card',
    imports: [
        RouterLink
    ],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
    @Input() name!: string;
    @Input() profileSize!: any;
    @Input() gapSize!: any;
    @Input() price!: number;
    @Input() imagePath!: string;
    @Input() id!: string;
}
