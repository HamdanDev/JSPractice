
/* Example  1 
let circle = {
    radius:1,    
    location : {
        x:1,
        y:1
    },    
    draw : function()
    {
        console.log('draw');
    }
};

circle.draw();
console.log(circle.location);
console.log(circle.radius);
*/


/* Example 2 */
//Factory function form 1

// function createCircle_form1(_radius)
// {
//     return {
//         radius :_radius,
//         draw: function(){
//             console.log('draw 1 ');
//         }
//     };
// }

// //Factory function form 2 without affecting params ES6
// function createCircle_form2(radius)
// {
//     return {
//         radius,
//         draw: function(){
//             console.log('draw 2 ');
//         }
//     };
// }

// const circle1 = createCircle_form1(1);
// circle1.draw();

// const circle2 = createCircle_form2(2);
// circle2.draw();

// //Constructor function

// function Circle(_radius){
//     this.radius = _radius;
//     this.draw = function (){
//         console.log('draw' + this.radius);
//     }
// }
// const another = new Circle(5);

// another.draw();

// Factory Function is like Constructor Function
//call()
//apply()

/* Value VS Reference */

// let x = 10;
// let y =x ;
// x = 15 ;
// /**********/
// let xx = { value:20};
// let yy = xx;
// xx.value = 30;

// // Primitirves  | are copied by thier  | VALUE
// // OBJECTS      | are copied by thier  | REFERENCE

// let obj = {value:30};

// Incriment = function(obj)
// {
//     obj.value ++;
// }
// Incriment(obj);
//console.log(obj);

//value types are :
//Number, String, Boolean, Symbol, undefined, null

//Referance types are :
// Object, Function, Array


// /* add or remove Params */

// function Circle(_radius){
//     this.radius = _radius;
//     this.draw = function (){
//         console.log('draw' + this.radius);
//     }
// }

// const circle = new Circle(5);

// delete circle.radius;

// circle.location = {x:1};
// //or
// circle['location2'] = {y:3};

// /* Enumerating Properties  */
// //properties of an Object
// for (let key in circle){
// console.log(key , circle[key]);    
// }

// //
// const keys = Object.keys(circle);
// console.log(keys);

// //check if a property exists
// if('location' in circle)
// console.log('location exists in circul');



/* Abstraction */

function Circle(_radius) {
    this.radius = _radius;

    this.defaultLocation = { x: 0, y: 0 };

    //this.computeOptimumLocation = function()

    let computeOptimumLocation = function () {

    };

    this.draw = function () {
        computeOptimumLocation();
        console.log('draw' + this.radius);
    };
}

//const circle = new Circle(5);

//private let
//public this


//getters and setters 

function Circle(_radius) {
    this.radius = _radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
        return defaultLocation;
    }

    this.draw = function () {
        console.log('draw' + this.radius);
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('invalid Location');
            defaultLocation = value;
        }
    })

}

const circle = new Circle(5);
circle.draw();
circle.getDefaultLocation();
circle.defaultLocation






























