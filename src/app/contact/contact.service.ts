import { Injectable } from '@angular/core';

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public dataStorageKey = 'contactData';

  public saveContactData(name: string, email: string, message: string): void {
    const contactData: ContactData = {
      name,
      email,
      message,
    };
    const encoded: string = JSON.stringify(contactData);
    //                          klucz                wartość
    window.localStorage.setItem(this.dataStorageKey, encoded);
    // window - okno przeglądarki
    // localStorage - miejsce do przechowywania danych
    // localStorage.setItem - zapisanie wartości dla danego klucza
    // localStorage.getItem - odczytanie wartości danego klucza
    // JSON - biblioteka służąco do kodowania i odkodowania objektów/stringów
    // JSON.stringify - kodowanie obiektu do stringa
    // JSON.parse - dekodowanie objektu ze stringa

    console.log('dane zostały zapisane');
  }

  public getContactData(): ContactData {
    const encoded: string = window.localStorage
      .getItem(this.dataStorageKey);
    const contactData: ContactData = JSON.parse(encoded);
    return contactData;
  }
}
