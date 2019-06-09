import { Injectable } from '@angular/core';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public saveContactData(name: string, email: string, message: string): void {
    const contactData: ContactData = {
      name,
      email,
      message,
    };
    // to na górze jest równoważne z tym na dole
    // let contactData: ContactData = {
    //   name: name,
    //   email: email,
    //   message: message,
    // };
    //                           klucz         wartość
    window.localStorage.setItem('contactData', JSON.stringify(contactData));
    // window - okno przeglądarki
    // localStorage - miejsce do przechowywania danych
    // localStorage.setItem - zapisanie wartości dla danego klucza
    // localStorage.getItem - odczytanie wartości danego klucza
    // JSON - biblioteka służąco do kodowania i odkodowania objektów/stringów
    // JSON.stringify - kodowanie obiektu do stringa
    // JSON.parse - dekodowanie objektu ze stringa
  }
}
