class Telivision{

    constructor(brand,price,inches,onOff,volume=50,channel=1){
        this.brand = brand;
        this.price = price;
        this.inches = inches;
        this.onOff = onOff;
        this.volume = volume;
        this.channel = channel
    }

     increaseVolume(){
         if(this.volume>=100)
            console.log("Max Volume is 100")

        else{
            this.volume+=10;
            console.log('Volume' +this.volume)
        }
    }
    decreaseVolume(){
        if(this.volume<=0)
        console.log("Min Volume is 0")

    else{
        this.volume-=10;
        console.log('Volume '+this.volume)
    }
    }
    setChannel(channelNumber){
        if(channelNumber>60)
            console.log("No channel available in channel no " +channelNumber)
        else{
            this.channel=channelNumber
            console.log('Channel No: '+this.channel)
        }
        
    }
    reset(){
        this.volume=50
        this.channel=1
    }
    status(){
        console.log(this.brand+" at channel "+this.channel)
    }
}

panasonic = new Telivision('Panasonic',12000,15,'on',100)
onida = new Telivision('Onida',16000,21,'on')
onida.increaseVolume()
onida.decreaseVolume()
onida.increaseVolume()
onida.setChannel(54)
onida.setChannel(64)
onida.reset()
onida.status()
onida.increaseVolume()

