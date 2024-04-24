import { Component } from '@angular/core';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent {
  constructor(private photosService: PhotosService) {
    this.photosService.getPhoto().subscribe((res) => {
      console.log(res);
    });
  }
}
