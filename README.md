# MiniJava Compiler

A frontend compiler for mini java, powered by JavaScript.
Lex/Syntax Automation tool: Antlr4

--

## Usage

### Live DEMO
http://www.slardarzhang.me/MiniJava/
> Be patient, it may take around 40 seconds to load compeletely within GFW. However, if you browse this webpage outside GFW, you can get perfect experience.

### Local
If want to test this in local environment,

```
cd ./MiniJava
python -m SimpleHTTPServer
```

open `localhost:8000/index.html` in your Chrome (only Chrome supported)

## BNF for MiniJava

http://www.cambridge.org/us/features/052182060X/grammar.html#prod2

## Features

- Full JavaScript
- Cross platform
- Cloud-based compiler
- Render AST with Bootstrap tree view
- Accurate error location
- Supported sematic error detection:
    1. Redefinition
    2. Undefinition
    3. Type mismatch
    4. Wrong parameter number
    5. Wrong return type

## APIs

Inside `./core/Core.js`:

```
  //@param source source code of MiniJava
  //@return core instance of Core
  function Core(source) {
    ..
  }
```

```
  //Compile source code and generate AST
  Core.prototype.compile = function() {
    ..
  }
```

```
  //@return string formatted error information
  Core.prototype.reportErrors = function() {
    ..
  }
```

#License
Copyright 2015-2016 Shangtong Zhang & Jingxuan Zhang

Released under the MIT and GPL (version 2 or later) Licenses.
