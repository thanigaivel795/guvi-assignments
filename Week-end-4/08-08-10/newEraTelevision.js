
class NewEraTelevision extends Telivision{
    constructor(brand,price,inches,onOff,screenThcikness,energyUsage,lifeSpan,refreshRate){
        super(brand,price,inches,onOff)
        this.screenThcikness = screenThcikness;
        this.energyUsage= energyUsage
        this.lifeSpan= lifeSpan
        this.refreshRate = refreshRate
    }
    viewingAngle(){
            console.log("View angle logic")
    }
    energyUsage(){
        console.log("energy usage logic")
    }
    displayDetails(){
        console.log("Display Details logic")
    }
    refreshRate(){
        console.log("Refresh rate logic")
    }

}
p=new NewEraTelevision('onida','8222',15,'on',1.3,'5watt','10 yrs',1)
console.log(p.brand)