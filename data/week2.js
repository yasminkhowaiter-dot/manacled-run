import { walk, run, freeform, exercise, rep, sc } from './util.js';

// WEEK 2 — THE HEALER. The flashbacks open. 30-second runs, heel lifts between
// ward rounds, a free-form finish. Structure: 10 min walk, (30s run + 5 heel
// lifts + 90s walk) x5, 10 min free-form.

const heels = (sp, text) => exercise('5 heel lifts', 30, [
  sc(0, sp, text || 'Heels up. One. Two. Three. Four. Five. Down.'),
]);

const w2drills = (runLines, heelLines) => rep(5, i => [
  run(30, [sc(0, 's', runLines[i] || 'Run. Thirty seconds.')]),
  heels('s', heelLines?.[i]),
  walk(90),
]);

export const m04 = {
  id: 'm04', week: 2, workout: 1, title: 'Ward Rounds',
  summary: '30-second runs and heel lifts, like rounds between beds.',
  synopsis: 'The memory has a name now: the crypt hospital under St. Alban’s. You worked the long ward. You did your calf raises at the foot of bed nine because a healer who cannot stand for sixteen hours is no healer at all.',
  collectible: { id: 'gauze', name: 'A roll of gauze', icon: '&#129657;', note: 'Recovered memory: you could bandage a forearm in the dark in under a minute. Your record was fifty-one seconds. Padma timed you.' },
  segments: [
    walk(600, [
      sc(2, 's', 'Week two. Walk. Today we add heel lifts — rise onto your toes, hold, and lower. They strengthen the calf and the ankle. You will do five after each run.'),
      sc(140, 'h', 'St. Alban’s. It came back whole in the night, like a room when the candle catches. A church crypt, forty beds, herbs drying on a string between the arches. Home. It was a kind of home.'),
      sc(320, 'h', 'I did rounds at a half-jog. There were never enough of us. You learned to move — bed nine to bed forty, potion stores to the burn ward — everything at a run, everything counted in heartbeats.'),
      sc(520, 's', 'Drills now. Run thirty seconds, five heel lifts, walk ninety. Five rounds. Think of it as… rounds.'),
    ]),
    ...w2drills(
      ['Run. Thirty seconds.', 'Again — run.', 'Three of five. Run.', 'Run. Keep the shoulders loose.', 'Last round. Run.'],
      [null, 'Heels up — one, two, three, four, five. A healer’s calves, Miss Granger.', null, 'Up — hold it — and down. Twice more. Good.', null],
    ),
    freeform(600, [
      sc(0, 's', 'Ten minutes, your own pace. Go.'),
      sc(130, 'h', 'Bed nine was a boy from the Creevey cell. Bed fourteen never told us her name. Bed twenty-two proposed to me twice a week out of gratitude and morphine.'),
      sc(300, 'h', 'I remember laughing there. In the middle of a war, in a crypt that smelled of murtlap and candlewax, I remember laughing. The fog took that too. It took the laughing.'),
      sc(480, 'h', 'The High Reeve was in the gardens when I came out today. He looked at my manacles once, and then at the ground, and then he left. Storms don’t look ashamed. Whatever he is, it isn’t only a storm.'),
      sc(575, 's', 'Time. Walk it off. Your ankles held — the heel lifts are working already, whatever you may think of me.'),
    ]),
  ],
};

export const m05 = {
  id: 'm05', week: 2, workout: 2, title: 'Triage',
  summary: 'Five rounds at stretcher pace. The night the wounded came.',
  synopsis: 'Some nights the war came to the crypt all at once. Green sparks over the river meant incoming. You remember the night of the Millbank raid — running triage until dawn, and the stranger who brought the wounded in.',
  collectible: { id: 'dittany', name: 'A vial of dittany', icon: '&#129514;', note: 'Recovered memory: the last vial of dittany in London, and you chose which of three men got it. You still know their names. You never told anyone how you chose.' },
  segments: [
    walk(600, [
      sc(2, 's', 'Walk. Ten minutes. Your heart rate recovers faster this week — the file says so, therefore it is true.'),
      sc(150, 'h', 'Green sparks over the river. That was the signal. Incoming wounded, as many as the runners could carry, and the whole crypt would turn like a ship coming about.'),
      sc(340, 'h', 'Millbank. Sixteen wounded through the door in one hour. I ran the line — airway, bleeding, breaks, curses — deciding in seconds who could wait and who could not. Nineteen years old, deciding that.'),
      sc(530, 's', 'Drills. Thirty seconds hard, five heel lifts, ninety walking. Tonight you are a stretcher-bearer. Move like one.'),
    ]),
    ...w2drills(
      ['Run — the sparks are green, they’re coming in.', 'Run. Second stretcher.', 'Run. You’re at the door, take the weight.', 'Run. Nearly through the worst of it.', 'Last one. Run — and then it’s quiet.'],
      [null, 'Heels — one, two, three, four, five. Steady hands need steady legs.', null, null, 'Last lifts. One — two — three — four — five. Done.'],
    ),
    freeform(600, [
      sc(0, 's', 'Free-form, ten minutes. You know the drill by now.'),
      sc(140, 'h', 'The wounded that night came in a stranger’s wagon. Hooded, gloved, gone before anyone thought to thank him. He came four times that winter. He never once let us see his face.'),
      sc(330, 'h', 'But I saw his hands. Pale, fine, a signet ring turned inward so the crest wouldn’t show. I noted it the way I noted everything — a symptom filed for later.'),
      sc(500, 'h', 'Later is now, I suppose. The High Reeve wears a ring turned inward. I checked this morning. He saw me checking, and something behind his face fell over like a shelf.'),
      sc(575, 's', 'Time. Walk. Whatever you were chewing on that last stretch — swallow it or spit it out. It made you fast.'),
    ]),
  ],
};

export const m06 = {
  id: 'm06', week: 2, workout: 3, title: 'The Visitor',
  summary: 'Week two closes. Runs, lifts, and a face under a hood.',
  synopsis: 'The war needed medicine, and medicine needed money, and money came from somewhere it should never have come from. The memory sharpens: the night the hooded visitor stayed too long, and you followed him out.',
  collectible: { id: 'mug', name: 'An enamel mug', icon: '&#9749;', note: 'Recovered memory: tea gone cold on a crypt step, two people not looking at each other. He drank from the chipped side rather than complain. You noticed.' },
  segments: [
    walk(600, [
      sc(2, 's', 'Last session of week two. Walk. Next week the runs lengthen to a full minute, so enjoy your little sprints while they last.'),
      sc(160, 'h', 'The crates were always unmarked. Blood-replenisher, dittany, silver-thread sutures — supplies the Order hadn’t been able to buy for a year. Nobody asked where they came from. In a war, you don’t interrogate miracles.'),
      sc(350, 'h', 'I asked. Of course I asked. I followed the hooded man out into the frost and demanded a name, because apparently I have never once in my life been sensible.'),
      sc(530, 's', 'Drills — five rounds. Go on.'),
    ]),
    ...w2drills(
      ['Run. You’re following him — keep up.', 'Run. He walks fast for a man carrying secrets.', 'Halfway. Run.', 'Run. Almost caught him now.', 'Last one — run, and don’t let go of the question.'],
    ),
    freeform(600, [
      sc(0, 's', 'Ten minutes. Yours.'),
      sc(140, 'h', 'He stopped at the lychgate. I remember the frost creaking. I said, tell me your name or the crates stop coming through my ward. And he laughed — one breath of a laugh, like it escaped custody.'),
      sc(330, 'h', 'He said: you’d refuse medicine out of principle, Granger? And the fog in me shivers — because he knew my name, and I knew that drawl, and neither of us said the obvious out loud. The frost. The gate. Pale hair under the hood.'),
      sc(510, 'h', 'The memory ends there. Cut clean, like everything else — like someone took shears to my life. But I know who the visitor was. I have known since the ring. I am just not ready to think it yet.'),
      sc(580, 's', 'Time. Week two complete. Rest tomorrow — healer’s orders, and I outrank your stubbornness.'),
    ]),
  ],
};

export const week2 = [m04, m05, m06];
