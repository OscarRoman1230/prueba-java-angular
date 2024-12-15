import {Component} from '@angular/core';
import {FormBuilder, FormsModule, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SearchClient} from '../../models/client.model';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-client',
  imports: [FormsModule, NgForOf, ReactiveFormsModule, NgIf],
  templateUrl: './search-client.component.html',
  standalone: true,
  styleUrl: './search-client.component.css'
})
export class SearchClientComponent {

  client: SearchClient = { typeDocument: "", numberDocument: ""}
  typesDocuments = [
    {key: "", value: "Seleccione un tipo"},
    {key: "C", value: "Cédula de Ciudadania"},
    {key: "P", value: "Pasaporte"},
  ]
  rules = {
    notEmpty: this.client.numberDocument !== "" && this.client.typeDocument !== ""
  }
  searchClientForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {
    this.searchClientForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11),
          Validators.pattern(/^\d+$/)
        ]
      ]
    });
  }

  formatDocumentNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = Number(value).toLocaleString();
    input.value = value;
    this.searchClientForm.controls['documentNumber'].setValue(value.replace(/\./g, ''));
  }

  run() {
    this.router.navigate([`/client/${this.client.typeDocument}/${this.client.numberDocument}`])
  }
}
