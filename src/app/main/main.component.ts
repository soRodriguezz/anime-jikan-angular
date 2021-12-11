import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { JikanService } from './jikan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};

  dtTrigger = new Subject();

  public animeForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]]
  });

  public animeList: any;

  constructor( private jikanService: JikanService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   lengthMenu: [5, 10, 15, 20],
    //   language: {
    //     url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es-cl.json'
    //   }
    // };
    
  }

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

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
