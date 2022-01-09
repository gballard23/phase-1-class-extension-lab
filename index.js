// Your code here
class Polygon {
    constructor(array){
        this.array = array
    }

    get countSides(){
       return this.array.length
    }

    get perimeter(){
    return this.array.reduce((accum, total) => accum + total);
    }
}

class Triangle extends Polygon {
    get isValid(){
        const x = this.array

        if ((x[0] + x[1]) >= x[2] && (x[1] + x[2]) >= x[0] && (x[0] + x[2]) >= x[1]) {
            return true
        }
        return false
    
    }

}

class Square extends Polygon {
    get isValid(){
        const x = this.array;
        if(x[0] === x[1] && x[2] && x[3]){
            return true
        }
        return false
    }

    get area(){
        const x = this.array;
        return x[0] * x[1]
    }

}