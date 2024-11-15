const courses  = [
    {
        name: 'Automata and Computability',
        code: 'COMPSCI 2AC3',
        description: 'Finite state machines, regular languages, regular expressions, applications of regular languages, grammars, context-free languages, models of computation, computability and decidability. Three lectures, one tutorial (two hours); second term',
        prerequisites: 'COMPSCI 2LC3, 2C03',
        antirequisites: 'COMPSCI 2FA3, 2MJ3, SFWRENG 2FA3',
        units: '3.0',
        filter: 'required',
        prof: 'Ryszard Janicki',
        seats: '100/200'
    },
    {
        name: 'Data Structures and Algorithms',
        code: 'COMPSCI 2C03',
        description: 'Basic data structures: stacks, queues, hash tables, and binary trees; searching and sorting; graph representations and algorithms, including minimum spanning trees, traversals, shortest paths; introduction to algorithmic design strategies; correctness and performance analysis. Three lectures, one tutorial (one hour); first term',
        prerequisites: 'One of the following: COMPSCI 1DM3 or 2DM3, COMPSCI 1XC3 or 1XD3 or 1MD3 or MATH 1MP3, and registration in an Honours Computer Science program or in one of Mathematics and Computer Science, Economics and Computer Science, Arts & Sciences and Computer Science; COMPSCI 1DM3 with a result of at least B, and one of COMPSCI 1XC3 or 1XD3 or 1MD3 or MATH 1MP3 with a result of at least B',
        antirequisites: 'SFWRENG 2C03, COMPENG 3SM4',
        units: '3.0',
        filter: 'required',
        prof: 'Nick Moore',
        seats: '50/200'
    },
    {
        name: 'Databases',
        code: 'COMPSCI 2DB3',
        description: 'Data modelling, integrity constraints, principles and design of relational databases, relational algebra, SQL, query processing, transactions, concurrency control, recovery, security and data storage. Three lectures, one tutorial (one hour); second term',
        prerequisites: 'COMPSCI 2LC3 or COMPSCI 2DM3',
        antirequisites: ' COMPSCI 3DB3, 4DB3, SFWRENG 3DB3 , 3H03, 4M03, 4DB3',
        units: '3.0',
        filter: 'required',
        prof: 'Jelle Hellings',
        seats: '0/200'
    },
    {
        name: 'Computer Architecture',
        code: 'COMPSCI 2GA3',
        description: 'Introduction to logic gates, computer arithmetic, instruction-set architecture, assembly programming, translation of high-level languages into assembly. Computer system organization: datapath and control, pipelining, memory hierarchies, I/O systems; measures of performance. Three lectures, one tutorial, (one hour); first term',
        prerequisites: 'One of the following: COMPSCI 1XC3 and 1DM3 and registration in an Honours Computer Science program or in one of Mathematics and Computer Science, Economics and Computer Science, Arts & Sciences and Computer Science; COMPSCI 1XC3 and 1DM3, each with a result of at least B',
        antirequisites: 'COMPENG 3DR4, 4DM4, SFWRENG 2GA3, 3GA3',
        units: '3.0',
        filter: 'required',
        prof: 'Hans Boden',
        seats: '0/200'
    },
    {
        name: 'Logical Reasoning for Computer Science',
        code: 'COMPSCI 2LC3',
        description: 'Introduction to logic and proof techniques for practical reasoning: propositional logic, predicate logic, structural induction; rigorous proofs in discrete mathematics and programming. Three lectures, one tutorial (two hours); first term',
        prerequisites: 'One of the following: COMPSCI 1DM3, 1JC3 one of COMPSCI 1MD3, 1XC3, 1XD3, and registration in an Honours Computer Science program or in one of Mathematics and Computer Science, Economics and Computer Science, Arts & Sciences and Computer Science; COMPSCI 1DM3, 1JC3, and one of COMPSCI 1MD3, 1XC3, 1XD3, each with a result of at least B',
        antirequisites: 'COMPSCI 2DM3, SFWRENG 2DM3',
        units: '3.0',
        filter: 'required',
        prof: 'Ryszard Janicki',
        seats: '150/200'
    },
    {
        name: 'Introduction to Software Development',
        code: 'COMPSCI 2ME3',
        description: 'Classes and inheritance, class invariants, interface specifications; object-oriented design patterns; exception handling; tools for interface documentation, testing, program analysis; requirements documentation; quality attributes; development models. Three lectures one tutorial (two hours); first term',
        prerequisites: 'One of the following: COMPSCI 1XC3 or 1XD3, and registration in an Honours Computer Science program or in one of Mathematics and Computer Science, Economics and Computer Science, Arts & Sciences and Computer Science; COMPSCI 1DM3 and one of 1XC3 and 1XD3, each with a result of at least B',
        antirequisites: 'SFWRENG 2AA4, SFWRENG 3K04, MECHTRON 3K04',
        units: '3.0',
        filter: 'required',
        prof: 'Vincent Maccio',
        seats: '0/200'
    },
    {
        name: 'The Big Questions',
        code: 'ASTRON 2B03',
        description: 'Ultimate questions in modern science are surveyed with emphasis on physical sciences: origin of space-time, elements and structure in the cosmos (stars, planets, galaxies). Three lectures, one tutorial; one term',
        prerequisites: 'Registration in Level II or above',
        antirequisites: 'None',
        units: '3.0',
        filter: 'electives',
        prof: 'Robert Cockcroft',
        seats: '0/200'
    },
    {
        name: 'Calculus I',
        code: 'MATH 1X03',
        description: 'Algebraic, geometric and numeric approaches to calculus, development of mathematical thinking, intuition and theoretical foundations. Functions: limits, continuity, derivatives, applications. Antiderivative, definite integral, integration techniques. Three lectures, one tutorial; one term',
        prerequisites: 'Registration in Level I Mathematics and Statistics',
        antirequisites: 'ARTSSCI 1D06 A/B, MATH 1A03, 1LS3, 1N03, 1Z04, 1ZA3 Not open to students with credit or registration in ISCI 1A24 A/B.',
        units: '3.0',
        filter: 'required',
        prof: 'Caroline Junkins',
        seats: '0/200'
    },
    {
        name: 'Calculus II',
        code: 'MATH 1XX3',
        description: 'For students in mathematics and statistics. Additional techniques of integration, applications of definite integrals, differential equations, polar coordinates, parametrized curves. Sequences, infinite series, power series. Partial derivatives, double integrals. Three lectures, one tutorial; one term',
        prerequisites: 'MATH 1X03 and registration in Level I Mathematics and Statistics',
        antirequisites: 'ARTSSCI 1D06 A/B, MATH 1AA3, 1LT3, 1NN3, 1ZB3, 1ZZ5. Not open to students with credit or registration in ISCI 1A24 A/B.',
        units: '3.0',
        filter: 'required',
        prof: 'Aaron Childs',
        seats: '10/200'
    },
    {
        name: 'Discrete Mathematics',
        code: 'COMPSCI 1DM3',
        description: 'Sets, functions, relations, trees and graphs; counting principles, modular arithmetic, discrete probabilities; induction and recursion, recurrence relations. Three lectures, one tutorial (two hours), second term',
        prerequisites: 'One of the following: Registration in Computer Science 1 and one of MATH 1B03, 1ZC3; One of MATH 1B03, 1ZC3 with a result of at least B',
        antirequisites: 'COMPSCI 1FC3, 2DM3, SFWRENG 2DM3, 2E03, 2F03',
        units: '3.0',
        filter: 'required',
        prof: 'Christopher Anand',
        seats: '30/200'
    },
    {
        name: 'Principles of Programming Languages',
        code: 'COMPSCI 3MI3',
        description: 'Principles of definition of and reasoning about programming languages and domain-specific languages; use of semantics for interpretation and in program analyses for correctness, security and efficiency. Three lectures; one tutorial (one hour); first term',
        prerequisites: 'COMPSCI 2C03, and COMPSCI 2LC3 or 2DM3, and COMPSCI 2AC3 or 2FA3, and COMPSCI 2ME3',
        antirequisites: 'None',
        units: '3.0',
        filter: 'required',
        prof: 'Jacques Carette',
        seats: '100/200'
        
    },
    {
        name: 'Algorithms and Complexity',
        code: 'COMPSCI 3AC3',
        description: 'Basic computability models; the Church-Turing thesis, complexity classes; P versus NP; NP-completeness, reduction techniques; algorithmic design strategies; flows, distributed algorithms, advanced techniques such as randomization. Three lectures, one tutorial (one hour), second term',
        prerequisites: 'COMPSCI 2C03 or SFWRENG 2C03, COMPSCI 2AC3 or 2FA3 or SFWRENG 2FA3',
        antirequisites: 'None',
        units: '3.0',
        filter: 'required',
        prof: 'Ryszard Janicki',
        seats: '120/200'
    },
    {
        name: 'Music Therapy',
        code: 'MUSIC 2MT3',
        description: 'An introduction to the practice of music therapy, with an emphasis on the diversity of music therapy applications such as: bio-medical, psychoanalytical, behavioural and rehabilitation. Three hours (lecture, web module); one term',
        prerequisites: 'Registration in Level II or above',
        antirequisites: 'None',
        units: '3.0',
        filter: 'electives',
        prof: 'Rachael Flannerty',
        seats: '20/200'
    },
];

export default courses;
