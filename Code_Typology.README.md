# Coding Typology
# Rough notes about ways to think of understanding development methods.
# Novice or not, you could learn a thing or two about vocabulary here.

*** Developmental life cycles - (Timelines vary from my descriptions) ***
-----
``` Machine language (0's and 1's baby, the fun stuff known as binary) ```
  > Lowest-level of programming, near impossible to interpret by humans nowadays
  + All code essentially gets compiled at this level readable by machines effectively
``` Assembly code ```
  + Size dependent: (These "terms" are arbitrary dependent on machine CPU, just as an example I use them)
    > 4bit = nibble
    > 8bits = OCTET | BYTE
    > 16bits = WORD
    > 32bits = DWORD
    > 64bits = QWORD
  ***- These could be signed or unsigned, meaning strictly positive or negative + positive integers -***
  + Still low-level programming
  + Many other low levels such as HDL, Verilog, etc.
``` Objective-C ("High-Level Programming") ```
  > Requires a compiler to be deconstructed into Assembly code
``` C++ (High-Level Programming) ```
  > Written in the original C language by developing a new compiler
``` C# (High-Level Programming) ```
  > Object-Oriented Programming language (Inspired originally by the C language)
``` Infinite branches of high-level languages start to become developed ```
  > Created for the ease of programmers, allowing machines to compute the low-level instructions
  ``` Java, Javascript (lightweight OOP of the web), Rails, Python, PHP, etc. ```
  + Brought along much more packaged libraries & Frameworks (C# included)
    > ***<_ Nodejs, Reactjs, Typescript, Rails, TensorFlow, OpenSSL, Perl, Web3, etc _>***
  + Even more high-level languages developed for ease of developers (again)
    > ***<_ Elixir, Ember, Solidity, Go, Erlang, Clojure, Rust, etc. _>***

*** Paradigms of Programming ***
-----
``` PP (Procedural Programming) ```
  + More of your low-level programming
  + Routine tasks or subroutine jobs
  + Essentially computational procedures known to run in series (one after another)
  + Step 1, then step 2, then step 3, etc...
  + Downside is clock cycles being wasted when other processes could run similar to a simple queue. 
``` OOP (Object Oriented Programming) ```
  > Objects containing unique operations specific to their needs/functions
  + few operations on common data (Good for slicing code and reusability)
  + stateful
  + side-effects 
  + imperative
  + First to have Prototypes
  *** <_ Pillars of OOP (Important vocabulary below)_ > ***
    1. Encapsulation
    2. Abstraction
    3. Inheritance
    4. Polymorphism
  *** <_ Goals of Good Development _> *** 
    1. Clear & Understandable
    2. Reusability (Modular)
    6. Scalability (More to do with architecture but languages do make a difference)
    3. Maintainable (By any developer, good documentation)
    4. Memory Efficient (Watch for those memory leaks!)
    5. DRY (Don't Repeat Yourself!)
``` FP (Functional Programming) ```
  > Good for large data manipulation therefore pattern recognition algorithms
  + Many operations on fixed data (large data tends to be fixed)
  + Stateless & Pure, aka immutable input data
  + Dependent upon inputs regardless of global/local/external data
  + declarative -> data to data transformations (predictable with similar inputs)
  *** <_ Closure (Representative of First-class functions) _> ***
    > Impervious to outside scope invoked, aka captured variables
    + Promotes and allows Optimization Techniques
    *** <_ Memoization (caching) _> ***
      > helps not pollute global scope
    *** <_ Closure _> ***
      > Compose over inheritance (unlike OOP which capitalizes on inheritance)
      + Polymorphic behavior which can be referred to as dynamically programming
      + Considered a for of Superclassing
      + Abstracting many arbitrary types of data through a common single interface
      + Creates Subtyping (inclusion Polymorphism)
        > Defining instances of many classes related by a common "superclass"
        > Creates an Assembly line of functions, capable of various combinations
        > Functions built together to accept functions as inputs for other function inputs
    *** <_ Piping _> ***
      > The reverse of composing functions
      > Goes left to right compared to a Compose functionality
      + Processes inputs repetively resulting in a bundled sequence of operations/functions
