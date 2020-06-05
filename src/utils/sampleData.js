export let sampleData = {
  CPP: {
    name: "C++",
    qa: [
      {
        q: "What does enum mean?",
        a: "C++ also allows for enumerated constants. This means the programmer can \
            create a new variable type and then assign a finite number of values to it."
      },
      {
        q: "What are namespaces?",
        a: "Namespaces subdivide the global scope into distinct, named scopes, and so \
            are useful for preventing name collisions in the global scope."
      }
    ]
  },
  JavaScript: {
    name: "JavaScript",
    qa: [
      {
        q: "What is test-driven development (TDD)?",
        a: "TDD specifically means to write your tests before you write your code."
      },
      {
        q: "What is a stack?",
        a: "A stack is a data structure that holds a list of elements. A stack works \
            based on the LIFO principle i.e., last in, first out, meaning that the most \
            recently added element is the first one to remove."
      }
    ]
  },
  Python: {
    name: "Python",
    qa: [
      {
        q: "What is the difference between a list and a dictionary?",
        a: "A list is for an ordered list of items. A dictionary (or dict) is for \
            matching some items (called 'keys') to other items (called 'values')."
      },
      {
        q: "Why do I need self when I make __init__ or other functions for classes?",
        a: "If you don't have self, then code like cheese = 'Frank' is ambiguous. That code isn't \
            clear about whether you mean the instance's cheese attribute or a local variable named \
            cheese. With self.cheese = 'Frank' it's very clear you mean the instance attribute self.cheese."
      }
    ]
  }
}