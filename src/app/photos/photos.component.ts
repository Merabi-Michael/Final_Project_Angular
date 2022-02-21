// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Routes } from '@angular/router';
// import { AlbumsService, albumType } from 'src/Services/albums.service';
// import { PhotosService, photosType } from 'src/Services/photos.service';

// @Component({
//   selector: 'app-photos',
//   templateUrl: './photos.component.html',
//   styleUrls: ['./photos.component.scss']
// })
// export class PhotosComponent implements OnInit {
//   albumId!: any;
//   photos!: photosType[];
//   albums!: albumType[];

//   constructor(
//     private route: ActivatedRoute,
//     private photosservice: PhotosService,
//     private albumservice: AlbumsService
//     ) { }

//   ngOnInit(): void {
    
//     this.albumId = this.route.snapshot.paramMap.get('id')

//     this.photosservice.getPhotos().subscribe((value: photosType[]) => {
//       this.photos = value;
//     })

//     this.albumservice.getAlbums().subscribe((value: albumType[]) => {
//       this.albums = value;
//     })
//   }

//   getPhotos(id: number) {
//     const title = this.albums.find((photo) => photo.id === id);
//     return title?.title
//   }
  
//   // Grouping-color
//   this.Photoservice.getPhotos().subscribe((value: photosType[]) => {
//     this.photos = value.filter((item) => item.albumId === +this.albumId)
//   })
// }





import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService, photosType } from 'src/Services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  albumId!: any;
  photos!: photosType[];

  constructor(
    private route: ActivatedRoute,
    private photosservice: PhotosService,
    ) { }

  ngOnInit(): void {

    // Catch
    this.albumId = this.route.snapshot.paramMap.get('id')

    this.photosservice.getPhotos().subscribe((value: photosType[]) => {
      this.photos = value.filter((item) => item.albumId === +this.albumId);
    })
  }

}