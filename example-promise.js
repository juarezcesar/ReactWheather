//
// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City no found');
//
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if  (err){
//     console.log("erro", err);
//   } else {
//     console.log("Temp", temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('Citi not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise succss', temp);
// }, function (err) {
//   console.log('promise error', err);
// });
//

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('A & B need to be number');
    }
  });
}

addPromise(2,3).then (function(sum) {
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});

addPromise("asdasd",3).then (function(sum) {
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
