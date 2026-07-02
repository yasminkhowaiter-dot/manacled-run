import { walk, fastwalk, run, freeform, stretch, exercise, rep, sc } from './util.js';

// WEEK 4 — THE RECONNAISSANCE. Pace drills: walking like you belong, then
// walking like you don't. Structure: 5 min walk, 4 min free-form, (1 min slow
// walk + 1 min fast walk + 10 knee lifts) x4, (30s run + 1 min walk) x5,
// 15 min free-form run, 2 min stretch.

const knees = (text) => exercise('10 knee lifts', 40, [sc(0, 'd', text)]);

const paceDrill = (slowLines, fastLines, kneeLines) => rep(4, i => [
  walk(60, [sc(0, 'd', slowLines[i])], 'slow — like you belong'),
  fastwalk(60, [sc(0, 'd', fastLines[i])]),
  knees(kneeLines[i]),
]);

export const m10 = {
  id: 'm10', week: 4, workout: 1, title: 'Patrol Pacing',
  summary: 'Slow walk, fast walk, knee lifts — and a fifteen-minute run.',
  synopsis: 'A courier who runs draws every eye in the street. A courier who strolls arrives. This week the lessons were about pace — and in the present, in the gardens, you begin to time the guards without ever appearing to count.',
  collectible: { id: 'map', name: 'A map of the gardens', icon: '&#128506;', note: 'Drawn from memory on the back of a laundry list: every path, every blind corner, every bench with sightlines. The far hedge is marked with a small, deliberate question mark.' },
  segments: [
    walk(300, [
      sc(2, 's', 'Week four. New drill: pace changes. One minute strolling, one minute at a march, then your knee lifts. The body must learn to shift gears without the face admitting anything.'),
      sc(130, 'h', 'His courier rules, remembered in order. One: never run in a town. Two: match the pace of the street. Three: if you must change speed, change it where no one can see you. The war was mostly walking, he said. The dying happened to people who ran.'),
      sc(240, 'h', 'Present day: Montague’s patrol passes the fountain every eleven minutes. The pair on the terrace, every seven. I know this because I walk, and walking women are furniture to men like these.'),
    ]),
    freeform(240, [
      sc(0, 'd', 'Four minutes, easy pace, wake everything up. Today you learn my favourite magic: being unremarkable.'),
    ]),
    ...paceDrill(
      ['Slow. Stroll. You’re a laundress, a librarian, a nobody. Heels lazy. Look bored.',
       'Slow again. Someone’s watching the street — give them nothing worth remembering.',
       'Slow. Notice everything, look at nothing. Count the patrol without moving your lips.',
       'Slow, last time. You’re invisible. It’s insulting and it will keep you alive.'],
      ['Now march. Purpose. You’re late for something dull — a delivery, a shift. Fast walk, arms swinging.',
       'March. Pace of a woman with somewhere legitimate to be. Faster.',
       'March. The checkpoint ahead waves through everyone who looks annoyed. Look annoyed.',
       'Last march. Push the pace to the edge of a jog and not one step over.'],
      ['Knees, ten, quick ones. In an alley, out of sight, you shake the stiffness out. Up!',
       'Ten more. This is what a pause behind a wall is for. Up.',
       'Again — ten. Sharper. Up!',
       'Final set. Ten. Done — and back to the street face.'],
    ),
    ...rep(5, i => [
      run(30, [sc(0, 'd', [
        'Thirty seconds — now you run, because now no one can see you. Go.',
        'Again. Between the hedgerows — go.',
        'Go. Quick and quiet, like I taught you.',
        'Again. Last stretch of open ground — go.',
        'Final one. Go — and then walk out of it casually, like nothing happened.',
      ][i])]),
      walk(60),
    ]),
    freeform(900, [
      sc(0, 'd', 'Fifteen minutes, continuous. Longest yet. Settle into courier pace — the pace you could hold from here to the coast if you had to. One day you might have to.'),
      sc(180, 'h', 'Three minutes. In the gardens I have started varying my loop. Long way past the glasshouses one day, tight around the parterre the next. If anyone is mapping my habits, I intend to be a very boring book with one extraordinary final chapter.'),
      sc(420, 'h', 'Seven minutes. The far hedge, behind the old orangery — the wards hum everywhere on the boundary, but there, the hum… stutters. Like a scratched record. I walked past it twice and my manacles never so much as warmed.'),
      sc(660, 'h', 'Eleven minutes. Right on schedule, Montague’s patrol. I was a furniture-woman studying roses. He looked straight through me. Good.'),
      sc(840, 'd', 'One minute left. Finish the way couriers finish: looking like you’ve been walking all along.'),
    ]),
    stretch(120, [
      sc(0, 's', 'Stretch. Hips especially — pace changes are paid for in the hips.'),
      sc(75, 'h', 'Fifteen minutes without stopping. In week one I couldn’t run fifteen seconds without the fog closing in. The fog is losing.'),
    ]),
  ],
};

export const m11 = {
  id: 'm11', week: 4, workout: 2, title: 'The Chess Player',
  summary: 'Pace drills again, and the safehouse evenings return.',
  synopsis: 'After the lessons came the evenings: a scarred kitchen table, a chess set missing a rook, and a spy who could not stop being careful even in the way he moved his pawns. You remember the night he finally started talking.',
  collectible: { id: 'knight', name: 'A white knight', icon: '&#9816;', note: 'Recovered memory: he played the knights like they were the only pieces that mattered. "Everything else moves in straight lines," he said. "Straight lines are how you get caught."' },
  segments: [
    walk(300, [
      sc(2, 's', 'Walk. Five minutes. The drills repeat today — the body learns by boredom, whatever the novels say.'),
      sc(140, 'h', 'He stayed for supper exactly once a week, for cover. Cover apparently required chess. I set the board the first night mostly as a weapon.'),
      sc(250, 'h', 'He played like he ran — nothing wasted, nothing shown. I lost eleven games before I understood I was studying the wrong board. The twelfth game, I watched his hands instead. I still lost. But he talked.'),
    ]),
    freeform(240, [
      sc(0, 'd', 'Four easy minutes. You’re allowed to think while you run. You’re not allowed to slow down while you think.'),
    ]),
    ...paceDrill(
      ['Slow stroll. Tell me about the street: who’s on it, what did they carry. You never looked. Look next time.',
       'Slow. A watcher on the corner — colour of his coat? You’re guessing. Stop guessing.',
       'Slow. Better. You’re starting to see the board.',
       'Slow, final. Every street is a chess position. Read it before you commit a single piece.'],
      ['Now march. You’ve read the street and the answer is: leave. Briskly, boringly. Go.',
       'March. Knight’s move — never the straight line home, always the bent one. Go.',
       'March, faster. There’s a queen on this board somewhere and we don’t know her square yet. Go.',
       'Last march. Off the board entirely. Go.'],
      ['Knees, ten. Up!',
       'Ten more, quick. Up.',
       'Again. Ten. Up!',
       'Final ten. Done.'],
    ),
    ...rep(5, i => [
      run(30, [sc(0, 'd', [
        'Thirty seconds, go — the bent line, remember.',
        'Again — go.',
        'Go. Three of five.',
        'Again — go.',
        'Last one — go.',
      ][i])]),
      walk(60),
    ]),
    freeform(900, [
      sc(0, 'd', 'Fifteen minutes, courier pace. I’ll tell you a secret to pass the time: endurance is just a decision you keep re-making. That’s all it ever was.'),
      sc(200, 'h', 'That twelfth game he told me about the manor he grew up in. Peacocks, he said, with real hatred. A mother who loved him. A father who inventoried him. He moved a knight and said: I am trying to be worth more than my inventory. Then he looked appalled at himself and left before the kettle boiled.'),
      sc(480, 'h', 'Eight minutes. The next week I set the board again and said nothing. He talked for two hours. The war outside the window; the double life folded up under his coat; and once — only once — my name, used gently, as if testing whether gentleness would be reported.'),
      sc(720, 'h', 'Twelve minutes. Present day: there is a chess set in the manor library. White is missing nothing. Black is missing a king. I have decided not to find that funny.'),
      sc(845, 'd', 'Minute left. Re-make the decision. Hold.'),
    ]),
    stretch(120, [
      sc(0, 's', 'Stretch. And breathe — you held a conversation pace for fifteen minutes today, which is the entire point of the programme.'),
      sc(78, 'h', 'He watched me from the terrace today, openly, for the first time. I raised the white knight I’d pocketed from the library. Across forty metres of lawn I watched a chess player forget every rule of his own game.'),
    ]),
  ],
};

export const m12 = {
  id: 'm12', week: 4, workout: 3, title: 'Hawthorn',
  summary: 'Week four closes under the blossom.',
  synopsis: 'There was a hawthorn tree behind the safehouse, and one evening in false spring it bloomed early, and the war held its breath. Nothing happened. Everything happened. You remember both at once, which is how you know it’s true.',
  collectible: { id: 'blossom', name: 'A pressed hawthorn blossom', icon: '&#127802;', note: 'Recovered memory: he reached over your shoulder to pull the branch down so you could smell it, and for four seconds the most careful man in England forgot to be careful.' },
  segments: [
    walk(300, [
      sc(2, 's', 'Final session of week four, and half the programme behind you. Walk. You may notice you now recover in half the time. I noticed a week ago; I simply enjoy withholding.'),
      sc(140, 'h', 'False spring, that February. Warm air out of nowhere; snowdrops utterly confused. Training ran long because neither of us called time, and neither of us examined why.'),
      sc(245, 'h', 'His wand is hawthorn. He told me at the tree, offhand, like a fact about weather. Hawthorn wands, he said, belong to conflicted souls. Then he was quiet in a way that had furniture in it — a whole room of things unsaid.'),
    ]),
    freeform(240, [
      sc(0, 'd', 'Four minutes easy. It’s a soft evening. Even wars have them; you’re allowed to notice.'),
    ]),
    ...paceDrill(
      ['Slow. Walk like there’s no war. Just once. Consider it training for afterwards.',
       'Slow. If there is an afterwards, this pace is what it’s made of.',
       'Slow. You keep glancing at me. Watch the street, Granger.',
       'Slow, last one. …You can glance at me on the last one.'],
      ['March now. Back to business — brisk.',
       'March. The world won’t save itself while we stroll.',
       'March, quicker. That’s it.',
       'Final march. Strong through the end.'],
      ['Knees, ten. Even under blossom. Up!',
       'Ten. The tree is not a reason to shirk. Up.',
       'Again, ten — you’re laughing, which costs you air, which I approve of not at all. Up!',
       'Last ten of the week. Done. Walk.'],
    ),
    ...rep(5, i => [
      run(30, [sc(0, 'd', [
        'Thirty seconds — go.',
        'Again — go.',
        'Go. Light feet.',
        'Again — go.',
        'Last — go, then ease off.',
      ][i])]),
      walk(60),
    ]),
    freeform(900, [
      sc(0, 'd', 'Fifteen minutes. Courier pace. Last long run of the week — make it an honest one.'),
      sc(210, 'h', 'He pulled the branch down. That’s all. Pulled it down so I could smell the blossom, and the sleeve fell back from the Mark on his arm, and he watched me see it and didn’t hide it, and that — that was the moment. Not a kiss. An unhidden thing.'),
      sc(500, 'h', 'Nine minutes. I said: it doesn’t change what I know of you. He said: it should. I said: don’t tell a healer what her own diagnosis should be. And Draco Malfoy laughed — actually laughed — and the blossom shook loose into both our hair.'),
      sc(760, 'h', 'Present day. There is hawthorn at the bottom of these gardens, past the orangery, near where the wards stutter. It flowered this week. I do not believe in coincidence. I believe in gardeners.'),
      sc(850, 'd', 'One minute. Finish gently. Some things you run toward, not away from — hold that thought.'),
    ]),
    stretch(120, [
      sc(0, 's', 'Stretch everything. Halfway through the programme, and your file now requires a second folder.'),
      sc(80, 'h', 'Halfway. The fog is thin as veil now. Behind it I can feel one last locked door — the heavy one, the one with the war’s end behind it. Not yet. Strong first. Then the door.'),
    ]),
  ],
};

export const week4 = [m10, m11, m12];
