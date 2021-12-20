const splitNames = ( name = [] ) => {
//create the function and initialize the parameter

    let nameSplted = '';
    //decalre a varieble will return

    name.forEach((element) => {
        // we iterate the array
        nameSplted += element.slice(0,1);
        //split the string and cut the first character
        nameSplted += "."
        //add a .
    });
    //return the value
    return nameSplted;
}

//create an array with the names
const name1 = ['Juan', 'Patron'];
const name2 = ['Juan', 'Patron', 'Guerrero'];
const name3 = ['Hermman', 'Gummer'];

console.log( splitNames(name1) )
console.log( splitNames(name2) )
console.log( splitNames(name3) )