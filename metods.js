// let arr0 = [1, 2, 3]
// console.log(arr0);

// arr0.unshift(0) // – добавляет элементы в начало.
// console.log('unshift(0) -> ', arr0);

// arr0.push(4)    // – добавляет элементы в конец,
// console.log('push(4) -> ', arr0);

// arr0.pop()      // – извлекает элемент из конца,
// console.log('pop() -> ', arr0);

// arr0.shift()    // – извлекает элемент из начала,
// console.log('shift() -> ', arr0);



// console.log('_______________________________Math___________________________________');
// let number = 9.4
// console.log('Math.round kam 9.6 -> ', Math.round(9.6));     //tivy kloracnuma kam verev kam nerqev  // 9
// console.log('Math.floor nerqev 9.9 -> ', Math.floor(9.9));  //tivy kloracnuma depi nerqev           // 9
// console.log('Math.ceil verev 9.4 -> ', Math.ceil(number));  //tivy kloracnuma depi verev            // 10

// console.log('Math.min -> ', Math.min(5, 10, 30, 50, 200, 0));   //veradarcnuma maxsimal arjeqy      // 0
// console.log('Math.max -> ', Math.max(5, 10, 30, 50, 200, 0));   //veradarcnuma minimal arjeqy       // 200
// console.log('Math.random -> ', Math.random());                  //talisa xary tiv 0 - ic 1          // 0 - 1
// console.log('Math.random -> ', Math.pow(2, 4));                 //talisa arjeqneri astichany        //2*2*2*2 = 16
// // console.log(2**4)                                               //talisa arjeqneri astichany        //2*2*2*2 = 16



// console.log('______________________________delete__________________________________');
// let arr = ["I", "go", "home"];
// console.log('delete - ', arr);

// delete arr[1]; // удалить "go"

// console.log(console.log('delete -> "go"', arr)); // undefined



// console.log('______________________________splice__________________________________');
// let arr1 = ["Я", "изучаю", "JavaScript"];
// console.log(arr1);

// arr1.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
// console.log('splice -> ', arr1); // осталось ["Я", "JavaScript"]


// console.log('----------2----------');
// let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// console.log(arr2);

// arr2.splice(0, 3, "Давай", "танцевать"); // удалить 3 первых элемента и заменить их другими
// console.log('splice -> ', arr2) // теперь ["Давай", "танцевать", "прямо", "сейчас"]


// console.log('----------3----------');
// let arr3 = [1, 2, 5];
// console.log(arr3);
// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr3.splice(-1, 0, 3, 4);

// console.log('splice -> ', arr3); // 1,2,3,4,5



// console.log('________________________________concat_________________________________');
// let arr4 = [1, 2],
//     arr4_1 = [3, 4, 5];
// console.log('arr1 -> ', arr4);
// console.log('arr2 -> ', arr4_1);

// // создать массив из: arr4 и arr4_1
// console.log('concat arr1+arr2 -> ', arr4.concat(arr4_1)); // 1,2,3,4,5



// console.log('_______________________________forEach_________________________________');
// let arr5 = ['cat', 'dog', 'bat']
// arr5.forEach(function (item, index, array) {
//     console.log('index ->    ', index, 'item ->    ', item, 'array ->    ', array);
// }, 0);




// console.log('_______________________________indexOf________________________________');
// let arr6 = [5, 10, 100];
// console.log(arr6);

// console.log('ete ka veradarcnuma index', arr6.indexOf(100)); // 1
// console.log('ete cka veradarcnuma ', arr6.indexOf(30)); // -1



// console.log('______________________________includes_______________________________');
// // Метод includes()определяет, содержит ли массив определенное значение среди своих записей,
// // возвращая true или false при необходимости.
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets);
// console.log('cat includes -> ', pets.includes('cat'));



// console.log('________________________________find__________________________________');
// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];
// console.log(users);

// let user = users.find(item => item.id == 2);

// console.log('id == 2 find -> ', user.name); // Вася



// console.log('_______________________________filter________________________________');
// let users1 = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];
// console.log(users1);

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users1.filter(item => item.id == 2);

// console.log('filter -> ', someUsers); // 2



// console.log('__________________________filter + map_______________________________');
// let filterr = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log('filter + map -> ', filterr); // 5,7,6

// console.log('----------2----------');

// let filter2 = ["Bilbo", "Gandalf", "Nazgul"].map(item => item === "Nazgul");
// console.log('filter + map -> ', filter2);[false, false, true]



// console.log('________________________________sort_________________________________');
// let arrSort = [1, -2, 15, 30, 2, 0, 8]
// console.log(arrSort);

// arrSort.sort(function (a, b) {
//     return a - b;
// });

// console.log('sort -> ', arrSort);// [-2, 0, 1, 2, 8, 15, 30]

// console.log('----------2----------');
// let arrSort2 = [1, -2, 15, 30, 2, 0, 8]

// arrSort.sort((a, b) => a - b);
// console.log('sort -> ', arrSort2);// [-2, 0, 1, 2, 8, 15, 30]




// console.log('_______________________________reverse________________________________');

// let arr7 = [1, 2, 3, 4, 5];
// console.log(arr7); // 1,2,3,4,5

// console.log('reverse -> ', arr7.reverse()); // 5,4,3,2,1



// console.log('________________________________split_________________________________');
// let names = 'hellow';
// console.log(names); // hellow

// console.log('split -> ', names.split('')); // ["h", "e", "l", "l", "o", "w"]



// console.log('________________________________join__________________________________');
// let str1 = ['Вася', 'Петя', 'Маша'];
// console.log(str1);

// let joinn = str1.join(' + '); // объединить массив в строку через ;
// console.log('join -> ', joinn); // Вася + Петя + Маша



// console.log('_______________________________reduce_________________________________');
// let arr8 = [10, 20, 30];
// console.log(arr8);

// let result = arr8.reduce((sum, current) => sum + current, 0);
// console.log('reduce -> ', result); // 60



// // console.log('_______________________________RegExp_________________________________');

// document.querySelector('input').addEventListener('input', regExpInp);

// function regExpInp() {
//     let testspan = document.querySelector('pre')
//     let input = document.querySelector('input').value

//     testspan.innerHTML = input.match(/[A-Z][a-z]+/);// +            1 ic avel vor ashxati // Hellow
//     testspan.innerHTML = input.match(/[A-Z][a-z]*/);// *            0 kam avel vor ashxati // Hellow
//     testspan.innerHTML = input.match(/[A-Z][a-z]+\s/);// \s         probel 
//     testspan.innerHTML = input.match(/[A-Z][a-z]+\s+/);// \s+       probel mekic avel probel
//     testspan.innerHTML = input.match(/[A-Za-z0-9]/);//       mecatar A-Z poqratar a-z ev 0-9 amen inj veradarcnuma tar
//     testspan.innerHTML = input.match(/[A-Za-z0-9]+/);//+     mecatar A-Z poqratar a-z ev 0-9 amen inj veradarcnuma bar
//     testspan.innerHTML = input.match(/[(0-9)]+[0-9]+-[0-9]+-[0-9]+/);//     (098)20-30-50
//     testspan.innerHTML = input.match(/[(0-9)]+\d+\d+-\d+-\d+/);// \d        (098)20-30-50
//     testspan.innerHTML = input.match(/(\+[374]+)/g);//                       +374    
//     testspan.innerHTML = input.match(/[(0-9)]{5}\d{2}-\d{2}-\d{2}/);// {2}  (098)20-30-50 nshumenq konkret sinvolneri qanak
//     testspan.innerHTML = input.match(/[(0-9)]{2,}\d{1,}-\d{1,}-\d{1,}/);// {min,}       (098)20-30-50 nshumenq minimum sinvolneri qanak
//     testspan.innerHTML = input.match(/[(0-9)]{2,5}\d{1,3}-\d{1,3}-\d{1,3}/);// {min,max}    (098)20-30-50 nshumenq minimum sinvolneri qanak
//     testspan.innerHTML = input.match(/[A-Za-z0-9]{3,10}/);//        [A-Za-z0-9]{3,10} meatar A-Z | poq a-z | 0-9 | (gtnel min 3)(max 10)
//     testspan.innerHTML = input.match(/[A-Z]+|[a-z]+/);// |          kam nshan
//     testspan.innerHTML = input.match(/H(ellow)+/g);// H(a-z)+       partadir petqa dimacy lini H tary
//     testspan.innerHTML = input.match(/H?(ellow|number)+/g);// H?    ete (H)tary dimacic chlini vojinj ete chlini eli kveradarcni
//     testspan.innerHTML = input.match(/^[A-Z]+[a-z]+/g); // ^        texty partadir petqa sksvi mecataruv vor ashxati         
//     testspan.innerHTML = input.match(/[0-9]+$/); // $               texty partadir petqa avartvi tverov
//     testspan.innerHTML = input.match(/[0-9]+$/); // $
// }

// regExpInp()

// ____________________________________________________
// erkchap zangaci meji tvery stugel havasaren te che

// let arrAll = [[1, 2, 3, 4, 5, 10], [6, 7, 8, 10, 9, 5]]
// let arrInner1 = arrAll[0]
// let arrInner2 = arrAll[1]

// for (let i = 0; i < arrInner1.length; i++) {
//     for (let j = 0; j < arrInner2.length; j++) {
//         if (arrInner1[i] == arrInner2[j]) {
//             console.log(true, arrInner1[i]);
//         }
//     }
// }

// ____________________________________________________
// unenal table, tebli mej xary tver, ete tabli mej 10 tiv lini tox tvyal vandaky nerkvi karmir
// function randomNum() {
//     return Math.ceil(Math.random() * 9)
// }

// document.write('<table>')
// for (let i = 0; i < 10; i++) {
//     document.write('<tr>')
//     for (let j = 0; j < 10; j++) {
//         document.write(`<td style="border:1px solid black;text-align:center";>${randomNum()}</td>`)
//     }
//     document.write('</tr>')
// }
// document.write('</table>')


// let td = document.querySelectorAll('td')
// td.forEach((td, i) => {
//     if (td.textContent === '9') {
//         document.querySelectorAll('td')[i].style.backgroundColor = 'red'
//         console.log();
//     }
// });

// ____________________________________________________
// poxel zangvaci erkarutyuny, amen anqam tarber erkarutyamb lini bay arri erkarutyunic avel chtpi

// let randomNum = Math.ceil(Math.random() * 30)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// if (arr.length >= randomNum) {
//     arr.length = randomNum
//     document.write(arr);
// } else {
//     document.write(arr);
// }
// document.write('<br>');

// for (let i = 1; i <= randomNum; i++) {
//     if (randomNum <= arr.length) {
//         document.write(i + ',');
//     }
// }
// ____________________________________________________
// let input = document.querySelector('input')
// let per = document.querySelector('pre')

// function randomNum() {
//     if(input.value > 100 || input.value < 1){
//         return 'Invalid range. Musbe between [1-100]'
//     }
//     if (input.value) {
//         return Math.ceil(Math.random() * Number(input.value))
//     } else {
//         return Math.ceil(Math.random() * 50)
//     }
// }

// setInterval(() => {
//     per.innerText = randomNum()
// }, 1000);
// ____________________________________________________

// document.querySelectorAll('validation_inputs>input')

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// expected output: Array ["T", "I"]