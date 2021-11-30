// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce(function(prev, current){
            return prev + current
        })
    }
}
class Triangle extends Polygon{
    get isValid(){
        for(const side of this.sides){
            if((this.perimeter-side) < side) return false
        }
        return true
    }
}
class Square extends Polygon{
    get isValid(){
        let s = this.sides
        return ((
            s[0] === s[1] && 
            s[0] === s[2] && 
            s[0] === s[3]))
    }
    get area(){return this.sides[0]**2}
}