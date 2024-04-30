import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Marker } from 'src/app/interfaces/marker.interface';

@Component({
  selector: 'app-form-map',
  templateUrl: './form-map.component.html',
  styleUrls: ['./form-map.component.scss']
})
export class FormMapComponent implements OnInit {

  @Output() marker: EventEmitter<Marker> = new EventEmitter();
  markerForm: FormGroup | null;
  showModal: boolean = false;
  constructor(private fomBuilder: FormBuilder) {
    this.markerForm = null;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.markerForm = this.fomBuilder.group({
      desc: ['',
        [Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$'),
        Validators.maxLength(50),
        ]
      ],
      lat: ['', [
        Validators.required,
        Validators.pattern(/^[--//0-9]*$/)
      ]
      ],
      lng: ['',
        [
          Validators.required,
          Validators.pattern(/^[--//0-9]*$/)
        ]
      ]
    });
  }

  saveMarker() {
    if (this.markerForm?.valid) {
      this.marker.emit(this.markerForm.value);
      this.markerForm.reset();
      this.closeModal();
    }
  }

  closeModal() {
    this.showModal = !this.showModal;
  }

}
