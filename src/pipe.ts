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

// The pipe function is a function that takes a list of functions
// and returns only one function.
// Its is very useful when you want to chain multiple functions together.

function pipe(...funcs): Function {
  return function piped(...args): Function {
    return funcs.reduce((result, func) => [func.call(this, ...result)], args)[0];
  };
}

// Define the functions that add to the string
function addPrefix(str) {
  return "prefix-" + str;
}

function addSuffix(str) {
  return str + "-suffix";
}

function toUppercase(str) {
  return str.toUpperCase()
}

// Create a piped function that applies the three functions in the correct order
const decorated1 = pipe(addPrefix, addSuffix, toUppercase);
const decorated2 = pipe(toUppercase, addPrefix, addSuffix);

// Call the piped function with the input string
const result1 = decorated1("hello");		// PREFIX-HELLO-SUFFIX
const result2 = decorated2("hello");		// prefix-HELLO-suffix
