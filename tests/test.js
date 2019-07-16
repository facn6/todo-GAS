var test = require('tape');
var logic = require('../logic');

// Test variables
const testToDoArray = [{
    id: 0,
    description: 'smash avocados',
    done: true
  },
  {
    id: 1,
    description: 'make coffee',
    done: false
  }];

const toDo3 = {
  description: 'fry bacon',
  done: false
};

const testCompleteArray = [{
    id: 0,
    description: 'smash avocados',
    done: true
  },
  {
    id: 1,
    description: 'make coffee',
    done: false
  },
  {
    id: 2,
    description: 'fry bacon',
    done: false
  }
];

// Tests

test('addToDo is a pure function', function(t) {
  t.equal( logic.addTodo(testToDoArray, toDo3), testCompleteArray, "can add a to do object");
  t.equal(testToDoArray, [
    { id: 0, description: 'smash avocados', done: true },
    { id: 1, description: 'make coffee', done: false }
  ], "does not modify original array");
  t.equal(toDo3, { description: 'fry bacon', done: false }, "does not modify original toDo item");
  t.equal( logic.addTodo(testToDoArray, toDo3), testCompleteArray, "returns same value, when given same argument");
  t.equal( logic.addTodo(testCompleteArray, toDo3), testCompleteArray, "does not add a todo with an id that exists");
  t.end();
});

test('deleteTodo test', function(t) {
  t.equal(logic.deleteTodo(testCompleteArray, 3), testToDoArray, "returns a new array with the item deleted");
  t.equal(testCompleteArray, [
    { id: 0, description: 'smash avocados', done: true },
    { id: 1, description: 'make coffee', done: false },
    { id: 2, description: 'fry bacon', done: false }
  ], "does not modify original array");
  t.equal(logic.deleteTodo(testToDoArray, 0), [{ id: 1, description: 'make coffee', done: false }], "deletes the correct object that's given by id");
  t.equal(logic.deleteTodo(testToDoArray, 0), [{ id: 1, description: 'make coffee', done: false }], "returns the same value, when given same arguments");
  t.equal(testToDoArray, [[
    { id: 0, description: 'smash avocados', done: true },
    { id: 1, description: 'make coffee', done: false }]
  ], "does not modify original array");
  t.equal(logic.deleteTodo(testCompleteArray, 4), testCompleteArray, "checks for deleting items do not exist");
  t.end();
});



// Example Tests from Pure Functions Test workshop

// tape('Refactor our addOne function so it is pure.', function(t) {
//   t.equal(addOne(constantNumber), 6, "add one returns argument + 1");
//   t.equal(constantNumber, 5, "constant number has not been altered");
//   t.equal(addOne(constantNumber), 6,
//     "Returns the same value when called with the same argument");
//   t.equal(addOne(4), 5, 'works for other values');
//   t.equal(addOne(104), 105, 'works for other values');
//   t.equal(addOne(7), 8, 'works for other values');
//   t.equal(addOne(78), 79, 'works for other values');
//   t.end();
// })

// tape('Refactor our timesTwo function so it is pure.', function(t) {
//   t.equal(timesTwo(constantNumber), 10, "Returns argument doubled");
//   t.equal(constantNumber, 5, "constant number has not been altered");
//   t.equal(timesTwo(constantNumber), 10,
//     "Returns the same value when called with the same argument");
//   t.equal(timesTwo(4), 8, "works for other values");
//   t.equal(timesTwo(27), 54, "works for other values");
//   t.equal(timesTwo(7), 14, "works for other values");
//   t.equal(timesTwo(23), 46, "works for other values");
//   t.end();
// })

// tape('Refactor our incrementArray function so it is pure.', function(t) {
//   t.deepEqual(incrementArray(constantArray), [6, 8, 24, 5],
//     "Returns array of increment values");
//   t.deepEqual(constantArray, [5, 7, 23, 4],
//     "constant array has not been altered");
//   t.deepEqual(incrementArray(constantArray), [6, 8, 24, 5],
//     "Returns the same value when called with the same argument");
//   t.deepEqual(incrementArray([3, 5, 12]), [4, 6, 13], "works for other values");
//   t.deepEqual(incrementArray([7, 54, 1]), [8, 55, 2], "works for other values");
//   t.deepEqual(incrementArray([1]), [2], "works for other values");
//   t.end();
// })

// tape('Refactor our addNumberArray function so it is pure.', function(t) {
//     t.deepEqual(addNumberArray(constantArray, constantNumber), [5, 7, 23, 4, 5],
//       "returns array with a new number appended");
//     t.deepEqual(constantArray, [5, 7, 23, 4],
//       "constant array has not been altered");
//     t.deepEqual(addNumberArray(constantArray, constantNumber), [5, 7, 23, 4, 5],
//       "Returns the same value when called with the same argument");
//     t.deepEqual(addNumberArray([4, 100, 12], 27), [4, 100, 12, 27],
//       "works with other values");
//     t.deepEqual(addNumberArray([2], 5), [2, 5],
//       "works with other values");
//       t.end();
// })

// tape('Refactor our incrementObject function so it is pure', function(t) {
//     var expected = {
//       "a": 6,
//       "b": 3,
//       "c": 9
//     };
//     var startingObject = {
//       "a": 5,
//       "b": 2,
//       "c": 8
//     };

//     t.deepEqual(incrementObject(constantObject), expected,
//       "Returns array of incremented values");
//     t.deepEqual(constantObject, startingObject,
//       "constant array has not been altered");
//     t.deepEqual(incrementObject(constantObject), expected,
//       "Returns the same value when called with the same argument");
//     t.deepEqual(incrementObject({ "a": 4, "b": 12, "c": 9 }),
//       { "a": 5, "b": 13, "c": 10 }, "works with other values");
//       t.end()
// })

