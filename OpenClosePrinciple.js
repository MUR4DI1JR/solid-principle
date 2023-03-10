class Shape {
    area(){
        throw new Error("Area method should be implement");
    }
}

class Square extends Shape{
    constructor(size) {
        super()
        this.size = size;
    }

    area() {
        return this.size ** 2
    }

}

class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height
    }

}

class AreaCalculator{
    constructor(shapes = []) {
        this.shapes = shapes
    }

    summ(){
        return this.shapes.reduce((acc, shape)=> {
            acc += shape.area();
            return acc;
        }, 0)
    }
}

const calc = new AreaCalculator([
    new Square(5),
    new Circle(10),
    new Rect(10, 20)
]).summ()

console.log(calc);