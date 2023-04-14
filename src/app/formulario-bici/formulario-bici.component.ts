import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/Bicicleta';
@Component({
  selector: 'app-formulario-bici',
  templateUrl: './formulario-bici.component.html',
  styleUrls: ['./formulario-bici.component.css']
})

export class FormularioBiciComponent  {
  velocidadNueva: number=0;
  
  constructor(){}
  bici: Bicicleta= new Bicicleta("","",0,0,0,false);
  mensajefinal: string =""
  mensajea:string=""
  ngOnInit(): void {

  }


enviar()
{
 this.mensajefinal=this.bici.toString()
 if(this.bici.electrica!=true)
 {
  this.mensajea="la bici no es electrica "
 }
 else
 {
  this.mensajea="la bici es es electrica "
 }
}
acelerar()
{
this.bici.acelerar(this.velocidadNueva)
this.mensajefinal=this.bici.toString()

}
frenar()
{
  this.bici.frenar(this.velocidadNueva)
  this.mensajefinal=this.bici.toString()
}
}
