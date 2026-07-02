import { fastwalk, freeform, stretch, rest, exercise, sc } from './util.js';

// WEEK 6 — THE FALL. The heavy door opens. Structure: 10 min free-form,
// 2 x 10 half-squats with a 30s break, 5 min fast walk, then three 7-minute
// free-form runs with 2-minute stretches between.

const squats = (text) => exercise('10 half-squats', 40, [sc(0, 'd', text)]);

export const m16 = {
  id: 'm16', week: 6, workout: 1, title: 'Evacuation',
  summary: 'Half-squats and three sevens. The war turns.',
  synopsis: 'That summer the map turned black one county at a time. The Order became a thing that moved by night, carried on backs. New exercise, old truth: the strength to lift someone is the strength to keep them.',
  collectible: { id: 'strap', name: 'A stretcher strap', icon: '&#129530;', note: 'Recovered memory: lift with the legs, he taught the medics — knees bent, back straight, patient held close. He drilled the whole hospital in it. Nobody asked where a Malfoy learned field evacuation. Everybody knew.' },
  segments: [
    freeform(600, [
      sc(0, 's', 'Week six. It begins with ten full minutes at your own pace, so pace yourself — the programme has opinions about your legs today.'),
      sc(200, 'h', 'Three minutes. The fallback hospital lasted five weeks. The one after that, three. By August we could strike the whole ward in ninety minutes — beds, stores, wounded and all. We got fast because slow had a body count.'),
      sc(430, 'h', 'Seven minutes. He came with the crates less often and with warnings more often. Thinner every visit. Playing both hands of the game now — Voldemort’s rising officer by day, our nineteen minutes by night. I watched the cost compound like interest.'),
      sc(560, 's', 'Half a minute. Then the new exercise.'),
    ]),
    squats('Half-squats. Feet wide, knees bent, back straight — you’re lifting a stretcher, not bowing to a king. Ten. One — two — three — keep the heels down — ten. Good.'),
    rest(30, [sc(2, 'd', 'Thirty seconds. Shake the legs out.')]),
    squats('Again — ten. The patient is heavy and the night is short. Down — up. Down — up. Ten. Done.'),
    fastwalk(300, [
      sc(0, 'd', 'Five minutes at a march. Column pace — the whole hospital is walking behind you and they match whatever you set. So set something worth matching.'),
      sc(170, 'h', 'Present day: I have begun strengthening my legs on the terrace steps at dusk. If anyone asks, Stroud prescribed it. Stroud, to her credit, has stopped asking what she prescribed.'),
    ]),
    freeform(420, [
      sc(0, 'd', 'Seven minutes. First of three. In the field this was the wounded run — ahead of the column, scout the road, run back. Twice the distance of everyone else. That was always your job. You demanded it.'),
      sc(360, 'd', 'One minute. Ease off gently at the end.'),
    ]),
    stretch(120, [sc(0, 's', 'Two minutes. Stretch the thighs — the squats have lodged an objection.')]),
    freeform(420, [
      sc(0, 'd', 'Second seven. The middle one is the honest one — no fresh legs, no finish line in sight. Just the work.'),
      sc(200, 'h', 'Halfway. September, the last big evacuation: sixty people over the moor in fog, me running the line all night. At dawn he counted heads twice and then took my face in both hands, in front of everyone, cover be damned for four whole seconds. Sixty, he said. All sixty. You absolute marvel.'),
      sc(365, 'd', 'Minute left. Hold form.'),
    ]),
    stretch(120, [sc(0, 's', 'Two more minutes of stretching. Save something — one run remains.')]),
    freeform(420, [
      sc(0, 'd', 'Last seven. Save-some-juice was the instruction, and I trust you ignored it, so: finish strong anyway. That was always your way.'),
      sc(230, 'h', 'The heavy door is ajar now. Behind it I can hear the last winter: the safehouse with the blue door, the argument about the portkey, and the end. Two more sessions, and I will look. I owe the healer that. I owe her the whole truth of herself.'),
      sc(380, 'd', 'Thirty seconds. Empty the tank. …Good. Walk, and be proud.'),
    ]),
  ],
};

export const m17 = {
  id: 'm17', week: 6, workout: 2, title: 'The Last Safehouse',
  summary: 'The argument you had to remember. Three sevens.',
  synopsis: 'Behind the blue door of the last safehouse, the Order planned its final throw, and Draco Malfoy asked you — twice as an argument and once, terribly, as a plea — to be on the coast when it happened. You remember your answer. You have always been going to remember your answer.',
  collectible: { id: 'wand', name: 'A cracked wand', icon: '&#129718;', note: 'Recovered memory: vine wood and dragon heartstring, cracked at the last battle and carried anyway. A wand is like a war, you told him. You don’t put it down just because it’s breaking.' },
  segments: [
    freeform(600, [
      sc(0, 's', 'Ten minutes, your own pace. Your file says you are fit for anything now. The file has no idea what it is talking about.'),
      sc(180, 'h', 'Three minutes. The blue-door house, the last winter. Maps on every wall. The plan was a single strike — everything the Order had left, spent at once, on a night his intelligence would choose. If it worked: the end of him. The other him. The Dark Lord.'),
      sc(420, 'h', 'Seven minutes. If it failed, there was no after. Everyone in that room knew it and put their names down anyway, and I have never been in a warmer room in my life.'),
    ]),
    squats('Half-squats, ten. You kept training through the planning. Down — up. Steady. Ten.'),
    rest(30, [sc(2, 'd', 'Thirty seconds.')]),
    squats('Ten more. Strong legs, whatever comes. That was the whole of my prayer that winter. Down — up. Ten. Done.'),
    fastwalk(300, [
      sc(0, 'd', 'March, five minutes. The night before the strike, we walked the perimeter of the safehouse together, twice, because neither of us could hold still and neither of us could say so.'),
      sc(180, 'h', 'He said: the portkey is set. The coast, then anywhere. He said: you are a healer, not a soldier, no one would call it desertion. He said — and here his voice did a thing I will spend my life unhearing — please.'),
    ]),
    freeform(420, [
      sc(0, 'd', 'Seven minutes. First of three. Run while she answers me, because I couldn’t stand still for it either.'),
      sc(150, 'h', 'I said: no. I said it kindly and I meant it completely. Where the wounded are, I am — that is the entire text of me, Draco, you fell for a field hospital with hair. He laughed the way people laugh when the alternative is worse.'),
      sc(370, 'd', 'One minute. Steady through.'),
    ]),
    stretch(120, [sc(0, 's', 'Two minutes of stretching. Breathe. Some memories raise the pulse more than the hills do.')]),
    freeform(420, [
      sc(0, 'd', 'Second seven. Then he changed the terms — if it goes wrong, he said, they will take you, and what you know will hold out for a day, maybe two. Even your locks have limits, love. And you went very quiet, healer. You went quiet because you were already designing the answer.'),
      sc(250, 'h', 'Halfway. I told him: then I’ll build a lock they can’t pick, because they won’t know there’s a door. He said: that kind of magic costs. I said: I know exactly what it costs. It costs everything, kept safe. Fog on the water. Do you understand yet, garden-self? Do you see who wrote the fog?'),
      sc(370, 'd', 'Minute. Hold.'),
    ]),
    stretch(120, [sc(0, 's', 'Stretch again. One run left today.')]),
    freeform(420, [
      sc(0, 'd', 'Last seven. Run it for the room of warm names. Every one of them signed.'),
      sc(230, 'h', 'I sealed the plan, the names, the safehouses — everything that could hang the living — behind a keyed obliviation of my own design. And the key… the key could not be a word, or a place, or his face, because they would rip through all of those in an afternoon. It had to be something no legilimens would ever think to walk through. It had to be the body.'),
      sc(385, 'd', 'Thirty seconds. All of it. …Enough. Walk. One session left before you know the rest, and Granger — you built the lock well. Look how long even YOU took to find the door.'),
    ]),
  ],
};

export const m18 = {
  id: 'm18', week: 6, workout: 3, title: 'Checkmate',
  summary: 'The end of the war. The heaviest run in the programme.',
  synopsis: 'The strike failed. The rest is the history the whole world was made to memorise: the Boy Who Lived, dead by the river; the Order rolled up in a week. What the world never learned is what a healer did in a cellar with nineteen minutes and her own wand. Now you remember all of it.',
  collectible: { id: 'blackking', name: 'The black king, toppled', icon: '&#9818;', note: 'Recovered memory: you laid your own king down on the cellar flagstones before you cast — not surrender; a message across time to yourself. A tipped king means the game ended. It does not say who won. That gets decided by whoever picks the piece back up.' },
  segments: [
    freeform(600, [
      sc(0, 's', 'Final session of week six. Ten minutes, your pace. …Whatever today holds for you — and your pulse suggests it holds a great deal — the legs are ready. I made sure of it. Go.'),
      sc(190, 'h', 'Three minutes. The night was wrong from the first hour. The signal fires answered out of order. Then the sky over the river went green, and green, and green, and I was already running the Nightingale route in reverse with the whole plan burning in my head.'),
      sc(430, 'h', 'Seven minutes. Harry was dead. Is dead. I remember now — I can hold it and run at the same time, which is the entire reason a healer taught herself to do both. Keep moving. Grief travels better at speed.'),
    ]),
    squats('Half-squats, ten — because the drill steadies the hands, and her hands needed to be steady for what came next. Down. Up. Ten of them. Slowly.'),
    rest(30, [sc(2, 'd', 'Thirty seconds. Breathe.')]),
    squats('Ten more. She did them too, that night, in the cellar — the old drill, to stop the shaking. It worked. Her hands were perfectly steady at the end. Down — up. Done.'),
    fastwalk(300, [
      sc(0, 'd', 'Five minutes at a march while she works. Nineteen minutes, she had — my number, returned to her like a coin. Snatchers on the street above. And Hermione Granger chose, at the end of the world, to spend her nineteen minutes casting.'),
      sc(175, 'h', 'The lock: everything operational sealed behind the fog. The key: sustained exertion — heart above thunder, lungs at bellows, the body fully spent, held long enough. A state no torturer can induce and no legilimens can fake. They can hurt you into anything except fitness. And the final clause, the cruel one, the necessary one: the fog takes the war, it takes the hospital… it takes him. Because a love left visible is a map to everything else.'),
    ]),
    freeform(420, [
      sc(0, 'd', 'Seven minutes. First of three. She left herself one thread — the body remembers running. Follow the thread, healer. You wrote it for exactly this.'),
      sc(240, 'h', 'They took me in the cellar, standing calmly over a tipped black king, with a mind like a locked winter lake. I remember their frustration for months after. I remember, now, being glad of it — under the fog, some sealed part of me was ALWAYS glad.'),
      sc(370, 'd', 'One minute. Keep the thread.'),
    ]),
    stretch(120, [sc(0, 's', 'Two minutes. Stretch, and let the heart settle. Not the memory — just the heart.')]),
    freeform(420, [
      sc(0, 'd', 'Second seven. Now mine, since you finally have room for it: I reached the river too late for the battle and exactly in time for the aftermath. And I made my choice too — cover intact, mask on, all the way down. Someone had to be standing inside the machine when the machine won.'),
      sc(250, 'h', 'Halfway. He rose with the new order — High Reeve, trusted, decorated, dead behind the eyes — and when the surrogacy programme reached my name on a list, he moved everything movable to make sure the requisition read: Malfoy Manor. Not rescue. Rescue was impossible. Custody of the lock, until the key could be… run.'),
      sc(375, 'd', 'Minute. Hold it steady.'),
    ]),
    stretch(120, [sc(0, 's', 'Once more, two minutes. Then the last run of the week — make room for it.')]),
    freeform(420, [
      sc(0, 'd', 'Last seven. So: the walks, Granger. The regimen. Stroud’s programme, requisitioned by the Reeve’s office, structured — did you never wonder by WHOM? — as progressive endurance training. Week on week. Until your heart could hold the height and the length the key demands. You have been picking your own lock for six weeks. I have been standing at the window watching you do it.'),
      sc(260, 'h', 'And now I remember everything. The war, the crypt, the ribbon, the plea on the perimeter walk, the coin, the king, the coast — a portkey keyed to two, Draco, TWO — and the fog is gone, GONE, and I am running in his gardens with my whole life back in my chest and it is TOO LARGE, it doesn’t FIT, keep running, keep running —'),
      sc(390, 'd', 'Thirty seconds. …Enough. Walk. Breathe. Two weeks remain, and one thing left to train for. You know what it is now. We finish what the healer started.'),
    ]),
  ],
};

export const week6 = [m16, m17, m18];
