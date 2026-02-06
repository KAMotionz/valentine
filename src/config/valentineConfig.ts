import img1 from "@/public/mytype.jpg"
import img2 from "@/public/young.jpg"
import img3 from "@/public/grown.jpg"
import img4 from "@/public/birth.jpg"


// ============================================
// PERSONALIZE YOUR VALENTINE'S MESSAGE HERE
// ============================================

export const valentineConfig = {
  // Her name - displayed prominently throughout
  herName: "Lillian Livinus",

  // Your photos together - add image URLs here
  // You can upload photos to the project and import them, or use external URLs
  photos: [
     img1,
     img2,
     img3,
     img4,
  ] as string[],

  // Photo captions (optional) - one for each photo
  photoCaptions: [
    "You caught my heart from the very beginning, like i literally had a panick attack after our first encounter.",
    "This is slightly embarrassing to admit, but when i first saw your pic, i told fidelis that no shes too beautiful for now😭.",
    "And then I met the best part of you, the woman you’ve grown into, mature, amazing, and somehow even more beautiful than ever!.",
    "My Carina for life. Me and you, standing side by side against whatever comes❤️."
  ] as string[],

  // Custom facts about her (used in FactsSection)
  facts: [
    "The way your eyes light up when you talk about something you love, i get lost gazing at you💫🌠",
    "The fact that you'll make a great Wife and Mother makes me the happiest person✨",
    "Your laugh — it's my favorite sound in the world",
    "The way you see beauty in the smallest things🌹",
  ],

  // Memory section lines
  memoryLines: [
    "In every quiet moment,",
    "in every shared laugh,",
    "in every glance that says more than words ever could",
    "I've found something I never knew I was looking for.",
  ],

  // The special closing line in memory section
  memoryClosingLine: "You are my unexpected everything...",

  // Final celebration message
  celebrationMessage: "I can't wait to create more beautiful memories together.",
};
