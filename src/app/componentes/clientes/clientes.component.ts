import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente = {
    nombre: "",
    apellido: "",
    email: "",
    saldo: 0
  };

  constructor(private clienteServicio:ClienteServicio) { }

  ngOnInit(): void {
    this.clienteServicio.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal() {
    let saldoTotal:number = 0;
    if( this.clientes ) {
      this.clientes.forEach( cliente => {
        if( cliente.saldo ) {
          saldoTotal += cliente.saldo;
        }
      } )
    }
    return saldoTotal;
  }

}
