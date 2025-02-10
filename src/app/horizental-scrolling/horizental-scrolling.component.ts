import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-horizental-scrolling',
  imports: [MatIconModule],
  templateUrl: './horizental-scrolling.component.html',
  styleUrl: './horizental-scrolling.component.css',
})
export class HorizentalScrollingComponent {
  @ViewChild('divNavigationContainer', { static: true })
  divNavigationContainer: ElementRef | undefined;
  scrollLeft: boolean = false;
  scrollRight: boolean = true;

  ngAfterContentInit() {
    this.SetScrollingStatus();
  }

  left() {
    const scrollItems = document.querySelector(
      '.containerScrollItems'
    ) as HTMLElement;
    const scrollLength = scrollItems.scrollWidth - scrollItems.clientWidth;
    scrollItems.scrollBy({
      left: -50,
      behavior: 'smooth',
    });

    this.SetScrollingStatus();
  }

  right() {
    const scrollItems = document.querySelector(
      '.containerScrollItems'
    ) as HTMLElement;
    const scrollLength = scrollItems.scrollWidth - scrollItems.clientWidth;

    scrollItems.scrollBy({
      left: 50,
      behavior: 'smooth',
    });

    this.SetScrollingStatus();
  }

  SetScrollingStatus() {
    const scrollItems = document.querySelector(
      '.containerScrollItems'
    ) as HTMLElement;
    const scrollLength = scrollItems.scrollWidth - scrollItems.clientWidth;
    let scrollLeft = scrollItems!.scrollLeft;

    if (scrollLeft == 0) {
      this.scrollLeft = false;
      this.scrollRight = true;
    } else if (scrollLeft > 0 && scrollLeft < scrollLength) {
      this.scrollLeft = true;
      this.scrollRight = true;
    } else if (scrollLeft > 0 && scrollLeft == scrollLength) {
      this.scrollLeft = true;
      this.scrollRight = false;
    }
  }
}
