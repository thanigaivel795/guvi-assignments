class Circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
        if(radius==undefined && color == undefined){
            console.log("No parameters passed in the constructor")
        }
        else if(color==undefined){
            console.log("No color is passed")
        }
       
    }
    getRadius(){
        return this.radius
    }
    getColor(){
        return this.color
    }
    setRadius(radius){
        if(radius!=undefined){
            this.radius=radius
        }
    }
    setColor(color){
        if(color!=undefined){
            this.color=color
        }
    }
    
}
c = new Circle()
c_2 = new Circle('radius')
console.log(c_2.getRadius())
c.setRadius(10)
console.log(c.getRadius())