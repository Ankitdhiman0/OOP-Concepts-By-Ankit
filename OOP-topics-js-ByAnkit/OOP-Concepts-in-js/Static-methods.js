
// Static Methods are defined on the class itself rather than on interfaces of the class.

// they are often used for utility functions that are relevant to all instances of a class.

class MathHelper{
    static sqaure(number){
        return number * number;
    }
}

console.log(MathHelper.sqaure(5));