import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-card',
    imports: [
        RouterLink,
        DatePipe
    ],
    templateUrl: './blog-card.component.html',
    styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {

    @Input() name!: string;
    @Input() description!: string;
    @Input() id!: string;
    @Input() date!: number | Date;
    @Input() imagePath!: number;
}
