import {Component, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10) {
      document.getElementById('maNavBar').classList.add('affix');
    }
    else if (document.body.scrollTop < 10 ||
      document.documentElement.scrollTop < 10) {
      document.getElementById('maNavBar').classList.remove('affix');
    }
  }
}
