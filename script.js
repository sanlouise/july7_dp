let numbers = [ 1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6 ];

/*
1. Return the 4th element in the "numbers" array
*/
getFourthNum = () => {
  return numbers[3];
}

/*
2. Iterate over the "numbers" array. Push any numbers less than 10 onto "smallNums". Return "smallNums".
*/
smallNums = () =>{
    let smallNums = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 10) {
        smallNums.push(numbers[i])
      }
    }return smallNums;
}

/*
3. Add 12, 99, and 101 (in that order) to the end of the "numbers" array. Return the "numbers" array.
*/
addNums = () =>{
  numbers.push(12, 99, 101);
  return numbers;
}

/********************
Use the following object to complete tasks 4-6
*********************/

let film = {
    title : "Seven Samurai",
    director : "Akira Kurosawa",
    released : 1956,
    runtime : 207,
    budget : 2000000,
    actors : [ "Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima" ],
};

/*
4. Add a property "boxoffice" with a value of 269061 to the "film" object. Return "film".
*/
addBoxOffice = () => {
  film.boxoffice = 269061;
  return film;
}

/*
5. Add the name "Yukiko Shimazaki" to the "actors" array. Return "film";
*/
addActor = () =>{
  film["actors"].push("Yukiko Shimazaki");
  return film;
}

/*
6. Now that you've added a "boxoffice" property, subtract "budget" from "property" and return the difference. This number is the amount lost by the studio in making the film. Return the loss.
*/
getLosses = () =>{
  return (film.boxoffice - film.budget);
}

/*
7. Iterate over "letterVals" and "numberVals". Concatenate the values from the two arrays and store the new values in the "vals" array. Return "vals".

Your function should return [ "v5", "x67", "r34", "f456", "p78" ];
*/

let numberVals = [ 5, 67, 34, 456, 78 ];
let letterVals = [ "v", "x", "r", "f", "p" ];

interleave = () =>{
  let vals = []

  for(let i = 0; i < numberVals.length; i++){
    letterVals[i] = letterVals[i].toString()
    vals.push((letterVals[i]+numberVals[i]));
  }
  return vals;
}

/*
8. Iterate over the "first" and "second" arrays. Compare the values for both arrays. If the arrays values are the same, then store that value in the "same" array. Return "same".
*/

let first = [ "blink", "stand", "glasses", "chair", "numinous", "adjacent", "bracelet", "hand" ];
let second = [ "think", "stand", "cheese", "break", "numinous", "mouse", "close", "toe" ];

union = () => {
    let same = [];
    for (let i = 0; i < first.length; i++) {
      if (first[i] == second[i]) {
        same.push(first[i]);
      }
    }
    return same;
}
