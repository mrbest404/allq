import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  standalone: true,
  selector: 'app-settings',
  imports: [CommonModule, MatSlideToggleModule],
  template: `
<div class="container grid">
<h3>ตั้งค่า</h3>
<mat-slide-toggle>ใช้โหมดมืด (อัตโนมัติจากระบบ)</mat-slide-toggle>
</div>
`,
})
export class SettingsComponent { }