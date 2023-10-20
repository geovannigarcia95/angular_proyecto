import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {
  nombre: string = "";
  fecha: string = "";
  hora: string = "";
  sintomas: string = "";
  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<Cita>();

  constructor() {}

  ngOnInit(): void {}

  AgregarCita() {
    if (this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === '') {
      this.formularioIncorrecto = true;
      return;
    } else {
      this.formularioIncorrecto = false;
      const cita: Cita = {
        nombre: this.nombre,
        fecha: this.fecha,
        hora: this.hora,
        sintomas: this.sintomas
      };
      console.log(cita);
      this.nuevaCita.emit(cita);
      this.resetCampos();
    }
  }

  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}

interface Cita {
  nombre: string;
  fecha: string;
  hora: string;
  sintomas: string;
}
