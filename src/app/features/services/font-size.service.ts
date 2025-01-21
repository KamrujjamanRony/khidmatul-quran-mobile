import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FontSizeService {
  private defaultSizeIndex: number = 2; // 'base' is the default
  private currentSizeIndex: number = this.defaultSizeIndex;

  private sizes: string[] = [
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
  ];

  getCurrentSize(): string {
    return this.sizes[this.currentSizeIndex];
  }

  increaseFontSize(): void {
    if (this.currentSizeIndex < this.sizes.length - 1) {
      this.currentSizeIndex++;
      this.updateFontSize();
    }
  }

  decreaseFontSize(): void {
    if (this.currentSizeIndex > 0) {
      this.currentSizeIndex--;
      this.updateFontSize();
    }
  }

  updateFontSize(): void {
    document.documentElement.className = this.getCurrentSize();
  }

  resetFontSize(): void {
    this.currentSizeIndex = this.defaultSizeIndex;
    this.updateFontSize();
  }
}
