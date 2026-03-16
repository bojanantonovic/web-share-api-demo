import {Component} from '@angular/core';

@Component({
  selector: 'app-share-csv',
  template: `
    <button (click)="shareCsv()">CSV per Mail/Share senden</button>`,
  standalone: true
})
export class ShareCsv {

  async shareCsv() {
    // 1. Deine CSV-Daten (Beispiel)
    const csvContent = "Name,Email\nMax Mustermann,max@example.com\nErika Muster,erika@example.com";

    // 2. Erstelle ein File-Objekt
    const file = new File([csvContent], 'daten.csv', {type: 'text/csv'});

    // 3. Prüfen, ob das Teilen von Dateien unterstützt wird
    if (navigator.canShare && navigator.canShare({files: [file]})) {
      try {
        await navigator.share({
          files: [file],
          title: 'Exportierte Daten',
          text: 'Hier ist die gewünschte CSV-Datei.'
        });
        console.log('Erfolgreich geteilt');
      } catch (error) {
        console.error('Fehler beim Teilen:', error);
      }
    } else {
      // Fallback, falls Web Share oder Files-Sharing nicht unterstützt wird
      this.fallbackMail(csvContent);
    }
  }

  private fallbackMail(content: string) {
    // Klassischer mailto-Link (Achtung: Anhänge gehen hierüber nicht!)
    const uri = `mailto:?subject=CSV Export&body=${encodeURIComponent(content)}`;
    window.location.href = uri;
  }
}
