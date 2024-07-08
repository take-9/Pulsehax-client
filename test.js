bs = function() {
  G(),
  it !== Bt.settings.fpsLimit && (clearInterval(he),
  "vsync" !== Bt.settings.fpsLimit && (he = setInterval(()=>gs(), 1e3 / Bt.settings.fpsLimit)),
  it = Bt.settings.fpsLimit),
  no.gain.setValueAtTime(0, oo.currentTime),
  w = Math.round((new Date).getTime() / 1e3),
  rt = performance.now() - st,
  st = performance.now(),
  xe = !1,
  kt = width > height ? width / 64 : height / 64;
  var e = verge.viewportW()
    , t = verge.viewportH()
    , e = (!(0 === Ke || 1e3 <= millis() - Ke) || width === e && height === t || (resizeCanvas(e, t),
  console.log("Resized"),
  Ke = millis(),
  fitth = width > height ? height : width),
  Fe.log.push(rt),
  50 < Fe.log.length && Fe.log.shift(),
  Fe.log.reduce((e,t)=>e + t, 0) / Fe.log.length);
  Fe.dis = 1 / (e / 1e3),
  "c25cd9c8-d6e1-4d7e-8faa-ecd5e277c833" === T.uuid && (Tt.ranks[Tt.ranks.length - 2].symbol = "7"),
  0 === Bt.settings.language ? xt = "en" : 1 === Bt.settings.language ? xt = "de" : 2 === Bt.settings.language ? xt = "es" : 3 === Bt.settings.language ? xt = "fr" : 4 === Bt.settings.language ? xt = "ru" : 5 === Bt.settings.language ? xt = "nl" : 6 === Bt.settings.language ? xt = "th" : 7 === Bt.settings.language ? xt = "ro" : 8 === Bt.settings.language ? xt = "pt_BR" : 9 === Bt.settings.language ? xt = "pl" : 10 === Bt.settings.language ? xt = "tl" : 11 === Bt.settings.language && (xt = "tr"),
  0 === Bt.settings.keyboard ? Tt.keys = ["R", "T", "Y", "F", "G", "H", "V", "B", "N"] : 1 === Bt.settings.keyboard ? Tt.keys = ["R", "T", "Z", "F", "G", "H", "V", "B", "N"] : 2 === Bt.settings.keyboard ? Tt.keys = [["Numpad7", "Digit7"], ["Numpad8", "Digit8"], ["Numpad9", "Digit9"], ["Numpad4", "Digit4"], ["Numpad5", "Digit5"], ["Numpad6", "Digit6"], ["Numpad1", "Digit1"], ["Numpad2", "Digit2"], ["Numpad3", "Digit3"]] : 3 === Bt.settings.keyboard ? Tt.keys = ["KeyR", "KeyT", "KeyY", "KeyF", "KeyG", "KeyH", "KeyV", "KeyB", "KeyN"] : 4 === Bt.settings.keyboard ? Tt.keys = ["PrintScreen", "ScrollLock", "Pause", "Insert", "Home", "PageUp", "Delete", "End", "PageDown"] : 5 === Bt.settings.keyboard && (Tt.keys = [["KeyR", "Numpad7", "Digit7"], ["KeyT", "Numpad8", "Digit8"], ["KeyY", "Numpad9", "Digit9"], ["KeyF", "Numpad4", "Digit4"], ["KeyG", "Numpad5", "Digit5"], ["KeyH", "Numpad6", "Digit6"], ["KeyV", "Numpad1", "Digit1"], ["KeyB", "Numpad2", "Digit2"], ["KeyN", "Numpad3", "Digit3"]]),
  !(Ut(T.uuid, "uuid").patreon > w) && "Loading..." !== Ut(T.uuid, "uuid").patreon && "Loading..." !== Ut(T.uuid, "uuid").user && null !== Ut(T.uuid, "uuid").user && void 0 !== Ut(T.uuid, "uuid").user && 0 < T.uuid.length && (Bt.settings.menuMusic = "",
  Bt.settings.defaultBackground = ""),
  $ = qe[Bt.settings.themeSel]
}

Tt.hitValues = [
  {
    name: 'Ω',
    color: color(200,200,200),
    timing: 0.01,
    hp: 10,
    comboBreak: false,
    acc: 100,
    points: 150
  },
  {
    name: 'Π',
    color: color(127,227,225),
    timing: 0.025,
    hp: 9,
    comboBreak: false,
    acc: 95,
    points: 140
  },
  {
    name: 'SS:',
    color: color(150,215,170),
    timing: 0.04,
    hp: 8,
    comboBreak: false,
    acc: 90,
    points: 130
  },
  {
    name: 'SS.',
    color: color(175,195,110),
    timing: 0.055,
    hp: 7,
    comboBreak: false,
    acc: 86,
    points: 130
  },
  {
    name: 'SS',
    color: color(201,176,55),
    timing: 0.07,
    hp: 6,
    comboBreak: false,
    acc: 82,
    points: 120
  },
  {
    name: 'S:',
    color: color(200,180,100),
    timing: 0.085,
    hp: 5,
    comboBreak: false,
    acc: 78,
    points: 120
  },
  {
    name: 'S.',
    color: color(200,190,150),
    timing: 0.1,
    hp: 4,
    comboBreak: false,
    acc: 74,
    points: 110
  },
  {
    name: 'S',
    color: color(200,200,200),
    timing: 0.115,
    hp: 3,
    comboBreak: false,
    acc: 70,
    points: 100
  },
  {
    name: 'A:',
    color: color(150,194,215),
    timing: 0.13,
    hp: 2,
    comboBreak: false,
    acc: 66,
    points: 100
  },
  {
    name: 'A.',
    color: color(75,182,235),
    timing: 0.14500000000000002,
    hp: 1,
    comboBreak: false,
    acc: 62,
    points: 90
  },
  {
    name: 'A',
    color: color(0,175,255),
    timing: 0.16000000000000003,
    hp: 0,
    comboBreak: true,
    acc: 58,
    points: 90
  },
  {
    name: 'B:',
    color: color(0,200,180),
    timing: 0.17500000000000004,
    hp: -0.07142857142857142,
    comboBreak: true,
    acc: 54,
    points: 80
  },
  {
    name: 'B.',
    color: color(0,225,90),
    timing: 0.19000000000000006,
    hp: -0.14285714285714285,
    comboBreak: true,
    acc: 50,
    points: 70
  },
  {
    name: 'B',
    color: color(0,255,0),
    timing: 0.20500000000000007,
    hp: -0.21428571428571427,
    comboBreak: true,
    acc: 46,
    points: 70
  },
  {
    name: 'C:',
    color: color(90,225,0),
    timing: 0.22000000000000008,
    hp: -0.2857142857142857,
    comboBreak: true,
    acc: 42,
    points: 60
  },
  {
    name: 'C.',
    color: color(180,200,0),
    timing: 0.2350000000000001,
    hp: -0.35714285714285715,
    comboBreak: true,
    acc: 38,
    points: 60
  },
  {
    name: 'C',
    color: color(255,175,0),
    timing: 0.2500000000000001,
    hp: -0.42857142857142855,
    comboBreak: true,
    acc: 34,
    points: 50
  },
  {
    name: 'D:',
    color: color(255,100,50),
    timing: 0.2650000000000001,
    hp: -0.5,
    comboBreak: true,
    acc: 30,
    points: 40
  },
  {
    name: 'D.',
    color: color(255,50,100),
    timing: 0.28000000000000014,
    hp: -0.5714285714285714,
    comboBreak: true,
    acc: 26,
    points: 40
  },
  {
    name: 'D',
    color: color(255,0,175),
    timing: 0.29500000000000015,
    hp: -0.6428571428571429,
    comboBreak: true,
    acc: 22,
    points: 30
  },
  {
    name: 'F:',
    color: color(255,0,100),
    timing: 0.31000000000000016,
    hp: -0.7142857142857143,
    comboBreak: true,
    acc: 18,
    points: 30
  },
  {
    name: 'F.',
    color: color(255,0,50),
    timing: 0.3250000000000002,
    hp: -0.7857142857142857,
    comboBreak: true,
    acc: 14,
    points: 20
  },
  {
    name: 'F',
    color: color(255,0,0),
    timing: 0.3400000000000002,
    hp: -0.8571428571428571,
    comboBreak: true,
    acc: 10,
    points: 10
  },
  {
    name: 'U',
    color: color(128,75,0),
    timing: 0.3550000000000002,
    hp: -0.9285714285714286,
    comboBreak: true,
    acc: 5,
    points: 10
  },
  {
    name: 'X',
    color: color(30,30,30),
    timing: 0.3700000000000002,
    hp: -1,
    comboBreak: true,
    acc: 0,
    points: 0
  }
];

Gi = function(hitScores) {
  let score = 0;
  if (!hitScores) {
    return 0;
  }
  for (let i = 0; i < hitScores.length; i++) {
    if(i > 100) {
      score += Math.sqrt(hitScores[i] / 100) * 100;
    } else {
      score += hitScores[i]
    }
  }

  score *= Math.pow(Zo(hitScores, !0), 3);

  return score * 10;
}

Zo = function(...e){
  return Tt.acc / 100;
}