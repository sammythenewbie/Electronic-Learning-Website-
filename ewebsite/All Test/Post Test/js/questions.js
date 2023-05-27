// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "In a peer-to-peer network you can have a server.",
    answer: "True",
    options: [
      "True",
      "False",
    ]
  },
    {
    numb: 2,
    question: "Which of these statements is correct when referring to P2P networks?",
    answer: "All devices are equal",
    options: [
      "All devices are equal",
      "There is one central device",
      "All devices are equal but some are more equal than others",
      "All of the above"
    ]
  },
    {
    numb: 3,
    question: "If a single workstation goes down on a peer-to-peer network, the others are unaffected.",
    answer: "True",
    options: [
      "True",
      "False",
    ]
  },
    {
    numb: 4,
    question: "Which of the following is an advantage of a peer to peer network? ",
    answer: "Does not need an expensive server as individual workstations are used to access files.",
    options: [
      "Files and folders cannot be centrally backed up.",
      "Does not need an expensive server as individual workstations are used to access files.",
      "The server is expensive to purchase",
      "Network security can be carried out centrally."
    ]
  },
    {
    numb: 5,
    question: "Which best describes a peer to peer network?",
    answer: "Devices connected together - without a server",
    options: [
      "To peers connected together",
      "Devices connected together - without a server",
      "To devices connected together",
      "Two devices connected together - without a client"
    ]
  },
  {
    numb: 6,
    question: "You need to invest for separate computer when setting up a P2P network.",
    answer: "True",
    options: [
      "True",
      "False",
    ]
  },
  {
    numb: 7,
    question: "It is hard to share files in P2P network.",
    answer: "False",
    options: [
      "True",
      "False",
    ]
  },
  {
    numb: 8,
    question: "It allows two or more computer systems to connect and share resources without requiring a separate server or server software.",
    answer: "Peer to Peer",
    options: [
      "Remote configuration",
      "Topology",
      "RJ45",
      "Peer to Peer"
    ]
  },
  {
    numb: 9,
    question: "Peer-to-peer networks require less technical skill to set up and maintain.",
    answer: "False",
    options: [
      "True",
      "False",
    ]
  },
  {
    numb: 10,
    question: "In peer-to-peer networks, workstations connect to one another directly.",
    answer: "False",
    options: [
      "True",
      "False",
    ]
  },
  {
  numb: 1,
  question: "What we will use in disposing and storing sharp objects?",
  answer: "Care in handling",
  options: [
    "Scissors",
    "Cutter",
    "Pencil",
    "Care in handling"
  ]
},
  {
  numb: 2,
  question: "By holding a metal base for grounding and using anti-static wrist straps you can create __. ",
  answer: "ESD free environment",
  options: [
    "Anti-static container",
    "Electric shock",
    "ESD free environment",
    "Oleophobic coating"
  ]
},
  {
  numb: 3,
  question: "What equipment or protective wear we will use in step 8.",
  answer: "Rubber, gloves, eyeglasses etc.",
  options: [
    "Bags",
    "Slippers",
    "Pencil",
    "Rubber, gloves, eyeglasses etc."
  ]
},
  {
  numb: 4,
  question: "If ever there is unsafe or malfunctioning equipment, who will you going to approach?",
  answer: "Laboratory Personnel",
  options: [
    "Laboratory Personnel",
    "Doctor",
    "Engineer",
    "Construction Worker"
  ]
},
  {
  numb: 5,
  question: "What thus OSH stand for?",
  answer: "Occupational Health and Safety",
  options: [
    "Occupational High and System",
    "Occupational Health and System",
    "Occupational Health and Safety",
    "Operational Health and Safety"
  ]
},
{
  numb: 6,
  question: "These are example of protective gears or wears, except;.",
  answer: "Hair net",
  options: [
    "Sanitary mask",
    "Hair net",
    "eyeglass",
    "rubber gloves"
  ]
},
{
  numb: 7,
  question: "Why you should unplug your PC when working on the inside components?",
  answer: "To avoid getting electrocuted and damage the PC.",
  options: [
    "To make sure that the PC won’t not go",
    "To minimize electricity consumption",
    "To avoid getting electrocuted and damage the PC.",
    "Because it’s one of the rules in OHS that you must follow"
  ]
},
{
  numb: 8,
  question: "__ are not allowed inside computer laboratories because damage due to spills and particle dust. ",
  answer: "Foods and beverages",
  options: [
    "Cosmetic Product",
    "Creating Materials",
    "Foods and beverages",
    "Wet  mats and dusty slippers"
  ]
},
{
  numb: 9,
  question: "What do you call to the multidisciplinary aspects of health and safety in the workplace?",
  answer: "OSH",
  options: [
    "OHS",
    "OSH",
    "ICT",
    "CSS"
  ]
},
{
  numb: 10,
  question: "The most common emergency equipment’s present in building such a computer laboratory.",
  answer: "Fire Extinguisher",
  options: [
    "First Aid Kit",
    "Fire hydrant",
    "Fire Extinguisher",
    "Fire Exit "
  ]
},
{
  numb: 1,
  question: "It increase contrast in the areas where you paint and you can choose the brush, mode, and strength of the sharpening tool.",
  answer: "Sharpening Tool",
  options: [
    "Sharpening an Image",
    "Smart Sharpen",
    "Sharpening Tool",
    "Unsharp Mask"
  ]
},
  {
  numb: 2,
  question: "Click filter in the menu bar and point to sharpen.",
  answer: "Sharpening Filters",
  options: [
    "Sharpening Filters",
    "Curves",
    "Levels",
    "Gaussian Blur"
  ]
},
  {
  numb: 3,
  question: "What are the basic sharpening? ",
  answer: "All of the Above",
  options: [
    "Motion Blur",
    "Lens Blur",
    "Gaussian Blur",
    "All of the Above"
  ]
},
  {
  numb: 4,
  question: "What is Unsharp Mask?",
  answer: "It is widely used sharpening filter that Scans the image for areas where pixels whose tonal values differ by a certain quantity.",
  options: [
    "It is widely used sharpening filter that Scans the image for areas where pixels whose tonal values differ by a certain quantity.",
    "It works best when you want to remove small amounts of motion blur that resulted from camera movement.",
    "To control how much sharpening happens in your images shadow and highlights.",
    "To allows you to adjust the highlight."
  ]
},
  {
  numb: 5,
  question: "You can control how much sharpening you want in to your image.",
  answer: "Smart Sharpen",
  options: [
    "Level",
    "Sharpening an Image",
    "Motion Blur",
    "Smart Sharpen"
  ]
},
{
  numb: 6,
  question: "What are the two most important image editing tool in Photoshop?",
  answer: "Using Level and Curve Adjustment",
  options: [
    "Sharpening an image and Level",
    "Using Level and Curve Adjustment",
    "Lens Blur and Curve",
    "All of the Above"
  ]
},
{
  numb: 7,
  question: "It is best when you need to remove small amount of blur that come from the camera movement.",
  answer: "Motion Blur",
  options: [
    "Level",
    "Motion Blur",
    "Gaussian Blur",
    "Lens Blur"
  ]
},
{
  numb: 8,
  question: "What do you mean by curve?",
  answer: "A shape or a line which is smoothly drawn in a place having a bent or turns in it.",
  options: [
    "A curve or a line that the relationship is either logarithmic or exponential.",
    "A differential geometry",
    "A shape or a line which is smoothly drawn in a place having a bent or turns in it.",
    "A line that is not straight"
  ]
},
{
  numb: 9,
  question: "It is exaggerating the edge of an image by increasing the contrast.",
  answer: "Sharpening an Image",
  options: [
    "Sharpening an Image",
    "Level",
    "Curves",
    "All of the above"
  ]
},
{
  numb: 10,
  question: "It sharpens identically to the Unsharp Mask Filter.",
  answer: "Gaussian Blur",
  options: [
    "Lens Blur",
    "Motion Blur",
    "Smart Sharpen",
    "Gaussian Blur"
  ]
},
{
  numb: 1,
  question: "Enclose to the body of the HTML document.",
  answer: "body tag",
  options: [
    "body tag",
    "title tag",
    "head tag",
    "html tag"
  ]
},
  {
  numb: 2,
  question: "Can define an unordered list.",
  answer: "ul tag",
  options: [
    "anchor tag",
    "first heading tag",
    "ul tag",
    "ol tag"
  ]
},
  {
  numb: 3,
  question: "It define the document type.",
  answer: "<!DOCTYPE>",
  options: [
    "&lt;html&gt;	&lt;/html&gt;",
    "&lt;!DOCTYPE&gt;",
    "&lt;head&gt;	&lt;/head&gt;",
    "&lt;DOCTYPE&gt;"
  ]
},
  {
  numb: 4,
  question: "Which of the code below when paired with &__ is the code for Special character >.",
  answer: "gt;",
  options: [
    "nbsp;",
    "#47",
    "lt;",
    "gt;"
  ]
},
  {
  numb: 5,
  question: "Can a image be stretch into different size?",
  answer: "Yes",
  options: [
    "Yes",
    "No",
    "Maybe", 
    "No not at all"
  ]
},
{
  numb: 6,
  question: "Indicates the target of the anchor. ",
  answer: "href",
  options: [
    "Target",
    "Name",
    "href",
    "None of the above"
  ]
},
{
  numb: 7,
  question: "To resize the image to color the entire container.",
  answer: "Cover",
  options: [
    "Cover",
    "Percentage",
    "Length",
    "Auto"
  ]
},
{
  numb: 8,
  question: "The original image to its default size.",
  answer: "Auto",
  options: [
    "Length",
    "Auto",
    "Percentage", 
    "Cover"
  ]
},
{
  numb: 9,
  question: "Which of the code below when paired with &__ is the code for Special character ©.",
  answer: "copy;",
  options: [
    "copy;",
    "nbsp;",
    "amp;",
    "reg;"
  ]
},
{
  numb: 10,
  question: "Which of the code below when paired with &__ is the code for Special character <.",
  answer: "lt;",
  options: [
    "#47;",
    "nbsp;",
    "gt;",
    "lt;"
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