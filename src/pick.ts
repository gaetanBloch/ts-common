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

// The pick function is used to select specific properties from an object.
// It returns a new object with only the selected properties.
// It is a functional version of the ES6 destructuring assignment.

function pick(obj: Object, keys: Array<any>): Function {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

const obj = {
  id: 1,
  name: 'Gaetan',
  password: 'a-bad-password',
  role: 'admin',
  website: 'https://www.linktr.ee/gbloch',
};

const selected = pick(obj, ['name', 'website']);
console.log(selected); // { name: 'Gaetan', website: 'https://www.linktr.ee/gbloch' }
