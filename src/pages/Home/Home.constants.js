export const badges = [
  "All",
  "Market Research",
  "Competitor Information",
  "New Trends",
  "Import export",
];

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random title and description
export function generateRandomCard() {
  const titles = ["PGP GLASS", "Card 2", "Card 3", "Card 4", "Card 5"];
  const descriptions = [
    "What is total market growth for [Category] in [Region] for last 5 years and projection for next 3 years?",
    "Describe a new trend in the industry.",
    "Provide competitor information for [Category] in [Region].",
    "Discuss import-export opportunities in [Region].",
    "Analyze market research findings for [Category] in [Region].",
  ];

  const randomTitle = titles[getRandomNumber(0, titles.length - 1)];
  const randomDescription =
    descriptions[getRandomNumber(0, descriptions.length - 1)];

  return { title: randomTitle, description: randomDescription };
}

// Generate cards for each badge type
export const getRandomCards = () => {
  const cards = {};

  badges.forEach((badge) => {
    const randomNumberOfCards = getRandomNumber(1, 5); // You can adjust the range as needed

    const key = badge.split(' ').join('_')
    cards[key] = [];

    for (let i = 0; i < randomNumberOfCards; i++) {
      const randomCard = generateRandomCard();
        cards[key].push(randomCard);
    }
  });

  return cards;
};
