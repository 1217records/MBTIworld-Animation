#!/usr/bin/env python3
# run: python3 scripts/add_humor_columns_en.py

EN_ENTRIES = {
  "mbti-group-chat": {
    "id": "mbti-group-chat",
    "title": "How Each MBTI Type Behaves in an Anime Group Chat",
    "description": "INFP who never reads messages, ISTJ who saves every attachment... The definitive anime fan chat MBTI field guide.",
    "date": "2026-04-18",
    "content": """
## The Anime Fan Group Chat Is the Most Accurate MBTI Test

No personality quiz needed. Just drop someone into an anime fandom group chat and watch their true type surface within minutes.

### ENTJ — The Self-Appointed Server Manager
Creates the chat, immediately posts 8 pinned rules, sets an AFK auto-kick, and distributes a weekly episode progress report template. Miss one week and your voting rights are revoked. Has uttered **"Get to the point, please"** more times than the show has episodes.

### INFP — The Feeling-Forward Contributor
Dumps five uncontextualized screenshots of their favorite scene mid-debate. Shares a poem while everyone is voting on a schedule. Reacts with a single heart emoji and vanishes. Returns the next day as if nothing happened.

### ISTJ — Downloads Everything, Reads Everything Twice
Saves the event schedule to Google Drive, iCloud, and their camera roll simultaneously. Replies only with **"Noted."** Still writing the meeting recap after everyone else has gone to sleep.

### ENTP — Professional Chaos Agent
"Isn't the side villain actually more well-developed?" single-handedly fractures the chat into two factions, then acts confused. Claims it was **"healthy discourse stimulation."**

### ISFJ — The Group Parent
Appears within sixty seconds of any conflict with **"Let's all slow down! 😊"** When the meetup date is confirmed, they volunteer to book the venue before anyone else has said yes.
""",
    "relatedTests": [
      {"id": "jujutsu", "name": "Jujutsu Kaisen MBTI Test"},
      {"id": "naruto", "name": "Naruto Ninja MBTI Test"}
    ]
  },

  "mbti-finale-reactions": {
    "id": "mbti-finale-reactions",
    "title": "How Every MBTI Type Reacts to an Anime Finale",
    "description": "INFP sobbing at the opening theme, INTJ posting a critique before the credits roll... the definitive finale behavior report.",
    "date": "2026-04-18",
    "content": """
## The Finale Reveals Who You Really Are

One episode. That's all it takes to expose your MBTI for the world to see. Here is the definitive field guide to anime finale reactions.

### ENTJ — "My Analysis Was Correct"
Has a complete storyline prediction document prepared before the episode drops. Vocally celebrates every correct call. Incorrect predictions are filed under **"too many variables."**

### INFP — "This Ending Was Not What They Deserved"
Crying five minutes into the opening theme. Wraps themselves in a blanket during the final scene and vows to keep it there. Still processing the next morning: **"I just wanted them to be happy..."**

### INTJ — "The Author Made a Logically Inconsistent Choice"
Begins drafting a critical blog post during the final act. Published within twenty minutes of the ending. Biggest regret: two typos slipped through.

### ESFP — "Live-Streaming While Crying Like I've Never Seen Anime Before"
Running a live stream throughout. Camera shaking reaches peak intensity at the climax. Somehow the dinner photo posted after gets more engagement than the stream.

### ISTP — "..."
Closes the app, opens a game. Says **"Pretty good"** to anyone who asks. Internally: the single greatest piece of storytelling they have ever witnessed.

### ENFP — "Season 2 WHEN???? Main character you've got this!!!!!"
Starts predicting a sequel at the fifteen-minute mark. Fan forum for the non-existent follow-up season already launched. Casting preferences already submitted.

## Conclusion: Anime Is Not an MBTI Test
...but you already checked your type first, didn't you?
""",
    "relatedTests": [
      {"id": "onepiece", "name": "One Piece Character MBTI Test"},
      {"id": "kimetsu", "name": "Demon Slayer MBTI Test"}
    ]
  },

  "mbti-anime-boss": {
    "id": "mbti-anime-boss",
    "title": "If Anime Protagonists Were Your Boss: Ranks Worst to Worst",
    "description": "Luffy's company has no KPIs. Sasuke's feedback is 'come back better than me.' A serious review of impossible workplace scenarios.",
    "date": "2026-04-18",
    "content": """
## Beloved in Anime. Terrifying in a Performance Review.

Anime protagonists are compelling on screen. The moment that setting becomes a workplace, however, certain ethical alarms begin to sound.

### Luffy as Your Boss (ESTP) — "Results-Oriented With Zero Infrastructure"
* Weekly meeting agenda: **"Let's go!"** (implemented within five minutes, no further planning)
* Team somehow hits targets despite no KPIs. Benefits package: does not exist.
* Offsite venue: an island. Reason: "It felt like an adventure."
* Turnover is catastrophic. He is entirely unbothered and genuinely cannot understand why.

### Sasuke as Your Boss (INTJ) — "Feedback Without a Ceiling or a Floor"
* Annual review comment: **"Your output is insufficient. Come back next month more capable than I am."**
* No praise. No encouragement. Remarkably, no benchmark for improvement either.
* Produces a thirty-seven-page strategy document solo at 3am, shares it at 8am, expects you to be current.
* Replaces team lunches with multi-dimensional virtual meetings. Takes no questions.

### Tanjiro as Your Boss (ENFJ) — "The Warmest Possible Hell"
* Mandatory Monday morning motivational speech—and yes, it makes you believe it, every single time.
* Starts comforting a crying team member, ends up crying harder himself, somehow team morale increases.
* Learns a team member is considering leaving and **buys them a plane ticket out of his own pocket.**
* Breaks down in full emotional catharsis at a regional sales briefing. Meeting continues around him.

### Gojo as Your Boss (ENTP) — "Compliance? Charming of You to Assume That Applies to Me"
* **"Meetings are simply structured time-wasting"** — delivered in a meeting he called himself.
* Routes every mistake elegantly toward someone else, and everyone is somehow fine with it.
* Genuinely believes internal regulations are optional suggestions that apply to others.
* Has philosophically convinced the IT department that the new system is conceptually unnecessary.
""",
    "relatedTests": [
      {"id": "onepiece", "name": "Which Pirate Are You? One Piece Test"},
      {"id": "jujutsu", "name": "Jujutsu Kaisen Character Test"},
      {"id": "kimetsu", "name": "Demon Slayer Test"}
    ]
  }
}


def format_related_tests(tests):
    parts = []
    for t in tests:
        parts.append(f'      {{ id: "{t["id"]}", name: "{t["name"]}" }}')
    return "[\n" + ",\n".join(parts) + "\n    ]"


def entry_to_ts(key, e):
    content = e["content"].replace("`", "\\`").replace("${", "\\${")
    tests = format_related_tests(e["relatedTests"])
    return f'''  "{key}": {{
    id: "{e["id"]}",
    title: "{e["title"]}",
    description: "{e["description"]}",
    date: "{e["date"]}",
    content: `{content}`,
    relatedTests: {tests}
  }}'''


with open("lib/columns-en.ts", "r", encoding="utf-8") as f:
    content = f.read()

new_block = "\n".join(entry_to_ts(k, v) + "," for k, v in EN_ENTRIES.items())
content = content.rstrip().rstrip("}").rstrip().rstrip(";").rstrip() + ",\n" + new_block + "\n};\n"

with open("lib/columns-en.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Done:", content.count("\n"), "lines")
