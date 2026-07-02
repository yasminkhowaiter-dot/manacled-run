import { walk, run, freeform, stretch, exercise, rep, sc } from './util.js';

// WEEK 7 — THE EARRING. The present becomes the only timeline that matters.
// His voice is live now. Structure: 10 min walk, 5 min free-form, (1 min run +
// 15s skipping) x5, then three 5-minute free-form runs with stretches between.

const skip = (text) => exercise('15s skipping', 15, [sc(0, 'd', text)]);

export const m19 = {
  id: 'm19', week: 7, workout: 1, title: 'Remembered',
  summary: 'The gardens, both of you, no fog. And a gift.',
  synopsis: 'You waited for him under the hawthorn at the bottom of the gardens, holding a white knight and wearing a green ribbon, and watched the High Reeve cross the lawn like a man walking out of a role. The first conversation in two years where both of you were real.',
  collectible: { id: 'earring', name: 'A charmed earring', icon: '&#128142;', note: 'A drop of silver, warm to the touch. His voice lives in it now, keyed to your blood and his. "You once ran my messages," he said. "Turnabout. Now I run beside you, whatever the distance."' },
  segments: [
    walk(600, [
      sc(2, 'd', 'Testing. …It works. Merlin, it works. Good morning, Granger. Walk your usual circuit and don’t smile like that — Montague is on the terrace and you are meant to be a broken woman taking sad exercise.'),
      sc(150, 'd', 'Ten minutes of walking, per the regimen. The regimen and I are colleagues now, so it will be enforced. While you walk: yesterday, under the hawthorn. You said my name — the real one — and two years of scaffolding came off me at once. I want it noted the tree was YOUR choice of venue. Sentiment, from you. I’m telling the biographers.'),
      sc(360, 'h', 'He stood under the blossom and shook, and called it the cold, and I let him, because some mercies are small. Then we talked strategy for an hour, hands almost touching on the fountain rim, two agents of a dead Order finding out the Order isn’t entirely dead.'),
      sc(540, 'd', 'Drills shortly. New exercise this week — skipping. Yes, skipping. The footwork of duellists and boxers and, apparently, escapees. I’ll demonstrate the rhythm; the peacocks will judge us both.'),
    ]),
    freeform(300, [
      sc(0, 'd', 'Five minutes, easy running, while I brief you. The resistance persists — smaller, quieter, further north. My intelligence still moves to them along… old routes. They lack two things: a healer of your calibre, and what is sealed in your head. The plan-that-failed can be rebuilt, Granger. It requires only that its architect walk out of my gardens alive.'),
      sc(230, 'd', 'Forty seconds. Ease off. And stop calculating odds while you run — I can hear you thinking from the west wing.'),
    ]),
    ...rep(5, i => [
      run(60, [sc(0, 'd', [
        'A minute, brisk. The manacles report location and pulse to a ledger no one reads unless it spikes strangely. Your training curve is our cover — the ledger has watched you improve for six weeks. So improve. Loudly. Go.',
        'Again. Sixty seconds. You’re grinning. The broken woman doesn’t grin. Grin later. Go.',
        'Third. Go — and mind the gravel, it gossips.',
        'Fourth. One minute. The programme ends in eleven days. So does the spring assizes, when the household empties for the ceremonies at the Ministry. You see it too. Of course you see it. Go.',
        'Last one, hard. Race-day legs, Granger. We are building RACE-day legs. Go.',
      ][i])]),
      skip([
        'Now skip — light, quick, fifteen seconds, feet like rain. One-two, one-two. The peacocks are staring. Ignore the critics.',
        'Skip again. Ankles, not knees. Quick — quick. Better.',
        'Fifteen seconds. Skip. You look ridiculous. So did I, learning it in a French cellar. Continue.',
        'Skip. Rhythm steady — this is how feet learn to argue with bad ground and win.',
        'Last skip. Fifteen. Light as ash. …Done. Walk a moment.',
      ][i]),
    ]),
    freeform(300, [
      sc(0, 'd', 'Five minutes, your pace. First of three.'),
      sc(150, 'h', 'His voice in my ear as I run. After two years of silence in the fog, the sheer wealth of it. I could run to Scotland.'),
      sc(260, 'd', 'Ease off. Stretch coming.'),
    ]),
    stretch(180, [sc(0, 'd', 'Three minutes of stretching. Yes, I know Stroud’s script. I wrote half of it. Calves first. …She suspects, by the way. Stroud. She has begun prescribing with remarkable strategic insight and asking no questions at all. Some allies volunteer sideways.')]),
    freeform(300, [
      sc(0, 'd', 'Second five. Keep it smooth.'),
      sc(140, 'h', 'The plan, as it stands: the assizes empty the house. The ward-gap by the orangery. Open country, then the coast, then the portkey keyed to two — except he means to put me through it alone and stay behind with his mask on. I have not agreed to that clause. I will never agree to that clause.'),
      sc(260, 'd', 'Ease down. One run left.'),
    ]),
    stretch(180, [sc(0, 'd', 'Stretch again. Three minutes. …I heard that thought too, Granger. The clause stands. The machine needs its man inside. We are not arguing about this today. We are arguing about it, clearly, every day until the gap — but not today.')]),
    freeform(300, [
      sc(0, 'd', 'Last five minutes. Run it like everything’s already decided and all that remains is the running. That’s how you make it true.'),
      sc(240, 'd', 'Thirty seconds. …There. Session one, week seven. The ledger will read: subject continues to improve. The ledger has no idea.'),
    ]),
  ],
};

export const m20 = {
  id: 'm20', week: 7, workout: 2, title: 'The Ward-Gap',
  summary: 'Skipping drills for bad ground. Surveying the way out.',
  synopsis: 'Every warded boundary has a seam, and this one runs behind the orangery where an old gardener’s gate was bricked up a century ago — stone remembers doors. Today’s route reconnoitres it, disguised as a training loop, narrated by a man pretending not to be proud of the wards he’s quietly unpicking.',
  collectible: { id: 'wardstone', name: 'A chip of ward-stone', icon: '&#129704;', note: 'It hums very faintly, like a struck glass a room away. He worked on the seam for four months before you ever took your first prescribed walk. "I didn’t know what for," he said. "I just knew the house needed a wound in it."' },
  segments: [
    walk(600, [
      sc(2, 'd', 'Morning. Walk. Route today: the long loop, past the glasshouses, down the yew alley, and — entirely coincidentally — along the boundary behind the orangery. You will not look at the hedge. You will especially not look at the third buttress. I’ll describe; you memorise.'),
      sc(180, 'd', 'The wards are anchored to boundary stones every thirty feet. The third buttress sits where the old gardener’s gate was bricked in — its stone was recut in the eighteen-forties, and recut stone holds a charm the way cracked china holds tea. I have spent four months teaching that seam to open for two heartbeats when the right blood touches it. Yours will do. I made sure of the attunement in ways I decline to describe while you’re exercising.'),
      sc(420, 'h', 'We passed the buttress at a stroll. I did not look. The manacles stayed cold. Two heartbeats of open seam, on race day, at the far end of thirty minutes of hard running. That is the whole geometry of the rest of my life.'),
      sc(540, 'd', 'Drills. Skipping first — the ground beyond the boundary is pasture and rabbit holes, and I refuse to lose you to a rabbit.'),
    ]),
    freeform(300, [
      sc(0, 'd', 'Five minutes easy. Beyond the seam: four hundred metres of open field, a stream with one crossing stone, then the drover’s track south-southeast. Say it back in your head as you run. Field, stone, track. Field, stone, track.'),
    ]),
    ...rep(5, i => [
      run(60, [sc(0, 'd', [
        'One minute, brisk. Field pace — eyes sweeping the ground three strides ahead. Go.',
        'Again. The stream crossing: one wet stone, mid-current. You’ll take it at speed. Feet, Granger. Go.',
        'Third minute. Go. The track bends at the dead oak — bend with it, don’t cut the corner, the ditch is deep there.',
        'Fourth. Go — and breathe on the count, four in, four out. Race rhythm.',
        'Last minute, hard. From the seam, everything until the track is sprint country. Show me the sprint. Go.',
      ][i])]),
      skip([
        'Skip, fifteen. Rabbit-hole feet — light, reactive. One-two, one-two.',
        'Again, fifteen seconds. Land soft. The ground beyond the wall is not the Reeve’s barbered lawn.',
        'Skip. Quick-quick. Yes, exactly like that.',
        'Fifteen more. Ankles awake. Good.',
        'Last skip. …Done. You’d survive the pasture now. The rabbits and I are satisfied.',
      ][i]),
    ]),
    freeform(300, [
      sc(0, 'd', 'First five of three. Smooth and easy.'),
      sc(160, 'h', 'Field, stone, track. Field, stone, track. I have a map of the gardens in a laundry-list hem and a countryside in my head, and tonight I will lie in a hostile house and sleep well, because the geometry finally has an exit in it.'),
      sc(265, 'd', 'Wind down. Stretch next.'),
    ]),
    stretch(180, [sc(0, 'd', 'Three minutes. Stretch properly. …The portkey, since you’ll ask: a brass token, buried at the root of the third fencepost past the chalk cut, keyed to activate on touch and blood. Sixteen miles of coast path from the track’s end. On race day there will be a horse shortage in the county, which is to say, I’ve arranged one.')]),
    freeform(300, [
      sc(0, 'd', 'Second five. Hold your form when it gets boring — boredom is where form goes to die.'),
      sc(250, 'd', 'Ease off. One more after the stretch.'),
    ]),
    stretch(180, [sc(0, 'd', 'Stretching, three minutes. …You’re quiet today, Granger. I know the clause is sitting between us. Leave it there through one more session, and then, I promise, we will have the argument. Properly. You’ll lose, but you’ll lose to my very best reasoning, which after two years of committee meetings is frankly formidable.')]),
    freeform(300, [
      sc(0, 'd', 'Last five. Run the exit in your head one more time, start to finish: seam — field — stone — track — dead oak — chalk cut — fencepost — coast. Go.'),
      sc(245, 'd', 'And… down to a walk. Every stride of that felt like a rehearsal, didn’t it? It was. Nine days.'),
    ]),
  ],
};

export const m21 = {
  id: 'm21', week: 7, workout: 3, title: 'Rotations',
  summary: 'Patrol timing, a close call, and the argument.',
  synopsis: 'Montague has begun watching the boring prisoner run her boring circuits with unboring attention. Today’s session is a masterclass in hiding a rehearsal inside a routine — and at the end of it, the argument you’ve both been postponing finally arrives.',
  collectible: { id: 'timetable', name: 'A stolen rotation sheet', icon: '&#128203;', note: 'Not stolen, technically — reissued. The High Reeve rewrote the assizes-week patrol roster himself, citing efficiency. Every gap in it is load-bearing. It is, he says, the best piece of fiction he has ever written.' },
  segments: [
    walk(600, [
      sc(2, 'd', 'Walk. Usual loop, unusual care — Montague pulled the gate logs on your garden hours yesterday. He’s found nothing, because there’s nothing to find, but the man has the instincts of a rat in a granary. Today you are tired, slow, and slightly lame in the left ankle. Perform accordingly.'),
      sc(200, 'h', 'I limped past the terrace and let him see me wince. He lost interest by the fountain. Men like Montague only read the first page of a woman.'),
      sc(400, 'd', 'Assizes week: the Reeve’s household provides honour escort at the Ministry — I take Montague and the terrace pair with me at dawn. Remaining coverage runs on my new roster: the fountain crossing goes dark for six minutes at the half-hour, the orangery walk for nine. Your entire exit fits in the overlap. You’ll have run twenty-five minutes by then, which is the point — the ledger must show a woman deep in her usual exercise, right up until she isn’t.'),
      sc(560, 'd', 'Drills now. Keep the limp until the hedge line, then drop it.'),
    ]),
    freeform(300, [
      sc(0, 'd', 'Five easy minutes, out of the terrace sightline. Drop the limp… now. There she is.'),
      sc(220, 'd', 'Ease back. Drills at the hedge.'),
    ]),
    ...rep(5, i => [
      run(60, [sc(0, 'd', [
        'One minute at tempo, behind the yew where the ledger can’t cross-reference eyes. Go.',
        'Again. On race day this stretch is minutes nineteen through twenty-two. Learn its length in your legs. Go.',
        'Third. Go. Half-effort face, full-effort legs — the great art of my entire career, yours in sixty seconds.',
        'Fourth minute. Go. If a patrol surprises you mid-effort: you’re chasing the Reeve’s wretched peacock. It has previous convictions. Everyone will believe it.',
        'Last one. Full tempo. The hedge keeps our secrets. Go.',
      ][i])]),
      skip([
        'Skip fifteen. Quick feet, quiet gravel.',
        'Again. One-two, one-two. Lighter.',
        'Skip. Fifteen seconds. Good — the ankles have opinions now. Correct ones.',
        'Once more. Rain-feet. Lovely.',
        'Last skip of the programme, Granger — savour the absurdity. …Done.',
      ][i]),
    ]),
    freeform(300, [
      sc(0, 'd', 'First five. Smooth. …Montague stopped me in the east corridor this morning. Asked why the prisoner’s file shows athletic conditioning. I told him the truth: the programme requires her healthy, and I require her compliant. He heard cruelty in it, because cruelty is his whole vocabulary. He actually apologised for asking.'),
      sc(255, 'd', 'Wind it down.'),
    ]),
    stretch(180, [sc(0, 'd', 'Three minutes, stretch. …All right. The argument. You want me through the portkey beside you. I want my mask exactly where it is, feeding the north everything the machine thinks, until the machine can be stopped. Both of us are right. That’s what makes it an argument instead of a decision.')]),
    freeform(300, [
      sc(0, 'h', 'I ran my five minutes and argued with the air. That a rebuilt resistance needs its spymaster more than its symbol. That a mask worn alone, after this — after ME — will eat him to the lining. That the portkey is keyed to TWO, and magic that specific is a promise, and I have had ENOUGH of this war’s broken promises.'),
      sc(250, 'd', 'Ease off. …You fight unfairly. You fight with true things.'),
    ]),
    stretch(180, [sc(0, 'd', 'Last stretch of the week. …Here is what I will give you, and it is more than I planned to: if the north confirms safe harbour before the assizes — both of us. If not, you go, and I follow when the harbour’s real. Sworn on hawthorn, Granger. It’s the only wood I swear on.')]),
    freeform(300, [
      sc(0, 'd', 'Final five of week seven. Run it angry if you like — angry is aerobic.'),
      sc(230, 'h', 'Sworn on hawthorn. I’ll take it, and I’ll hold him to it, and if the north is slow I will make harbours EXIST by pure administrative fury. One week. One week and a five-kilometre run between me and the sea.'),
      sc(285, 'd', 'And walk. Week seven, complete. Next week, Granger, we rehearse in full — and then we raise the gates.'),
    ]),
  ],
};

export const week7 = [m19, m20, m21];
