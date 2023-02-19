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

// The debounce function returns a new function that will
// only call the original function after a specified delay.
// This is useful for functions that are called frequently,
// such as window resize events.

function debounce(func: Function, delay: number): Function {
  let timeout: number;
  return (): void => {
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Define the function that updates the layout
function updateLayout(): void {
  // Update the layout...
}

// Create a debounced version of the function
const debouncedUpdateLayout = debounce(updateLayout, 250);

// Listen for window resize events and call the debounced function
window.addEventListener('resize', debouncedUpdateLayout);
