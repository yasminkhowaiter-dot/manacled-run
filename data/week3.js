import { walk, run, freeform, stretch, exercise, rep, sc } from './util.js';

// WEEK 3 — THE TRAINING. Draco's voice enters the flashbacks: the Order cleared
// you for field work, and its least likely asset was ordered to make you fast.
// Structure: 5 min walk, 5 min free-form, (1 min run + 10 knee lifts + 1 min
// walk) x4, 8 min free-form, 2 min walk, 8 min free-form, 2 min stretch.

const knees = (text) => exercise('10 knee lifts', 40, [
  sc(0, 'd', text || 'Knees. To your hands. One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten.'),
]);

export const m07 = {
  id: 'm07', week: 3, workout: 1, title: 'A Reluctant Tutor',
  summary: 'One-minute runs and knee lifts. His first lesson.',
  synopsis: 'The Order needed its healer in the field, and the field kills the slow. So the spy who brought the medicine was given a new task he wanted even less: teach Granger to run. The memory returns from the first insult onward.',
  collectible: { id: 'knife', name: 'A leather-gripped knife', icon: '&#128481;', note: 'Recovered memory: he set it on the wall between you at the first lesson. "When you can outrun me, I’ll teach you the knife. Until then, the knife would just be something for them to take."' },
  segments: [
    walk(300, [
      sc(2, 's', 'Week three. The runs lengthen to a full minute today, and we add knee lifts — drive the knee to your waist, ten of them, sharp. Walk while I lecture.'),
      sc(120, 'h', 'It surfaced whole this morning, like a wreck at low tide: a walled kitchen garden behind the safehouse. Frost on the cabbages. And Draco Malfoy, arms crossed, looking at me like a problem he’d been assigned.'),
      sc(230, 'h', 'Kingsley’s orders. The healer goes into the field; the field requires fitness; our intelligence asset requires cover for his visits. Two birds. Malfoy looked at the sky and said something unforgivable about the bird.'),
    ]),
    freeform(300, [
      sc(0, 'd', 'Five minutes, any pace you can hold. I’m told you’re clever, Granger, so here is the entire theory of running: the war does not care how clever you are when the snatchers come. Move.'),
      sc(150, 'h', 'He ran beside me that first day without breathing hard, which I found genuinely offensive.'),
    ]),
    ...rep(4, i => [
      run(60, [sc(0, 'd', [
        'One minute, hard as you can hold. If you pace it wrong, you’ll learn something. Go.',
        'Again. And stop watching your feet — the ground isn’t going anywhere. Eyes up.',
        'Third. You slowed at the end of the last one. End strong or don’t bother starting. Go.',
        'Last one. Whatever’s left — spend it. Go.',
      ][i])]),
      knees([
        'Knees up. Ten. To the waist, not this polite curtsy you’re doing. One — two — three — keep going — ten.',
        'Ten more. Drive them. A high knee clears a hedge, a low knee catches it and you die in a field. Up!',
        'Again, ten. Better. Marginally.',
        'Final set. Ten. All the way through — done. Walk.',
      ][i]),
      walk(60),
    ]),
    freeform(480, [
      sc(0, 'd', 'Eight minutes now, continuous. Your pace, but keep moving. In the field this is called covering ground. Do it badly and it’s called being found.'),
      sc(240, 'h', 'Halfway. He trained me like he insulted me: precisely, thoroughly, and never once looking away.'),
      sc(420, 'd', 'Minute left. Hold what you have.'),
    ]),
    walk(120, [sc(5, 'd', 'Walk. Two minutes. Breathe. No, properly — in for four, out for four. You’re not dying, you’re just new.')]),
    freeform(480, [
      sc(0, 'd', 'Once more. Eight minutes. The second effort is the one that counts — anyone can run when they’re fresh.'),
      sc(230, 'h', 'I asked him why he was really doing this — the medicine, the intelligence, the frost-bitten mornings teaching a mudblood to run. He said: personal reasons. And ran faster so I couldn’t see his face.'),
      sc(440, 'd', 'And… enough. Walk.'),
    ]),
    stretch(120, [
      sc(0, 's', 'Stretch. Calves against the wall, then the front of the thigh. Hold each for thirty seconds — no bouncing.'),
      sc(80, 'h', 'Present day, gardens, green silk life: I did knee lifts by the fountain this morning, and up in the west window the High Reeve turned abruptly and left. As if he’d seen a ghost do them before.'),
    ]),
  ],
};

export const m08 = {
  id: 'm08', week: 3, workout: 2, title: 'Feet, Granger',
  summary: 'Footwork lessons. Four hard minutes, two long runs.',
  synopsis: 'Lesson two, remembered in full: cadence, footfall, and the art of not dying on bad ground. "They curse low," he said. "Everyone guards the heart. Nobody guards the ankles."',
  collectible: { id: 'stopwatch', name: 'A brass stopwatch', icon: '&#9202;', note: 'Recovered memory: he timed everything and told you nothing. Weeks later you found the notebook — every split recorded, every improvement underlined. Twice.' },
  segments: [
    walk(300, [
      sc(2, 's', 'Walk, five minutes. Whatever has you smiling this week, I shall assume it is the cardiovascular benefits.'),
      sc(130, 'h', 'Cadence, he said. Short, quick steps. Loud runners die; heel-strikers announce themselves like church bells. He made me run on frost so he could hear my mistakes.'),
      sc(240, 'h', 'They curse low, Granger. Everyone guards the heart. Nobody guards the ankles. Feet. FEET. — I heard it in my sleep for a week. I hear it now.'),
    ]),
    freeform(300, [
      sc(0, 'd', 'Five minutes moving, quick and quiet. If I can hear your footsteps, so can everything else in this field.'),
      sc(160, 'h', 'He threw walnuts at my shoulders when my eyes dropped. I want to report that I caught one and threw it back, and that he almost — almost — smiled.'),
    ]),
    ...rep(4, i => [
      run(60, [sc(0, 'd', [
        'A minute, fast. Light feet. Imagine the ground is someone you’re trying not to wake. Go.',
        'Again. Quicker steps, same speed — shorten the stride, raise the rhythm. Go.',
        'Third. There’s a ditch in every field in England. Pick your line early. Go.',
        'Last. Everything, quietly. Go.',
      ][i])]),
      knees([
        'Knees, ten. This is the hedge drill — up and OVER something, every rep. One — two — up! — keep them coming.',
        'Ten more. You’re quicker this week. Don’t preen, it’s unbecoming. Up.',
        'Again. Ten. Low knees catch hedges. Hedges win. Up!',
        'Last set — ten, clean ones. Done. Walk.',
      ][i]),
      walk(60),
    ]),
    freeform(480, [
      sc(0, 'd', 'Eight minutes. Cover ground. I’ll be quiet — the countryside rarely narrates.'),
      sc(250, 'h', 'Halfway. In the present, in the gardens, I practise the quick-step cadence on the gravel paths. Yesterday the gravel gave me away and one of the peacocks screamed like a dying man. Even the birds here are dramatic.'),
      sc(430, 'd', 'One minute. Finish properly.'),
    ]),
    walk(120, [sc(5, 'd', 'Walk. Two minutes. Drink something if you have it. Hydration is not optional; heroics are.')]),
    freeform(480, [
      sc(0, 'd', 'Second eight. Same instruction, tired legs. This is the whole war, Granger: the same instruction, tired legs.'),
      sc(240, 'h', 'I asked him once what he was so afraid of, that he trained me like the snatchers were already at the gate. He said nothing for a hundred metres. Then: being right.'),
      sc(445, 'd', 'Enough. Walk it off.'),
    ]),
    stretch(120, [
      sc(0, 's', 'Stretching. Calves, thighs, and the hip flexors — those knee lifts will bill you tomorrow otherwise.'),
      sc(75, 'h', 'The High Reeve walked the yew alley while I stretched, close enough that I heard him stop. When I turned, there were footprints in the dew — light ones. Forefoot first. Quick and quiet.'),
    ]),
  ],
};

export const m09 = {
  id: 'm09', week: 3, workout: 3, title: 'Dawn Hills',
  summary: 'Week three closes on the hill behind the safehouse.',
  synopsis: 'The hill had no name, so you named it after him: pointless, punishing, impossible to like. And yet — the morning you beat him to the top, the mask slipped, and underneath it was something that looked terribly like pride.',
  collectible: { id: 'scarf', name: 'A dawn-grey scarf', icon: '&#129507;', note: 'Recovered memory: he wore it up the hill every morning and swore it was because of the cold, not because a healer had once said the cold was bad for dueling wounds. You had said that. To him. About his shoulder.' },
  segments: [
    walk(300, [
      sc(2, 's', 'Last session of week three. Walk. Your file now says "remarkable progress," which has made the Reeve’s household strangely quiet about you.'),
      sc(120, 'h', 'The hill came back last night — the whole grey cathedral of that dawn. Him ahead of me. Frost smoking off the grass. My lungs mutinous. And at the top, the whole valley suddenly worth it.'),
      sc(230, 'h', 'He said the hill was the only honest teacher I’d ever had. It doesn’t flatter, it doesn’t curve marks, and it doesn’t care whose blood you have. He looked almost wistful about that last part.'),
    ]),
    freeform(300, [
      sc(0, 'd', 'Five minutes to wake the legs. The hill is patient. The hill has all morning.'),
      sc(170, 'h', 'Six weeks of lessons by then. He’d stopped calling me Granger like a slur and started saying it like punctuation.'),
    ]),
    ...rep(4, i => [
      run(60, [sc(0, 'd', [
        'The slope starts here. One minute, lean into it, short steps. Go.',
        'Again. The hill doesn’t negotiate. Neither do I. Go.',
        'Third climb. This is where you passed me, that morning. I remember deciding to let you. I remember lying to myself about deciding it. Go.',
        'Last climb. Summit’s yours if you take it. TAKE it. Go.',
      ][i])]),
      knees([
        'Knees, ten, even on the slope — especially on the slope. Up!',
        'Ten. Climbing is knee lifts with scenery. Up.',
        'Again. Ten more. You’re not even swearing at me any more — growth. Up.',
        'Final ten of the week. Make them beautiful. Done.',
      ][i]),
      walk(60),
    ]),
    freeform(480, [
      sc(0, 'd', 'Eight minutes, rolling ground. Find the rhythm that survives hills. It exists. It’s yours once you find it; no one can confiscate a rhythm.'),
      sc(250, 'h', 'At the top, that morning, I turned to gloat and he was already looking at me. Not at the mudblood. Not at the asset. At me. The frost dripped. Nobody said anything for entirely too long.'),
      sc(440, 'd', 'One minute. Hold it.'),
    ]),
    walk(120, [sc(5, 'd', 'Walk. Two minutes. That, for the record, is what the top of a hill feels like. Memorise it. You’ll want it again.')]),
    freeform(480, [
      sc(0, 'd', 'Last eight of the week. Downhill half — control it, don’t let it control you. Braking is footwork too.'),
      sc(240, 'h', 'In the gardens this morning there was a scarf on the fountain rim. Dawn-grey, folded once. No note. The maids swear no one had been out. I wore it. I am choosing not to examine why.'),
      sc(445, 'd', 'Enough. Walk. …Not bad, Granger. Not bad at all.'),
    ]),
    stretch(120, [
      sc(0, 's', 'Stretch thoroughly — week four brings pace work and I need those hamstrings cooperative.'),
      sc(80, 'h', 'Three weeks. The fog is half gone and what’s underneath is a war, a hospital, and him. I should be afraid of how much more there is. Instead I keep running toward it.'),
    ]),
  ],
};

export const week3 = [m07, m08, m09];
