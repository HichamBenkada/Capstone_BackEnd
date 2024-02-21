//books data seed
//data are from
// https://www.goodreads.com/

//collection database:
const data = {
  users: [
    {
      username: "user1",
      email: "user1@example.com",
      password: "password123",
    },
    {
      username: "user2",
      email: "user2@example.com",
      password: "password234",
    },
    {
      username: "user3",
      email: "user3@example.com",
      password: "password3456",
    },
    {
      username: "user4",
      email: "user4@example.com",
      password: "password456",
    },
    {
      username: "user5",
      email: "user5@example.com",
      password: "password557",
    },
    {
      username: "user6",
      email: "user6@example.com",
      password: "password678",
    },
    {
      username: "user7",
      email: "user7@example.com",
      password: "password789",
    },
    {
      username: "user8",
      email: "user8@example.com",
      password: "password890",
    },
    {
      username: "user9",
      email: "user9@example.com",
      password: "password901",
    },
    {
      username: "user10",
      email: "user10@example.com",
      password: "password902",
    },
    {
      username: "user11",
      email: "user11@example.com",
      password: "password903",
    },
    {
      username: "user12",
      email: "user12@example.com",
      password: "password904",
    },
    {
      username: "user13",
      email: "user13@example.com",
      password: "password905",
    },
    {
      username: "user14",
      email: "user14@example.com",
      password: "password906",
    },
    {
      username: "user15",
      email: "user15@example.com",
      password: "password907",
    },
    {
      username: "user16",
      email: "user16@example.com",
      password: "password908",
    },
    {
      username: "user17",
      email: "user17@example.com",
      password: "password909",
    },
    {
      username: "user18",
      email: "user18@example.com",
      password: "password911",
    },
    {
      username: "user19",
      email: "user19@example.com",
      password: "password912",
    },
    {
      username: "user20",
      email: "user20@example.com",
      password: "password913",
    },
  ],
  books: [
    {
      userId: 1,
      title: "Tomorrow, and Tomorrow,and Tomorrow",
      author: "Gabrielle Zevin",
      category: "Fiction",
      imageURL:
        " https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636978687l/58784475._SY475_.jpg",
      description:
        "In this gripping novel, two friends navigate the realms of video game design, their collaboration leading to fame, joy, tragedy, duplicity, and a form of immortality. Sam and Sadie, childhood intimates, launch their legendary partnership at Harvard, creating a blockbuster game before even graduating. As their success soars, spanning thirty years from Cambridge to Venice Beach, they grapple with creative ambitions, heart betrayals, and the complex facets of identity, disability, and connection. Gabrielle Zevin's Tomorrow, and Tomorrow, and Tomorrow is a unique love story that explores the redemptive power of play in a dazzling narrative.",
    },
    {
      userId: 2,
      title: "Notes on an Execution",
      author: "Danya Kukafka",
      category: "Fiction",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631888297i/57773248.jpg",
      description:
        "In the final twelve hours before Ansel Packer's scheduled execution, a literary suspense unfolds, deconstructing the tale of a serial killer on death row. The narrative, primarily told through the perspectives of the women in his life—a desperate mother, an inseparable twin sister, and a dedicated homicide detective—reveals Ansel's dark past and explores the tragic consequences of choices made, as the looming execution forces each woman to confront the fissures left in the wake of his chilling crimes.",
    },
    {
      userId: 3,
      title: "The Maid",
      author: "Nita Prose",
      category: "Mystery",
      imageURL:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643228739l/55196813.jpg",
      description:
        "Toronto author Nita Prose notches her first Goodreads Choice Award with her debut novel, a classic locked-room mystery concerning wealthy dead people and hotel sanitation protocol. The Maid features whodunit writing with real heart, and an author with a perfect last name. Bonus trivia: Florence Pugh is in line for the title role in the upcoming film adaptation.",
    },
    {
      userId: 2,
      title: "Hidden Pictures",
      author: "Jason Rekulak",
      category: "Horror",
      imageURL:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1635260162l/58724923.jpg",
      description:
        "Jason Rekulak’s innovative book features a nanny fresh from rehab, her young ward Teddy, his quickly improving drawing skills, and a kinda-maybe supernatural entity in the woods. Teddy’s good, all right. Scary good. This is the first Goodreads Choice Award for Rekulak, who formerly ran his own indie press in Philadelphia.",
    },
    {
      userId: 3,
      title: "Our Wives Under the Sea",
      author: "Julia Armfield",
      category: "Horror",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636047905i/58724816.jpg",
      description:
        "Leah is changed. Months earlier, she left for a routine expedition, only this time her submarine sank to the sea floor. When she finally surfaces and returns home, her wife Miri knows that something is wrong. Barely eating and lost in her thoughts, Leah rotates between rooms in their apartment, running the taps morning and night. As Miri searches for answers, desperate to understand what happened below the water, she must face the possibility that the woman she loves is slipping from her grasp.",
    },
    {
      userId: 4,
      title: "Book Lovers",
      author: "Emily Henry",
      category: "Romance",
      imageURL: "<URL>",
      description:
        "Nora Stephens' life is books—she's read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and certainly not the sweetheart. Nora is only a heroine for her clients, sealing big deals as a ruthless literary agent and for her little sister Libby. Despite Libby's hopes for a transformative sisters' trip to Sunshine Falls, North Carolina, where Nora becomes the heroine of her own story, the reality involves constant encounters with Charlie Lastra, a brooding editor from the city. Unbeknownst to Nora, these repeated meetings challenge the carefully crafted stories both she and Charlie have written about themselves.",
    },
    {
      userId: 1,
      title: "The Hobbit",
      author: "<NAME>",
      category: "Fiction",
      imageURL: "<URL>",
      description:
        "A hobbit is a humanoid creature that lives in the land of Westeros.",
    },
    {
      userId: 3,
      title: "I Am Quiet",
      author: "Andie Powers",
      category: "Children's",
      imageURL:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626175921l/57347345._SX318_.jpg",
      description:
        "Introverts of the world, unite! Quietly, please. Author Andie Powers and illustrator Betsy Petersen have created a beautiful and compassionate picture book experience with I Am Quiet, the story of young introvert Emile and his rather astounding imagination. Shy people may be quiet, but quiet people are not necessarily shy...",
    },
    {
      userId: 21,
      title: "Bad Gays",
      author: "Huw Lemmey",
      category: "History",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631844850i/59012057.jpg",
      description:
        "Too many popular histories seek to establish heroes, pioneers and martyrs but as Huw Lemmey and Ben Miller argue, the past is filled with queer people whose sexualities and dastardly deeds have been overlooked. We all remember Oscar Wilde, but who speaks for Bosie? What about those 'bad gays' whose unexemplary lives reveals more than we might expect?.",
    },
    {
      userId: 12,
      title: "Gallant",
      author: "V.E. Schwab, Manuel Sumberac",
      category: "Science Fiction",
      imageURL:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1635862579l/58064046.jpg",
      description:
        "With Gallant, versatile author V.E. Schwab (The Invisible Life of Addie LaRue) finds interesting new seams and shadows in the old Gothic tradition of courageous young women and spooky old manor houses. This is Schwab’s second Goodreads Choice Award win; she took the 2018 Science Fiction prize with her first adult sci-fi novel, Vengeful.",
    },
    {
      userId: 11,
      title: "And There Was Light",
      author: "Jon Meacham",
      category: "Fiction",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648682688i/60647674.jpg",
      description:
        "Jon Meacham, Pulitzer Prize-winning biographer and #1 New York Times best-selling author, provides an illuminating portrait of Abraham Lincoln. The book chronicles Lincoln's life and moral evolution, exploring how he confronted secession, threats to democracy, and the tragedy of slavery to expand the possibilities of America. In a time of division and political crisis, Meacham reflects on Lincoln's leadership, highlighting his moral antislavery commitment and his human qualities. The narrative spans Lincoln's birth on the Kentucky frontier in 1809 to his leadership during the Civil War and tragic assassination in 1865. Meacham delves into Lincoln's rise, self-education, loves, bouts of depression, political challenges, deepening faith, and persistent conviction against slavery. The book offers a nuanced perspective on Lincoln's imperfections while emphasizing his importance in shaping the nation's history. Lincoln's story serves as a lens to examine politics, the struggle for power in a democracy, the enduring presence of white supremacy, and the role of conscience in shaping pivotal events. Meacham concludes by urging readers to see Lincoln and themselves holistically, recognizing the potential for both progress and improvement.",
    },
    {
      userId: 10,
      title: "The First Days",
      author: "Rhiannon Frater",
      category: "Fiction",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388800064i/9648068.jpg",
      description:
        "In this gripping tale, Katie's ordinary drive to work takes a horrifying turn when a dead man attacks her in her car. Simultaneously, Jenni witnesses her husband devouring their toddler. Fate thrusts these two strangers together in a pickup, escaping the zombie-infested streets of their Texas city. As they embark on a cross-Texas journey to rescue Jenni's son, their bond deepens amid the chaos. Jenni discovers the satisfaction of dispatching zombies, while Katie unveils her tactical prowess. A chance encounter leads them to a fortified town besieged by the undead, where a small group fights to preserve civilization. In this seemingly apocalyptic world, survival becomes paramount, and the unlikely duo, along with others, face challenges, forge alliances, and even find love amidst the ruins of the old world.",
    },
    {
      userId: 5,
      title: "Fifty Shades of Grey",
      author: "E.L. James",
      category: "Fiction",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385207843i/10818853.jpg",
      description:
        "Literature student Anastasia Steele interviews entrepreneur Christian Grey and is drawn to his beauty, brilliance, and intimidation. Despite Grey's enigmatic nature, Ana desires closeness. Grey, captivated by her beauty, wit, and independence, expresses his desire on his terms. Thrilled yet hesitant about Grey's unconventional tastes, Ana embarks on a passionate affair, uncovering Grey's secrets and exploring her own dark desires. The Fifty Shades Trilogy is an erotic, amusing, and profoundly moving tale that promises to obsess, possess, and linger in the reader's memory forever.",
    },
    {
      userId: 2,
      title: "The You Beyond You",
      author: "Ramzi Najjar",
      category: "Nonfiction",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1608567984i/56360682.jpg",
      description:
        "The YOU beyond you, is a life-changing book that challenges our subjective perceptions and acquired beliefs, urging readers to meditate on the true reality around them. This enlightened guide dissolves bad habits, misleading beliefs, and accumulated energies, unlocking a new dimension of reality. Revealing the secrets of life's mechanics and operation within us and our environment, the book explores concepts and principles previously unheard of. A must-read for those seeking to experience the real dimension of existence and transcend societal norms, the book provides insights into breaking free from limitations and realizing true potentials. Offering a thorough exploration of how habits and knowledge embed in our life system, the guide empowers readers to consciously and unconsciously overcome limitations and flourish. Suitable for readers of all ages, it combines biological and psychological theories, real-life experiences, and extraordinary life approaches to transform lives. After reading, reflection on habits' impact on the body, overcoming limiting thoughts, attaining mental peace, self-improvement, understanding life's secrets, molding reality, and achieving spiritual awakening becomes possible.",
    },
  ],
  comments: [
    {
      content: "Comment 1",
    },
    {
      content: "Comment 2",
    },
    {
      content: "Comment 3",
    },
    {
      content: "Comment 4",
    },
    {
      content: "Comment 5",
    },
    {
      content: "Comment 6",
    },
    {
      content: "Comment 7",
    },
    {
      content: "Comment 8",
    },
    {
      content: "Comment 9",
    },
    {
      content: "Comment 10",
    },
    {
      content: "Comment 111",
    },
    {
      content: "Comment 122",
    },
    {
      content: "Comment 133",
    },
    {
      content: "Comment 144",
    },
    {
      content: "Comment 155",
    },
    {
      content: "Comment 166",
    },
    {
      content: "Comment 177",
    },
    {
      content: "Comment 188",
    },
    {
      content: "Comment 199",
    },
    {
      content: "Comment 200",
    },
  ],
};

module.exports = data;
