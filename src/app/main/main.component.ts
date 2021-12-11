import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { JikanService } from './jikan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  dtOptions: DataTables.Settings = {};

  dtTrigger = new Subject();

  public animeForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]]
  });

  public animeList: any;
  public episodesList: any;

  constructor( private jikanService: JikanService, private fb: FormBuilder ) { }

  searchAnime() {
    this.jikanService.getAnime(this.animeForm.value.name).subscribe(
      resp => {
        this.animeList = resp.results;
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error in the request!',
          footer: err.message
        })
      }
    );
  }

  seeEpisodes( id: number ) {
    
    this.jikanService.getEpisodes(id).subscribe(
      resp => {
        this.episodesList = resp.episodes;
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error in the request!',
          footer: err.message
        })
      }
    );
  }

}
