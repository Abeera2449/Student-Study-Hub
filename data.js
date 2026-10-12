window.SUBJECTS = {
  "html": {
    "name": "HTML",
    "tagline": "Structure web pages with semantic, accessible markup.",
    "notes": [
      [
        "Document Structure",
        "Use <!DOCTYPE html>, <html>, <head>, and <body> to create a valid document."
      ],
      [
        "Headings & Paragraphs",
        "Use <h1>–<h6> for headings and <p> for paragraphs. Keep a logical heading hierarchy."
      ],
      [
        "Links & Images",
        "Use <a href=\"...\"> for links and <img src=\"...\" alt=\"...\"> for images."
      ],
      [
        "Lists",
        "Use <ul> for unordered lists, <ol> for ordered lists, and <li> for items."
      ],
      [
        "Semantic HTML",
        "Elements such as <header>, <nav>, <main>, <section>, <article>, and <footer> describe meaning."
      ],
      [
        "Forms",
        "Use <form>, <label>, <input>, <select>, <textarea>, and <button>. Labels improve accessibility."
      ],
      [
        "Tables",
        "Use <table>, <thead>, <tbody>, <tr>, <th>, and <td> for tabular data."
      ],
      [
        "Accessibility",
        "Write useful alt text, use labels, keyboard-friendly controls, and semantic elements."
      ]
    ]
  },
  "css": {
    "name": "CSS",
    "tagline": "Style layouts, typography, spacing, responsiveness, and interactions.",
    "notes": [
      [
        "Selectors",
        "Target elements with element, class, id, attribute, pseudo-class, and pseudo-element selectors."
      ],
      [
        "Box Model",
        "Every box consists of content, padding, border, and margin."
      ],
      [
        "Display",
        "Common values include block, inline, inline-block, flex, grid, and none."
      ],
      [
        "Flexbox",
        "Flexbox is ideal for one-dimensional alignment and distribution."
      ],
      [
        "Grid",
        "CSS Grid is ideal for two-dimensional row-and-column layouts."
      ],
      [
        "Responsive Design",
        "Use relative units, flexible layouts, and media queries for different screens."
      ],
      [
        "Specificity",
        "More specific selectors can override less specific rules; source order also matters."
      ],
      [
        "Transitions",
        "Use transition for smooth property changes such as transform, opacity, and shadow."
      ]
    ]
  },
  "javascript": {
    "name": "JavaScript",
    "tagline": "Add behavior, logic, DOM manipulation, and interactivity to web pages.",
    "notes": [
      [
        "Variables",
        "Use const for values that should not be reassigned and let when reassignment is needed."
      ],
      [
        "Data Types",
        "Common types include string, number, boolean, undefined, null, bigint, symbol, and object."
      ],
      [
        "Functions",
        "Functions package reusable logic. Arrow functions provide concise syntax."
      ],
      [
        "Arrays",
        "Arrays store ordered values and support map, filter, find, reduce, and other methods."
      ],
      [
        "Objects",
        "Objects store key-value pairs and are fundamental to JavaScript data modeling."
      ],
      [
        "DOM",
        "Use document.querySelector and related APIs to read or modify page elements."
      ],
      [
        "Events",
        "Use addEventListener to respond to clicks, input, submit, keyboard actions, and more."
      ],
      [
        "Async JavaScript",
        "Promises and async/await are used for asynchronous workflows such as fetch requests."
      ]
    ]
  },
  "python": {
    "name": "Python",
    "tagline": "Learn readable programming fundamentals, data structures, functions, and OOP.",
    "notes": [
      [
        "Variables & Types",
        "Python uses dynamic typing. Common types include int, float, str, bool, list, tuple, set, and dict."
      ],
      [
        "Conditionals",
        "Use if, elif, and else to control program flow."
      ],
      [
        "Loops",
        "Use for to iterate over iterables and while for condition-based repetition."
      ],
      [
        "Functions",
        "Define reusable functions with def and return values with return."
      ],
      [
        "Lists & Dictionaries",
        "Lists are ordered mutable collections; dictionaries store key-value pairs."
      ],
      [
        "Comprehensions",
        "List, set, and dictionary comprehensions provide compact transformation syntax."
      ],
      [
        "Exceptions",
        "Use try, except, else, and finally to handle errors."
      ],
      [
        "OOP",
        "Classes bundle data and behavior. __init__ initializes new instances."
      ]
    ]
  },
  "cpp": {
    "name": "C++",
    "tagline": "Build strong programming fundamentals with compiled, statically typed code.",
    "notes": [
      [
        "Program Structure",
        "A typical program includes headers, a main function, and statements ending in semicolons."
      ],
      [
        "Variables & Types",
        "Common types include int, double, char, bool, and std::string."
      ],
      [
        "Input & Output",
        "Use std::cin for input and std::cout for output."
      ],
      [
        "Control Flow",
        "Use if/else, switch, for, while, and do-while."
      ],
      [
        "Functions",
        "Functions can accept typed parameters and return typed values."
      ],
      [
        "References & Pointers",
        "References alias objects; pointers store memory addresses."
      ],
      [
        "Classes",
        "Classes define data members and member functions with access control."
      ],
      [
        "STL",
        "The Standard Template Library provides containers such as vector and algorithms such as sort."
      ]
    ]
  },
  "java": {
    "name": "Java",
    "tagline": "Practice object-oriented programming, classes, collections, and JVM-based development.",
    "notes": [
      [
        "JVM",
        "Java source is compiled to bytecode that runs on the Java Virtual Machine."
      ],
      [
        "Classes & Objects",
        "Classes define fields and methods; objects are instances of classes."
      ],
      [
        "Constructors",
        "Constructors initialize objects and have the same name as the class."
      ],
      [
        "Inheritance",
        "A class can extend another class to inherit accessible behavior."
      ],
      [
        "Interfaces",
        "Interfaces define contracts that classes can implement."
      ],
      [
        "Collections",
        "Common collections include ArrayList, HashSet, and HashMap."
      ],
      [
        "Exceptions",
        "Use try/catch/finally and throw/throws for exception handling."
      ],
      [
        "Access Modifiers",
        "public, protected, package-private, and private control visibility."
      ]
    ]
  },
  "databases": {
    "name": "Databases & SQL",
    "tagline": "Understand relational design, SQL queries, keys, joins, and normalization.",
    "notes": [
      [
        "Tables",
        "Relational databases organize data into tables with rows and columns."
      ],
      [
        "Primary Keys",
        "A primary key uniquely identifies a row."
      ],
      [
        "Foreign Keys",
        "A foreign key references a key in another table and supports relationships."
      ],
      [
        "SELECT",
        "Use SELECT to retrieve columns from one or more tables."
      ],
      [
        "Filtering",
        "Use WHERE to filter rows and ORDER BY to sort results."
      ],
      [
        "Joins",
        "JOIN combines related rows from multiple tables."
      ],
      [
        "Aggregation",
        "COUNT, SUM, AVG, MIN, and MAX summarize groups of rows."
      ],
      [
        "Normalization",
        "Normalization reduces redundancy and update anomalies by organizing dependencies."
      ]
    ]
  },
  "ai": {
    "name": "Artificial Intelligence",
    "tagline": "Review AI foundations, search, machine learning, neural networks, and evaluation.",
    "notes": [
      [
        "AI Basics",
        "AI studies systems that perform tasks associated with intelligent behavior."
      ],
      [
        "Search",
        "State-space search explores possible states to reach a goal."
      ],
      [
        "Heuristics",
        "A heuristic estimates how promising a state is and can guide search."
      ],
      [
        "Machine Learning",
        "ML learns patterns from data instead of relying only on explicitly coded rules."
      ],
      [
        "Supervised Learning",
        "Supervised learning uses labeled examples."
      ],
      [
        "Unsupervised Learning",
        "Unsupervised learning discovers structure in unlabeled data."
      ],
      [
        "Neural Networks",
        "Neural networks combine layers of weighted transformations and activation functions."
      ],
      [
        "Evaluation",
        "Metrics such as accuracy, precision, recall, and F1 score evaluate classification performance."
      ]
    ]
  },
  "networks": {
    "name": "Computer Networks",
    "tagline": "Learn network layers, addressing, protocols, routing, and common services.",
    "notes": [
      [
        "Network Models",
        "The OSI model has seven layers; TCP/IP is commonly described with fewer layers."
      ],
      [
        "IP Addressing",
        "IP addresses identify network interfaces for packet delivery."
      ],
      [
        "TCP & UDP",
        "TCP is connection-oriented and reliable; UDP is connectionless and lower-overhead."
      ],
      [
        "DNS",
        "DNS maps domain names to IP addresses and other records."
      ],
      [
        "HTTP/HTTPS",
        "HTTP transfers web resources; HTTPS adds TLS-based security."
      ],
      [
        "Routers & Switches",
        "Routers forward packets between networks; switches commonly forward frames within LANs."
      ],
      [
        "Ports",
        "Transport-layer port numbers help identify application endpoints."
      ],
      [
        "Subnetting",
        "Subnetting divides address space into smaller networks using prefix lengths/subnet masks."
      ]
    ]
  }
};

window.QUIZ_BANK = {
  "html": [
    {
      "id": "html-1",
      "question": "Which element represents the main content of a document?",
      "options": [
        "<meta>",
        "<main>",
        "<style>",
        "<link>"
      ],
      "answer": 1
    },
    {
      "id": "html-2",
      "question": "Which attribute provides alternative text for an image?",
      "options": [
        "title",
        "src",
        "alt",
        "href"
      ],
      "answer": 2
    },
    {
      "id": "html-3",
      "question": "Which element creates a hyperlink?",
      "options": [
        "<p>",
        "<a>",
        "<span>",
        "<link>"
      ],
      "answer": 1
    },
    {
      "id": "html-4",
      "question": "Which element is used for an unordered list?",
      "options": [
        "<ol>",
        "<ul>",
        "<li>",
        "<dl>"
      ],
      "answer": 1
    },
    {
      "id": "html-5",
      "question": "Which element is the highest-level heading?",
      "options": [
        "<h6>",
        "<head>",
        "<h1>",
        "<header>"
      ],
      "answer": 2
    },
    {
      "id": "html-6",
      "question": "Which element associates text with a form control?",
      "options": [
        "<legend>",
        "<label>",
        "<span>",
        "<caption>"
      ],
      "answer": 1
    },
    {
      "id": "html-7",
      "question": "Which input type hides typed characters?",
      "options": [
        "hidden",
        "text",
        "password",
        "email"
      ],
      "answer": 2
    },
    {
      "id": "html-8",
      "question": "Which semantic element is intended for navigation links?",
      "options": [
        "<aside>",
        "<nav>",
        "<section>",
        "<mark>"
      ],
      "answer": 1
    },
    {
      "id": "html-9",
      "question": "Which element defines a table row?",
      "options": [
        "<td>",
        "<th>",
        "<tr>",
        "<tbody>"
      ],
      "answer": 2
    },
    {
      "id": "html-10",
      "question": "Which element defines table header cells?",
      "options": [
        "<th>",
        "<td>",
        "<thead>",
        "<caption>"
      ],
      "answer": 0
    },
    {
      "id": "html-11",
      "question": "Which attribute is commonly used to open a link in a new browsing context?",
      "options": [
        "rel",
        "target",
        "method",
        "action"
      ],
      "answer": 1
    },
    {
      "id": "html-12",
      "question": "Which element contains metadata not normally displayed as page content?",
      "options": [
        "<body>",
        "<main>",
        "<head>",
        "<footer>"
      ],
      "answer": 2
    },
    {
      "id": "html-13",
      "question": "Which element is best for emphasized text with semantic importance?",
      "options": [
        "<b>",
        "<em>",
        "<div>",
        "<small>"
      ],
      "answer": 1
    },
    {
      "id": "html-14",
      "question": "Which element is used to embed JavaScript in HTML?",
      "options": [
        "<style>",
        "<code>",
        "<script>",
        "<js>"
      ],
      "answer": 2
    },
    {
      "id": "html-15",
      "question": "Which element is used to connect an external stylesheet?",
      "options": [
        "<style>",
        "<css>",
        "<link>",
        "<script>"
      ],
      "answer": 2
    },
    {
      "id": "html-16",
      "question": "Which form method commonly appends form data to the URL?",
      "options": [
        "POST",
        "GET",
        "PATCH",
        "DELETE"
      ],
      "answer": 1
    },
    {
      "id": "html-17",
      "question": "Which semantic element is suited to self-contained content such as a blog post?",
      "options": [
        "<article>",
        "<nav>",
        "<main>",
        "<label>"
      ],
      "answer": 0
    },
    {
      "id": "html-18",
      "question": "What does <!DOCTYPE html> primarily declare?",
      "options": [
        "A CSS reset",
        "The HTML document type",
        "A JavaScript module",
        "A server route"
      ],
      "answer": 1
    },
    {
      "id": "html-19",
      "question": "Which attribute makes a form field mandatory before submission in browser validation?",
      "options": [
        "checked",
        "selected",
        "required",
        "readonly"
      ],
      "answer": 2
    },
    {
      "id": "html-20",
      "question": "Which element creates a line break?",
      "options": [
        "<hr>",
        "<break>",
        "<br>",
        "<lb>"
      ],
      "answer": 2
    }
  ],
  "css": [
    {
      "id": "css-1",
      "question": "Which property changes text color?",
      "options": [
        "font-color",
        "color",
        "text-color",
        "foreground"
      ],
      "answer": 1
    },
    {
      "id": "css-2",
      "question": "Which property controls space inside an element's border?",
      "options": [
        "margin",
        "padding",
        "gap",
        "outline"
      ],
      "answer": 1
    },
    {
      "id": "css-3",
      "question": "Which property controls space outside an element's border?",
      "options": [
        "margin",
        "padding",
        "border-spacing",
        "inset"
      ],
      "answer": 0
    },
    {
      "id": "css-4",
      "question": "Which display value enables Flexbox?",
      "options": [
        "block",
        "grid",
        "flex",
        "inline"
      ],
      "answer": 2
    },
    {
      "id": "css-5",
      "question": "Which display value enables CSS Grid?",
      "options": [
        "grid",
        "flex",
        "table",
        "contents"
      ],
      "answer": 0
    },
    {
      "id": "css-6",
      "question": "Which property controls the stacking order of positioned elements?",
      "options": [
        "order",
        "layer",
        "z-index",
        "stack"
      ],
      "answer": 2
    },
    {
      "id": "css-7",
      "question": "Which selector targets an element with class card?",
      "options": [
        "#card",
        ".card",
        "card",
        "*card"
      ],
      "answer": 1
    },
    {
      "id": "css-8",
      "question": "Which selector targets an element with id hero?",
      "options": [
        ".hero",
        "hero",
        "#hero",
        "@hero"
      ],
      "answer": 2
    },
    {
      "id": "css-9",
      "question": "Which pseudo-class applies when a pointer is over an element?",
      "options": [
        ":focus",
        ":hover",
        "::before",
        ":active-child"
      ],
      "answer": 1
    },
    {
      "id": "css-10",
      "question": "Which property rounds corners?",
      "options": [
        "border-style",
        "border-radius",
        "corner-radius",
        "radius"
      ],
      "answer": 1
    },
    {
      "id": "css-11",
      "question": "Which property changes background color?",
      "options": [
        "color",
        "background-color",
        "fill",
        "back-color"
      ],
      "answer": 1
    },
    {
      "id": "css-12",
      "question": "Which unit is relative to the root element's font size?",
      "options": [
        "px",
        "em",
        "rem",
        "vh"
      ],
      "answer": 2
    },
    {
      "id": "css-13",
      "question": "Which unit is relative to viewport width?",
      "options": [
        "vh",
        "vw",
        "rem",
        "ch"
      ],
      "answer": 1
    },
    {
      "id": "css-14",
      "question": "Which rule is used for responsive breakpoints?",
      "options": [
        "@screen",
        "@media",
        "@responsive",
        "@breakpoint"
      ],
      "answer": 1
    },
    {
      "id": "css-15",
      "question": "Which property controls opacity?",
      "options": [
        "visibility",
        "alpha",
        "opacity",
        "filter-level"
      ],
      "answer": 2
    },
    {
      "id": "css-16",
      "question": "Which transform function moves an element?",
      "options": [
        "rotate()",
        "scale()",
        "translate()",
        "skew()"
      ],
      "answer": 2
    },
    {
      "id": "css-17",
      "question": "Which property is commonly used to animate smooth property changes?",
      "options": [
        "animation-name",
        "transition",
        "transform-origin",
        "will-change"
      ],
      "answer": 1
    },
    {
      "id": "css-18",
      "question": "What does box-sizing: border-box do?",
      "options": [
        "Removes borders",
        "Includes padding and border in declared size",
        "Makes the box inline",
        "Centers the box"
      ],
      "answer": 1
    },
    {
      "id": "css-19",
      "question": "Which property controls space between grid/flex items?",
      "options": [
        "spacing",
        "gap",
        "margin-collapse",
        "grid-padding"
      ],
      "answer": 1
    },
    {
      "id": "css-20",
      "question": "Which position value fixes an element relative to the viewport?",
      "options": [
        "absolute",
        "sticky",
        "fixed",
        "relative"
      ],
      "answer": 2
    }
  ],
  "javascript": [
    {
      "id": "javascript-1",
      "question": "Which keyword declares a block-scoped variable that can be reassigned?",
      "options": [
        "var",
        "let",
        "const",
        "static"
      ],
      "answer": 1
    },
    {
      "id": "javascript-2",
      "question": "Which keyword declares a binding that cannot be reassigned?",
      "options": [
        "const",
        "let",
        "var",
        "fixed"
      ],
      "answer": 0
    },
    {
      "id": "javascript-3",
      "question": "Which operator checks strict equality?",
      "options": [
        "==",
        "=",
        "===",
        "!="
      ],
      "answer": 2
    },
    {
      "id": "javascript-4",
      "question": "Which array method creates a new array by transforming every item?",
      "options": [
        "forEach",
        "map",
        "find",
        "push"
      ],
      "answer": 1
    },
    {
      "id": "javascript-5",
      "question": "Which array method keeps items that pass a test?",
      "options": [
        "filter",
        "reduce",
        "sort",
        "slice"
      ],
      "answer": 0
    },
    {
      "id": "javascript-6",
      "question": "Which DOM method returns the first match for a CSS selector?",
      "options": [
        "getSelector",
        "querySelector",
        "queryAll",
        "findElement"
      ],
      "answer": 1
    },
    {
      "id": "javascript-7",
      "question": "Which method attaches an event listener?",
      "options": [
        "listen",
        "onEvent",
        "addEventListener",
        "attach"
      ],
      "answer": 2
    },
    {
      "id": "javascript-8",
      "question": "Which event commonly fires when a button is activated with a pointer?",
      "options": [
        "submit",
        "change",
        "click",
        "load"
      ],
      "answer": 2
    },
    {
      "id": "javascript-9",
      "question": "What is the result type of JSON.parse on a JSON object string?",
      "options": [
        "XML node",
        "JavaScript object",
        "CSS object",
        "HTML string"
      ],
      "answer": 1
    },
    {
      "id": "javascript-10",
      "question": "Which syntax defines an arrow function?",
      "options": [
        "function -> {}",
        "() => {}",
        "=> function()",
        "func() {}"
      ],
      "answer": 1
    },
    {
      "id": "javascript-11",
      "question": "Which statement exits a function and optionally provides a value?",
      "options": [
        "break",
        "yield",
        "return",
        "exit"
      ],
      "answer": 2
    },
    {
      "id": "javascript-12",
      "question": "Which value represents an intentional absence of an object value?",
      "options": [
        "undefined",
        "NaN",
        "null",
        "false"
      ],
      "answer": 2
    },
    {
      "id": "javascript-13",
      "question": "Which built-in object logs messages to developer tools?",
      "options": [
        "window",
        "document",
        "console",
        "screen"
      ],
      "answer": 2
    },
    {
      "id": "javascript-14",
      "question": "Which function schedules a callback after a delay?",
      "options": [
        "setInterval",
        "setTimeout",
        "wait",
        "delay"
      ],
      "answer": 1
    },
    {
      "id": "javascript-15",
      "question": "Which keyword is used inside an async function to pause for a Promise?",
      "options": [
        "yield",
        "wait",
        "await",
        "pause"
      ],
      "answer": 2
    },
    {
      "id": "javascript-16",
      "question": "Which API is commonly used for HTTP requests in modern browser JavaScript?",
      "options": [
        "fetch",
        "requestPage",
        "httpGet",
        "loadURL"
      ],
      "answer": 0
    },
    {
      "id": "javascript-17",
      "question": "Which property is commonly used to read or set plain text content of an element?",
      "options": [
        "innerStyle",
        "textContent",
        "nodeTextOnly",
        "valueHTML"
      ],
      "answer": 1
    },
    {
      "id": "javascript-18",
      "question": "Which method prevents a form's default submission behavior inside an event handler?",
      "options": [
        "stop()",
        "cancel()",
        "preventDefault()",
        "blockSubmit()"
      ],
      "answer": 2
    },
    {
      "id": "javascript-19",
      "question": "Which array method returns the first matching element?",
      "options": [
        "find",
        "filter",
        "map",
        "someAll"
      ],
      "answer": 0
    },
    {
      "id": "javascript-20",
      "question": "Which storage API persists key-value strings in the browser across sessions?",
      "options": [
        "sessionOnly",
        "cookieJar",
        "localStorage",
        "memoryStorage"
      ],
      "answer": 2
    }
  ],
  "python": [
    {
      "id": "python-1",
      "question": "Which keyword defines a function?",
      "options": [
        "func",
        "def",
        "function",
        "lambda-only"
      ],
      "answer": 1
    },
    {
      "id": "python-2",
      "question": "Which collection stores key-value pairs?",
      "options": [
        "list",
        "tuple",
        "dict",
        "set"
      ],
      "answer": 2
    },
    {
      "id": "python-3",
      "question": "Which operator performs floor division?",
      "options": [
        "/",
        "//",
        "%",
        "**"
      ],
      "answer": 1
    },
    {
      "id": "python-4",
      "question": "Which keyword starts a conditional branch?",
      "options": [
        "when",
        "if",
        "case",
        "check"
      ],
      "answer": 1
    },
    {
      "id": "python-5",
      "question": "Which loop iterates directly over items in an iterable?",
      "options": [
        "repeat",
        "for",
        "do",
        "loop"
      ],
      "answer": 1
    },
    {
      "id": "python-6",
      "question": "Which built-in function returns the number of items in a collection?",
      "options": [
        "size",
        "countall",
        "len",
        "length"
      ],
      "answer": 2
    },
    {
      "id": "python-7",
      "question": "Which method adds one item to the end of a list?",
      "options": [
        "add",
        "append",
        "push",
        "insertLast"
      ],
      "answer": 1
    },
    {
      "id": "python-8",
      "question": "Which keyword handles an exception?",
      "options": [
        "catch",
        "except",
        "rescue",
        "error"
      ],
      "answer": 1
    },
    {
      "id": "python-9",
      "question": "Which keyword creates a class?",
      "options": [
        "object",
        "class",
        "typeclass",
        "struct"
      ],
      "answer": 1
    },
    {
      "id": "python-10",
      "question": "Which special method initializes a new instance?",
      "options": [
        "__newonly__",
        "__init__",
        "__start__",
        "__class__"
      ],
      "answer": 1
    },
    {
      "id": "python-11",
      "question": "Which value represents no value / null-like absence?",
      "options": [
        "null",
        "nil",
        "None",
        "undefined"
      ],
      "answer": 2
    },
    {
      "id": "python-12",
      "question": "Which expression creates a list?",
      "options": [
        "(1, 2, 3)",
        "{1, 2, 3}",
        "[1, 2, 3]",
        "<1,2,3>"
      ],
      "answer": 2
    },
    {
      "id": "python-13",
      "question": "Which expression creates a tuple?",
      "options": [
        "[1,2,3]",
        "(1, 2, 3)",
        "{1,2,3}",
        "tuple[1,2,3]"
      ],
      "answer": 1
    },
    {
      "id": "python-14",
      "question": "Which operator tests membership?",
      "options": [
        "has",
        "in",
        "contains",
        "of"
      ],
      "answer": 1
    },
    {
      "id": "python-15",
      "question": "Which statement imports the math module?",
      "options": [
        "include math",
        "use math",
        "import math",
        "from python math"
      ],
      "answer": 2
    },
    {
      "id": "python-16",
      "question": "Which built-in converts a numeric string to an integer?",
      "options": [
        "integer()",
        "number()",
        "int()",
        "parseInt()"
      ],
      "answer": 2
    },
    {
      "id": "python-17",
      "question": "Which slice returns the first three elements of list x?",
      "options": [
        "x[3:]",
        "x[:3]",
        "x[1:3]",
        "x[0:2]"
      ],
      "answer": 1
    },
    {
      "id": "python-18",
      "question": "Which keyword is used to create an anonymous function?",
      "options": [
        "anon",
        "lambda",
        "func",
        "def"
      ],
      "answer": 1
    },
    {
      "id": "python-19",
      "question": "Which data structure stores unique unordered elements?",
      "options": [
        "list",
        "tuple",
        "set",
        "str"
      ],
      "answer": 2
    },
    {
      "id": "python-20",
      "question": "Which function prints output?",
      "options": [
        "echo()",
        "write()",
        "print()",
        "cout()"
      ],
      "answer": 2
    }
  ],
  "cpp": [
    {
      "id": "cpp-1",
      "question": "Which function is the standard entry point of a C++ program?",
      "options": [
        "start",
        "run",
        "main",
        "init"
      ],
      "answer": 2
    },
    {
      "id": "cpp-2",
      "question": "Which operator sends output to std::cout?",
      "options": [
        ">>",
        "<<",
        "::",
        "->"
      ],
      "answer": 1
    },
    {
      "id": "cpp-3",
      "question": "Which operator extracts input from std::cin?",
      "options": [
        "<<",
        ">>",
        "<=",
        ":"
      ],
      "answer": 1
    },
    {
      "id": "cpp-4",
      "question": "Which header is commonly used for std::cout and std::cin?",
      "options": [
        "<stdio>",
        "<iostream>",
        "<string.h>",
        "<console>"
      ],
      "answer": 1
    },
    {
      "id": "cpp-5",
      "question": "Which type commonly stores whole numbers?",
      "options": [
        "float",
        "char",
        "int",
        "bool"
      ],
      "answer": 2
    },
    {
      "id": "cpp-6",
      "question": "Which keyword defines a class?",
      "options": [
        "structonly",
        "class",
        "object",
        "type"
      ],
      "answer": 1
    },
    {
      "id": "cpp-7",
      "question": "Which access specifier makes members accessible from outside the class?",
      "options": [
        "private",
        "protected",
        "public",
        "internal"
      ],
      "answer": 2
    },
    {
      "id": "cpp-8",
      "question": "Which symbol is used to access a member through an object?",
      "options": [
        ".",
        "->",
        "::",
        "&"
      ],
      "answer": 0
    },
    {
      "id": "cpp-9",
      "question": "Which symbol is used to access a member through a pointer?",
      "options": [
        ".",
        "->",
        "::",
        "*"
      ],
      "answer": 1
    },
    {
      "id": "cpp-10",
      "question": "Which STL container is a dynamic array?",
      "options": [
        "std::map",
        "std::vector",
        "std::set",
        "std::queue"
      ],
      "answer": 1
    },
    {
      "id": "cpp-11",
      "question": "Which statement exits a function and can return a value?",
      "options": [
        "break",
        "return",
        "exit",
        "continue"
      ],
      "answer": 1
    },
    {
      "id": "cpp-12",
      "question": "Which keyword allocates an object dynamically?",
      "options": [
        "alloc",
        "new",
        "malloc-only",
        "create"
      ],
      "answer": 1
    },
    {
      "id": "cpp-13",
      "question": "Which keyword releases memory allocated with new for one object?",
      "options": [
        "free",
        "remove",
        "delete",
        "clear"
      ],
      "answer": 2
    },
    {
      "id": "cpp-14",
      "question": "Which operator gives the address of an object?",
      "options": [
        "*",
        "&",
        "%",
        "@"
      ],
      "answer": 1
    },
    {
      "id": "cpp-15",
      "question": "Which operator dereferences a pointer?",
      "options": [
        "&",
        "*",
        "->>",
        "::"
      ],
      "answer": 1
    },
    {
      "id": "cpp-16",
      "question": "Which feature allows multiple functions with the same name but different parameter lists?",
      "options": [
        "Function hiding",
        "Function overloading",
        "Templating only",
        "Inheritance"
      ],
      "answer": 1
    },
    {
      "id": "cpp-17",
      "question": "Which keyword is used for a compile-time constant variable?",
      "options": [
        "let",
        "final",
        "const",
        "static-only"
      ],
      "answer": 2
    },
    {
      "id": "cpp-18",
      "question": "Which loop always executes its body at least once?",
      "options": [
        "for",
        "while",
        "do-while",
        "range"
      ],
      "answer": 2
    },
    {
      "id": "cpp-19",
      "question": "Which namespace contains many standard library facilities?",
      "options": [
        "cpp",
        "system",
        "std",
        "core"
      ],
      "answer": 2
    },
    {
      "id": "cpp-20",
      "question": "Which STL algorithm sorts a range?",
      "options": [
        "std::order",
        "std::sort",
        "std::arrange",
        "std::rank"
      ],
      "answer": 1
    }
  ],
  "java": [
    {
      "id": "java-1",
      "question": "Which method is the conventional entry point of a Java application?",
      "options": [
        "start",
        "public static void main",
        "run",
        "init"
      ],
      "answer": 1
    },
    {
      "id": "java-2",
      "question": "Which keyword creates an object?",
      "options": [
        "make",
        "new",
        "create",
        "alloc"
      ],
      "answer": 1
    },
    {
      "id": "java-3",
      "question": "Which keyword defines inheritance between classes?",
      "options": [
        "inherits",
        "extends",
        "implements",
        "superclass"
      ],
      "answer": 1
    },
    {
      "id": "java-4",
      "question": "Which keyword makes a class follow an interface contract?",
      "options": [
        "extends",
        "implements",
        "interface",
        "uses"
      ],
      "answer": 1
    },
    {
      "id": "java-5",
      "question": "Which collection is a resizable list?",
      "options": [
        "HashMap",
        "ArrayList",
        "HashSet",
        "QueueMap"
      ],
      "answer": 1
    },
    {
      "id": "java-6",
      "question": "Which collection stores key-value pairs?",
      "options": [
        "ArrayList",
        "HashMap",
        "HashSet",
        "Stack"
      ],
      "answer": 1
    },
    {
      "id": "java-7",
      "question": "Which keyword prevents reassignment of a variable reference/value?",
      "options": [
        "const",
        "final",
        "fixed",
        "static"
      ],
      "answer": 1
    },
    {
      "id": "java-8",
      "question": "Which access modifier restricts a member to its own class?",
      "options": [
        "public",
        "protected",
        "private",
        "global"
      ],
      "answer": 2
    },
    {
      "id": "java-9",
      "question": "Which block handles an exception?",
      "options": [
        "except",
        "catch",
        "rescue",
        "handle"
      ],
      "answer": 1
    },
    {
      "id": "java-10",
      "question": "Which keyword explicitly throws an exception?",
      "options": [
        "throws",
        "throw",
        "raise",
        "error"
      ],
      "answer": 1
    },
    {
      "id": "java-11",
      "question": "Which keyword refers to the current object?",
      "options": [
        "self",
        "this",
        "current",
        "super"
      ],
      "answer": 1
    },
    {
      "id": "java-12",
      "question": "Which keyword refers to the parent-class context?",
      "options": [
        "base",
        "parent",
        "super",
        "this"
      ],
      "answer": 2
    },
    {
      "id": "java-13",
      "question": "Which primitive type stores true/false values?",
      "options": [
        "bool",
        "boolean",
        "bit",
        "logic"
      ],
      "answer": 1
    },
    {
      "id": "java-14",
      "question": "Which class represents immutable text strings?",
      "options": [
        "Text",
        "String",
        "CharArrayOnly",
        "StringBuffer"
      ],
      "answer": 1
    },
    {
      "id": "java-15",
      "question": "Which operator compares primitive numeric values for equality?",
      "options": [
        "=",
        "==",
        "===",
        "equals-only"
      ],
      "answer": 1
    },
    {
      "id": "java-16",
      "question": "Which method compares String contents?",
      "options": [
        "== only",
        "equals()",
        "same()",
        "compareContent()"
      ],
      "answer": 1
    },
    {
      "id": "java-17",
      "question": "Which Java platform component executes bytecode?",
      "options": [
        "JDK compiler only",
        "JVM",
        "JAR",
        "Javadoc"
      ],
      "answer": 1
    },
    {
      "id": "java-18",
      "question": "Which file extension is used for Java source code?",
      "options": [
        ".class",
        ".jar",
        ".java",
        ".jvm"
      ],
      "answer": 2
    },
    {
      "id": "java-19",
      "question": "Which keyword begins a class declaration?",
      "options": [
        "object",
        "class",
        "type",
        "struct"
      ],
      "answer": 1
    },
    {
      "id": "java-20",
      "question": "Which loop is commonly used to iterate over every element in an array or collection?",
      "options": [
        "do-only loop",
        "enhanced for loop",
        "switch loop",
        "goto loop"
      ],
      "answer": 1
    }
  ],
  "databases": [
    {
      "id": "databases-1",
      "question": "Which SQL command retrieves data?",
      "options": [
        "FETCHROW",
        "SELECT",
        "READ",
        "GET"
      ],
      "answer": 1
    },
    {
      "id": "databases-2",
      "question": "Which clause filters rows?",
      "options": [
        "ORDER BY",
        "WHERE",
        "GROUP BY",
        "HAVING ONLY"
      ],
      "answer": 1
    },
    {
      "id": "databases-3",
      "question": "Which clause sorts query results?",
      "options": [
        "SORT",
        "ORDER BY",
        "GROUP BY",
        "ARRANGE"
      ],
      "answer": 1
    },
    {
      "id": "databases-4",
      "question": "Which key uniquely identifies a table row?",
      "options": [
        "Foreign key",
        "Primary key",
        "Composite index only",
        "View key"
      ],
      "answer": 1
    },
    {
      "id": "databases-5",
      "question": "Which key references a row in another table?",
      "options": [
        "Primary key",
        "Foreign key",
        "Candidate value",
        "Unique view"
      ],
      "answer": 1
    },
    {
      "id": "databases-6",
      "question": "Which JOIN returns matching rows from both tables?",
      "options": [
        "LEFT JOIN",
        "INNER JOIN",
        "CROSS ONLY",
        "FULL ONLY"
      ],
      "answer": 1
    },
    {
      "id": "databases-7",
      "question": "Which aggregate counts rows?",
      "options": [
        "SUM",
        "COUNT",
        "TOTAL",
        "NUMBER"
      ],
      "answer": 1
    },
    {
      "id": "databases-8",
      "question": "Which aggregate returns an average?",
      "options": [
        "MEAN",
        "AVG",
        "COUNT",
        "MID"
      ],
      "answer": 1
    },
    {
      "id": "databases-9",
      "question": "Which command adds new rows?",
      "options": [
        "ADDROW",
        "INSERT",
        "APPEND TABLE",
        "CREATE ROW"
      ],
      "answer": 1
    },
    {
      "id": "databases-10",
      "question": "Which command changes existing rows?",
      "options": [
        "ALTER DATABASE",
        "UPDATE",
        "MODIFY ROWSET",
        "CHANGE"
      ],
      "answer": 1
    },
    {
      "id": "databases-11",
      "question": "Which command removes rows matching a condition?",
      "options": [
        "DROP",
        "DELETE",
        "REMOVE TABLE",
        "ERASE"
      ],
      "answer": 1
    },
    {
      "id": "databases-12",
      "question": "Which statement creates a table?",
      "options": [
        "NEW TABLE",
        "MAKE TABLE",
        "CREATE TABLE",
        "ADD TABLE"
      ],
      "answer": 2
    },
    {
      "id": "databases-13",
      "question": "Which clause groups rows for aggregate calculations?",
      "options": [
        "ORDER BY",
        "GROUP BY",
        "PARTITION ONLY",
        "COLLECT BY"
      ],
      "answer": 1
    },
    {
      "id": "databases-14",
      "question": "Which clause filters groups after aggregation?",
      "options": [
        "WHERE ONLY",
        "HAVING",
        "FILTER GROUP",
        "GROUP WHERE"
      ],
      "answer": 1
    },
    {
      "id": "databases-15",
      "question": "What does normalization primarily reduce?",
      "options": [
        "All indexes",
        "Redundancy and update anomalies",
        "Need for keys",
        "Need for queries"
      ],
      "answer": 1
    },
    {
      "id": "databases-16",
      "question": "Which constraint prevents NULL values in a column?",
      "options": [
        "UNIQUE",
        "NOT NULL",
        "CHECKED",
        "PRIMARY ONLY"
      ],
      "answer": 1
    },
    {
      "id": "databases-17",
      "question": "Which constraint enforces unique column values?",
      "options": [
        "UNIQUE",
        "DISTINCT",
        "ONLY",
        "NO DUP"
      ],
      "answer": 0
    },
    {
      "id": "databases-18",
      "question": "Which object stores a saved query definition in many relational databases?",
      "options": [
        "Trigger",
        "View",
        "Cursor only",
        "Schema"
      ],
      "answer": 1
    },
    {
      "id": "databases-19",
      "question": "Which SQL operator is used for pattern matching with wildcards?",
      "options": [
        "MATCH",
        "LIKE",
        "PATTERN",
        "SEARCH"
      ],
      "answer": 1
    },
    {
      "id": "databases-20",
      "question": "Which transaction command makes completed changes permanent?",
      "options": [
        "SAVE",
        "COMMIT",
        "LOCK",
        "APPLY"
      ],
      "answer": 1
    }
  ],
  "ai": [
    {
      "id": "ai-1",
      "question": "Which learning setting uses labeled examples?",
      "options": [
        "Unsupervised learning",
        "Supervised learning",
        "Reinforcement only",
        "Clustering only"
      ],
      "answer": 1
    },
    {
      "id": "ai-2",
      "question": "Which learning setting discovers structure in unlabeled data?",
      "options": [
        "Supervised learning",
        "Unsupervised learning",
        "Compilation",
        "Parsing"
      ],
      "answer": 1
    },
    {
      "id": "ai-3",
      "question": "Which task predicts a discrete category?",
      "options": [
        "Regression",
        "Classification",
        "Sorting",
        "Compression"
      ],
      "answer": 1
    },
    {
      "id": "ai-4",
      "question": "Which task predicts a continuous numeric value?",
      "options": [
        "Classification",
        "Regression",
        "Clustering only",
        "Tokenization"
      ],
      "answer": 1
    },
    {
      "id": "ai-5",
      "question": "Which algorithmic idea estimates how promising a search state is?",
      "options": [
        "Compiler",
        "Heuristic",
        "Schema",
        "Protocol"
      ],
      "answer": 1
    },
    {
      "id": "ai-6",
      "question": "Which search algorithm commonly uses f(n)=g(n)+h(n)?",
      "options": [
        "DFS",
        "A*",
        "Binary search",
        "K-means"
      ],
      "answer": 1
    },
    {
      "id": "ai-7",
      "question": "Which metric is TP / (TP + FP)?",
      "options": [
        "Recall",
        "Precision",
        "Accuracy only",
        "F1 only"
      ],
      "answer": 1
    },
    {
      "id": "ai-8",
      "question": "Which metric is TP / (TP + FN)?",
      "options": [
        "Precision",
        "Recall",
        "Specificity only",
        "MAE"
      ],
      "answer": 1
    },
    {
      "id": "ai-9",
      "question": "Which metric combines precision and recall using a harmonic mean?",
      "options": [
        "MSE",
        "Accuracy",
        "F1 score",
        "R-squared"
      ],
      "answer": 2
    },
    {
      "id": "ai-10",
      "question": "Which model layer applies weighted sums followed by activations in neural networks?",
      "options": [
        "Router",
        "Neuron/unit",
        "Database row",
        "Socket"
      ],
      "answer": 1
    },
    {
      "id": "ai-11",
      "question": "Which technique adjusts model parameters to reduce a loss function?",
      "options": [
        "Tokenization",
        "Optimization",
        "Normalization only",
        "Rendering"
      ],
      "answer": 1
    },
    {
      "id": "ai-12",
      "question": "Which algorithm is commonly used for gradient-based training of neural networks?",
      "options": [
        "Backpropagation",
        "Breadth-first search",
        "SQL join",
        "DNS lookup"
      ],
      "answer": 0
    },
    {
      "id": "ai-13",
      "question": "What is overfitting?",
      "options": [
        "Underusing all data",
        "Performing well on training data but poorly on unseen data",
        "Using no parameters",
        "Having too few classes"
      ],
      "answer": 1
    },
    {
      "id": "ai-14",
      "question": "Which dataset split is primarily used for final unbiased evaluation?",
      "options": [
        "Training set",
        "Test set",
        "Augmentation set",
        "Cache"
      ],
      "answer": 1
    },
    {
      "id": "ai-15",
      "question": "Which dataset split is used to fit model parameters?",
      "options": [
        "Training set",
        "Test set",
        "Deployment log",
        "Prompt only"
      ],
      "answer": 0
    },
    {
      "id": "ai-16",
      "question": "Which unsupervised task groups similar examples?",
      "options": [
        "Classification",
        "Clustering",
        "Regression",
        "Sorting"
      ],
      "answer": 1
    },
    {
      "id": "ai-17",
      "question": "Which activation function outputs max(0, x)?",
      "options": [
        "Sigmoid",
        "ReLU",
        "Softmax",
        "Tanh"
      ],
      "answer": 1
    },
    {
      "id": "ai-18",
      "question": "Which output function is commonly used to turn logits into class probabilities for multi-class classification?",
      "options": [
        "ReLU",
        "Softmax",
        "Dropout",
        "Pooling"
      ],
      "answer": 1
    },
    {
      "id": "ai-19",
      "question": "Which technique randomly disables units during training as a regularizer?",
      "options": [
        "Batch sorting",
        "Dropout",
        "Beam search",
        "Caching"
      ],
      "answer": 1
    },
    {
      "id": "ai-20",
      "question": "Which term describes data examples used to teach a machine-learning model?",
      "options": [
        "Routing table",
        "Training data",
        "CSS rules",
        "Bytecode"
      ],
      "answer": 1
    }
  ],
  "networks": [
    {
      "id": "networks-1",
      "question": "Which protocol maps domain names to IP addresses?",
      "options": [
        "HTTP",
        "DNS",
        "FTP",
        "ARP only"
      ],
      "answer": 1
    },
    {
      "id": "networks-2",
      "question": "Which protocol is connection-oriented and reliable?",
      "options": [
        "UDP",
        "TCP",
        "IP",
        "ICMP only"
      ],
      "answer": 1
    },
    {
      "id": "networks-3",
      "question": "Which transport protocol is connectionless?",
      "options": [
        "TCP",
        "UDP",
        "TLS",
        "HTTP"
      ],
      "answer": 1
    },
    {
      "id": "networks-4",
      "question": "Which device forwards packets between networks?",
      "options": [
        "Switch only",
        "Router",
        "Hub only",
        "Repeater"
      ],
      "answer": 1
    },
    {
      "id": "networks-5",
      "question": "Which device commonly forwards Ethernet frames within a LAN using MAC addresses?",
      "options": [
        "Router only",
        "Switch",
        "Modem only",
        "Gateway only"
      ],
      "answer": 1
    },
    {
      "id": "networks-6",
      "question": "Which protocol is used to request web resources?",
      "options": [
        "DNS",
        "HTTP",
        "SMTP",
        "DHCP"
      ],
      "answer": 1
    },
    {
      "id": "networks-7",
      "question": "What does HTTPS add to HTTP?",
      "options": [
        "A database",
        "TLS-based security",
        "A new IP version",
        "Only compression"
      ],
      "answer": 1
    },
    {
      "id": "networks-8",
      "question": "Which protocol dynamically assigns IP configuration to hosts?",
      "options": [
        "DNS",
        "DHCP",
        "SSH",
        "SMTP"
      ],
      "answer": 1
    },
    {
      "id": "networks-9",
      "question": "Which protocol is commonly used to send email between mail servers?",
      "options": [
        "IMAP",
        "SMTP",
        "HTTP",
        "SNMP"
      ],
      "answer": 1
    },
    {
      "id": "networks-10",
      "question": "Which protocol is commonly used for secure remote shell access?",
      "options": [
        "FTP",
        "SSH",
        "Telnet only",
        "ARP"
      ],
      "answer": 1
    },
    {
      "id": "networks-11",
      "question": "Which OSI layer handles logical addressing and routing?",
      "options": [
        "Physical",
        "Data Link",
        "Network layer",
        "Presentation"
      ],
      "answer": 2
    },
    {
      "id": "networks-12",
      "question": "Which OSI layer handles end-to-end transport with TCP/UDP?",
      "options": [
        "Session",
        "Transport layer",
        "Network",
        "Physical"
      ],
      "answer": 1
    },
    {
      "id": "networks-13",
      "question": "How many bits are in an IPv4 address?",
      "options": [
        "16",
        "32",
        "64",
        "128"
      ],
      "answer": 1
    },
    {
      "id": "networks-14",
      "question": "How many bits are in an IPv6 address?",
      "options": [
        "32",
        "64",
        "128",
        "256"
      ],
      "answer": 2
    },
    {
      "id": "networks-15",
      "question": "Which notation expresses an IP prefix length such as /24?",
      "options": [
        "ASCII",
        "CIDR",
        "HTML",
        "MAC-only"
      ],
      "answer": 1
    },
    {
      "id": "networks-16",
      "question": "Which protocol reports network errors and supports ping?",
      "options": [
        "ICMP",
        "SMTP",
        "POP3",
        "TLS"
      ],
      "answer": 0
    },
    {
      "id": "networks-17",
      "question": "Which address identifies a network interface at the data-link layer on Ethernet?",
      "options": [
        "URL",
        "MAC address",
        "Port only",
        "Hostname only"
      ],
      "answer": 1
    },
    {
      "id": "networks-18",
      "question": "Which port is the default for HTTP?",
      "options": [
        "22",
        "53",
        "80",
        "443"
      ],
      "answer": 2
    },
    {
      "id": "networks-19",
      "question": "Which port is the default for HTTPS?",
      "options": [
        "21",
        "25",
        "110",
        "443"
      ],
      "answer": 3
    },
    {
      "id": "networks-20",
      "question": "Which command/tool is commonly used to test reachability using ICMP echo messages?",
      "options": [
        "ping",
        "compile",
        "grep",
        "mkdir"
      ],
      "answer": 0
    }
  ]
};
