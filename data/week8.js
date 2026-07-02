import { walk, run, freeform, stretch, sc } from './util.js';

// WEEK 8 — THE ESCAPE. Long free-form runs, a night of last checks, and then
// race day: five kilometres between the manor and the sea.

export const m22 = {
  id: 'm22', week: 8, workout: 1, title: 'Dress Rehearsal',
  summary: 'A twenty-minute run with checkpoints — the full route, in costume.',
  synopsis: 'Today you run the escape at race effort without escaping: every leg of it timed, every landmark named, the ledger fed a perfect final week of data. The only thing missing is the seam opening — and the sea.',
  collectible: { id: 'shoes', name: 'Worn running shoes', icon: '&#128095;', note: 'Left for you inside the orangery, wrapped in sacking. Broken in precisely — by whom, on what midnight lawns, he declines to say. "New shoes on race day is amateur hour, Granger."' },
  segments: [
    freeform(300, [
      sc(0, 'd', 'Rehearsal day. Five minutes easy to open. The house believes this is week eight of Stroud’s programme, which it is. It is also the last full rehearsal. Both true things can run together — that’s been the whole method, hasn’t it?'),
      sc(240, 'd', 'Ease off. Walk coming.'),
    ]),
    walk(180, [sc(10, 'd', 'Three minutes walking. Loosen the shoulders. Rehearsals are for finding the errors, so today you have my permission to make every single one of them — spend them all here, where they’re free.')]),
    stretch(300, [
      sc(0, 'd', 'Five minutes of stretching, thorough as a pre-op. Calves. Thighs. Hips. …The north confirmed last night, Granger. Safe harbour, verified twice, through the old routes. I read the message four times and then burned it and then stood at the window for an hour. The clause is dead. Keyed to two means two.'),
      sc(210, 'h', 'Keyed to two means two. I stretched my hamstrings and cried exactly briefly, like a professional.'),
    ]),
    freeform(1200, [
      sc(0, 'd', 'Twenty minutes, continuous, race effort. The full route in your head as you go. I’ll call the legs. From the fountain — begin.'),
      sc(120, 'd', 'Two minutes. Yew alley. This is where you settle — find the breath, four in, four out.'),
      sc(240, 'd', 'Four minutes. Glasshouses. On the day, this is where the fountain watch goes dark behind you.'),
      sc(360, 'd', 'Six. Long lawn. Rhythm, not speed. The rhythm no one can confiscate.'),
      sc(480, 'd', 'Eight minutes. Orangery corner. On the day you’ll hear the wards hum here. Today, just run the line.'),
      sc(600, 'h', 'Ten. Halfway, and strong. Two months ago I couldn’t run fifteen seconds. The healer built a key, and then the key built me back.'),
      sc(720, 'd', 'Twelve. The boundary stretch. Don’t look at the buttress. …You looked. Granger. We will discuss your career as a spy at a later date.'),
      sc(840, 'd', 'Fourteen minutes. Imaginary field, imaginary stream — rehearse the crossing stone in your head: strike, balance, gone.'),
      sc(960, 'd', 'Sixteen. This is assizes-morning fatigue, right here. Memorise how it tastes and note that you are still running.'),
      sc(1080, 'd', 'Eighteen minutes. Last leg. On the day, the chalk cut will glow ahead of you about now. Finish tall.'),
      sc(1170, 'd', 'And… down to a walk in a moment. That was the route, at effort, faultless. I have nothing to correct. I am as surprised as you are.'),
    ]),
    run(300, [
      sc(0, 'd', 'Five minutes at a firm pace — this is the reserve tank, the one you’ll want at the coast path. Prove it’s there.'),
      sc(270, 'd', 'Ease down. Nearly through.'),
    ]),
    walk(120, [sc(10, 'd', 'Two minutes walking. Drink. On the day there’s a flask at the dead oak, in the hollow, wide mouth, no lid — details win wars.')]),
    stretch(180, [sc(0, 'd', 'Three minutes stretching. …Shoes are in the orangery, by the way. Try them tomorrow, not on race day — even my arrogance has protocols.')]),
    run(300, [
      sc(0, 'd', 'Last five, firm again. Twice today you’ve emptied the tank and found more. Remember that at kilometre four.'),
      sc(280, 'd', 'And walk. Rehearsal complete. Ledger fed. Legs proven. Two sessions left, Granger — one gentle, one legendary.'),
    ]),
  ],
};

export const m23 = {
  id: 'm23', week: 8, workout: 2, title: 'The Night Before',
  summary: 'A long, easy run to settle the legs and the heart.',
  synopsis: 'The last session before the assizes. Nothing hard today — a long, kind run through the gardens you are about to leave forever, with every last detail checked and one conversation that refuses to stay strategic.',
  collectible: { id: 'token', name: 'A brass portkey token', icon: '&#129689;', note: 'You haven’t touched it — it sits at the root of the third fencepost past the chalk cut, keyed to blood and to two. But you’ve seen it now, in the memory he shared across the earring: his hands burying it at midnight, unhurried, like a man planting a future.' },
  segments: [
    walk(600, [
      sc(2, 'd', 'Ten minutes walking, and no arguments about the easy day — taper is science, and I did not smuggle sports science into a war to have it questioned now. Tomorrow the household leaves at dawn. Escort forms at the gate at six. Your regimen hour is seven. The overlap opens at seven twenty-two.'),
      sc(240, 'd', 'Checklist, while you walk. The shoes: broken in, laced once, left tied. The grey dress with the ribbon in the hem: worn, ordinary, seen a hundred times. The manacles: they come off at the seam — the same two heartbeats, I built it into the attunement. You cross the boundary a free woman or not at all.'),
      sc(450, 'h', 'The gardens are beautiful this evening, which feels like a trick. Even the peacock looks elegiac. I have hated this place with my whole chest and still some traitor part of me is saying goodbye to the lavender.'),
    ]),
    freeform(1500, [
      sc(0, 'd', 'Twenty-five minutes, conversational pace. If you can’t speak, slow down. We are not training today; we are lapping honour into a place that showed you none. Go.'),
      sc(180, 'd', 'Three minutes. …I’ll be at the Ministry when you run. You understand that, don’t you. Front row of the honour escort, medals on, face on, while everything I have is in a field running south-southeast. It is the hardest posting of my career and I’ve had postings that involved Umbridge.'),
      sc(420, 'h', 'Seven minutes. I asked him — the moment the assizes end, then what? He follows within the week, along the old routes, once the manor’s chaos gives him cover to "hunt the fugitive" in precisely the wrong directions. A masterpiece of paperwork, he called it. His voice only shook a little.'),
      sc(700, 'd', 'Eleven minutes, or as I file it: the last ordinary lap of the programme. I want to say something without strategy in it. …When you didn’t know me — those first weeks, fog and manacles — you still ran like the war wasn’t over. Before memory, before me. That’s the thing I love. The fog never once got THAT.'),
      sc(1000, 'h', 'Sixteen minutes. I told him: when this is truly finished — the machine broken, the north safe, the last ward down — I want mornings. Just mornings. The field, the stream, the ribbon, and nobody timing anything. He said: counter-offer. Every morning. I have accepted the terms.'),
      sc(1290, 'd', 'Four minutes left at this kind pace. Look at it all once more, Granger. Then face south.'),
      sc(1440, 'd', 'And ease off. Beautifully run.'),
    ]),
    stretch(300, [
      sc(0, 'd', 'Five minutes, the full stretching liturgy, slowly. Tonight: eat everything they give you, sleep like it’s prescribed, because it is. No rehearsing in bed. The route lives in your legs now — trust the training. Trust me. Trust yourself most.'),
      sc(200, 'h', 'Sleep, before the last day of the old world. On the mantel of my mind: a lavender sprig, a healer’s badge, a knife never taught, a white knight, a green ribbon, a toppled king, worn shoes. Tomorrow I run the whole shelf home.'),
    ]),
    freeform(600, [
      sc(0, 'd', 'Ten last easy minutes — a lap for luck. The programme calls it maintaining stimulus. I call it: I wasn’t ready to say goodnight.'),
      sc(420, 'h', 'The window is empty tonight. He is already at the Ministry lodgings. In my ear, though, all the way to the last stride: unhurried breathing, like a man beside me. Like a man planting a future.'),
      sc(560, 'd', 'Walk, now. Session complete. Sleep well, Nightingale. Tomorrow we raise the gates.'),
    ]),
  ],
};

export const m24 = {
  id: 'm24', week: 8, workout: 3, title: 'The Escape — 5K',
  summary: 'Race day. Five kilometres, you and the sea.',
  synopsis: 'This is it. What you trained for. The household is gone, the overlap is opening, and there are five kilometres between the fountain and a brass token in the roots of a fencepost. Run.',
  collectible: { id: 'manacles', name: 'The manacles, open', icon: '&#128275;', note: 'They fell in the grass at the boundary seam and you did not look back. Somewhere behind you they are still lying open in the dew — the last thing the manor ever held of Hermione Granger.' },
  segments: [
    walk(300, [
      sc(2, 'd', 'Seven o’clock. Walk the circuit like every other morning — bored, slightly lame, unremarkable. The escort is at the Ministry. The roster is mine. The morning is yours. Warm up, Granger. Speak to no one, and don’t look at the sky like it’s the first page of a book. Although it is.'),
      sc(150, 'h', 'Grey dress. Ribbon in the hem. His shoes. My legs. Fifty-two heartbeats a minute, about to be a great many more. I have been a prisoner, a surrogate, a locked room, a broken woman taking sad exercise. In four minutes, I am a runner. Only a runner.'),
      sc(270, 'd', 'Fountain watch going dark… now. Seven twenty-two. Gates up, Granger. RUN.'),
    ]),
    freeform(1800, [
      sc(5, 'd', 'Yew alley — settle, four in, four out, exactly like every rehearsal. Thirty minutes, one seam, one sea. Everything runs on time this morning. Especially you.'),
      sc(240, 'd', 'Four minutes. Glasshouses gone. Orangery watch dark in ninety seconds — you are precisely, beautifully on schedule.'),
      sc(480, 'd', 'Eight minutes. Boundary stretch. You’ll hear the wards begin to hum — that’s the sound of a house realising too late what it trained.'),
      sc(660, 'd', 'The buttress, NOW — blood to the stone, two heartbeats, THROUGH. …The manacles, Granger. Listen. That sound in the grass is the end of an empire’s claim on you. Don’t stop. FIELD.'),
      sc(760, 'h', 'My wrists are bare. My wrists are BARE, and the field is real grass and rabbit holes and cold true air, and his feet — light, quick, taught to me in frost — are the feet I’m running on.'),
      sc(900, 'd', 'Fifteen minutes. The stream — crossing stone, strike, balance, gone. Textbook. Track ahead, south-southeast. Halfway, my love. Halfway free.'),
      sc(1140, 'd', 'Nineteen minutes. The dead oak — flask in the hollow if you need it, but don’t linger. The bend, the ditch, bend WITH it — good.'),
      sc(1320, 'd', 'Twenty-two. This is the taste you memorised — assizes-morning fatigue. You are still running. You were always still running. Chalk cut in six hundred metres.'),
      sc(1440, 'd', 'Granger. Look left. …The hedgerow, the grey scarf, the man keeping pace like it’s a borrowed morning. The escort was reassigned last night — a masterpiece of paperwork. Did you truly believe I’d narrate the best run of your life from a MARBLE LOBBY? Keyed to two, Hermione. Two means BOTH of us running.'),
      sc(1560, 'h', 'He vaults the stile like the war never happened, and we run the chalk cut side by side, matched stride for stride the way we have been since a frost-bitten kitchen garden — and I am laughing, spending air I need, and his form is ruined too, and neither of us stops.'),
      sc(1680, 'd', 'The fenceposts! One — two — THREE. Kilometre five, the last two hundred metres, everything you have ever saved — EMPTY THE TANK, NIGHTINGALE — the token’s in the roots — TOGETHER — NOW —'),
    ]),
    walk(300, [
      sc(10, 'h', 'The world folded. Salt air. A cottage above a northern harbour, smoke already in the chimney, and people coming down the path saying my name — my NAME — like a flag being raised.'),
      sc(120, 'h', 'Epilogue, for the mantel. The machine broke fourteen months later; the north kept its harbour; the healer works mornings only. There is a hawthorn by the cottage gate. There is a chess set with both kings standing. And every morning — every single morning, as per the terms — two runners take the coast path, and nobody times anything, and the fog never comes back.'),
      sc(270, 'd', 'Cool down, walk it off, breathe. …Programme complete, Granger. Five kilometres. You ran the whole shelf home. Welcome to the rest of it.'),
    ]),
  ],
};

export const week8 = [m22, m23, m24];
