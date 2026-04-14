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
  "fma-elric-brothers": {
    id: "fma-elric-brothers",
    title: "[FMA] Edward is ESTP, Alphonse is ISFJ — The Elric Brothers' MBTI Contrast",
    description: "One blazes like fire, the other shines like moonlight. How their opposite MBTI types forge the perfect alchemy.",
    date: "2026-04-14",
    content: `
## Same Goal, Completely Different Approach

Fullmetal Alchemist isn't just a fantasy action series. The fact that the Elric brothers pursue the same goal — recovering their lost bodies — yet approach it in dramatically opposite ways is exactly what makes this story a masterpiece. MBTI unlocks why.

### Edward Elric — ESTP: The Action-First Genius
Edward is the textbook **ESTP (Entrepreneur)**. He ignores rulebooks, collides with problems head-on, and becomes most creative under crisis. Even the Law of Equivalent Exchange — alchemy's fundamental rule — is something he tests with his own body in the field.

* Strengths: Brilliant improvisation, unstoppable execution
* Weakness: Struggles to express emotions, pride makes him refuse help
* Core line: **"Even a dog has a name!"** — fists before words, pure ESTP

### Alphonse Elric — ISFJ: The Gentle Guardian
Alphonse is a classic **ISFJ (Defender)**. Inside a cold, towering suit of armor beats the warmest heart. He pushes back on Edward's reckless decisions and carefully tends to the emotions of everyone his brother overlooks.

* Strengths: Deep empathy, inexhaustible patience
* Weakness: Hides his own pain beneath selflessness
* Core line: **"I believe in what you're doing, Brother."** — ISFJ devotion at its purest

### When Opposites Bond: Complete Alchemy
If Edward is 'assess → act immediately', Alphonse is 'feel → nurture those nearby'. Without each other, Ed would have died in some reckless confrontation long ago, and Al would have lost direction entirely. True Equivalent Exchange is the fusion of their two MBTI types.
    `,
    relatedTests: [
      { id: "fma", name: "Fullmetal Alchemist MBTI Test" }
    ]
  },
  "mbti-growth-arc": {
    id: "mbti-growth-arc",
    title: "How Trauma Changes Anime Characters' MBTI — Growth Arcs Explained",
    description: "Why do characters act completely different after a major event? MBTI psychology has a surprisingly precise answer.",
    date: "2026-04-14",
    content: `
## MBTI Isn't Set in Stone

Many people treat MBTI as fixed wiring, but psychologically, intense stress and transformative experiences can genuinely shift behavioral patterns. Anime's long-form character arcs illustrate this with remarkable precision.

### Vinland Saga's Thorfinn — ESTP → INFP
The revenge-obsessed Thorfinn was a textbook **ESTP**: impulsive, emotionally suppressed, living entirely for the next fight. After confronting his own violence through years of slavery, he became someone else entirely — driven by inner values and ideals, a classic **INFP** trajectory.

* Psychology note: Under extreme stress, a person's hidden 'Inferior Function' surfaces, producing behavior opposite to their normal baseline.

### Naruto's Sasuke Uchiha — INTJ's Shadow Phase
Sasuke reads consistently **INTJ**, but after Itachi's death he plunges into what psychologists call the 'INTJ Shadow' state. Cold strategy is replaced by raw emotion and impulsive revenge — his suppressed function 'Extraverted Feeling (Fe)' exploding to the surface.

### What's Your Own 'Shadow MBTI'?
This happens to us too. When exhausted or overwhelmed, have you ever burst out in ways totally unlike yourself — or shut down completely? That's your MBTI's Inferior Function waking up. Anime shows this psychological shift across years of storytelling, which is exactly why we find these growth arcs so deeply moving.
    `,
    relatedTests: [
      { id: "naruto", name: "Which Naruto Ninja Type Are You?" },
      { id: "aot", name: "Attack on Titan Survivor Test" }
    ]
  },
  "naruto-leaders": {
    id: "naruto-leaders",
    title: "[Naruto] The 4 Hokage MBTI Leadership Styles Explained",
    description: "From empathetic visionaries to ruthless strategists. Analyzing every major Hidden Leaf leader through MBTI.",
    date: "2026-04-15",
    content: `
## There Is No One Right Way to Lead

The Hokages of the Hidden Leaf each governed in a completely different style. Analyzing their leadership through MBTI makes it powerfully clear why diverse personality types are all necessary in any great organization.

### Hiruzen Sarutobi (Third Hokage) — ENFJ: The Empathetic Leader
Hiruzen puts people above ideology, treasuring each villager individually — the defining trait of **ENFJ**. His warmth toward young Naruto and his final self-sacrificing battle against Orochimaru both stem from deep emotional conviction. His weakness is slow decision-making, but he is the glue that holds the village together.

### Minato Namikaze (Fourth Hokage) — INFJ: The Visionary Sacrifice
A man of sharp foresight and unwavering moral belief — classic **INFJ**. Sealing Kurama into his own newborn son to save the village is the ultimate INFJ act: self-sacrifice for a cause greater than oneself. A leader remembered for what his actions meant, not what he said.

### Tsunade (Fifth Hokage) — ESTP: The Field Commander
Tsunade trusts hands-on experience over theory — quintessential **ESTP**. As a master medical ninja, she responds to crises with immediate, decisive action. She cares about results over optics and makes faster calls than anyone when the stakes are highest.

### Uchiha Madara (The True Final Boss) — INTJ: The Perfectionist Revolutionary
Not a formal Hokage, but the **INTJ** who challenged the village's entire power structure. The Infinite Tsukuyomi — a plan decades in the making — is the extreme crystallization of INTJ's long-game execution. Refusing to compromise when his ideal meets reality is both his strength and his tragedy.

### Conclusion: What Type of Leader Does Your Team Have?
ENFJ provides cohesion, INFJ provides vision, ESTP provides execution, INTJ provides revolution. Remove any one and the system fractures. One of Naruto's great strengths as a story is how vividly it shows each leadership type colliding, failing, and learning from one another.
    `,
    relatedTests: [
      { id: "naruto", name: "Which Naruto Type Are You? Take the Test" }
    ]
  },
  "mbti-anime-guide": {
    id: "mbti-anime-guide",
    title: "The MBTI Anime Recommendation Guide",
    description: "What an INTJ must watch. What an ENFP can never escape. A curated anime guide by MBTI type.",
    date: "2026-04-15",
    content: `
## Your MBTI Predicts Your Taste

If no anime has ever truly grabbed you, you may simply not have found the one that matches your MBTI yet. Here's an analysis of which series resonate most powerfully with each type.

### NT Types (Analysts) — Attack on Titan, Fullmetal Alchemist
**NT types** who love dissecting world logic, plot layering, and power structures will find Attack on Titan their perfect match. The intricate political philosophy and structural twists fully satisfy the intellectual appetite of INTJ and INTP alike. FMA's Law of Equivalent Exchange is another logical framework NT types can sink deep into.

### NF Types (Idealists) — Naruto, March Comes in Like a Lion
**NF types** who respond intensely to emotional arcs and character growth will find Naruto irresistible. The underdog-to-hero journey, the alchemy of making you empathize even with the villains — this hits ENFP and INFP's emotional core perfectly.

### ST Types (Realists) — Demon Slayer, One Piece
**ST types** who prefer clear goals and achievement-driven stories will find Demon Slayer ideal. Tanjiro's objective is crystal clear, and his strength scales directly with effort — exactly the kind of proportional progress that satisfies ESTJ and ISTJ's drive for earned results.

### SF Types (Empaths) — Crayon Shin-chan, Pokémon
**SF types** who find comfort in warm everyday relationships will find Crayon Shin-chan a natural fit. Beneath its silly surface lies a tight-knit family dynamic and neighborhood warmth that hits ESFJ and ISFJ's empathy cells hard. Even grown adults tend to cry at specific episodes — and that's almost always an SF type.

### Final Note: Take the Test First!
If you're not sure of your MBTI yet, which of the above descriptions resonated most? That's probably your type calling. Try our character-based MBTI tests and find out for sure!
    `,
    relatedTests: [
      { id: "onepiece", name: "One Piece MBTI Test" },
      { id: "aot", name: "Attack on Titan MBTI Test" },
      { id: "kimetsu", name: "Demon Slayer MBTI Test" },
      { id: "naruto", name: "Naruto MBTI Test" }
    ]
  },
};
