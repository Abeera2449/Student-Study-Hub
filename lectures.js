window.LECTURES = {
  "html": [
    {
      "title": "Lecture 1 — HTML Foundations & Document Structure",
      "summary": "How an HTML page is structured and how browsers interpret markup.",
      "objectives": [
        "Understand <!DOCTYPE html>, html, head and body",
        "Use headings and paragraphs correctly",
        "Understand nesting and indentation",
        "Add useful metadata"
      ],
      "details": [
        "HTML (HyperText Markup Language) gives a web page its structure and meaning. It does not primarily control visual styling; CSS handles presentation and JavaScript handles behavior.",
        "A standard document begins with <!DOCTYPE html>, followed by the <html> element. The <head> contains metadata such as charset, viewport settings and the page title. The <body> contains the visible page content.",
        "Use a logical heading hierarchy. Start with a clear <h1> for the page topic, then use <h2>, <h3> and lower levels for subsections. This helps readers, search engines and assistive technologies understand the page."
      ],
      "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Student Study Hub</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n  <p>Learn HTML step by step.</p>\n</body>\n</html>",
      "practice": "Create a complete HTML page with a title, one h1, two h2 headings and at least three paragraphs."
    },
    {
      "title": "Lecture 2 — Links, Images, Lists & Semantic Layout",
      "summary": "Build useful page content and organize it with meaningful HTML elements.",
      "objectives": [
        "Create links with <a>",
        "Add images with useful alt text",
        "Create ordered and unordered lists",
        "Use semantic layout elements"
      ],
      "details": [
        "The anchor element <a> creates links using the href attribute. Images use <img> with src for the file path and alt for a useful text alternative.",
        "Use <ul> when order does not matter and <ol> when sequence matters. Each item is written with <li>.",
        "Semantic elements such as <header>, <nav>, <main>, <section>, <article> and <footer> describe the role of content. Prefer them over generic <div> elements when a semantic element fits."
      ],
      "example": "<header>\n  <nav><a href=\"notes.html\">Notes</a></nav>\n</header>\n<main>\n  <section>\n    <h2>Subjects</h2>\n    <ul><li>HTML</li><li>CSS</li></ul>\n    <img src=\"student.jpg\" alt=\"Student studying at a desk\">\n  </section>\n</main>",
      "practice": "Build a small resources section containing two links, one image with alt text, and a list of three subjects."
    },
    {
      "title": "Lecture 3 — Forms, Tables & Accessibility",
      "summary": "Collect user input and present data while keeping the page accessible.",
      "objectives": [
        "Build a form",
        "Connect labels with inputs",
        "Use common input types",
        "Create meaningful tables"
      ],
      "details": [
        "Forms use <form> together with controls such as <input>, <select>, <textarea> and <button>. Every important input should have a visible <label>.",
        "Useful input types include text, email, password, number, date, checkbox and radio. Browser validation can be enabled with attributes such as required, minlength and pattern.",
        "Tables should represent tabular data, not layout. Use <table>, <thead>, <tbody>, <tr>, <th> and <td>. Accessibility improves when headings, labels, alt text and native controls are used correctly."
      ],
      "example": "<form>\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"email\" required>\n  <button type=\"submit\">Submit</button>\n</form>",
      "practice": "Create a registration form with name, email and password, then add required validation."
    }
  ],
  "css": [
    {
      "title": "Lecture 1 — Selectors, Cascade & Box Model",
      "summary": "Understand how CSS selects elements and how sizing works.",
      "objectives": [
        "Use class, id and element selectors",
        "Understand specificity",
        "Understand padding, border and margin",
        "Use box-sizing"
      ],
      "details": [
        "A CSS rule combines a selector with declarations. Selectors decide which elements receive the style.",
        "When multiple rules affect the same property, the cascade considers importance, specificity and source order. Classes are generally more specific than element selectors, while ids are usually more specific than classes.",
        "Every element uses the box model: content, padding, border and margin. box-sizing: border-box makes width and height easier to reason about because padding and border are included in the declared size."
      ],
      "example": "* { box-sizing: border-box; }\n.card {\n  width: 100%;\n  max-width: 420px;\n  padding: 24px;\n  border: 1px solid #ddd;\n  margin: 20px auto;\n}",
      "practice": "Create a centered card with padding, border, rounded corners and a max-width."
    },
    {
      "title": "Lecture 2 — Flexbox, Grid & Responsive Design",
      "summary": "Create layouts that adapt across desktop, tablet and mobile screens.",
      "objectives": [
        "Use display:flex",
        "Use CSS Grid",
        "Use gap",
        "Write media queries"
      ],
      "details": [
        "Flexbox is useful for one-dimensional layouts such as a navigation row or a group of buttons. Grid is useful when rows and columns both matter.",
        "Properties such as justify-content, align-items and gap control spacing and alignment in flex layouts. Grid can use repeat(), minmax() and auto-fit for responsive card systems.",
        "Responsive design should begin with flexible widths and then use media queries for breakpoint-specific changes. Avoid hard-coded widths when content should adapt."
      ],
      "example": ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 700px) {\n  .hero { grid-template-columns: 1fr; }\n}",
      "practice": "Create a three-card desktop grid that automatically becomes one column on a small screen."
    },
    {
      "title": "Lecture 3 — Transitions, Animations & UI Polish",
      "summary": "Add professional movement and interaction to cards, buttons and sections.",
      "objectives": [
        "Use transition",
        "Use transform",
        "Create keyframes",
        "Respect reduced motion"
      ],
      "details": [
        "Transitions animate property changes between states such as normal and hover. They work well for transform, opacity, color and box-shadow.",
        "Keyframes are useful for entrance effects or repeated motion. Keep animations purposeful and avoid excessive movement that distracts from learning content.",
        "For accessibility, use prefers-reduced-motion so users who reduce motion in their operating system are not forced to see animations."
      ],
      "example": ".card {\n  transition: transform .25s ease, box-shadow .25s ease;\n}\n.card:hover {\n  transform: translateY(-8px) scale(1.01);\n}\n@keyframes fadeUp {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: none; }\n}",
      "practice": "Add a hover-lift animation to a card and a fade-up entrance effect to a section."
    }
  ],
  "javascript": [
    {
      "title": "Lecture 1 — Variables, Types, Conditions & Functions",
      "summary": "Core JavaScript syntax used in interactive web pages.",
      "objectives": [
        "Use let and const",
        "Understand common data types",
        "Use if/else",
        "Write functions"
      ],
      "details": [
        "Use const when a binding should not be reassigned and let when reassignment is required. Common types include string, number, boolean, null, undefined and object.",
        "Conditions use if, else if and else. Prefer strict equality (===) when comparing values because it avoids automatic type coercion.",
        "Functions package reusable logic. A function can accept parameters and return a value. Arrow functions offer a concise alternative syntax."
      ],
      "example": "const subject = \"JavaScript\";\nlet score = 72;\nfunction grade(value) {\n  if (value >= 80) return \"A\";\n  if (value >= 60) return \"B\";\n  return \"Needs Improvement\";\n}\nconsole.log(grade(score));",
      "practice": "Write a function that receives marks and returns Pass or Fail."
    },
    {
      "title": "Lecture 2 — Arrays, Objects & Useful Methods",
      "summary": "Store and transform collections of structured data.",
      "objectives": [
        "Create arrays",
        "Use map, filter and find",
        "Create objects",
        "Access object properties"
      ],
      "details": [
        "Arrays store ordered values. Methods such as map(), filter(), find() and reduce() make common transformations easier.",
        "Objects store named key-value pairs and are useful for entities such as students, courses and quiz questions.",
        "Arrays of objects are common in real applications because they combine ordered collections with structured records."
      ],
      "example": "const students = [\n  { name: \"Ali\", score: 72 },\n  { name: \"Sara\", score: 88 }\n];\nconst passed = students.filter(s => s.score >= 50);",
      "practice": "Create an array of three subjects with names and scores, then filter scores above 70."
    },
    {
      "title": "Lecture 3 — DOM, Events & Async JavaScript",
      "summary": "Make a web page interactive and load data dynamically.",
      "objectives": [
        "Select DOM elements",
        "Handle events",
        "Change page content",
        "Understand fetch and async/await"
      ],
      "details": [
        "The DOM represents HTML as objects. document.querySelector() returns the first element matching a CSS selector.",
        "Use addEventListener() to respond to clicks, input and submit events. textContent safely changes plain text, while classList helps add and remove CSS classes.",
        "Asynchronous JavaScript is used when waiting for operations such as network requests. fetch() returns a Promise, and async/await provides readable syntax for working with promises."
      ],
      "example": "const button = document.querySelector(\"#start\");\nbutton.addEventListener(\"click\", () => {\n  document.querySelector(\"#message\").textContent = \"Quiz started!\";\n});\n\nasync function loadData() {\n  const response = await fetch(\"data.json\");\n  const data = await response.json();\n  console.log(data);\n}",
      "practice": "Create a button that changes a message on click, then write an async function that loads JSON."
    }
  ],
  "python": [
    {
      "title": "Lecture 1 — Variables, Types, Input & Output",
      "summary": "Write basic Python programs and work with user input.",
      "objectives": [
        "Create variables",
        "Use print and input",
        "Convert values",
        "Recognize core data types"
      ],
      "details": [
        "Python is dynamically typed, so variable types are inferred from assigned values. Common types include int, float, str, bool, list, tuple, set and dict.",
        "input() always returns text. Convert numeric input with int() or float() when arithmetic is needed.",
        "Python uses indentation to define blocks, so consistent indentation is part of the language syntax."
      ],
      "example": "name = input(\"Name: \")\nmarks = int(input(\"Marks: \"))\nprint(name, marks)",
      "practice": "Ask the user for two numbers and print their sum, difference and product."
    },
    {
      "title": "Lecture 2 — Conditions, Loops & Collections",
      "summary": "Control program flow and organize groups of values.",
      "objectives": [
        "Use if/elif/else",
        "Use for and while",
        "Work with lists",
        "Use dictionaries"
      ],
      "details": [
        "if, elif and else handle decisions. for loops iterate over sequences while while loops repeat while a condition remains true.",
        "Lists are ordered and mutable. Tuples are ordered and immutable. Sets store unique items. Dictionaries map keys to values.",
        "Choose the data structure that best represents the problem rather than using lists for everything."
      ],
      "example": "student = {\"name\": \"Abeera\", \"score\": 90}\nfor key, value in student.items():\n    print(key, value)",
      "practice": "Create a dictionary containing a student's name and three subject marks, then print the average."
    },
    {
      "title": "Lecture 3 — Functions, Exceptions & OOP",
      "summary": "Write reusable code and model real entities with classes.",
      "objectives": [
        "Define functions",
        "Return values",
        "Handle exceptions",
        "Create classes and objects"
      ],
      "details": [
        "Functions are defined with def. Parameters receive values and return sends a result back to the caller.",
        "try/except handles expected runtime errors such as invalid input or division by zero.",
        "A class is a blueprint for objects. __init__ initializes object state, while instance methods define behavior."
      ],
      "example": "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def passed(self):\n        return self.score >= 50",
      "practice": "Create a Course class with title and duration, then add a method that prints course details."
    }
  ],
  "cpp": [
    {
      "title": "Lecture 1 — Program Structure, Variables & I/O",
      "summary": "Understand a basic C++ program and typed variables.",
      "objectives": [
        "Use iostream",
        "Write main",
        "Declare variables",
        "Use cin and cout"
      ],
      "details": [
        "C++ is a compiled, statically typed language. Statements usually end with semicolons.",
        "The main() function is the standard entry point. std::cout prints output and std::cin reads input.",
        "Common types include int, double, char, bool and std::string."
      ],
      "example": "#include <iostream>\nusing namespace std;\nint main() {\n  int age;\n  cin >> age;\n  cout << \"Age: \" << age;\n  return 0;\n}",
      "practice": "Read two integers and print their sum."
    },
    {
      "title": "Lecture 2 — Conditions, Loops, Functions & Vectors",
      "summary": "Control execution and organize reusable C++ code.",
      "objectives": [
        "Use if/else",
        "Use loops",
        "Define functions",
        "Use std::vector"
      ],
      "details": [
        "if/else handles general conditions and switch handles discrete cases. for and while provide repetition.",
        "Functions use explicit parameter and return types. std::vector is a resizable sequence from the standard library.",
        "Range-based for loops provide a concise way to iterate through containers."
      ],
      "example": "int total(const vector<int>& values) {\n  int sum = 0;\n  for (int x : values) sum += x;\n  return sum;\n}",
      "practice": "Write a function that receives a vector of marks and returns the average."
    },
    {
      "title": "Lecture 3 — Pointers, References, Classes & STL",
      "summary": "Understand memory references and object-oriented C++.",
      "objectives": [
        "Use pointers",
        "Use references",
        "Create classes",
        "Use STL algorithms"
      ],
      "details": [
        "A pointer stores a memory address. & obtains an address and * dereferences a pointer. A reference is an alias for an existing object.",
        "Classes combine data and methods. public and private control access, while constructors initialize objects.",
        "The STL provides containers and algorithms such as vector, map, set and sort."
      ],
      "example": "class Student {\npublic:\n  string name;\n  Student(string n) : name(n) {}\n};",
      "practice": "Create a Student class with name and marks and a method that returns Pass or Fail."
    }
  ],
  "java": [
    {
      "title": "Lecture 1 — Java Structure, Types & Methods",
      "summary": "Understand Java source files, JVM execution and typed variables.",
      "objectives": [
        "Understand JVM",
        "Write main",
        "Use primitive types",
        "Create methods"
      ],
      "details": [
        "Java source is compiled to bytecode that runs on the Java Virtual Machine (JVM).",
        "A typical program begins in public static void main(String[] args). Primitive types include int, double, char and boolean, while String is a class.",
        "Methods define reusable behavior and have explicit parameter and return types."
      ],
      "example": "public class Main {\n  static boolean passed(int score) {\n    return score >= 50;\n  }\n  public static void main(String[] args) {\n    System.out.println(passed(75));\n  }\n}",
      "practice": "Write a method that returns the highest of three integers."
    },
    {
      "title": "Lecture 2 — Classes, Objects, Constructors & Inheritance",
      "summary": "Model data and reuse behavior with object-oriented Java.",
      "objectives": [
        "Create classes",
        "Use constructors",
        "Use this",
        "Understand extends and overriding"
      ],
      "details": [
        "A class defines fields and methods. An object is an instance of that class.",
        "Constructors initialize objects and have the same name as the class. this refers to the current object.",
        "A class can extend another class and override inherited methods to provide specialized behavior."
      ],
      "example": "class Student {\n  String name;\n  int score;\n  Student(String name, int score) {\n    this.name = name;\n    this.score = score;\n  }\n}",
      "practice": "Create a Course class with title, teacher and creditHours."
    },
    {
      "title": "Lecture 3 — Interfaces, Collections & Exceptions",
      "summary": "Use contracts, dynamic collections and error handling.",
      "objectives": [
        "Use interfaces",
        "Use ArrayList",
        "Use HashMap",
        "Use try/catch"
      ],
      "details": [
        "Interfaces define behavior contracts. A class uses implements to promise that it provides the required methods.",
        "ArrayList stores a resizable ordered sequence, while HashMap stores key-value pairs.",
        "Exceptions are handled with try/catch/finally. throw explicitly throws an exception."
      ],
      "example": "ArrayList<String> subjects = new ArrayList<>();\nsubjects.add(\"Java\");\nsubjects.add(\"Databases\");",
      "practice": "Store three subject marks in a HashMap and print each subject with its mark."
    }
  ],
  "databases": [
    {
      "title": "Lecture 1 — Relational Database Fundamentals",
      "summary": "Understand tables, rows, columns, schemas and relationships.",
      "objectives": [
        "Define database",
        "Understand tables",
        "Understand primary keys",
        "Understand foreign keys"
      ],
      "details": [
        "A relational database organizes data into tables. Each row represents a record and each column represents an attribute.",
        "A primary key uniquely identifies a row. A foreign key references another table and creates a relationship.",
        "A schema describes the database structure including tables, columns, types and constraints."
      ],
      "example": "STUDENT(StudentID, Name, Email)\nCOURSE(CourseID, Title)\nENROLLMENT(StudentID, CourseID, Grade)",
      "practice": "Design Student, Course and Enrollment tables for a university system."
    },
    {
      "title": "Lecture 2 — SQL Queries, Filtering & Joins",
      "summary": "Retrieve and combine relational data.",
      "objectives": [
        "Use SELECT",
        "Use WHERE",
        "Use ORDER BY",
        "Use INNER JOIN and LEFT JOIN"
      ],
      "details": [
        "SELECT chooses columns, FROM chooses the table and WHERE filters rows. ORDER BY sorts results.",
        "JOIN combines related rows from multiple tables. INNER JOIN keeps matching rows, while LEFT JOIN preserves every row from the left table.",
        "Use clear join conditions based on keys to avoid unintended Cartesian products."
      ],
      "example": "SELECT Student.Name, Course.Title\nFROM Enrollment\nJOIN Student ON Student.StudentID = Enrollment.StudentID\nJOIN Course ON Course.CourseID = Enrollment.CourseID;",
      "practice": "Write a query that lists students and the titles of courses they are enrolled in."
    },
    {
      "title": "Lecture 3 — Aggregation, Normalization & Transactions",
      "summary": "Summarize data, reduce redundancy and keep updates reliable.",
      "objectives": [
        "Use COUNT and AVG",
        "Use GROUP BY",
        "Understand normalization",
        "Understand COMMIT and ROLLBACK"
      ],
      "details": [
        "Aggregate functions such as COUNT, SUM and AVG summarize groups of rows. GROUP BY forms the groups.",
        "Normalization reduces unnecessary duplication and update anomalies by separating facts into appropriate related tables.",
        "Transactions group multiple changes into one logical operation. COMMIT saves changes and ROLLBACK cancels uncommitted changes."
      ],
      "example": "SELECT CourseID, AVG(Grade)\nFROM Enrollment\nGROUP BY CourseID;",
      "practice": "Explain why a student's name should not be repeated in every enrollment record when a Student table already stores it."
    }
  ],
  "ai": [
    {
      "title": "Lecture 1 — AI Foundations & Intelligent Agents",
      "summary": "Understand what AI systems do and how agents interact with environments.",
      "objectives": [
        "Define AI",
        "Understand agents",
        "Understand states and actions",
        "Distinguish narrow AI from general AI"
      ],
      "details": [
        "Artificial Intelligence studies systems that perform tasks associated with intelligent behavior such as reasoning, planning, perception and learning.",
        "An agent perceives an environment and takes actions. A rational agent chooses actions expected to achieve its goals based on available information.",
        "Most deployed AI today is narrow AI designed for particular task families."
      ],
      "example": "Percepts → Agent → Actions → Environment",
      "practice": "Describe the sensors, actions and goal of a robot vacuum."
    },
    {
      "title": "Lecture 2 — Search, Heuristics & Machine Learning",
      "summary": "Explore problem-solving search and basic ML categories.",
      "objectives": [
        "Compare BFS and DFS",
        "Understand heuristics",
        "Understand A*",
        "Differentiate supervised and unsupervised learning"
      ],
      "details": [
        "Search models a problem with states, actions, a start state and goals. BFS explores level by level while DFS explores one branch deeply before backtracking.",
        "A heuristic estimates how promising a state is. A* combines path cost g(n) with heuristic estimate h(n).",
        "Supervised learning uses labeled examples. Classification predicts categories and regression predicts continuous values. Unsupervised learning discovers structure such as clusters."
      ],
      "example": "A*: f(n) = g(n) + h(n)\nClassification: spam vs not spam\nRegression: house price",
      "practice": "Classify five AI tasks as classification, regression, clustering or search."
    },
    {
      "title": "Lecture 3 — Neural Networks, Evaluation & Overfitting",
      "summary": "Understand training, common metrics and generalization.",
      "objectives": [
        "Understand neural network layers",
        "Understand backpropagation conceptually",
        "Use precision and recall",
        "Recognize overfitting"
      ],
      "details": [
        "Neural networks transform inputs through weighted layers and activation functions. Training adjusts parameters to reduce a loss function.",
        "Backpropagation computes gradients that optimization algorithms use to update parameters.",
        "Overfitting happens when training performance is strong but performance on unseen data is weak. Precision, recall and F1 can be more informative than accuracy for imbalanced classes."
      ],
      "example": "Precision = TP / (TP + FP)\nRecall = TP / (TP + FN)",
      "practice": "Explain whether precision or recall is more important when missing a positive case is very costly."
    }
  ],
  "networks": [
    {
      "title": "Lecture 1 — Network Models, Devices & Encapsulation",
      "summary": "Understand layered networking and the role of switches and routers.",
      "objectives": [
        "Understand OSI/TCP-IP idea",
        "Understand encapsulation",
        "Differentiate router and switch",
        "Map common protocols to layers"
      ],
      "details": [
        "Layered models divide networking responsibilities so technologies can evolve independently. The OSI model has seven conceptual layers; TCP/IP groups them into fewer practical layers.",
        "As data moves down the stack, each layer adds control information. This is called encapsulation.",
        "A switch commonly forwards Ethernet frames within a LAN, while a router forwards IP packets between networks."
      ],
      "example": "Application → Transport → Internet/Network → Link → Physical",
      "practice": "Place HTTP, TCP, IP and Ethernet into their appropriate layers."
    },
    {
      "title": "Lecture 2 — IP Addressing, TCP, UDP & Ports",
      "summary": "Understand addressing and end-to-end transport.",
      "objectives": [
        "Understand IPv4/IPv6",
        "Read CIDR notation",
        "Compare TCP and UDP",
        "Understand ports"
      ],
      "details": [
        "IPv4 uses 32-bit addresses and IPv6 uses 128-bit addresses. CIDR notation such as /24 indicates the number of network-prefix bits.",
        "TCP is connection-oriented and reliable, while UDP is connectionless with lower overhead and fewer delivery guarantees.",
        "Port numbers identify application endpoints on a host, allowing multiple services to share one IP address."
      ],
      "example": "HTTP: port 80\nHTTPS: port 443\nIPv4 example: 192.168.1.10/24",
      "practice": "Explain what /24 means and give one use case for TCP and one for UDP."
    },
    {
      "title": "Lecture 3 — DNS, HTTP/HTTPS, DHCP & Troubleshooting",
      "summary": "Understand everyday network services and basic diagnosis.",
      "objectives": [
        "Understand DNS",
        "Understand HTTP/HTTPS",
        "Understand DHCP",
        "Use ping conceptually"
      ],
      "details": [
        "DNS resolves domain names to records such as IP addresses. DHCP automatically supplies network configuration such as IP address, gateway and DNS server.",
        "HTTP transfers web resources with requests and responses. HTTPS protects HTTP traffic using TLS.",
        "ping checks reachability with ICMP echo messages, while traceroute/tracert helps reveal the route toward a destination."
      ],
      "example": "Browser → DNS lookup → TCP/TLS connection → HTTP request → Response",
      "practice": "Describe what happens at a high level after a user enters a website address into a browser."
    }
  ]
};
