import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../models/client.model';

@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  constructor(private clientApiService: ClientService, private route: ActivatedRoute, private router: Router) {
  }

  client: Client = {
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    phone: "",
    address: "",
    city: "",
  }

  ngOnInit(): void {
    const typeDoc = this.route.snapshot.params["typeDoc"]
    const doc = this.route.snapshot.params["doc"]

    this.clientApiService.getClientDocumentTypeAndNumber(typeDoc, doc).subscribe((data) => {
      this.client = data
    })
  }

  returnHome () {
    this.router.navigate(['/'])
  }
}
