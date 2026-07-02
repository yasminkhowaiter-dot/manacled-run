import { walk, slowrun, freeform, stretch, exercise, rep, sc } from './util.js';

// WEEK 5 — THE WAR. The memories darken and quicken. Structure: 5 min
// free-form, (1 min slow run + 6 heel lifts + 30s walk) x5, 10 min free-form,
// 5 min recovery walk, 10 min free-form, 5 min stretch.

const heels = (text) => exercise('6 heel lifts', 25, [sc(0, 'd', text || 'Heels — six. One, two, three, four, five, six.')]);

const w5drills = (runLines, heelLines = []) => rep(5, i => [
  slowrun(60, [sc(0, 'd', runLines[i])]),
  heels(heelLines[i]),
  walk(30),
]);

export const m13 = {
  id: 'm13', week: 5, workout: 1, title: 'Message Runs',
  summary: 'Slow-run intervals, then two ten-minute runs.',
  synopsis: 'By spring you were the Order’s fastest courier: a healer with clean papers and a memorised map of every camera-blind alley in London. The messages were carried in your head. That detail matters later. Remember that it was always in your head.',
  collectible: { id: 'coin', name: 'A courier’s coin', icon: '&#129689;', note: 'Recovered memory: a fake shilling, hollow, always carried empty. "If they catch you with nothing," he said, "they’ve caught nothing." The real message never touched paper.' },
  segments: [
    freeform(300, [
      sc(0, 's', 'Week five. It opens with five minutes at your own pace, so go — the drills will find you soon enough.'),
      sc(130, 'h', 'They gave me a route name: Nightingale. Hospital to safehouse, safehouse to river, memorised, never written. I ran it two dozen times. I could run it now, manacled, blindfolded, ten years from now. Some maps go in deeper than memory.'),
    ]),
    ...w5drills([
      'A minute at a slow run — courier pace, city dark. Doorway to doorway. Go.',
      'Again. There’s a checkpoint on the bridge; the river path adds a minute and subtracts a body. Take the river. Go.',
      'Third. Rain tonight — good. Rain empties streets and muffles feet. Go.',
      'Fourth. A patrol ahead: you’re a nurse on a night shift, tired and dull. Be dull past them, then GO.',
      'Last one. The drop is close. Finish clean. Go.',
    ], [
      undefined,
      'Heels, six, in the doorway while you count the patrol. One — two — three — four — five — six.',
      undefined,
      'Six more. Quietly. Even your calves should be discreet.',
      undefined,
    ]),
    freeform(600, [
      sc(0, 'd', 'Ten minutes now, continuous. Nightingale route, start to river. I’ll keep the watch.'),
      sc(180, 'h', 'Three minutes in. The messages I carried were sealed even from me — a string of nonsense syllables lodged behind a mental latch he taught me to build. Occlumency for beginners, he called it. Locks for the mind. I was, he admitted through his teeth, alarmingly good at it.'),
      sc(420, 'h', 'Seven minutes. Remember this, present-self, garden-self: I was good at locks. I was good at locks BEFORE the fog. Hold that. It’s the thread that leads to the heavy door.'),
      sc(540, 'd', 'One minute. The river’s in sight. Go get it.'),
    ]),
    walk(300, [
      sc(5, 'd', 'Walk. Five full minutes — recover properly. Even Nightingale rested between flights.'),
      sc(180, 'h', 'The High Reeve rode out this morning with six others, all in black. The house exhaled while he was gone. The house also, I noticed, locked more doors. Interesting, which ones.'),
    ]),
    freeform(600, [
      sc(0, 'd', 'Second ten. River to drop. Tired legs, same instruction — you know this hymn by now.'),
      sc(240, 'h', 'Four minutes. The drop was a loose brick behind a bakery. I’d whisper the syllables to the brick — his enchantment carried them from there. I asked once where they went. He said: to the only person I trust. I said: who’s that? He said: you’ve met him. He’s insufferable.'),
      sc(520, 'd', 'Minute left. Home dry, Nightingale. Fly.'),
    ]),
    stretch(300, [
      sc(0, 's', 'Five minutes of stretching — we’ve doubled your continuous running this week, and I will not have you seizing up on my ledger. Calves, thighs, hips, then the wall for the hamstrings.'),
      sc(160, 'h', 'Twenty minutes of real running today, split down the middle. A month ago the fog would have swallowed me at four. The door is close now. I can hear the war behind it.'),
    ]),
  ],
};

export const m14 = {
  id: 'm14', week: 5, workout: 2, title: 'The Raid',
  summary: 'The night St. Alban’s fell. Run when he says run.',
  synopsis: 'You always knew the heavy door had this behind it. The night the crypt hospital burned, you carried the living out through the smoke — and learned what the hooded visitor was willing to burn instead.',
  collectible: { id: 'dispatch', name: 'A singed dispatch', icon: '&#128220;', note: 'Recovered memory: the warning arrived nineteen minutes before the Death Eaters did. Unsigned. In handwriting you’d seen on training schedules all winter. Nineteen minutes saved forty lives.' },
  segments: [
    freeform(300, [
      sc(0, 's', 'Five minutes, your pace. Steel yourself — your pulse tells me you already know what today’s memory is.'),
      sc(150, 'h', 'The dispatch came at eleven minutes past two in the morning. EVACUATE. NOW. NOT THE MAIN DOOR. No signature. Padma said, how do we know it’s real? And I was already moving, because I knew the hand.'),
    ]),
    ...w5drills([
      'Run. Wake the east ward first — the burn patients move slowest. Go. GO.',
      'Again. Two to a stretcher, potions in the pillowcases, leave the beds. Go.',
      'Third. The crypt stair, then the vestry tunnel. Keep them moving. Go.',
      'Fourth. You go back for bed nine. Of course you go back for bed nine. Go, then — I’d never have stopped you.',
      'Last. The tunnel mouth. Smoke behind you. Everything you have. GO.',
    ], [
      'Heels, six, while the stretcher passes — one two three four five six — move.',
      undefined,
      'Six. Count them out and count them off — every rep a bed emptied.',
      undefined,
      undefined,
    ]),
    freeform(600, [
      sc(0, 'd', 'Ten minutes. This is the field above the tunnel, the long grass, forty people moving through the dark behind you. Set a pace they can follow. That’s what this training was always for.'),
      sc(200, 'h', 'We lost the crypt. We lost bed twenty-two, who went back for someone else’s photographs. We did not lose the other forty, because someone burned a piece of his cover to send nineteen minutes of warning.'),
      sc(430, 'h', 'Seven minutes. From a hill I watched the Dark Mark rise over St. Alban’s, green on the smoke. And a hooded man on the ridge line watched it too, fists shaking, and I finally walked up beside him and said his name out loud. Both names. The war name and the real one.'),
      sc(545, 'd', 'One minute. For bed twenty-two. Finish it strong.'),
    ]),
    walk(300, [
      sc(5, 's', 'Walk. Five minutes. Grief costs breath; spend it slowly.'),
      sc(170, 'h', 'He said: you shouldn’t know my name. I said: you shouldn’t have taught me your handwriting. Nineteen minutes, Draco. He looked at the fire and said: it wasn’t enough. It never is. That’s the mathematics of my entire life.'),
    ]),
    freeform(600, [
      sc(0, 'd', 'Second ten minutes. After a loss, you run anyway. Especially anyway. Go.'),
      sc(260, 'h', 'Four minutes. That night we walked the survivors to the fallback site until dawn, and he stayed — hood down, name spent, cover cracked open like an egg — because leaving would have been safer and neither of us mentioned it.'),
      sc(530, 'd', 'Last minute. Carry it home.'),
    ]),
    stretch(300, [
      sc(0, 's', 'Stretch, all of it, slowly. The body stores the day unless you wring it out.'),
      sc(150, 'h', 'Present day: I found the date carved small into the orangery sill — the raid’s date, and under it a groove worn deep, like a thumb returns to it. Whoever mourns St. Alban’s in this house does it here. There is only one candidate.'),
    ]),
  ],
};

export const m15 = {
  id: 'm15', week: 5, workout: 3, title: 'Stolen Hours',
  summary: 'Week five ends gently, for once. Two tens, and a ribbon.',
  synopsis: 'After the raid, the Order moved the hospital and doubled his risk, and something in both of you stopped pretending. What you remember next is not for Stroud’s file: green ribbon, borrowed mornings, a love with a countdown running on it.',
  collectible: { id: 'ribbon', name: 'A green hair ribbon', icon: '&#127895;', note: 'Recovered memory: "Your hair is a security breach," he said, entirely failing to make it sound like a complaint, and tied it back with the ribbon before the morning run. His hands shook slightly. Yours did too.' },
  segments: [
    freeform(300, [
      sc(0, 's', 'Last session of week five. Warm up as you please. Your resting pulse this morning was, frankly, athletic. I have written "no explanation offered."'),
      sc(140, 'h', 'We ran together every morning after the raid. Officially: fitness maintenance for the asset’s courier. Unofficially: the only hour in England that belonged to us.'),
    ]),
    ...w5drills([
      'A minute, easy. Morning mist, the long field, nobody watching. Just run with me. Go.',
      'Again. You set the pace today. I’ll match it. I always could; I just liked watching you work.',
      'Third. Faster then, if you insist on showing off. Go.',
      'Fourth. The oak at the field’s end — race you. You know I’ll win. Prove me wrong. Go.',
      'Last. Dead heat, for the record. It was not a dead heat. Be gracious. Go.',
    ], [
      undefined,
      'Heels, six, while I fix the ribbon. Hold still — one, two, three, four, five, six. There.',
      undefined,
      'Six more. You’re smiling. It’s ruining your form. Don’t stop.',
      undefined,
    ]),
    freeform(600, [
      sc(0, 'd', 'Ten minutes. Our loop — field, stream, hawthorn, home. I’ll talk, you run.'),
      sc(210, 'h', 'He told me his plan that morning. When it ends — either ending — there’s a portkey lodged on the coast, keyed to two. TWO, he said again, in case the mathematics had escaped me. I informed him I don’t abandon wars mid-treatment. He informed me I was the single most infuriating patient of his life. Neither of us conceded. It was a wonderful morning.'),
      sc(480, 'h', 'Eight minutes. A love with a countdown on it burns very clean. No wasted evenings. No polite silences. Every hour audited and spent to the last minute. I would not recommend it. I would not trade it.'),
      sc(550, 'd', 'One minute. Hawthorn’s in sight. Bring it home.'),
    ]),
    walk(300, [
      sc(5, 'd', 'Walk. Five minutes. Breathe the morning while it’s ours.'),
      sc(170, 'h', 'Present day. At the fountain this morning the High Reeve stopped a full pace away — protocol distance — and said quietly, without preamble: your hair is a security breach. And walked on. I stood there holding forty memories that all landed at once.'),
    ]),
    freeform(600, [
      sc(0, 'd', 'Last ten of the week. Run it like the mornings: like it’s borrowed and you intend to be worth the loan.'),
      sc(250, 'h', 'Four minutes. The heavy door is next, present-self. Behind it: how the war ended, and what I did to my own mind, and why. I can feel it now the way you feel weather coming. Next week we open it. Strong first — and I am strong now.'),
      sc(540, 'd', 'Minute left. Everything you’ve got, and then the ribbon comes off. Go.'),
    ]),
    stretch(300, [
      sc(0, 's', 'A full five minutes of stretching. Week six is heavier — I have seen the programme, and you should sleep well beforehand.'),
      sc(170, 'h', 'There was a green ribbon on my windowsill tonight. New silk, old knot — his knot, the running knot. I have hidden it inside the hem of the grey dress. Some evidence is too important to wear.'),
    ]),
  ],
};

export const week5 = [m13, m14, m15];
