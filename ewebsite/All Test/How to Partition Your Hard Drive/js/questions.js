// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Can we shrink the volume of the drive larger than available space?",
    answer: "No",
    options: [
      "Yes, Using a command line",
      "Maybe",
      "No",
      "None of the above"
    ]
  },
    {
    numb: 2,
    question: "Why do we have to divide the hard drive into multiple logical units?",
    answer: "To separate the files and avoid data corruption",
    options: [
      "Allows the use of different File system to be installed",
      "To separate the files and avoid data corruption",
      "Improves access time for data and application located on the same partition",
      "You need to create a segment so that the operating system knows what part of the hard drive it can use"
    ]
  },
    {
    numb: 3,
    question: "It is a process that reduces the amount of fragmentation.",
    answer: "Defragmentation",
    options: [
      "Fragmentation",
      "Mass storage",
      "Files",
      "Defragmentation"
    ]
  },
    {
    numb: 4,
    question: "It is commonly called defragging.",
    answer: "Defragmentation ",
    options: [
      "Defragmenting",
      "Defragmentation ",
      "Fragmentation",
      "Files"
    ]
  },
    {
    numb: 5,
    question: "How many megabytes are there in a gigabyte?",
    answer: "1000 megabytes",
    options: [
      "1000 megabytes",
      "10 Gigabytes",
      "20 megabytes",
      "1 megabytes"
    ]
  },
  {
    numb: 6,
    question: "What do you call the process of dividing your hard drives into logical units?",
    answer: "Disk Partitioning",
    options: [
      "Disk Partitioning",
      "Segments",
      "Configure",
      "Division"
    ]
  },
  {
    numb: 7,
    question: "In what tool can you find Disk Management?",
    answer: "Computer Management Tool",
    options: [
      "Disk utilit",
      "Computer Management Tool",
      "Disk clean up tool",
      "Disk Compression tool"
    ]
  },
  {
    numb: 8,
    question: "What do you call the drive that you are not allowed to altered?",
    answer: "System Reserved",
    options: [
      "Drive E",
      "System Reserved",
      "Hard disk drive",
      "CD drive"
    ]
  },
  {
    numb: 9,
    question: "Is there a fix or permanent letter for each partition in your hard drives?",
    answer: "No",
    options: [
      "No",
      "Yes",
      "Maybe",
      "None of the above"
    ]
  },
  {
    numb: 10,
    question: "What should be the file system setting if we format the new volume?",
    answer: "NTFS",
    options: [
      "Format",
      "Create megabytes",
      "Format the volume with the default settings",
      "NTFS"
    ]
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];