import { Component, OnDestroy, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { UiStateService } from './ui-state.service';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-layout',
  imports: [MaterialModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit, OnDestroy {
  private ui = inject(UiStateService);
  private bp = inject(BreakpointObserver);


  isHandset = signal(false);
  sidenavOpened = computed(() => this.isHandset() ? false : this.ui.sidenavOpen());


  sub?: Subscription;


  ngOnInit(): void {
    this.sub = this.bp.observe([Breakpoints.Handset]).subscribe(res => {
      this.isHandset.set(res.matches);
    });
    // apply theme effect
    effect(() => {
      document.documentElement.toggleAttribute('data-dark', this.ui.dark());
    });
  }


  ngOnDestroy(): void { this.sub?.unsubscribe(); }


  toggleNav() { this.ui.toggleSidenav(); }
  toggleTheme() { this.ui.toggleDark(); }
  closeOnMobile(drawer: any) { if (this.isHandset()) drawer.close(); }
}
