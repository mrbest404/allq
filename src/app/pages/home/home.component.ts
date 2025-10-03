import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
standalone: true,
selector: 'app-home',
imports: [CommonModule, MatCardModule, MatButtonModule],
templateUrl: './home.component.html',
styleUrl: './home.component.css'
})
export class HomeComponent {}