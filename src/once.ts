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

// The once function can be used to ensure that a function is only called once
// even if it is called multiple times. This is useful for functions that
// should only be called once, such as sending a request to a server.

function once(func: Function) {
  let ran = false;
  let result: any;
  return function(): any {
    if (ran) return result;
    result = func.apply(this, arguments);
    ran = true;
    return result;
  };
}

// Define the function that sends the request
function requestSomeData(): void {
  // Send the request...
}

// Create a version of the function that can only be called once
const sendRequestOnce = once(sendRequest);

// Listen for clicks on a button and call the "once" function
const button = document.querySelector("button");
button.addEventListener("click", sendRequestOnce);
