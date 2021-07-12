var library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  
  library.sort(function (a, b) {
    return b.libraryID - a.libraryID;
  });
  
  console.log(library);