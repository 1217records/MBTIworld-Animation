export type Column = {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  imageUrl?: string;
};

export const COLUMNS_EN: Record<string, Column> = {
  "mbti-anime-tropes": {
    id: "mbti-anime-tropes",
    title: "MBTI Cliches in Anime: Why Are Protagonists Always ENFP?",
    description: "An analysis of why shonen protagonists naturally tend towards extraverted, intuitive feeling types, and the deep psychological reasons behind it.",
    date: "2026-04-05",
    content: `
## The Standard Shonen Protagonist: ENFP and ESFP

If you look closely at popular shonen anime, you'll easily spot a recurring pattern: the protagonist's personality is almost always an **ENFP** or **ESFP**.
Characters like Luffy (One Piece), Naruto, and Yuji Itadori (Jujutsu Kaisen) are all energetic, easily befriend strangers, and save the world using their instinct and passion.

### Why ENFP and ESFP?

The biggest reason is their **Driving Force in the Narrative**.
Extraverted (E) and Feeling (F) types naturally act on their emotions without overcomplicating situations. They dive right in to save someone in pain, keeping the plot moving fast and dynamically.

If the protagonist was an **ISTJ**, they might calculate the risks, save money, and join the Navy instead of becoming a pirate. The story would be vastly different!

### The Power of Opposites: 'IN' Type Sidekicks

If the protagonist is a blazing ENFP, their partner or rival is usually an **INTJ** or **ISTP**—think Sasuke, Zoro, or Megumi. These logical, introverted characters balance out the reckless hero. 
This MBTI synergy creates the perfect storytelling dynamic!
    `,
  },
  "intj-villains": {
    id: "intj-villains",
    title: "Why Are Ultimate Villains Usually INTJ or ENTJ?",
    description: "Exploring the MBTI traits of the most iconic anime villains and why logic-driven visionaries make for the best antagonists.",
    date: "2026-04-01",
    content: `
## "My Plan is Flawless"

In many masterpiece anime series, the final bosses tend to be **INTJ (Architect)** or **ENTJ (Commander)** types. 
Characters like Sosuke Aizen (Bleach), Pain (Naruto), and Madara share a common trait: they are not swayed by immediate emotions. Instead, they plan massive world-altering schemes decades in advance.

### The Cold Idealism of N & T

A villain who just "loves destruction" is one-dimensional. But a villain driven by Intuition (N) and Thinking (T) usually has a firm philosophy: **"This world is broken, so I must destroy it to enforce perfect order."**

This is the extreme manifestation of INTJ's 'Vision' and ENTJ's 'Execution'. They consider sacrificing a few for the greater good as simple math. This chilling, perfectionist logic is exactly why we find these villains so captivating!
    `,
  },
};
