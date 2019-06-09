/*splice method mutates the original array it is used to add or remeove lements from the middle of the array
Splice method returns the elements removed

arguments
1. index
2. count of elements to delete starting at first arguments
3. (optional) This argument inserts a specified element into the array at this point

returns the elements removed


splice allows you to remove x amouhnt of elements from an array and
allows you to insert in that place


You don't have to remove any elements, can be used to insert

let names = ['paul'] if you insert
returns = []




.join method concatenates the elements of an array into a string 
does not mutate original array is unchanged
want to capture this in a variable 

convert number into string 
.join can coerce array into a string implicitly coercing it into a string of elements 
if you dont provide an argument it will separate elements by ,
if you do provide an parameter you separate each element by that character 

['paul', 'john', 'ringo'].join(' ') = 'paul john ringo'

CONCAT METHOD - non mutating method
puts two arrays together and makes them into one big array, merges two arrays into one
keeps the order of the arrays you name

firstArray.concat(secondArray) = [ first, array, elements, second, array, elements ]

you can concat the same array and the same array


NESTED Arrays

arrays can contain other arrays  
nums = [[2,3], [1,2]]
nums[1][0] = 1  chaining brackets to access inner arrays
nums.length = 2

Array.isArray () tells you if the element is an array,, if then do this

element = rsvpGruops[i]

if (Array.isArray(element)) {

}

nested arraysL grid

let grid = [
[1, 2, 3],
[1, 2, 3],
[1, 2, 3]
]

let firstColumn = [grid[0][0], grid[1][0], grid[2][0]]

SUDOKU Project due thursday



*/

