let questions = [
    {
      numb: 1,
      question: "What is the correct syntax for defining a pure virtual function in C++?",
      answer: "virtual void func() = 0;",
      options: [
        "virtual void func() = 0;",
        "void func() = 0;",
        "virtual func() = 0;",
        "pure virtual void func();"
      ]
    },
    {
      numb: 2,
      question: "Which of the following correctly describes the concept of polymorphism in C++?",
      answer: "Ability to process objects differently based on their data type or class",
      options: [
        "Encapsulation of data and methods",
        "Ability to process objects differently based on their data type or class",
        "Inheritance of properties from a base class",
        "Memory allocation for dynamic objects"
      ]
    },
    {
      numb: 3,
      question: "Which of the following is true about the virtual keyword in C++?",
      answer: "It allows functions to be overridden in derived classes",
      options: [
        "It defines constant values",
        "It allows functions to be overridden in derived classes",
        "It is used to define pointers",
        "It marks functions as immutable"
      ]
    },
    {
      numb: 4,
      question: "What does the keyword `mutable` indicate in C++?",
      answer: "The variable can be modified even in a const function",
      options: [
        "The variable is constant",
        "The variable can be modified even in a const function",
        "The variable is a static member",
        "The variable is a global object"
      ]
    },
    {
      numb: 5,
      question: "What does the `std::move` function do in C++?",
      answer: "Transfers ownership of an object",
      options: [
        "Transfers ownership of an object",
        "Creates a deep copy of an object",
        "Deletes the object from memory",
        "Locks an object for exclusive access"
      ]
    },
    {
      numb: 6,
      question: "Which feature of C++ is implemented using the `override` keyword?",
      answer: "Function overriding in derived classes",
      options: [
        "Preprocessor directives",
        "Function overriding in derived classes",
        "Memory management",
        "Inline functions"
      ]
    },
    {
      numb: 7,
      question: "What is the purpose of the `std::unique_ptr` in C++?",
      answer: "It provides exclusive ownership of a dynamically allocated object",
      options: [
        "It allows multiple shared ownership of an object",
        "It provides exclusive ownership of a dynamically allocated object",
        "It is used for thread synchronization",
        "It manages object lifetime in the stack"
      ]
    },
    {
      numb: 8,
      question: "Which of the following is NOT a characteristic of the RAII principle in C++?",
      answer: "Resource release is not deterministic",
      options: [
        "Resource management is tied to object lifetime",
        "Resource release is automatic",
        "Resource release is not deterministic",
        "It prevents resource leaks"
      ]
    },
    {
      numb: 9,
      question: "What is the purpose of the `explicit` keyword in C++?",
      answer: "To prevent implicit conversions",
      options: [
        "To define inline functions",
        "To prevent implicit conversions",
        "To declare static variables",
        "To override virtual functions"
      ]
    },
    {
      numb: 10,
      question: "Which of the following containers in the STL is implemented as a binary search tree?",
      answer: "std::set",
      options: [
        "std::list",
        "std::vector",
        "std::queue",
        "std::set"
      ]
    },
    {
      numb: 11,
      question: "What does the `friend` keyword allow in C++?",
      answer: "Access to private and protected members of a class",
      options: [
        "Inheritance of private members",
        "Encapsulation of functions",
        "Access to private and protected members of a class",
        "Cross-module integration"
      ]
    },
    {
      numb: 12,
      question: "Which of the following is a valid use of templates in C++?",
      answer: "To create generic functions and classes",
      options: [
        "To manage memory dynamically",
        "To create generic functions and classes",
        "To handle exceptions in programs",
        "To optimize loop performance"
      ]
    },
    {
      numb: 13,
      question: "What does the `typeid` operator do in C++?",
      answer: "Returns type information about an object",
      options: [
        "Returns the size of an object",
        "Returns type information about an object",
        "Performs dynamic type casting",
        "Determines object lifetime"
      ]
    },
    {
      numb: 14,
      question: "What is the role of the `virtual destructor` in C++?",
      answer: "Ensures proper cleanup of derived class objects",
      options: [
        "Speeds up program execution",
        "Ensures proper cleanup of derived class objects",
        "Prevents memory leaks in constructors",
        "Defines default destructors for base classes"
      ]
    },
    {
      numb: 15,
      question: "Which C++ feature prevents a class from being inherited?",
      answer: "final",
      options: [
        "final",
        "sealed",
        "noinherit",
        "restrict"
      ]
    },
    {
      numb: 16,
      question: "Which of the following correctly defines a lambda expression in C++?",
      answer: "[]() { return 0; }",
      options: [
        "(){};",
        "[]() { return 0; }",
        "[=] { return 0 }",
        "lambda => return 0;"
      ]
    },
    {
      numb: 17,
      question: "What is the use of `decltype` in C++?",
      answer: "To determine the type of an expression at compile-time",
      options: [
        "To declare a function pointer",
        "To determine the type of an expression at compile-time",
        "To define macros",
        "To manage template specialization"
      ]
    },
    {
      numb: 18,
      question: "What is the purpose of a `vtable` in C++?",
      answer: "To support dynamic dispatch of virtual functions",
      options: [
        "To optimize memory management",
        "To store function pointers for overloading",
        "To support dynamic dispatch of virtual functions",
        "To handle exception propagation"
      ]
    },
    {
      numb: 19,
      question: "Which of the following is NOT a valid C++ storage class?",
      answer: "global",
      options: [
        "auto",
        "global",
        "static",
        "register"
      ]
    },
    {
      numb: 20,
      question: "What is the key advantage of the `std::shared_ptr` in C++?",
      answer: "It allows multiple ownership of an object",
      options: [
        "It enforces single ownership of an object",
        "It guarantees thread safety",
        "It allows multiple ownership of an object",
        "It prevents object slicing"
      ]
    }
  ];