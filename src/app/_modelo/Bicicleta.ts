export class Bicicleta{

  //propiedades


  
  _color: string;
  _marca: string;
  _velocidad: number;
  _platos: number;
  _pinones: number;
  _electrica: boolean;

  // constructor

  constructor(color: string, marca: string, velocidad: number, platos: number, pinones: number, electrica: boolean ){
    this._color= color;
    this._marca=marca;
    this._velocidad=velocidad;
    this._platos=platos;
    this._pinones=pinones;
    this._electrica=electrica;
  }
  public get color(): string {
    return this._color;
  }
  public set color(color: string) {
    this._color = color;
  }
  public get marca(): string {
    return this._marca;
  }
  public set marca(marca: string) {
    this._marca = marca;
  }
  public get velocidad(): number {
    return this._velocidad;
  }
  public set velocidad(velocidad: number) {
    this._velocidad = velocidad;
  }
  public get platos(): number {
    return this._platos;
  }
  public set platos(platos: number) {
    this._platos = platos;
  }

  public get electrica(): boolean {
    return this._electrica;
  }
  public set electrica(electrica: boolean) {
    this._electrica = electrica;
  }
  public get pinones(): number {
    return this._pinones;
  }
  public set pinones(pinones: number) {
    this._pinones = pinones;
  }

  acelerar(velocidad: number){
   this._velocidad=this._velocidad+velocidad;

  }
  frenar(velocidad: number){
  this._velocidad= this._velocidad-velocidad;;

  }
  toString(): string{
    return  "COLOR:"+this.color+". MARCA: "+this.marca+". VELOCIDAD: "+this.velocidad+". platos: "+this.platos+" PIÑONES: "+this.pinones
  }
}
