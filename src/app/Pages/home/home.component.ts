import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("alert")){
      Swal.fire('Votre demande a été crée en succées!', '', 'success')
      localStorage.removeItem("alert");
    }
    if(localStorage.getItem("cancel")){
      Swal.fire('Votre demande a été annuler!', '', 'success')
      localStorage.removeItem("cancel");
    }
  }

}
