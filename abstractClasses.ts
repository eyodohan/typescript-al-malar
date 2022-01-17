abstract class KrediBase{
    constructor(){

    }
    kaydet():void{
        console.log("kaydedildi")
    }
    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı");
    }
}
class MorgageKredi extends KrediBase{
    
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("MorgageKredisine göre hesap yapıldı");
    }
}

let tuketiciKredi = new TuketiciKredi()
tuketiciKredi.hesapla()
tuketiciKredi.kaydet()

let morgage = new MorgageKredi()
morgage.hesapla()
morgage.kaydet()

let kredi : KrediBase
kredi = new TuketiciKredi()

kredi = new MorgageKredi()