import { walk, run, freeform, rep, sc } from './util.js';

// WEEK 1 — THE GARDENS. Present timeline. Escorted walks, ten 15-second runs, a
// free-form finish. The fog begins to thin.

const w1drills = (lines) => rep(10, i => [
  run(15, i in lines ? [sc(0, ...lines[i])] : [sc(0, 's', ['Run.', 'Again. Run.', 'Run now.'][i % 3])]),
  walk(60),
]);

export const m01 = {
  id: 'm01', week: 1, workout: 1, title: 'The Regimen',
  summary: 'Walks around the gardens, with ten 15-second runs.',
  synopsis: 'You wake in a room you don’t remember, in a house that watches you. The healer says you are to walk every day now — physician’s orders. The gardens are the only place the walls can’t follow.',
  collectible: { id: 'lavender', name: 'A sprig of lavender', icon: '&#127807;', note: 'Picked at the edge of the path where the beds grow wild. It smells like something you can’t name yet.' },
  segments: [
    walk(600, [
      sc(2, 's', 'Good morning. I am Healer Stroud. You will walk the garden circuit every day from now on — the programme requires you healthy, and I require you compliant. We begin with ten minutes at an easy pace. Walk.'),
      sc(120, 'h', 'The manacles are lighter than they look. That is somehow worse.'),
      sc(280, 'h', 'There is a fog where my life should be. I know my name. I know the war is over. I know we lost. Everything else is… fog.'),
      sc(430, 's', 'Halfway through your warm-up. Lengthen your stride. The Ministry did not assign me to escort dawdlers.'),
      sc(540, 's', 'In a moment you will run — fifteen seconds only, then a minute of walking. Ten times. Even you can manage that.'),
    ]),
    ...w1drills({
      0: ['s', 'Run.'],
      2: ['h', 'My body knows this. My feet find a rhythm before I ask them to. Why does my body know this?'],
      5: ['s', 'Five done. Breathe in through your nose, out through your mouth. Run.'],
      7: ['h', 'Something moved behind the fog just then. Antiseptic. Canvas. Gone.'],
      9: ['s', 'Last one. Push. And… enough. Walk it off.'],
    }),
    freeform(600, [
      sc(0, 's', 'Ten minutes remain. Move however you like — walk, jog, run. I will be timing you regardless.'),
      sc(120, 'h', 'There is a window on the second floor of the west wing. Someone is standing in it. He does not move the entire length of the yew walk.'),
      sc(300, 'h', 'Halfway. The fog thins when I move. I don’t know how I know that, but I intend to test it.'),
      sc(480, 'h', 'Tomorrow I will walk faster. Whatever they locked away from me, I don’t think they locked the wanting it back.'),
      sc(570, 's', 'Time. Collect yourself. You did not disgrace the programme. Same hour tomorrow.'),
    ]),
  ],
};

export const m02 = {
  id: 'm02', week: 1, workout: 2, title: 'The Figure at the Window',
  summary: 'Same circuit, sharper eyes. Ten 15-second runs.',
  synopsis: 'The house has a master. The servants won’t say his name in front of you, which means you already know it — somewhere under the fog, you know it.',
  collectible: { id: 'pebble', name: 'A white pebble', icon: '&#129704;', note: 'From the fountain path. Perfectly round. You put it in your pocket without knowing why — then remember: you used to count things, to stay calm.' },
  segments: [
    walk(600, [
      sc(2, 's', 'Again. Ten minutes of walking, then the drills. Your pulse was acceptable yesterday. Today I expect better than acceptable.'),
      sc(150, 'h', 'The maids call him the High Reeve. They say it the way you’d name a storm — quietly, and not while looking at the sky.'),
      sc(330, 'h', 'He was at the window again this morning. Pale hair. Still as a portrait. When I looked up, he did not look away. I did.'),
      sc(520, 's', 'Drills in a moment. Fifteen seconds each. Do not sprint like a startled hen — pace it.'),
    ]),
    ...w1drills({
      1: ['h', 'When I run, the fog pulls back like a tide. Fifteen seconds is not enough to see what’s under it.'],
      4: ['s', 'Four. You are favouring your left ankle. Stop it.'],
      6: ['h', 'A voice, under the fog. Again, Granger. Low. Bored. Impossible to disobey. Whose voice is that?'],
      9: ['s', 'Last one — make it the best one. And… walk. Good.'],
    }),
    freeform(600, [
      sc(0, 's', 'Free-form. Ten minutes. Surprise me.'),
      sc(140, 'h', 'I ran a little longer that time and the smell came back — antiseptic, canvas, blood under both. A hospital. I was in a hospital. Not as a patient.'),
      sc(320, 'h', 'My hands remember pressure and thread. Stitching. I was a healer. I was a healer, and nobody here has said one word about it.'),
      sc(500, 'h', 'The figure at the window watched the whole circuit today. If I am a prisoner, why do I feel like something he is… guarding?'),
      sc(575, 's', 'Time. Walk. Tomorrow we finish the week — try to be worth the parchment I file about you.'),
    ]),
  ],
};

export const m03 = {
  id: 'm03', week: 1, workout: 3, title: 'Green Silk',
  summary: 'End of week one. Ten 15-second runs, then run free.',
  synopsis: 'A dress of green silk is laid out on your bed for a dinner you are not invited to enjoy. In the gardens, the fog finally tears — and you see a ward tent, and your own bloody hands, saving somebody.',
  collectible: { id: 'badge', name: 'A healer’s badge', icon: '&#9877;', note: 'Recovered memory: a tin badge with a bone-and-wand crest. They pinned it on you in a church crypt turned hospital. You were nineteen.' },
  segments: [
    walk(600, [
      sc(2, 's', 'Final session of your first week. Walk. And whatever has you scowling, leave it on the path.'),
      sc(160, 'h', 'There is a dinner tonight. The house is full of black robes and cold laughter. The green silk is beautiful. I would burn it if I could.'),
      sc(340, 'h', 'One of the guards — Montague — watches me the way a cat watches a cage. The High Reeve spoke six words to him this morning and Montague went white. I couldn’t hear the words.'),
      sc(530, 's', 'Drills. Ten of them. Then you may run as you please, which I suspect is the only pleasure this house allows you.'),
    ]),
    ...w1drills({
      0: ['s', 'Run.'],
      3: ['h', 'Tide, pull back. Show me.'],
      5: ['s', 'Five. Halfway. Your form is improving. Do not let it go to your head.'],
      8: ['h', 'Almost. Almost. It’s like a name on the tip of the tongue, except the name is my whole life.'],
      9: ['s', 'Last one. Empty the tank. And — walk. Well done. Genuinely.'],
    }),
    freeform(600, [
      sc(0, 's', 'Ten free minutes. Go.'),
      sc(130, 'h', 'There. THERE. A ward tent. Canvas snapping. My hands — my hands in someone’s chest, and dittany, and a boy screaming, and I am not afraid. I am fast, and sure, and someone is shouting healer, healer, HERE —'),
      sc(310, 'h', 'I saved him. Whoever he was. I remember the weight of his life in my hands, and I remember that I ran to him. I ran. That is what my body has been trying to tell me all week.'),
      sc(490, 'h', 'They took a healer and dressed her in green silk. Fine. The healer is still in here. And she is getting stronger by the day.'),
      sc(580, 's', 'Time. Week one complete. I shall note "satisfactory progress." Do not make a liar of me.'),
    ]),
  ],
};

export const week1 = [m01, m02, m03];
