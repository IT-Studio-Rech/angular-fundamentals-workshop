import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appEmojiDependentOnDate]'
})
export class EmojiDependentOnDateDirective implements OnInit{

  @Input('emojiDependentOnDate') dateInput: string | undefined;

  // Interne Variable
  private daysTillSadEmoji: number = 3;  // Wähle eine angemessene Anzahl an Tagen

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setEmojiBasedOnDate();
  }

  setEmojiBasedOnDate() {
    if(!this.dateInput) {
      return;
    }

    const currentDate = new Date();
    const inputDate = new Date(this.dateInput);
    const diffInDays = Math.floor((inputDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    let emoji: string;

    if (diffInDays > this.daysTillSadEmoji) {
      // Falls die Differenz der Tage größer ist als die definierte Grenze, setze traurigen Smiley
      emoji = '😞';
    } else {
      // Ansonsten setze lachenden Smiley
      emoji = '😃';
    }

    this.renderer.setProperty(this.el.nativeElement, 'textContent', emoji);
  }
}
