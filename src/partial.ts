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

// The partial function is a function that takes a function and some arguments,
// it is similar to the currying function, but it doesn't return a function,
// it returns the result instead.

function partial(func: Function, ...args): Function {
  return function partiallyApplied(...moreArgs) {
    return func(...args, ...moreArgs);
  }
}

// Define the function that calculates something
function calculate(x, y, z): number {
  return (x + y) * z
}

// Create a partially applied version of the function the last argument
const multiply10By = partial(calculate, 8, 2);

// Call the partially applied function with the number of iterations
const result = multiply10By(5);
