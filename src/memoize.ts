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

function memoize(func: Function): Function {
  const cache: Map<any, any> = new Map();
  return function (): any {
    const key = JSON.stringify(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}

// The memoized function is called with the same arguments multiple times,
// but the calculation is only performed once.
// The result is then cached and returned for subsequent calls.
// This is useful when the calculation is expensive and the result
// is needed multiple times.

// The memoized function can also be called with different arguments,
// but the calculation is only performed once.
// The result is then cached and returned for subsequent calls.


// Define the function that performs the calculation
function fibonacci(n): number {
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create a memoized version of the function
const memoizedFibonacci = memoize(fibonacci);

// Call the memoized function with multiple input values
console.time('total');
console.time('sub1');
const result1 = memoizedFibonacci(30);
console.timeEnd('sub1');
// => sub1: 10.000ms
console.time('sub2');
const result2 = memoizedFibonacci(29);
console.timeEnd('sub2');
// => sub2: 6.000ms
console.time('sub3');
const result3 = memoizedFibonacci(30);
console.timeEnd('sub3');
// => sub3: 0.005ms
console.timeEnd('total');
// => total: 16.005ms
