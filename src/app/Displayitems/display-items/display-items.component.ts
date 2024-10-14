import { Component } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-display-items',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './display-items.component.html',
  styleUrl: './display-items.component.css'
})
export class DisplayItemsComponent {


  items:any=[];

  constructor(private http: HttpClient) {}  // Inject HttpClient

  ngOnInit(): void {
     this.fetchItems();
    
  }


  fetchItems() {
    this.http.get<any[]>('https://api.example.com/items')  // Replace with your actual API URL
      .subscribe(
        (response) => {
          this.items = response;  // Assign fetched data to items array
          console.log(this.items);  // Check data in console
        },
        (error) => {
          console.error('Error fetching items:', error);  // Handle error
        }
      );
  }

}
