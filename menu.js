///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
const pizza = {
    name: 'Pepperonni',
    price: 4,
    category: 'Dinner',
    popularity: 10,
    rating: 10,
    tags: ['non vegetarian', 'over rated', 'for kids']
}
console.log(pizza)


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let newPrice = pizza.price = 9;
console.log(newPrice)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let category = pizza.category;
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr = [
    {
        name: 'HotDog',
        price: 1,
        category: 'Lunch',
        popularity: 8.5,
        rating: 7,
        tags: ['proccessed meat', 'not a sandwich', 'for basebal games']
    },
    {
        name: 'Hamburger',
        price: 7,
        category: 'Fast Food',
        popularity: 5,
        rating: 11,
        tags: ['non vegetarian', 'creepy clown', 'play place']
    },
    {
        name: 'Taco',
        price: 1,
        category: 'Almuerzo',
        popularity: 15,
        rating: 12,
        tags: ['Fiesta', 'crunchy', 'delicioso']
    },
    {
        name: 'Salad',
        price: 25,
        category: 'Side dish',
        popularity: 2.5,
        rating: 0,
        tags: ['vegetarian', 'lame']
    },
    {
        name: 'Sandwich',
        price: 45,
        category: 'Brunch',
        popularity: 55,
        rating: 105,
        tags: ['Sammy', 'Deli']
    }
]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(function(element) {
    let calledTag = element;
    return calledTag;
})
console.log('non vegetarian');

//////////////////PROBLEM 5////////////////////
/* 
Now let's write a function that's a little
more flexible than just filtering for one
value. We want to be able to filter for 
food that has above a certain rating, 
below a certain price, or any other combo.

Write a function called `filterByProperty`
that takes in three arguments: `property`, 
`number`, and `type. 

The property will be a string (rating,
    popularity, or price)
    
    The number will be the number that you want
    to compare against 
    
    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property
    
    Inside the function, create a variable to hold
    a filtered array
    
    Use the filter method to filter the foodArr
    
    In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in
        
        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
        
        Return the filtered array from the entire function
        */
       
       //CODE HERE
const filterByProperty = (property, num1, type) => {
    let newArr = foodArr.filter(function(){
        if(type === 'above') {
            return property > num1;
        } else if(type === 'below') {
            return property < num1;
        }
        return newArr;
    })
};
console.log(filterByProperty(foodArr.rating, 25, 'above'))
       /*
       Invoke the `filterByProperty` function passing
       in a value for each paramter.
       
       You'll have to console.log to see the filtered array
       */
      
      //CODE HERE