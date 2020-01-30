class Sejour{
    constructor(private _nom:string, private _prix:number){}

    get nom(){
        return this._nom;
    }
    get prix(){
        return this._prix;
    }
}
class SejourService{
    private _sejour:Sejour[]
    constructor(){
       this._sejour = [new Sejour('Paris', 100), new Sejour('Londres', 300)
    , new Sejour('Madrid', 400), new Sejour('Rome', 250)];
    
    }

    rechercherParNom(nomSejour: string): Sejour{
        
       return this._sejour.filter(e => e.nom === nomSejour).reduce(e =>e);
        
    }
}

const sejourService = new SejourService();
console.log(sejourService.rechercherParNom('Paris'));

