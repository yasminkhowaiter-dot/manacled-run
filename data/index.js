import { week1 } from './week1.js';
import { week2 } from './week2.js';
import { week3 } from './week3.js';
import { week4 } from './week4.js';
import { week5 } from './week5.js';
import { week6 } from './week6.js';
import { week7 } from './week7.js';
import { week8 } from './week8.js';

export const MISSIONS = [...week1, ...week2, ...week3, ...week4, ...week5, ...week6, ...week7, ...week8];

export const WEEKS = {
  1: { title: 'The Gardens', note: 'Escorted walks and ten 15-second runs. The fog begins to thin.' },
  2: { title: 'The Healer', note: '30-second runs and heel lifts. The crypt hospital returns.' },
  3: { title: 'The Training', note: 'One-minute runs and knee lifts. His first lessons.' },
  4: { title: 'The Reconnaissance', note: 'Pace drills and a 15-minute run. Walking like you belong.' },
  5: { title: 'The War', note: 'Slow-run intervals and two ten-minute runs. Nightingale flies.' },
  6: { title: 'The Fall', note: 'Half-squats and three sevens. The heavy door opens.' },
  7: { title: 'The Earring', note: 'Skipping drills. His voice goes live. The way out takes shape.' },
  8: { title: 'The Escape', note: 'Long runs, last checks — and five kilometres to the sea.' },
};
