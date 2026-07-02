// Segment builders. A scene is {at: seconds-into-segment, sp: 'd'|'h'|'s', text}.
export const S = (type, secs, opts = {}) => ({ type, secs, ...opts });

export const walk     = (secs, scenes, detail) => S('walk', secs, { scenes, detail });
export const fastwalk = (secs, scenes, detail) => S('fastwalk', secs, { scenes, detail });
export const run      = (secs, scenes, detail) => S('run', secs, { scenes, detail });
export const slowrun  = (secs, scenes, detail) => S('slowrun', secs, { scenes, detail });
export const freeform = (secs, scenes) => S('freeform', secs, { scenes, detail: 'your pace, your choice' });
export const stretch  = (secs, scenes) => S('stretch', secs, { scenes });
export const rest     = (secs, scenes) => S('rest', secs, { scenes });
export const exercise = (label, secs, scenes) => S('exercise', secs, { label, detail: label, scenes });

// Repeat a block n times; make(i) returns an array of segments for rep i.
export const rep = (n, make) => Array.from({ length: n }, (_, i) => make(i)).flat();

export const sc = (at, sp, text) => ({ at, sp, text });
