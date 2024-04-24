import { Component } from '@angular/core';
import { PhotosService } from '../../photos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent {
  photoUrl!: string;

  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((res) => {
      this.photoUrl = res.urls.regular;
    });
  }
}
