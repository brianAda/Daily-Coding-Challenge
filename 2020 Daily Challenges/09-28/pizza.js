/*
 * Given an array of people objects (where each person has a name and a number of pizza slices they're hungry for) and
 * a number for the number of slices that the pizza can be sliced into, return the number of pizzas you need to buy.
 *
 * Example:
 *   $ arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
 *   $ gimmePizza(arr, 8)
 *   $ 2 // 16 slices needed, pizzas can be sliced into 8 pieces, so 2 pizzas should be ordered
 *
 * From @cassidoo's weekly newsletter:
 * https: //buttondown.email/cassidoo/archive/0e4a7da8-323c-4005-9c3f-51e9097e3bf0
 *
 */

function gimmePizza(people, slices) {
  return Math.ceil(people.reduce((acc, curr) => acc + curr.num, 0) / slices);
}

const arr = [
  { name: 'Joe', num: 9 },
  { name: 'Cami', num: 3 },
  { name: 'Cassidy', num: 4 }
];

const test = gimmePizza(arr, 15);

// Time: O(n), Space: O()
