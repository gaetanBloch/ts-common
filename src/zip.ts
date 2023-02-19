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

function zip(...arrays): Array<Array<any>> {
  const maxLength = Math.max(...arrays.map(array => array.length));
  return Array.from({length: maxLength}).map((_, i) => {
    return Array.from({length: arrays.length}, (_, j) => arrays[j][i]);
  });
}

// The zip function matches the first element of the first array
// with the first element of the second array,
// the second element of the first array with the second element
// of the second array, and so on.
// If the arrays are of different lengths, the remaining elements of
// the longer array are ignored.

// It is used to combine multiple arrays into a single array of tuples.
// Its is often useful when working with data from multiple sources that
// need to be combined or correlated.
// It is also useful when working with data that is in a tabular format.
// Also, useful when you want to iterate over multiple arrays in parallel.

// Define the arrays that contain the coordinates
const xCoordinates = [1, 2, 3, 4];
const yCoordinates = [5, 6, 7, 8];
const zCoordinates = [3, 6, 1, 7];

// Create a zipped array of points
const points = zip(xCoordinates, yCoordinates, zCoordinates);

// Use the zipped array of points
console.log(points);
// => [[1, 5, 3], [2, 6, 6], [3, 7, 1], [4, 8, 7]]
