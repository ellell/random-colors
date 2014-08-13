# random-colors

Generate an array of hex color codes

[![NPM](https://nodei.co/npm/random-colors.png?downloads&stars)](https://nodei.co/npm/random-colors/)

[![NPM](https://nodei.co/npm-dl/random-colors.png)](https://nodei.co/npm/random-colors/)

## Installation

```
npm install random-colors
```

## Example

### Input

```javascript
var colors = require('./random-colors')(10)

console.log(JSON.stringify(colors))
```

### Output

```
["#7df092","#b3abfb","#0381a8","#1906b7","#ac9e4d","#64815f","#7dd10e","#884bd2","#66def1","#2e543b"]
```

## Licence

Copyright (c) 2014 Lisa Övermyr

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

