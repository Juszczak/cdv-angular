import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Planet {
  name: string;
  terrain: string;
  climate: string;
  url: string;
}

interface SwapiResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public planets: Planet[];
  private http: HttpClient;
  private previous: string;
  private next: string;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public ngOnInit(): void {
    const url = 'https://swapi.co/api/planets/?format=json';
    this.getPage(url);
  }

  private getPage(url: string): void {
    const response = this.http.get(url);
    response.subscribe((data: SwapiResponse) => {
      const planets: Planet[] = data.results;
      this.planets = planets;
      this.next = data.next;
      this.previous = data.previous;
    });
  }

  public previousPage(): void {
    this.getPage(this.previous);
  }

  public nextPage(): void {
    this.getPage(this.next);
  }
}
