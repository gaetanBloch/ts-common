/*
 * Copyright (c) 2023 Gaëtan Bloch and/or its affiliates. All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// The curry function, also known as currying, is a technique used to create
// new functions from existing functions by pre-filling some arguments.
// Currying is useful when a function has multiple arguments,
// and you want to create a new function that only requires some arguments.
// Benefits of currying include:
// - Helps avoid using the same argument multiple times
// - Makes the code more readable
// - Divides the function into smaller, more manageable functions
// - Makes it easier to reuse snd test the function

function curry(func: Function, arity = func.length): Function {
  return function curried(...args): Function {
    if (args.length >= arity) return func(...args);
    return function(...moreArgs): Function {
      return curried(...args, ...moreArgs);
    };
  };
}

// Define the function that calculates the distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Create a curried version of the function that only requires one of the points
const distanceFromOrigin = curry(distance, 3)(0, 0);

// Call the curried function with the other point
const d1 = distanceFromOrigin(1, 1);
const d2 = distanceFromOrigin(2, 2);
