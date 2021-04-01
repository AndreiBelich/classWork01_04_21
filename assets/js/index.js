"use strict";

/*Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.*/
function min(){
  let minValue = arguments[0];
  for(let i = 1; i < arguments.length; i++){
    if(arguments[i] < minValue){
      minValue = arguments[i];
    }
  }
  return minValue;
}
console.log("Min value is: ", min(4, -2, 5, 19, -130, 0, 10));

/*Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/
function averageValue(){
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum / arguments.length;
}
console.log("Average value = ", averageValue(12, 15, 20, 25, 59, 79));

/*1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.*/

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log(a3);

/*2 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].*/
const reverseArray = [1, 2, 3].reverse();
console.log(reverseArray);

/*3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.*/
const pushArray = [1, 2, 3];
pushArray.push(4, 5, 6);
console.log(pushArray);

/*4  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6*/
const unshiftArray = [1, 2, 3];
unshiftArray.unshift(4, 5, 6);
console.log(unshiftArray);

/*5  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.*/
const skills = ["js", "css", "jq"];
console.log(skills.shift());
console.log(skills);

/*6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.*/
const skills2 = ["js", "css", "jq"];
console.log(skills2.pop());
console.log(skills2);

/*7 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].*/

const numbers = [1, 2, 3, 4, 5];
const piece = numbers.slice(0, 3);
console.log(numbers);
console.log(piece);

/*8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].*/
const otherPiece = numbers.slice(3);
console.log(otherPiece);
/*9 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/
const forSplice = [1, 2, 3, 4, 5];
forSplice.splice(1, 1);
forSplice.splice(2, 1);
console.log(forSplice);
 /*10 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].*/
 const forSplice2 = [1, 2, 3, 4, 5];
 const cut = forSplice2.splice(1, 3);
 console.log("cut", cut);
 /*11 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/
const forSplice3 = [1, 2, 3, 4, 5];
forSplice3.splice(2, 0, "a", "b", "c");
console.log(forSplice3);
 /*12 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
 const forSplice4 = [1, 2, 3, 4, 5];
 forSplice4.splice(1, 0, "a", "b");
 forSplice4.splice(6, 0, "c");
 forSplice4.splice(8, 0, "e");
 console.log(forSplice4);

 /*13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его*/
 const sortArray = [3, 4, 1, 2, 7];
 sortArray.sort();
 console.log(sortArray);

 /*14 Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.*/
 const obj = {
   js:'test',
   jq: 'hello',
   css: 'world'
};

const keys = Object.keys(obj);
console.log(keys);

/*15 необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет*/
function hasElem(arr, value){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return true;
    }
  }
  return false;
}
console.log("-----Test function hasElem(string)-----");
console.log(hasElem(["hello", "some string", "good bye", "sentence", "paragraph"], "find me"));
console.log(hasElem(["hello", "some string", "good bye", "find me", "sentence", "paragraph"], "find me"));

/*16Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.*/
console.log("-----Test function hasElem(number)-----");
console.log(hasElem([1, 2, 4, 5, 6, 7, 8], 17));
console.log(hasElem([9, 21, 3, 45, 6, 22, 17], 8));
console.log(hasElem([12, 33, 11, 7, 8, 4, 9], 8));

/*17 Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.*/
function checkArray(arr){
  for(let i = 0; i < arr.length - 1; i++){
    //1, 2, 3, 4, 5, 6, 6, 2, 3
    if(arr[i] === arr[i + 1]){
      return true;
    }
  }
  return false;
}

console.log("-----Test function checkArray-----");
console.log(checkArray([1, 2, 3, 4, 5, 6, 6, 2, 3])); //true
console.log(checkArray([1, 2, 3, 4, 5, 7, 6, 2, 3])); //false
console.log(checkArray([1, 2, 3, 4, 5, 6, 9, 3, 3])); //true
console.log(checkArray([1, 1, 3, 4, 5, 6, 6, 2, 3])); //true



