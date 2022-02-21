import { Component, OnInit } from '@angular/core';
import { AlbumsService, albumType } from 'src/Services/albums.service';
import { PhotosService, photosType } from 'src/Services/photos.service';
import { UsersService, userType } from 'src/Services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums!: albumType[];
  users!: userType[];
  photos!: photosType[];

  constructor(
    private albumservice: AlbumsService,
    private userservice: UsersService,
    private photoservice: PhotosService,
    ) { }

  ngOnInit(): void {
    this.albumservice.getAlbums().subscribe((value: albumType[]) => {
      this.albums = value;
    });

    this.userservice.getUsers().subscribe((value: userType[]) => {
      this.users = value;
    });

    this.photoservice.getPhotos().subscribe((value: photosType[]) => {
      this.photos = value;
    });
  }

  getNames(userId: number) {
    const names = this.users.find((names) => names.id === userId)
    return names?.name
  }

}