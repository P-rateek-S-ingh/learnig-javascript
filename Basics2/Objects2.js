//Initializing objects
// const obj1 = {}  -->  Non-singleton
// const obj1 = new Object() --> Singleton

const obj = new Object();
obj.id = 2066874
obj.fullname = {}
obj.fullname.firstname = 'Prateek'
obj.fullname.middlename = 'Ram'
obj.fullname.lastname = 'Singh'


// console.log(obj);

const FbUser = {
  Full_name: {
    Fb_UserFullName: {
      First_Name: "Prateek",
      Last_Name: "Singh",
    },
  },
};
// console.log(FbUser);
// console.log(FbUser.Full_name.Fb_UserFullName.First_Name);

//merging two objects

const obj1 = {
    1:'a',
    2:'b'
}
const obj2 = {
    3:'c',
    4:'d'
}

// console.log(Object.assign({},obj1,obj2)); // Use these curly braces before assigning object so that all these objects will assign inside the curly braces

// console.log({...obj1 , ...obj2});   //  Spread method similar to Arrays


const obje = [
    {
        id:'123',
        email:'p@google.com'
    },
    {
        id:'123',
        email:'r@google.com'
    },
    {
        id:'123',
        email:'a@google.com'
    },
    {
        id:'123',
        email:'t@google.com'
    },
    {
        id:'123',
        email:'e@google.com'
    }

]

// console.log(obje[1].email);
// console.log(obje[2].email);
// console.log(obje[3].email);
// console.log(obje[4].email);
// console.log(obje[0].email);



const LinkdinUser = {
    id : '123abc',
    Name : 'Prateek Singh',
    isLoggedIn : false
}

// console.log(LinkdinUser);

// console.log(Object.keys(LinkdinUser)); // It gives output in Array which will be vry helpful in future to iterate various key for project management in database
// console.log(Object.values(LinkdinUser));
// console.log(Object.entries(LinkdinUser))

// console.log(LinkdinUser.hasOwnProperty('isLoggedIn'));
// console.log(LinkdinUser.hasOwnProperty('isLogged'));

const course = {
    course_name :'javaScript pe baatcheet',
    price : 1999,
    course_Instructor : 'Hitesh Sir '
}

// Destructuring objects ==> a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.


// const {course_Instructor} = course // 1st way
// console.log(course_Instructor);

// const {course_Instructor: teacher} = course //2nd way you can also modify this course_Instructor variable also acordding to your cnovinence
// console.log(teacher);

// {
//     "name" : "Prateek",                               -|
//     "course_name": "javaScript pe baatcheet"           |>--> jason
//     "price": "999"                                    -|
// }


[
    {},
    {},
    {}
]