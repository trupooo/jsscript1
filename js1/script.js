function sum(x,y) {
    return x + y;
}
let result = sum(10,20);
console.log(result);

var x = 'hello';
var y = 'world';
var z = x + y;

console.log(z);



var studentNames = ['temo', 'giorgi', 'nino', 'nika', 'gvanca', 'irakli', 'gvanca', ['temo', 'gvanca'], 'maka'];
console.log(studentNames[studentNames.length -1]);


var studentNames = ['temo', 'giorgi', 'nino', 'nika', 'gvanca', 'irakli', 'gvanca', ['temo', 'gvanca'], 'maka'];
console.log(studentNames [7])


var studentNames = ['temo', 'giorgi', 'nino', 'nika', 'gvanca', 'irakli', 'gvanca', ['temo', 'gvanca'], 'maka'];
console.log(studentNames.length);



var userInfo = {
    studentName: 'temo',
    studentAge: '28',
    studentStatus: 'active'
};
console.log(userInfo.studentStatus);



var userInfo = {
    studentName: 'temo',
    studentAge: '28',
    studentStatus: 'active',
    studentPhone: {
        code: 593,
        number: 123456
    }
};
console.log(userInfo.studentAge);


var userInfo = {
    studentName: 'temo',
    studentAge: '28',
    studentStatus: 'active',
    studentPhone: {
        code: 593,
        number: 123456
    },
    studentComments: [
        {commentId: 1, commentText: 'hello worls1'},
        {commentID: 2, commentText: 'hello world2'}
    ]
};
console.log(userInfo.studentPhone.number);
console.log(userInfo.studentComments [1]);
console.log(userInfo.studentComments [2].commentID);


var names = ['temo', 'giorgi', 'nino', 'nika', 'gvanca', 'irakli', 'gvanca', ['temo', 'gvanca'], 'maka'];
for(var x = 0; x < names.length; x++) {
    console.log(names[x]);
}
for (var item of names) {
    console.log(item);
}
for (var item in names) {
    console.log(item);
}


// ლუწების ამოღება
var array = [2, 3, 5, 10, 25, 24,11, 100 , 6, 7, 10]
for (let x of array) {
    if (x % 2 == 0) {
        console.log(x);
    }
}

// კენტების ამოღება
var array = [2, 3, 5, 10, 25, 24,11, 100 , 6, 7, 10]
for (let x of array) {
    if (x % 2 == 1) {
        console.log(x);
    }
}
// ანალოგიურია ეგეც (ამოიღებს ლუწებს)
var array = [2, 3, 5, 10, 25, 24,11, 100 , 6, 7, 10]
for (let x of array) {
    if (x % 2 != 0) {
        console.log(x);
    }
}

// მეტია 20ზე

var numbmers = [5, 3, 56, 12, 8, 24, 1, 6, 37, 14, 19, 93, 28, 1, 37];
for(var x = 0; x <numbers.length; x++) {
    if(numbers[x] > 20) {
        console.log(numbers[x]);
    }
}  

// ან
var numbmers = [5, 3, 56, 12, 8, 24, 1, 6, 37, 14, 19, 93, 28, 1, 37];
for(let item of numbers) {
    if (item > 5) {
        console.log(item);
    }

}



var array = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10 ]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    for(let x = 0; x < numbers.length; x++) {
        const positive = numbers[x];
        if  (positive > 0) {
            console.log(positive);
        }
    }
}





var array = [32, 10, 'hello', null, 'hello2', 50];

for (let item of array) {
    if (item % 5 == 0 && typeof item == 'number'){
        console.log(item);
    }
}


var array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas']
for (let item of array) {
    if (typeof item == 'string') {
        console.log('item');
    }
}


var user = {
	name: 'giorgi',
	age:  20,
	studentStatus:'active'
}
if (user.age < 18 && user.studentStatus == 'active') {
    console.log('hello world')
} else if (user.name == 'levani') {
    console.log(hello)
} else if (user.studentstatus == 'active' || user.age < 25) {
    console.log('world')
} else{
    console.log('error')
}
