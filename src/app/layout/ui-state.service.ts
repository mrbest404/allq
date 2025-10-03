import { Injectable, signal } from '@angular/core';


const KEY_SIDENAV = 'ui.sidenav.open';
const KEY_THEME = 'ui.theme.dark';


@Injectable({ providedIn: 'root' })
export class UiStateService {
sidenavOpen = signal<boolean>(this.readBool(KEY_SIDENAV, true));
dark = signal<boolean>(this.readBool(KEY_THEME, window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false));


toggleSidenav() {
this.sidenavOpen.update(v => this.persist(KEY_SIDENAV, !v));
}
setSidenav(val: boolean) {
this.sidenavOpen.set(this.persist(KEY_SIDENAV, val));
}


toggleDark() {
this.dark.update(v => this.persist(KEY_THEME, !v));
}
setDark(val: boolean) {
this.dark.set(this.persist(KEY_THEME, val));
}


private persist(key: string, val: boolean) {
localStorage.setItem(key, JSON.stringify(val));
return val;
}
private readBool(key: string, fallback: boolean) {
try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; }
}
}