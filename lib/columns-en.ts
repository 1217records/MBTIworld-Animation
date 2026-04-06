export type Column = {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  imageUrl?: string;
  relatedTests?: { id: string; name: string }[];
};

export const COLUMNS_EN: Record<string, Column> = {
  "mbti-anime-tropes": {
    id: "mbti-anime-tropes",
    title: "Hot-Blooded Heroes (E) & Cold Partners (I)? The Perfect Formula",
    description: "Why shonen protagonists are mostly Extraverts (E) and their closest companions tend to be Introverts (I).",
    date: "2026-04-05",
    content: `
## Those Who Charge Forward (E) vs Those Who Clean Up (I)

If you look closely at anime, a fun MBTI rule emerges. Protagonists like Luffy (ESTP), Yuji Itadori (ENFJ), and Tanjiro (ENFJ) are almost always **Extraverts (E)**. 
Conversely, sidekicks like Zoro (ISTP), Nanami (ISTJ), and Giyu (ISTJ) are overwhelmingly **Introverts (I)**.

### Why the Hero Must Be 'E'
The fundamental reason is the **'Driving Force of the Story'**. 
Extraverted characters naturally extend their hands to the world. They lack fear of unfamiliar territories. Without Luffy's ESTP recklessness or Tanjiro's ENFJ warmth drawing people in, the plot wouldn't move!

### The Perfect Brake: 'I' Partners
The weakness of 'E' heroes is impulsivity. Writers place cold, logical 'I' types next to them as a structural counterweight. Characters like Zoro (ISTP) and Shinobu (INTJ) assess the realistic dangers the hero ignores, providing the narrative's necessary anchor.
    `,
    relatedTests: [
      { id: "onepiece", name: "One Piece MBTI Test" },
      { id: "kimetsu", name: "Demon Slayer Test" },
      { id: "jujutsu", name: "Jujutsu Kaisen Test" }
    ]
  },
  "intj-villains": {
    id: "intj-villains",
    title: "Why Are Mastermind Villains Always INTJ or ENTJ?",
    description: "Exploring why the most iconic final bosses rely on Intuition (N) and Thinking (T).",
    date: "2026-04-01",
    content: `
## "My Plan is Flawless"

Anime's greatest final bosses often align with **INTJ (Architect)** or **ENTJ (Commander)** profiles. They scheme for decades, unaffected by immediate emotions. 

### The Ultimate N & T Idealism
A villain who simply \"loves destruction\" is boring. These characters believe: "This world is flawed, so I must rebuild it with my perfect order." It's the extreme manifestation of INTJ's vision and ENTJ's execution.
    `,
    relatedTests: [
      { id: "naruto", name: "Naruto MBTI Test" },
      { id: "aot", name: "Attack on Titan Test" }
    ]
  },
  "onepiece-startup": {
    id: "onepiece-startup",
    title: "The Ultimate Startup Team: Straw Hat Pirates' MBTI",
    description: "Analyzing the perfectly distributed psychological roles within the Straw Hat crew.",
    date: "2026-04-06",
    content: `
## A Pirate Crew or a Unicorn Agile Startup?

The Straw Hat Pirates represent the ideal **Agile Startup** model. 

### 1. The Action-First CEO: Monkey D. Luffy (ESTP)
Luffy is an **ESTP (Entrepreneur)**. He lacks financial planning but excels entirely in crisis management and pure execution. He breaks impossible barriers with intuition and force.

### 2. The Pragmatic COO: Nami (ESFP)
An **ESFP (Entertainer) / Pragmatist** is necessary to prevent bankruptcy. Nami controls the budget, navigates, and cleans up the ESTP CEO's messes using sharp social and practical skills.

### 3. The Quiet CTO: Roronoa Zoro (ISTP)
Zoro is the **ISTP (Virtuoso)**. Ignoring office politics, he solely polishes his technical skills to secure results.

### 4. The Welfare CHRO: Sanji (ESFJ)
Sanji, an **ESFJ (Consul)**, focuses intensely on internal harmony, crew nutrition, and strict chivalrous principles.
    `,
    relatedTests: [
      { id: "onepiece", name: "Which Pirate Are You?" }
    ]
  },
  "t-type-fact-bombers": {
    id: "t-type-fact-bombers",
    title: '"Are You A T?" TOP 5 Anime Fact Bombers',
    description: "Thinking (T) characters who destroy mental states with pure facts, zero empathy.",
    date: "2026-04-07",
    content: `
## Logic over Emotion

### 1. Kento Nanami (Jujutsu Kaisen) - ISTJ 
* **"Work is shit."**
He treats sorcery purely as labor, drawing strict boundaries even with emotional colleagues.

### 2. Levi Ackerman (Attack on Titan) - ISTP
* **"Make a choice."**
Even surrounded by death, he suppresses grief to calculate the math of victory.

### 3. Shinobu Kocho (Demon Slayer) - INTJ
Behind a smiling facade hides an INTJ strategist who meticulously plotted long-term chemical warfare.

### 4. Satoru Gojo (Jujutsu Kaisen) - ENTP
Prefers logical mockery over emotional comfort, constantly challenging traditional authority.

### 5. Giyu Tomioka (Demon Slayer) - ISTJ 
* **"Don't give others the right to decide your life or death!"**
Offers cold survival rules instead of warm hugs to a grieving Tanjiro.
    `,
    relatedTests: [
      { id: "jujutsu", name: "Jujutsu Kaisen Test" },
      { id: "aot", name: "Attack on Titan Test" },
      { id: "kimetsu", name: "Demon Slayer Test" }
    ]
  },
};
