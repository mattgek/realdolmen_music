import { Component, HostListener } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  faSearchIcon = faSearch;
  hasScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = this.getScrollPosition() > 25;
  }

  private getScrollPosition(): number {
    return (
      window.pageYOffset ||
      ((document.documentElement || document.body.parentNode || document.body) as any).scrollTop
    );
  }
}
