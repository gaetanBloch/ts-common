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

// The omit function is used to remove specific properties from an object.
// It returns a new object with only the unselected properties.
// It is the opposite of the pick function.
// It is a functional version of the ES6 destructuring assignment.

function omit(obj: {}, keys: Array<string>): {} {
  return Object.keys(obj)
      .filter(key => !keys.includes(key))
      .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {});
}

const obj = {
  id: 1,
  name: 'Gaetan',
  job: 'Software Architect',
  twitter: 'https://twitter.com/bloch_gaetan',
  website: 'https://linktr.ee/gbloch',
};

const selected = omit(obj, ['id', 'website']);
console.log(selected);
// {name: 'Gaetan', job: 'Software Architect',
// twitter: 'https://twitter.com/bloch_gaetan'}

