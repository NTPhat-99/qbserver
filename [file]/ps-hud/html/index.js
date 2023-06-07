var ir = Object.defineProperty,
  lr = Object.defineProperties;
var rr = Object.getOwnPropertyDescriptors;
var Bo = Object.getOwnPropertySymbols;
var bi = Object.prototype.hasOwnProperty,
  ki = Object.prototype.propertyIsEnumerable;
var Zo = (n, e, t) =>
    e in n
      ? ir(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  sn = (n, e) => {
    for (var t in e || (e = {})) bi.call(e, t) && Zo(n, t, e[t]);
    if (Bo) for (var t of Bo(e)) ki.call(e, t) && Zo(n, t, e[t]);
    return n;
  },
  Et = (n, e) => lr(n, rr(e));
var Do = (n, e) => {
  var t = {};
  for (var o in n) bi.call(n, o) && e.indexOf(o) < 0 && (t[o] = n[o]);
  if (n != null && Bo)
    for (var o of Bo(n)) e.indexOf(o) < 0 && ki.call(n, o) && (t[o] = n[o]);
  return t;
};
var We = (n, e, t) => (Zo(n, typeof e != "symbol" ? e + "" : e, t), t);
import {
  w as Rt,
  g as ut,
  f as sr,
  a as Si,
  b as ar,
  c as ur,
  d as fr,
  e as cr,
  h as hr,
  i as gr,
  j as dr,
  k as mr,
  l as _r,
  m as ii,
  n as wr,
  o as br,
  p as kr,
  q as Sr,
  r as Wl,
  s as pr,
  t as Cr,
  u as vr,
  v as Dr,
  x as Ar,
  y as Tr,
  z as Ir,
  A as yr,
  B as Pt,
  C as Jl,
  S as ue,
  D as fe,
  E as ce,
  F as Fe,
  G as A,
  H as P,
  I as y,
  J as O,
  K as r,
  L as R,
  M as H,
  N as m,
  O as B,
  P as C,
  Q as T,
  R as E,
  T as U,
  U as de,
  V as nn,
  W as pn,
  X as te,
  Y as be,
  Z as un,
  _ as he,
  $ as ge,
  a0 as Ao,
  a1 as dn,
  a2 as mn,
  a3 as _n,
  a4 as wn,
  a5 as Mt,
  a6 as Yn,
  a7 as qn,
  a8 as Mr,
  a9 as so,
  aa as Yr,
  ab as Ke,
  ac as Te,
  ad as Xr,
  ae as Ro,
  af as oe,
  ag as ie,
  ah as St,
  ai as Or,
  aj as Fr,
  ak as Er,
  al as pi,
  am as Ci,
  an as Vr,
  ao as No,
  ap as Hr,
  aq as Rr,
  ar as Pr,
  as as Br,
  at as Ur,
  au as vi,
  av as Ko,
  aw as Zl,
  ax as zr,
  ay as Lr,
  az as qr,
  aA as Nr,
  aB as jr,
  aC as Gr,
  aD as Wr,
  aE as Jr,
  aF as Zr,
} from "./vendor.js";
const Kr = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerpolicy && (l.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function o(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = t(i);
    fetch(i.href, l);
  }
};
Kr();
const Qr = () => {
  const n = {
      heading: 1,
      show: !1,
      street1: "",
      street2: "",
      showCompass: !0,
      showStreets: !0,
      showPointer: !0,
      showDegress: !0,
    },
    { subscribe: e, set: t, update: o } = Rt(n);
  return sn(
    { subscribe: e, set: t, update: o },
    {
      receiveCompassMessage(l) {
        o(
          (s) => (
            (s.show = l.show),
            (s.showCompass = l.showCompass),
            (s.street1 = l.street1),
            (s.street2 = l.street2),
            (s.showStreets = l.showStreets),
            (s.showPointer = l.showPointer),
            (s.showDegress = l.showDegress),
            s
          )
        );
      },
      receiveCompassCloseMessage(l) {
        o((s) => ((s.show = l.show), s));
      },
      receiveCompassOpenMessage(l) {
        o((s) => ((s.show = l.show), (s.showCompass = l.showCompass), s));
      },
      receiveHeadingMessage(l) {
        o((s) => ((s.heading = l.value - 90), s));
      },
    }
  );
};
var Eo = Qr();
const xr = () => {
  const n = {
      cash: 0,
      bank: 0,
      amount: 0,
      plus: !1,
      minus: !1,
      showCash: !1,
      showBank: !1,
      showUpdate: !1,
    },
    { subscribe: e, set: t, update: o } = Rt(n),
    i = {
      finishShowingUpdate() {
        o((l) => ((l.showUpdate = !1), l));
      },
      finishShowingMoney(l) {
        o((s) => (l == "cash" ? (s.showCash = !1) : (s.showBank = !1), s));
      },
      formatMoney(l) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        }).format(l);
      },
      receiveShowConstantMessage(l) {
        o(
          (s) => (
            (s.showCash = !0),
            (s.showBank = !0),
            (s.cash = l.cash),
            (s.bank = l.bank),
            s
          )
        );
      },
      receiveUpdateMessage(l) {
        o(
          (s) => (
            (s.showUpdate = !0),
            (s.amount = l.amount),
            (s.bank = l.bank),
            (s.cash = l.cash),
            (s.minus = l.minus),
            (s.plus = !l.minus),
            l.type == "cash"
              ? (s.showCash = !0)
              : l.type == "bank" && (s.showBank = !0),
            setTimeout(() => i.finishShowingUpdate(), 3e3),
            setTimeout(() => i.finishShowingMoney(l.type), 4e3),
            s
          )
        );
      },
      receiveShowAccountsMessage(l) {
        o(
          (s) => (
            l.type == "cash" && !s.showCash
              ? ((s.showCash = !0), (s.cash = l.cash))
              : l.type == "bank" &&
                !s.showBank &&
                ((s.showBank = !0), (s.bank = l.bank)),
            setTimeout(() => i.finishShowingMoney(l.type), 3500),
            s
          )
        );
      },
    };
  return sn({ subscribe: e, set: t, update: o }, i);
};
var Lo = xr();
const li = [
    "voice",
    "health",
    "armor",
    "hunger",
    "thirst",
    "stress",
    "oxygen",
    "armed",
    "parachute",
    "engine",
    "harness",
    "cruise",
    "nitro",
    "dev",
  ],
  $r = [
    "standard",
    "bottom-right-row",
    "center-bottom-row",
    "left-bottom-column",
    "right-bottom-column",
    "top-left-row",
    "top-right-row",
  ],
  Kl = [
    "badge",
    "circle-ring",
    "circle-ring-whole",
    "circle-circle-fill",
    "circle-square-fill",
    "circle-whole",
    "diamond-ring",
    "diamond-whole",
    "hexagon-ring",
    "hexagon-whole",
    "horizontal-bar",
    "icon-percentage",
    "pill-ring",
    "pill-whole",
    "square-circular-fill",
    "square-ring",
    "square-whole",
    "star-ring",
    "triangle-ring",
  ];
class jo {
  constructor(
    e,
    {
      icon: t = null,
      isShowing: o = !1,
      name: i = "",
      progressValue: l = 100,
    } = {}
  ) {
    We(this, "height", 50);
    We(this, "icon", null);
    We(this, "iconScaling", 0.4);
    We(this, "iconTranslateX", 0);
    We(this, "iconTranslateY", 0);
    We(this, "isShowing", !0);
    We(this, "name", "");
    We(this, "progressValue", 100);
    We(this, "shape", "circle-whole");
    We(this, "rotateDegree", 0);
    We(this, "translateX", 0);
    We(this, "translateY", 0);
    We(this, "width", 50);
    switch (e) {
      case "circle-circle-fill":
      case "circle-square-fill":
      case "circle-whole":
        this.iconScaling = 0.55;
        break;
      case "diamond-whole":
        (this.height = 60), (this.width = 60), (this.iconScaling = 0.35);
        break;
      case "hexagon-whole":
        this.iconScaling = 0.45;
        break;
      case "horizontal-bar":
        this.iconScaling = 0.6;
        break;
    }
    (this.shape = e),
      (this.icon = t),
      (this.isShowing = o),
      (this.name = i),
      (this.progressValue = l);
  }
}
class Ql extends jo {
  constructor(e, t = {}) {
    super(e, t);
    We(this, "displayOutline", !0);
    We(this, "iconRotateDegree", 0);
    We(this, "ringSize", 4);
    switch (e) {
      case "circle-ring":
      case "circle-ring-whole":
        (this.iconScaling = 0.4), (this.ringSize = 6);
        break;
      case "diamond-ring":
        (this.height = 60),
          (this.width = 60),
          (this.iconScaling = 0.3),
          (this.ringSize = 1.5);
        break;
      case "hexagon-ring":
        (this.iconScaling = 0.4), (this.ringSize = 2);
        break;
      case "square-ring":
        this.ringSize = 12;
        break;
      case "star-ring":
        (this.height = 55),
          (this.width = 55),
          (this.ringSize = 3),
          (this.iconScaling = 0.35),
          (this.iconTranslateY = 0.06);
        break;
      case "triangle-ring":
        (this.height = 55),
          (this.width = 55),
          (this.iconScaling = 0.3),
          (this.iconTranslateY = 0.09),
          (this.ringSize = 3);
        break;
    }
  }
}
const xl = [
  67, 111, 112, 121, 114, 105, 103, 104, 116, 32, 169, 32, 50, 48, 50, 50, 32,
  80, 114, 111, 106, 101, 99, 116, 32, 83, 108, 111, 116, 104, 46, 32, 65, 108,
  108, 32, 114, 105, 103, 104, 116, 115, 32, 114, 101, 115, 101, 114, 118, 101,
  100, 46,
];
class es extends jo {
  constructor(e, t = {}) {
    super(e, t);
    We(this, "xAxisRound", 5);
    We(this, "yAxisRound", 20);
    switch (e) {
      case "badge":
        (this.height = 4),
          (this.width = 35),
          (this.iconScaling = 1.4),
          (this.xAxisRound = 2),
          (this.yAxisRound = 2);
        break;
      case "pill-whole":
        (this.height = 75),
          (this.width = 42),
          (this.iconScaling = 0.55),
          (this.xAxisRound = 25),
          (this.yAxisRound = 25);
        break;
    }
  }
}
class ns extends Ql {
  constructor(e, t = {}) {
    super(e, t);
    We(this, "xAxisRound", 5);
    We(this, "yAxisRound", 20);
    switch (e) {
      case "pill-ring":
        (this.height = 80),
          (this.width = 50),
          (this.iconScaling = 0.4),
          (this.xAxisRound = 18),
          (this.yAxisRound = 18),
          (this.ringSize = 6.5);
    }
  }
}
function Vo(n, e = {}) {
  switch (n) {
    case "badge":
    case "pill-whole":
      return new es(n, e);
    case "circle-circle-fill":
    case "circle-square-fill":
    case "circle-whole":
    case "diamond-whole":
    case "hexagon-whole":
    case "horizontal-bar":
    case "square-circular-fill":
      return new jo(n, e);
    case "circle-ring":
    case "circle-ring-whole":
    case "diamond-ring":
    case "hexagon-ring":
    case "square-ring":
    case "star-ring":
    case "triangle-ring":
    case "square-whole":
      return new Ql(n, e);
    case "pill-ring":
      return new ns(n, e);
    default:
      return new jo(n, e);
  }
}
const $l = "circle-ring";
function Vn(n = "", e = !1, t = null) {
  return Vo($l, { isShowing: e, icon: t, name: n });
}
const ts = (n) => {
  const e = Math.max(0, Math.min(100, n));
  return Math.round((e / 100) * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();
};
function Je(n, e, t = "", o = "#FFFFFFFF", i = "#212121FF") {
  return {
    iconColor: o,
    iconContrast: 100,
    iconDropShadowAmount: 0,
    innerColor: i,
    name: n,
    outlineColor: t || e + ts(40),
    outlineContrast: 100,
    outlineDropShadowAmount: 0,
    progressColor: e,
    progressContrast: 100,
    progressDropShadowAmount: 0,
  };
}
function Hn() {
  return qo($l);
}
function qo(n) {
  let e = {};
  switch (n) {
    case "badge":
    case "circle-ring":
    case "diamond-ring":
    case "hexagon-ring":
    case "pill-ring":
    case "square-ring":
    case "square-whole":
    case "star-ring":
    case "triangle-ring":
      e.innerColor = !0;
      break;
  }
  return e;
}
const Qo = "PSHudMenu",
  $o = "PSHudPlayerStatus",
  ei = "PSHudLayout",
  ni = "PSHudColor",
  er = "PSHudProfile";
function et(n) {
  return Math.min(n, 100);
}
const os = () => {
  let n = localStorage.getItem(ni),
    e = {};
  n && (e = JSON.parse(n));
  function t(a, c) {
    return e && e[a] != null ? e[a] : c;
  }
  function o() {
    return {
      globalColorSettings: t("globalColorSettings", {
        editableColors: Hn(),
        editSingleIconName: "voice",
        editSingleIconStage: 0,
        iconColor: "",
        iconContrast: 100,
        iconDropShadowAmount: 0,
        innerColor: "",
        outlineColor: "",
        outlineContrast: 100,
        outlineDropShadowAmount: 0,
        progressColor: "",
        progressContrast: 100,
        progressDropShadowAmount: 0,
      }),
      icons: {
        voice: t("voice", {
          currentEffect: 0,
          colorEffects: [
            Je("not-talking", "#FFFFFF"),
            Je("talking", "#FFFF3E"),
            Je("radio-talking", "#D64763"),
          ],
          editableColors: Hn(),
        }),
        health: t("health", {
          currentEffect: 0,
          colorEffects: [Je("alive", "#21ab61"), Je("dead", "#ff0000")],
          editableColors: Hn(),
        }),
        armor: t("armor", {
          currentEffect: 0,
          colorEffects: [Je("armor", "#326dbf"), Je("no-armor", "#ff0000")],
          editableColors: Hn(),
        }),
        hunger: t("hunger", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#dd6e14"), Je("starving", "#ff0000")],
          editableColors: Hn(),
        }),
        thirst: t("thirst", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#1a7cad"), Je("thirsty", "#ff0000")],
          editableColors: Hn(),
        }),
        stress: t("stress", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#dc0606")],
          editableColors: Hn(),
        }),
        oxygen: t("oxygen", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#8aa8bd")],
          editableColors: Hn(),
        }),
        armed: t("armed", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#ff4885")],
          editableColors: Hn(),
        }),
        parachute: t("parachute", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#b9ff28")],
          editableColors: Hn(),
        }),
        engine: t("engine", {
          currentEffect: 0,
          colorEffects: [
            Je("no-damage", "#3FA554"),
            Je("minor-damage", "#dd6e14"),
            Je("major-damage", "#ff0000"),
          ],
          editableColors: Hn(),
        }),
        harness: t("harness", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#b648ff")],
          editableColors: Hn(),
        }),
        cruise: t("cruise", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#ff4885")],
          editableColors: Hn(),
        }),
        nitro: t("nitro", {
          currentEffect: 0,
          colorEffects: [
            Je("no-nitro", "#ffffff"),
            Je("active-nitro", "#D64763"),
          ],
          editableColors: Hn(),
        }),
        dev: t("dev", {
          currentEffect: 0,
          colorEffects: [Je("normal", "#000000")],
          editableColors: Hn(),
        }),
      },
    };
  }
  const i = o(),
    { subscribe: l, set: s, update: f } = Rt(i);
  return sn(
    { subscribe: l, set: s, update: f },
    {
      resetColorEffects() {
        (e = {}), localStorage.removeItem(ni), s(o());
      },
      receiveUIUpdateMessage(a) {
        if (!a || !Object.keys(a).length) return;
        let c = ut(ne);
        f((d) => {
          let h, _;
          for ([h, _] of Object.entries(a))
            d.icons[h] = {
              currentEffect: 0,
              editableColors: qo(c.icons[h].shape),
              colorEffects: _.colorEffects,
            };
          return d;
        });
      },
      updateAllDefaultEffectColorSetting(a, c) {
        f((d) => {
          for (let h of Object.keys(d.icons))
            switch (a) {
              case "progressDropShadowAmount":
              case "iconDropShadowAmount":
              case "outlineDropShadowAmount":
                for (let _ of d.icons[h].colorEffects) _[a] = c;
                break;
              default:
                d.icons[h].colorEffects[0][a] = c;
                break;
            }
          return (d.globalColorSettings[a] = c), d;
        });
      },
      updateAllIconShapeEditableColor(a) {
        f((c) => {
          let d = qo(a);
          for (let h in c.icons) c.icons[h].editableColors = d;
          return (c.globalColorSettings.editableColors = d), c;
        });
      },
      updateDefaultEffectColorSetting(a, c, d) {
        f((h) => ((h.icons[a].colorEffects[0][c] = d), h));
      },
      updateIconColorToProgressColor() {
        f((a) => {
          for (const c of Object.values(a.icons))
            for (const d of c.colorEffects) d.iconColor = d.progressColor;
          return a;
        });
      },
      updateIconEffectStage(a, c) {
        f(
          (d) => (
            c < 0 ||
              c > d.icons[a].colorEffects.length - 1 ||
              (d.icons[a].currentEffect = c),
            d
          )
        );
      },
      updateIconShapeEditableColor(a, c) {
        f((d) => ((d.icons[a].editableColors = qo(c)), d));
      },
      updateColorSetting(a, c, d, h) {
        f(
          (_) => (
            c < 0 ||
              c > _.icons[a].colorEffects.length - 1 ||
              (_.icons[a].colorEffects[c][d] = h),
            _
          )
        );
      },
      updateProgressColor(a, c, d) {
        f(
          (h) => (
            c < 0 ||
              c > h.icons[a].colorEffects.length - 1 ||
              (h.icons[a].colorEffects[c].progressColor = d),
            h
          )
        );
      },
    }
  );
};
var re = os();
const is = () => {
  let n = localStorage.getItem($o),
    e = {};
  n && (e = JSON.parse(n));
  function t(a, c) {
    return e && e[a] != null ? e[a] : c;
  }
  function o() {
    return {
      designMode: !1,
      designProgress: 0,
      globalIconSettings: t(
        "globalIconSettings",
        ((k) => {
          var b = k,
            { isShowing: a, name: c, icon: d, progressValue: h } = b,
            _ = Do(b, ["isShowing", "name", "icon", "progressValue"]);
          return _;
        })(Vn())
      ),
      icons: {
        voice: t("voice", Vn("voice", !0, Si)),
        health: t("health", Vn("health", !1, ar)),
        armor: t("armor", Vn("armor", !1, ur)),
        hunger: t("hunger", Vn("hunger", !1, fr)),
        thirst: t("thirst", Vn("thirst", !1, cr)),
        stress: t("stress", Vn("stress", !1, hr)),
        oxygen: t("oxygen", Vn("oxygen", !1, gr)),
        armed: t("armed", Vn("armed", !1, dr)),
        parachute: t("parachute", Vn("parachute", !1, mr)),
        engine: t("engine", Vn("engine", !1, _r)),
        harness: t("harness", Vn("harness", !1, ii)),
        cruise: t("cruise", Vn("cruise", !1, wr)),
        nitro: t("nitro", Vn("nitro", !1, br)),
        dev: t("dev", Vn("dev", !1, kr)),
      },
      dynamicIcons: t("dynamicIcons", {
        armor: !1,
        engine: !1,
        health: !1,
        hunger: !1,
        nitro: !1,
        oxygen: !1,
        stress: !1,
        thirst: !1,
      }),
      saveUIState: "ready",
      show: !1,
      showingOrder: [
        "voice",
        "health",
        "armor",
        "hunger",
        "thirst",
        "stress",
        "oxygen",
        "armed",
        "parachute",
        "engine",
        "harness",
        "cruise",
        "nitro",
        "dev",
      ],
    };
  }
  const i = o(),
    { subscribe: l, set: s, update: f } = Rt(i),
    u = {
      resetPlayerStatusIcons() {
        (e = {}), localStorage.removeItem($o), s(Et(sn({}, o()), { show: !0 }));
      },
      updateAllIconsSettings(a, c) {
        f((d) => {
          for (let h in d.icons) a in d.icons[h] && (d.icons[h][a] = c);
          return d;
        });
      },
      updateAllDisplayOutline(a) {
        u.updateAllIconsSettings("displayOutline", a);
      },
      updateAllHeight(a) {
        u.updateAllIconsSettings("height", a);
      },
      updateAllIconScale(a) {
        u.updateAllIconsSettings("iconScaling", a);
      },
      updateAllRingSize(a) {
        u.updateAllIconsSettings("ringSize", a);
      },
      updateAllRoundXAxis(a) {
        u.updateAllIconsSettings("xAxisRound", a);
      },
      updateAllRoundYAxis(a) {
        u.updateAllIconsSettings("yAxisRound", a);
      },
      updateAllRotateDegree(a) {
        u.updateAllIconsSettings("rotateDegree", a);
      },
      updateAllShapes(a) {
        f((c) => {
          for (let d in c.icons) {
            let h = Vo(a, {
              icon: c.icons[d].icon,
              isShowing: c.icons[d].isShowing,
              name: c.icons[d].name,
              progressValue: c.icons[d].progressValue,
            });
            c.icons[d] = h;
          }
          return (
            (c.globalIconSettings = ((w) => {
              var g = w,
                { isShowing: d, name: h, icon: _, progressValue: k } = g,
                b = Do(g, ["isShowing", "name", "icon", "progressValue"]);
              return b;
            })(
              Vo(a, {
                icon: c.globalIconSettings.icon,
                isShowing: c.globalIconSettings.isShowing,
                name: c.globalIconSettings.name,
              })
            )),
            c
          );
        });
      },
      updateAllTranslateIconX(a) {
        u.updateAllIconsSettings("iconTranslateX", a);
      },
      updateAllTranslateIconY(a) {
        u.updateAllIconsSettings("iconTranslateY", a);
      },
      updateAllTranslateX(a) {
        u.updateAllIconsSettings("translateX", a);
      },
      updateAllTranslateY(a) {
        u.updateAllIconsSettings("translateY", a);
      },
      updateAllWidth(a) {
        u.updateAllIconsSettings("width", a);
      },
      updateIconShape(a, c) {
        f((d) => {
          let h = Vo(c, {
            icon: d.icons[a].icon,
            isShowing: d.icons[a].isShowing,
            name: d.icons[a].name,
            progressValue: d.icons[a].progressValue,
          });
          return (d.icons[a] = h), (d.icons[a].shape = c), d;
        });
      },
      updateIconSetting(a, c, d) {
        f((h) => ((h.icons[a][c] = d), h));
      },
      updateShowingDynamicIcon(a, c) {
        let d = !1;
        return (
          f((h) => {
            switch (a) {
              case "armor":
                (h.icons.armor.isShowing = u.staticGenericZeroHandleShow(
                  c,
                  h.icons.armor.progressValue
                )),
                  (d = h.icons.armor.isShowing);
                break;
              case "engine":
                (h.icons.engine.isShowing = u.staticEngineHandleShow(
                  c,
                  h.icons.engine.progressValue
                )),
                  (d = h.icons.engine.isShowing);
                break;
              case "health":
                (h.icons.health.isShowing = u.staticGenericHundredHandleShow(
                  c,
                  h.icons.health.progressValue
                )),
                  (d = h.icons.health.isShowing);
                break;
              case "hunger":
                (h.icons.hunger.isShowing = u.staticGenericHundredHandleShow(
                  c,
                  h.icons.hunger.progressValue
                )),
                  (d = h.icons.hunger.isShowing);
                break;
              case "nitro":
                (h.icons.nitro.isShowing = u.staticNitroHandleShow(
                  c,
                  h.icons.nitro.progressValue,
                  h.icons.engine.progressValue
                )),
                  (d = h.icons.nitro.isShowing);
                break;
              case "oxygen":
                (h.icons.oxygen.isShowing = u.staticGenericHundredHandleShow(
                  c,
                  h.icons.oxygen.progressValue
                )),
                  (d = h.icons.oxygen.isShowing);
                break;
              case "stress":
                (h.icons.stress.isShowing = u.staticGenericZeroHandleShow(
                  c,
                  h.icons.stress.progressValue
                )),
                  (d = h.icons.stress.isShowing);
                break;
              case "thirst":
                (h.icons.thirst.isShowing = u.staticGenericHundredHandleShow(
                  c,
                  h.icons.thirst.progressValue
                )),
                  (d = h.icons.thirst.isShowing);
                break;
            }
            return h;
          }),
          d
        );
      },
      updateAllShowingDynamicIcons(a) {
        f((c) => {
          for (const d in c.dynamicIcons)
            (c.dynamicIcons[d] = a),
              (c.icons[d].isShowing = u.updateShowingDynamicIcon(d, a));
          return c;
        });
      },
      receiveShowMessage(a) {
        f((c) => ((c.show = a.show), c));
      },
      receiveStatusUpdateMessage(a) {
        f(
          (c) => (
            (c.show = a.show),
            (c.icons.health.progressValue = et(a.health)),
            (c.icons.armor.progressValue = et(a.armor)),
            (c.icons.thirst.progressValue = et(a.thirst)),
            (c.icons.hunger.progressValue = et(a.hunger)),
            (c.icons.stress.progressValue = et(a.stress)),
            (c.icons.voice.progressValue = et(a.voice * 16.6)),
            (c.icons.oxygen.progressValue = et(a.oxygen)),
            (c.icons.parachute.progressValue = et(a.parachute)),
            (c.icons.engine.progressValue = et(a.engine)),
            (c.icons.harness.progressValue = et(a.hp * 5)),
            (c.icons.cruise.progressValue = et(a.speed)),
            (c.icons.nitro.progressValue = et(a.nos || 0)),
            (c.icons.health.isShowing = u.staticGenericHundredHandleShow(
              c.dynamicIcons.health,
              c.icons.health.progressValue
            )),
            a.playerDead
              ? (re.updateIconEffectStage("health", 1),
                (c.icons.health.progressValue = 100))
              : re.updateIconEffectStage("health", 0),
            (c.icons.armor.isShowing = u.staticGenericZeroHandleShow(
              c.dynamicIcons.armor,
              c.icons.armor.progressValue
            )),
            a.armor <= 0
              ? re.updateIconEffectStage("armor", 1)
              : re.updateIconEffectStage("armor", 0),
            (c.icons.hunger.isShowing = u.staticGenericHundredHandleShow(
              c.dynamicIcons.hunger,
              c.icons.hunger.progressValue
            )),
            a.hunger <= 30
              ? re.updateIconEffectStage("hunger", 1)
              : re.updateIconEffectStage("hunger", 0),
            (c.icons.thirst.isShowing = u.staticGenericHundredHandleShow(
              c.dynamicIcons.thirst,
              c.icons.thirst.progressValue
            )),
            a.thirst <= 30
              ? re.updateIconEffectStage("thirst", 1)
              : re.updateIconEffectStage("thirst", 0),
            (c.icons.stress.isShowing = u.staticGenericZeroHandleShow(
              c.dynamicIcons.stress,
              c.icons.stress.progressValue
            )),
            (c.icons.oxygen.isShowing = u.staticGenericHundredHandleShow(
              c.dynamicIcons.oxygen,
              c.icons.oxygen.progressValue
            )),
            (c.icons.engine.isShowing = u.staticEngineHandleShow(
              c.dynamicIcons.engine,
              c.icons.engine.progressValue
            )),
            a.engine <= 45
              ? re.updateIconEffectStage("engine", 2)
              : a.engine <= 75 && a.engine >= 46
              ? re.updateIconEffectStage("engine", 1)
              : a.engine <= 100 && re.updateIconEffectStage("engine", 0),
            (c.icons.nitro.isShowing = u.staticNitroHandleShow(
              c.dynamicIcons.nitro,
              c.icons.nitro.progressValue,
              c.icons.engine.progressValue
            )),
            a.nitroActive
              ? re.updateIconEffectStage("nitro", 1)
              : re.updateIconEffectStage("nitro", 0),
            a.talking
              ? a.radioTalking
                ? re.updateIconEffectStage("voice", 2)
                : re.updateIconEffectStage("voice", 1)
              : re.updateIconEffectStage("voice", 0),
            a.radioChannel && a.radioChannel > 0
              ? (c.icons.voice.icon = sr)
              : (c.icons.voice.icon = Si),
            a.cruise
              ? (c.icons.cruise.isShowing = !0)
              : (c.icons.cruise.isShowing = !1),
            a.harness
              ? (c.icons.harness.isShowing = !0)
              : (c.icons.harness.isShowing = !1),
            a.armed
              ? (c.icons.armed.isShowing = !0)
              : (c.icons.armed.isShowing = !1),
            a.parachute >= 0
              ? (c.icons.parachute.isShowing = !0)
              : (c.icons.parachute.isShowing = !1),
            a.dev ? (c.icons.dev.isShowing = !0) : (c.icons.dev.isShowing = !1),
            c
          )
        );
      },
      receiveUIUpdateMessage(a) {
        !a ||
          !Object.keys(a).length ||
          f((c) => {
            let d, h;
            for ([d, h] of Object.entries(a))
              c.icons[d] = sn(
                sn(
                  {},
                  Vo(h.shape, {
                    icon: c.icons[d].icon,
                    isShowing: c.icons[d].isShowing,
                    name: c.icons[d].name,
                    progressValue: c.icons[d].progressValue,
                  })
                ),
                h
              );
            return (c.saveUIState = "ready"), c;
          });
      },
      receiveProfileData(a) {
        u.receiveUIUpdateMessage(a.icons),
          f(
            (c) => (
              (c.globalIconSettings = a.globalIconSettings),
              (c.showingOrder = a.showingOrder),
              c
            )
          );
      },
      staticGenericZeroHandleShow(a, c) {
        return a ? !0 : c != 0;
      },
      staticEngineHandleShow(a, c) {
        return a ? !(c < 0) : c >= 95 ? !1 : !(c < 0);
      },
      staticGenericHundredHandleShow(a, c) {
        return a ? !0 : !(c >= 100);
      },
      staticNitroHandleShow(a, c, d) {
        return a ? d > 0 : !(c <= 0);
      },
    };
  return sn({ subscribe: l, set: s, update: f }, u);
};
var ne = is();
const ls = {
  biohazard: pr,
  database: Cr,
  dollarsign: vr,
  dumbbell: Dr,
  exclamation: Wl,
  lightbulb: Ar,
  locationarrow: Tr,
  swimming: Ir,
  wind: yr,
};
function rs(n) {
  return ls[n] || Wl;
}
const ss = () => {
  const n = {},
    { subscribe: e, set: t, update: o } = Rt(n);
  return sn(
    { subscribe: e, set: t, update: o },
    {
      receiveBuffStatusMessage(l) {
        const s = l.buffName;
        o((f) => {
          if (!f[s]) {
            const a = ut(ne).icons.health;
            let c = Et(sn({}, a), {
                icon: rs(l.iconName),
                isShowing: l.display || !0,
                name: s,
                progressValue: l.progressValue || 0,
              }),
              d = l.progressColor || "#FFD700",
              h = l.outlineColor,
              _ = l.iconColor || "#FFFFFF";
            if (!h) {
              let b = Sr(d);
              (b.opacity = 0.4), (h = b.formatHex8());
            }
            let k = Et(sn({}, c), {
              iconColor: _,
              outlineColor: h,
              progressColor: d,
            });
            return (f[s] = k), f;
          }
          return (
            !isNaN(l.progressValue) && l.progressValue >= 0
              ? (f[s].progressValue = l.progressValue)
              : l.display != null && l.display != null && !l.display
              ? (f = delete f[s] && f)
              : console.error("PS-Buffs error: Buff State Message malformed!"),
            f
          );
        });
      },
      receiveEnhancementStatusMessage(l) {
        const s = l.enhancementName;
        if (!s) {
          console.error(
            "PS-Buffs error: Enchancement Message name malformed:",
            l.enhancementName
          );
          return;
        }
        const f = s.replace("super-", "");
        if (!li.includes(f)) {
          console.error(
            "PS-Buffs error: Enhancement Message name not valid:",
            l.enhancementName
          );
          return;
        }
        o((u) => {
          if (!u[f] && l.display && l.iconColor)
            u[f] = { iconColor: l.iconColor };
          else if (l.display === !1) {
            if (!u[f])
              return (
                console.error(
                  "PS-Buffs error: Enchancement name not found:",
                  l.enhancementName
                ),
                u
              );
            u = delete u[f] && u;
          } else
            console.error("PS-Buffs error: Enhancement Message malformed:", l);
          return u;
        });
      },
    }
  );
};
var ti = ss();
const as = () => {
  let n = localStorage.getItem(ei),
    e = {};
  n && (e = JSON.parse(n));
  function t(a, c) {
    return e && e[a] != null ? e[a] : c;
  }
  function o() {
    return {
      layout: t("layout", "standard"),
      iconBetweenSpacing: t("iconBetweenSpacing", 2),
      xAxisSpacing: t("xAxisSpacing", 0),
      yAxisSpacing: t("yAxisSpacing", 0),
    };
  }
  const i = o(),
    { subscribe: l, set: s, update: f } = Rt(i);
  return sn(
    { subscribe: l, set: s, update: f },
    {
      resetLayout() {
        (e = {}), localStorage.removeItem(ei), s(o());
      },
      receiveUIUpdateMessage(a) {
        f(
          (c) => (
            (c.layout = a.layout),
            (c.iconBetweenSpacing = a.iconBetweenSpacing),
            (c.xAxisSpacing = a.xAxisSpacing),
            (c.yAxisSpacing = a.yAxisSpacing),
            c
          )
        );
      },
      updateLayout(a) {
        f((c) => ((c.layout = a), c));
      },
    }
  );
};
var ft = as();
const us = () => {
  const n = {
      fuelColor: "#FFFFFF",
      altitude: 0,
      fuel: 0,
      speed: 0,
      show: !1,
      showAltitude: !1,
      showSeatBelt: !1,
      showSquare: !1,
      showSquareBorder: !1,
      ShowCircle: !1,
      showCircleBorder: !1,
      seatbeltColor: "#e85b14",
    },
    { subscribe: e, set: t, update: o } = Rt(n);
  return sn(
    { subscribe: e, set: t, update: o },
    {
      receiveShowMessage(l) {
        o((s) => ((s.show = l.show), (s.showSeatBelt = l.seatbelt), s));
      },
      receiveUpdateMessage(l) {
        o(
          (s) => (
            (s.show = l.show),
            (s.speed = l.speed),
            (s.altitude = l.altitude),
            (s.fuel = et(l.fuel)),
            (s.showSeatBelt = l.showSeatbelt),
            (s.showAltitude = l.showAltitude),
            (s.showSquareBorder = l.showSquareB),
            (s.showCircleBorder = l.showCircleB),
            l.seatbelt ? (s.showSeatBelt = !1) : (s.showSeatBelt = !0),
            l.fuel <= 20
              ? (s.fuelColor = "#ff0000")
              : l.fuel <= 30
              ? (s.fuelColor = "#dd6e14")
              : (s.fuelColor = "#FFFFFF"),
            l.isPaused && (s.show = !1),
            s
          )
        );
      },
    }
  );
};
var Go = us();
const fs = () => {
  let n = localStorage.getItem(er),
    e = {};
  n && (e = JSON.parse(n));
  function t(a, c) {
    return e && e[a] != null ? e[a] : c;
  }
  function o() {
    return t("profiles", []);
  }
  const i = o(),
    { subscribe: l, set: s, update: f } = Rt(i);
  return sn(
    { subscribe: l, set: s, update: f },
    {
      addNewProfile() {
        f((a) => {
          let c = a.length + 1,
            d = "Profile#" + c;
          return (a = [...a, { name: d, editingName: !1, savedData: "" }]), a;
        });
      },
      applyProfileToHud(a) {
        f((c) => {
          if (c[a] && c[a].savedData) {
            let d = JSON.parse(c[a].savedData);
            ne.receiveProfileData(d.playerStatusIconData),
              re.receiveUIUpdateMessage(d.colorData.icons),
              ft.receiveUIUpdateMessage(d.layoutData);
          }
          return c;
        });
      },
      deleteProfile(a) {
        f((c) => ((c = [...c.slice(0, a), ...c.slice(a + 1)]), c));
      },
      saveHUDToProfile(a) {
        const c = ut(ne),
          d = ut(re),
          h = ut(ft);
        let _ = { playerStatusIconData: c, colorData: d, layoutData: h };
        f((k) => ((k[a].savedData = JSON.stringify(_)), k));
      },
    }
  );
};
var Vt = fs();
function cs() {
  function n(e) {
    switch (e.data.action) {
      case "baseplate":
        switch (e.data.topic) {
          case "compassupdate":
            Eo.receiveCompassMessage(e.data);
            break;
          case "opencompass":
            Eo.receiveCompassOpenMessage(e.data);
            break;
          case "closecompass":
            Eo.receiveCompassCloseMessage(e.data);
            break;
        }
        break;
      case "car":
        switch (e.data.topic) {
          case "display":
            Go.receiveShowMessage(e.data);
            break;
          case "status":
            Go.receiveUpdateMessage(e.data);
            break;
        }
        break;
      case "externalstatus":
        switch (e.data.topic) {
          case "buff":
            ti.receiveBuffStatusMessage(e.data);
            break;
          case "enhancement":
            ti.receiveEnhancementStatusMessage(e.data);
            break;
        }
        break;
      case "hudtick":
        switch (e.data.topic) {
          case "display":
            ne.receiveShowMessage(e.data);
            break;
          case "status":
            ne.receiveStatusUpdateMessage(e.data);
            break;
          default:
            ne.receiveStatusUpdateMessage(e.data);
            break;
        }
        break;
      case "menu":
        switch (e.data.topic) {
          case "adminonly":
            Ye.receiveAdminMessage(e.data);
            break;
          case "restart":
            Ye.receiveRestartMessage();
            break;
        }
        break;
      case "open":
        Ye.receiveMessage();
        break;
      case "show":
        Lo.receiveShowAccountsMessage(e.data);
        break;
      case "showconstant":
        Lo.receiveShowConstantMessage(e.data);
        break;
      case "update":
        Eo.receiveHeadingMessage(e.data);
        break;
      case "updatemoney":
        Lo.receiveUpdateMessage(e.data);
        break;
      case "updateUISettings":
        if (!e.data.icons || !e.data.layout || !e.data.colors) return;
        ne.receiveUIUpdateMessage(e.data.icons),
          ft.receiveUIUpdateMessage(e.data.layout),
          re.receiveUIUpdateMessage(e.data.colors);
        break;
    }
  }
  Pt(() => window.addEventListener("message", n)),
    Jl(() => window.removeEventListener("message", n));
}
async function Me(n, e = {}) {
  const t = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(e),
    },
    o = "ps-hud";
  try {
    return await (await fetch(`https://${o}/${n}`, t)).json();
  } catch {}
}
function hs(n) {
  let e = {};
  for (const [t, o] of Object.entries(n)) {
    let i = ((c) => {
      var d = c,
        { icon: l, isShowing: s, name: f, progressValue: u } = d,
        a = Do(d, ["icon", "isShowing", "name", "progressValue"]);
      return a;
    })(o);
    e[t] = i;
  }
  return e;
}
function gs(n) {
  let e = {};
  for (const [t, o] of Object.entries(n)) {
    let i = ((u) => {
      var a = u,
        { currentEffect: l, editableColors: s } = a,
        f = Do(a, ["currentEffect", "editableColors"]);
      return f;
    })(o);
    e[t] = i;
  }
  return e;
}
function ds() {
  const n = ut(ne),
    e = ut(re),
    t = ut(ft),
    o = hs(n.icons),
    i = gs(e.icons);
  Me("saveUISettings", { icons: o, layout: t, colors: i });
}
async function ms() {
  const n = ut(ne),
    e = ut(re),
    t = ut(ft),
    o = ut(Vt);
  localStorage.setItem(
    ni,
    JSON.stringify(
      Et(sn({}, e.icons), { globalColorSettings: e.globalColorSettings })
    )
  ),
    localStorage.setItem(
      $o,
      JSON.stringify(
        Et(sn({}, n.icons), {
          globalIconSettings: n.globalIconSettings,
          dynamicIcons: n.dynamicIcons,
        })
      )
    ),
    localStorage.setItem(ei, JSON.stringify(t)),
    localStorage.setItem(er, JSON.stringify({ profiles: o }));
}
const An = !1,
  _s = () => {
    let n = localStorage.getItem(Qo),
      e = {};
    n && (e = JSON.parse(n));
    function t(a, c) {
      return e && e[a] != null ? e[a] : c;
    }
    function o() {
      return {
        show: An,
        isRestarting: !1,
        adminOnly: An,
        isAdmin: An,
        isCineamticModeChecked: t("isCineamticModeChecked", !1),
        isCinematicNotifyChecked: t("isCinematicNotifChecked", !0),
        isCompassFollowChecked: t("isCompassFollowChecked", !0),
        isMapEnabledChecked: t("isHideMapChecked", !0),
        isListSoundsChecked: t("isListSoundsChecked", !0),
        isLowFuelAlertChecked: t("isLowFuelChecked", !0),
        isMapNotifyChecked: t("isMapNotifChecked", !0),
        isOpenMenuSoundsChecked: t("isOpenMenuSoundsChecked", !0),
        isOutCompassChecked: t("isOutCompassChecked", !0),
        isOutMapChecked: t("isOutMapChecked", !0),
        isPointerShowChecked: t("isPointerShowChecked", !0),
        isResetSoundsChecked: t("isResetSoundsChecked", !0),
        isShowCompassChecked: t("isShowCompassChecked", !0),
        isShowStreetsChecked: t("isShowStreetsChecked", !0),
        isToggleMapBordersChecked: t("isToggleMapBordersChecked", !0),
        isToggleMapShapeChecked: t("isToggleMapShapeChecked", "circle"),
      };
    }
    const i = o(),
      { subscribe: l, set: s, update: f } = Rt(i);
    l((a) => {
      let c = sn({}, a);
      delete c.show,
        delete c.isAdmin,
        delete c.isRestarting,
        localStorage.setItem(Qo, JSON.stringify(c));
    });
    const u = {
      closeMenu() {
        f((a) => ((a.show = !1), a)), Me("closeMenu");
      },
      handleKeyUp(a) {
        a.key == "Escape" && (ms(), u.closeMenu());
      },
      openMenu() {
        f((a) => ((a.show = !0), a));
      },
      receiveMessage() {
        u.openMenu();
      },
      receiveAdminMessage(a) {
        f((c) => ((c.adminOnly = a.adminOnly), (c.isAdmin = a.isAdmin), c));
      },
      receiveRestartMessage() {
        f((a) => ((a.isRestarting = !1), a));
      },
      resetHudMenuSetting() {
        (e = {}),
          localStorage.removeItem(Qo),
          f(
            (a) => (
              (a = Et(sn({}, o()), {
                show: !0,
                adminOnly: a.adminOnly,
                isAdmin: a.isAdmin,
              })),
              a
            )
          ),
          ne.updateAllShowingDynamicIcons(!1);
      },
      sendMenuSettingsToClient() {
        f(
          (a) => (
            Me("updateMenuSettingsToClient", {
              isOutMapChecked: a.isOutMapChecked,
              isOutCompassChecked: a.isOutCompassChecked,
              isCompassFollowChecked: a.isCompassFollowChecked,
              isOpenMenuSoundsChecked: a.isOpenMenuSoundsChecked,
              isResetSoundsChecked: a.isResetSoundsChecked,
              isListSoundsChecked: a.isListSoundsChecked,
              isMapNotifyChecked: a.isMapNotifyChecked,
              isLowFuelAlertChecked: a.isLowFuelAlertChecked,
              isCinematicNotifyChecked: a.isCinematicNotifyChecked,
              isToggleMapShapeChecked: a.isToggleMapShapeChecked,
              isMapEnabledChecked: a.isMapEnabledChecked,
              isToggleMapBordersChecked: a.isToggleMapBordersChecked,
              isShowCompassChecked: a.isShowCompassChecked,
              isShowStreetsChecked: a.isShowStreetsChecked,
              isPointerShowChecked: a.isPointerShowChecked,
              isCineamticModeChecked: a.isCineamticModeChecked,
            }),
            a
          )
        );
      },
    };
    return (
      u.sendMenuSettingsToClient(), sn({ subscribe: l, set: s, update: f }, u)
    );
  };
var Ye = _s();
function ws(n) {
  let e, t, o, i, l, s, f, u, a, c, d;
  return (
    (o = new Fe({
      props: {
        class: "mb-3",
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + (n[2] ? n[2] : n[12]),
      },
    })),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          P(o.$$.fragment),
          (i = y()),
          (l = O("svg")),
          (s = O("rect")),
          (a = O("rect")),
          r(t, "class", "flex flex-col justify-center"),
          R(
            t,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(s, "width", (f = n[17] - 0.2)),
          r(s, "height", (u = n[0] - 0.2)),
          r(s, "fill", n[9]),
          r(s, "rx", n[18]),
          r(s, "ry", n[19]),
          R(
            s,
            "filter",
            (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
              " " +
              ("contrast(" + n[10] + "%)")
          ),
          R(s, "overflow", "visible"),
          r(a, "width", n[20]),
          r(a, "height", n[0]),
          r(a, "fill", n[12]),
          r(a, "rx", n[18]),
          r(a, "ry", n[19]),
          R(
            a,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          r(l, "height", n[0]),
          r(l, "width", n[17]),
          r(
            l,
            "transform",
            (c =
              `
    ` + (n[15] | n[16] ? "translate(" + n[15] + " " + n[16] + ")" : ""))
          ),
          r(
            e,
            "class",
            "flex flex-col justify-center px-1 pb-2 pt-4 rounded-lg"
          ),
          R(e, "background-color", n[8]);
      },
      m(h, _) {
        H(h, e, _),
          m(e, t),
          B(o, t, null),
          m(e, i),
          m(e, l),
          m(l, s),
          m(l, a),
          (d = !0);
      },
      p(h, [_]) {
        const k = {};
        _ & 2 && (k.icon = h[1]),
          _ & 32 && (k.scale = h[5]),
          _ & 64 && (k.translateX = h[6]),
          _ & 128 && (k.translateY = h[7]),
          _ & 4100 && (k.style = "color:" + (h[2] ? h[2] : h[12])),
          o.$set(k),
          (!d || _ & 28) &&
            R(
              t,
              "filter",
              (h[4] ? "drop-shadow(0px 0px " + h[4] + "px " + h[2] + ")" : "") +
                " " +
                ("contrast(" + h[3] + "%)")
            ),
          (!d || (_ & 131072 && f !== (f = h[17] - 0.2))) && r(s, "width", f),
          (!d || (_ & 1 && u !== (u = h[0] - 0.2))) && r(s, "height", u),
          (!d || _ & 512) && r(s, "fill", h[9]),
          (!d || _ & 262144) && r(s, "rx", h[18]),
          (!d || _ & 524288) && r(s, "ry", h[19]),
          (!d || _ & 3584) &&
            R(
              s,
              "filter",
              (h[11]
                ? "drop-shadow(0px 0px " + h[11] + "px " + h[9] + ")"
                : "") +
                " " +
                ("contrast(" + h[10] + "%)")
            ),
          (!d || _ & 1048576) && r(a, "width", h[20]),
          (!d || _ & 1) && r(a, "height", h[0]),
          (!d || _ & 4096) && r(a, "fill", h[12]),
          (!d || _ & 262144) && r(a, "rx", h[18]),
          (!d || _ & 524288) && r(a, "ry", h[19]),
          (!d || _ & 28672) &&
            R(
              a,
              "filter",
              (h[14]
                ? "drop-shadow(0px 0px " + h[14] + "px " + h[12] + ")"
                : "") +
                " " +
                ("contrast(" + h[13] + "%)")
            ),
          (!d || _ & 1) && r(l, "height", h[0]),
          (!d || _ & 131072) && r(l, "width", h[17]),
          (!d ||
            (_ & 98304 &&
              c !==
                (c =
                  `
    ` + (h[15] | h[16] ? "translate(" + h[15] + " " + h[16] + ")" : "")))) &&
            r(l, "transform", c),
          (!d || _ & 256) && R(e, "background-color", h[8]);
      },
      i(h) {
        d || (C(o.$$.fragment, h), (d = !0));
      },
      o(h) {
        T(o.$$.fragment, h), (d = !1);
      },
      d(h) {
        h && E(e), U(o);
      },
    }
  );
}
function bs(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { innerColor: h = "#212121" } = e,
    { outlineColor: _ = "red" } = e,
    { outlineContrast: k = 100 } = e,
    { outlineDropShadowAmount: b = 0 } = e,
    { progressColor: w = "red" } = e,
    { progressContrast: g = 100 } = e,
    { progressDropShadowAmount: S = 0 } = e,
    { progressValue: D = 100 } = e,
    { rotateDegree: Y = 0 } = e,
    { translateX: $ = 0 } = e,
    { translateY: W = 0 } = e,
    { width: q = 50 } = e,
    { xAxisRound: j = 5 } = e,
    { yAxisRound: x = 20 } = e,
    { name: V = "" } = e,
    Q = 0;
  const M = nn(D, { duration: 600, easing: pn });
  return (
    de(n, M, (X) => t(25, (o = X))),
    (n.$$set = (X) => {
      "height" in X && t(0, (i = X.height)),
        "icon" in X && t(1, (l = X.icon)),
        "iconColor" in X && t(2, (s = X.iconColor)),
        "iconContrast" in X && t(3, (f = X.iconContrast)),
        "iconDropShadowAmount" in X && t(4, (u = X.iconDropShadowAmount)),
        "iconScaling" in X && t(5, (a = X.iconScaling)),
        "iconTranslateX" in X && t(6, (c = X.iconTranslateX)),
        "iconTranslateY" in X && t(7, (d = X.iconTranslateY)),
        "innerColor" in X && t(8, (h = X.innerColor)),
        "outlineColor" in X && t(9, (_ = X.outlineColor)),
        "outlineContrast" in X && t(10, (k = X.outlineContrast)),
        "outlineDropShadowAmount" in X &&
          t(11, (b = X.outlineDropShadowAmount)),
        "progressColor" in X && t(12, (w = X.progressColor)),
        "progressContrast" in X && t(13, (g = X.progressContrast)),
        "progressDropShadowAmount" in X &&
          t(14, (S = X.progressDropShadowAmount)),
        "progressValue" in X && t(22, (D = X.progressValue)),
        "rotateDegree" in X && t(23, (Y = X.rotateDegree)),
        "translateX" in X && t(15, ($ = X.translateX)),
        "translateY" in X && t(16, (W = X.translateY)),
        "width" in X && t(17, (q = X.width)),
        "xAxisRound" in X && t(18, (j = X.xAxisRound)),
        "yAxisRound" in X && t(19, (x = X.yAxisRound)),
        "name" in X && t(24, (V = X.name));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 4194304 && M.set(D),
        n.$$.dirty & 4194304 && M.set(D),
        n.$$.dirty & 33685504 && t(20, (Q = (o / 100) * q));
    }),
    [
      i,
      l,
      s,
      f,
      u,
      a,
      c,
      d,
      h,
      _,
      k,
      b,
      w,
      g,
      S,
      $,
      W,
      q,
      j,
      x,
      Q,
      M,
      D,
      Y,
      V,
      o,
    ]
  );
}
class ks extends ue {
  constructor(e) {
    super();
    fe(this, e, bs, ws, ce, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      innerColor: 8,
      outlineColor: 9,
      outlineContrast: 10,
      outlineDropShadowAmount: 11,
      progressColor: 12,
      progressContrast: 13,
      progressDropShadowAmount: 14,
      progressValue: 22,
      rotateDegree: 23,
      translateX: 15,
      translateY: 16,
      width: 17,
      xAxisRound: 18,
      yAxisRound: 19,
      name: 24,
    });
  }
}
function Ss(n) {
  let e, t, o, i, l, s, f, u, a, c, d;
  return (
    (f = new Fe({
      props: {
        icon: n[0],
        scale: n[4],
        translateX: n[5],
        translateY: n[6],
        style: "color:" + n[1],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          (o = O("circle")),
          (i = O("circle")),
          (s = O("g")),
          P(f.$$.fragment),
          r(o, "fill", "transparent"),
          r(o, "stroke", n[7]),
          r(o, "stroke-width", n[16]),
          r(o, "r", n[17]),
          r(o, "cx", n[15]),
          r(o, "cy", n[15]),
          R(
            o,
            "filter",
            (n[9] ? "drop-shadow(0px 0px " + n[9] + "px " + n[7] + ")" : "") +
              " " +
              ("contrast(" + n[8] + "%)")
          ),
          r(i, "fill", n[10]),
          r(i, "r", n[18]),
          r(i, "cx", n[15]),
          r(i, "cy", n[15]),
          R(
            i,
            "filter",
            (n[12]
              ? "drop-shadow(0px 0px " + n[12] + "px " + n[10] + ")"
              : "") +
              " " +
              ("contrast(" + n[11] + "%)")
          ),
          r(t, "transform", (l = "translate(" + n[13] + " " + n[14] + ")")),
          R(
            s,
            "filter",
            (n[3] ? "drop-shadow(0px 0px " + n[3] + "px " + n[1] + ")" : "") +
              " " +
              ("contrast(" + n[2] + "%)")
          ),
          r(e, "width", (u = n[15] * 2)),
          r(e, "height", (a = n[15] * 2)),
          r(e, "viewBox", (c = "0 0 " + n[15] * 2 + " " + n[15] * 2)),
          r(e, "overflow", "visible");
      },
      m(h, _) {
        H(h, e, _), m(e, t), m(t, o), m(t, i), m(e, s), B(f, s, null), (d = !0);
      },
      p(h, [_]) {
        (!d || _ & 128) && r(o, "stroke", h[7]),
          (!d || _ & 65536) && r(o, "stroke-width", h[16]),
          (!d || _ & 131072) && r(o, "r", h[17]),
          (!d || _ & 32768) && r(o, "cx", h[15]),
          (!d || _ & 32768) && r(o, "cy", h[15]),
          (!d || _ & 896) &&
            R(
              o,
              "filter",
              (h[9] ? "drop-shadow(0px 0px " + h[9] + "px " + h[7] + ")" : "") +
                " " +
                ("contrast(" + h[8] + "%)")
            ),
          (!d || _ & 1024) && r(i, "fill", h[10]),
          (!d || _ & 262144) && r(i, "r", h[18]),
          (!d || _ & 32768) && r(i, "cx", h[15]),
          (!d || _ & 32768) && r(i, "cy", h[15]),
          (!d || _ & 7168) &&
            R(
              i,
              "filter",
              (h[12]
                ? "drop-shadow(0px 0px " + h[12] + "px " + h[10] + ")"
                : "") +
                " " +
                ("contrast(" + h[11] + "%)")
            ),
          (!d ||
            (_ & 24576 &&
              l !== (l = "translate(" + h[13] + " " + h[14] + ")"))) &&
            r(t, "transform", l);
        const k = {};
        _ & 1 && (k.icon = h[0]),
          _ & 16 && (k.scale = h[4]),
          _ & 32 && (k.translateX = h[5]),
          _ & 64 && (k.translateY = h[6]),
          _ & 2 && (k.style = "color:" + h[1]),
          f.$set(k),
          (!d || _ & 14) &&
            R(
              s,
              "filter",
              (h[3] ? "drop-shadow(0px 0px " + h[3] + "px " + h[1] + ")" : "") +
                " " +
                ("contrast(" + h[2] + "%)")
            ),
          (!d || (_ & 32768 && u !== (u = h[15] * 2))) && r(e, "width", u),
          (!d || (_ & 32768 && a !== (a = h[15] * 2))) && r(e, "height", a),
          (!d ||
            (_ & 32768 && c !== (c = "0 0 " + h[15] * 2 + " " + h[15] * 2))) &&
            r(e, "viewBox", c);
      },
      i(h) {
        d || (C(f.$$.fragment, h), (d = !0));
      },
      o(h) {
        T(f.$$.fragment, h), (d = !1);
      },
      d(h) {
        h && E(e), U(f);
      },
    }
  );
}
function ps(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { name: h = "" } = e,
    { outlineColor: _ = "red" } = e,
    { outlineContrast: k = 100 } = e,
    { outlineDropShadowAmount: b = 0 } = e,
    { progressColor: w = "red" } = e,
    { progressContrast: g = 100 } = e,
    { progressDropShadowAmount: S = 0 } = e,
    { progressValue: D = 100 } = e,
    { rotateDegree: Y = 0 } = e,
    { translateX: $ = 0 } = e,
    { translateY: W = 0 } = e,
    { width: q = 50 } = e,
    j = 25,
    x = 25,
    V = i,
    Q = j - x / 2,
    M = 0;
  const X = nn(D, { duration: 600, easing: pn });
  return (
    de(n, X, (p) => t(26, (o = p))),
    (n.$$set = (p) => {
      "height" in p && t(20, (i = p.height)),
        "icon" in p && t(0, (l = p.icon)),
        "iconColor" in p && t(1, (s = p.iconColor)),
        "iconContrast" in p && t(2, (f = p.iconContrast)),
        "iconDropShadowAmount" in p && t(3, (u = p.iconDropShadowAmount)),
        "iconScaling" in p && t(4, (a = p.iconScaling)),
        "iconTranslateX" in p && t(5, (c = p.iconTranslateX)),
        "iconTranslateY" in p && t(6, (d = p.iconTranslateY)),
        "name" in p && t(21, (h = p.name)),
        "outlineColor" in p && t(7, (_ = p.outlineColor)),
        "outlineContrast" in p && t(8, (k = p.outlineContrast)),
        "outlineDropShadowAmount" in p && t(9, (b = p.outlineDropShadowAmount)),
        "progressColor" in p && t(10, (w = p.progressColor)),
        "progressContrast" in p && t(11, (g = p.progressContrast)),
        "progressDropShadowAmount" in p &&
          t(12, (S = p.progressDropShadowAmount)),
        "progressValue" in p && t(22, (D = p.progressValue)),
        "rotateDegree" in p && t(23, (Y = p.rotateDegree)),
        "translateX" in p && t(13, ($ = p.translateX)),
        "translateY" in p && t(14, (W = p.translateY)),
        "width" in p && t(24, (q = p.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 4194304 && X.set(D),
        n.$$.dirty & 51478528 &&
          (t(25, (V = i > q ? i : q)),
          t(15, (j = V / 2)),
          t(16, (x = j)),
          t(17, (Q = j - x / 2))),
        n.$$.dirty & 67141632 && t(18, (M = (o / 100) * j));
    }),
    [
      l,
      s,
      f,
      u,
      a,
      c,
      d,
      _,
      k,
      b,
      w,
      g,
      S,
      $,
      W,
      j,
      x,
      Q,
      M,
      X,
      i,
      h,
      D,
      Y,
      q,
      V,
      o,
    ]
  );
}
class Cs extends ue {
  constructor(e) {
    super();
    fe(this, e, ps, Ss, ce, {
      height: 20,
      icon: 0,
      iconColor: 1,
      iconContrast: 2,
      iconDropShadowAmount: 3,
      iconScaling: 4,
      iconTranslateX: 5,
      iconTranslateY: 6,
      name: 21,
      outlineColor: 7,
      outlineContrast: 8,
      outlineDropShadowAmount: 9,
      progressColor: 10,
      progressContrast: 11,
      progressDropShadowAmount: 12,
      progressValue: 22,
      rotateDegree: 23,
      translateX: 13,
      translateY: 14,
      width: 24,
    });
  }
}
function Di(n) {
  let e, t, o, i;
  return {
    c() {
      (e = O("circle")),
        r(e, "fill", "transparent"),
        r(e, "stroke", n[9]),
        r(e, "stroke-dashoffset", (t = 0)),
        r(e, "stroke-dasharray", (o = n[21] + " " + n[21])),
        r(e, "stroke-width", n[15]),
        r(e, "r", n[20]),
        r(e, "cx", n[19]),
        r(e, "cy", n[19]),
        r(e, "transform", (i = "rotate(-90, " + n[19] + ", " + n[19] + ")")),
        R(
          e,
          "filter",
          (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
            " " +
            ("contrast(" + n[10] + "%)")
        );
    },
    m(l, s) {
      H(l, e, s);
    },
    p(l, s) {
      s & 512 && r(e, "stroke", l[9]),
        s & 2097152 &&
          o !== (o = l[21] + " " + l[21]) &&
          r(e, "stroke-dasharray", o),
        s & 32768 && r(e, "stroke-width", l[15]),
        s & 1048576 && r(e, "r", l[20]),
        s & 524288 && r(e, "cx", l[19]),
        s & 524288 && r(e, "cy", l[19]),
        s & 524288 &&
          i !== (i = "rotate(-90, " + l[19] + ", " + l[19] + ")") &&
          r(e, "transform", i),
        s & 3584 &&
          R(
            e,
            "filter",
            (l[11] ? "drop-shadow(0px 0px " + l[11] + "px " + l[9] + ")" : "") +
              " " +
              ("contrast(" + l[10] + "%)")
          );
    },
    d(l) {
      l && E(e);
    },
  };
}
function vs(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S = n[0] && Di(n);
  return (
    (_ = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          (o = O("circle")),
          S && S.c(),
          (u = O("circle")),
          (h = O("g")),
          P(_.$$.fragment),
          r(o, "fill", n[8]),
          r(o, "stroke", "transparent"),
          r(o, "stroke-dashoffset", 0),
          r(o, "stroke-dasharray", (i = n[21] + " " + n[21])),
          r(o, "stroke-width", (l = n[15] - 0.6)),
          r(o, "r", (s = n[20] - n[15] / 2 + 0.1)),
          r(o, "cx", n[19]),
          r(o, "cy", n[19]),
          r(o, "transform", (f = "rotate(-90, " + n[19] + ", " + n[19] + ")")),
          r(u, "stroke", n[12]),
          r(u, "fill", "transparent"),
          r(u, "stroke-dashoffset", n[22]),
          r(u, "stroke-dasharray", (a = n[21] + " " + n[21])),
          r(u, "stroke-width", n[15]),
          r(u, "r", n[20]),
          r(u, "cx", n[19]),
          r(u, "cy", n[19]),
          r(u, "transform", (c = "rotate(-90, " + n[19] + ", " + n[19] + ")")),
          R(
            u,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          r(
            t,
            "transform",
            (d =
              `
    ` +
              (n[16] > 0
                ? "rotate(" + n[16] + " " + n[19] + " " + n[19] + ")"
                : "") +
              `
    ` +
              ("translate(" + n[17] + " " + n[18] + ")"))
          ),
          R(
            h,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(e, "width", (k = n[19] * 2)),
          r(e, "height", (b = n[19] * 2)),
          r(e, "viewBox", (w = "0 0 " + n[19] * 2 + " " + n[19] * 2)),
          r(e, "overflow", "visible");
      },
      m(D, Y) {
        H(D, e, Y),
          m(e, t),
          m(t, o),
          S && S.m(t, null),
          m(t, u),
          m(e, h),
          B(_, h, null),
          (g = !0);
      },
      p(D, [Y]) {
        (!g || Y & 256) && r(o, "fill", D[8]),
          (!g || (Y & 2097152 && i !== (i = D[21] + " " + D[21]))) &&
            r(o, "stroke-dasharray", i),
          (!g || (Y & 32768 && l !== (l = D[15] - 0.6))) &&
            r(o, "stroke-width", l),
          (!g || (Y & 1081344 && s !== (s = D[20] - D[15] / 2 + 0.1))) &&
            r(o, "r", s),
          (!g || Y & 524288) && r(o, "cx", D[19]),
          (!g || Y & 524288) && r(o, "cy", D[19]),
          (!g ||
            (Y & 524288 &&
              f !== (f = "rotate(-90, " + D[19] + ", " + D[19] + ")"))) &&
            r(o, "transform", f),
          D[0]
            ? S
              ? S.p(D, Y)
              : ((S = Di(D)), S.c(), S.m(t, u))
            : S && (S.d(1), (S = null)),
          (!g || Y & 4096) && r(u, "stroke", D[12]),
          (!g || Y & 4194304) && r(u, "stroke-dashoffset", D[22]),
          (!g || (Y & 2097152 && a !== (a = D[21] + " " + D[21]))) &&
            r(u, "stroke-dasharray", a),
          (!g || Y & 32768) && r(u, "stroke-width", D[15]),
          (!g || Y & 1048576) && r(u, "r", D[20]),
          (!g || Y & 524288) && r(u, "cx", D[19]),
          (!g || Y & 524288) && r(u, "cy", D[19]),
          (!g ||
            (Y & 524288 &&
              c !== (c = "rotate(-90, " + D[19] + ", " + D[19] + ")"))) &&
            r(u, "transform", c),
          (!g || Y & 28672) &&
            R(
              u,
              "filter",
              (D[14]
                ? "drop-shadow(0px 0px " + D[14] + "px " + D[12] + ")"
                : "") +
                " " +
                ("contrast(" + D[13] + "%)")
            ),
          (!g ||
            (Y & 983040 &&
              d !==
                (d =
                  `
    ` +
                  (D[16] > 0
                    ? "rotate(" + D[16] + " " + D[19] + " " + D[19] + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + D[17] + " " + D[18] + ")")))) &&
            r(t, "transform", d);
        const $ = {};
        Y & 2 && ($.icon = D[1]),
          Y & 32 && ($.scale = D[5]),
          Y & 64 && ($.translateX = D[6]),
          Y & 128 && ($.translateY = D[7]),
          Y & 4 && ($.style = "color:" + D[2]),
          _.$set($),
          (!g || Y & 28) &&
            R(
              h,
              "filter",
              (D[4] ? "drop-shadow(0px 0px " + D[4] + "px " + D[2] + ")" : "") +
                " " +
                ("contrast(" + D[3] + "%)")
            ),
          (!g || (Y & 524288 && k !== (k = D[19] * 2))) && r(e, "width", k),
          (!g || (Y & 524288 && b !== (b = D[19] * 2))) && r(e, "height", b),
          (!g ||
            (Y & 524288 && w !== (w = "0 0 " + D[19] * 2 + " " + D[19] * 2))) &&
            r(e, "viewBox", w);
      },
      i(D) {
        g || (C(_.$$.fragment, D), (g = !0));
      },
      o(D) {
        T(_.$$.fragment, D), (g = !1);
      },
      d(D) {
        D && E(e), S && S.d(), U(_);
      },
    }
  );
}
function Ds(n, e, t) {
  let o,
    { displayOutline: i = !0 } = e,
    { height: l = 50 } = e,
    { icon: s = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: u = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: d = 0.45 } = e,
    { iconTranslateX: h = 0 } = e,
    { iconTranslateY: _ = 0 } = e,
    { innerColor: k = "#212121" } = e,
    { name: b = "" } = e,
    { outlineColor: w = "red" } = e,
    { outlineContrast: g = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: D = "red" } = e,
    { progressContrast: Y = 100 } = e,
    { progressDropShadowAmount: $ = 0 } = e,
    { progressValue: W = 100 } = e,
    { ringSize: q = 4 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: x = 0 } = e,
    { translateY: V = 0 } = e,
    { width: Q = 50 } = e,
    M = 25;
  const X = nn(W, { duration: 600, easing: pn });
  de(n, X, (v) => t(29, (o = v)));
  let p = M - q / 2,
    z = p * 2 * Math.PI,
    J = z - (o / 100) * z;
  return (
    (n.$$set = (v) => {
      "displayOutline" in v && t(0, (i = v.displayOutline)),
        "height" in v && t(24, (l = v.height)),
        "icon" in v && t(1, (s = v.icon)),
        "iconColor" in v && t(2, (f = v.iconColor)),
        "iconContrast" in v && t(3, (u = v.iconContrast)),
        "iconDropShadowAmount" in v && t(4, (a = v.iconDropShadowAmount)),
        "iconRotateDegree" in v && t(25, (c = v.iconRotateDegree)),
        "iconScaling" in v && t(5, (d = v.iconScaling)),
        "iconTranslateX" in v && t(6, (h = v.iconTranslateX)),
        "iconTranslateY" in v && t(7, (_ = v.iconTranslateY)),
        "innerColor" in v && t(8, (k = v.innerColor)),
        "name" in v && t(26, (b = v.name)),
        "outlineColor" in v && t(9, (w = v.outlineColor)),
        "outlineContrast" in v && t(10, (g = v.outlineContrast)),
        "outlineDropShadowAmount" in v &&
          t(11, (S = v.outlineDropShadowAmount)),
        "progressColor" in v && t(12, (D = v.progressColor)),
        "progressContrast" in v && t(13, (Y = v.progressContrast)),
        "progressDropShadowAmount" in v &&
          t(14, ($ = v.progressDropShadowAmount)),
        "progressValue" in v && t(27, (W = v.progressValue)),
        "ringSize" in v && t(15, (q = v.ringSize)),
        "rotateDegree" in v && t(16, (j = v.rotateDegree)),
        "translateX" in v && t(17, (x = v.translateX)),
        "translateY" in v && t(18, (V = v.translateY)),
        "width" in v && t(28, (Q = v.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 134217728 && X.set(W),
        n.$$.dirty & 285212672 && t(19, (M = l > Q ? l / 2 : Q / 2)),
        n.$$.dirty & 1605632 &&
          (t(20, (p = M - q / 2)), t(21, (z = p * 2 * Math.PI))),
        n.$$.dirty & 538968064 && t(22, (J = z - (o / 100) * z));
    }),
    [
      i,
      s,
      f,
      u,
      a,
      d,
      h,
      _,
      k,
      w,
      g,
      S,
      D,
      Y,
      $,
      q,
      j,
      x,
      V,
      M,
      p,
      z,
      J,
      X,
      l,
      c,
      b,
      W,
      Q,
      o,
    ]
  );
}
class As extends ue {
  constructor(e) {
    super();
    fe(this, e, Ds, vs, ce, {
      displayOutline: 0,
      height: 24,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconRotateDegree: 25,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      innerColor: 8,
      name: 26,
      outlineColor: 9,
      outlineContrast: 10,
      outlineDropShadowAmount: 11,
      progressColor: 12,
      progressContrast: 13,
      progressDropShadowAmount: 14,
      progressValue: 27,
      ringSize: 15,
      rotateDegree: 16,
      translateX: 17,
      translateY: 18,
      width: 28,
    });
  }
}
function Ai(n) {
  let e, t, o, i;
  return {
    c() {
      (e = O("circle")),
        r(e, "fill", "transparent"),
        r(e, "stroke", n[8]),
        r(e, "stroke-dashoffset", (t = 0)),
        r(e, "stroke-dasharray", (o = n[20] + " " + n[20])),
        r(e, "stroke-width", n[14]),
        r(e, "r", n[19]),
        r(e, "cx", n[18]),
        r(e, "cy", n[18]),
        r(e, "transform", (i = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
        R(
          e,
          "filter",
          (n[10] ? "drop-shadow(0px 0px " + n[10] + "px " + n[8] + ")" : "") +
            " " +
            ("contrast(" + n[9] + "%)")
        );
    },
    m(l, s) {
      H(l, e, s);
    },
    p(l, s) {
      s[0] & 256 && r(e, "stroke", l[8]),
        s[0] & 1048576 &&
          o !== (o = l[20] + " " + l[20]) &&
          r(e, "stroke-dasharray", o),
        s[0] & 16384 && r(e, "stroke-width", l[14]),
        s[0] & 524288 && r(e, "r", l[19]),
        s[0] & 262144 && r(e, "cx", l[18]),
        s[0] & 262144 && r(e, "cy", l[18]),
        s[0] & 262144 &&
          i !== (i = "rotate(-90, " + l[18] + ", " + l[18] + ")") &&
          r(e, "transform", i),
        s[0] & 1792 &&
          R(
            e,
            "filter",
            (l[10] ? "drop-shadow(0px 0px " + l[10] + "px " + l[8] + ")" : "") +
              " " +
              ("contrast(" + l[9] + "%)")
          );
    },
    d(l) {
      l && E(e);
    },
  };
}
function Ts(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w = n[0] && Ai(n);
  return (
    (d = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          w && w.c(),
          (o = O("circle")),
          (s = O("circle")),
          (c = O("g")),
          P(d.$$.fragment),
          r(o, "fill", "transparent"),
          r(o, "stroke", n[11]),
          r(o, "stroke-opacity", 0.6),
          r(o, "stroke-dashoffset", n[25]),
          r(o, "stroke-dasharray", (i = n[23] + " " + n[23])),
          r(o, "stroke-width", n[21]),
          r(o, "r", n[22]),
          r(o, "cx", n[18]),
          r(o, "cy", n[18]),
          r(o, "transform", (l = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
          r(s, "stroke", n[11]),
          r(s, "fill", "transparent"),
          r(s, "stroke-dashoffset", n[24]),
          r(s, "stroke-dasharray", (f = n[20] + " " + n[20])),
          r(s, "stroke-width", n[14]),
          r(s, "r", n[19]),
          r(s, "cx", n[18]),
          r(s, "cy", n[18]),
          r(s, "transform", (u = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
          R(
            s,
            "filter",
            (n[13]
              ? "drop-shadow(0px 0px " + n[13] + "px " + n[11] + ")"
              : "") +
              " " +
              ("contrast(" + n[12] + "%)")
          ),
          r(
            t,
            "transform",
            (a =
              `
    ` +
              (n[15] > 0
                ? "rotate(" + n[15] + " " + n[18] + " " + n[18] + ")"
                : "") +
              `
    ` +
              ("translate(" + n[16] + " " + n[17] + ")"))
          ),
          R(
            c,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(e, "width", (h = n[18] * 2)),
          r(e, "height", (_ = n[18] * 2)),
          r(e, "viewBox", (k = "0 0 " + n[18] * 2 + " " + n[18] * 2)),
          r(e, "overflow", "visible");
      },
      m(g, S) {
        H(g, e, S),
          m(e, t),
          w && w.m(t, null),
          m(t, o),
          m(t, s),
          m(e, c),
          B(d, c, null),
          (b = !0);
      },
      p(g, S) {
        g[0]
          ? w
            ? w.p(g, S)
            : ((w = Ai(g)), w.c(), w.m(t, o))
          : w && (w.d(1), (w = null)),
          (!b || S[0] & 2048) && r(o, "stroke", g[11]),
          (!b || S[0] & 33554432) && r(o, "stroke-dashoffset", g[25]),
          (!b || (S[0] & 8388608 && i !== (i = g[23] + " " + g[23]))) &&
            r(o, "stroke-dasharray", i),
          (!b || S[0] & 2097152) && r(o, "stroke-width", g[21]),
          (!b || S[0] & 4194304) && r(o, "r", g[22]),
          (!b || S[0] & 262144) && r(o, "cx", g[18]),
          (!b || S[0] & 262144) && r(o, "cy", g[18]),
          (!b ||
            (S[0] & 262144 &&
              l !== (l = "rotate(-90, " + g[18] + ", " + g[18] + ")"))) &&
            r(o, "transform", l),
          (!b || S[0] & 2048) && r(s, "stroke", g[11]),
          (!b || S[0] & 16777216) && r(s, "stroke-dashoffset", g[24]),
          (!b || (S[0] & 1048576 && f !== (f = g[20] + " " + g[20]))) &&
            r(s, "stroke-dasharray", f),
          (!b || S[0] & 16384) && r(s, "stroke-width", g[14]),
          (!b || S[0] & 524288) && r(s, "r", g[19]),
          (!b || S[0] & 262144) && r(s, "cx", g[18]),
          (!b || S[0] & 262144) && r(s, "cy", g[18]),
          (!b ||
            (S[0] & 262144 &&
              u !== (u = "rotate(-90, " + g[18] + ", " + g[18] + ")"))) &&
            r(s, "transform", u),
          (!b || S[0] & 14336) &&
            R(
              s,
              "filter",
              (g[13]
                ? "drop-shadow(0px 0px " + g[13] + "px " + g[11] + ")"
                : "") +
                " " +
                ("contrast(" + g[12] + "%)")
            ),
          (!b ||
            (S[0] & 491520 &&
              a !==
                (a =
                  `
    ` +
                  (g[15] > 0
                    ? "rotate(" + g[15] + " " + g[18] + " " + g[18] + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + g[16] + " " + g[17] + ")")))) &&
            r(t, "transform", a);
        const D = {};
        S[0] & 2 && (D.icon = g[1]),
          S[0] & 32 && (D.scale = g[5]),
          S[0] & 64 && (D.translateX = g[6]),
          S[0] & 128 && (D.translateY = g[7]),
          S[0] & 4 && (D.style = "color:" + g[2]),
          d.$set(D),
          (!b || S[0] & 28) &&
            R(
              c,
              "filter",
              (g[4] ? "drop-shadow(0px 0px " + g[4] + "px " + g[2] + ")" : "") +
                " " +
                ("contrast(" + g[3] + "%)")
            ),
          (!b || (S[0] & 262144 && h !== (h = g[18] * 2))) && r(e, "width", h),
          (!b || (S[0] & 262144 && _ !== (_ = g[18] * 2))) && r(e, "height", _),
          (!b ||
            (S[0] & 262144 &&
              k !== (k = "0 0 " + g[18] * 2 + " " + g[18] * 2))) &&
            r(e, "viewBox", k);
      },
      i(g) {
        b || (C(d.$$.fragment, g), (b = !0));
      },
      o(g) {
        T(d.$$.fragment, g), (b = !1);
      },
      d(g) {
        g && E(e), w && w.d(), U(d);
      },
    }
  );
}
function Is(n, e, t) {
  let o,
    { displayOutline: i = !0 } = e,
    { height: l = 50 } = e,
    { icon: s = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: u = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: d = 0.45 } = e,
    { iconTranslateX: h = 0 } = e,
    { iconTranslateY: _ = 0 } = e,
    { name: k = "" } = e,
    { outlineColor: b = "red" } = e,
    { outlineContrast: w = 100 } = e,
    { outlineDropShadowAmount: g = 0 } = e,
    { progressColor: S = "red" } = e,
    { progressContrast: D = 100 } = e,
    { progressDropShadowAmount: Y = 0 } = e,
    { progressValue: $ = 100 } = e,
    { ringSize: W = 4 } = e,
    { rotateDegree: q = 0 } = e,
    { translateX: j = 0 } = e,
    { translateY: x = 0 } = e,
    { width: V = 50 } = e,
    Q = 25;
  const M = nn($, { duration: 600, easing: pn });
  de(n, M, (K) => t(32, (o = K)));
  let X = Q - W / 2,
    p = X * 2 * Math.PI,
    z = p - (o / 100) * p,
    J = Q * 0.8,
    v = J - J / 2,
    ae = v * 2 * Math.PI,
    ee = ae - (o / 100) * ae;
  return (
    (n.$$set = (K) => {
      "displayOutline" in K && t(0, (i = K.displayOutline)),
        "height" in K && t(27, (l = K.height)),
        "icon" in K && t(1, (s = K.icon)),
        "iconColor" in K && t(2, (f = K.iconColor)),
        "iconContrast" in K && t(3, (u = K.iconContrast)),
        "iconDropShadowAmount" in K && t(4, (a = K.iconDropShadowAmount)),
        "iconRotateDegree" in K && t(28, (c = K.iconRotateDegree)),
        "iconScaling" in K && t(5, (d = K.iconScaling)),
        "iconTranslateX" in K && t(6, (h = K.iconTranslateX)),
        "iconTranslateY" in K && t(7, (_ = K.iconTranslateY)),
        "name" in K && t(29, (k = K.name)),
        "outlineColor" in K && t(8, (b = K.outlineColor)),
        "outlineContrast" in K && t(9, (w = K.outlineContrast)),
        "outlineDropShadowAmount" in K &&
          t(10, (g = K.outlineDropShadowAmount)),
        "progressColor" in K && t(11, (S = K.progressColor)),
        "progressContrast" in K && t(12, (D = K.progressContrast)),
        "progressDropShadowAmount" in K &&
          t(13, (Y = K.progressDropShadowAmount)),
        "progressValue" in K && t(30, ($ = K.progressValue)),
        "ringSize" in K && t(14, (W = K.ringSize)),
        "rotateDegree" in K && t(15, (q = K.rotateDegree)),
        "translateX" in K && t(16, (j = K.translateX)),
        "translateY" in K && t(17, (x = K.translateY)),
        "width" in K && t(31, (V = K.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 1073741824 && M.set($),
        (n.$$.dirty[0] & 134217728) | (n.$$.dirty[1] & 1) &&
          t(18, (Q = l > V ? l / 2 : V / 2)),
        n.$$.dirty[0] & 7094272 &&
          (t(19, (X = Q - W / 2)),
          t(20, (p = X * 2 * Math.PI)),
          t(21, (J = (Q - W) * 0.8)),
          t(22, (v = J - J / 2)),
          t(23, (ae = v * 2 * Math.PI))),
        (n.$$.dirty[0] & 9437184) | (n.$$.dirty[1] & 2) &&
          (t(24, (z = p - (o / 100) * p)), t(25, (ee = ae - (o / 100) * ae)));
    }),
    [
      i,
      s,
      f,
      u,
      a,
      d,
      h,
      _,
      b,
      w,
      g,
      S,
      D,
      Y,
      W,
      q,
      j,
      x,
      Q,
      X,
      p,
      J,
      v,
      ae,
      z,
      ee,
      M,
      l,
      c,
      k,
      $,
      V,
      o,
    ]
  );
}
class ys extends ue {
  constructor(e) {
    super();
    fe(
      this,
      e,
      Is,
      Ts,
      ce,
      {
        displayOutline: 0,
        height: 27,
        icon: 1,
        iconColor: 2,
        iconContrast: 3,
        iconDropShadowAmount: 4,
        iconRotateDegree: 28,
        iconScaling: 5,
        iconTranslateX: 6,
        iconTranslateY: 7,
        name: 29,
        outlineColor: 8,
        outlineContrast: 9,
        outlineDropShadowAmount: 10,
        progressColor: 11,
        progressContrast: 12,
        progressDropShadowAmount: 13,
        progressValue: 30,
        ringSize: 14,
        rotateDegree: 15,
        translateX: 16,
        translateY: 17,
        width: 31,
      },
      null,
      [-1, -1]
    );
  }
}
function Ms(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h, _, k, b;
  return (
    (d = new Fe({
      props: {
        icon: n[0],
        scale: n[4],
        translateX: n[5],
        translateY: n[6],
        style: "color:" + n[1],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          (o = O("circle")),
          (s = O("circle")),
          (c = O("g")),
          P(d.$$.fragment),
          r(o, "fill", "transparent"),
          r(o, "stroke", n[7]),
          r(o, "stroke-dashoffset", 0),
          r(o, "stroke-dasharray", (i = n[19] + " " + n[19])),
          r(o, "stroke-width", n[17]),
          r(o, "r", n[18]),
          r(o, "cx", n[16]),
          r(o, "cy", n[16]),
          r(o, "transform", (l = "rotate(-90, " + n[16] + ", " + n[16] + ")")),
          R(
            o,
            "filter",
            (n[9] ? "drop-shadow(0px 0px " + n[9] + "px " + n[7] + ")" : "") +
              " " +
              ("contrast(" + n[8] + "%)")
          ),
          r(s, "stroke", n[10]),
          r(s, "fill", "transparent"),
          r(s, "stroke-dashoffset", n[20]),
          r(s, "stroke-dasharray", (f = n[19] + " " + n[19])),
          r(s, "stroke-width", n[17]),
          r(s, "r", n[18]),
          r(s, "cx", n[16]),
          r(s, "cy", n[16]),
          r(s, "transform", (u = "rotate(-90, " + n[16] + ", " + n[16] + ")")),
          R(
            s,
            "filter",
            (n[12]
              ? "drop-shadow(0px 0px " + n[12] + "px " + n[10] + ")"
              : "") +
              " " +
              ("contrast(" + n[11] + "%)")
          ),
          r(
            t,
            "transform",
            (a =
              `
    ` +
              (n[13] > 0
                ? "rotate(" + n[13] + " " + n[16] + " " + n[16] + ")"
                : "") +
              `
    ` +
              ("translate(" + n[14] + " " + n[15] + ")"))
          ),
          R(
            c,
            "filter",
            (n[3] ? "drop-shadow(0px 0px " + n[3] + "px " + n[1] + ")" : "") +
              " " +
              ("contrast(" + n[2] + "%)")
          ),
          r(e, "width", (h = n[16] * 2)),
          r(e, "height", (_ = n[16] * 2)),
          r(e, "viewBox", (k = "0 0 " + n[16] * 2 + " " + n[16] * 2)),
          r(e, "overflow", "visible");
      },
      m(w, g) {
        H(w, e, g), m(e, t), m(t, o), m(t, s), m(e, c), B(d, c, null), (b = !0);
      },
      p(w, [g]) {
        (!b || g & 128) && r(o, "stroke", w[7]),
          (!b || (g & 524288 && i !== (i = w[19] + " " + w[19]))) &&
            r(o, "stroke-dasharray", i),
          (!b || g & 131072) && r(o, "stroke-width", w[17]),
          (!b || g & 262144) && r(o, "r", w[18]),
          (!b || g & 65536) && r(o, "cx", w[16]),
          (!b || g & 65536) && r(o, "cy", w[16]),
          (!b ||
            (g & 65536 &&
              l !== (l = "rotate(-90, " + w[16] + ", " + w[16] + ")"))) &&
            r(o, "transform", l),
          (!b || g & 896) &&
            R(
              o,
              "filter",
              (w[9] ? "drop-shadow(0px 0px " + w[9] + "px " + w[7] + ")" : "") +
                " " +
                ("contrast(" + w[8] + "%)")
            ),
          (!b || g & 1024) && r(s, "stroke", w[10]),
          (!b || g & 1048576) && r(s, "stroke-dashoffset", w[20]),
          (!b || (g & 524288 && f !== (f = w[19] + " " + w[19]))) &&
            r(s, "stroke-dasharray", f),
          (!b || g & 131072) && r(s, "stroke-width", w[17]),
          (!b || g & 262144) && r(s, "r", w[18]),
          (!b || g & 65536) && r(s, "cx", w[16]),
          (!b || g & 65536) && r(s, "cy", w[16]),
          (!b ||
            (g & 65536 &&
              u !== (u = "rotate(-90, " + w[16] + ", " + w[16] + ")"))) &&
            r(s, "transform", u),
          (!b || g & 7168) &&
            R(
              s,
              "filter",
              (w[12]
                ? "drop-shadow(0px 0px " + w[12] + "px " + w[10] + ")"
                : "") +
                " " +
                ("contrast(" + w[11] + "%)")
            ),
          (!b ||
            (g & 122880 &&
              a !==
                (a =
                  `
    ` +
                  (w[13] > 0
                    ? "rotate(" + w[13] + " " + w[16] + " " + w[16] + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + w[14] + " " + w[15] + ")")))) &&
            r(t, "transform", a);
        const S = {};
        g & 1 && (S.icon = w[0]),
          g & 16 && (S.scale = w[4]),
          g & 32 && (S.translateX = w[5]),
          g & 64 && (S.translateY = w[6]),
          g & 2 && (S.style = "color:" + w[1]),
          d.$set(S),
          (!b || g & 14) &&
            R(
              c,
              "filter",
              (w[3] ? "drop-shadow(0px 0px " + w[3] + "px " + w[1] + ")" : "") +
                " " +
                ("contrast(" + w[2] + "%)")
            ),
          (!b || (g & 65536 && h !== (h = w[16] * 2))) && r(e, "width", h),
          (!b || (g & 65536 && _ !== (_ = w[16] * 2))) && r(e, "height", _),
          (!b ||
            (g & 65536 && k !== (k = "0 0 " + w[16] * 2 + " " + w[16] * 2))) &&
            r(e, "viewBox", k);
      },
      i(w) {
        b || (C(d.$$.fragment, w), (b = !0));
      },
      o(w) {
        T(d.$$.fragment, w), (b = !1);
      },
      d(w) {
        w && E(e), U(d);
      },
    }
  );
}
function Ys(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { name: h = "" } = e,
    { outlineColor: _ = "red" } = e,
    { outlineContrast: k = 100 } = e,
    { outlineDropShadowAmount: b = 0 } = e,
    { progressColor: w = "red" } = e,
    { progressContrast: g = 100 } = e,
    { progressDropShadowAmount: S = 0 } = e,
    { progressValue: D = 100 } = e,
    { rotateDegree: Y = 0 } = e,
    { translateX: $ = 0 } = e,
    { translateY: W = 0 } = e,
    { width: q = 50 } = e,
    j = 25,
    x = 25,
    V = j - x / 2,
    Q = V * 2 * Math.PI,
    M = 0;
  const X = nn(D, { duration: 600, easing: pn });
  return (
    de(n, X, (p) => t(26, (o = p))),
    (n.$$set = (p) => {
      "height" in p && t(22, (i = p.height)),
        "icon" in p && t(0, (l = p.icon)),
        "iconColor" in p && t(1, (s = p.iconColor)),
        "iconContrast" in p && t(2, (f = p.iconContrast)),
        "iconDropShadowAmount" in p && t(3, (u = p.iconDropShadowAmount)),
        "iconScaling" in p && t(4, (a = p.iconScaling)),
        "iconTranslateX" in p && t(5, (c = p.iconTranslateX)),
        "iconTranslateY" in p && t(6, (d = p.iconTranslateY)),
        "name" in p && t(23, (h = p.name)),
        "outlineColor" in p && t(7, (_ = p.outlineColor)),
        "outlineContrast" in p && t(8, (k = p.outlineContrast)),
        "outlineDropShadowAmount" in p && t(9, (b = p.outlineDropShadowAmount)),
        "progressColor" in p && t(10, (w = p.progressColor)),
        "progressContrast" in p && t(11, (g = p.progressContrast)),
        "progressDropShadowAmount" in p &&
          t(12, (S = p.progressDropShadowAmount)),
        "progressValue" in p && t(24, (D = p.progressValue)),
        "rotateDegree" in p && t(13, (Y = p.rotateDegree)),
        "translateX" in p && t(14, ($ = p.translateX)),
        "translateY" in p && t(15, (W = p.translateY)),
        "width" in p && t(25, (q = p.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16777216 && X.set(D),
        n.$$.dirty & 105840640 &&
          (t(16, (j = i > q ? i / 2 : q / 2)),
          t(17, (x = j)),
          t(18, (V = j - x / 2)),
          t(19, (Q = V * 2 * Math.PI)),
          t(20, (M = Q - (o / 100) * Q)));
    }),
    [
      l,
      s,
      f,
      u,
      a,
      c,
      d,
      _,
      k,
      b,
      w,
      g,
      S,
      Y,
      $,
      W,
      j,
      x,
      V,
      Q,
      M,
      X,
      i,
      h,
      D,
      q,
      o,
    ]
  );
}
class Xs extends ue {
  constructor(e) {
    super();
    fe(this, e, Ys, Ms, ce, {
      height: 22,
      icon: 0,
      iconColor: 1,
      iconContrast: 2,
      iconDropShadowAmount: 3,
      iconScaling: 4,
      iconTranslateX: 5,
      iconTranslateY: 6,
      name: 23,
      outlineColor: 7,
      outlineContrast: 8,
      outlineDropShadowAmount: 9,
      progressColor: 10,
      progressContrast: 11,
      progressDropShadowAmount: 12,
      progressValue: 24,
      rotateDegree: 13,
      translateX: 14,
      translateY: 15,
      width: 25,
    });
  }
}
function Os(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h, _, k, b, w;
  return (
    (h = new Fe({
      props: {
        icon: n[0],
        scale: n[4],
        translateX: n[5],
        translateY: n[6],
        style: "color:" + n[1],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("defs")),
          (o = O("clipPath")),
          (i = O("circle")),
          (s = O("g")),
          (f = O("circle")),
          (u = O("line")),
          (d = O("g")),
          P(h.$$.fragment),
          r(i, "stroke-width", n[18]),
          r(i, "r", n[17]),
          r(i, "cx", n[17]),
          r(i, "cy", n[17]),
          r(o, "id", (l = n[7] + "-cut-out-circle")),
          r(f, "stroke", n[8]),
          r(f, "fill", "transparent"),
          r(f, "stroke-width", n[18]),
          r(f, "r", n[20]),
          r(f, "cx", n[17]),
          r(f, "cy", n[17]),
          r(f, "shape-rendering", "geometricPrecision"),
          R(
            f,
            "filter",
            (n[10] ? "drop-shadow(0px 0px " + n[10] + "px " + n[8] + ")" : "") +
              " " +
              ("contrast(" + n[9] + "%)")
          ),
          r(u, "x1", "50%"),
          r(u, "y1", "100%"),
          r(u, "x2", "50%"),
          r(u, "y2", "0%"),
          r(u, "stroke", n[11]),
          r(u, "stroke-dasharray", n[19]),
          r(u, "stroke-dashoffset", n[21]),
          r(u, "stroke-width", n[19]),
          r(u, "clip-path", (a = "url(#" + (n[7] + "-cut-out-circle") + ")")),
          r(u, "shape-rendering", "geometricPrecision"),
          R(
            u,
            "filter",
            (n[13]
              ? "drop-shadow(0px 0px " + n[13] + "px " + n[11] + ")"
              : "") +
              " " +
              ("contrast(" + n[12] + "%)")
          ),
          r(
            s,
            "transform",
            (c =
              `
    ` +
              (n[14] > 0
                ? "rotate(" + n[14] + " " + n[17] + " " + n[17] + ")"
                : "") +
              `
    ` +
              ("translate(" + n[15] + " " + n[16] + ")"))
          ),
          R(
            d,
            "filter",
            (n[3] ? "drop-shadow(0px 0px " + n[3] + "px " + n[1] + ")" : "") +
              " " +
              ("contrast(" + n[2] + "%)")
          ),
          r(e, "width", (_ = n[17] * 2)),
          r(e, "height", (k = n[17] * 2)),
          r(e, "viewBox", (b = "0 0 " + n[17] * 2 + " " + n[17] * 2)),
          r(e, "overflow", "visible");
      },
      m(g, S) {
        H(g, e, S),
          m(e, t),
          m(t, o),
          m(o, i),
          m(e, s),
          m(s, f),
          m(s, u),
          m(e, d),
          B(h, d, null),
          (w = !0);
      },
      p(g, [S]) {
        (!w || S & 262144) && r(i, "stroke-width", g[18]),
          (!w || S & 131072) && r(i, "r", g[17]),
          (!w || S & 131072) && r(i, "cx", g[17]),
          (!w || S & 131072) && r(i, "cy", g[17]),
          (!w || (S & 128 && l !== (l = g[7] + "-cut-out-circle"))) &&
            r(o, "id", l),
          (!w || S & 256) && r(f, "stroke", g[8]),
          (!w || S & 262144) && r(f, "stroke-width", g[18]),
          (!w || S & 1048576) && r(f, "r", g[20]),
          (!w || S & 131072) && r(f, "cx", g[17]),
          (!w || S & 131072) && r(f, "cy", g[17]),
          (!w || S & 1792) &&
            R(
              f,
              "filter",
              (g[10]
                ? "drop-shadow(0px 0px " + g[10] + "px " + g[8] + ")"
                : "") +
                " " +
                ("contrast(" + g[9] + "%)")
            ),
          (!w || S & 2048) && r(u, "stroke", g[11]),
          (!w || S & 524288) && r(u, "stroke-dasharray", g[19]),
          (!w || S & 2097152) && r(u, "stroke-dashoffset", g[21]),
          (!w || S & 524288) && r(u, "stroke-width", g[19]),
          (!w ||
            (S & 128 &&
              a !== (a = "url(#" + (g[7] + "-cut-out-circle") + ")"))) &&
            r(u, "clip-path", a),
          (!w || S & 14336) &&
            R(
              u,
              "filter",
              (g[13]
                ? "drop-shadow(0px 0px " + g[13] + "px " + g[11] + ")"
                : "") +
                " " +
                ("contrast(" + g[12] + "%)")
            ),
          (!w ||
            (S & 245760 &&
              c !==
                (c =
                  `
    ` +
                  (g[14] > 0
                    ? "rotate(" + g[14] + " " + g[17] + " " + g[17] + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + g[15] + " " + g[16] + ")")))) &&
            r(s, "transform", c);
        const D = {};
        S & 1 && (D.icon = g[0]),
          S & 16 && (D.scale = g[4]),
          S & 32 && (D.translateX = g[5]),
          S & 64 && (D.translateY = g[6]),
          S & 2 && (D.style = "color:" + g[1]),
          h.$set(D),
          (!w || S & 14) &&
            R(
              d,
              "filter",
              (g[3] ? "drop-shadow(0px 0px " + g[3] + "px " + g[1] + ")" : "") +
                " " +
                ("contrast(" + g[2] + "%)")
            ),
          (!w || (S & 131072 && _ !== (_ = g[17] * 2))) && r(e, "width", _),
          (!w || (S & 131072 && k !== (k = g[17] * 2))) && r(e, "height", k),
          (!w ||
            (S & 131072 && b !== (b = "0 0 " + g[17] * 2 + " " + g[17] * 2))) &&
            r(e, "viewBox", b);
      },
      i(g) {
        w || (C(h.$$.fragment, g), (w = !0));
      },
      o(g) {
        T(h.$$.fragment, g), (w = !1);
      },
      d(g) {
        g && E(e), U(h);
      },
    }
  );
}
function Fs(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { name: h = "" } = e,
    { outlineColor: _ = "red" } = e,
    { outlineContrast: k = 100 } = e,
    { outlineDropShadowAmount: b = 0 } = e,
    { progressColor: w = "red" } = e,
    { progressContrast: g = 100 } = e,
    { progressDropShadowAmount: S = 0 } = e,
    { progressValue: D = 100 } = e,
    { rotateDegree: Y = 0 } = e,
    { translateX: $ = 0 } = e,
    { translateY: W = 0 } = e,
    { width: q = 50 } = e,
    j = 25,
    x = 25,
    V = i,
    Q = j - x / 2,
    M = 0;
  const X = nn(D, { duration: 600, easing: pn });
  return (
    de(n, X, (p) => t(26, (o = p))),
    (n.$$set = (p) => {
      "height" in p && t(23, (i = p.height)),
        "icon" in p && t(0, (l = p.icon)),
        "iconColor" in p && t(1, (s = p.iconColor)),
        "iconContrast" in p && t(2, (f = p.iconContrast)),
        "iconDropShadowAmount" in p && t(3, (u = p.iconDropShadowAmount)),
        "iconScaling" in p && t(4, (a = p.iconScaling)),
        "iconTranslateX" in p && t(5, (c = p.iconTranslateX)),
        "iconTranslateY" in p && t(6, (d = p.iconTranslateY)),
        "name" in p && t(7, (h = p.name)),
        "outlineColor" in p && t(8, (_ = p.outlineColor)),
        "outlineContrast" in p && t(9, (k = p.outlineContrast)),
        "outlineDropShadowAmount" in p &&
          t(10, (b = p.outlineDropShadowAmount)),
        "progressColor" in p && t(11, (w = p.progressColor)),
        "progressContrast" in p && t(12, (g = p.progressContrast)),
        "progressDropShadowAmount" in p &&
          t(13, (S = p.progressDropShadowAmount)),
        "progressValue" in p && t(24, (D = p.progressValue)),
        "rotateDegree" in p && t(14, (Y = p.rotateDegree)),
        "translateX" in p && t(15, ($ = p.translateX)),
        "translateY" in p && t(16, (W = p.translateY)),
        "width" in p && t(25, (q = p.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16777216 && X.set(D),
        n.$$.dirty & 43909120 &&
          (t(19, (V = i > q ? i : q)),
          t(17, (j = V / 2)),
          t(18, (x = j)),
          t(20, (Q = j - x / 2))),
        n.$$.dirty & 67633152 && t(21, (M = V - (o / 100) * V));
    }),
    [
      l,
      s,
      f,
      u,
      a,
      c,
      d,
      h,
      _,
      k,
      b,
      w,
      g,
      S,
      Y,
      $,
      W,
      j,
      x,
      V,
      Q,
      M,
      X,
      i,
      D,
      q,
      o,
    ]
  );
}
class Es extends ue {
  constructor(e) {
    super();
    fe(this, e, Fs, Os, ce, {
      height: 23,
      icon: 0,
      iconColor: 1,
      iconContrast: 2,
      iconDropShadowAmount: 3,
      iconScaling: 4,
      iconTranslateX: 5,
      iconTranslateY: 6,
      name: 7,
      outlineColor: 8,
      outlineContrast: 9,
      outlineDropShadowAmount: 10,
      progressColor: 11,
      progressContrast: 12,
      progressDropShadowAmount: 13,
      progressValue: 24,
      rotateDegree: 14,
      translateX: 15,
      translateY: 16,
      width: 25,
    });
  }
}
function Ti(n) {
  let e, t, o;
  return {
    c() {
      (e = O("path")),
        r(
          e,
          "d",
          "M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468z"
        ),
        r(e, "fill", "transparent"),
        r(e, "stroke", n[10]),
        r(e, "stroke-width", n[16]),
        r(e, "stroke-dasharray", (t = n[21] + " " + n[21])),
        r(e, "stroke-dashoffset", (o = 0)),
        R(
          e,
          "filter",
          (n[12] ? "drop-shadow(0px 0px " + n[12] + "px " + n[10] + ")" : "") +
            " " +
            ("contrast(" + n[11] + "%)")
        );
    },
    m(i, l) {
      H(i, e, l);
    },
    p(i, l) {
      l & 1024 && r(e, "stroke", i[10]),
        l & 65536 && r(e, "stroke-width", i[16]),
        l & 2097152 &&
          t !== (t = i[21] + " " + i[21]) &&
          r(e, "stroke-dasharray", t),
        l & 7168 &&
          R(
            e,
            "filter",
            (i[12]
              ? "drop-shadow(0px 0px " + i[12] + "px " + i[10] + ")"
              : "") +
              " " +
              ("contrast(" + i[11] + "%)")
          );
    },
    d(i) {
      i && E(e);
    },
  };
}
function Vs(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k = n[0] && Ti(n);
  return (
    (h = new Fe({
      props: {
        icon: n[2],
        scale: n[6],
        translateX: n[7],
        translateY: n[8],
        flip: "horizontal",
        style: "color:" + n[3],
      },
    })),
    {
      c() {
        (e = A("div")),
          (t = O("svg")),
          (o = O("g")),
          k && k.c(),
          (i = O("svg")),
          (l = O("path")),
          (u = O("path")),
          (d = O("g")),
          P(h.$$.fragment),
          r(
            l,
            "d",
            "M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468z"
          ),
          r(l, "stroke-width", (s = n[16] - 0.3)),
          r(l, "fill", n[9]),
          r(l, "stroke", "transparent"),
          r(l, "stroke-dasharray", (f = n[21] + " " + n[21])),
          r(l, "stroke-dashoffset", 0),
          r(i, "viewBox", "-1.5 4.5 19 7"),
          r(
            u,
            "d",
            "M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468z"
          ),
          r(u, "class", "stroke-cap-round stroke-join-round"),
          r(u, "stroke", n[13]),
          r(u, "stroke-width", n[16]),
          r(u, "fill", "transparent"),
          r(u, "stroke-dasharray", (a = n[21] + " " + n[21])),
          r(u, "stroke-dashoffset", n[22]),
          R(
            u,
            "filter",
            (n[15]
              ? "drop-shadow(0px 0px " + n[15] + "px " + n[13] + ")"
              : "") +
              " " +
              ("contrast(" + n[14] + "%)")
          ),
          r(
            o,
            "transform",
            (c =
              `
        ` +
              (n[17] > 0 ? "rotate(" + n[17] + " " + 8 + " " + 8 + ")" : "") +
              `
        ` +
              ("translate(" + n[18] + " " + n[19] + ")"))
          ),
          R(
            d,
            "filter",
            (n[5] ? "drop-shadow(0px 0px " + n[5] + "px " + n[3] + ")" : "") +
              " " +
              ("contrast(" + n[4] + "%)")
          ),
          r(t, "version", "1.1"),
          r(t, "width", n[20]),
          r(t, "height", n[1]),
          r(t, "viewBox", "0 0 16 16"),
          r(t, "transform", "scale(-1,1)"),
          r(e, "class", "mx-[-7px]");
      },
      m(b, w) {
        H(b, e, w),
          m(e, t),
          m(t, o),
          k && k.m(o, null),
          m(o, i),
          m(i, l),
          m(o, u),
          n[29](u),
          m(t, d),
          B(h, d, null),
          (_ = !0);
      },
      p(b, [w]) {
        b[0]
          ? k
            ? k.p(b, w)
            : ((k = Ti(b)), k.c(), k.m(o, i))
          : k && (k.d(1), (k = null)),
          (!_ || (w & 65536 && s !== (s = b[16] - 0.3))) &&
            r(l, "stroke-width", s),
          (!_ || w & 512) && r(l, "fill", b[9]),
          (!_ || (w & 2097152 && f !== (f = b[21] + " " + b[21]))) &&
            r(l, "stroke-dasharray", f),
          (!_ || w & 8192) && r(u, "stroke", b[13]),
          (!_ || w & 65536) && r(u, "stroke-width", b[16]),
          (!_ || (w & 2097152 && a !== (a = b[21] + " " + b[21]))) &&
            r(u, "stroke-dasharray", a),
          (!_ || w & 4194304) && r(u, "stroke-dashoffset", b[22]),
          (!_ || w & 57344) &&
            R(
              u,
              "filter",
              (b[15]
                ? "drop-shadow(0px 0px " + b[15] + "px " + b[13] + ")"
                : "") +
                " " +
                ("contrast(" + b[14] + "%)")
            ),
          (!_ ||
            (w & 917504 &&
              c !==
                (c =
                  `
        ` +
                  (b[17] > 0
                    ? "rotate(" + b[17] + " " + 8 + " " + 8 + ")"
                    : "") +
                  `
        ` +
                  ("translate(" + b[18] + " " + b[19] + ")")))) &&
            r(o, "transform", c);
        const g = {};
        w & 4 && (g.icon = b[2]),
          w & 64 && (g.scale = b[6]),
          w & 128 && (g.translateX = b[7]),
          w & 256 && (g.translateY = b[8]),
          w & 8 && (g.style = "color:" + b[3]),
          h.$set(g),
          (!_ || w & 56) &&
            R(
              d,
              "filter",
              (b[5] ? "drop-shadow(0px 0px " + b[5] + "px " + b[3] + ")" : "") +
                " " +
                ("contrast(" + b[4] + "%)")
            ),
          (!_ || w & 1048576) && r(t, "width", b[20]),
          (!_ || w & 2) && r(t, "height", b[1]);
      },
      i(b) {
        _ || (C(h.$$.fragment, b), (_ = !0));
      },
      o(b) {
        T(h.$$.fragment, b), (_ = !1);
      },
      d(b) {
        b && E(e), k && k.d(), n[29](null), U(h);
      },
    }
  );
}
function Hs(n, e, t) {
  let o,
    { displayOutline: i = !0 } = e,
    { height: l = 50 } = e,
    { icon: s = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: u = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: d = 0.45 } = e,
    { iconTranslateX: h = 0 } = e,
    { iconTranslateY: _ = 0 } = e,
    { innerColor: k = "#212121" } = e,
    { name: b = "" } = e,
    { outlineColor: w = "red" } = e,
    { outlineContrast: g = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: D = "red" } = e,
    { progressContrast: Y = 100 } = e,
    { progressDropShadowAmount: $ = 0 } = e,
    { progressValue: W = 100 } = e,
    { ringSize: q = 4 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: x = 0 } = e,
    { translateY: V = 0 } = e,
    { width: Q = 50 } = e,
    M = 10;
  const X = nn(W, { duration: 600, easing: pn });
  de(n, X, (v) => t(28, (o = v)));
  let p, z;
  Pt(() => {
    try {
      t(21, (z = p.getTotalLength()));
    } catch {
      console.log(
        "Error: PS-Hud: Diamond-Ring-Icon should not be mounting when hiding icons"
      );
    }
  });
  function J(v) {
    te[v ? "unshift" : "push"](() => {
      (p = v), t(23, p);
    });
  }
  return (
    (n.$$set = (v) => {
      "displayOutline" in v && t(0, (i = v.displayOutline)),
        "height" in v && t(1, (l = v.height)),
        "icon" in v && t(2, (s = v.icon)),
        "iconColor" in v && t(3, (f = v.iconColor)),
        "iconContrast" in v && t(4, (u = v.iconContrast)),
        "iconDropShadowAmount" in v && t(5, (a = v.iconDropShadowAmount)),
        "iconRotateDegree" in v && t(25, (c = v.iconRotateDegree)),
        "iconScaling" in v && t(6, (d = v.iconScaling)),
        "iconTranslateX" in v && t(7, (h = v.iconTranslateX)),
        "iconTranslateY" in v && t(8, (_ = v.iconTranslateY)),
        "innerColor" in v && t(9, (k = v.innerColor)),
        "name" in v && t(26, (b = v.name)),
        "outlineColor" in v && t(10, (w = v.outlineColor)),
        "outlineContrast" in v && t(11, (g = v.outlineContrast)),
        "outlineDropShadowAmount" in v &&
          t(12, (S = v.outlineDropShadowAmount)),
        "progressColor" in v && t(13, (D = v.progressColor)),
        "progressContrast" in v && t(14, (Y = v.progressContrast)),
        "progressDropShadowAmount" in v &&
          t(15, ($ = v.progressDropShadowAmount)),
        "progressValue" in v && t(27, (W = v.progressValue)),
        "ringSize" in v && t(16, (q = v.ringSize)),
        "rotateDegree" in v && t(17, (j = v.rotateDegree)),
        "translateX" in v && t(18, (x = v.translateX)),
        "translateY" in v && t(19, (V = v.translateY)),
        "width" in v && t(20, (Q = v.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 134217728 && X.set(W),
        n.$$.dirty & 270532608 && t(22, (M = z - (o / 100) * z));
    }),
    [
      i,
      l,
      s,
      f,
      u,
      a,
      d,
      h,
      _,
      k,
      w,
      g,
      S,
      D,
      Y,
      $,
      q,
      j,
      x,
      V,
      Q,
      z,
      M,
      p,
      X,
      c,
      b,
      W,
      o,
      J,
    ]
  );
}
class Rs extends ue {
  constructor(e) {
    super();
    fe(this, e, Hs, Vs, ce, {
      displayOutline: 0,
      height: 1,
      icon: 2,
      iconColor: 3,
      iconContrast: 4,
      iconDropShadowAmount: 5,
      iconRotateDegree: 25,
      iconScaling: 6,
      iconTranslateX: 7,
      iconTranslateY: 8,
      innerColor: 9,
      name: 26,
      outlineColor: 10,
      outlineContrast: 11,
      outlineDropShadowAmount: 12,
      progressColor: 13,
      progressContrast: 14,
      progressDropShadowAmount: 15,
      progressValue: 27,
      ringSize: 16,
      rotateDegree: 17,
      translateX: 18,
      translateY: 19,
      width: 20,
    });
  }
}
function Ps(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h, _, k;
  return (
    (_ = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = A("div")),
          (t = O("svg")),
          (o = O("defs")),
          (i = O("clipPath")),
          (l = O("path")),
          (f = O("g")),
          (u = O("path")),
          (a = O("line")),
          (h = O("g")),
          P(_.$$.fragment),
          r(
            l,
            "d",
            "M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468z"
          ),
          r(l, "fill", "transparent"),
          r(i, "id", (s = n[8] + "-cut-out-diamond")),
          r(
            u,
            "d",
            "M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468z"
          ),
          r(u, "fill", n[9]),
          r(u, "stroke", "transparent"),
          R(
            u,
            "filter",
            (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
              " " +
              ("contrast(" + n[10] + "%)")
          ),
          r(a, "x1", "50%"),
          r(a, "y1", "100%"),
          r(a, "x2", "50%"),
          r(a, "y2", 0),
          r(a, "stroke", n[12]),
          r(a, "stroke-dasharray", 16),
          r(a, "stroke-dashoffset", n[19]),
          r(a, "stroke-width", n[18]),
          r(a, "clip-path", (c = "url(#" + n[8] + "-cut-out-diamond)")),
          R(
            a,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          r(
            f,
            "transform",
            (d =
              `
        ` +
              (n[15] > 0 ? "rotate(" + n[15] + " " + 8 + " " + 8 + ")" : "") +
              `
        ` +
              ("translate(" + n[16] + " " + n[17] + ")"))
          ),
          R(
            h,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(t, "version", "1.1"),
          r(t, "width", n[18]),
          r(t, "height", n[0]),
          r(t, "viewBox", "0 0 16 16"),
          r(e, "class", "mx-[-7px]");
      },
      m(b, w) {
        H(b, e, w),
          m(e, t),
          m(t, o),
          m(o, i),
          m(i, l),
          m(t, f),
          m(f, u),
          m(f, a),
          m(t, h),
          B(_, h, null),
          (k = !0);
      },
      p(b, [w]) {
        (!k || (w & 256 && s !== (s = b[8] + "-cut-out-diamond"))) &&
          r(i, "id", s),
          (!k || w & 512) && r(u, "fill", b[9]),
          (!k || w & 3584) &&
            R(
              u,
              "filter",
              (b[11]
                ? "drop-shadow(0px 0px " + b[11] + "px " + b[9] + ")"
                : "") +
                " " +
                ("contrast(" + b[10] + "%)")
            ),
          (!k || w & 4096) && r(a, "stroke", b[12]),
          (!k || w & 524288) && r(a, "stroke-dashoffset", b[19]),
          (!k || w & 262144) && r(a, "stroke-width", b[18]),
          (!k ||
            (w & 256 && c !== (c = "url(#" + b[8] + "-cut-out-diamond)"))) &&
            r(a, "clip-path", c),
          (!k || w & 28672) &&
            R(
              a,
              "filter",
              (b[14]
                ? "drop-shadow(0px 0px " + b[14] + "px " + b[12] + ")"
                : "") +
                " " +
                ("contrast(" + b[13] + "%)")
            ),
          (!k ||
            (w & 229376 &&
              d !==
                (d =
                  `
        ` +
                  (b[15] > 0
                    ? "rotate(" + b[15] + " " + 8 + " " + 8 + ")"
                    : "") +
                  `
        ` +
                  ("translate(" + b[16] + " " + b[17] + ")")))) &&
            r(f, "transform", d);
        const g = {};
        w & 2 && (g.icon = b[1]),
          w & 32 && (g.scale = b[5]),
          w & 64 && (g.translateX = b[6]),
          w & 128 && (g.translateY = b[7]),
          w & 4 && (g.style = "color:" + b[2]),
          _.$set(g),
          (!k || w & 28) &&
            R(
              h,
              "filter",
              (b[4] ? "drop-shadow(0px 0px " + b[4] + "px " + b[2] + ")" : "") +
                " " +
                ("contrast(" + b[3] + "%)")
            ),
          (!k || w & 262144) && r(t, "width", b[18]),
          (!k || w & 1) && r(t, "height", b[0]);
      },
      i(b) {
        k || (C(_.$$.fragment, b), (k = !0));
      },
      o(b) {
        T(_.$$.fragment, b), (k = !1);
      },
      d(b) {
        b && E(e), U(_);
      },
    }
  );
}
function Bs(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { name: h = "" } = e,
    { outlineColor: _ = "red" } = e,
    { outlineContrast: k = 100 } = e,
    { outlineDropShadowAmount: b = 0 } = e,
    { progressColor: w = "red" } = e,
    { progressContrast: g = 100 } = e,
    { progressDropShadowAmount: S = 0 } = e,
    { progressValue: D = 100 } = e,
    { rotateDegree: Y = 0 } = e,
    { translateX: $ = 0 } = e,
    { translateY: W = 0 } = e,
    { width: q = 50 } = e,
    j = 10;
  const x = nn(D, { duration: 600, easing: pn });
  return (
    de(n, x, (V) => t(22, (o = V))),
    (n.$$set = (V) => {
      "height" in V && t(0, (i = V.height)),
        "icon" in V && t(1, (l = V.icon)),
        "iconColor" in V && t(2, (s = V.iconColor)),
        "iconContrast" in V && t(3, (f = V.iconContrast)),
        "iconDropShadowAmount" in V && t(4, (u = V.iconDropShadowAmount)),
        "iconScaling" in V && t(5, (a = V.iconScaling)),
        "iconTranslateX" in V && t(6, (c = V.iconTranslateX)),
        "iconTranslateY" in V && t(7, (d = V.iconTranslateY)),
        "name" in V && t(8, (h = V.name)),
        "outlineColor" in V && t(9, (_ = V.outlineColor)),
        "outlineContrast" in V && t(10, (k = V.outlineContrast)),
        "outlineDropShadowAmount" in V &&
          t(11, (b = V.outlineDropShadowAmount)),
        "progressColor" in V && t(12, (w = V.progressColor)),
        "progressContrast" in V && t(13, (g = V.progressContrast)),
        "progressDropShadowAmount" in V &&
          t(14, (S = V.progressDropShadowAmount)),
        "progressValue" in V && t(21, (D = V.progressValue)),
        "rotateDegree" in V && t(15, (Y = V.rotateDegree)),
        "translateX" in V && t(16, ($ = V.translateX)),
        "translateY" in V && t(17, (W = V.translateY)),
        "width" in V && t(18, (q = V.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 2097152 && x.set(D),
        n.$$.dirty & 4194304 && t(19, (j = 16 - (o / 100) * 16));
    }),
    [i, l, s, f, u, a, c, d, h, _, k, b, w, g, S, Y, $, W, q, j, x, D, o]
  );
}
class Us extends ue {
  constructor(e) {
    super();
    fe(this, e, Bs, Ps, ce, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      name: 8,
      outlineColor: 9,
      outlineContrast: 10,
      outlineDropShadowAmount: 11,
      progressColor: 12,
      progressContrast: 13,
      progressDropShadowAmount: 14,
      progressValue: 21,
      rotateDegree: 15,
      translateX: 16,
      translateY: 17,
      width: 18,
    });
  }
}
function Ii(n) {
  let e, t, o, i, l;
  return {
    c() {
      (e = O("rect")),
        r(e, "fill", "transparent"),
        r(e, "stroke", n[10]),
        r(e, "width", (t = n[20] - 10)),
        r(e, "height", (o = n[1] - 10)),
        r(e, "stroke-dasharray", (i = n[24] + " " + n[24])),
        r(e, "stroke-dashoffset", (l = 0)),
        r(e, "stroke-width", n[16]),
        r(e, "rx", n[21]),
        r(e, "ry", n[22]),
        r(e, "x", "5"),
        r(e, "y", "5"),
        R(
          e,
          "filter",
          (n[12] ? "drop-shadow(0px 0px " + n[12] + "px " + n[10] + ")" : "") +
            " " +
            ("contrast(" + n[11] + "%)")
        );
    },
    m(s, f) {
      H(s, e, f);
    },
    p(s, f) {
      f[0] & 1024 && r(e, "stroke", s[10]),
        f[0] & 1048576 && t !== (t = s[20] - 10) && r(e, "width", t),
        f[0] & 2 && o !== (o = s[1] - 10) && r(e, "height", o),
        f[0] & 16777216 &&
          i !== (i = s[24] + " " + s[24]) &&
          r(e, "stroke-dasharray", i),
        f[0] & 65536 && r(e, "stroke-width", s[16]),
        f[0] & 2097152 && r(e, "rx", s[21]),
        f[0] & 4194304 && r(e, "ry", s[22]),
        f[0] & 7168 &&
          R(
            e,
            "filter",
            (s[12]
              ? "drop-shadow(0px 0px " + s[12] + "px " + s[10] + ")"
              : "") +
              " " +
              ("contrast(" + s[11] + "%)")
          );
    },
    d(s) {
      s && E(e);
    },
  };
}
function zs(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w = n[0] && Ii(n);
  return (
    (_ = new Fe({
      props: {
        icon: n[2],
        scale: n[6],
        translateX: n[7],
        translateY: n[8],
        style: "color:" + n[3],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("rect")),
          w && w.c(),
          (u = O("rect")),
          (h = O("g")),
          P(_.$$.fragment),
          r(t, "fill", n[9]),
          r(t, "width", (o = n[20] - 10 - n[16] / 2)),
          r(t, "height", (i = n[1] - 10 - n[16] / 2)),
          r(t, "stroke-dasharray", (l = n[24] + " " + n[24])),
          r(t, "stroke-dashoffset", 0),
          r(t, "stroke-width", n[16]),
          r(t, "rx", n[21]),
          r(t, "ry", n[22]),
          r(t, "x", (s = 5 + n[16] / 4)),
          r(t, "y", (f = 5 + n[16] / 4)),
          r(u, "fill", "transparent"),
          r(u, "stroke", n[13]),
          r(u, "width", (a = n[20] - 10)),
          r(u, "height", (c = n[1] - 10)),
          r(u, "stroke-dasharray", (d = n[24] + " " + n[24])),
          r(u, "stroke-dashoffset", n[25]),
          r(u, "stroke-width", n[16]),
          r(u, "rx", n[21]),
          r(u, "ry", n[22]),
          r(u, "x", "5"),
          r(u, "y", "5"),
          R(
            u,
            "filter",
            (n[15]
              ? "drop-shadow(0px 0px " + n[15] + "px " + n[13] + ")"
              : "") +
              " " +
              ("contrast(" + n[14] + "%)")
          ),
          R(
            h,
            "filter",
            (n[5] ? "drop-shadow(0px 0px " + n[5] + "px " + n[3] + ")" : "") +
              " " +
              ("contrast(" + n[4] + "%)")
          ),
          r(e, "height", n[1]),
          r(e, "width", n[20]),
          r(
            e,
            "transform",
            (k =
              `
  ` +
              (n[17] > 0 ? "rotate(" + n[17] + " " + 0 + " " + 0 + ")" : "") +
              `
  ` +
              ("translate(" + n[18] + " " + n[19] + ")"))
          );
      },
      m(g, S) {
        H(g, e, S),
          m(e, t),
          w && w.m(e, null),
          m(e, u),
          n[31](u),
          m(e, h),
          B(_, h, null),
          (b = !0);
      },
      p(g, S) {
        (!b || S[0] & 512) && r(t, "fill", g[9]),
          (!b || (S[0] & 1114112 && o !== (o = g[20] - 10 - g[16] / 2))) &&
            r(t, "width", o),
          (!b || (S[0] & 65538 && i !== (i = g[1] - 10 - g[16] / 2))) &&
            r(t, "height", i),
          (!b || (S[0] & 16777216 && l !== (l = g[24] + " " + g[24]))) &&
            r(t, "stroke-dasharray", l),
          (!b || S[0] & 65536) && r(t, "stroke-width", g[16]),
          (!b || S[0] & 2097152) && r(t, "rx", g[21]),
          (!b || S[0] & 4194304) && r(t, "ry", g[22]),
          (!b || (S[0] & 65536 && s !== (s = 5 + g[16] / 4))) && r(t, "x", s),
          (!b || (S[0] & 65536 && f !== (f = 5 + g[16] / 4))) && r(t, "y", f),
          g[0]
            ? w
              ? w.p(g, S)
              : ((w = Ii(g)), w.c(), w.m(e, u))
            : w && (w.d(1), (w = null)),
          (!b || S[0] & 8192) && r(u, "stroke", g[13]),
          (!b || (S[0] & 1048576 && a !== (a = g[20] - 10))) &&
            r(u, "width", a),
          (!b || (S[0] & 2 && c !== (c = g[1] - 10))) && r(u, "height", c),
          (!b || (S[0] & 16777216 && d !== (d = g[24] + " " + g[24]))) &&
            r(u, "stroke-dasharray", d),
          (!b || S[0] & 33554432) && r(u, "stroke-dashoffset", g[25]),
          (!b || S[0] & 65536) && r(u, "stroke-width", g[16]),
          (!b || S[0] & 2097152) && r(u, "rx", g[21]),
          (!b || S[0] & 4194304) && r(u, "ry", g[22]),
          (!b || S[0] & 57344) &&
            R(
              u,
              "filter",
              (g[15]
                ? "drop-shadow(0px 0px " + g[15] + "px " + g[13] + ")"
                : "") +
                " " +
                ("contrast(" + g[14] + "%)")
            );
        const D = {};
        S[0] & 4 && (D.icon = g[2]),
          S[0] & 64 && (D.scale = g[6]),
          S[0] & 128 && (D.translateX = g[7]),
          S[0] & 256 && (D.translateY = g[8]),
          S[0] & 8 && (D.style = "color:" + g[3]),
          _.$set(D),
          (!b || S[0] & 56) &&
            R(
              h,
              "filter",
              (g[5] ? "drop-shadow(0px 0px " + g[5] + "px " + g[3] + ")" : "") +
                " " +
                ("contrast(" + g[4] + "%)")
            ),
          (!b || S[0] & 2) && r(e, "height", g[1]),
          (!b || S[0] & 1048576) && r(e, "width", g[20]),
          (!b ||
            (S[0] & 917504 &&
              k !==
                (k =
                  `
  ` +
                  (g[17] > 0
                    ? "rotate(" + g[17] + " " + 0 + " " + 0 + ")"
                    : "") +
                  `
  ` +
                  ("translate(" + g[18] + " " + g[19] + ")")))) &&
            r(e, "transform", k);
      },
      i(g) {
        b || (C(_.$$.fragment, g), (b = !0));
      },
      o(g) {
        T(_.$$.fragment, g), (b = !1);
      },
      d(g) {
        g && E(e), w && w.d(), n[31](null), U(_);
      },
    }
  );
}
function Ls(n, e, t) {
  let o,
    { displayOutline: i = !0 } = e,
    { height: l = 50 } = e,
    { icon: s = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: u = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: d = 0.45 } = e,
    { iconTranslateX: h = 0 } = e,
    { iconTranslateY: _ = 0 } = e,
    { innerColor: k = "#212121" } = e,
    { name: b = "" } = e,
    { outlineColor: w = "red" } = e,
    { outlineContrast: g = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: D = "red" } = e,
    { progressContrast: Y = 100 } = e,
    { progressDropShadowAmount: $ = 0 } = e,
    { progressValue: W = 100 } = e,
    { ringSize: q = 4 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: x = 0 } = e,
    { translateY: V = 0 } = e,
    { width: Q = 50 } = e,
    { xAxisRound: M = 18 } = e,
    { yAxisRound: X = 18 } = e,
    p = 10,
    z = null,
    J = 0;
  const v = nn(W, { duration: 600, easing: pn });
  de(n, v, (ee) => t(30, (o = ee))),
    Pt(() => {
      try {
        t(24, (J = z.getTotalLength()));
      } catch {
        console.log(
          "Error: PS-Hud: Pill-Ring-Icon should not be mounting when hiding icons"
        );
      }
    });
  function ae(ee) {
    te[ee ? "unshift" : "push"](() => {
      (z = ee), t(23, z);
    });
  }
  return (
    (n.$$set = (ee) => {
      "displayOutline" in ee && t(0, (i = ee.displayOutline)),
        "height" in ee && t(1, (l = ee.height)),
        "icon" in ee && t(2, (s = ee.icon)),
        "iconColor" in ee && t(3, (f = ee.iconColor)),
        "iconContrast" in ee && t(4, (u = ee.iconContrast)),
        "iconDropShadowAmount" in ee && t(5, (a = ee.iconDropShadowAmount)),
        "iconRotateDegree" in ee && t(27, (c = ee.iconRotateDegree)),
        "iconScaling" in ee && t(6, (d = ee.iconScaling)),
        "iconTranslateX" in ee && t(7, (h = ee.iconTranslateX)),
        "iconTranslateY" in ee && t(8, (_ = ee.iconTranslateY)),
        "innerColor" in ee && t(9, (k = ee.innerColor)),
        "name" in ee && t(28, (b = ee.name)),
        "outlineColor" in ee && t(10, (w = ee.outlineColor)),
        "outlineContrast" in ee && t(11, (g = ee.outlineContrast)),
        "outlineDropShadowAmount" in ee &&
          t(12, (S = ee.outlineDropShadowAmount)),
        "progressColor" in ee && t(13, (D = ee.progressColor)),
        "progressContrast" in ee && t(14, (Y = ee.progressContrast)),
        "progressDropShadowAmount" in ee &&
          t(15, ($ = ee.progressDropShadowAmount)),
        "progressValue" in ee && t(29, (W = ee.progressValue)),
        "ringSize" in ee && t(16, (q = ee.ringSize)),
        "rotateDegree" in ee && t(17, (j = ee.rotateDegree)),
        "translateX" in ee && t(18, (x = ee.translateX)),
        "translateY" in ee && t(19, (V = ee.translateY)),
        "width" in ee && t(20, (Q = ee.width)),
        "xAxisRound" in ee && t(21, (M = ee.xAxisRound)),
        "yAxisRound" in ee && t(22, (X = ee.yAxisRound));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 536870912 && v.set(W),
        n.$$.dirty[0] & 15728642 &&
          l &&
          Q &&
          M >= 0 &&
          X >= 0 &&
          t(24, (J = (z == null ? void 0 : z.getTotalLength()) + 5)),
        n.$$.dirty[0] & 1090519040 && t(25, (p = J - (o / 100) * J));
    }),
    [
      i,
      l,
      s,
      f,
      u,
      a,
      d,
      h,
      _,
      k,
      w,
      g,
      S,
      D,
      Y,
      $,
      q,
      j,
      x,
      V,
      Q,
      M,
      X,
      z,
      J,
      p,
      v,
      c,
      b,
      W,
      o,
      ae,
    ]
  );
}
class qs extends ue {
  constructor(e) {
    super();
    fe(
      this,
      e,
      Ls,
      zs,
      ce,
      {
        displayOutline: 0,
        height: 1,
        icon: 2,
        iconColor: 3,
        iconContrast: 4,
        iconDropShadowAmount: 5,
        iconRotateDegree: 27,
        iconScaling: 6,
        iconTranslateX: 7,
        iconTranslateY: 8,
        innerColor: 9,
        name: 28,
        outlineColor: 10,
        outlineContrast: 11,
        outlineDropShadowAmount: 12,
        progressColor: 13,
        progressContrast: 14,
        progressDropShadowAmount: 15,
        progressValue: 29,
        ringSize: 16,
        rotateDegree: 17,
        translateX: 18,
        translateY: 19,
        width: 20,
        xAxisRound: 21,
        yAxisRound: 22,
      },
      null,
      [-1, -1]
    );
  }
}
function Ns(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h;
  return (
    (c = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("defs")),
          (o = O("clipPath")),
          (i = O("rect")),
          (s = O("rect")),
          (f = O("line")),
          (a = O("g")),
          P(c.$$.fragment),
          r(i, "stroke", n[12]),
          r(i, "width", n[18]),
          r(i, "height", n[0]),
          r(i, "rx", n[19]),
          r(i, "ry", n[20]),
          r(o, "id", (l = n[8] + "-cut-out-pillwhole")),
          r(s, "fill", n[9]),
          r(s, "width", n[18]),
          r(s, "height", n[0]),
          r(s, "stroke", "transparent"),
          r(s, "stroke-width", n[0]),
          r(s, "rx", n[19]),
          r(s, "ry", n[20]),
          R(
            s,
            "filter",
            (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
              " " +
              ("contrast(" + n[10] + "%)")
          ),
          r(f, "x1", "50%"),
          r(f, "y1", "100%"),
          r(f, "x2", "50%"),
          r(f, "y2", "0%"),
          r(f, "stroke", n[12]),
          r(f, "stroke-dasharray", n[0]),
          r(f, "stroke-dashoffset", n[21]),
          r(f, "stroke-width", n[22]),
          r(f, "clip-path", (u = "url(#" + n[8] + "-cut-out-pillwhole)")),
          R(
            f,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          R(
            a,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(e, "height", n[0]),
          r(e, "width", n[18]),
          r(
            e,
            "transform",
            (d =
              `
  ` +
              (n[15] > 0 ? "rotate(" + n[15] + " " + 0 + " " + 0 + ")" : "") +
              `
  ` +
              ("translate(" + n[16] + " " + n[17] + ")"))
          );
      },
      m(_, k) {
        H(_, e, k),
          m(e, t),
          m(t, o),
          m(o, i),
          m(e, s),
          m(e, f),
          m(e, a),
          B(c, a, null),
          (h = !0);
      },
      p(_, [k]) {
        (!h || k & 4096) && r(i, "stroke", _[12]),
          (!h || k & 262144) && r(i, "width", _[18]),
          (!h || k & 1) && r(i, "height", _[0]),
          (!h || k & 524288) && r(i, "rx", _[19]),
          (!h || k & 1048576) && r(i, "ry", _[20]),
          (!h || (k & 256 && l !== (l = _[8] + "-cut-out-pillwhole"))) &&
            r(o, "id", l),
          (!h || k & 512) && r(s, "fill", _[9]),
          (!h || k & 262144) && r(s, "width", _[18]),
          (!h || k & 1) && r(s, "height", _[0]),
          (!h || k & 1) && r(s, "stroke-width", _[0]),
          (!h || k & 524288) && r(s, "rx", _[19]),
          (!h || k & 1048576) && r(s, "ry", _[20]),
          (!h || k & 3584) &&
            R(
              s,
              "filter",
              (_[11]
                ? "drop-shadow(0px 0px " + _[11] + "px " + _[9] + ")"
                : "") +
                " " +
                ("contrast(" + _[10] + "%)")
            ),
          (!h || k & 4096) && r(f, "stroke", _[12]),
          (!h || k & 1) && r(f, "stroke-dasharray", _[0]),
          (!h || k & 2097152) && r(f, "stroke-dashoffset", _[21]),
          (!h || k & 4194304) && r(f, "stroke-width", _[22]),
          (!h ||
            (k & 256 && u !== (u = "url(#" + _[8] + "-cut-out-pillwhole)"))) &&
            r(f, "clip-path", u),
          (!h || k & 28672) &&
            R(
              f,
              "filter",
              (_[14]
                ? "drop-shadow(0px 0px " + _[14] + "px " + _[12] + ")"
                : "") +
                " " +
                ("contrast(" + _[13] + "%)")
            );
        const b = {};
        k & 2 && (b.icon = _[1]),
          k & 32 && (b.scale = _[5]),
          k & 64 && (b.translateX = _[6]),
          k & 128 && (b.translateY = _[7]),
          k & 4 && (b.style = "color:" + _[2]),
          c.$set(b),
          (!h || k & 28) &&
            R(
              a,
              "filter",
              (_[4] ? "drop-shadow(0px 0px " + _[4] + "px " + _[2] + ")" : "") +
                " " +
                ("contrast(" + _[3] + "%)")
            ),
          (!h || k & 1) && r(e, "height", _[0]),
          (!h || k & 262144) && r(e, "width", _[18]),
          (!h ||
            (k & 229376 &&
              d !==
                (d =
                  `
  ` +
                  (_[15] > 0
                    ? "rotate(" + _[15] + " " + 0 + " " + 0 + ")"
                    : "") +
                  `
  ` +
                  ("translate(" + _[16] + " " + _[17] + ")")))) &&
            r(e, "transform", d);
      },
      i(_) {
        h || (C(c.$$.fragment, _), (h = !0));
      },
      o(_) {
        T(c.$$.fragment, _), (h = !1);
      },
      d(_) {
        _ && E(e), U(c);
      },
    }
  );
}
function js(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { name: h = "" } = e,
    { outlineColor: _ = "red" } = e,
    { outlineContrast: k = 100 } = e,
    { outlineDropShadowAmount: b = 0 } = e,
    { progressColor: w = "red" } = e,
    { progressContrast: g = 100 } = e,
    { progressDropShadowAmount: S = 0 } = e,
    { progressValue: D = 100 } = e,
    { ringSize: Y = 4 } = e,
    { rotateDegree: $ = 0 } = e,
    { translateX: W = 0 } = e,
    { translateY: q = 0 } = e,
    { width: j = 50 } = e,
    { xAxisRound: x = 18 } = e,
    { yAxisRound: V = 18 } = e,
    Q = 10,
    M = i;
  const X = nn(D, { duration: 600, easing: pn });
  return (
    de(n, X, (p) => t(26, (o = p))),
    (n.$$set = (p) => {
      "height" in p && t(0, (i = p.height)),
        "icon" in p && t(1, (l = p.icon)),
        "iconColor" in p && t(2, (s = p.iconColor)),
        "iconContrast" in p && t(3, (f = p.iconContrast)),
        "iconDropShadowAmount" in p && t(4, (u = p.iconDropShadowAmount)),
        "iconScaling" in p && t(5, (a = p.iconScaling)),
        "iconTranslateX" in p && t(6, (c = p.iconTranslateX)),
        "iconTranslateY" in p && t(7, (d = p.iconTranslateY)),
        "name" in p && t(8, (h = p.name)),
        "outlineColor" in p && t(9, (_ = p.outlineColor)),
        "outlineContrast" in p && t(10, (k = p.outlineContrast)),
        "outlineDropShadowAmount" in p &&
          t(11, (b = p.outlineDropShadowAmount)),
        "progressColor" in p && t(12, (w = p.progressColor)),
        "progressContrast" in p && t(13, (g = p.progressContrast)),
        "progressDropShadowAmount" in p &&
          t(14, (S = p.progressDropShadowAmount)),
        "progressValue" in p && t(24, (D = p.progressValue)),
        "ringSize" in p && t(25, (Y = p.ringSize)),
        "rotateDegree" in p && t(15, ($ = p.rotateDegree)),
        "translateX" in p && t(16, (W = p.translateX)),
        "translateY" in p && t(17, (q = p.translateY)),
        "width" in p && t(18, (j = p.width)),
        "xAxisRound" in p && t(19, (x = p.xAxisRound)),
        "yAxisRound" in p && t(20, (V = p.yAxisRound));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16777216 && X.set(D),
        n.$$.dirty & 262145 && t(22, (M = i > j ? i : j)),
        n.$$.dirty & 67108865 && t(21, (Q = i - (o / 100) * i));
    }),
    [
      i,
      l,
      s,
      f,
      u,
      a,
      c,
      d,
      h,
      _,
      k,
      b,
      w,
      g,
      S,
      $,
      W,
      q,
      j,
      x,
      V,
      Q,
      M,
      X,
      D,
      Y,
      o,
    ]
  );
}
class Gs extends ue {
  constructor(e) {
    super();
    fe(this, e, js, Ns, ce, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      name: 8,
      outlineColor: 9,
      outlineContrast: 10,
      outlineDropShadowAmount: 11,
      progressColor: 12,
      progressContrast: 13,
      progressDropShadowAmount: 14,
      progressValue: 24,
      ringSize: 25,
      rotateDegree: 15,
      translateX: 16,
      translateY: 17,
      width: 18,
      xAxisRound: 19,
      yAxisRound: 20,
    });
  }
}
function yi(n) {
  let e, t, o;
  return (
    (t = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = O("g")),
          P(t.$$.fragment),
          R(
            e,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          );
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p(i, l) {
        const s = {};
        l & 2 && (s.icon = i[1]),
          l & 32 && (s.scale = i[5]),
          l & 64 && (s.translateX = i[6]),
          l & 128 && (s.translateY = i[7]),
          l & 4 && (s.style = "color:" + i[2]),
          t.$set(s),
          (!o || l & 28) &&
            R(
              e,
              "filter",
              (i[4] ? "drop-shadow(0px 0px " + i[4] + "px " + i[2] + ")" : "") +
                " " +
                ("contrast(" + i[3] + "%)")
            );
      },
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function Mi(n) {
  let e, t, o, i, l, s, f;
  return (
    (o = new Fe({
      props: {
        icon: n[1],
        scale: n[5] * 2,
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          P(o.$$.fragment),
          (i = y()),
          (l = A("span")),
          (s = be(n[18])),
          r(l, "class", "ml-2"),
          r(
            t,
            "class",
            "flex justify-center items-center h-full text-xl text-white"
          ),
          r(e, "class", "absolute top-0 left-0 w-full h-full");
      },
      m(u, a) {
        H(u, e, a), m(e, t), B(o, t, null), m(t, i), m(t, l), m(l, s), (f = !0);
      },
      p(u, a) {
        const c = {};
        a & 2 && (c.icon = u[1]),
          a & 32 && (c.scale = u[5] * 2),
          a & 64 && (c.translateX = u[6]),
          a & 128 && (c.translateY = u[7]),
          a & 4 && (c.style = "color:" + u[2]),
          o.$set(c),
          (!f || a & 262144) && un(s, u[18]);
      },
      i(u) {
        f || (C(o.$$.fragment, u), (f = !0));
      },
      o(u) {
        T(o.$$.fragment, u), (f = !1);
      },
      d(u) {
        u && E(e), U(o);
      },
    }
  );
}
function Ws(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _ = !n[18] && yi(n),
    k = n[18] && Mi(n);
  return {
    c() {
      (e = A("div")),
        (t = O("svg")),
        (o = O("g")),
        (i = O("line")),
        (l = O("line")),
        (f = O("g")),
        _ && _.c(),
        (u = O("span")),
        (a = be(n[18])),
        (d = y()),
        k && k.c(),
        r(i, "stroke", n[8]),
        r(i, "x1", "0%"),
        r(i, "y1", "50%"),
        r(i, "x2", "100%"),
        r(i, "y2", "50%"),
        r(i, "stroke-width", n[17]),
        R(
          i,
          "filter",
          (n[10] ? "drop-shadow(0px 0px " + n[10] + "px " + n[8] + ")" : "") +
            " " +
            ("contrast(" + n[9] + "%)")
        ),
        r(l, "x1", "0%"),
        r(l, "y1", "50%"),
        r(l, "x2", "100%"),
        r(l, "y2", "50%"),
        r(l, "stroke", n[11]),
        r(l, "fill", "transparent"),
        r(l, "stroke-dasharray", n[17]),
        r(l, "stroke-dashoffset", n[19]),
        r(l, "stroke-width", n[17]),
        R(
          l,
          "filter",
          (n[13] ? "drop-shadow(0px 0px " + n[13] + "px " + n[11] + ")" : "") +
            " " +
            ("contrast(" + n[12] + "%)")
        ),
        r(
          o,
          "transform",
          (s =
            `
      rotate( ` +
            n[14] +
            " " +
            n[0] / 2 +
            " " +
            n[17] / 4 +
            `)
      ` +
            ("translate(" + n[15] + " " + n[16] + ")"))
        ),
        r(f, "dominant-baseline", "middle"),
        r(t, "height", (c = n[0] - 8)),
        r(t, "width", n[17]),
        r(e, "class", "border-4 border-black relative");
    },
    m(b, w) {
      H(b, e, w),
        m(e, t),
        m(t, o),
        m(o, i),
        m(o, l),
        m(t, f),
        _ && _.m(f, null),
        m(f, u),
        m(u, a),
        m(e, d),
        k && k.m(e, null),
        (h = !0);
    },
    p(b, [w]) {
      (!h || w & 256) && r(i, "stroke", b[8]),
        (!h || w & 131072) && r(i, "stroke-width", b[17]),
        (!h || w & 1792) &&
          R(
            i,
            "filter",
            (b[10] ? "drop-shadow(0px 0px " + b[10] + "px " + b[8] + ")" : "") +
              " " +
              ("contrast(" + b[9] + "%)")
          ),
        (!h || w & 2048) && r(l, "stroke", b[11]),
        (!h || w & 131072) && r(l, "stroke-dasharray", b[17]),
        (!h || w & 524288) && r(l, "stroke-dashoffset", b[19]),
        (!h || w & 131072) && r(l, "stroke-width", b[17]),
        (!h || w & 14336) &&
          R(
            l,
            "filter",
            (b[13]
              ? "drop-shadow(0px 0px " + b[13] + "px " + b[11] + ")"
              : "") +
              " " +
              ("contrast(" + b[12] + "%)")
          ),
        (!h ||
          (w & 245761 &&
            s !==
              (s =
                `
      rotate( ` +
                b[14] +
                " " +
                b[0] / 2 +
                " " +
                b[17] / 4 +
                `)
      ` +
                ("translate(" + b[15] + " " + b[16] + ")")))) &&
          r(o, "transform", s),
        b[18]
          ? _ &&
            (he(),
            T(_, 1, 1, () => {
              _ = null;
            }),
            ge())
          : _
          ? (_.p(b, w), w & 262144 && C(_, 1))
          : ((_ = yi(b)), _.c(), C(_, 1), _.m(f, u)),
        (!h || w & 262144) && un(a, b[18]),
        (!h || (w & 1 && c !== (c = b[0] - 8))) && r(t, "height", c),
        (!h || w & 131072) && r(t, "width", b[17]),
        b[18]
          ? k
            ? (k.p(b, w), w & 262144 && C(k, 1))
            : ((k = Mi(b)), k.c(), C(k, 1), k.m(e, null))
          : k &&
            (he(),
            T(k, 1, 1, () => {
              k = null;
            }),
            ge());
    },
    i(b) {
      h || (C(_), C(k), (h = !0));
    },
    o(b) {
      T(_), T(k), (h = !1);
    },
    d(b) {
      b && E(e), _ && _.d(), k && k.d();
    },
  };
}
function Js(n, e, t) {
  let o,
    { conditionalText: i = null } = e,
    { height: l = 50 } = e,
    { icon: s = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: u = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconScaling: c = 0.45 } = e,
    { iconTranslateX: d = 0 } = e,
    { iconTranslateY: h = 0 } = e,
    { name: _ = "" } = e,
    { outlineColor: k = "red" } = e,
    { outlineContrast: b = 100 } = e,
    { outlineDropShadowAmount: w = 0 } = e,
    { progressColor: g = "red" } = e,
    { progressContrast: S = 100 } = e,
    { progressDropShadowAmount: D = 0 } = e,
    { progressValue: Y = 100 } = e,
    { rotateDegree: $ = 0 } = e,
    { translateX: W = 0 } = e,
    { translateY: q = 0 } = e,
    { width: j = 50 } = e,
    x = 10,
    V = "";
  const Q = nn(Y, { duration: 600, easing: pn });
  return (
    de(n, Q, (M) => t(24, (o = M))),
    (n.$$set = (M) => {
      "conditionalText" in M && t(21, (i = M.conditionalText)),
        "height" in M && t(0, (l = M.height)),
        "icon" in M && t(1, (s = M.icon)),
        "iconColor" in M && t(2, (f = M.iconColor)),
        "iconContrast" in M && t(3, (u = M.iconContrast)),
        "iconDropShadowAmount" in M && t(4, (a = M.iconDropShadowAmount)),
        "iconScaling" in M && t(5, (c = M.iconScaling)),
        "iconTranslateX" in M && t(6, (d = M.iconTranslateX)),
        "iconTranslateY" in M && t(7, (h = M.iconTranslateY)),
        "name" in M && t(22, (_ = M.name)),
        "outlineColor" in M && t(8, (k = M.outlineColor)),
        "outlineContrast" in M && t(9, (b = M.outlineContrast)),
        "outlineDropShadowAmount" in M &&
          t(10, (w = M.outlineDropShadowAmount)),
        "progressColor" in M && t(11, (g = M.progressColor)),
        "progressContrast" in M && t(12, (S = M.progressContrast)),
        "progressDropShadowAmount" in M &&
          t(13, (D = M.progressDropShadowAmount)),
        "progressValue" in M && t(23, (Y = M.progressValue)),
        "rotateDegree" in M && t(14, ($ = M.rotateDegree)),
        "translateX" in M && t(15, (W = M.translateX)),
        "translateY" in M && t(16, (q = M.translateY)),
        "width" in M && t(17, (j = M.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 8388608 && Q.set(Y),
        n.$$.dirty & 16908288 && t(19, (x = j - (o / 100) * j)),
        n.$$.dirty & 10747904 &&
          (t(18, V), t(21, i), t(23, Y), i && t(18, (V = i(Y))));
    }),
    [l, s, f, u, a, c, d, h, k, b, w, g, S, D, $, W, q, j, V, x, Q, i, _, Y, o]
  );
}
class Zs extends ue {
  constructor(e) {
    super();
    fe(this, e, Js, Ws, ce, {
      conditionalText: 21,
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      name: 22,
      outlineColor: 8,
      outlineContrast: 9,
      outlineDropShadowAmount: 10,
      progressColor: 11,
      progressContrast: 12,
      progressDropShadowAmount: 13,
      progressValue: 23,
      rotateDegree: 14,
      translateX: 15,
      translateY: 16,
      width: 17,
    });
  }
}
function Yi(n) {
  let e, t, o;
  return {
    c() {
      (e = O("rect")),
        r(e, "stroke", n[10]),
        r(e, "width", n[20]),
        r(e, "height", n[1]),
        r(e, "stroke-width", n[16]),
        r(e, "stroke-dasharray", (t = n[21] + " " + n[21])),
        r(e, "shape-rendering", "geometricPrecision"),
        r(e, "stroke-dashoffset", (o = 0)),
        r(e, "fill", "transparent");
    },
    m(i, l) {
      H(i, e, l);
    },
    p(i, l) {
      l & 1024 && r(e, "stroke", i[10]),
        l & 1048576 && r(e, "width", i[20]),
        l & 2 && r(e, "height", i[1]),
        l & 65536 && r(e, "stroke-width", i[16]),
        l & 2097152 &&
          t !== (t = i[21] + " " + i[21]) &&
          r(e, "stroke-dasharray", t);
    },
    d(i) {
      i && E(e);
    },
  };
}
function Ks(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b = n[0] && Yi(n);
  return (
    (h = new Fe({
      props: {
        icon: n[2],
        scale: n[6],
        translateX: n[7],
        translateY: n[8],
        style: "color:" + n[3],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          b && b.c(),
          (o = O("rect")),
          (u = O("rect")),
          (d = O("g")),
          P(h.$$.fragment),
          r(o, "fill", n[9]),
          r(
            o,
            "transform",
            (i =
              "translate(" + (n[16] / 2 - 0.1) + " " + (n[16] / 2 - 0.3) + ")")
          ),
          r(o, "stroke", "transparent"),
          r(o, "shape-rendering", "geometricPrecision"),
          r(o, "width", (l = n[20] - n[16] + 0.2)),
          r(o, "height", (s = n[1] - n[16] + 0.2)),
          r(o, "stroke-width", n[16]),
          r(o, "stroke-dasharray", (f = n[21] + " " + n[21])),
          r(o, "stroke-dashoffset", 0),
          R(
            o,
            "filter",
            (n[12]
              ? "drop-shadow(0px 0px " + n[12] + "px " + n[10] + ")"
              : "") +
              " " +
              ("contrast(" + n[11] + "%)")
          ),
          r(u, "stroke", n[13]),
          r(u, "fill", "transparent"),
          r(u, "width", n[20]),
          r(u, "height", n[1]),
          r(u, "stroke-width", (a = n[16] - 0.1)),
          r(u, "stroke-dasharray", (c = n[21] + " " + n[21])),
          r(u, "stroke-dashoffset", n[22]),
          R(
            u,
            "filter",
            (n[15]
              ? "drop-shadow(0px 0px " + n[15] + "px " + n[13] + ")"
              : "") +
              " " +
              ("contrast(" + n[14] + "%)")
          ),
          R(
            d,
            "filter",
            (n[5] ? "drop-shadow(0px 0px " + n[5] + "px " + n[3] + ")" : "") +
              " " +
              ("contrast(" + n[4] + "%)")
          ),
          r(e, "width", n[20]),
          r(e, "height", n[1]),
          r(
            e,
            "transform",
            (_ =
              `
    ` +
              (n[17] > 0 ? "rotate(" + n[17] + " " + 0 + " " + 0 + ")" : "") +
              `
    ` +
              ("translate(" + n[18] + " " + n[19] + ")"))
          );
      },
      m(w, g) {
        H(w, e, g),
          m(e, t),
          b && b.m(t, null),
          m(t, o),
          m(t, u),
          m(e, d),
          B(h, d, null),
          (k = !0);
      },
      p(w, [g]) {
        w[0]
          ? b
            ? b.p(w, g)
            : ((b = Yi(w)), b.c(), b.m(t, o))
          : b && (b.d(1), (b = null)),
          (!k || g & 512) && r(o, "fill", w[9]),
          (!k ||
            (g & 65536 &&
              i !==
                (i =
                  "translate(" +
                  (w[16] / 2 - 0.1) +
                  " " +
                  (w[16] / 2 - 0.3) +
                  ")"))) &&
            r(o, "transform", i),
          (!k || (g & 1114112 && l !== (l = w[20] - w[16] + 0.2))) &&
            r(o, "width", l),
          (!k || (g & 65538 && s !== (s = w[1] - w[16] + 0.2))) &&
            r(o, "height", s),
          (!k || g & 65536) && r(o, "stroke-width", w[16]),
          (!k || (g & 2097152 && f !== (f = w[21] + " " + w[21]))) &&
            r(o, "stroke-dasharray", f),
          (!k || g & 7168) &&
            R(
              o,
              "filter",
              (w[12]
                ? "drop-shadow(0px 0px " + w[12] + "px " + w[10] + ")"
                : "") +
                " " +
                ("contrast(" + w[11] + "%)")
            ),
          (!k || g & 8192) && r(u, "stroke", w[13]),
          (!k || g & 1048576) && r(u, "width", w[20]),
          (!k || g & 2) && r(u, "height", w[1]),
          (!k || (g & 65536 && a !== (a = w[16] - 0.1))) &&
            r(u, "stroke-width", a),
          (!k || (g & 2097152 && c !== (c = w[21] + " " + w[21]))) &&
            r(u, "stroke-dasharray", c),
          (!k || g & 4194304) && r(u, "stroke-dashoffset", w[22]),
          (!k || g & 57344) &&
            R(
              u,
              "filter",
              (w[15]
                ? "drop-shadow(0px 0px " + w[15] + "px " + w[13] + ")"
                : "") +
                " " +
                ("contrast(" + w[14] + "%)")
            );
        const S = {};
        g & 4 && (S.icon = w[2]),
          g & 64 && (S.scale = w[6]),
          g & 128 && (S.translateX = w[7]),
          g & 256 && (S.translateY = w[8]),
          g & 8 && (S.style = "color:" + w[3]),
          h.$set(S),
          (!k || g & 56) &&
            R(
              d,
              "filter",
              (w[5] ? "drop-shadow(0px 0px " + w[5] + "px " + w[3] + ")" : "") +
                " " +
                ("contrast(" + w[4] + "%)")
            ),
          (!k || g & 1048576) && r(e, "width", w[20]),
          (!k || g & 2) && r(e, "height", w[1]),
          (!k ||
            (g & 917504 &&
              _ !==
                (_ =
                  `
    ` +
                  (w[17] > 0
                    ? "rotate(" + w[17] + " " + 0 + " " + 0 + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + w[18] + " " + w[19] + ")")))) &&
            r(e, "transform", _);
      },
      i(w) {
        k || (C(h.$$.fragment, w), (k = !0));
      },
      o(w) {
        T(h.$$.fragment, w), (k = !1);
      },
      d(w) {
        w && E(e), b && b.d(), U(h);
      },
    }
  );
}
function Qs(n, e, t) {
  let o,
    { displayOutline: i = !0 } = e,
    { height: l = 50 } = e,
    { icon: s = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: u = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: d = 0.45 } = e,
    { iconTranslateX: h = 0 } = e,
    { iconTranslateY: _ = 0 } = e,
    { innerColor: k = "#212121" } = e,
    { name: b = "" } = e,
    { outlineColor: w = "red" } = e,
    { outlineContrast: g = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: D = "red" } = e,
    { progressContrast: Y = 100 } = e,
    { progressDropShadowAmount: $ = 0 } = e,
    { progressValue: W = 100 } = e,
    { ringSize: q = 4 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: x = 0 } = e,
    { translateY: V = 0 } = e,
    { width: Q = 50 } = e,
    M = (Q + l) * 2,
    X = 10;
  const p = nn(W, { duration: 600, easing: pn });
  return (
    de(n, p, (z) => t(27, (o = z))),
    (n.$$set = (z) => {
      "displayOutline" in z && t(0, (i = z.displayOutline)),
        "height" in z && t(1, (l = z.height)),
        "icon" in z && t(2, (s = z.icon)),
        "iconColor" in z && t(3, (f = z.iconColor)),
        "iconContrast" in z && t(4, (u = z.iconContrast)),
        "iconDropShadowAmount" in z && t(5, (a = z.iconDropShadowAmount)),
        "iconRotateDegree" in z && t(24, (c = z.iconRotateDegree)),
        "iconScaling" in z && t(6, (d = z.iconScaling)),
        "iconTranslateX" in z && t(7, (h = z.iconTranslateX)),
        "iconTranslateY" in z && t(8, (_ = z.iconTranslateY)),
        "innerColor" in z && t(9, (k = z.innerColor)),
        "name" in z && t(25, (b = z.name)),
        "outlineColor" in z && t(10, (w = z.outlineColor)),
        "outlineContrast" in z && t(11, (g = z.outlineContrast)),
        "outlineDropShadowAmount" in z &&
          t(12, (S = z.outlineDropShadowAmount)),
        "progressColor" in z && t(13, (D = z.progressColor)),
        "progressContrast" in z && t(14, (Y = z.progressContrast)),
        "progressDropShadowAmount" in z &&
          t(15, ($ = z.progressDropShadowAmount)),
        "progressValue" in z && t(26, (W = z.progressValue)),
        "ringSize" in z && t(16, (q = z.ringSize)),
        "rotateDegree" in z && t(17, (j = z.rotateDegree)),
        "translateX" in z && t(18, (x = z.translateX)),
        "translateY" in z && t(19, (V = z.translateY)),
        "width" in z && t(20, (Q = z.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 1048578 && t(21, (M = (Q + l) * 2)),
        n.$$.dirty & 67108864 && p.set(W),
        n.$$.dirty & 136314880 && t(22, (X = M - (o / 100) * M));
    }),
    [
      i,
      l,
      s,
      f,
      u,
      a,
      d,
      h,
      _,
      k,
      w,
      g,
      S,
      D,
      Y,
      $,
      q,
      j,
      x,
      V,
      Q,
      M,
      X,
      p,
      c,
      b,
      W,
      o,
    ]
  );
}
class xs extends ue {
  constructor(e) {
    super();
    fe(this, e, Qs, Ks, ce, {
      displayOutline: 0,
      height: 1,
      icon: 2,
      iconColor: 3,
      iconContrast: 4,
      iconDropShadowAmount: 5,
      iconRotateDegree: 24,
      iconScaling: 6,
      iconTranslateX: 7,
      iconTranslateY: 8,
      innerColor: 9,
      name: 25,
      outlineColor: 10,
      outlineContrast: 11,
      outlineDropShadowAmount: 12,
      progressColor: 13,
      progressContrast: 14,
      progressDropShadowAmount: 15,
      progressValue: 26,
      ringSize: 16,
      rotateDegree: 17,
      translateX: 18,
      translateY: 19,
      width: 20,
    });
  }
}
function Xi(n) {
  let e, t, o, i, l;
  return {
    c() {
      (e = O("path")),
        r(
          e,
          "d",
          `M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596
        s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055
        l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191
        c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02
        l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z`
        ),
        r(e, "stroke", n[11]),
        r(e, "fill", n[9]),
        r(e, "stroke-width", (t = n[17] - 0.6)),
        r(e, "stroke-dasharray", (o = n[22] + " " + n[22])),
        r(e, "stroke-dashoffset", (i = 0)),
        r(e, "transform", (l = "rotate(-72, " + 20 + ", " + 20 + ")")),
        R(
          e,
          "filter",
          (n[13] ? "drop-shadow(0px 0px " + n[13] + "px " + n[11] + ")" : "") +
            " " +
            ("contrast(" + n[12] + "%)")
        );
    },
    m(s, f) {
      H(s, e, f);
    },
    p(s, f) {
      f & 2048 && r(e, "stroke", s[11]),
        f & 512 && r(e, "fill", s[9]),
        f & 131072 && t !== (t = s[17] - 0.6) && r(e, "stroke-width", t),
        f & 4194304 &&
          o !== (o = s[22] + " " + s[22]) &&
          r(e, "stroke-dasharray", o),
        f & 14336 &&
          R(
            e,
            "filter",
            (s[13]
              ? "drop-shadow(0px 0px " + s[13] + "px " + s[11] + ")"
              : "") +
              " " +
              ("contrast(" + s[12] + "%)")
          );
    },
    d(s) {
      s && E(e);
    },
  };
}
function $s(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b = n[0] && Xi(n);
  return (
    (_ = new Fe({
      props: {
        icon: n[2],
        scale: n[6],
        translateX: n[7],
        translateY: n[8],
        flip: "horizontal",
        style: "color:" + n[3],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          (o = O("clipPath")),
          (i = O("path")),
          (f = O("rect")),
          b && b.c(),
          (a = O("path")),
          (h = O("g")),
          P(_.$$.fragment),
          r(
            i,
            "d",
            `M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596
        s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055
        l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191
        c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02
        l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z`
          ),
          r(i, "stroke", n[11]),
          r(i, "fill", n[9]),
          r(i, "stroke-width", (l = n[17] + 10)),
          r(i, "transform", "rotate(-72, " + 20 + ", " + 20 + ")"),
          r(i, "height", n[1]),
          r(i, "width", n[21]),
          r(o, "id", (s = n[10] + "-cut-out-star")),
          r(f, "stroke", n[14]),
          r(f, "stroke-width", n[17]),
          r(f, "width", n[21]),
          r(f, "height", n[1]),
          r(f, "clip-path", (u = "url(#" + n[10] + "-cut-out-star)")),
          r(
            a,
            "d",
            `M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596
      s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055
      l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191
      c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02
      l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z`
          ),
          r(a, "class", "stroke-cap-round"),
          r(a, "stroke", n[14]),
          r(a, "stroke-width", n[17]),
          r(a, "fill", "transparent"),
          r(a, "stroke-dasharray", (c = n[22] + " " + n[22])),
          r(a, "stroke-dashoffset", n[24]),
          r(a, "transform", "rotate(-72, " + 20 + ", " + 20 + ")"),
          R(
            a,
            "filter",
            (n[16]
              ? "drop-shadow(0px 0px " + n[16] + "px " + n[14] + ")"
              : "") +
              " " +
              ("contrast(" + n[15] + "%)")
          ),
          r(
            t,
            "transform",
            (d =
              `
    ` +
              (n[18] > 0
                ? "rotate(" + n[18] + " " + 19.35 + " " + 22 + ")"
                : "") +
              `
    ` +
              ("translate(" + n[19] + " " + n[20] + ")"))
          ),
          R(
            h,
            "filter",
            (n[5] ? "drop-shadow(0px 0px " + n[5] + "px " + n[3] + ")" : "") +
              " " +
              ("contrast(" + n[4] + "%)")
          ),
          r(e, "width", n[21]),
          r(e, "height", n[1]),
          r(e, "viewBox", "0 0 38 40"),
          r(e, "transform", "scale(-1,1)"),
          r(e, "overflow", "visible");
      },
      m(w, g) {
        H(w, e, g),
          m(e, t),
          m(t, o),
          m(o, i),
          m(t, f),
          b && b.m(t, null),
          m(t, a),
          n[29](a),
          m(e, h),
          B(_, h, null),
          (k = !0);
      },
      p(w, [g]) {
        (!k || g & 2048) && r(i, "stroke", w[11]),
          (!k || g & 512) && r(i, "fill", w[9]),
          (!k || (g & 131072 && l !== (l = w[17] + 10))) &&
            r(i, "stroke-width", l),
          (!k || g & 2) && r(i, "height", w[1]),
          (!k || g & 2097152) && r(i, "width", w[21]),
          (!k || (g & 1024 && s !== (s = w[10] + "-cut-out-star"))) &&
            r(o, "id", s),
          (!k || g & 16384) && r(f, "stroke", w[14]),
          (!k || g & 131072) && r(f, "stroke-width", w[17]),
          (!k || g & 2097152) && r(f, "width", w[21]),
          (!k || g & 2) && r(f, "height", w[1]),
          (!k ||
            (g & 1024 && u !== (u = "url(#" + w[10] + "-cut-out-star)"))) &&
            r(f, "clip-path", u),
          w[0]
            ? b
              ? b.p(w, g)
              : ((b = Xi(w)), b.c(), b.m(t, a))
            : b && (b.d(1), (b = null)),
          (!k || g & 16384) && r(a, "stroke", w[14]),
          (!k || g & 131072) && r(a, "stroke-width", w[17]),
          (!k || (g & 4194304 && c !== (c = w[22] + " " + w[22]))) &&
            r(a, "stroke-dasharray", c),
          (!k || g & 16777216) && r(a, "stroke-dashoffset", w[24]),
          (!k || g & 114688) &&
            R(
              a,
              "filter",
              (w[16]
                ? "drop-shadow(0px 0px " + w[16] + "px " + w[14] + ")"
                : "") +
                " " +
                ("contrast(" + w[15] + "%)")
            ),
          (!k ||
            (g & 1835008 &&
              d !==
                (d =
                  `
    ` +
                  (w[18] > 0
                    ? "rotate(" + w[18] + " " + 19.35 + " " + 22 + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + w[19] + " " + w[20] + ")")))) &&
            r(t, "transform", d);
        const S = {};
        g & 4 && (S.icon = w[2]),
          g & 64 && (S.scale = w[6]),
          g & 128 && (S.translateX = w[7]),
          g & 256 && (S.translateY = w[8]),
          g & 8 && (S.style = "color:" + w[3]),
          _.$set(S),
          (!k || g & 56) &&
            R(
              h,
              "filter",
              (w[5] ? "drop-shadow(0px 0px " + w[5] + "px " + w[3] + ")" : "") +
                " " +
                ("contrast(" + w[4] + "%)")
            ),
          (!k || g & 2097152) && r(e, "width", w[21]),
          (!k || g & 2) && r(e, "height", w[1]);
      },
      i(w) {
        k || (C(_.$$.fragment, w), (k = !0));
      },
      o(w) {
        T(_.$$.fragment, w), (k = !1);
      },
      d(w) {
        w && E(e), b && b.d(), n[29](null), U(_);
      },
    }
  );
}
function ea(n, e, t) {
  let o,
    i,
    { displayOutline: l = !0 } = e,
    { height: s = 50 } = e,
    { icon: f = null } = e,
    { iconColor: u = "red" } = e,
    { iconContrast: a = 100 } = e,
    { iconDropShadowAmount: c = 0 } = e,
    { iconRotateDegree: d = 0 } = e,
    { iconScaling: h = 0.45 } = e,
    { iconTranslateX: _ = 0 } = e,
    { iconTranslateY: k = 0 } = e,
    { innerColor: b = "#212121" } = e,
    { name: w = "" } = e,
    { outlineColor: g = "red" } = e,
    { outlineContrast: S = 100 } = e,
    { outlineDropShadowAmount: D = 0 } = e,
    { progressColor: Y = "red" } = e,
    { progressContrast: $ = 100 } = e,
    { progressDropShadowAmount: W = 0 } = e,
    { progressValue: q = 100 } = e,
    { ringSize: j = 4 } = e,
    { rotateDegree: x = 0 } = e,
    { translateX: V = 0 } = e,
    { translateY: Q = 0 } = e,
    { width: M = 50 } = e;
  const X = nn(q, { duration: 600, easing: pn });
  de(n, X, (v) => t(28, (i = v)));
  let p, z;
  Pt(() => {
    try {
      t(22, (z = p.getTotalLength()));
    } catch {}
  });
  function J(v) {
    te[v ? "unshift" : "push"](() => {
      (p = v), t(23, p);
    });
  }
  return (
    (n.$$set = (v) => {
      "displayOutline" in v && t(0, (l = v.displayOutline)),
        "height" in v && t(1, (s = v.height)),
        "icon" in v && t(2, (f = v.icon)),
        "iconColor" in v && t(3, (u = v.iconColor)),
        "iconContrast" in v && t(4, (a = v.iconContrast)),
        "iconDropShadowAmount" in v && t(5, (c = v.iconDropShadowAmount)),
        "iconRotateDegree" in v && t(26, (d = v.iconRotateDegree)),
        "iconScaling" in v && t(6, (h = v.iconScaling)),
        "iconTranslateX" in v && t(7, (_ = v.iconTranslateX)),
        "iconTranslateY" in v && t(8, (k = v.iconTranslateY)),
        "innerColor" in v && t(9, (b = v.innerColor)),
        "name" in v && t(10, (w = v.name)),
        "outlineColor" in v && t(11, (g = v.outlineColor)),
        "outlineContrast" in v && t(12, (S = v.outlineContrast)),
        "outlineDropShadowAmount" in v &&
          t(13, (D = v.outlineDropShadowAmount)),
        "progressColor" in v && t(14, (Y = v.progressColor)),
        "progressContrast" in v && t(15, ($ = v.progressContrast)),
        "progressDropShadowAmount" in v &&
          t(16, (W = v.progressDropShadowAmount)),
        "progressValue" in v && t(27, (q = v.progressValue)),
        "ringSize" in v && t(17, (j = v.ringSize)),
        "rotateDegree" in v && t(18, (x = v.rotateDegree)),
        "translateX" in v && t(19, (V = v.translateX)),
        "translateY" in v && t(20, (Q = v.translateY)),
        "width" in v && t(21, (M = v.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 134217728 && X.set(q),
        n.$$.dirty & 272629760 && t(24, (o = z - (i / 100) * z));
    }),
    [
      l,
      s,
      f,
      u,
      a,
      c,
      h,
      _,
      k,
      b,
      w,
      g,
      S,
      D,
      Y,
      $,
      W,
      j,
      x,
      V,
      Q,
      M,
      z,
      p,
      o,
      X,
      d,
      q,
      i,
      J,
    ]
  );
}
class na extends ue {
  constructor(e) {
    super();
    fe(this, e, ea, $s, ce, {
      displayOutline: 0,
      height: 1,
      icon: 2,
      iconColor: 3,
      iconContrast: 4,
      iconDropShadowAmount: 5,
      iconRotateDegree: 26,
      iconScaling: 6,
      iconTranslateX: 7,
      iconTranslateY: 8,
      innerColor: 9,
      name: 10,
      outlineColor: 11,
      outlineContrast: 12,
      outlineDropShadowAmount: 13,
      progressColor: 14,
      progressContrast: 15,
      progressDropShadowAmount: 16,
      progressValue: 27,
      ringSize: 17,
      rotateDegree: 18,
      translateX: 19,
      translateY: 20,
      width: 21,
    });
  }
}
function ta(n) {
  let e, t, o, i, l, s, f, u, a;
  return (
    (f = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        flip: "horizontal",
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("path")),
          (i = O("path")),
          (s = O("g")),
          P(f.$$.fragment),
          r(
            t,
            "d",
            "M21.87,19.29l-9-15.58a1,1,0,0,0-1.74,0l-9,15.58a1,1,0,0,0,0,1,1,1,0,0,0,.87.5H21a1,1,0,0,0,.87-.9"
          ),
          r(t, "class", "stroke-cap-round stroke-join-round"),
          r(t, "stroke", n[9]),
          r(t, "fill", n[8]),
          r(t, "stroke-width", n[15]),
          r(t, "stroke-dasharray", (o = n[20] + " " + n[20])),
          r(t, "stroke-dashoffset", 0),
          R(
            t,
            "filter",
            (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
              " " +
              ("contrast(" + n[10] + "%)")
          ),
          r(
            i,
            "d",
            "M21.87,19.29l-9-15.58a1,1,0,0,0-1.74,0l-9,15.58a1,1,0,0,0,0,1,1,1,0,0,0,.87.5H21a1,1,0,0,0,.87-.9"
          ),
          r(i, "class", "stroke-cap-round"),
          r(i, "stroke", n[12]),
          r(i, "fill", "transparent"),
          r(i, "stroke-width", n[15]),
          r(i, "stroke-dasharray", (l = n[20] + " " + n[20])),
          r(i, "stroke-dashoffset", n[22]),
          r(i, "transform", "rotate(-120, " + 12 + ", " + 14.5 + ")"),
          R(
            i,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          R(
            s,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(e, "width", n[19]),
          r(e, "height", n[0]),
          r(e, "viewBox", "0 0 24 24"),
          r(
            e,
            "transform",
            (u =
              `
    scale(-1,1)
    ` +
              (n[16] > 0
                ? "rotate(" + n[16] + " " + 12 + " " + 14.5 + ")"
                : "") +
              `
    ` +
              ("translate(" + n[17] + " " + n[18] + ")"))
          ),
          r(e, "overflow", "visible");
      },
      m(c, d) {
        H(c, e, d),
          m(e, t),
          m(e, i),
          n[28](i),
          m(e, s),
          B(f, s, null),
          (a = !0);
      },
      p(c, [d]) {
        (!a || d & 512) && r(t, "stroke", c[9]),
          (!a || d & 256) && r(t, "fill", c[8]),
          (!a || d & 32768) && r(t, "stroke-width", c[15]),
          (!a || (d & 1048576 && o !== (o = c[20] + " " + c[20]))) &&
            r(t, "stroke-dasharray", o),
          (!a || d & 3584) &&
            R(
              t,
              "filter",
              (c[11]
                ? "drop-shadow(0px 0px " + c[11] + "px " + c[9] + ")"
                : "") +
                " " +
                ("contrast(" + c[10] + "%)")
            ),
          (!a || d & 4096) && r(i, "stroke", c[12]),
          (!a || d & 32768) && r(i, "stroke-width", c[15]),
          (!a || (d & 1048576 && l !== (l = c[20] + " " + c[20]))) &&
            r(i, "stroke-dasharray", l),
          (!a || d & 4194304) && r(i, "stroke-dashoffset", c[22]),
          (!a || d & 28672) &&
            R(
              i,
              "filter",
              (c[14]
                ? "drop-shadow(0px 0px " + c[14] + "px " + c[12] + ")"
                : "") +
                " " +
                ("contrast(" + c[13] + "%)")
            );
        const h = {};
        d & 2 && (h.icon = c[1]),
          d & 32 && (h.scale = c[5]),
          d & 64 && (h.translateX = c[6]),
          d & 128 && (h.translateY = c[7]),
          d & 4 && (h.style = "color:" + c[2]),
          f.$set(h),
          (!a || d & 28) &&
            R(
              s,
              "filter",
              (c[4] ? "drop-shadow(0px 0px " + c[4] + "px " + c[2] + ")" : "") +
                " " +
                ("contrast(" + c[3] + "%)")
            ),
          (!a || d & 524288) && r(e, "width", c[19]),
          (!a || d & 1) && r(e, "height", c[0]),
          (!a ||
            (d & 458752 &&
              u !==
                (u =
                  `
    scale(-1,1)
    ` +
                  (c[16] > 0
                    ? "rotate(" + c[16] + " " + 12 + " " + 14.5 + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + c[17] + " " + c[18] + ")")))) &&
            r(e, "transform", u);
      },
      i(c) {
        a || (C(f.$$.fragment, c), (a = !0));
      },
      o(c) {
        T(f.$$.fragment, c), (a = !1);
      },
      d(c) {
        c && E(e), n[28](null), U(f);
      },
    }
  );
}
function oa(n, e, t) {
  let o,
    i,
    { height: l = 50 } = e,
    { icon: s = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: u = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: d = 0.45 } = e,
    { iconTranslateX: h = 0 } = e,
    { iconTranslateY: _ = 0 } = e,
    { innerColor: k = "#212121" } = e,
    { name: b = "" } = e,
    { outlineColor: w = "red" } = e,
    { outlineContrast: g = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: D = "red" } = e,
    { progressContrast: Y = 100 } = e,
    { progressDropShadowAmount: $ = 0 } = e,
    { progressValue: W = 100 } = e,
    { ringSize: q = 4 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: x = 0 } = e,
    { translateY: V = 0 } = e,
    { width: Q = 50 } = e;
  const M = nn(W, { duration: 600, easing: pn });
  de(n, M, (J) => t(27, (i = J)));
  let X, p;
  Pt(() => {
    try {
      t(20, (p = X.getTotalLength()));
    } catch {
      console.log(
        "Error: PS-Hud: Triangle-Ring-Icon should not be mounting when hiding icons"
      );
    }
  });
  function z(J) {
    te[J ? "unshift" : "push"](() => {
      (X = J), t(21, X);
    });
  }
  return (
    (n.$$set = (J) => {
      "height" in J && t(0, (l = J.height)),
        "icon" in J && t(1, (s = J.icon)),
        "iconColor" in J && t(2, (f = J.iconColor)),
        "iconContrast" in J && t(3, (u = J.iconContrast)),
        "iconDropShadowAmount" in J && t(4, (a = J.iconDropShadowAmount)),
        "iconRotateDegree" in J && t(24, (c = J.iconRotateDegree)),
        "iconScaling" in J && t(5, (d = J.iconScaling)),
        "iconTranslateX" in J && t(6, (h = J.iconTranslateX)),
        "iconTranslateY" in J && t(7, (_ = J.iconTranslateY)),
        "innerColor" in J && t(8, (k = J.innerColor)),
        "name" in J && t(25, (b = J.name)),
        "outlineColor" in J && t(9, (w = J.outlineColor)),
        "outlineContrast" in J && t(10, (g = J.outlineContrast)),
        "outlineDropShadowAmount" in J &&
          t(11, (S = J.outlineDropShadowAmount)),
        "progressColor" in J && t(12, (D = J.progressColor)),
        "progressContrast" in J && t(13, (Y = J.progressContrast)),
        "progressDropShadowAmount" in J &&
          t(14, ($ = J.progressDropShadowAmount)),
        "progressValue" in J && t(26, (W = J.progressValue)),
        "ringSize" in J && t(15, (q = J.ringSize)),
        "rotateDegree" in J && t(16, (j = J.rotateDegree)),
        "translateX" in J && t(17, (x = J.translateX)),
        "translateY" in J && t(18, (V = J.translateY)),
        "width" in J && t(19, (Q = J.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 67108864 && M.set(W),
        n.$$.dirty & 135266304 && t(22, (o = p - (i / 100) * p));
    }),
    [
      l,
      s,
      f,
      u,
      a,
      d,
      h,
      _,
      k,
      w,
      g,
      S,
      D,
      Y,
      $,
      q,
      j,
      x,
      V,
      Q,
      p,
      X,
      o,
      M,
      c,
      b,
      W,
      i,
      z,
    ]
  );
}
class ia extends ue {
  constructor(e) {
    super();
    fe(this, e, oa, ta, ce, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconRotateDegree: 24,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      innerColor: 8,
      name: 25,
      outlineColor: 9,
      outlineContrast: 10,
      outlineDropShadowAmount: 11,
      progressColor: 12,
      progressContrast: 13,
      progressDropShadowAmount: 14,
      progressValue: 26,
      ringSize: 15,
      rotateDegree: 16,
      translateX: 17,
      translateY: 18,
      width: 19,
    });
  }
}
function Oi(n) {
  let e, t, o, i;
  return {
    c() {
      (e = O("path")),
        r(
          e,
          "d",
          "M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"
        ),
        r(e, "class", "stroke-cap-round"),
        r(e, "stroke", n[11]),
        r(e, "fill", (t = "transparent")),
        r(e, "stroke-width", n[17]),
        r(e, "stroke-dasharray", (o = n[20] + " " + n[20])),
        r(e, "stroke-dashoffset", (i = 0)),
        R(
          e,
          "filter",
          (n[13] ? "drop-shadow(0px 0px " + n[13] + "px " + n[11] + ")" : "") +
            " " +
            ("contrast(" + n[12] + "%)")
        );
    },
    m(l, s) {
      H(l, e, s);
    },
    p(l, s) {
      s & 2048 && r(e, "stroke", l[11]),
        s & 131072 && r(e, "stroke-width", l[17]),
        s & 1048576 &&
          o !== (o = l[20] + " " + l[20]) &&
          r(e, "stroke-dasharray", o),
        s & 14336 &&
          R(
            e,
            "filter",
            (l[13]
              ? "drop-shadow(0px 0px " + l[13] + "px " + l[11] + ")"
              : "") +
              " " +
              ("contrast(" + l[12] + "%)")
          );
    },
    d(l) {
      l && E(e);
    },
  };
}
function la(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g = n[0] && Oi(n);
  return (
    (b = new Fe({
      props: {
        icon: n[2],
        scale: n[6],
        translateX: n[7],
        translateY: n[8],
        flip: "horizontal",
        style: "color:" + n[3],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("defs")),
          (o = O("clipPath")),
          (i = O("path")),
          (s = O("g")),
          g && g.c(),
          (f = O("path")),
          (a = O("svg")),
          (c = O("path")),
          (k = O("g")),
          P(b.$$.fragment),
          r(
            i,
            "d",
            "M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"
          ),
          r(i, "class", "stroke-cap-round"),
          r(o, "viewBox", "0 0 12 12"),
          r(o, "id", (l = n[10] + "-cut-out-hexring")),
          r(
            f,
            "d",
            "M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"
          ),
          r(f, "class", "stroke-cap-round"),
          r(f, "stroke", n[14]),
          r(f, "fill", "transparent"),
          r(f, "stroke-width", n[17]),
          r(f, "stroke-dasharray", (u = n[20] + " " + n[20])),
          r(f, "stroke-dashoffset", n[21]),
          R(
            f,
            "filter",
            (n[16]
              ? "drop-shadow(0px 0px " + n[16] + "px " + n[14] + ")"
              : "") +
              " " +
              ("contrast(" + n[15] + "%)")
          ),
          r(
            c,
            "d",
            "M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"
          ),
          r(c, "class", "stroke-cap-round"),
          r(c, "fill", n[9]),
          r(
            c,
            "transform",
            (d =
              "translate(" +
              (0.45 + n[17] / 2.5) +
              ", " +
              (0.45 + n[17] / 2.5) +
              ")")
          ),
          r(
            a,
            "viewBox",
            (h = "0 0 " + (24 + n[17] + 0.38) + " " + (24 + n[17] + 0.38))
          ),
          r(
            s,
            "transform",
            (_ =
              `
      ` + (n[18] > 0 ? "rotate(" + n[18] + " " + 12 + " " + 12 + ")" : ""))
          ),
          R(
            k,
            "filter",
            (n[5] ? "drop-shadow(0px 0px " + n[5] + "px " + n[3] + ")" : "") +
              " " +
              ("contrast(" + n[4] + "%)")
          ),
          r(e, "width", n[19]),
          r(e, "height", n[1]),
          r(e, "viewBox", "0 0 24 24"),
          r(e, "overflow", "visible");
      },
      m(S, D) {
        H(S, e, D),
          m(e, t),
          m(t, o),
          m(o, i),
          m(e, s),
          g && g.m(s, null),
          m(s, f),
          n[29](f),
          m(s, a),
          m(a, c),
          m(e, k),
          B(b, k, null),
          (w = !0);
      },
      p(S, [D]) {
        (!w || (D & 1024 && l !== (l = S[10] + "-cut-out-hexring"))) &&
          r(o, "id", l),
          S[0]
            ? g
              ? g.p(S, D)
              : ((g = Oi(S)), g.c(), g.m(s, f))
            : g && (g.d(1), (g = null)),
          (!w || D & 16384) && r(f, "stroke", S[14]),
          (!w || D & 131072) && r(f, "stroke-width", S[17]),
          (!w || (D & 1048576 && u !== (u = S[20] + " " + S[20]))) &&
            r(f, "stroke-dasharray", u),
          (!w || D & 2097152) && r(f, "stroke-dashoffset", S[21]),
          (!w || D & 114688) &&
            R(
              f,
              "filter",
              (S[16]
                ? "drop-shadow(0px 0px " + S[16] + "px " + S[14] + ")"
                : "") +
                " " +
                ("contrast(" + S[15] + "%)")
            ),
          (!w || D & 512) && r(c, "fill", S[9]),
          (!w ||
            (D & 131072 &&
              d !==
                (d =
                  "translate(" +
                  (0.45 + S[17] / 2.5) +
                  ", " +
                  (0.45 + S[17] / 2.5) +
                  ")"))) &&
            r(c, "transform", d),
          (!w ||
            (D & 131072 &&
              h !==
                (h =
                  "0 0 " + (24 + S[17] + 0.38) + " " + (24 + S[17] + 0.38)))) &&
            r(a, "viewBox", h),
          (!w ||
            (D & 262144 &&
              _ !==
                (_ =
                  `
      ` + (S[18] > 0 ? "rotate(" + S[18] + " " + 12 + " " + 12 + ")" : "")))) &&
            r(s, "transform", _);
        const Y = {};
        D & 4 && (Y.icon = S[2]),
          D & 64 && (Y.scale = S[6]),
          D & 128 && (Y.translateX = S[7]),
          D & 256 && (Y.translateY = S[8]),
          D & 8 && (Y.style = "color:" + S[3]),
          b.$set(Y),
          (!w || D & 56) &&
            R(
              k,
              "filter",
              (S[5] ? "drop-shadow(0px 0px " + S[5] + "px " + S[3] + ")" : "") +
                " " +
                ("contrast(" + S[4] + "%)")
            ),
          (!w || D & 524288) && r(e, "width", S[19]),
          (!w || D & 2) && r(e, "height", S[1]);
      },
      i(S) {
        w || (C(b.$$.fragment, S), (w = !0));
      },
      o(S) {
        T(b.$$.fragment, S), (w = !1);
      },
      d(S) {
        S && E(e), g && g.d(), n[29](null), U(b);
      },
    }
  );
}
function ra(n, e, t) {
  let o,
    { displayOutline: i = !0 } = e,
    { height: l = 50 } = e,
    { icon: s = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: u = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: d = 0.45 } = e,
    { iconTranslateX: h = 0 } = e,
    { iconTranslateY: _ = 0 } = e,
    { innerColor: k = "#212121" } = e,
    { name: b = "" } = e,
    { outlineColor: w = "red" } = e,
    { outlineContrast: g = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: D = "red" } = e,
    { progressContrast: Y = 100 } = e,
    { progressDropShadowAmount: $ = 0 } = e,
    { progressValue: W = 100 } = e,
    { ringSize: q = 4 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: x = 0 } = e,
    { translateY: V = 0 } = e,
    { width: Q = 50 } = e,
    M = 10;
  const X = nn(W, { duration: 600, easing: pn });
  de(n, X, (v) => t(28, (o = v)));
  let p, z;
  Pt(() => {
    try {
      t(20, (z = p.getTotalLength()));
    } catch {}
  });
  function J(v) {
    te[v ? "unshift" : "push"](() => {
      (p = v), t(22, p);
    });
  }
  return (
    (n.$$set = (v) => {
      "displayOutline" in v && t(0, (i = v.displayOutline)),
        "height" in v && t(1, (l = v.height)),
        "icon" in v && t(2, (s = v.icon)),
        "iconColor" in v && t(3, (f = v.iconColor)),
        "iconContrast" in v && t(4, (u = v.iconContrast)),
        "iconDropShadowAmount" in v && t(5, (a = v.iconDropShadowAmount)),
        "iconRotateDegree" in v && t(24, (c = v.iconRotateDegree)),
        "iconScaling" in v && t(6, (d = v.iconScaling)),
        "iconTranslateX" in v && t(7, (h = v.iconTranslateX)),
        "iconTranslateY" in v && t(8, (_ = v.iconTranslateY)),
        "innerColor" in v && t(9, (k = v.innerColor)),
        "name" in v && t(10, (b = v.name)),
        "outlineColor" in v && t(11, (w = v.outlineColor)),
        "outlineContrast" in v && t(12, (g = v.outlineContrast)),
        "outlineDropShadowAmount" in v &&
          t(13, (S = v.outlineDropShadowAmount)),
        "progressColor" in v && t(14, (D = v.progressColor)),
        "progressContrast" in v && t(15, (Y = v.progressContrast)),
        "progressDropShadowAmount" in v &&
          t(16, ($ = v.progressDropShadowAmount)),
        "progressValue" in v && t(25, (W = v.progressValue)),
        "ringSize" in v && t(17, (q = v.ringSize)),
        "rotateDegree" in v && t(18, (j = v.rotateDegree)),
        "translateX" in v && t(26, (x = v.translateX)),
        "translateY" in v && t(27, (V = v.translateY)),
        "width" in v && t(19, (Q = v.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 33554432 && X.set(W),
        n.$$.dirty & 269484032 && t(21, (M = z - (o / 100) * z));
    }),
    [
      i,
      l,
      s,
      f,
      u,
      a,
      d,
      h,
      _,
      k,
      b,
      w,
      g,
      S,
      D,
      Y,
      $,
      q,
      j,
      Q,
      z,
      M,
      p,
      X,
      c,
      W,
      x,
      V,
      o,
      J,
    ]
  );
}
class sa extends ue {
  constructor(e) {
    super();
    fe(this, e, ra, la, ce, {
      displayOutline: 0,
      height: 1,
      icon: 2,
      iconColor: 3,
      iconContrast: 4,
      iconDropShadowAmount: 5,
      iconRotateDegree: 24,
      iconScaling: 6,
      iconTranslateX: 7,
      iconTranslateY: 8,
      innerColor: 9,
      name: 10,
      outlineColor: 11,
      outlineContrast: 12,
      outlineDropShadowAmount: 13,
      progressColor: 14,
      progressContrast: 15,
      progressDropShadowAmount: 16,
      progressValue: 25,
      ringSize: 17,
      rotateDegree: 18,
      translateX: 26,
      translateY: 27,
      width: 19,
    });
  }
}
function aa(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h;
  return (
    (d = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        flip: "horizontal",
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          (o = O("path")),
          (i = O("clipPath")),
          (l = O("path")),
          (f = O("line")),
          (c = O("g")),
          P(d.$$.fragment),
          r(
            o,
            "d",
            "M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"
          ),
          r(o, "fill", n[9]),
          r(o, "stroke", "transparent"),
          r(o, "stroke-width", n[22]),
          R(
            o,
            "filter",
            (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
              " " +
              ("contrast(" + n[10] + "%)")
          ),
          r(
            l,
            "d",
            "M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"
          ),
          r(i, "id", (s = n[8] + "-cut-out-hexwhole")),
          r(f, "x1", "50%"),
          r(f, "y1", 24),
          r(f, "x2", "50%"),
          r(f, "y2", 0),
          r(f, "stroke", n[12]),
          r(f, "stroke-dasharray", n[19]),
          r(f, "stroke-dashoffset", n[20]),
          r(f, "stroke-width", n[19]),
          r(f, "clip-path", (u = "url(#" + n[8] + "-cut-out-hexwhole)")),
          R(
            f,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          r(
            t,
            "transform",
            (a =
              `
      ` +
              (n[15] > 0 ? "rotate(" + n[15] + " " + 12 + " " + 12 + ")" : "") +
              `
      ` +
              ("translate(" + n[16] + " " + n[17] + ")"))
          ),
          R(
            c,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(e, "width", n[18]),
          r(e, "height", n[0]),
          r(e, "viewBox", "0 0 24 24");
      },
      m(_, k) {
        H(_, e, k),
          m(e, t),
          m(t, o),
          m(t, i),
          m(i, l),
          m(t, f),
          n[26](f),
          m(e, c),
          B(d, c, null),
          (h = !0);
      },
      p(_, [k]) {
        (!h || k & 512) && r(o, "fill", _[9]),
          (!h || k & 4194304) && r(o, "stroke-width", _[22]),
          (!h || k & 3584) &&
            R(
              o,
              "filter",
              (_[11]
                ? "drop-shadow(0px 0px " + _[11] + "px " + _[9] + ")"
                : "") +
                " " +
                ("contrast(" + _[10] + "%)")
            ),
          (!h || (k & 256 && s !== (s = _[8] + "-cut-out-hexwhole"))) &&
            r(i, "id", s),
          (!h || k & 4096) && r(f, "stroke", _[12]),
          (!h || k & 524288) && r(f, "stroke-dasharray", _[19]),
          (!h || k & 1048576) && r(f, "stroke-dashoffset", _[20]),
          (!h || k & 524288) && r(f, "stroke-width", _[19]),
          (!h ||
            (k & 256 && u !== (u = "url(#" + _[8] + "-cut-out-hexwhole)"))) &&
            r(f, "clip-path", u),
          (!h || k & 28672) &&
            R(
              f,
              "filter",
              (_[14]
                ? "drop-shadow(0px 0px " + _[14] + "px " + _[12] + ")"
                : "") +
                " " +
                ("contrast(" + _[13] + "%)")
            ),
          (!h ||
            (k & 229376 &&
              a !==
                (a =
                  `
      ` +
                  (_[15] > 0
                    ? "rotate(" + _[15] + " " + 12 + " " + 12 + ")"
                    : "") +
                  `
      ` +
                  ("translate(" + _[16] + " " + _[17] + ")")))) &&
            r(t, "transform", a);
        const b = {};
        k & 2 && (b.icon = _[1]),
          k & 32 && (b.scale = _[5]),
          k & 64 && (b.translateX = _[6]),
          k & 128 && (b.translateY = _[7]),
          k & 4 && (b.style = "color:" + _[2]),
          d.$set(b),
          (!h || k & 28) &&
            R(
              c,
              "filter",
              (_[4] ? "drop-shadow(0px 0px " + _[4] + "px " + _[2] + ")" : "") +
                " " +
                ("contrast(" + _[3] + "%)")
            ),
          (!h || k & 262144) && r(e, "width", _[18]),
          (!h || k & 1) && r(e, "height", _[0]);
      },
      i(_) {
        h || (C(d.$$.fragment, _), (h = !0));
      },
      o(_) {
        T(d.$$.fragment, _), (h = !1);
      },
      d(_) {
        _ && E(e), n[26](null), U(d);
      },
    }
  );
}
function ua(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { name: h = "" } = e,
    { outlineColor: _ = "red" } = e,
    { outlineContrast: k = 100 } = e,
    { outlineDropShadowAmount: b = 0 } = e,
    { progressColor: w = "red" } = e,
    { progressContrast: g = 100 } = e,
    { progressDropShadowAmount: S = 0 } = e,
    { progressValue: D = 100 } = e,
    { rotateDegree: Y = 0 } = e,
    { translateX: $ = 0 } = e,
    { translateY: W = 0 } = e,
    { width: q = 50 } = e,
    j = 10,
    x = null,
    V = 0,
    Q = i;
  Pt(() => {
    try {
      t(19, (V = x.getTotalLength()));
    } catch {
      console.log(
        "Error: PS-Hud: Hexagon-Whole-Icon should not be mounting when hiding icons"
      );
    }
  });
  const M = nn(D, { duration: 600, easing: pn });
  de(n, M, (p) => t(25, (o = p)));
  function X(p) {
    te[p ? "unshift" : "push"](() => {
      (x = p), t(21, x);
    });
  }
  return (
    (n.$$set = (p) => {
      "height" in p && t(0, (i = p.height)),
        "icon" in p && t(1, (l = p.icon)),
        "iconColor" in p && t(2, (s = p.iconColor)),
        "iconContrast" in p && t(3, (f = p.iconContrast)),
        "iconDropShadowAmount" in p && t(4, (u = p.iconDropShadowAmount)),
        "iconScaling" in p && t(5, (a = p.iconScaling)),
        "iconTranslateX" in p && t(6, (c = p.iconTranslateX)),
        "iconTranslateY" in p && t(7, (d = p.iconTranslateY)),
        "name" in p && t(8, (h = p.name)),
        "outlineColor" in p && t(9, (_ = p.outlineColor)),
        "outlineContrast" in p && t(10, (k = p.outlineContrast)),
        "outlineDropShadowAmount" in p &&
          t(11, (b = p.outlineDropShadowAmount)),
        "progressColor" in p && t(12, (w = p.progressColor)),
        "progressContrast" in p && t(13, (g = p.progressContrast)),
        "progressDropShadowAmount" in p &&
          t(14, (S = p.progressDropShadowAmount)),
        "progressValue" in p && t(24, (D = p.progressValue)),
        "rotateDegree" in p && t(15, (Y = p.rotateDegree)),
        "translateX" in p && t(16, ($ = p.translateX)),
        "translateY" in p && t(17, (W = p.translateY)),
        "width" in p && t(18, (q = p.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 262145 && t(22, (Q = i > q ? i : q)),
        n.$$.dirty & 16777216 && M.set(D),
        n.$$.dirty & 34078720 && t(20, (j = V - (o / 100) * V));
    }),
    [
      i,
      l,
      s,
      f,
      u,
      a,
      c,
      d,
      h,
      _,
      k,
      b,
      w,
      g,
      S,
      Y,
      $,
      W,
      q,
      V,
      j,
      x,
      Q,
      M,
      D,
      o,
      X,
    ]
  );
}
class fa extends ue {
  constructor(e) {
    super();
    fe(this, e, ua, aa, ce, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      name: 8,
      outlineColor: 9,
      outlineContrast: 10,
      outlineDropShadowAmount: 11,
      progressColor: 12,
      progressContrast: 13,
      progressDropShadowAmount: 14,
      progressValue: 24,
      rotateDegree: 15,
      translateX: 16,
      translateY: 17,
      width: 18,
    });
  }
}
function ca(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h, _, k, b;
  return (
    (_ = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          (o = O("circle")),
          (f = O("circle")),
          (h = O("g")),
          P(_.$$.fragment),
          r(o, "stroke", n[8]),
          r(o, "fill", "transparent"),
          r(o, "stroke-dashoffset", 0),
          r(o, "stroke-dasharray", (i = n[20] + " " + n[20])),
          r(o, "stroke-width", (l = n[19] * 2)),
          r(o, "r", n[19]),
          r(o, "cx", n[18]),
          r(o, "cy", n[18]),
          r(o, "transform", (s = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
          R(
            o,
            "filter",
            (n[10] ? "drop-shadow(0px 0px " + n[10] + "px " + n[8] + ")" : "") +
              " " +
              ("contrast(" + n[9] + "%)")
          ),
          r(f, "stroke", n[11]),
          r(f, "fill", "transparent"),
          r(f, "stroke-dashoffset", n[21]),
          r(f, "stroke-dasharray", (u = n[20] + " " + n[20])),
          r(f, "stroke-width", (a = n[19] * 2)),
          r(f, "r", n[19]),
          r(f, "cx", n[18]),
          r(f, "cy", n[18]),
          r(f, "transform", (c = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
          R(
            f,
            "filter",
            (n[13]
              ? "drop-shadow(0px 0px " + n[13] + "px " + n[11] + ")"
              : "") +
              " " +
              ("contrast(" + n[12] + "%)")
          ),
          r(
            t,
            "transform",
            (d =
              `
    ` +
              (n[14] > 0
                ? "rotate(" + n[14] + " " + n[17] + " " + n[0] + ")"
                : "") +
              `
    ` +
              ("translate(" + n[15] + " " + n[16] + ")"))
          ),
          R(
            h,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(e, "width", n[18]),
          r(e, "height", n[18]),
          r(e, "viewBox", (k = "0 0 " + n[18] * 2 + " " + n[18] * 2));
      },
      m(w, g) {
        H(w, e, g), m(e, t), m(t, o), m(t, f), m(e, h), B(_, h, null), (b = !0);
      },
      p(w, [g]) {
        (!b || g & 256) && r(o, "stroke", w[8]),
          (!b || (g & 1048576 && i !== (i = w[20] + " " + w[20]))) &&
            r(o, "stroke-dasharray", i),
          (!b || (g & 524288 && l !== (l = w[19] * 2))) &&
            r(o, "stroke-width", l),
          (!b || g & 524288) && r(o, "r", w[19]),
          (!b || g & 262144) && r(o, "cx", w[18]),
          (!b || g & 262144) && r(o, "cy", w[18]),
          (!b ||
            (g & 262144 &&
              s !== (s = "rotate(-90, " + w[18] + ", " + w[18] + ")"))) &&
            r(o, "transform", s),
          (!b || g & 1792) &&
            R(
              o,
              "filter",
              (w[10]
                ? "drop-shadow(0px 0px " + w[10] + "px " + w[8] + ")"
                : "") +
                " " +
                ("contrast(" + w[9] + "%)")
            ),
          (!b || g & 2048) && r(f, "stroke", w[11]),
          (!b || g & 2097152) && r(f, "stroke-dashoffset", w[21]),
          (!b || (g & 1048576 && u !== (u = w[20] + " " + w[20]))) &&
            r(f, "stroke-dasharray", u),
          (!b || (g & 524288 && a !== (a = w[19] * 2))) &&
            r(f, "stroke-width", a),
          (!b || g & 524288) && r(f, "r", w[19]),
          (!b || g & 262144) && r(f, "cx", w[18]),
          (!b || g & 262144) && r(f, "cy", w[18]),
          (!b ||
            (g & 262144 &&
              c !== (c = "rotate(-90, " + w[18] + ", " + w[18] + ")"))) &&
            r(f, "transform", c),
          (!b || g & 14336) &&
            R(
              f,
              "filter",
              (w[13]
                ? "drop-shadow(0px 0px " + w[13] + "px " + w[11] + ")"
                : "") +
                " " +
                ("contrast(" + w[12] + "%)")
            ),
          (!b ||
            (g & 245761 &&
              d !==
                (d =
                  `
    ` +
                  (w[14] > 0
                    ? "rotate(" + w[14] + " " + w[17] + " " + w[0] + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + w[15] + " " + w[16] + ")")))) &&
            r(t, "transform", d);
        const S = {};
        g & 2 && (S.icon = w[1]),
          g & 32 && (S.scale = w[5]),
          g & 64 && (S.translateX = w[6]),
          g & 128 && (S.translateY = w[7]),
          g & 4 && (S.style = "color:" + w[2]),
          _.$set(S),
          (!b || g & 28) &&
            R(
              h,
              "filter",
              (w[4] ? "drop-shadow(0px 0px " + w[4] + "px " + w[2] + ")" : "") +
                " " +
                ("contrast(" + w[3] + "%)")
            ),
          (!b || g & 262144) && r(e, "width", w[18]),
          (!b || g & 262144) && r(e, "height", w[18]),
          (!b ||
            (g & 262144 && k !== (k = "0 0 " + w[18] * 2 + " " + w[18] * 2))) &&
            r(e, "viewBox", k);
      },
      i(w) {
        b || (C(_.$$.fragment, w), (b = !0));
      },
      o(w) {
        T(_.$$.fragment, w), (b = !1);
      },
      d(w) {
        w && E(e), U(_);
      },
    }
  );
}
function ha(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { name: h = "" } = e,
    { outlineColor: _ = "red" } = e,
    { outlineContrast: k = 100 } = e,
    { outlineDropShadowAmount: b = 0 } = e,
    { progressColor: w = "red" } = e,
    { progressContrast: g = 100 } = e,
    { progressDropShadowAmount: S = 0 } = e,
    { progressValue: D = 100 } = e,
    { rotateDegree: Y = 0 } = e,
    { translateX: $ = 0 } = e,
    { translateY: W = 0 } = e,
    { width: q = 50 } = e,
    j = 25;
  const x = nn(D, { duration: 600, easing: pn });
  de(n, x, (X) => t(25, (o = X)));
  let V = j,
    Q = V * 2 * Math.PI,
    M = Q - (o / 100) * Q;
  return (
    (n.$$set = (X) => {
      "height" in X && t(0, (i = X.height)),
        "icon" in X && t(1, (l = X.icon)),
        "iconColor" in X && t(2, (s = X.iconColor)),
        "iconContrast" in X && t(3, (f = X.iconContrast)),
        "iconDropShadowAmount" in X && t(4, (u = X.iconDropShadowAmount)),
        "iconScaling" in X && t(5, (a = X.iconScaling)),
        "iconTranslateX" in X && t(6, (c = X.iconTranslateX)),
        "iconTranslateY" in X && t(7, (d = X.iconTranslateY)),
        "name" in X && t(23, (h = X.name)),
        "outlineColor" in X && t(8, (_ = X.outlineColor)),
        "outlineContrast" in X && t(9, (k = X.outlineContrast)),
        "outlineDropShadowAmount" in X &&
          t(10, (b = X.outlineDropShadowAmount)),
        "progressColor" in X && t(11, (w = X.progressColor)),
        "progressContrast" in X && t(12, (g = X.progressContrast)),
        "progressDropShadowAmount" in X &&
          t(13, (S = X.progressDropShadowAmount)),
        "progressValue" in X && t(24, (D = X.progressValue)),
        "rotateDegree" in X && t(14, (Y = X.rotateDegree)),
        "translateX" in X && t(15, ($ = X.translateX)),
        "translateY" in X && t(16, (W = X.translateY)),
        "width" in X && t(17, (q = X.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16777216 && x.set(D),
        n.$$.dirty & 35520513 &&
          (t(18, (j = i > q ? i : q)),
          t(19, (V = j)),
          t(20, (Q = V * 2 * Math.PI)),
          t(21, (M = Q - (o / 100) * Q)));
    }),
    [
      i,
      l,
      s,
      f,
      u,
      a,
      c,
      d,
      _,
      k,
      b,
      w,
      g,
      S,
      Y,
      $,
      W,
      q,
      j,
      V,
      Q,
      M,
      x,
      h,
      D,
      o,
    ]
  );
}
class ga extends ue {
  constructor(e) {
    super();
    fe(this, e, ha, ca, ce, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      name: 23,
      outlineColor: 8,
      outlineContrast: 9,
      outlineDropShadowAmount: 10,
      progressColor: 11,
      progressContrast: 12,
      progressDropShadowAmount: 13,
      progressValue: 24,
      rotateDegree: 14,
      translateX: 15,
      translateY: 16,
      width: 17,
    });
  }
}
function da(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h;
  return (
    (a = new Fe({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2] + ";",
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("g")),
          (o = O("line")),
          (i = O("line")),
          (l = O("line")),
          (u = O("g")),
          P(a.$$.fragment),
          r(o, "stroke", n[9]),
          r(o, "x1", "50%"),
          r(o, "y1", "100%"),
          r(o, "x2", "50%"),
          r(o, "y2", "0%"),
          r(o, "stroke-width", n[19]),
          R(
            o,
            "filter",
            (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
              " " +
              ("contrast(" + n[10] + "%)")
          ),
          r(i, "x1", "50%"),
          r(i, "y1", "100%"),
          r(i, "x2", "50%"),
          r(i, "y2", "0%"),
          r(i, "stroke", n[12]),
          r(i, "fill", "transparent"),
          r(i, "stroke-dasharray", n[0]),
          r(i, "stroke-dashoffset", n[20]),
          r(i, "stroke-width", n[19]),
          R(
            i,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          r(l, "stroke", n[8]),
          r(l, "x1", "50%"),
          r(l, "y1", (s = n[0] - n[15])),
          r(l, "x2", "50%"),
          r(l, "y2", n[15]),
          r(l, "stroke-width", (f = n[19] - n[15] * 2)),
          r(
            u,
            "transform",
            (c = "rotate( " + -n[16] + " " + n[0] / 2 + " " + n[19] / 2 + ")")
          ),
          R(
            u,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(e, "height", n[0]),
          r(e, "width", n[19]),
          r(e, "overflow", "visible"),
          r(
            e,
            "transform",
            (d =
              `
    ` +
              (n[16] > 0 ? "rotate(" + n[16] + " " + 0 + " " + 0 + ")" : "") +
              `
    ` +
              ("translate(" + n[17] + " " + n[18] + ")"))
          );
      },
      m(_, k) {
        H(_, e, k),
          m(e, t),
          m(t, o),
          m(t, i),
          m(t, l),
          m(e, u),
          B(a, u, null),
          (h = !0);
      },
      p(_, [k]) {
        (!h || k & 512) && r(o, "stroke", _[9]),
          (!h || k & 524288) && r(o, "stroke-width", _[19]),
          (!h || k & 3584) &&
            R(
              o,
              "filter",
              (_[11]
                ? "drop-shadow(0px 0px " + _[11] + "px " + _[9] + ")"
                : "") +
                " " +
                ("contrast(" + _[10] + "%)")
            ),
          (!h || k & 4096) && r(i, "stroke", _[12]),
          (!h || k & 1) && r(i, "stroke-dasharray", _[0]),
          (!h || k & 1048576) && r(i, "stroke-dashoffset", _[20]),
          (!h || k & 524288) && r(i, "stroke-width", _[19]),
          (!h || k & 28672) &&
            R(
              i,
              "filter",
              (_[14]
                ? "drop-shadow(0px 0px " + _[14] + "px " + _[12] + ")"
                : "") +
                " " +
                ("contrast(" + _[13] + "%)")
            ),
          (!h || k & 256) && r(l, "stroke", _[8]),
          (!h || (k & 32769 && s !== (s = _[0] - _[15]))) && r(l, "y1", s),
          (!h || k & 32768) && r(l, "y2", _[15]),
          (!h || (k & 557056 && f !== (f = _[19] - _[15] * 2))) &&
            r(l, "stroke-width", f);
        const b = {};
        k & 2 && (b.icon = _[1]),
          k & 32 && (b.scale = _[5]),
          k & 64 && (b.translateX = _[6]),
          k & 128 && (b.translateY = _[7]),
          k & 4 && (b.style = "color:" + _[2] + ";"),
          a.$set(b),
          (!h ||
            (k & 589825 &&
              c !==
                (c =
                  "rotate( " +
                  -_[16] +
                  " " +
                  _[0] / 2 +
                  " " +
                  _[19] / 2 +
                  ")"))) &&
            r(u, "transform", c),
          (!h || k & 28) &&
            R(
              u,
              "filter",
              (_[4] ? "drop-shadow(0px 0px " + _[4] + "px " + _[2] + ")" : "") +
                " " +
                ("contrast(" + _[3] + "%)")
            ),
          (!h || k & 1) && r(e, "height", _[0]),
          (!h || k & 524288) && r(e, "width", _[19]),
          (!h ||
            (k & 458752 &&
              d !==
                (d =
                  `
    ` +
                  (_[16] > 0
                    ? "rotate(" + _[16] + " " + 0 + " " + 0 + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + _[17] + " " + _[18] + ")")))) &&
            r(e, "transform", d);
      },
      i(_) {
        h || (C(a.$$.fragment, _), (h = !0));
      },
      o(_) {
        T(a.$$.fragment, _), (h = !1);
      },
      d(_) {
        _ && E(e), U(a);
      },
    }
  );
}
function ma(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { innerColor: h = "#212121" } = e,
    { name: _ = "" } = e,
    { outlineColor: k = "red" } = e,
    { outlineContrast: b = 100 } = e,
    { outlineDropShadowAmount: w = 0 } = e,
    { progressColor: g = "red" } = e,
    { progressContrast: S = 100 } = e,
    { progressDropShadowAmount: D = 0 } = e,
    { progressValue: Y = 100 } = e,
    { ringSize: $ = 4 } = e,
    { rotateDegree: W = 0 } = e,
    { translateX: q = 0 } = e,
    { translateY: j = 0 } = e,
    { width: x = 50 } = e,
    V = 10;
  const Q = nn(Y, { duration: 600, easing: pn });
  return (
    de(n, Q, (M) => t(24, (o = M))),
    (n.$$set = (M) => {
      "height" in M && t(0, (i = M.height)),
        "icon" in M && t(1, (l = M.icon)),
        "iconColor" in M && t(2, (s = M.iconColor)),
        "iconContrast" in M && t(3, (f = M.iconContrast)),
        "iconDropShadowAmount" in M && t(4, (u = M.iconDropShadowAmount)),
        "iconScaling" in M && t(5, (a = M.iconScaling)),
        "iconTranslateX" in M && t(6, (c = M.iconTranslateX)),
        "iconTranslateY" in M && t(7, (d = M.iconTranslateY)),
        "innerColor" in M && t(8, (h = M.innerColor)),
        "name" in M && t(22, (_ = M.name)),
        "outlineColor" in M && t(9, (k = M.outlineColor)),
        "outlineContrast" in M && t(10, (b = M.outlineContrast)),
        "outlineDropShadowAmount" in M &&
          t(11, (w = M.outlineDropShadowAmount)),
        "progressColor" in M && t(12, (g = M.progressColor)),
        "progressContrast" in M && t(13, (S = M.progressContrast)),
        "progressDropShadowAmount" in M &&
          t(14, (D = M.progressDropShadowAmount)),
        "progressValue" in M && t(23, (Y = M.progressValue)),
        "ringSize" in M && t(15, ($ = M.ringSize)),
        "rotateDegree" in M && t(16, (W = M.rotateDegree)),
        "translateX" in M && t(17, (q = M.translateX)),
        "translateY" in M && t(18, (j = M.translateY)),
        "width" in M && t(19, (x = M.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 8388608 && Q.set(Y),
        n.$$.dirty & 16777217 && t(20, (V = i - (o / 100) * i));
    }),
    [i, l, s, f, u, a, c, d, h, k, b, w, g, S, D, $, W, q, j, x, V, Q, _, Y, o]
  );
}
class _a extends ue {
  constructor(e) {
    super();
    fe(this, e, ma, da, ce, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      innerColor: 8,
      name: 22,
      outlineColor: 9,
      outlineContrast: 10,
      outlineDropShadowAmount: 11,
      progressColor: 12,
      progressContrast: 13,
      progressDropShadowAmount: 14,
      progressValue: 23,
      ringSize: 15,
      rotateDegree: 16,
      translateX: 17,
      translateY: 18,
      width: 19,
    });
  }
}
function wa(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S,
    D,
    Y,
    $,
    W,
    q,
    j,
    x,
    V,
    Q = Math.round(n[9]) + "%",
    M,
    X,
    p;
  return (
    (x = new Fe({
      props: {
        icon: n[2],
        scale: n[5],
        translateX: n[6],
        translateY: n[7] || 0.2,
        style: "color:" + n[0],
      },
    })),
    {
      c() {
        (e = O("svg")),
          (t = O("filter")),
          (o = O("feOffset")),
          (i = O("feGaussianBlur")),
          (l = O("feColorMatrix")),
          (s = O("feOffset")),
          (f = O("feGaussianBlur")),
          (u = O("feColorMatrix")),
          (a = O("feOffset")),
          (c = O("feGaussianBlur")),
          (d = O("feColorMatrix")),
          (h = O("feOffset")),
          (_ = O("feGaussianBlur")),
          (k = O("feColorMatrix")),
          (b = O("feOffset")),
          (w = O("feGaussianBlur")),
          (g = O("feColorMatrix")),
          (S = O("feMerge")),
          (D = O("feMergeNode")),
          (Y = O("feMergeNode")),
          ($ = O("feMergeNode")),
          (W = O("feMergeNode")),
          (q = O("feMergeNode")),
          (j = O("g")),
          P(x.$$.fragment),
          (V = O("text")),
          (M = be(Q)),
          r(o, "in", "SourceAlpha"),
          r(o, "result", "shadowOffsetOuter1"),
          r(i, "in", "shadowOffsetOuter1"),
          r(i, "result", "shadowBlurOuter1"),
          r(i, "stdDeviation", "5"),
          r(l, "in", "shadowBlurOuter1"),
          r(l, "result", "shadowMatrixOuter1"),
          r(l, "values", "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"),
          r(s, "dy", "1"),
          r(s, "in", "SourceAlpha"),
          r(s, "result", "shadowOffsetOuter2"),
          r(f, "in", "shadowOffsetOuter2"),
          r(f, "result", "shadowBlurOuter2"),
          r(f, "stdDeviation", "7"),
          r(u, "in", "shadowBlurOuter2"),
          r(u, "result", "shadowMatrixOuter2"),
          r(u, "values", "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"),
          r(a, "dy", "2"),
          r(a, "in", "SourceAlpha"),
          r(a, "result", "shadowOffsetOuter3"),
          r(c, "in", "shadowOffsetOuter3"),
          r(c, "result", "shadowBlurOuter3"),
          r(c, "stdDeviation", "10"),
          r(d, "in", "shadowBlurOuter3"),
          r(d, "result", "shadowMatrixOuter3"),
          r(d, "values", "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"),
          r(h, "dx", "2"),
          r(h, "dy", "2"),
          r(h, "in", "SourceAlpha"),
          r(h, "result", "shadowOffsetOuter4"),
          r(_, "in", "shadowOffsetOuter4"),
          r(_, "result", "shadowBlurOuter4"),
          r(_, "stdDeviation", "1"),
          r(k, "in", "shadowBlurOuter4"),
          r(k, "result", "shadowMatrixOuter4"),
          r(k, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69678442 0"),
          r(b, "dy", "2"),
          r(b, "in", "SourceAlpha"),
          r(b, "result", "shadowOffsetOuter5"),
          r(w, "in", "shadowOffsetOuter5"),
          r(w, "result", "shadowBlurOuter5"),
          r(w, "stdDeviation", "8"),
          r(g, "in", "shadowBlurOuter5"),
          r(g, "result", "shadowMatrixOuter5"),
          r(
            g,
            "values",
            "0 0 0 0 0.314369351 0 0 0 0 0.8883757 0 0 0 0 0.759899616 0 0 0 0.649371603 0"
          ),
          r(D, "in", "shadowMatrixOuter1"),
          r(Y, "in", "shadowMatrixOuter2"),
          r($, "in", "shadowMatrixOuter3"),
          r(W, "in", "shadowMatrixOuter4"),
          r(q, "in", "shadowMatrixOuter5"),
          r(t, "id", "glow"),
          r(t, "width", "100%"),
          r(t, "height", "100%"),
          r(t, "x", "0"),
          r(t, "y", "0"),
          r(t, "filterUnits", "userSpaceOnUse"),
          r(j, "class", "glow svelte-1vo34hh"),
          R(
            j,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[0] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          r(V, "class", "font-semibold text-lg"),
          r(V, "fill", "white"),
          r(V, "x", "55%"),
          r(V, "y", "20%"),
          r(V, "dominant-baseline", "middle"),
          r(V, "text-anchor", "middle"),
          r(e, "width", n[8]),
          r(e, "height", n[1]),
          r(e, "viewBox", (X = "0 0 " + n[8] + " " + n[1]));
      },
      m(z, J) {
        H(z, e, J),
          m(e, t),
          m(t, o),
          m(t, i),
          m(t, l),
          m(t, s),
          m(t, f),
          m(t, u),
          m(t, a),
          m(t, c),
          m(t, d),
          m(t, h),
          m(t, _),
          m(t, k),
          m(t, b),
          m(t, w),
          m(t, g),
          m(t, S),
          m(S, D),
          m(S, Y),
          m(S, $),
          m(S, W),
          m(S, q),
          m(e, j),
          B(x, j, null),
          m(e, V),
          m(V, M),
          (p = !0);
      },
      p(z, [J]) {
        const v = {};
        J & 4 && (v.icon = z[2]),
          J & 32 && (v.scale = z[5]),
          J & 64 && (v.translateX = z[6]),
          J & 128 && (v.translateY = z[7] || 0.2),
          J & 1 && (v.style = "color:" + z[0]),
          x.$set(v),
          (!p || J & 25) &&
            R(
              j,
              "filter",
              (z[4] ? "drop-shadow(0px 0px " + z[4] + "px " + z[0] + ")" : "") +
                " " +
                ("contrast(" + z[3] + "%)")
            ),
          (!p || J & 512) && Q !== (Q = Math.round(z[9]) + "%") && un(M, Q),
          (!p || J & 256) && r(e, "width", z[8]),
          (!p || J & 2) && r(e, "height", z[1]),
          (!p || (J & 258 && X !== (X = "0 0 " + z[8] + " " + z[1]))) &&
            r(e, "viewBox", X);
      },
      i(z) {
        p || (C(x.$$.fragment, z), (p = !0));
      },
      o(z) {
        T(x.$$.fragment, z), (p = !1);
      },
      d(z) {
        z && E(e), U(x);
      },
    }
  );
}
function ba(n, e, t) {
  let o,
    { height: i = 50 } = e,
    { icon: l = null } = e,
    { iconColor: s = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: u = 0 } = e,
    { iconScaling: a = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: d = 0 } = e,
    { name: h = "" } = e,
    { progressColor: _ = "red" } = e,
    { progressValue: k = 100 } = e,
    { rotateDegree: b = 0 } = e,
    { translateX: w = 0 } = e,
    { translateY: g = 0 } = e,
    { width: S = 50 } = e;
  const D = nn(k, { duration: 600, easing: Ao });
  return (
    de(n, D, (Y) => t(9, (o = Y))),
    (n.$$set = (Y) => {
      "height" in Y && t(1, (i = Y.height)),
        "icon" in Y && t(2, (l = Y.icon)),
        "iconColor" in Y && t(0, (s = Y.iconColor)),
        "iconContrast" in Y && t(3, (f = Y.iconContrast)),
        "iconDropShadowAmount" in Y && t(4, (u = Y.iconDropShadowAmount)),
        "iconScaling" in Y && t(5, (a = Y.iconScaling)),
        "iconTranslateX" in Y && t(6, (c = Y.iconTranslateX)),
        "iconTranslateY" in Y && t(7, (d = Y.iconTranslateY)),
        "name" in Y && t(11, (h = Y.name)),
        "progressColor" in Y && t(12, (_ = Y.progressColor)),
        "progressValue" in Y && t(13, (k = Y.progressValue)),
        "rotateDegree" in Y && t(14, (b = Y.rotateDegree)),
        "translateX" in Y && t(15, (w = Y.translateX)),
        "translateY" in Y && t(16, (g = Y.translateY)),
        "width" in Y && t(8, (S = Y.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 8192 && D.set(k),
        n.$$.dirty & 4097 && s == "white" && t(0, (s = _));
    }),
    [s, i, l, f, u, a, c, d, S, o, D, h, _, k, b, w, g]
  );
}
class ka extends ue {
  constructor(e) {
    super();
    fe(this, e, ba, wa, ce, {
      height: 1,
      icon: 2,
      iconColor: 0,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      name: 11,
      progressColor: 12,
      progressValue: 13,
      rotateDegree: 14,
      translateX: 15,
      translateY: 16,
      width: 8,
    });
  }
}
function Sa(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new Gs({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function pa(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new qs({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ca(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new ka({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function va(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new _a({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Da(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new fa({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Aa(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new sa({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ta(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new ia({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ia(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new na({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function ya(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new xs({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ma(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new ga({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ya(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new Zs({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Xa(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new Us({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Oa(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new Rs({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Fa(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new Xs({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ea(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new Es({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Va(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new Cs({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ha(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new ys({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ra(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new As({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Pa(n) {
  let e, t;
  const o = [n[1]];
  let i = {};
  for (let l = 0; l < o.length; l += 1) i = mn(i, o[l]);
  return (
    (e = new ks({ props: i })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(l, s) {
        B(e, l, s), (t = !0);
      },
      p(l, s) {
        const f = s & 2 ? _n(o, [wn(l[1])]) : {};
        e.$set(f);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        U(e, l);
      },
    }
  );
}
function Ba(n) {
  let e, t, o, i;
  const l = [
      Pa,
      Ra,
      Ha,
      Va,
      Ea,
      Fa,
      Oa,
      Xa,
      Ya,
      Ma,
      ya,
      Ia,
      Ta,
      Aa,
      Da,
      va,
      Ca,
      pa,
      Sa,
    ],
    s = [];
  function f(u, a) {
    return u[0].shape == "badge"
      ? 0
      : u[0].shape == "circle-ring"
      ? 1
      : u[0].shape == "circle-ring-whole"
      ? 2
      : u[0].shape == "circle-circle-fill"
      ? 3
      : u[0].shape == "circle-square-fill"
      ? 4
      : u[0].shape == "circle-whole"
      ? 5
      : u[0].shape == "diamond-ring"
      ? 6
      : u[0].shape == "diamond-whole"
      ? 7
      : u[0].shape == "horizontal-bar"
      ? 8
      : u[0].shape == "square-circular-fill"
      ? 9
      : u[0].shape == "square-ring"
      ? 10
      : u[0].shape == "star-ring"
      ? 11
      : u[0].shape == "triangle-ring"
      ? 12
      : u[0].shape == "hexagon-ring"
      ? 13
      : u[0].shape == "hexagon-whole"
      ? 14
      : u[0].shape == "square-whole"
      ? 15
      : u[0].shape == "icon-percentage"
      ? 16
      : u[0].shape == "pill-ring"
      ? 17
      : u[0].shape == "pill-whole"
      ? 18
      : -1;
  }
  return (
    ~(e = f(n)) && (t = s[e] = l[e](n)),
    {
      c() {
        t && t.c(), (o = dn());
      },
      m(u, a) {
        ~e && s[e].m(u, a), H(u, o, a), (i = !0);
      },
      p(u, [a]) {
        let c = e;
        (e = f(u)),
          e === c
            ? ~e && s[e].p(u, a)
            : (t &&
                (he(),
                T(s[c], 1, 1, () => {
                  s[c] = null;
                }),
                ge()),
              ~e
                ? ((t = s[e]),
                  t ? t.p(u, a) : ((t = s[e] = l[e](u)), t.c()),
                  C(t, 1),
                  t.m(o.parentNode, o))
                : (t = null));
      },
      i(u) {
        i || (C(t), (i = !0));
      },
      o(u) {
        T(t), (i = !1);
      },
      d(u) {
        ~e && s[e].d(u), u && E(o);
      },
    }
  );
}
function Ua(n, e, t) {
  let { hudIconInfo: o = {} } = e,
    i;
  return (
    (n.$$set = (l) => {
      "hudIconInfo" in l && t(0, (o = l.hudIconInfo));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 1 &&
        t(
          1,
          (i = ((u) => {
            var a = u,
              { shape: l, isShowing: s } = a,
              f = Do(a, ["shape", "isShowing"]);
            return f;
          })(o))
        );
    }),
    [o, i]
  );
}
class nr extends ue {
  constructor(e) {
    super();
    fe(this, e, Ua, Ba, ce, { hudIconInfo: 0 });
  }
}
function Fi(n, e, t) {
  const o = n.slice();
  return (o[10] = e[t][0]), (o[11] = e[t][1]), o;
}
function Ei(n, e, t) {
  const o = n.slice();
  o[10] = e[t];
  const i = o[2].designMode
    ? o[4] == o[10]
      ? o[3].globalColorSettings.editSingleIconStage
      : 0
    : o[3].icons[o[10]].currentEffect;
  o[14] = i;
  const l = o[3].icons[o[10]].colorEffects[o[14]];
  o[15] = l;
  const s = o[5][o[10]];
  return (o[16] = s), o;
}
function Vi(n) {
  let e, t, o, i;
  return (
    (t = new nr({
      props: {
        hudIconInfo: Et(sn({}, n[2].icons[n[10]]), {
          progressColor: n[15].progressColor,
          progressContrast: n[15].progressContrast,
          progressDropShadowAmount: n[15].progressDropShadowAmount,
          progressValue: n[2].designMode
            ? n[2].designProgress
            : n[2].icons[n[10]].progressValue,
          iconColor: n[16] ? n[16].iconColor : n[15].iconColor,
          iconContrast: n[15].iconContrast,
          iconDropShadowAmount: n[15].iconDropShadowAmount,
          outlineColor: n[15].outlineColor,
          outlineContrast: n[15].outlineContrast,
          outlineDropShadowAmount: n[15].outlineDropShadowAmount,
          innerColor: n[15].innerColor,
        }),
      },
    })),
    {
      c() {
        (e = A("div")), P(t.$$.fragment), r(e, "class", "my-auto");
      },
      m(l, s) {
        H(l, e, s), B(t, e, null), (i = !0);
      },
      p(l, s) {
        const f = {};
        s & 61 &&
          (f.hudIconInfo = Et(sn({}, l[2].icons[l[10]]), {
            progressColor: l[15].progressColor,
            progressContrast: l[15].progressContrast,
            progressDropShadowAmount: l[15].progressDropShadowAmount,
            progressValue: l[2].designMode
              ? l[2].designProgress
              : l[2].icons[l[10]].progressValue,
            iconColor: l[16] ? l[16].iconColor : l[15].iconColor,
            iconContrast: l[15].iconContrast,
            iconDropShadowAmount: l[15].iconDropShadowAmount,
            outlineColor: l[15].outlineColor,
            outlineContrast: l[15].outlineContrast,
            outlineDropShadowAmount: l[15].outlineDropShadowAmount,
            innerColor: l[15].innerColor,
          })),
          t.$set(f);
      },
      i(l) {
        i ||
          (C(t.$$.fragment, l),
          l &&
            Mt(() => {
              o || (o = Yn(e, qn, { duration: 1e3 }, !0)), o.run(1);
            }),
          (i = !0));
      },
      o(l) {
        T(t.$$.fragment, l),
          l && (o || (o = Yn(e, qn, { duration: 1e3 }, !1)), o.run(0)),
          (i = !1);
      },
      d(l) {
        l && E(e), U(t), l && o && o.end();
      },
    }
  );
}
function Hi(n) {
  let e =
      (n[2].icons[n[10]].isShowing && !n[1].includes(n[10])) || n[2].designMode,
    t,
    o,
    i = e && Vi(n);
  return {
    c() {
      i && i.c(), (t = dn());
    },
    m(l, s) {
      i && i.m(l, s), H(l, t, s), (o = !0);
    },
    p(l, s) {
      s & 7 &&
        (e =
          (l[2].icons[l[10]].isShowing && !l[1].includes(l[10])) ||
          l[2].designMode),
        e
          ? i
            ? (i.p(l, s), s & 7 && C(i, 1))
            : ((i = Vi(l)), i.c(), C(i, 1), i.m(t.parentNode, t))
          : i &&
            (he(),
            T(i, 1, 1, () => {
              i = null;
            }),
            ge());
    },
    i(l) {
      o || (C(i), (o = !0));
    },
    o(l) {
      T(i), (o = !1);
    },
    d(l) {
      i && i.d(l), l && E(t);
    },
  };
}
function Ri(n) {
  let e,
    t,
    o,
    i,
    l = (n[11].isShowing || n[2].designMode) && Pi(n);
  return {
    c() {
      (e = A("div")), l && l.c(), (t = y()), r(e, "class", "my-auto");
    },
    m(s, f) {
      H(s, e, f), l && l.m(e, null), m(e, t), (i = !0);
    },
    p(s, f) {
      s[11].isShowing || s[2].designMode
        ? l
          ? (l.p(s, f), f & 36 && C(l, 1))
          : ((l = Pi(s)), l.c(), C(l, 1), l.m(e, t))
        : l &&
          (he(),
          T(l, 1, 1, () => {
            l = null;
          }),
          ge());
    },
    i(s) {
      i ||
        (C(l),
        s &&
          Mt(() => {
            o || (o = Yn(e, qn, { duration: 1e3 }, !0)), o.run(1);
          }),
        (i = !0));
    },
    o(s) {
      T(l),
        s && (o || (o = Yn(e, qn, { duration: 1e3 }, !1)), o.run(0)),
        (i = !1);
    },
    d(s) {
      s && E(e), l && l.d(), s && o && o.end();
    },
  };
}
function Pi(n) {
  let e, t;
  return (
    (e = new nr({ props: { hudIconInfo: n[11] } })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(o, i) {
        B(e, o, i), (t = !0);
      },
      p(o, i) {
        const l = {};
        i & 32 && (l.hudIconInfo = o[11]), e.$set(l);
      },
      i(o) {
        t || (C(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        T(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        U(e, o);
      },
    }
  );
}
function Bi(n, e) {
  let t,
    o,
    i,
    l = e[11].name && Ri(e);
  return {
    key: n,
    first: null,
    c() {
      (t = dn()), l && l.c(), (o = dn()), (this.first = t);
    },
    m(s, f) {
      H(s, t, f), l && l.m(s, f), H(s, o, f), (i = !0);
    },
    p(s, f) {
      (e = s),
        e[11].name
          ? l
            ? (l.p(e, f), f & 32 && C(l, 1))
            : ((l = Ri(e)), l.c(), C(l, 1), l.m(o.parentNode, o))
          : l &&
            (he(),
            T(l, 1, 1, () => {
              l = null;
            }),
            ge());
    },
    i(s) {
      i || (C(l), (i = !0));
    },
    o(s) {
      T(l), (i = !1);
    },
    d(s) {
      s && E(t), l && l.d(s), s && E(o);
    },
  };
}
function za(n) {
  let e,
    t = [],
    o = new Map(),
    i,
    l,
    s = n[0].length ? n[0] : n[6],
    f = [];
  for (let d = 0; d < s.length; d += 1) f[d] = Hi(Ei(n, s, d));
  const u = (d) =>
    T(f[d], 1, 1, () => {
      f[d] = null;
    });
  let a = Object.entries(n[5]);
  const c = (d) => d[10];
  for (let d = 0; d < a.length; d += 1) {
    let h = Fi(n, a, d),
      _ = c(h);
    o.set(_, (t[d] = Bi(_, h)));
  }
  return {
    c() {
      for (let d = 0; d < f.length; d += 1) f[d].c();
      e = y();
      for (let d = 0; d < t.length; d += 1) t[d].c();
      i = dn();
    },
    m(d, h) {
      for (let _ = 0; _ < f.length; _ += 1) f[_].m(d, h);
      H(d, e, h);
      for (let _ = 0; _ < t.length; _ += 1) t[_].m(d, h);
      H(d, i, h), (l = !0);
    },
    p(d, [h]) {
      if (h & 127) {
        s = d[0].length ? d[0] : d[6];
        let _;
        for (_ = 0; _ < s.length; _ += 1) {
          const k = Ei(d, s, _);
          f[_]
            ? (f[_].p(k, h), C(f[_], 1))
            : ((f[_] = Hi(k)), f[_].c(), C(f[_], 1), f[_].m(e.parentNode, e));
        }
        for (he(), _ = s.length; _ < f.length; _ += 1) u(_);
        ge();
      }
      h & 36 &&
        ((a = Object.entries(d[5])),
        he(),
        (t = Mr(t, h, c, 1, d, a, o, i.parentNode, Yr, Bi, i, Fi)),
        ge());
    },
    i(d) {
      if (!l) {
        for (let h = 0; h < s.length; h += 1) C(f[h]);
        for (let h = 0; h < a.length; h += 1) C(t[h]);
        l = !0;
      }
    },
    o(d) {
      f = f.filter(Boolean);
      for (let h = 0; h < f.length; h += 1) T(f[h]);
      for (let h = 0; h < t.length; h += 1) T(t[h]);
      l = !1;
    },
    d(d) {
      so(f, d), d && E(e);
      for (let h = 0; h < t.length; h += 1) t[h].d(d);
      d && E(i);
    },
  };
}
function La(n, e, t) {
  let o, i, l, s;
  de(n, ne, (_) => t(2, (i = _))),
    de(n, re, (_) => t(3, (l = _))),
    de(n, ti, (_) => t(5, (s = _)));
  let { isReversed: f = !1 } = e,
    { iconsToShow: u = [] } = e,
    { iconsToNotShow: a = [] } = e,
    { options: c = {} } = e,
    { optionsForAll: d = {} } = e,
    h = i.showingOrder;
  return (
    (n.$$set = (_) => {
      "isReversed" in _ && t(7, (f = _.isReversed)),
        "iconsToShow" in _ && t(0, (u = _.iconsToShow)),
        "iconsToNotShow" in _ && t(1, (a = _.iconsToNotShow)),
        "options" in _ && t(8, (c = _.options)),
        "optionsForAll" in _ && t(9, (d = _.optionsForAll));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 8 && t(4, (o = l.globalColorSettings.editSingleIconName)),
        n.$$.dirty & 132)
      ) {
        let _ = i.showingOrder;
        f && (_ = _.reverse());
      }
    }),
    [u, a, i, l, o, s, h, f, c, d]
  );
}
class ao extends ue {
  constructor(e) {
    super();
    fe(this, e, La, za, ce, {
      isReversed: 7,
      iconsToShow: 0,
      iconsToNotShow: 1,
      options: 8,
      optionsForAll: 9,
    });
  }
}
function Ui(n) {
  let e, t, o, i;
  const l = [Za, Ja, Wa, Ga, ja, Na, qa],
    s = [];
  function f(u, a) {
    return u[1] == "center-bottom-row"
      ? 0
      : u[1] == "bottom-right-row"
      ? 1
      : u[1] == "left-bottom-column"
      ? 2
      : u[1] == "right-bottom-column"
      ? 3
      : u[1] == "top-left-row"
      ? 4
      : u[1] == "top-right-row"
      ? 5
      : u[1] == "standard"
      ? 6
      : -1;
  }
  return (
    ~(e = f(n)) && (t = s[e] = l[e](n)),
    {
      c() {
        t && t.c(), (o = dn());
      },
      m(u, a) {
        ~e && s[e].m(u, a), H(u, o, a), (i = !0);
      },
      p(u, a) {
        let c = e;
        (e = f(u)),
          e === c
            ? ~e && s[e].p(u, a)
            : (t &&
                (he(),
                T(s[c], 1, 1, () => {
                  s[c] = null;
                }),
                ge()),
              ~e
                ? ((t = s[e]),
                  t ? t.p(u, a) : ((t = s[e] = l[e](u)), t.c()),
                  C(t, 1),
                  t.m(o.parentNode, o))
                : (t = null));
      },
      i(u) {
        i || (C(t), (i = !0));
      },
      o(u) {
        T(t), (i = !1);
      },
      d(u) {
        ~e && s[e].d(u), u && E(o);
      },
    }
  );
}
function qa(n) {
  let e, t, o;
  return (
    (t = new ao({})),
    {
      c() {
        (e = A("div")),
          P(t.$$.fragment),
          r(
            e,
            "class",
            "absolute bottom-[0.3vw] left-[0.3vw] flex flex-row standard-layout svelte-1w35tm2"
          ),
          R(e, "gap", n[0].iconBetweenSpacing + "px"),
          R(e, "margin-bottom", n[0].yAxisSpacing + "px"),
          R(e, "margin-left", n[0].xAxisSpacing + "px");
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p(i, l) {
        (!o || l & 1) && R(e, "gap", i[0].iconBetweenSpacing + "px"),
          (!o || l & 1) && R(e, "margin-bottom", i[0].yAxisSpacing + "px"),
          (!o || l & 1) && R(e, "margin-left", i[0].xAxisSpacing + "px");
      },
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function Na(n) {
  let e, t, o;
  return (
    (t = new ao({})),
    {
      c() {
        (e = A("div")),
          P(t.$$.fragment),
          r(e, "class", "absolute top-[0.3vw] right-[0.3vw] flex flex-row"),
          R(e, "gap", n[0].iconBetweenSpacing + "px"),
          R(e, "margin-bottom", n[0].yAxisSpacing + "px"),
          R(e, "margin-left", n[0].xAxisSpacing + "px");
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p(i, l) {
        (!o || l & 1) && R(e, "gap", i[0].iconBetweenSpacing + "px"),
          (!o || l & 1) && R(e, "margin-bottom", i[0].yAxisSpacing + "px"),
          (!o || l & 1) && R(e, "margin-left", i[0].xAxisSpacing + "px");
      },
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function ja(n) {
  let e, t, o;
  return (
    (t = new ao({})),
    {
      c() {
        (e = A("div")),
          P(t.$$.fragment),
          r(e, "class", "absolute top-[0.3vw] left-[0.3vw] flex flex-row"),
          R(e, "gap", n[0].iconBetweenSpacing + "px"),
          R(e, "margin-bottom", n[0].yAxisSpacing + "px"),
          R(e, "margin-left", n[0].xAxisSpacing + "px");
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p(i, l) {
        (!o || l & 1) && R(e, "gap", i[0].iconBetweenSpacing + "px"),
          (!o || l & 1) && R(e, "margin-bottom", i[0].yAxisSpacing + "px"),
          (!o || l & 1) && R(e, "margin-left", i[0].xAxisSpacing + "px");
      },
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function Ga(n) {
  let e, t, o, i;
  return (
    (o = new ao({})),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          P(o.$$.fragment),
          r(t, "class", "static flex flex-col"),
          R(t, "gap", n[0].iconBetweenSpacing + "px"),
          R(t, "margin-bottom", n[0].yAxisSpacing + "px"),
          R(t, "margin-left", n[0].xAxisSpacing + "px"),
          r(e, "class", "absolute bottom-[0.3vw] right-[1vh]");
      },
      m(l, s) {
        H(l, e, s), m(e, t), B(o, t, null), (i = !0);
      },
      p(l, s) {
        (!i || s & 1) && R(t, "gap", l[0].iconBetweenSpacing + "px"),
          (!i || s & 1) && R(t, "margin-bottom", l[0].yAxisSpacing + "px"),
          (!i || s & 1) && R(t, "margin-left", l[0].xAxisSpacing + "px");
      },
      i(l) {
        i || (C(o.$$.fragment, l), (i = !0));
      },
      o(l) {
        T(o.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && E(e), U(o);
      },
    }
  );
}
function Wa(n) {
  let e, t, o, i;
  return (
    (o = new ao({})),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          P(o.$$.fragment),
          r(t, "class", "static flex flex-col"),
          R(t, "gap", n[0].iconBetweenSpacing + "px"),
          R(t, "margin-bottom", n[0].yAxisSpacing + "px"),
          R(t, "margin-left", n[0].xAxisSpacing + "px"),
          r(e, "class", "absolute bottom-[0.3vw] left-[1vh]");
      },
      m(l, s) {
        H(l, e, s), m(e, t), B(o, t, null), (i = !0);
      },
      p(l, s) {
        (!i || s & 1) && R(t, "gap", l[0].iconBetweenSpacing + "px"),
          (!i || s & 1) && R(t, "margin-bottom", l[0].yAxisSpacing + "px"),
          (!i || s & 1) && R(t, "margin-left", l[0].xAxisSpacing + "px");
      },
      i(l) {
        i || (C(o.$$.fragment, l), (i = !0));
      },
      o(l) {
        T(o.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && E(e), U(o);
      },
    }
  );
}
function Ja(n) {
  let e, t, o;
  return (
    (t = new ao({})),
    {
      c() {
        (e = A("div")),
          P(t.$$.fragment),
          r(e, "class", "absolute bottom-[0.3vw] right-[0.3vw] flex flex-row"),
          R(e, "gap", n[0].iconBetweenSpacing + "px"),
          R(e, "margin-bottom", n[0].yAxisSpacing + "px"),
          R(e, "margin-left", n[0].xAxisSpacing + "px");
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p(i, l) {
        (!o || l & 1) && R(e, "gap", i[0].iconBetweenSpacing + "px"),
          (!o || l & 1) && R(e, "margin-bottom", i[0].yAxisSpacing + "px"),
          (!o || l & 1) && R(e, "margin-left", i[0].xAxisSpacing + "px");
      },
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function Za(n) {
  let e, t, o, i, l;
  return (
    (i = new ao({})),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          (o = A("div")),
          P(i.$$.fragment),
          r(o, "class", "flex flex-row"),
          R(o, "gap", n[0].iconBetweenSpacing + "px"),
          R(o, "margin-bottom", n[0].yAxisSpacing + "px"),
          R(o, "margin-left", n[0].xAxisSpacing + "px"),
          r(t, "class", "static flex flex-row mx-auto"),
          R(t, "width", "max-content"),
          r(e, "class", "absolute bottom-[0.3vw] w-100vw");
      },
      m(s, f) {
        H(s, e, f), m(e, t), m(t, o), B(i, o, null), (l = !0);
      },
      p(s, f) {
        (!l || f & 1) && R(o, "gap", s[0].iconBetweenSpacing + "px"),
          (!l || f & 1) && R(o, "margin-bottom", s[0].yAxisSpacing + "px"),
          (!l || f & 1) && R(o, "margin-left", s[0].xAxisSpacing + "px");
      },
      i(s) {
        l || (C(i.$$.fragment, s), (l = !0));
      },
      o(s) {
        T(i.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && E(e), U(i);
      },
    }
  );
}
function Ka(n) {
  let e,
    t,
    o = (n[2].show || An) && Ui(n);
  return {
    c() {
      o && o.c(), (e = dn());
    },
    m(i, l) {
      o && o.m(i, l), H(i, e, l), (t = !0);
    },
    p(i, [l]) {
      i[2].show || An
        ? o
          ? (o.p(i, l), l & 4 && C(o, 1))
          : ((o = Ui(i)), o.c(), C(o, 1), o.m(e.parentNode, e))
        : o &&
          (he(),
          T(o, 1, 1, () => {
            o = null;
          }),
          ge());
    },
    i(i) {
      t || (C(o), (t = !0));
    },
    o(i) {
      T(o), (t = !1);
    },
    d(i) {
      o && o.d(i), i && E(e);
    },
  };
}
function Qa(n, e, t) {
  let o, i;
  de(n, ft, (s) => t(0, (o = s))), de(n, ne, (s) => t(2, (i = s)));
  let l = "standard";
  return (
    (n.$$.update = () => {
      n.$$.dirty & 1 && t(1, (l = o.layout));
    }),
    [o, l, i]
  );
}
class xa extends ue {
  constructor(e) {
    super();
    fe(this, e, Qa, Ka, ce, {});
  }
}
function $a(n) {
  let e,
    t,
    o = (n[2] && n[3] ? n[3] : n[0]) + "",
    i,
    l,
    s,
    f;
  return {
    c() {
      (e = A("button")),
        (t = A("span")),
        (i = be(o)),
        r(t, "class", "text-black py-3 font-bold"),
        R(e, "backdrop-filter", "drop-shadow(4px 4px 4px gray)"),
        r(
          e,
          "class",
          (l =
            "button bg-[var(--ps-hud-primary)] text-sm text-white py-2 px-4 my-2 rounded w-[150px] uppercase select-none disabled:opacity-25 disabled:cursor-not-allowed " +
            n[1])
        ),
        (e.disabled = n[2]);
    },
    m(u, a) {
      H(u, e, a), m(e, t), m(t, i), s || ((f = Ke(e, "click", n[4])), (s = !0));
    },
    p(u, [a]) {
      a & 13 && o !== (o = (u[2] && u[3] ? u[3] : u[0]) + "") && un(i, o),
        a & 2 &&
          l !==
            (l =
              "button bg-[var(--ps-hud-primary)] text-sm text-white py-2 px-4 my-2 rounded w-[150px] uppercase select-none disabled:opacity-25 disabled:cursor-not-allowed " +
              u[1]) &&
          r(e, "class", l),
        a & 4 && (e.disabled = u[2]);
    },
    i: Te,
    o: Te,
    d(u) {
      u && E(e), (s = !1), f();
    },
  };
}
function eu(n, e, t) {
  let { name: o = "" } = e,
    { buttonClass: i = "" } = e,
    { disable: l = !1 } = e,
    { disableText: s = "" } = e;
  function f(u) {
    Xr.call(this, n, u);
  }
  return (
    (n.$$set = (u) => {
      "name" in u && t(0, (o = u.name)),
        "buttonClass" in u && t(1, (i = u.buttonClass)),
        "disable" in u && t(2, (l = u.disable)),
        "disableText" in u && t(3, (s = u.disableText));
    }),
    [o, i, l, s, f]
  );
}
class Ht extends ue {
  constructor(e) {
    super();
    fe(this, e, eu, $a, ce, {
      name: 0,
      buttonClass: 1,
      disable: 2,
      disableText: 3,
    });
  }
}
function nu(n) {
  let e, t;
  return {
    c() {
      (e = A("span")),
        (t = be(n[1])),
        r(e, "class", "primary-text svelte-18ttrkn");
    },
    m(o, i) {
      H(o, e, i), m(e, t);
    },
    p(o, i) {
      i & 2 && un(t, o[1]);
    },
    d(o) {
      o && E(e);
    },
  };
}
function tu(n) {
  let e, t, o, i, l, s;
  return {
    c() {
      (e = A("div")),
        (t = A("span")),
        (o = be(n[1])),
        (i = y()),
        (l = A("span")),
        (s = be(n[2])),
        r(t, "class", "primary-text mb-1 svelte-18ttrkn"),
        r(l, "class", "secondary-text svelte-18ttrkn"),
        r(e, "class", "flex flex-col");
    },
    m(f, u) {
      H(f, e, u), m(e, t), m(t, o), m(e, i), m(e, l), m(l, s);
    },
    p(f, u) {
      u & 2 && un(o, f[1]), u & 4 && un(s, f[2]);
    },
    d(f) {
      f && E(e);
    },
  };
}
function ou(n) {
  let e, t, o, i, l, s;
  function f(c, d) {
    return c[2] ? tu : nu;
  }
  let u = f(n),
    a = u(n);
  return {
    c() {
      (e = A("label")),
        (t = A("input")),
        (o = y()),
        a.c(),
        r(t, "class", "cursor-pointer svelte-18ttrkn"),
        r(t, "type", "checkbox"),
        r(t, "name", "checkbox"),
        r(
          e,
          "class",
          (i =
            "flex flex-row gap-4 py-3 cursor-pointer select-none " +
            (n[2] ? "items-center" : ""))
        );
    },
    m(c, d) {
      H(c, e, d),
        m(e, t),
        (t.checked = n[0]),
        m(e, o),
        a.m(e, null),
        l || ((s = [Ke(t, "change", n[5]), Ke(t, "click", n[3])]), (l = !0));
    },
    p(c, [d]) {
      d & 1 && (t.checked = c[0]),
        u === (u = f(c)) && a
          ? a.p(c, d)
          : (a.d(1), (a = u(c)), a && (a.c(), a.m(e, null))),
        d & 4 &&
          i !==
            (i =
              "flex flex-row gap-4 py-3 cursor-pointer select-none " +
              (c[2] ? "items-center" : "")) &&
          r(e, "class", i);
    },
    i: Te,
    o: Te,
    d(c) {
      c && E(e), a.d(), (l = !1), Ro(s);
    },
  };
}
function iu(n, e, t) {
  let { primaryText: o = "" } = e,
    { secondaryText: i = "" } = e,
    { checked: l } = e,
    { handleUpdateFunction: s = null } = e;
  function f(a) {
    s && s(a.target.checked);
  }
  function u() {
    (l = this.checked), t(0, l);
  }
  return (
    (n.$$set = (a) => {
      "primaryText" in a && t(1, (o = a.primaryText)),
        "secondaryText" in a && t(2, (i = a.secondaryText)),
        "checked" in a && t(0, (l = a.checked)),
        "handleUpdateFunction" in a && t(4, (s = a.handleUpdateFunction));
    }),
    [l, o, i, f, s, u]
  );
}
class Ze extends ue {
  constructor(e) {
    super();
    fe(this, e, iu, ou, ce, {
      primaryText: 1,
      secondaryText: 2,
      checked: 0,
      handleUpdateFunction: 4,
    });
  }
}
function lu(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h, _, k, b, w, g, S;
  return {
    c() {
      (e = O("svg")),
        (t = O("style")),
        (o = be(`.st0 {
  fill: #02EFB3;
}
.st1 {
  fill: #FFFFFF;
}`)),
        (i = O("g")),
        (l = O("path")),
        (s = O("path")),
        (f = O("path")),
        (u = O("path")),
        (a = O("path")),
        (c = O("path")),
        (d = O("path")),
        (h = O("path")),
        (_ = O("path")),
        (k = O("path")),
        (b = O("path")),
        (w = O("path")),
        (g = O("path")),
        (S = O("path")),
        r(t, "type", "text/css"),
        r(l, "class", "st0"),
        r(
          l,
          "d",
          `M2.93,7.44c-0.05-3.29,2.79-6.17,6.2-6.12c3.31,0.05,6.04,2.79,6.04,6.16c0,3.34-2.79,6.09-6.18,6.08
		C5.54,13.55,2.85,10.57,2.93,7.44z M4.09,7.05c0,0.07,0.01,0.17,0.02,0.27C4.11,7.4,4.13,7.49,4.15,7.58
		C4.24,7.96,4.3,7.98,4.59,7.72c0.41-0.38,0.89-0.59,1.43-0.65c0.34-0.03,0.7-0.01,0.97,0.23C7.15,7.44,7.3,7.63,7.23,7.87
		C7.16,8.11,6.92,8.11,6.71,8.14C6.09,8.22,5.52,8.42,5.02,8.81C4.92,8.9,4.9,8.95,5,9.06c0.37,0.4,0.74,0.78,1.17,1.12
		c0.85,0.68,1.78,1.25,2.7,1.81c0.14,0.08,0.25,0.06,0.37-0.02c0.51-0.32,1.02-0.63,1.52-0.96c0.85-0.56,1.65-1.17,2.31-1.95
		c0.09-0.11,0.09-0.16-0.02-0.25c-0.43-0.34-0.92-0.54-1.45-0.63c-0.17-0.03-0.35-0.05-0.52-0.09c-0.16-0.04-0.27-0.15-0.26-0.34
		c0.02-0.22,0.26-0.52,0.47-0.59c0.41-0.13,0.82-0.14,1.23,0c0.41,0.13,0.75,0.36,1.07,0.64c0.17,0.15,0.23,0.13,0.29-0.09
		c0.12-0.39,0.15-0.79,0.05-1.18c-0.18-0.67-0.5-1.24-1.23-1.46C12.39,4.99,12.07,4.96,11.74,5C10.8,5.11,9.99,5.52,9.26,6.1
		c-0.17,0.14-0.27,0.14-0.44,0C8.09,5.52,7.28,5.1,6.34,5.01c-0.61-0.06-1.21,0-1.66,0.5C4.3,5.93,4.09,6.43,4.09,7.05z`
        ),
        r(s, "class", "st1"),
        r(
          s,
          "d",
          `M31.52,7.55c0.01,0.39-0.03,0.77-0.19,1.13c-0.42,0.94-1.19,1.34-2.18,1.35c-1.37,0.02-2.3-0.83-2.4-2.2
		c-0.05-0.76,0.06-1.5,0.63-2.06c0.77-0.76,1.7-0.86,2.68-0.53c0.94,0.32,1.38,1.05,1.46,2.01C31.52,7.34,31.52,7.45,31.52,7.55z
		 M30.31,7.56c0-0.25-0.02-0.5-0.1-0.74c-0.16-0.49-0.55-0.78-1.06-0.79c-0.52-0.01-0.91,0.26-1.08,0.75
		c-0.17,0.49-0.17,0.98-0.03,1.47c0.15,0.54,0.56,0.82,1.11,0.82c0.53-0.01,0.91-0.32,1.07-0.85C30.29,8,30.31,7.78,30.31,7.56z`
        ),
        r(f, "class", "st1"),
        r(
          f,
          "d",
          `M60.76,7.6c0,0.34-0.04,0.72-0.2,1.08c-0.41,0.94-1.18,1.33-2.16,1.35c-1.41,0.03-2.37-0.88-2.43-2.28
		C55.95,7.24,56,6.76,56.22,6.3c0.43-0.87,1.39-1.35,2.42-1.22C60,5.24,60.76,6.13,60.76,7.6z M59.54,7.57
		c0-0.26-0.02-0.53-0.11-0.78c-0.17-0.48-0.55-0.76-1.05-0.77c-0.52-0.01-0.91,0.26-1.08,0.75c-0.17,0.48-0.16,0.97-0.03,1.45
		c0.15,0.54,0.56,0.83,1.1,0.83c0.54,0,0.93-0.31,1.09-0.85C59.52,8,59.54,7.79,59.54,7.57z`
        ),
        r(u, "class", "st1"),
        r(
          u,
          "d",
          `M22.55,7.54c0-0.61,0-1.23,0-1.84c0-0.28,0.05-0.37,0.31-0.45c0.78-0.23,1.57-0.26,2.35-0.02
		c0.59,0.18,0.95,0.59,1.04,1.22c0.09,0.66-0.15,1.18-0.71,1.53c-0.13,0.08-0.14,0.12-0.05,0.24c0.29,0.36,0.56,0.74,0.85,1.1
		c0.09,0.12,0.08,0.21,0,0.33c-0.23,0.34-0.75,0.41-1.05,0.13c-0.18-0.16-0.29-0.37-0.42-0.57c-0.16-0.24-0.32-0.48-0.47-0.73
		c-0.08-0.14-0.18-0.19-0.34-0.18c-0.34,0.01-0.34,0-0.34,0.35c0,0.36-0.01,0.71,0,1.07c0,0.12-0.03,0.17-0.15,0.18
		c-0.18,0.01-0.36,0.05-0.54,0.02c-0.36-0.05-0.48-0.17-0.49-0.54C22.55,8.79,22.55,8.16,22.55,7.54z M23.72,6.74
		c0,0.18,0,0.36,0,0.55c0,0.07,0,0.12,0.09,0.12c0.27-0.01,0.54,0.03,0.8-0.06C24.95,7.23,25.1,7,25.07,6.65
		c-0.02-0.3-0.21-0.5-0.53-0.57c-0.21-0.05-0.43-0.04-0.64-0.03c-0.15,0.01-0.2,0.07-0.18,0.21C23.73,6.42,23.72,6.58,23.72,6.74z`
        ),
        r(a, "class", "st1"),
        r(
          a,
          "d",
          `M65.33,7.38c0-0.67,0-1.35,0-2.02c0-0.12,0.02-0.18,0.16-0.2c0.18-0.02,0.35-0.03,0.52-0.03
		c0.35,0.02,0.49,0.16,0.5,0.5c0.01,0.42,0.01,0.84,0,1.25c0,0.14,0.03,0.19,0.18,0.18c0.45-0.01,0.9-0.01,1.36,0
		c0.14,0,0.18-0.03,0.18-0.18c-0.01-0.52,0-1.04-0.01-1.56c0-0.12,0.03-0.16,0.15-0.18c0.2-0.03,0.4-0.04,0.6-0.02
		c0.27,0.03,0.39,0.16,0.43,0.43c0.01,0.07,0.01,0.15,0.01,0.22c0,1.3,0,2.6,0,3.91c0,0.16-0.04,0.22-0.2,0.22
		c-0.17,0.01-0.34,0.04-0.5,0.02c-0.36-0.05-0.48-0.17-0.49-0.54c-0.01-0.4-0.01-0.8,0-1.19c0-0.15-0.02-0.21-0.19-0.2
		c-0.45,0.01-0.9,0.01-1.36,0c-0.13,0-0.17,0.03-0.17,0.17c0.01,0.52,0,1.04,0.01,1.56c0,0.13-0.04,0.18-0.16,0.19
		c-0.19,0.01-0.37,0.05-0.56,0.02c-0.32-0.05-0.45-0.18-0.45-0.51c-0.01-0.41,0-0.82,0-1.23C65.33,7.92,65.33,7.65,65.33,7.38z`
        ),
        r(c, "class", "st1"),
        r(
          c,
          "d",
          `M34.95,7.56c0-0.57,0-1.13,0-1.7c0-0.43,0.22-0.65,0.64-0.65c0.8,0,1.6,0,2.41,0c0.12,0,0.17,0.04,0.2,0.15
		c0.04,0.12,0.06,0.24,0.05,0.36c-0.02,0.3-0.15,0.42-0.45,0.43c-0.51,0-1.01,0.01-1.52,0c-0.15,0-0.2,0.03-0.19,0.19
		c0.01,0.19,0.01,0.38,0,0.57c-0.01,0.13,0.04,0.16,0.16,0.15c0.51-0.01,1.01,0,1.52-0.01c0.13,0,0.18,0.05,0.22,0.16
		c0.04,0.12,0.05,0.24,0.05,0.36c-0.02,0.28-0.16,0.42-0.44,0.42c-0.44,0-0.89,0.01-1.34,0c-0.13,0-0.18,0.03-0.17,0.17
		c0.01,0.22,0.01,0.45,0,0.67c-0.01,0.15,0.05,0.18,0.18,0.18c0.58-0.01,1.16,0,1.74-0.01c0.13,0,0.19,0.05,0.23,0.17
		c0.04,0.14,0.07,0.29,0.04,0.44c-0.04,0.21-0.16,0.33-0.37,0.33c-0.8,0.01-1.6,0.01-2.41,0c-0.34-0.01-0.55-0.25-0.55-0.6
		C34.95,8.72,34.96,8.14,34.95,7.56z`
        ),
        r(d, "class", "st1"),
        r(
          d,
          "d",
          `M19.46,9.15c0,0.21,0,0.42,0,0.63c0,0.08-0.02,0.13-0.1,0.14c-0.21,0.02-0.41,0.06-0.62,0.02
		c-0.32-0.05-0.45-0.18-0.45-0.51c-0.01-0.51,0-1.02,0-1.54c0-0.72,0-1.44,0-2.16c0-0.3,0.06-0.4,0.35-0.48
		c0.72-0.2,1.45-0.24,2.17-0.03c0.78,0.22,1.18,0.8,1.16,1.59c-0.02,0.74-0.49,1.3-1.25,1.5c-0.36,0.09-0.73,0.09-1.1,0.08
		c-0.13,0-0.16,0.03-0.16,0.16C19.46,8.74,19.46,8.95,19.46,9.15z M19.45,6.75c0,0.2,0,0.39,0,0.59c0,0.06-0.01,0.12,0.09,0.12
		c0.25-0.01,0.51,0.03,0.76-0.06c0.31-0.1,0.48-0.36,0.46-0.7c-0.01-0.34-0.19-0.55-0.52-0.63c-0.22-0.05-0.44-0.04-0.66-0.02
		c-0.11,0.01-0.13,0.05-0.13,0.15C19.46,6.39,19.45,6.57,19.45,6.75z`
        ),
        r(h, "class", "st1"),
        r(
          h,
          "d",
          `M50.13,10.03c-0.33-0.01-0.66-0.03-0.98-0.14c-0.18-0.06-0.35-0.15-0.49-0.28c-0.29-0.28-0.24-0.71,0.11-0.93
		c0.09-0.05,0.13-0.02,0.19,0.03C49.4,9,49.87,9.13,50.4,9.04c0.09-0.02,0.17-0.04,0.24-0.09c0.3-0.19,0.3-0.57,0-0.76
		c-0.2-0.12-0.42-0.17-0.64-0.24c-0.28-0.09-0.56-0.2-0.82-0.33c-0.89-0.46-0.95-1.68-0.11-2.23c0.48-0.31,1.01-0.34,1.56-0.3
		c0.33,0.02,0.66,0.08,0.94,0.26c0.33,0.22,0.38,0.59,0.11,0.89c-0.07,0.08-0.13,0.1-0.24,0.04c-0.41-0.22-0.85-0.28-1.31-0.21
		c-0.12,0.02-0.22,0.06-0.31,0.14c-0.18,0.16-0.16,0.4,0.03,0.53c0.17,0.12,0.37,0.16,0.56,0.22c0.36,0.11,0.7,0.23,1.02,0.43
		c0.49,0.31,0.69,0.76,0.64,1.32c-0.05,0.54-0.37,0.9-0.85,1.12C50.88,9.99,50.5,10.02,50.13,10.03z`
        ),
        r(_, "class", "st1"),
        r(
          _,
          "d",
          `M41.06,10.03c-0.24-0.01-0.54-0.04-0.83-0.13C39.35,9.61,38.84,9,38.72,8.09C38.59,7.2,38.7,6.36,39.39,5.7
		c0.65-0.64,1.91-0.83,2.72-0.42c0.47,0.24,0.57,0.67,0.24,1c-0.08,0.07-0.13,0.08-0.22,0.02c-0.3-0.19-0.63-0.28-1-0.26
		c-0.57,0.03-0.98,0.34-1.15,0.89c-0.12,0.4-0.12,0.8-0.02,1.2c0.19,0.69,0.8,1.05,1.57,0.94c0.22-0.03,0.43-0.11,0.62-0.22
		c0.12-0.07,0.19-0.04,0.27,0.06c0.24,0.32,0.16,0.72-0.2,0.91C41.88,9.98,41.51,10.03,41.06,10.03z`
        ),
        r(k, "class", "st1"),
        r(
          k,
          "d",
          `M45.42,8.03c0,0.57-0.01,1.13,0,1.7c0,0.13-0.05,0.18-0.17,0.19c-0.17,0.01-0.35,0.04-0.52,0.02
		c-0.37-0.04-0.5-0.18-0.5-0.55c0-0.64,0-1.28,0-1.92c0-0.38-0.01-0.77,0-1.15c0-0.14-0.04-0.17-0.17-0.16
		c-0.31,0.01-0.62,0-0.93,0.01c-0.12,0-0.17-0.04-0.21-0.14c-0.05-0.16-0.06-0.32-0.04-0.48c0.04-0.22,0.18-0.32,0.44-0.32
		c0.78,0,1.55,0,2.33,0c0.3,0,0.59,0.01,0.89,0c0.11,0,0.16,0.04,0.19,0.13c0.04,0.14,0.07,0.27,0.06,0.42
		c-0.04,0.27-0.17,0.39-0.44,0.4c-0.24,0-0.49,0.01-0.73,0c-0.16-0.01-0.22,0.03-0.21,0.2C45.43,6.91,45.42,7.47,45.42,8.03z`
        ),
        r(b, "class", "st1"),
        r(
          b,
          "d",
          `M63.42,8.03c0,0.57,0,1.13,0,1.7c0,0.13-0.04,0.18-0.17,0.19c-0.17,0.01-0.35,0.04-0.52,0.02
		c-0.37-0.04-0.49-0.18-0.5-0.55c0-0.48,0-0.96,0-1.44c0-0.54-0.01-1.08,0-1.62c0-0.16-0.04-0.19-0.19-0.19
		c-0.3,0.01-0.61,0-0.91,0.01c-0.12,0-0.17-0.04-0.21-0.14c-0.04-0.12-0.06-0.25-0.05-0.38c0.02-0.3,0.15-0.42,0.45-0.43
		c0.74,0,1.47,0,2.21,0c0.34,0,0.67,0,1.01,0c0.11,0,0.16,0.04,0.19,0.13c0.05,0.14,0.06,0.28,0.05,0.42
		c-0.02,0.26-0.16,0.39-0.42,0.4c-0.27,0.01-0.54,0.01-0.81,0c-0.13-0.01-0.15,0.04-0.15,0.16C63.43,6.88,63.42,7.46,63.42,8.03z`
        ),
        r(w, "class", "st1"),
        r(
          w,
          "d",
          `M52.71,7.33c0-0.65,0.01-1.31,0-1.96c0-0.15,0.05-0.2,0.19-0.21c0.2-0.02,0.4-0.04,0.6-0.01
		c0.24,0.04,0.34,0.14,0.37,0.38c0.01,0.1,0.02,0.2,0.02,0.3c0,0.98,0,1.96,0,2.93c0,0.15,0.04,0.19,0.19,0.19
		c0.51-0.01,1.02,0,1.54-0.01c0.13,0,0.19,0.05,0.23,0.16c0.05,0.14,0.06,0.29,0.04,0.44c-0.03,0.23-0.16,0.36-0.39,0.36
		c-0.73,0.01-1.47,0.01-2.2,0c-0.37-0.01-0.58-0.24-0.58-0.64C52.71,8.62,52.71,7.98,52.71,7.33z`
        ),
        r(g, "class", "st1"),
        r(
          g,
          "d",
          `M32.9,6.91c0-0.52,0-1.04,0-1.56c0-0.11,0.02-0.17,0.15-0.18c0.19-0.02,0.38-0.04,0.56-0.03
		c0.33,0.03,0.46,0.17,0.47,0.51c0.01,0.78,0.01,1.56,0,2.35c0,0.32,0.03,0.65-0.04,0.97c-0.11,0.51-0.41,0.84-0.91,0.97
		c-0.37,0.1-0.75,0.1-1.11-0.03c-0.28-0.1-0.4-0.3-0.36-0.6c0.03-0.28,0.1-0.33,0.38-0.29c0.1,0.02,0.2,0.02,0.3,0.02
		c0.37-0.01,0.57-0.18,0.57-0.56C32.9,7.96,32.89,7.43,32.9,6.91C32.89,6.91,32.89,6.91,32.9,6.91z`
        ),
        r(S, "class", "st0"),
        r(
          S,
          "d",
          `M9.03,8.26c0.21,0,0.42,0,0.62,0.07C9.82,8.39,10,8.46,10.04,8.67c0.04,0.22-0.05,0.41-0.21,0.56
		c-0.14,0.13-0.31,0.18-0.5,0.2C9.24,9.45,9.17,9.48,9.18,9.58c0.01,0.1,0.09,0.1,0.17,0.09c0.39-0.04,0.77-0.15,1.15-0.22
		c0.06-0.01,0.12-0.02,0.18-0.04c0.06-0.01,0.13-0.05,0.16,0.02c0.03,0.07-0.05,0.1-0.1,0.13c-0.36,0.25-0.74,0.44-1.17,0.53
		c-0.85,0.18-1.6-0.07-2.29-0.55c-0.04-0.03-0.1-0.06-0.07-0.13c0.03-0.05,0.08-0.03,0.13-0.02C7.74,9.5,8.13,9.58,8.52,9.65
		c0.03,0.01,0.07,0.02,0.1,0.02c0.09,0,0.23,0.06,0.25-0.08c0.03-0.17-0.12-0.14-0.22-0.16C8.37,9.36,8.14,9.23,8.04,8.93
		C7.96,8.68,8.03,8.5,8.28,8.38C8.51,8.27,8.77,8.26,9.03,8.26z`
        ),
        r(e, "version", "1.1"),
        r(e, "id", "Layer_1"),
        r(e, "xmlns", "http://www.w3.org/2000/svg"),
        r(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        r(e, "x", "0px"),
        r(e, "y", "0px"),
        r(e, "viewBox", "0 0 72.33 14.89"),
        R(e, "enable-background", "new 0 0 72.33 14.89"),
        r(e, "xml:space", "preserve");
    },
    m(D, Y) {
      H(D, e, Y),
        m(e, t),
        m(t, o),
        m(e, i),
        m(i, l),
        m(i, s),
        m(i, f),
        m(i, u),
        m(i, a),
        m(i, c),
        m(i, d),
        m(i, h),
        m(i, _),
        m(i, k),
        m(i, b),
        m(i, w),
        m(i, g),
        m(i, S);
    },
    p: Te,
    i: Te,
    o: Te,
    d(D) {
      D && E(e);
    },
  };
}
class ru extends ue {
  constructor(e) {
    super();
    fe(this, e, null, lu, ce, {});
  }
}
function su(n) {
  let e, t;
  return {
    c() {
      (e = A("span")),
        (t = be(n[3])),
        r(e, "class", "primary-text svelte-c4h5cp");
    },
    m(o, i) {
      H(o, e, i), m(e, t);
    },
    p(o, i) {
      i & 8 && un(t, o[3]);
    },
    d(o) {
      o && E(e);
    },
  };
}
function au(n) {
  let e;
  function t(l, s) {
    return l[0] ? fu : uu;
  }
  let o = t(n),
    i = o(n);
  return {
    c() {
      i.c(), (e = dn());
    },
    m(l, s) {
      i.m(l, s), H(l, e, s);
    },
    p(l, s) {
      o === (o = t(l)) && i
        ? i.p(l, s)
        : (i.d(1), (i = o(l)), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(l) {
      i.d(l), l && E(e);
    },
  };
}
function uu(n) {
  let e, t;
  return {
    c() {
      (e = A("span")),
        (t = be(n[2])),
        r(e, "class", "primary-text svelte-c4h5cp");
    },
    m(o, i) {
      H(o, e, i), m(e, t);
    },
    p(o, i) {
      i & 4 && un(t, o[2]);
    },
    d(o) {
      o && E(e);
    },
  };
}
function fu(n) {
  let e, t;
  return {
    c() {
      (e = A("span")),
        (t = be(n[1])),
        r(e, "class", "primary-text svelte-c4h5cp");
    },
    m(o, i) {
      H(o, e, i), m(e, t);
    },
    p(o, i) {
      i & 2 && un(t, o[1]);
    },
    d(o) {
      o && E(e);
    },
  };
}
function cu(n) {
  let e, t, o, i, l, s;
  function f(c, d) {
    return c[1] && c[2] ? au : su;
  }
  let u = f(n),
    a = u(n);
  return {
    c() {
      (e = A("label")),
        (t = A("input")),
        (i = y()),
        a.c(),
        r(t, "class", "cursor-pointer svelte-c4h5cp"),
        r(t, "style", (o = n[4] ? "margin-left:auto; margin-right:auto;" : "")),
        r(t, "type", "checkbox"),
        r(t, "role", "switch"),
        r(
          e,
          "class",
          "switch cursor-pointer flex flex-row pt-2 pb-4 -ml-2 gap-1 select-none svelte-c4h5cp"
        );
    },
    m(c, d) {
      H(c, e, d),
        m(e, t),
        (t.checked = n[0]),
        m(e, i),
        a.m(e, null),
        l || ((s = [Ke(t, "change", n[7]), Ke(t, "click", n[5])]), (l = !0));
    },
    p(c, [d]) {
      d & 16 &&
        o !== (o = c[4] ? "margin-left:auto; margin-right:auto;" : "") &&
        r(t, "style", o),
        d & 1 && (t.checked = c[0]),
        u === (u = f(c)) && a
          ? a.p(c, d)
          : (a.d(1), (a = u(c)), a && (a.c(), a.m(e, null)));
    },
    i: Te,
    o: Te,
    d(c) {
      c && E(e), a.d(), (l = !1), Ro(s);
    },
  };
}
function hu(n, e, t) {
  let { checked: o = !0 } = e,
    { checkedText: i = "" } = e,
    { unCheckedText: l = "" } = e,
    { text: s = "" } = e,
    { center: f = !1 } = e,
    { handleUpdateFunction: u = null } = e;
  function a(d) {
    u && u(d.target.checked);
  }
  function c() {
    (o = this.checked), t(0, o);
  }
  return (
    (n.$$set = (d) => {
      "checked" in d && t(0, (o = d.checked)),
        "checkedText" in d && t(1, (i = d.checkedText)),
        "unCheckedText" in d && t(2, (l = d.unCheckedText)),
        "text" in d && t(3, (s = d.text)),
        "center" in d && t(4, (f = d.center)),
        "handleUpdateFunction" in d && t(6, (u = d.handleUpdateFunction));
    }),
    [o, i, l, s, f, a, u, c]
  );
}
class Jo extends ue {
  constructor(e) {
    super();
    fe(this, e, hu, cu, ce, {
      checked: 0,
      checkedText: 1,
      unCheckedText: 2,
      text: 3,
      center: 4,
      handleUpdateFunction: 6,
    });
  }
}
function gu(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S,
    D,
    Y,
    $,
    W,
    q,
    j,
    x,
    V,
    Q,
    M,
    X,
    p,
    z,
    J,
    v,
    ae,
    ee,
    K,
    I,
    ke,
    Ce,
    Ie,
    Xe,
    ve,
    Ne,
    Tn,
    je,
    Ee,
    se,
    Se,
    Ve,
    In,
    He,
    Re,
    yn,
    Pe,
    G,
    Nn,
    tn,
    jn,
    L,
    Ge,
    ct,
    ht,
    bn,
    pe,
    tt,
    Qe,
    pt,
    Gn,
    Xn,
    Wn,
    Jn,
    On,
    kn,
    De,
    Sn,
    Rn,
    Ct,
    Zn,
    Pn,
    Bn,
    vt,
    Be,
    on,
    Yt,
    Fn,
    gt,
    fn,
    dt,
    Un,
    ln,
    Dt,
    ot,
    cn,
    mt,
    Kn,
    an,
    Qn,
    At,
    it,
    Mn,
    _t,
    xn,
    Cn,
    hn,
    wt,
    zn,
    rn,
    Tt,
    lt,
    gn,
    bt,
    $n,
    Ln,
    rt,
    st,
    It,
    vn,
    En,
    Bt,
    kt,
    ye,
    Oe;
  (i = new ru({})),
    (u = new Ht({
      props: {
        name: "Reset Hud",
        buttonClass: "whitespace-nowrap hover:bg-red-600",
        disable: n[0].isRestarting,
        disableText: "Resetting Hud...",
      },
    })),
    u.$on("click", n[3]),
    (h = new Ht({
      props: { name: "Reset Settings", buttonClass: "hover:bg-red-600" },
    })),
    h.$on("click", n[4]);
  function at(N) {
    n[6](N);
  }
  let Xt = {
    primaryText: "Show Minimap Only in Vehicle",
    secondaryText:
      "Disabling this will always keep your minimap on your screen",
    handleUpdateFunction: n[5],
  };
  n[0].isOutMapChecked !== void 0 && (Xt.checked = n[0].isOutMapChecked),
    (q = new Ze({ props: Xt })),
    te.push(() => oe(q, "checked", at));
  function uo(N) {
    n[8](N);
  }
  let yt = {
    primaryText: "Show Compass Only in Vehicle",
    secondaryText:
      "Disabling this will always keep your compass on your screen",
    handleUpdateFunction: n[7],
  };
  n[0].isOutCompassChecked !== void 0 &&
    (yt.checked = n[0].isOutCompassChecked),
    (V = new Ze({ props: yt })),
    te.push(() => oe(V, "checked", uo));
  function To(N) {
    n[10](N);
  }
  let Ut = {
    primaryText: "Show Compass Follow Cam",
    secondaryText:
      "Disabling this will make it so you can no longer use your mouse to rotate the compass around",
    handleUpdateFunction: n[9],
  };
  n[0].isCompassFollowChecked !== void 0 &&
    (Ut.checked = n[0].isCompassFollowChecked),
    (X = new Ze({ props: Ut })),
    te.push(() => oe(X, "checked", To));
  function Io(N) {
    n[12](N);
  }
  let zt = {
    primaryText: "Menu Sound Effect Enabled",
    handleUpdateFunction: n[11],
  };
  n[0].isOpenMenuSoundsChecked !== void 0 &&
    (zt.checked = n[0].isOpenMenuSoundsChecked),
    (I = new Ze({ props: zt })),
    te.push(() => oe(I, "checked", Io));
  function yo(N) {
    n[14](N);
  }
  let Lt = {
    primaryText: "Reset Hud Sound Effects Enabled",
    handleUpdateFunction: n[13],
  };
  n[0].isResetSoundsChecked !== void 0 &&
    (Lt.checked = n[0].isResetSoundsChecked),
    (Ie = new Ze({ props: Lt })),
    te.push(() => oe(Ie, "checked", yo));
  function xe(N) {
    n[16](N);
  }
  let Ue = {
    primaryText: "GUI Sound Effects Enabled",
    handleUpdateFunction: n[15],
  };
  n[0].isListSoundsChecked !== void 0 &&
    (Ue.checked = n[0].isListSoundsChecked),
    (Ne = new Ze({ props: Ue })),
    te.push(() => oe(Ne, "checked", xe));
  function $e(N) {
    n[18](N);
  }
  let ze = {
    primaryText: "Map Notifications Enabled",
    handleUpdateFunction: n[17],
  };
  n[0].isMapNotifyChecked !== void 0 && (ze.checked = n[0].isMapNotifyChecked),
    (Ee = new Ze({ props: ze })),
    te.push(() => oe(Ee, "checked", $e));
  function Mo(N) {
    n[20](N);
  }
  let qt = {
    primaryText: "Low Fuel Alert Enabled",
    handleUpdateFunction: n[19],
  };
  n[0].isLowFuelAlertChecked !== void 0 &&
    (qt.checked = n[0].isLowFuelAlertChecked),
    (Ve = new Ze({ props: qt })),
    te.push(() => oe(Ve, "checked", Mo));
  function Yo(N) {
    n[22](N);
  }
  let Nt = {
    primaryText: "Cinematic Mode Notifications",
    handleUpdateFunction: n[21],
  };
  n[0].isCinematicNotifyChecked !== void 0 &&
    (Nt.checked = n[0].isCinematicNotifyChecked),
    (Re = new Ze({ props: Nt })),
    te.push(() => oe(Re, "checked", Yo));
  function Xo(N) {
    n[24](N);
  }
  let jt = { primaryText: "Show Health Always", handleUpdateFunction: n[23] };
  n[1].dynamicIcons.health !== void 0 &&
    (jt.checked = n[1].dynamicIcons.health),
    (Ge = new Ze({ props: jt })),
    te.push(() => oe(Ge, "checked", Xo));
  function Oo(N) {
    n[26](N);
  }
  let Gt = { primaryText: "Show Armor Always", handleUpdateFunction: n[25] };
  n[1].dynamicIcons.armor !== void 0 && (Gt.checked = n[1].dynamicIcons.armor),
    (bn = new Ze({ props: Gt })),
    te.push(() => oe(bn, "checked", Oo));
  function Fo(N) {
    n[28](N);
  }
  let Wt = { primaryText: "Show Hunger Always", handleUpdateFunction: n[27] };
  n[1].dynamicIcons.hunger !== void 0 &&
    (Wt.checked = n[1].dynamicIcons.hunger),
    (Qe = new Ze({ props: Wt })),
    te.push(() => oe(Qe, "checked", Fo));
  function en(N) {
    n[30](N);
  }
  let Le = { primaryText: "Show Thirst Always", handleUpdateFunction: n[29] };
  n[1].dynamicIcons.thirst !== void 0 &&
    (Le.checked = n[1].dynamicIcons.thirst),
    (Xn = new Ze({ props: Le })),
    te.push(() => oe(Xn, "checked", en));
  function _e(N) {
    n[32](N);
  }
  let Z = { primaryText: "Show Stress Always", handleUpdateFunction: n[31] };
  n[1].dynamicIcons.stress !== void 0 && (Z.checked = n[1].dynamicIcons.stress),
    (On = new Ze({ props: Z })),
    te.push(() => oe(On, "checked", _e));
  function me(N) {
    n[34](N);
  }
  let Qt = { primaryText: "Show Oxygen Always", handleUpdateFunction: n[33] };
  n[1].dynamicIcons.oxygen !== void 0 &&
    (Qt.checked = n[1].dynamicIcons.oxygen),
    (Sn = new Ze({ props: Qt })),
    te.push(() => oe(Sn, "checked", me)),
    (on = new Jo({
      props: {
        checked: n[0].isToggleMapShapeChecked == "circle",
        checkedText: "Minimap Circle",
        unCheckedText: "Minimap Square",
        handleUpdateFunction: n[35],
      },
    }));
  function xt(N) {
    n[37](N);
  }
  let $t = { primaryText: "Minimap Enabled", handleUpdateFunction: n[36] };
  n[0].isMapEnabledChecked !== void 0 &&
    ($t.checked = n[0].isMapEnabledChecked),
    (fn = new Ze({ props: $t })),
    te.push(() => oe(fn, "checked", xt));
  function eo(N) {
    n[39](N);
  }
  let no = {
    primaryText: "Minimap Borders Enabled",
    handleUpdateFunction: n[38],
  };
  n[0].isToggleMapBordersChecked !== void 0 &&
    (no.checked = n[0].isToggleMapBordersChecked),
    (ln = new Ze({ props: no })),
    te.push(() => oe(ln, "checked", eo));
  function to(N) {
    n[41](N);
  }
  let oo = { primaryText: "Show Engine Always", handleUpdateFunction: n[40] };
  n[1].dynamicIcons.engine !== void 0 &&
    (oo.checked = n[1].dynamicIcons.engine),
    (cn = new Ze({ props: oo })),
    te.push(() => oe(cn, "checked", to));
  function io(N) {
    n[43](N);
  }
  let lo = { primaryText: "Show Nitro Always", handleUpdateFunction: n[42] };
  n[1].dynamicIcons.nitro !== void 0 && (lo.checked = n[1].dynamicIcons.nitro),
    (an = new Ze({ props: lo })),
    te.push(() => oe(an, "checked", io));
  function ro(N) {
    n[45](N);
  }
  let qe = {
    primaryText: "Compass Enabled",
    handleUpdateFunction: n[44],
    secondaryText:
      "Disabling this will make it so you can't see the compass navigation",
  };
  n[0].isShowCompassChecked !== void 0 &&
    (qe.checked = n[0].isShowCompassChecked),
    (hn = new Ze({ props: qe })),
    te.push(() => oe(hn, "checked", ro));
  function F(N) {
    n[47](N);
  }
  let le = {
    primaryText: "Show Street Names Enabled",
    handleUpdateFunction: n[46],
    secondaryText:
      "Disabling this will make it so you can't see the street names / locations",
  };
  n[0].isShowStreetsChecked !== void 0 &&
    (le.checked = n[0].isShowStreetsChecked),
    (rn = new Ze({ props: le })),
    te.push(() => oe(rn, "checked", F));
  function Jt(N) {
    n[49](N);
  }
  let Ot = {
    primaryText: "Show Compass Pointer Enabled",
    handleUpdateFunction: n[48],
    secondaryText:
      "Disabling this will make it so you can't see your pointer index to pinpoint your exact cardinal directions",
  };
  n[0].isPointerShowChecked !== void 0 &&
    (Ot.checked = n[0].isPointerShowChecked),
    (gn = new Ze({ props: Ot })),
    te.push(() => oe(gn, "checked", Jt));
  function Zt(N) {
    n[51](N);
  }
  let Ft = {
    primaryText: "Show Cinematic Bars Enabled",
    handleUpdateFunction: n[50],
  };
  return (
    n[0].isCineamticModeChecked !== void 0 &&
      (Ft.checked = n[0].isCineamticModeChecked),
    (En = new Ze({ props: Ft })),
    te.push(() => oe(En, "checked", Zt)),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          (o = A("div")),
          P(i.$$.fragment),
          (l = y()),
          (s = A("div")),
          (s.innerHTML = '<p class="svelte-1c7k2s5">Reset HUD</p>'),
          (f = y()),
          P(u.$$.fragment),
          (a = y()),
          (c = A("p")),
          (c.textContent =
            "If your hud is acting up, give it a good ol' reset! Or you can do /resethud"),
          (d = y()),
          P(h.$$.fragment),
          (_ = y()),
          (k = A("p")),
          (k.textContent =
            "If you want to reset your settings back to default; click this shiny button!"),
          (b = y()),
          (w = A("p")),
          (w.textContent =
            "(you will have to relog for your menu to reset changes successfully)"),
          (g = y()),
          (S = A("hr")),
          (D = y()),
          (Y = A("div")),
          (Y.innerHTML = '<p class="svelte-1c7k2s5">Options</p>'),
          ($ = y()),
          (W = A("div")),
          P(q.$$.fragment),
          (x = y()),
          P(V.$$.fragment),
          (M = y()),
          P(X.$$.fragment),
          (z = y()),
          (J = A("hr")),
          (v = y()),
          (ae = A("div")),
          (ae.innerHTML = '<p class="svelte-1c7k2s5">Notifications</p>'),
          (ee = y()),
          (K = A("div")),
          P(I.$$.fragment),
          (Ce = y()),
          P(Ie.$$.fragment),
          (ve = y()),
          P(Ne.$$.fragment),
          (je = y()),
          P(Ee.$$.fragment),
          (Se = y()),
          P(Ve.$$.fragment),
          (He = y()),
          P(Re.$$.fragment),
          (Pe = y()),
          (G = A("hr")),
          (Nn = y()),
          (tn = A("div")),
          (tn.innerHTML = '<p class="svelte-1c7k2s5">Status</p>'),
          (jn = y()),
          (L = A("div")),
          P(Ge.$$.fragment),
          (ht = y()),
          P(bn.$$.fragment),
          (tt = y()),
          P(Qe.$$.fragment),
          (Gn = y()),
          P(Xn.$$.fragment),
          (Jn = y()),
          P(On.$$.fragment),
          (De = y()),
          P(Sn.$$.fragment),
          (Ct = y()),
          (Zn = A("hr")),
          (Pn = y()),
          (Bn = A("div")),
          (Bn.innerHTML = '<p class="svelte-1c7k2s5">Vehicle</p>'),
          (vt = y()),
          (Be = A("div")),
          P(on.$$.fragment),
          (Yt = y()),
          (Fn = A("p")),
          (Fn.textContent =
            "Whether it's square or circle you desire, you have the ability to choose!"),
          (gt = y()),
          P(fn.$$.fragment),
          (Un = y()),
          P(ln.$$.fragment),
          (ot = y()),
          P(cn.$$.fragment),
          (Kn = y()),
          P(an.$$.fragment),
          (At = y()),
          (it = A("hr")),
          (Mn = y()),
          (_t = A("div")),
          (_t.innerHTML = '<p class="svelte-1c7k2s5">Compass</p>'),
          (xn = y()),
          (Cn = A("div")),
          P(hn.$$.fragment),
          (zn = y()),
          P(rn.$$.fragment),
          (lt = y()),
          P(gn.$$.fragment),
          ($n = y()),
          (Ln = A("hr")),
          (rt = y()),
          (st = A("div")),
          (st.innerHTML = '<p class="svelte-1c7k2s5">Cinematic Mode</p>'),
          (It = y()),
          (vn = A("div")),
          P(En.$$.fragment),
          (kt = y()),
          (ye = A("p")),
          (ye.textContent = `${String.fromCharCode(...xl)}`),
          r(o, "class", "float-right w-[25%]"),
          r(s, "class", "-mx-4 mb-4 text-2xl text-white"),
          r(c, "class", "text-base svelte-1c7k2s5"),
          r(k, "class", "text-base svelte-1c7k2s5"),
          r(w, "class", "text-base svelte-1c7k2s5"),
          r(t, "class", "mx-4 mb-5 mt-3"),
          r(Y, "class", "my-3 text-xl text-white"),
          r(W, "class", "mx-4 mb-4 flex flex-col"),
          r(ae, "class", "my-3 text-xl text-white"),
          r(K, "class", "mx-4 mb-4 flex flex-col"),
          r(tn, "class", "my-3 text-xl text-white"),
          r(L, "class", "mx-4 mb-4 flex flex-col"),
          r(Bn, "class", "my-3 text-xl text-white"),
          r(Fn, "class", "font-semibold text-base pb-2 svelte-1c7k2s5"),
          r(Be, "class", "mx-4 mb-4 flex flex-col"),
          r(_t, "class", "my-3 text-xl text-white"),
          r(Cn, "class", "mx-4 mb-4 flex flex-col"),
          r(st, "class", "my-3 text-xl text-white"),
          r(
            ye,
            "class",
            "self-center ml-auto opacity-05 select-none svelte-1c7k2s5"
          ),
          r(vn, "class", "mx-4 mb-4 flex flex-row gap-5"),
          r(e, "class", "text-sm flex flex-col text-[#e8e8e8]");
      },
      m(N, Ae) {
        H(N, e, Ae),
          m(e, t),
          m(t, o),
          B(i, o, null),
          m(t, l),
          m(t, s),
          m(t, f),
          B(u, t, null),
          m(t, a),
          m(t, c),
          m(t, d),
          B(h, t, null),
          m(t, _),
          m(t, k),
          m(t, b),
          m(t, w),
          m(e, g),
          m(e, S),
          m(e, D),
          m(e, Y),
          m(e, $),
          m(e, W),
          B(q, W, null),
          m(W, x),
          B(V, W, null),
          m(W, M),
          B(X, W, null),
          m(e, z),
          m(e, J),
          m(e, v),
          m(e, ae),
          m(e, ee),
          m(e, K),
          B(I, K, null),
          m(K, Ce),
          B(Ie, K, null),
          m(K, ve),
          B(Ne, K, null),
          m(K, je),
          B(Ee, K, null),
          m(K, Se),
          B(Ve, K, null),
          m(K, He),
          B(Re, K, null),
          m(e, Pe),
          m(e, G),
          m(e, Nn),
          m(e, tn),
          m(e, jn),
          m(e, L),
          B(Ge, L, null),
          m(L, ht),
          B(bn, L, null),
          m(L, tt),
          B(Qe, L, null),
          m(L, Gn),
          B(Xn, L, null),
          m(L, Jn),
          B(On, L, null),
          m(L, De),
          B(Sn, L, null),
          m(e, Ct),
          m(e, Zn),
          m(e, Pn),
          m(e, Bn),
          m(e, vt),
          m(e, Be),
          B(on, Be, null),
          m(Be, Yt),
          m(Be, Fn),
          m(Be, gt),
          B(fn, Be, null),
          m(Be, Un),
          B(ln, Be, null),
          m(Be, ot),
          B(cn, Be, null),
          m(Be, Kn),
          B(an, Be, null),
          m(e, At),
          m(e, it),
          m(e, Mn),
          m(e, _t),
          m(e, xn),
          m(e, Cn),
          B(hn, Cn, null),
          m(Cn, zn),
          B(rn, Cn, null),
          m(Cn, lt),
          B(gn, Cn, null),
          m(e, $n),
          m(e, Ln),
          m(e, rt),
          m(e, st),
          m(e, It),
          m(e, vn),
          B(En, vn, null),
          m(vn, kt),
          m(vn, ye),
          (Oe = !0);
      },
      p(N, Ae) {
        const fo = {};
        Ae[0] & 1 && (fo.disable = N[0].isRestarting), u.$set(fo);
        const co = {};
        !j &&
          Ae[0] & 1 &&
          ((j = !0), (co.checked = N[0].isOutMapChecked), ie(() => (j = !1))),
          q.$set(co);
        const ho = {};
        !Q &&
          Ae[0] & 1 &&
          ((Q = !0),
          (ho.checked = N[0].isOutCompassChecked),
          ie(() => (Q = !1))),
          V.$set(ho);
        const go = {};
        !p &&
          Ae[0] & 1 &&
          ((p = !0),
          (go.checked = N[0].isCompassFollowChecked),
          ie(() => (p = !1))),
          X.$set(go);
        const mo = {};
        !ke &&
          Ae[0] & 1 &&
          ((ke = !0),
          (mo.checked = N[0].isOpenMenuSoundsChecked),
          ie(() => (ke = !1))),
          I.$set(mo);
        const _o = {};
        !Xe &&
          Ae[0] & 1 &&
          ((Xe = !0),
          (_o.checked = N[0].isResetSoundsChecked),
          ie(() => (Xe = !1))),
          Ie.$set(_o);
        const wo = {};
        !Tn &&
          Ae[0] & 1 &&
          ((Tn = !0),
          (wo.checked = N[0].isListSoundsChecked),
          ie(() => (Tn = !1))),
          Ne.$set(wo);
        const bo = {};
        !se &&
          Ae[0] & 1 &&
          ((se = !0),
          (bo.checked = N[0].isMapNotifyChecked),
          ie(() => (se = !1))),
          Ee.$set(bo);
        const ko = {};
        !In &&
          Ae[0] & 1 &&
          ((In = !0),
          (ko.checked = N[0].isLowFuelAlertChecked),
          ie(() => (In = !1))),
          Ve.$set(ko);
        const So = {};
        !yn &&
          Ae[0] & 1 &&
          ((yn = !0),
          (So.checked = N[0].isCinematicNotifyChecked),
          ie(() => (yn = !1))),
          Re.$set(So);
        const po = {};
        !ct &&
          Ae[0] & 2 &&
          ((ct = !0),
          (po.checked = N[1].dynamicIcons.health),
          ie(() => (ct = !1))),
          Ge.$set(po);
        const Co = {};
        !pe &&
          Ae[0] & 2 &&
          ((pe = !0),
          (Co.checked = N[1].dynamicIcons.armor),
          ie(() => (pe = !1))),
          bn.$set(Co);
        const vo = {};
        !pt &&
          Ae[0] & 2 &&
          ((pt = !0),
          (vo.checked = N[1].dynamicIcons.hunger),
          ie(() => (pt = !1))),
          Qe.$set(vo);
        const ri = {};
        !Wn &&
          Ae[0] & 2 &&
          ((Wn = !0),
          (ri.checked = N[1].dynamicIcons.thirst),
          ie(() => (Wn = !1))),
          Xn.$set(ri);
        const si = {};
        !kn &&
          Ae[0] & 2 &&
          ((kn = !0),
          (si.checked = N[1].dynamicIcons.stress),
          ie(() => (kn = !1))),
          On.$set(si);
        const ai = {};
        !Rn &&
          Ae[0] & 2 &&
          ((Rn = !0),
          (ai.checked = N[1].dynamicIcons.oxygen),
          ie(() => (Rn = !1))),
          Sn.$set(ai);
        const ui = {};
        Ae[0] & 1 && (ui.checked = N[0].isToggleMapShapeChecked == "circle"),
          on.$set(ui);
        const fi = {};
        !dt &&
          Ae[0] & 1 &&
          ((dt = !0),
          (fi.checked = N[0].isMapEnabledChecked),
          ie(() => (dt = !1))),
          fn.$set(fi);
        const ci = {};
        !Dt &&
          Ae[0] & 1 &&
          ((Dt = !0),
          (ci.checked = N[0].isToggleMapBordersChecked),
          ie(() => (Dt = !1))),
          ln.$set(ci);
        const hi = {};
        !mt &&
          Ae[0] & 2 &&
          ((mt = !0),
          (hi.checked = N[1].dynamicIcons.engine),
          ie(() => (mt = !1))),
          cn.$set(hi);
        const gi = {};
        !Qn &&
          Ae[0] & 2 &&
          ((Qn = !0),
          (gi.checked = N[1].dynamicIcons.nitro),
          ie(() => (Qn = !1))),
          an.$set(gi);
        const di = {};
        !wt &&
          Ae[0] & 1 &&
          ((wt = !0),
          (di.checked = N[0].isShowCompassChecked),
          ie(() => (wt = !1))),
          hn.$set(di);
        const mi = {};
        !Tt &&
          Ae[0] & 1 &&
          ((Tt = !0),
          (mi.checked = N[0].isShowStreetsChecked),
          ie(() => (Tt = !1))),
          rn.$set(mi);
        const _i = {};
        !bt &&
          Ae[0] & 1 &&
          ((bt = !0),
          (_i.checked = N[0].isPointerShowChecked),
          ie(() => (bt = !1))),
          gn.$set(_i);
        const wi = {};
        !Bt &&
          Ae[0] & 1 &&
          ((Bt = !0),
          (wi.checked = N[0].isCineamticModeChecked),
          ie(() => (Bt = !1))),
          En.$set(wi);
      },
      i(N) {
        Oe ||
          (C(i.$$.fragment, N),
          C(u.$$.fragment, N),
          C(h.$$.fragment, N),
          C(q.$$.fragment, N),
          C(V.$$.fragment, N),
          C(X.$$.fragment, N),
          C(I.$$.fragment, N),
          C(Ie.$$.fragment, N),
          C(Ne.$$.fragment, N),
          C(Ee.$$.fragment, N),
          C(Ve.$$.fragment, N),
          C(Re.$$.fragment, N),
          C(Ge.$$.fragment, N),
          C(bn.$$.fragment, N),
          C(Qe.$$.fragment, N),
          C(Xn.$$.fragment, N),
          C(On.$$.fragment, N),
          C(Sn.$$.fragment, N),
          C(on.$$.fragment, N),
          C(fn.$$.fragment, N),
          C(ln.$$.fragment, N),
          C(cn.$$.fragment, N),
          C(an.$$.fragment, N),
          C(hn.$$.fragment, N),
          C(rn.$$.fragment, N),
          C(gn.$$.fragment, N),
          C(En.$$.fragment, N),
          (Oe = !0));
      },
      o(N) {
        T(i.$$.fragment, N),
          T(u.$$.fragment, N),
          T(h.$$.fragment, N),
          T(q.$$.fragment, N),
          T(V.$$.fragment, N),
          T(X.$$.fragment, N),
          T(I.$$.fragment, N),
          T(Ie.$$.fragment, N),
          T(Ne.$$.fragment, N),
          T(Ee.$$.fragment, N),
          T(Ve.$$.fragment, N),
          T(Re.$$.fragment, N),
          T(Ge.$$.fragment, N),
          T(bn.$$.fragment, N),
          T(Qe.$$.fragment, N),
          T(Xn.$$.fragment, N),
          T(On.$$.fragment, N),
          T(Sn.$$.fragment, N),
          T(on.$$.fragment, N),
          T(fn.$$.fragment, N),
          T(ln.$$.fragment, N),
          T(cn.$$.fragment, N),
          T(an.$$.fragment, N),
          T(hn.$$.fragment, N),
          T(rn.$$.fragment, N),
          T(gn.$$.fragment, N),
          T(En.$$.fragment, N),
          (Oe = !1);
      },
      d(N) {
        N && E(e),
          U(i),
          U(u),
          U(h),
          U(q),
          U(V),
          U(X),
          U(I),
          U(Ie),
          U(Ne),
          U(Ee),
          U(Ve),
          U(Re),
          U(Ge),
          U(bn),
          U(Qe),
          U(Xn),
          U(On),
          U(Sn),
          U(on),
          U(fn),
          U(ln),
          U(cn),
          U(an),
          U(hn),
          U(rn),
          U(gn),
          U(En);
      },
    }
  );
}
function du(n, e, t) {
  let o, i;
  de(n, Ye, (G) => t(0, (o = G))), de(n, ne, (G) => t(1, (i = G)));
  function l(G) {
    let Nn = G ? "circle" : "square";
    St(Ye, (o.isToggleMapShapeChecked = Nn), o),
      Me("ToggleMapShape", { shape: Nn });
  }
  const s = () => {
      Me("restartHud"), St(Ye, (o.isRestarting = !0), o);
    },
    f = () => {
      Ye.resetHudMenuSetting(), Ye.sendMenuSettingsToClient();
    },
    u = (G) => Me("showOutMap", { checked: G });
  function a(G) {
    n.$$.not_equal(o.isOutMapChecked, G) &&
      ((o.isOutMapChecked = G), Ye.set(o));
  }
  const c = (G) => Me("showOutCompass", { checked: G });
  function d(G) {
    n.$$.not_equal(o.isOutCompassChecked, G) &&
      ((o.isOutCompassChecked = G), Ye.set(o));
  }
  const h = (G) => Me("showFollowCompass", { checked: G });
  function _(G) {
    n.$$.not_equal(o.isCompassFollowChecked, G) &&
      ((o.isCompassFollowChecked = G), Ye.set(o));
  }
  const k = (G) => Me("openMenuSounds", { checked: G });
  function b(G) {
    n.$$.not_equal(o.isOpenMenuSoundsChecked, G) &&
      ((o.isOpenMenuSoundsChecked = G), Ye.set(o));
  }
  const w = (G) => Me("resetHudSounds", { checked: G });
  function g(G) {
    n.$$.not_equal(o.isResetSoundsChecked, G) &&
      ((o.isResetSoundsChecked = G), Ye.set(o));
  }
  const S = (G) => Me("checklistSounds", { checked: G });
  function D(G) {
    n.$$.not_equal(o.isListSoundsChecked, G) &&
      ((o.isListSoundsChecked = G), Ye.set(o));
  }
  const Y = (G) => Me("showMapNotif", { checked: G });
  function $(G) {
    n.$$.not_equal(o.isMapNotifyChecked, G) &&
      ((o.isMapNotifyChecked = G), Ye.set(o));
  }
  const W = (G) => Me("showFuelAlert", { checked: G });
  function q(G) {
    n.$$.not_equal(o.isLowFuelAlertChecked, G) &&
      ((o.isLowFuelAlertChecked = G), Ye.set(o));
  }
  const j = (G) => Me("showCinematicNotif", { checked: G });
  function x(G) {
    n.$$.not_equal(o.isCinematicNotifyChecked, G) &&
      ((o.isCinematicNotifyChecked = G), Ye.set(o));
  }
  const V = (G) => {
    ne.updateShowingDynamicIcon("health", G), Me("dynamicChange");
  };
  function Q(G) {
    n.$$.not_equal(i.dynamicIcons.health, G) &&
      ((i.dynamicIcons.health = G), ne.set(i));
  }
  const M = (G) => {
    ne.updateShowingDynamicIcon("armor", G), Me("dynamicChange");
  };
  function X(G) {
    n.$$.not_equal(i.dynamicIcons.armor, G) &&
      ((i.dynamicIcons.armor = G), ne.set(i));
  }
  const p = (G) => {
    ne.updateShowingDynamicIcon("hunger", G), Me("dynamicChange");
  };
  function z(G) {
    n.$$.not_equal(i.dynamicIcons.hunger, G) &&
      ((i.dynamicIcons.hunger = G), ne.set(i));
  }
  const J = (G) => {
    ne.updateShowingDynamicIcon("thirst", G), Me("dynamicChange");
  };
  function v(G) {
    n.$$.not_equal(i.dynamicIcons.thirst, G) &&
      ((i.dynamicIcons.thirst = G), ne.set(i));
  }
  const ae = (G) => {
    ne.updateShowingDynamicIcon("stress", G), Me("dynamicChange");
  };
  function ee(G) {
    n.$$.not_equal(i.dynamicIcons.stress, G) &&
      ((i.dynamicIcons.stress = G), ne.set(i));
  }
  const K = (G) => {
    ne.updateShowingDynamicIcon("oxygen", G), Me("dynamicChange");
  };
  function I(G) {
    n.$$.not_equal(i.dynamicIcons.oxygen, G) &&
      ((i.dynamicIcons.oxygen = G), ne.set(i));
  }
  const ke = (G) => l(G),
    Ce = (G) => Me("HideMap", { checked: G });
  function Ie(G) {
    n.$$.not_equal(o.isMapEnabledChecked, G) &&
      ((o.isMapEnabledChecked = G), Ye.set(o));
  }
  const Xe = (G) => Me("ToggleMapBorders", { checked: G });
  function ve(G) {
    n.$$.not_equal(o.isToggleMapBordersChecked, G) &&
      ((o.isToggleMapBordersChecked = G), Ye.set(o));
  }
  const Ne = (G) => {
    ne.updateShowingDynamicIcon("engine", G), Me("dynamicChange");
  };
  function Tn(G) {
    n.$$.not_equal(i.dynamicIcons.engine, G) &&
      ((i.dynamicIcons.engine = G), ne.set(i));
  }
  const je = (G) => {
    ne.updateShowingDynamicIcon("nitro", G), Me("dynamicChange");
  };
  function Ee(G) {
    n.$$.not_equal(i.dynamicIcons.nitro, G) &&
      ((i.dynamicIcons.nitro = G), ne.set(i));
  }
  const se = (G) => Me("showCompassBase", { checked: G });
  function Se(G) {
    n.$$.not_equal(o.isShowCompassChecked, G) &&
      ((o.isShowCompassChecked = G), Ye.set(o));
  }
  const Ve = (G) => Me("showStreetsNames", { checked: G });
  function In(G) {
    n.$$.not_equal(o.isShowStreetsChecked, G) &&
      ((o.isShowStreetsChecked = G), Ye.set(o));
  }
  const He = (G) => Me("showPointerIndex", { checked: G });
  function Re(G) {
    n.$$.not_equal(o.isPointerShowChecked, G) &&
      ((o.isPointerShowChecked = G), Ye.set(o));
  }
  const yn = (G) => Me("cinematicMode", { checked: G });
  function Pe(G) {
    n.$$.not_equal(o.isCineamticModeChecked, G) &&
      ((o.isCineamticModeChecked = G), Ye.set(o));
  }
  return [
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S,
    D,
    Y,
    $,
    W,
    q,
    j,
    x,
    V,
    Q,
    M,
    X,
    p,
    z,
    J,
    v,
    ae,
    ee,
    K,
    I,
    ke,
    Ce,
    Ie,
    Xe,
    ve,
    Ne,
    Tn,
    je,
    Ee,
    se,
    Se,
    Ve,
    In,
    He,
    Re,
    yn,
    Pe,
  ];
}
class mu extends ue {
  constructor(e) {
    super();
    fe(this, e, du, gu, ce, {}, null, [-1, -1]);
  }
}
function zi(n) {
  let e, t, o;
  const i = n[6].default,
    l = Vr(i, n, n[5], null);
  return {
    c() {
      (e = A("div")), l && l.c(), r(e, "class", "content svelte-1ltnd50");
    },
    m(s, f) {
      H(s, e, f), l && l.m(e, null), (o = !0);
    },
    p(s, f) {
      l &&
        l.p &&
        (!o || f & 32) &&
        Or(l, i, s, s[5], o ? Er(i, s[5], f, null) : Fr(s[5]), null);
    },
    i(s) {
      o ||
        (C(l, s),
        Mt(() => {
          t || (t = Yn(e, pi, {}, !0)), t.run(1);
        }),
        (o = !0));
    },
    o(s) {
      T(l, s), t || (t = Yn(e, pi, {}, !1)), t.run(0), (o = !1);
    },
    d(s) {
      s && E(e), l && l.d(s), s && t && t.end();
    },
  };
}
function _u(n) {
  let e, t, o, i, l, s, f, u, a, c, d, h, _;
  i = new Fe({ props: { icon: n[2], scale: 1, color: n[3] } });
  let k = n[4] && zi(n);
  return {
    c() {
      (e = A("div")),
        (t = A("button")),
        (o = A("div")),
        P(i.$$.fragment),
        (l = y()),
        (s = A("p")),
        (f = be(n[1])),
        (u = y()),
        (a = A("i")),
        (a.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="white" fill="white"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>'),
        (c = y()),
        k && k.c(),
        r(o, "class", "min-w-8 grid justify-items-center"),
        r(s, "class", "ml-3"),
        r(a, "class", "icon ml-auto svelte-1ltnd50"),
        Ci(a, "active", n[4]),
        r(
          t,
          "class",
          "header text-2xl flex-row items-center text-white font-semibold svelte-1ltnd50"
        );
    },
    m(b, w) {
      H(b, e, w),
        m(e, t),
        m(t, o),
        B(i, o, null),
        m(t, l),
        m(t, s),
        m(s, f),
        m(t, u),
        m(t, a),
        m(e, c),
        k && k.m(e, null),
        (d = !0),
        h || ((_ = Ke(t, "click", n[7])), (h = !0));
    },
    p(b, [w]) {
      const g = {};
      w & 4 && (g.icon = b[2]),
        w & 8 && (g.color = b[3]),
        i.$set(g),
        (!d || w & 2) && un(f, b[1]),
        w & 16 && Ci(a, "active", b[4]),
        b[4]
          ? k
            ? (k.p(b, w), w & 16 && C(k, 1))
            : ((k = zi(b)), k.c(), C(k, 1), k.m(e, null))
          : k &&
            (he(),
            T(k, 1, 1, () => {
              k = null;
            }),
            ge());
    },
    i(b) {
      d || (C(i.$$.fragment, b), C(k), (d = !0));
    },
    o(b) {
      T(i.$$.fragment, b), T(k), (d = !1);
    },
    d(b) {
      b && E(e), U(i), k && k.d(), (h = !1), _();
    },
  };
}
function wu(n, e, t) {
  let o,
    { $$slots: i = {}, $$scope: l } = e,
    { name: s = "" } = e,
    { group: f = null } = e,
    { icon: u = null } = e,
    { color: a = "white" } = e;
  const c = () => {
    t(0, (f = f === s ? "" : s));
  };
  return (
    (n.$$set = (d) => {
      "name" in d && t(1, (s = d.name)),
        "group" in d && t(0, (f = d.group)),
        "icon" in d && t(2, (u = d.icon)),
        "color" in d && t(3, (a = d.color)),
        "$$scope" in d && t(5, (l = d.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 3 && t(4, (o = f === s));
    }),
    [f, s, u, a, o, l, i, c]
  );
}
class Po extends ue {
  constructor(e) {
    super();
    fe(this, e, wu, _u, ce, { name: 1, group: 0, icon: 2, color: 3 });
  }
}
function bu(n) {
  let e, t, o;
  return {
    c() {
      (e = A("input")),
        r(e, "type", "text"),
        r(
          e,
          "class",
          "bg-[var(--ps-hud-primary)] block w-full p-1.5 my-2 text-black text-base font-bold rounded-md placeholder-[black] outline-none"
        ),
        r(e, "placeholder", "Profile"),
        r(e, "pattern", "[A-Za-z1-9]"),
        r(e, "max", n[1]);
    },
    m(i, l) {
      H(i, e, l), No(e, n[0]), t || ((o = Ke(e, "input", n[2])), (t = !0));
    },
    p(i, [l]) {
      l & 2 && r(e, "max", i[1]), l & 1 && e.value !== i[0] && No(e, i[0]);
    },
    i: Te,
    o: Te,
    d(i) {
      i && E(e), (t = !1), o();
    },
  };
}
function ku(n, e, t) {
  let { maxLengh: o = 10 } = e,
    { value: i = "" } = e;
  function l() {
    (i = this.value), t(0, i);
  }
  return (
    (n.$$set = (s) => {
      "maxLengh" in s && t(1, (o = s.maxLengh)),
        "value" in s && t(0, (i = s.value));
    }),
    [i, o, l]
  );
}
class Su extends ue {
  constructor(e) {
    super();
    fe(this, e, ku, bu, ce, { maxLengh: 1, value: 0 });
  }
}
function Li(n, e, t) {
  const o = n.slice();
  return (o[10] = e[t]), (o[11] = e), (o[12] = t), o;
}
function pu(n) {
  let e, t;
  function o() {
    return n[4](n[10], n[11], n[12]);
  }
  return (
    (e = new Rr({
      props: { $$slots: { default: [vu] }, $$scope: { ctx: n } },
    })),
    e.$on("outclick", o),
    {
      c() {
        P(e.$$.fragment);
      },
      m(i, l) {
        B(e, i, l), (t = !0);
      },
      p(i, l) {
        n = i;
        const s = {};
        l & 8194 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
      },
      i(i) {
        t || (C(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        T(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        U(e, i);
      },
    }
  );
}
function Cu(n) {
  let e,
    t = n[10].name + "",
    o,
    i,
    l;
  function s() {
    return n[2](n[10], n[11], n[12]);
  }
  return {
    c() {
      (e = A("p")),
        (o = be(t)),
        r(e, "class", "text-xl font-semibold text-center cursor-pointer");
    },
    m(f, u) {
      H(f, e, u), m(e, o), i || ((l = Ke(e, "click", s)), (i = !0));
    },
    p(f, u) {
      (n = f), u & 2 && t !== (t = n[10].name + "") && un(o, t);
    },
    i: Te,
    o: Te,
    d(f) {
      f && E(e), (i = !1), l();
    },
  };
}
function vu(n) {
  let e, t, o;
  function i(s) {
    n[3](s, n[10]);
  }
  let l = {};
  return (
    n[10].name !== void 0 && (l.value = n[10].name),
    (e = new Su({ props: l })),
    te.push(() => oe(e, "value", i)),
    {
      c() {
        P(e.$$.fragment);
      },
      m(s, f) {
        B(e, s, f), (o = !0);
      },
      p(s, f) {
        n = s;
        const u = {};
        !t && f & 2 && ((t = !0), (u.value = n[10].name), ie(() => (t = !1))),
          e.$set(u);
      },
      i(s) {
        o || (C(e.$$.fragment, s), (o = !0));
      },
      o(s) {
        T(e.$$.fragment, s), (o = !1);
      },
      d(s) {
        U(e, s);
      },
    }
  );
}
function qi(n) {
  let e, t, o, i, l, s, f, u, a, c;
  const d = [Cu, pu],
    h = [];
  function _(g, S) {
    return g[10].editingName ? 1 : 0;
  }
  (t = _(n)), (o = h[t] = d[t](n));
  function k() {
    return n[5](n[12]);
  }
  (l = new Ht({ props: { name: "Save HUD to Profile" } })), l.$on("click", k);
  function b() {
    return n[6](n[12]);
  }
  (f = new Ht({ props: { name: "Apply Profile to HUD" } })), f.$on("click", b);
  function w() {
    return n[7](n[12]);
  }
  return (
    (a = new Ht({
      props: { name: "Delete Profile", buttonClass: "hover:bg-red-600" },
    })),
    a.$on("click", w),
    {
      c() {
        (e = A("div")),
          o.c(),
          (i = y()),
          P(l.$$.fragment),
          (s = y()),
          P(f.$$.fragment),
          (u = y()),
          P(a.$$.fragment),
          r(
            e,
            "class",
            "flex flex-col justify-end items-center border-2 rounded-lg p-3 border-[#029772] my-3"
          );
      },
      m(g, S) {
        H(g, e, S),
          h[t].m(e, null),
          m(e, i),
          B(l, e, null),
          m(e, s),
          B(f, e, null),
          m(e, u),
          B(a, e, null),
          (c = !0);
      },
      p(g, S) {
        n = g;
        let D = t;
        (t = _(n)),
          t === D
            ? h[t].p(n, S)
            : (he(),
              T(h[D], 1, 1, () => {
                h[D] = null;
              }),
              ge(),
              (o = h[t]),
              o ? o.p(n, S) : ((o = h[t] = d[t](n)), o.c()),
              C(o, 1),
              o.m(e, i));
      },
      i(g) {
        c ||
          (C(o),
          C(l.$$.fragment, g),
          C(f.$$.fragment, g),
          C(a.$$.fragment, g),
          (c = !0));
      },
      o(g) {
        T(o),
          T(l.$$.fragment, g),
          T(f.$$.fragment, g),
          T(a.$$.fragment, g),
          (c = !1);
      },
      d(g) {
        g && E(e), h[t].d(), U(l), U(f), U(a);
      },
    }
  );
}
function Ni(n) {
  let e, t, o;
  return (
    (t = new Ht({
      props: { name: "Add New Profile", buttonClass: "w-[100px]" },
    })),
    t.$on("click", n[8]),
    {
      c() {
        (e = A("div")), P(t.$$.fragment), r(e, "class", "flex flex-col");
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p: Te,
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function Du(n) {
  let e,
    t,
    o,
    i = n[1],
    l = [];
  for (let u = 0; u < i.length; u += 1) l[u] = qi(Li(n, i, u));
  const s = (u) =>
    T(l[u], 1, 1, () => {
      l[u] = null;
    });
  let f = n[1].length < 6 && Ni(n);
  return {
    c() {
      e = A("div");
      for (let u = 0; u < l.length; u += 1) l[u].c();
      (t = y()),
        f && f.c(),
        r(
          e,
          "class",
          "mx-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
        );
    },
    m(u, a) {
      H(u, e, a);
      for (let c = 0; c < l.length; c += 1) l[c].m(e, null);
      m(e, t), f && f.m(e, null), (o = !0);
    },
    p(u, a) {
      if (a & 2) {
        i = u[1];
        let c;
        for (c = 0; c < i.length; c += 1) {
          const d = Li(u, i, c);
          l[c]
            ? (l[c].p(d, a), C(l[c], 1))
            : ((l[c] = qi(d)), l[c].c(), C(l[c], 1), l[c].m(e, t));
        }
        for (he(), c = i.length; c < l.length; c += 1) s(c);
        ge();
      }
      u[1].length < 6
        ? f
          ? (f.p(u, a), a & 2 && C(f, 1))
          : ((f = Ni(u)), f.c(), C(f, 1), f.m(e, null))
        : f &&
          (he(),
          T(f, 1, 1, () => {
            f = null;
          }),
          ge());
    },
    i(u) {
      if (!o) {
        for (let a = 0; a < i.length; a += 1) C(l[a]);
        C(f), (o = !0);
      }
    },
    o(u) {
      l = l.filter(Boolean);
      for (let a = 0; a < l.length; a += 1) T(l[a]);
      T(f), (o = !1);
    },
    d(u) {
      u && E(e), so(l, u), f && f.d();
    },
  };
}
function Au(n) {
  let e, t, o, i, l;
  function s(u) {
    n[9](u);
  }
  let f = {
    name: "Customization Profiles",
    icon: Hr,
    color: "white",
    $$slots: { default: [Du] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Po({ props: f })),
    te.push(() => oe(e, "group", s)),
    {
      c() {
        P(e.$$.fragment), (o = y()), (i = A("hr"));
      },
      m(u, a) {
        B(e, u, a), H(u, o, a), H(u, i, a), (l = !0);
      },
      p(u, [a]) {
        const c = {};
        a & 8194 && (c.$$scope = { dirty: a, ctx: u }),
          !t && a & 1 && ((t = !0), (c.group = u[0]), ie(() => (t = !1))),
          e.$set(c);
      },
      i(u) {
        l || (C(e.$$.fragment, u), (l = !0));
      },
      o(u) {
        T(e.$$.fragment, u), (l = !1);
      },
      d(u) {
        U(e, u), u && E(o), u && E(i);
      },
    }
  );
}
function Tu(n, e, t) {
  let o;
  de(n, Vt, (_) => t(1, (o = _)));
  let { group: i = "" } = e;
  const l = (_, k, b) => St(Vt, (k[b].editingName = !0), o);
  function s(_, k) {
    n.$$.not_equal(k.name, _) && ((k.name = _), Vt.set(o));
  }
  const f = (_, k, b) => St(Vt, (k[b].editingName = !1), o),
    u = (_) => Vt.saveHUDToProfile(_),
    a = (_) => Vt.applyProfileToHud(_),
    c = (_) => Vt.deleteProfile(_),
    d = () => Vt.addNewProfile();
  function h(_) {
    (i = _), t(0, i);
  }
  return (
    (n.$$set = (_) => {
      "group" in _ && t(0, (i = _.group));
    }),
    [i, o, l, s, f, u, a, c, d, h]
  );
}
class Iu extends ue {
  constructor(e) {
    super();
    fe(this, e, Tu, Au, ce, { group: 0 });
  }
}
function yu(n) {
  let e, t, o;
  return (
    (t = new Ht({
      props: {
        name: "copy progress colors to icon colors",
        buttonClass: "h-15 w-55",
      },
    })),
    t.$on("click", n[1]),
    {
      c() {
        (e = A("div")), P(t.$$.fragment), r(e, "class", "flex flex-row mx-4");
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p: Te,
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function Mu(n) {
  let e, t, o, i, l;
  function s(u) {
    n[2](u);
  }
  let f = {
    name: "Utility Functions",
    icon: Pr,
    color: "white",
    $$slots: { default: [yu] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Po({ props: f })),
    te.push(() => oe(e, "group", s)),
    {
      c() {
        P(e.$$.fragment), (o = y()), (i = A("hr"));
      },
      m(u, a) {
        B(e, u, a), H(u, o, a), H(u, i, a), (l = !0);
      },
      p(u, [a]) {
        const c = {};
        a & 8 && (c.$$scope = { dirty: a, ctx: u }),
          !t && a & 1 && ((t = !0), (c.group = u[0]), ie(() => (t = !1))),
          e.$set(c);
      },
      i(u) {
        l || (C(e.$$.fragment, u), (l = !0));
      },
      o(u) {
        T(e.$$.fragment, u), (l = !1);
      },
      d(u) {
        U(e, u), u && E(o), u && E(i);
      },
    }
  );
}
function Yu(n, e, t) {
  let { group: o = "" } = e;
  const i = () => {
    re.updateIconColorToProgressColor();
  };
  function l(s) {
    (o = s), t(0, o);
  }
  return (
    (n.$$set = (s) => {
      "group" in s && t(0, (o = s.group));
    }),
    [o, i, l]
  );
}
class Xu extends ue {
  constructor(e) {
    super();
    fe(this, e, Yu, Mu, ce, { group: 0 });
  }
}
function Ou(n) {
  let e, t, o;
  return (
    (t = new Br({
      props: {
        items: n[0],
        value: n[1],
        isClearable: !1,
        containerClasses: "selectHud",
      },
    })),
    t.$on("select", n[2]),
    {
      c() {
        (e = A("div")),
          P(t.$$.fragment),
          r(e, "class", "themed text-white text-base svelte-1h7z46");
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p(i, [l]) {
        const s = {};
        l & 1 && (s.items = i[0]), l & 2 && (s.value = i[1]), t.$set(s);
      },
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function Fu(n) {
  var e,
    t = n.split("-");
  for (e = 0; e < t.length; e++)
    t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
  return { value: n, label: t.join(" ") };
}
function Eu(n, e, t) {
  let { valuesArray: o = [""] } = e,
    { handleSelectFunction: i = () => null } = e,
    { value: l = null } = e,
    { selectedIndex: s = 0 } = e,
    f,
    u;
  function a(c) {
    c.detail.value !== l && (t(3, (l = c.detail.value)), i(c.detail.value));
  }
  return (
    (n.$$set = (c) => {
      "valuesArray" in c && t(5, (o = c.valuesArray)),
        "handleSelectFunction" in c && t(6, (i = c.handleSelectFunction)),
        "value" in c && t(3, (l = c.value)),
        "selectedIndex" in c && t(4, (s = c.selectedIndex));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 33 && (t(0, (f = o.map(Fu))), t(1, (u = f[0]))),
        n.$$.dirty & 9 && l)
      ) {
        let c = f.findIndex((d) => d.value == l);
        c >= 0 && (t(4, (s = c)), t(1, (u = f[c])));
      }
    }),
    [f, u, a, l, s, o, i]
  );
}
class Ho extends ue {
  constructor(e) {
    super();
    fe(this, e, Eu, Ou, ce, {
      valuesArray: 5,
      handleSelectFunction: 6,
      value: 3,
      selectedIndex: 4,
    });
  }
}
function Vu(n) {
  let e, t, o, i, l, s, f, u;
  return {
    c() {
      (e = A("div")),
        (t = A("button")),
        (t.innerHTML =
          '<span class="mx-auto mt-[10%] text-lg font-bold">-</span>'),
        (o = y()),
        (i = A("input")),
        (l = y()),
        (s = A("button")),
        (s.innerHTML =
          '<span class="mx-auto mt-[10%] text-lg font-bold">+</span>'),
        r(
          t,
          "class",
          "font-semibold border-r bg-[#292929] hover:bg-red-600 text-white border-gray-600 border-1 h-full w-20 flex rounded-l-md focus:outline-none cursor-pointer"
        ),
        r(i, "type", "text"),
        r(
          i,
          "class",
          "w-15 p-2 p-1 text-xs appearance-none text-base border-gray-600 border-1 focus:outline-none focus:border-1 focus:border-gray-400 text-center bg-[#292929] text-white"
        ),
        r(
          s,
          "class",
          "font-semibold border-l bg-[#292929] hover:bg-green-600 text-white border-gray-600 border-1 h-full w-20 flex rounded-r-md focus:outline-none cursor-pointer"
        ),
        r(
          e,
          "class",
          "flex flex-row mx-auto border h-10 w-30 rounded-lg border-gray-600 relative text-black"
        );
    },
    m(a, c) {
      H(a, e, c),
        m(e, t),
        m(e, o),
        m(e, i),
        No(i, n[0]),
        m(e, l),
        m(e, s),
        f ||
          ((u = [
            Ke(t, "click", n[7]),
            Ke(i, "input", n[8]),
            Ke(i, "input", n[9]),
            Ke(s, "click", n[10]),
          ]),
          (f = !0));
    },
    p(a, [c]) {
      c & 1 && i.value !== a[0] && No(i, a[0]);
    },
    i: Te,
    o: Te,
    d(a) {
      a && E(e), (f = !1), Ro(u);
    },
  };
}
function Hu(n, e, t) {
  let { min: o = 0 } = e,
    { max: i = 10 } = e,
    { handleUpdateFunction: l = (b) => {} } = e,
    { value: s = 1 } = e,
    { step: f = 1 } = e;
  function u(b) {
    return b > i && (b = i), b < o && (b = o), Math.round(b * 100) / 100;
  }
  function a(b) {
    b == "increase" ? t(0, (s += f)) : t(0, (s -= f)), t(0, (s = u(s))), l(s);
  }
  function c(b) {
    if (b.target.value.endsWith(".")) return;
    let w = Number(b.target.value);
    isNaN(w) || (t(0, (s = u(w))), l(s));
  }
  const d = () => a("decrease");
  function h() {
    (s = this.value), t(0, s);
  }
  const _ = (b) => c(b),
    k = () => a("increase");
  return (
    (n.$$set = (b) => {
      "min" in b && t(3, (o = b.min)),
        "max" in b && t(4, (i = b.max)),
        "handleUpdateFunction" in b && t(5, (l = b.handleUpdateFunction)),
        "value" in b && t(0, (s = b.value)),
        "step" in b && t(6, (f = b.step));
    }),
    [s, a, c, o, i, l, f, d, h, _, k]
  );
}
class we extends ue {
  constructor(e) {
    super();
    fe(this, e, Hu, Vu, ce, {
      min: 3,
      max: 4,
      handleUpdateFunction: 5,
      value: 0,
      step: 6,
    });
  }
}
function Ru(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S,
    D,
    Y,
    $,
    W,
    q,
    j,
    x,
    V;
  s = new Ho({
    props: {
      valuesArray: $r,
      value: n[1].layout,
      handleSelectFunction: ft.updateLayout,
    },
  });
  function Q(v) {
    n[2](v);
  }
  let M = { min: -100, max: 200 };
  n[1].iconBetweenSpacing !== void 0 && (M.value = n[1].iconBetweenSpacing),
    (h = new we({ props: M })),
    te.push(() => oe(h, "value", Q));
  function X(v) {
    n[3](v);
  }
  let p = { min: -100, max: 500 };
  n[1].yAxisSpacing !== void 0 && (p.value = n[1].yAxisSpacing),
    (S = new we({ props: p })),
    te.push(() => oe(S, "value", X));
  function z(v) {
    n[4](v);
  }
  let J = { min: -100, max: 500 };
  return (
    n[1].xAxisSpacing !== void 0 && (J.value = n[1].xAxisSpacing),
    (j = new we({ props: J })),
    te.push(() => oe(j, "value", z)),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          (o = A("div")),
          (i = A("p")),
          (i.textContent = "Icon Layout"),
          (l = y()),
          P(s.$$.fragment),
          (f = y()),
          (u = A("div")),
          (a = A("div")),
          (c = A("p")),
          (c.textContent = "Between Icon Spacing"),
          (d = y()),
          P(h.$$.fragment),
          (k = y()),
          (b = A("div")),
          (w = A("p")),
          (w.textContent = "Y-Axis Spacing"),
          (g = y()),
          P(S.$$.fragment),
          (Y = y()),
          ($ = A("div")),
          (W = A("p")),
          (W.textContent = "X-Axis Spacing"),
          (q = y()),
          P(j.$$.fragment),
          r(i, "class", "text-lg text-center mb-2"),
          r(o, "class", "w-55"),
          r(t, "class", "flex justify-center mb-4"),
          r(c, "class", "text-base text-center mb-2"),
          r(w, "class", "text-base text-center mb-2"),
          r(W, "class", "text-base text-center mb-2"),
          r(
            u,
            "class",
            "mx-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-end mb-8"
          ),
          r(e, "class", "text-sm flex flex-col text-[#e8e8e8]");
      },
      m(v, ae) {
        H(v, e, ae),
          m(e, t),
          m(t, o),
          m(o, i),
          m(o, l),
          B(s, o, null),
          m(e, f),
          m(e, u),
          m(u, a),
          m(a, c),
          m(a, d),
          B(h, a, null),
          m(u, k),
          m(u, b),
          m(b, w),
          m(b, g),
          B(S, b, null),
          m(u, Y),
          m(u, $),
          m($, W),
          m($, q),
          B(j, $, null),
          (V = !0);
      },
      p(v, ae) {
        const ee = {};
        ae & 2 && (ee.value = v[1].layout), s.$set(ee);
        const K = {};
        !_ &&
          ae & 2 &&
          ((_ = !0), (K.value = v[1].iconBetweenSpacing), ie(() => (_ = !1))),
          h.$set(K);
        const I = {};
        !D &&
          ae & 2 &&
          ((D = !0), (I.value = v[1].yAxisSpacing), ie(() => (D = !1))),
          S.$set(I);
        const ke = {};
        !x &&
          ae & 2 &&
          ((x = !0), (ke.value = v[1].xAxisSpacing), ie(() => (x = !1))),
          j.$set(ke);
      },
      i(v) {
        V ||
          (C(s.$$.fragment, v),
          C(h.$$.fragment, v),
          C(S.$$.fragment, v),
          C(j.$$.fragment, v),
          (V = !0));
      },
      o(v) {
        T(s.$$.fragment, v),
          T(h.$$.fragment, v),
          T(S.$$.fragment, v),
          T(j.$$.fragment, v),
          (V = !1);
      },
      d(v) {
        v && E(e), U(s), U(h), U(S), U(j);
      },
    }
  );
}
function Pu(n) {
  let e, t, o, i, l;
  function s(u) {
    n[5](u);
  }
  let f = {
    name: "Global Status Icon Layout Settings",
    icon: Ur,
    color: "white",
    $$slots: { default: [Ru] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Po({ props: f })),
    te.push(() => oe(e, "group", s)),
    {
      c() {
        P(e.$$.fragment), (o = y()), (i = A("hr"));
      },
      m(u, a) {
        B(e, u, a), H(u, o, a), H(u, i, a), (l = !0);
      },
      p(u, [a]) {
        const c = {};
        a & 66 && (c.$$scope = { dirty: a, ctx: u }),
          !t && a & 1 && ((t = !0), (c.group = u[0]), ie(() => (t = !1))),
          e.$set(c);
      },
      i(u) {
        l || (C(e.$$.fragment, u), (l = !0));
      },
      o(u) {
        T(e.$$.fragment, u), (l = !1);
      },
      d(u) {
        U(e, u), u && E(o), u && E(i);
      },
    }
  );
}
function Bu(n, e, t) {
  let o;
  de(n, ft, (a) => t(1, (o = a)));
  let { group: i = "" } = e;
  function l(a) {
    n.$$.not_equal(o.iconBetweenSpacing, a) &&
      ((o.iconBetweenSpacing = a), ft.set(o));
  }
  function s(a) {
    n.$$.not_equal(o.yAxisSpacing, a) && ((o.yAxisSpacing = a), ft.set(o));
  }
  function f(a) {
    n.$$.not_equal(o.xAxisSpacing, a) && ((o.xAxisSpacing = a), ft.set(o));
  }
  function u(a) {
    (i = a), t(0, i);
  }
  return (
    (n.$$set = (a) => {
      "group" in a && t(0, (i = a.group));
    }),
    [i, o, l, s, f, u]
  );
}
class Uu extends ue {
  constructor(e) {
    super();
    fe(this, e, Bu, Pu, ce, { group: 0 });
  }
}
class Dn {
  constructor(e, t) {
    We(this, "mode");
    We(this, "data");
    (this.mode = e), (this.data = t);
  }
  static rgba(e) {
    return new Dn("rgb", e);
  }
  static hex(e) {
    return new Dn("rgb", vi(e));
  }
  static hsl(e) {
    return new Dn("hsl", e);
  }
  static hcl(e) {
    return new Dn("hcl", e);
  }
  alter(e, t, o) {
    const i = this.to(e);
    let l = JSON.parse(JSON.stringify(i.data));
    return (
      e === "rgb" && t === "a" ? (l.opacity = o) : (l[t] = o), new Dn(e, l)
    );
  }
  get(e, t) {
    return e === "rgb" && t === "a"
      ? this.to(e).data.opacity
      : this.to(e).data[t];
  }
  tuple() {
    return this.mode.split("").map((e) => this.data[e]);
  }
  to(e) {
    if (this.mode === e) return this;
    if (this.mode === "rgb") {
      const t = this.tuple(),
        o = vi(...t),
        i = Ko[e](o);
      return new Dn(e, i);
    } else if (e === "rgb") {
      const t = this.tuple();
      let o = Ko[this.mode](...t).rgb();
      return (
        (o = Object.fromEntries(
          Object.entries(o).map(([i, l]) =>
            l < 0 ? [i, 0] : l > 255 ? [i, 255] : [i, l]
          )
        )),
        new Dn("rgb", o)
      );
    } else return this.to("rgb").to(e);
  }
  toHex() {
    const e = Object.values(this.data);
    return Ko[this.mode](...e).formatHex8();
  }
  isDark() {
    let e = this.to("rgb").data;
    return e.r * 0.299 + e.g * 0.587 + e.b * 0.114 <= 186;
  }
}
const nt = {
  hsl: {
    h: { extent: [0, 360], scale: 1, title: "hue" },
    s: { extent: [0, 100], scale: 100, title: "saturation" },
    l: { extent: [0, 100], scale: 100, title: "luminance" },
  },
  hcl: {
    h: { extent: [0, 360], scale: 1, title: "hue" },
    c: { extent: [0, 150], scale: 1, title: "chroma" },
    l: { extent: [0, 100], scale: 1, title: "luminance" },
  },
  lab: {
    l: { extent: [0, 100], scale: 1, title: "L" },
    a: { extent: [-160, 160], scale: 1, title: "a" },
    b: { extent: [-160, 160], scale: 1, title: "b" },
  },
  rgb: {
    r: { extent: [0, 255], scale: 1, title: "red" },
    g: { extent: [0, 255], scale: 1, title: "green" },
    b: { extent: [0, 255], scale: 1, title: "blue" },
    a: { extent: [0, 100], scale: 100, title: "opacity" },
  },
};
function Wo(n) {
  let [e, t] = n.split(".", 2);
  return { scale: e, dim: t, data: nt[e][t] };
}
function tr(n) {
  let e = n.clientX,
    t = n.clientY,
    o = n.target.getBoundingClientRect();
  const i = e - o.x,
    l = t - o.y;
  return {
    clientX: e,
    clientY: t,
    offsetX: o.x,
    offsetY: o.y,
    relativeX: i,
    relativeY: l,
  };
}
const zu = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
};
function Uo(n) {
  let t = n.changedTouches[0],
    o = zu[n.type];
  if (!o) return;
  let i = new MouseEvent(o, {
    screenX: t.screenX,
    screenY: t.screenY,
    clientX: t.clientX,
    clientY: t.clientY,
    button: 0,
    buttons: 1,
  });
  n.target.dispatchEvent(i), n.preventDefault();
}
function or(n) {
  n.addEventListener("touchstart", Uo, !0),
    n.addEventListener("touchmove", Uo, !0),
    n.addEventListener("touchend", Uo, !0),
    n.addEventListener("touchcancel", Uo, !0);
}
function Lu(n) {
  let e, t, o, i, l;
  return {
    c() {
      (e = A("div")),
        (t = A("canvas")),
        r(t, "width", n[0]),
        r(t, "height", n[1]),
        r(t, "class", "svelte-1q93mbr"),
        r(e, "class", "scrollbar svelte-1q93mbr"),
        Mt(() => n[14].call(e));
    },
    m(s, f) {
      H(s, e, f),
        m(e, t),
        n[13](t),
        (o = Zl(e, n[14].bind(e))),
        i ||
          ((l = [Ke(t, "mousedown", n[5]), Ke(t, "mousemove", n[5])]),
          (i = !0));
    },
    p(s, [f]) {
      f & 1 && r(t, "width", s[0]), f & 2 && r(t, "height", s[1]);
    },
    i: Te,
    o: Te,
    d(s) {
      s && E(e), n[13](null), o(), (i = !1), Ro(l);
    },
  };
}
function qu(n, e, t) {
  let o,
    i,
    l,
    { color: s = Dn.hex("#00fff00") } = e,
    { dimension: f = "hsl.h" } = e,
    { detail: u = 100 } = e,
    { width: a = null } = e,
    { height: c = null } = e,
    d,
    h,
    _,
    k;
  Pt(() => {
    t(9, (h = d.getContext("2d"))), or(d);
  });
  function b(S) {
    if (S.buttons === 1) {
      let $ =
        (tr(S).relativeX / (_ - 2)) * (o.data.extent[1] - o.data.extent[0]) +
        o.data.extent[0];
      $ > o.data.extent[1] && ($ = o.data.extent[1]),
        $ < o.data.extent[0] && ($ = o.data.extent[0]),
        t(6, (s = s.alter(o.scale, o.dim, $ / o.data.scale)));
    }
  }
  function w(S) {
    te[S ? "unshift" : "push"](() => {
      (d = S), t(4, d);
    });
  }
  function g() {
    (_ = this.clientWidth), (k = this.clientHeight), t(2, _), t(3, k);
  }
  return (
    (n.$$set = (S) => {
      "color" in S && t(6, (s = S.color)),
        "dimension" in S && t(7, (f = S.dimension)),
        "detail" in S && t(8, (u = S.detail)),
        "width" in S && t(0, (a = S.width)),
        "height" in S && t(1, (c = S.height));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 128 && t(10, (o = Wo(f))),
        n.$$.dirty & 1088 && t(12, (i = s.get(o.scale, o.dim) * o.data.scale)),
        n.$$.dirty & 5124 &&
          t(
            11,
            (l =
              ((_ - 2) * (i - o.data.extent[0])) /
              (o.data.extent[1] - o.data.extent[0]))
          ),
        n.$$.dirty & 3916 && h)
      ) {
        t(9, (h.imageSmoothingEnabled = !1), h), h.clearRect(0, 0, _, k);
        let S = Math.min(u, _ - 2),
          D = (_ - 2) / S,
          Y = o.data.extent[1] - o.data.extent[0];
        const $ = s.to(o.scale);
        for (let W = 0; W <= S; W++) {
          const q = ((W / S) * Y + o.data.extent[0]) / o.data.scale,
            j = $.alter(o.scale, o.dim, q);
          t(9, (h.fillStyle = j.toHex()), h),
            h.fillRect(Math.round(W * D), 0, Math.ceil(D), k);
        }
        t(9, (h.fillStyle = "#ffffff"), h),
          h.fillRect(l - 1, 0, 3, k),
          t(9, (h.fillStyle = "#000000"), h),
          h.fillRect(l, 0, 1, k);
      }
    }),
    [a, c, _, k, d, b, s, f, u, h, o, l, i, w, g]
  );
}
class Nu extends ue {
  constructor(e) {
    super();
    fe(this, e, qu, Lu, ce, {
      color: 6,
      dimension: 7,
      detail: 8,
      width: 0,
      height: 1,
    });
  }
}
function ju(n) {
  let e, t, o, i, l;
  return {
    c() {
      (e = A("div")),
        (t = A("canvas")),
        r(t, "width", n[0]),
        r(t, "height", n[1]),
        r(t, "class", "svelte-1vtq5xo"),
        r(e, "class", "matrix svelte-1vtq5xo"),
        Mt(() => n[19].call(e));
    },
    m(s, f) {
      H(s, e, f),
        m(e, t),
        n[18](t),
        (o = Zl(e, n[19].bind(e))),
        i ||
          ((l = [Ke(t, "mousedown", n[5]), Ke(t, "mousemove", n[5])]),
          (i = !0));
    },
    p(s, [f]) {
      f & 1 && r(t, "width", s[0]), f & 2 && r(t, "height", s[1]);
    },
    i: Te,
    o: Te,
    d(s) {
      s && E(e), n[18](null), o(), (i = !1), Ro(l);
    },
  };
}
function Gu(n, e, t) {
  let o,
    i,
    l,
    s,
    f,
    u,
    { color: a = Dn.hex("#00ff00") } = e,
    { dimensionX: c = "hsl.l" } = e,
    { dimensionY: d = "hsl.s" } = e,
    { detailX: h = 100 } = e,
    { detailY: _ = 100 } = e,
    { width: k = null } = e,
    { height: b = null } = e,
    w,
    g,
    S,
    D;
  Pt(() => {
    t(11, (g = w.getContext("2d"))), or(w);
  });
  function Y(q) {
    if (q.buttons === 1) {
      const j = tr(q);
      let x = j.relativeX,
        V = D - 2 - j.relativeY,
        Q =
          (x / (S - 2)) * (o.data.extent[1] - o.data.extent[0]) +
          o.data.extent[0];
      Q > o.data.extent[1] && (Q = o.data.extent[1]),
        Q < o.data.extent[0] && (Q = o.data.extent[0]);
      let M =
        (V / (D - 2)) * (i.data.extent[1] - i.data.extent[0]) +
        i.data.extent[0];
      M > i.data.extent[1] && (M = i.data.extent[1]),
        M < i.data.extent[0] && (M = i.data.extent[0]);
      const X = a.alter(i.scale, i.dim, M / i.data.scale);
      t(6, (a = X.alter(o.scale, o.dim, Q / o.data.scale)));
    }
  }
  function $(q) {
    te[q ? "unshift" : "push"](() => {
      (w = q), t(4, w);
    });
  }
  function W() {
    (S = this.clientWidth), (D = this.clientHeight), t(2, S), t(3, D);
  }
  return (
    (n.$$set = (q) => {
      "color" in q && t(6, (a = q.color)),
        "dimensionX" in q && t(7, (c = q.dimensionX)),
        "dimensionY" in q && t(8, (d = q.dimensionY)),
        "detailX" in q && t(9, (h = q.detailX)),
        "detailY" in q && t(10, (_ = q.detailY)),
        "width" in q && t(0, (k = q.width)),
        "height" in q && t(1, (b = q.height));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 128 && t(12, (o = Wo(c))),
        n.$$.dirty & 256 && t(13, (i = Wo(d))),
        n.$$.dirty & 4160 && t(17, (l = a.get(o.scale, o.dim) * o.data.scale)),
        n.$$.dirty & 8256 && t(16, (s = a.get(i.scale, i.dim) * i.data.scale)),
        n.$$.dirty & 135172 &&
          t(
            15,
            (f =
              (S * (l - o.data.extent[0])) /
              (o.data.extent[1] - o.data.extent[0]))
          ),
        n.$$.dirty & 73736 &&
          t(
            14,
            (u =
              D -
              (D * (s - i.data.extent[0])) /
                (i.data.extent[1] - i.data.extent[0]))
          ),
        n.$$.dirty & 65100 && g)
      ) {
        g.clearRect(0, 0, S, D), t(11, (g.imageSmoothingEnabled = !1), g);
        let q = Math.min(h, S - 2),
          j = Math.min(_, D - 2),
          x = (S - 2) / q,
          V = (D - 2) / j,
          Q = o.data.extent[1] - o.data.extent[0],
          M = i.data.extent[1] - i.data.extent[0];
        const X = a.to(i.scale);
        for (let p = 0; p <= j; p++) {
          const z = ((p / _) * M + i.data.extent[0]) / i.data.scale,
            J = X.alter(i.scale, i.dim, z);
          for (let v = 0; v <= q; v++) {
            const ae = ((v / h) * Q + o.data.extent[0]) / o.data.scale,
              ee = J.alter(o.scale, o.dim, ae);
            t(11, (g.fillStyle = ee.toHex()), g),
              g.fillRect(
                Math.round(v * x),
                Math.round(D - 2 - p * V),
                Math.ceil(x),
                Math.ceil(V)
              );
          }
        }
        t(11, (g.fillStyle = "#ffffff"), g),
          g.fillRect(f - 2, u - 2, 5, 5),
          t(11, (g.fillStyle = "#000000"), g),
          g.fillRect(f - 1, u - 1, 3, 3);
      }
    }),
    [k, b, S, D, w, Y, a, c, d, h, _, g, o, i, u, f, s, l, $, W]
  );
}
class Wu extends ue {
  constructor(e) {
    super();
    fe(this, e, Gu, ju, ce, {
      color: 6,
      dimensionX: 7,
      dimensionY: 8,
      detailX: 9,
      detailY: 10,
      width: 0,
      height: 1,
    });
  }
}
function Ju(n) {
  let e, t, o, i, l;
  return {
    c() {
      (e = A("input")),
        r(e, "type", "number"),
        (e.value = n[1]),
        r(e, "min", (t = n[0].data.extent[0])),
        r(e, "max", (o = n[0].data.extent[1])),
        r(e, "class", "svelte-18y412o");
    },
    m(s, f) {
      H(s, e, f), i || ((l = Ke(e, "change", n[2])), (i = !0));
    },
    p(s, [f]) {
      f & 2 && e.value !== s[1] && (e.value = s[1]),
        f & 1 && t !== (t = s[0].data.extent[0]) && r(e, "min", t),
        f & 1 && o !== (o = s[0].data.extent[1]) && r(e, "max", o);
    },
    i: Te,
    o: Te,
    d(s) {
      s && E(e), (i = !1), l();
    },
  };
}
function Zu(n, e, t) {
  let o,
    i,
    l,
    { color: s = Dn.hex("#00ff00") } = e,
    { dimension: f = "hsl.h" } = e;
  function u(a) {
    let c = +a.target.value;
    t(3, (s = s.alter(o.scale, o.dim, c / o.data.scale)));
  }
  return (
    (n.$$set = (a) => {
      "color" in a && t(3, (s = a.color)),
        "dimension" in a && t(4, (f = a.dimension));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16 && t(0, (o = Wo(f))),
        n.$$.dirty & 9 && t(5, (i = s.get(o.scale, o.dim) * o.data.scale)),
        n.$$.dirty & 32 && t(1, (l = Math.round(i)));
    }),
    [o, l, u, s, f, i]
  );
}
class Ku extends ue {
  constructor(e) {
    super();
    fe(this, e, Zu, Ju, ce, { color: 3, dimension: 4 });
  }
}
function Qu(n) {
  let e, t, o;
  return {
    c() {
      (e = A("input")),
        r(e, "id", n[0]),
        (e.value = n[2]),
        R(e, "width", n[1] + "px"),
        r(e, "class", "svelte-h7kv0z");
    },
    m(i, l) {
      H(i, e, l), t || ((o = Ke(e, "change", n[3])), (t = !0));
    },
    p(i, [l]) {
      l & 1 && r(e, "id", i[0]),
        l & 4 && e.value !== i[2] && (e.value = i[2]),
        l & 2 && R(e, "width", i[1] + "px");
    },
    i: Te,
    o: Te,
    d(i) {
      i && E(e), (t = !1), o();
    },
  };
}
function xu(n, e, t) {
  let o,
    { color: i = Dn.hex("#00ff00") } = e,
    { id: l = null } = e,
    { width: s = null } = e;
  function f(u) {
    let a = Dn.hex(u.target.value);
    a.data != null ? t(4, (i = a)) : (u.target.value = o);
  }
  return (
    (n.$$set = (u) => {
      "color" in u && t(4, (i = u.color)),
        "id" in u && t(0, (l = u.id)),
        "width" in u && t(1, (s = u.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16 && t(2, (o = i.toHex()));
    }),
    [l, s, o, f, i]
  );
}
class $u extends ue {
  constructor(e) {
    super();
    fe(this, e, xu, Qu, ce, { color: 4, id: 0, width: 1 });
  }
}
function ji(n, e, t) {
  const o = n.slice();
  return (o[34] = e[t]), o;
}
function Gi(n, e, t) {
  const o = n.slice();
  return (o[37] = e[t]), o;
}
function Wi(n, e, t) {
  const o = n.slice();
  return (o[34] = e[t]), o;
}
function Ji(n) {
  let e, t, o;
  return {
    c() {
      (e = A("div")), r(e, "class", "color-picker-background svelte-imelgj");
    },
    m(i, l) {
      H(i, e, l), t || ((o = Ke(e, "click", n[23])), (t = !0));
    },
    p: Te,
    d(i) {
      i && E(e), (t = !1), o();
    },
  };
}
function Zi(n) {
  let e, t, o;
  return {
    c() {
      (e = A("div")),
        r(e, "class", "color-picker-handle svelte-imelgj"),
        R(e, "width", n[7] + "px"),
        R(e, "height", n[8] + "px"),
        R(e, "background", n[0].toHex());
    },
    m(i, l) {
      H(i, e, l), t || ((o = Ke(e, "click", n[22])), (t = !0));
    },
    p(i, l) {
      l[0] & 128 && R(e, "width", i[7] + "px"),
        l[0] & 256 && R(e, "height", i[8] + "px"),
        l[0] & 1 && R(e, "background", i[0].toHex());
    },
    d(i) {
      i && E(e), (t = !1), o();
    },
  };
}
function Ki(n) {
  let e,
    t,
    o,
    i,
    l = n[9] && Qi(n),
    s = n[3] && xi(n),
    f = n[10] && ul(n);
  return {
    c() {
      (e = A("div")),
        l && l.c(),
        (t = y()),
        s && s.c(),
        (o = y()),
        f && f.c(),
        r(e, "class", "color-picker-controls svelte-imelgj"),
        R(e, "background", n[4]);
    },
    m(u, a) {
      H(u, e, a),
        l && l.m(e, null),
        m(e, t),
        s && s.m(e, null),
        m(e, o),
        f && f.m(e, null),
        (i = !0);
    },
    p(u, a) {
      u[9]
        ? l
          ? (l.p(u, a), a[0] & 512 && C(l, 1))
          : ((l = Qi(u)), l.c(), C(l, 1), l.m(e, t))
        : l &&
          (he(),
          T(l, 1, 1, () => {
            l = null;
          }),
          ge()),
        u[3]
          ? s
            ? (s.p(u, a), a[0] & 8 && C(s, 1))
            : ((s = xi(u)), s.c(), C(s, 1), s.m(e, o))
          : s &&
            (he(),
            T(s, 1, 1, () => {
              s = null;
            }),
            ge()),
        u[10]
          ? f
            ? (f.p(u, a), a[0] & 1024 && C(f, 1))
            : ((f = ul(u)), f.c(), C(f, 1), f.m(e, null))
          : f &&
            (he(),
            T(f, 1, 1, () => {
              f = null;
            }),
            ge()),
        (!i || a[0] & 16) && R(e, "background", u[4]);
    },
    i(u) {
      i || (C(l), C(s), C(f), (i = !0));
    },
    o(u) {
      T(l), T(s), T(f), (i = !1);
    },
    d(u) {
      u && E(e), l && l.d(), s && s.d(), f && f.d();
    },
  };
}
function Qi(n) {
  let e, t, o;
  function i(s) {
    n[26](s);
  }
  let l = { dimensionX: n[18], dimensionY: n[19], width: n[14], height: n[15] };
  return (
    n[0] !== void 0 && (l.color = n[0]),
    (e = new Wu({ props: l })),
    te.push(() => oe(e, "color", i)),
    {
      c() {
        P(e.$$.fragment);
      },
      m(s, f) {
        B(e, s, f), (o = !0);
      },
      p(s, f) {
        const u = {};
        f[0] & 262144 && (u.dimensionX = s[18]),
          f[0] & 524288 && (u.dimensionY = s[19]),
          f[0] & 16384 && (u.width = s[14]),
          f[0] & 32768 && (u.height = s[15]),
          !t && f[0] & 1 && ((t = !0), (u.color = s[0]), ie(() => (t = !1))),
          e.$set(u);
      },
      i(s) {
        o || (C(e.$$.fragment, s), (o = !0));
      },
      o(s) {
        T(e.$$.fragment, s), (o = !1);
      },
      d(s) {
        U(e, s);
      },
    }
  );
}
function xi(n) {
  let e,
    t,
    o,
    i = n[6] && $i(n),
    l = Object.keys(nt),
    s = [];
  for (let u = 0; u < l.length; u += 1) s[u] = al(ji(n, l, u));
  const f = (u) =>
    T(s[u], 1, 1, () => {
      s[u] = null;
    });
  return {
    c() {
      i && i.c(), (e = y());
      for (let u = 0; u < s.length; u += 1) s[u].c();
      t = dn();
    },
    m(u, a) {
      i && i.m(u, a), H(u, e, a);
      for (let c = 0; c < s.length; c += 1) s[c].m(u, a);
      H(u, t, a), (o = !0);
    },
    p(u, a) {
      if (
        (u[6]
          ? i
            ? i.p(u, a)
            : ((i = $i(u)), i.c(), i.m(e.parentNode, e))
          : i && (i.d(1), (i = null)),
        a[0] & 2177103)
      ) {
        l = Object.keys(nt);
        let c;
        for (c = 0; c < l.length; c += 1) {
          const d = ji(u, l, c);
          s[c]
            ? (s[c].p(d, a), C(s[c], 1))
            : ((s[c] = al(d)), s[c].c(), C(s[c], 1), s[c].m(t.parentNode, t));
        }
        for (he(), c = l.length; c < s.length; c += 1) f(c);
        ge();
      }
    },
    i(u) {
      if (!o) {
        for (let a = 0; a < l.length; a += 1) C(s[a]);
        o = !0;
      }
    },
    o(u) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1) T(s[a]);
      o = !1;
    },
    d(u) {
      i && i.d(u), u && E(e), so(s, u), u && E(t);
    },
  };
}
function $i(n) {
  let e,
    t = Object.keys(nt),
    o = [];
  for (let i = 0; i < t.length; i += 1) o[i] = nl(Wi(n, t, i));
  return {
    c() {
      e = A("div");
      for (let i = 0; i < o.length; i += 1) o[i].c();
      r(e, "class", "tab-bar svelte-imelgj");
    },
    m(i, l) {
      H(i, e, l);
      for (let s = 0; s < o.length; s += 1) o[s].m(e, null);
    },
    p(i, l) {
      if (l[0] & 14) {
        t = Object.keys(nt);
        let s;
        for (s = 0; s < t.length; s += 1) {
          const f = Wi(i, t, s);
          o[s] ? o[s].p(f, l) : ((o[s] = nl(f)), o[s].c(), o[s].m(e, null));
        }
        for (; s < o.length; s += 1) o[s].d(1);
        o.length = t.length;
      }
    },
    d(i) {
      i && E(e), so(o, i);
    },
  };
}
function el(n) {
  let e,
    t = n[34] + "",
    o,
    i,
    l,
    s;
  function f() {
    return n[27](n[34]);
  }
  return {
    c() {
      (e = A("div")),
        (o = be(t)),
        r(
          e,
          "class",
          (i = "tab " + (n[2] === n[34] ? "active" : "") + " svelte-imelgj")
        );
    },
    m(u, a) {
      H(u, e, a), m(e, o), l || ((s = Ke(e, "click", f)), (l = !0));
    },
    p(u, a) {
      (n = u),
        a[0] & 4 &&
          i !==
            (i =
              "tab " + (n[2] === n[34] ? "active" : "") + " svelte-imelgj") &&
          r(e, "class", i);
    },
    d(u) {
      u && E(e), (l = !1), s();
    },
  };
}
function nl(n) {
  let e = Object.keys(nt[n[34]]).some(o),
    t;
  function o(...l) {
    return n[25](n[34], ...l);
  }
  let i = e && el(n);
  return {
    c() {
      i && i.c(), (t = dn());
    },
    m(l, s) {
      i && i.m(l, s), H(l, t, s);
    },
    p(l, s) {
      (n = l),
        s[0] & 8 && (e = Object.keys(nt[n[34]]).some(o)),
        e
          ? i
            ? i.p(n, s)
            : ((i = el(n)), i.c(), i.m(t.parentNode, t))
          : i && (i.d(1), (i = null));
    },
    d(l) {
      i && i.d(l), l && E(t);
    },
  };
}
function tl(n) {
  let e,
    t,
    o,
    i = Object.keys(nt[n[34]]),
    l = [];
  for (let f = 0; f < i.length; f += 1) l[f] = sl(Gi(n, i, f));
  const s = (f) =>
    T(l[f], 1, 1, () => {
      l[f] = null;
    });
  return {
    c() {
      e = A("div");
      for (let f = 0; f < l.length; f += 1) l[f].c();
      (t = y()), r(e, "class", "group svelte-imelgj");
    },
    m(f, u) {
      H(f, e, u);
      for (let a = 0; a < l.length; a += 1) l[a].m(e, null);
      m(e, t), (o = !0);
    },
    p(f, u) {
      if (u[0] & 2177035) {
        i = Object.keys(nt[f[34]]);
        let a;
        for (a = 0; a < i.length; a += 1) {
          const c = Gi(f, i, a);
          l[a]
            ? (l[a].p(c, u), C(l[a], 1))
            : ((l[a] = sl(c)), l[a].c(), C(l[a], 1), l[a].m(e, t));
        }
        for (he(), a = i.length; a < l.length; a += 1) s(a);
        ge();
      }
    },
    i(f) {
      if (!o) {
        for (let u = 0; u < i.length; u += 1) C(l[u]);
        o = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1) T(l[u]);
      o = !1;
    },
    d(f) {
      f && E(e), so(l, f);
    },
  };
}
function ol(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u = n[13] && il(n),
    a = n[12] && ll(n);
  function c(_) {
    n[30](_);
  }
  let d = { width: n[21], height: n[16], dimension: n[34] + "." + n[37] };
  n[0] !== void 0 && (d.color = n[0]),
    (i = new Nu({ props: d })),
    te.push(() => oe(i, "color", c));
  let h = n[11] && rl(n);
  return {
    c() {
      (e = A("div")),
        u && u.c(),
        (t = y()),
        a && a.c(),
        (o = y()),
        P(i.$$.fragment),
        (s = y()),
        h && h.c(),
        r(e, "class", "slider svelte-imelgj");
    },
    m(_, k) {
      H(_, e, k),
        u && u.m(e, null),
        m(e, t),
        a && a.m(e, null),
        m(e, o),
        B(i, e, null),
        m(e, s),
        h && h.m(e, null),
        (f = !0);
    },
    p(_, k) {
      _[13]
        ? u
          ? u.p(_, k)
          : ((u = il(_)), u.c(), u.m(e, t))
        : u && (u.d(1), (u = null)),
        _[12]
          ? a
            ? a.p(_, k)
            : ((a = ll(_)), a.c(), a.m(e, o))
          : a && (a.d(1), (a = null));
      const b = {};
      k[0] & 2097152 && (b.width = _[21]),
        k[0] & 65536 && (b.height = _[16]),
        !l && k[0] & 1 && ((l = !0), (b.color = _[0]), ie(() => (l = !1))),
        i.$set(b),
        _[11]
          ? h
            ? (h.p(_, k), k[0] & 2048 && C(h, 1))
            : ((h = rl(_)), h.c(), C(h, 1), h.m(e, null))
          : h &&
            (he(),
            T(h, 1, 1, () => {
              h = null;
            }),
            ge());
    },
    i(_) {
      f || (C(i.$$.fragment, _), C(h), (f = !0));
    },
    o(_) {
      T(i.$$.fragment, _), T(h), (f = !1);
    },
    d(_) {
      _ && E(e), u && u.d(), a && a.d(), U(i), h && h.d();
    },
  };
}
function il(n) {
  let e, t, o;
  return {
    c() {
      (e = A("input")),
        r(e, "type", "radio"),
        (e.__value = n[34] + "." + n[37]),
        (e.value = e.__value),
        r(e, "id", n[34] + "-" + n[37]),
        r(e, "class", "svelte-imelgj"),
        n[29][0].push(e);
    },
    m(i, l) {
      H(i, e, l),
        (e.checked = e.__value === n[1]),
        t || ((o = Ke(e, "change", n[28])), (t = !0));
    },
    p(i, l) {
      l[0] & 2 && (e.checked = e.__value === i[1]);
    },
    d(i) {
      i && E(e), n[29][0].splice(n[29][0].indexOf(e), 1), (t = !1), o();
    },
  };
}
function ll(n) {
  let e,
    t = n[37].toUpperCase() + "",
    o,
    i;
  return {
    c() {
      (e = A("label")),
        (o = be(t)),
        r(e, "for", (i = n[34] + "-" + n[37])),
        r(e, "class", "svelte-imelgj");
    },
    m(l, s) {
      H(l, e, s), m(e, o);
    },
    p: Te,
    d(l) {
      l && E(e);
    },
  };
}
function rl(n) {
  let e, t, o;
  function i(s) {
    n[31](s);
  }
  let l = { dimension: n[34] + "." + n[37] };
  return (
    n[0] !== void 0 && (l.color = n[0]),
    (e = new Ku({ props: l })),
    te.push(() => oe(e, "color", i)),
    {
      c() {
        P(e.$$.fragment);
      },
      m(s, f) {
        B(e, s, f), (o = !0);
      },
      p(s, f) {
        const u = {};
        !t && f[0] & 1 && ((t = !0), (u.color = s[0]), ie(() => (t = !1))),
          e.$set(u);
      },
      i(s) {
        o || (C(e.$$.fragment, s), (o = !0));
      },
      o(s) {
        T(e.$$.fragment, s), (o = !1);
      },
      d(s) {
        U(e, s);
      },
    }
  );
}
function sl(n) {
  let e,
    t,
    o = n[3][`${n[34]}.${n[37]}`] && ol(n);
  return {
    c() {
      o && o.c(), (e = dn());
    },
    m(i, l) {
      o && o.m(i, l), H(i, e, l), (t = !0);
    },
    p(i, l) {
      i[3][`${i[34]}.${i[37]}`]
        ? o
          ? (o.p(i, l), l[0] & 8 && C(o, 1))
          : ((o = ol(i)), o.c(), C(o, 1), o.m(e.parentNode, e))
        : o &&
          (he(),
          T(o, 1, 1, () => {
            o = null;
          }),
          ge());
    },
    i(i) {
      t || (C(o), (t = !0));
    },
    o(i) {
      T(o), (t = !1);
    },
    d(i) {
      o && o.d(i), i && E(e);
    },
  };
}
function al(n) {
  let e,
    t,
    o = (!n[6] || n[2] === n[34]) && tl(n);
  return {
    c() {
      o && o.c(), (e = dn());
    },
    m(i, l) {
      o && o.m(i, l), H(i, e, l), (t = !0);
    },
    p(i, l) {
      !i[6] || i[2] === i[34]
        ? o
          ? (o.p(i, l), l[0] & 68 && C(o, 1))
          : ((o = tl(i)), o.c(), C(o, 1), o.m(e.parentNode, e))
        : o &&
          (he(),
          T(o, 1, 1, () => {
            o = null;
          }),
          ge());
    },
    i(i) {
      t || (C(o), (t = !0));
    },
    o(i) {
      T(o), (t = !1);
    },
    d(i) {
      o && o.d(i), i && E(e);
    },
  };
}
function ul(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f = n[12] && fl();
  function u(c) {
    n[32](c);
  }
  let a = { width: n[20], id: "hex" };
  return (
    n[0] !== void 0 && (a.color = n[0]),
    (i = new $u({ props: a })),
    te.push(() => oe(i, "color", u)),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          f && f.c(),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text svelte-imelgj"),
          r(e, "class", "group svelte-imelgj");
      },
      m(c, d) {
        H(c, e, d),
          m(e, t),
          f && f.m(t, null),
          m(t, o),
          B(i, t, null),
          (s = !0);
      },
      p(c, d) {
        c[12] ? f || ((f = fl()), f.c(), f.m(t, o)) : f && (f.d(1), (f = null));
        const h = {};
        d[0] & 1048576 && (h.width = c[20]),
          !l && d[0] & 1 && ((l = !0), (h.color = c[0]), ie(() => (l = !1))),
          i.$set(h);
      },
      i(c) {
        s || (C(i.$$.fragment, c), (s = !0));
      },
      o(c) {
        T(i.$$.fragment, c), (s = !1);
      },
      d(c) {
        c && E(e), f && f.d(), U(i);
      },
    }
  );
}
function fl(n) {
  let e;
  return {
    c() {
      (e = A("label")),
        (e.textContent = "Hex"),
        r(e, "for", "hex"),
        r(e, "class", "svelte-imelgj");
    },
    m(t, o) {
      H(t, e, o);
    },
    d(t) {
      t && E(e);
    },
  };
}
function e0(n) {
  let e,
    t,
    o,
    i,
    l,
    s = n[5] && !n[17] && Ji(n),
    f = n[5] && Zi(n),
    u = n[5] && !n[17] && Ki(n);
  return {
    c() {
      (e = A("div")),
        s && s.c(),
        (t = y()),
        f && f.c(),
        (o = y()),
        u && u.c(),
        r(
          e,
          "class",
          (i = "color-picker " + (n[5] ? "collapse" : "") + " svelte-imelgj")
        );
    },
    m(a, c) {
      H(a, e, c),
        s && s.m(e, null),
        m(e, t),
        f && f.m(e, null),
        m(e, o),
        u && u.m(e, null),
        (l = !0);
    },
    p(a, c) {
      a[5] && !a[17]
        ? s
          ? s.p(a, c)
          : ((s = Ji(a)), s.c(), s.m(e, t))
        : s && (s.d(1), (s = null)),
        a[5]
          ? f
            ? f.p(a, c)
            : ((f = Zi(a)), f.c(), f.m(e, o))
          : f && (f.d(1), (f = null)),
        a[5] && !a[17]
          ? u
            ? (u.p(a, c), c[0] & 131104 && C(u, 1))
            : ((u = Ki(a)), u.c(), C(u, 1), u.m(e, null))
          : u &&
            (he(),
            T(u, 1, 1, () => {
              u = null;
            }),
            ge()),
        (!l ||
          (c[0] & 32 &&
            i !==
              (i =
                "color-picker " +
                (a[5] ? "collapse" : "") +
                " svelte-imelgj"))) &&
          r(e, "class", i);
    },
    i(a) {
      l || (C(u), (l = !0));
    },
    o(a) {
      T(u), (l = !1);
    },
    d(a) {
      a && E(e), s && s.d(), f && f.d(), u && u.d();
    },
  };
}
function n0(n, e, t) {
  let o,
    i,
    { colorString: l = "#ff9900" } = e,
    { color: s = Dn.hex(l) } = e;
  const f = zr();
  let { selectedDimension: u = "hsl.h" } = e,
    { selectedTab: a = "hsl" } = e,
    { background: c = "#fff" } = e,
    { collapse: d = !1 } = e,
    { tabbed: h = !1 } = e,
    { handleWidth: _ = 32 } = e,
    { handleHeight: k = 32 } = e,
    { showMatrix: b = !0 } = e,
    { showSliders: w = null } = e;
  if (w == null) {
    w = {};
    for (const I in nt) for (const ke in nt[I]) w[`${I}.${ke}`] = !0;
  }
  let { showHex: g = !0 } = e,
    { showNumeric: S = !0 } = e,
    { showLabels: D = !0 } = e,
    { selectDimensions: Y = !0 } = e,
    { matrixWidth: $ = 300 } = e,
    { matrixHeight: W = 200 } = e,
    { scrollbarHeight: q = 20 } = e,
    j = !0,
    x = null,
    V = null;
  const Q = () => {
      t(17, (j = !1)), f("pickerExpand", { collapsed: j, color: s });
    },
    M = () => {
      t(17, (j = !0)), f("pickerCollapse", { collapsed: j, color: s });
    },
    X = [[]],
    p = (I, ke) => w[`${I}.${ke}`];
  function z(I) {
    (s = I), t(0, s);
  }
  const J = (I) => {
    t(2, (a = I)), t(1, (u = `${I}.${Object.keys(nt[I])[0]}`));
  };
  function v() {
    (u = this.__value), t(1, u);
  }
  function ae(I) {
    (s = I), t(0, s);
  }
  function ee(I) {
    (s = I), t(0, s);
  }
  function K(I) {
    (s = I), t(0, s);
  }
  return (
    (n.$$set = (I) => {
      "colorString" in I && t(24, (l = I.colorString)),
        "color" in I && t(0, (s = I.color)),
        "selectedDimension" in I && t(1, (u = I.selectedDimension)),
        "selectedTab" in I && t(2, (a = I.selectedTab)),
        "background" in I && t(4, (c = I.background)),
        "collapse" in I && t(5, (d = I.collapse)),
        "tabbed" in I && t(6, (h = I.tabbed)),
        "handleWidth" in I && t(7, (_ = I.handleWidth)),
        "handleHeight" in I && t(8, (k = I.handleHeight)),
        "showMatrix" in I && t(9, (b = I.showMatrix)),
        "showSliders" in I && t(3, (w = I.showSliders)),
        "showHex" in I && t(10, (g = I.showHex)),
        "showNumeric" in I && t(11, (S = I.showNumeric)),
        "showLabels" in I && t(12, (D = I.showLabels)),
        "selectDimensions" in I && t(13, (Y = I.selectDimensions)),
        "matrixWidth" in I && t(14, ($ = I.matrixWidth)),
        "matrixHeight" in I && t(15, (W = I.matrixHeight)),
        "scrollbarHeight" in I && t(16, (q = I.scrollbarHeight));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty[0] & 1 && typeof s == "string" && t(0, (s = Dn.hex(s))),
        n.$$.dirty[0] & 2)
      ) {
        let [I, ke] = u.split(".", 2),
          Ce = Object.keys(nt[I]);
        Ce.splice(Ce.indexOf(ke), 1),
          t(18, (x = `${I}.${Ce[0]}`)),
          t(19, (V = `${I}.${Ce[1]}`));
      }
      n.$$.dirty[0] & 30720 &&
        t(21, (o = $ - (Y ? 25 : 0) - (D ? 25 : 0) - (S ? 65 : 0))),
        n.$$.dirty[0] & 20480 && t(20, (i = $ - (D ? 50 : 0)));
    }),
    [
      s,
      u,
      a,
      w,
      c,
      d,
      h,
      _,
      k,
      b,
      g,
      S,
      D,
      Y,
      $,
      W,
      q,
      j,
      x,
      V,
      i,
      o,
      Q,
      M,
      l,
      p,
      z,
      J,
      v,
      X,
      ae,
      ee,
      K,
    ]
  );
}
class t0 extends ue {
  constructor(e) {
    super();
    fe(
      this,
      e,
      n0,
      e0,
      ce,
      {
        colorString: 24,
        color: 0,
        selectedDimension: 1,
        selectedTab: 2,
        background: 4,
        collapse: 5,
        tabbed: 6,
        handleWidth: 7,
        handleHeight: 8,
        showMatrix: 9,
        showSliders: 3,
        showHex: 10,
        showNumeric: 11,
        showLabels: 12,
        selectDimensions: 13,
        matrixWidth: 14,
        matrixHeight: 15,
        scrollbarHeight: 16,
      },
      null,
      [-1, -1]
    );
  }
}
function o0(n) {
  let e, t, o, i;
  function l(f) {
    n[4](f);
  }
  let s = {
    colorString: n[0],
    background: i0,
    collapse: !0,
    handleWidth: 135,
    handleHeight: 40,
    tabbed: n[2].tabbed,
    selectedTab: n[2].selectedTab,
    selectedDimension: n[2].selectedDimension,
    showMatrix: n[2].showMatrix,
    showSliders: n[2].showSlidersGlobal && n[2].showSliders,
    showHex: n[2].showHex,
    showLabels: n[2].showLabels,
    showNumeric: n[2].showNumeric,
    selectDimensions: n[2].selectDimensions,
    matrixWidth: n[2].matrixWidth,
    matrixHeight: n[2].matrixHeight,
    scrollbarHeight: n[2].scrollbarHeight,
  };
  return (
    n[1] !== void 0 && (s.color = n[1]),
    (t = new t0({ props: s })),
    te.push(() => oe(t, "color", l)),
    {
      c() {
        (e = A("div")),
          P(t.$$.fragment),
          r(
            e,
            "class",
            "text-black flex flex-row mx-auto border-2 rounded-[8px] border-gray-600"
          );
      },
      m(f, u) {
        H(f, e, u), B(t, e, null), (i = !0);
      },
      p(f, [u]) {
        const a = {};
        u & 1 && (a.colorString = f[0]),
          !o && u & 2 && ((o = !0), (a.color = f[1]), ie(() => (o = !1))),
          t.$set(a);
      },
      i(f) {
        i || (C(t.$$.fragment, f), (i = !0));
      },
      o(f) {
        T(t.$$.fragment, f), (i = !1);
      },
      d(f) {
        f && E(e), U(t);
      },
    }
  );
}
const xo = "#03f0b5ff";
let i0 = "#fff";
function l0(n, e, t) {
  let { colorString: o = xo } = e,
    { updateFunction: i = null } = e,
    l = Dn.hex(o),
    s = {
      selectedDimension: "hsl.h",
      tabbed: !0,
      selectedTab: "hsl",
      showMatrix: !0,
      showSlidersGlobal: !0,
      showHex: !0,
      showNumeric: !0,
      showLabels: !0,
      showSliders: {
        "hsl.h": !0,
        "hsl.s": !0,
        "hsl.l": !0,
        "hcl.h": !0,
        "hcl.c": !0,
        "hcl.l": !0,
        "lab.l": !0,
        "lab.a": !0,
        "lab.b": !0,
        "rgb.r": !0,
        "rgb.g": !0,
        "rgb.b": !0,
        "rgb.a": !0,
      },
      selectDimensions: !0,
      matrixWidth: 300,
      matrixHeight: 200,
      scrollbarHeight: 20,
    };
  function f(u) {
    (l = u), t(1, l), t(0, o);
  }
  return (
    (n.$$set = (u) => {
      "colorString" in u && t(0, (o = u.colorString)),
        "updateFunction" in u && t(3, (i = u.updateFunction));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 1 && t(1, (l = Dn.hex(o != "" ? o : xo))),
        n.$$.dirty & 11 && i && l.toHex)
      ) {
        let u = l.toHex();
        u != o && u != xo && i(l.toHex());
      }
    }),
    [o, l, s, i, f]
  );
}
class Kt extends ue {
  constructor(e) {
    super();
    fe(this, e, l0, o0, ce, { colorString: 0, updateFunction: 3 });
  }
}
function cl(n) {
  let e, t, o, i, l, s;
  function f(a) {
    n[18](a);
  }
  let u = { min: 1, max: 25, step: 0.5, handleUpdateFunction: n[17] };
  return (
    n[8].icons[n[1]].ringSize !== void 0 &&
      (u.value = n[8].icons[n[1]].ringSize),
    (i = new we({ props: u })),
    te.push(() => oe(i, "value", f)),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "Ring Size"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2");
      },
      m(a, c) {
        H(a, e, c), m(e, t), m(e, o), B(i, e, null), (s = !0);
      },
      p(a, c) {
        const d = {};
        c[0] & 2 && (d.handleUpdateFunction = a[17]),
          !l &&
            c[0] & 258 &&
            ((l = !0),
            (d.value = a[8].icons[a[1]].ringSize),
            ie(() => (l = !1))),
          i.$set(d);
      },
      i(a) {
        s || (C(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        T(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && E(e), U(i);
      },
    }
  );
}
function hl(n) {
  let e, t, o, i, l, s;
  function f(a) {
    n[20](a);
  }
  let u = { center: !0, handleUpdateFunction: n[19] };
  return (
    n[8].icons[n[1]].displayOutline !== void 0 &&
      (u.checked = n[8].icons[n[1]].displayOutline),
    (i = new Jo({ props: u })),
    te.push(() => oe(i, "checked", f)),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "Show Progress Outline"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2");
      },
      m(a, c) {
        H(a, e, c), m(e, t), m(e, o), B(i, e, null), (s = !0);
      },
      p(a, c) {
        const d = {};
        c[0] & 2 && (d.handleUpdateFunction = a[19]),
          !l &&
            c[0] & 258 &&
            ((l = !0),
            (d.checked = a[8].icons[a[1]].displayOutline),
            ie(() => (l = !1))),
          i.$set(d);
      },
      i(a) {
        s || (C(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        T(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && E(e), U(i);
      },
    }
  );
}
function gl(n) {
  let e, t, o, i, l, s;
  function f(a) {
    n[34](a);
  }
  let u = { min: 0, max: 100, handleUpdateFunction: n[33] };
  return (
    n[8].icons[n[1]].xAxisRound !== void 0 &&
      (u.value = n[8].icons[n[1]].xAxisRound),
    (i = new we({ props: u })),
    te.push(() => oe(i, "value", f)),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "X-axis Curve"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2");
      },
      m(a, c) {
        H(a, e, c), m(e, t), m(e, o), B(i, e, null), (s = !0);
      },
      p(a, c) {
        const d = {};
        c[0] & 2 && (d.handleUpdateFunction = a[33]),
          !l &&
            c[0] & 258 &&
            ((l = !0),
            (d.value = a[8].icons[a[1]].xAxisRound),
            ie(() => (l = !1))),
          i.$set(d);
      },
      i(a) {
        s || (C(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        T(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && E(e), U(i);
      },
    }
  );
}
function dl(n) {
  let e, t, o, i, l, s;
  function f(a) {
    n[36](a);
  }
  let u = { min: 0, max: 100, handleUpdateFunction: n[35] };
  return (
    n[8].icons[n[1]].yAxisRound !== void 0 &&
      (u.value = n[8].icons[n[1]].yAxisRound),
    (i = new we({ props: u })),
    te.push(() => oe(i, "value", f)),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "Y-axis Curve"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2");
      },
      m(a, c) {
        H(a, e, c), m(e, t), m(e, o), B(i, e, null), (s = !0);
      },
      p(a, c) {
        const d = {};
        c[0] & 2 && (d.handleUpdateFunction = a[35]),
          !l &&
            c[0] & 258 &&
            ((l = !0),
            (d.value = a[8].icons[a[1]].yAxisRound),
            ie(() => (l = !1))),
          i.$set(d);
      },
      i(a) {
        s || (C(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        T(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && E(e), U(i);
      },
    }
  );
}
function ml(n) {
  let e, t, o, i, l, s, f, u;
  function a(h) {
    n[37](h);
  }
  function c(h) {
    n[38](h);
  }
  let d = { valuesArray: n[6] };
  return (
    n[7] !== void 0 && (d.value = n[7]),
    n[2] !== void 0 && (d.selectedIndex = n[2]),
    (l = new Ho({ props: d })),
    te.push(() => oe(l, "value", a)),
    te.push(() => oe(l, "selectedIndex", c)),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          (o = A("p")),
          (o.textContent = "Icon State"),
          (i = y()),
          P(l.$$.fragment),
          r(o, "class", "text-lg text-center mb-2"),
          r(t, "class", "w-50"),
          r(e, "class", "flex flex-row justify-center mt-4");
      },
      m(h, _) {
        H(h, e, _), m(e, t), m(t, o), m(t, i), B(l, t, null), (u = !0);
      },
      p(h, _) {
        const k = {};
        _[0] & 64 && (k.valuesArray = h[6]),
          !s && _[0] & 128 && ((s = !0), (k.value = h[7]), ie(() => (s = !1))),
          !f &&
            _[0] & 4 &&
            ((f = !0), (k.selectedIndex = h[2]), ie(() => (f = !1))),
          l.$set(k);
      },
      i(h) {
        u || (C(l.$$.fragment, h), (u = !0));
      },
      o(h) {
        T(l.$$.fragment, h), (u = !1);
      },
      d(h) {
        h && E(e), U(l);
      },
    }
  );
}
function _l(n) {
  let e, t, o, i, l;
  return (
    (i = new Kt({
      props: {
        colorString: n[4].icons[n[1]].colorEffects[n[2]].innerColor,
        updateFunction: n[54],
      },
    })),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "Inner Color"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2"),
          r(e, "class", "flex flex-col mx-auto");
      },
      m(s, f) {
        H(s, e, f), m(e, t), m(e, o), B(i, e, null), (l = !0);
      },
      p(s, f) {
        const u = {};
        f[0] & 22 &&
          (u.colorString = s[4].icons[s[1]].colorEffects[s[2]].innerColor),
          f[0] & 6 && (u.updateFunction = s[54]),
          i.$set(u);
      },
      i(s) {
        l || (C(i.$$.fragment, s), (l = !0));
      },
      o(s) {
        T(i.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && E(e), U(i);
      },
    }
  );
}
function r0(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S,
    D,
    Y,
    $,
    W,
    q,
    j,
    x,
    V,
    Q,
    M,
    X,
    p,
    z,
    J,
    v,
    ae,
    ee,
    K,
    I,
    ke,
    Ce,
    Ie,
    Xe,
    ve,
    Ne,
    Tn,
    je,
    Ee,
    se,
    Se,
    Ve,
    In,
    He,
    Re,
    yn,
    Pe,
    G,
    Nn,
    tn,
    jn,
    L,
    Ge,
    ct,
    ht,
    bn,
    pe,
    tt,
    Qe,
    pt,
    Gn,
    Xn,
    Wn,
    Jn,
    On,
    kn,
    De,
    Sn,
    Rn,
    Ct,
    Zn,
    Pn,
    Bn,
    vt,
    Be,
    on,
    Yt,
    Fn,
    gt,
    fn,
    dt,
    Un,
    ln,
    Dt,
    ot,
    cn,
    mt,
    Kn,
    an,
    Qn,
    At,
    it,
    Mn,
    _t,
    xn,
    Cn,
    hn,
    wt,
    zn,
    rn,
    Tt,
    lt,
    gn,
    bt,
    $n,
    Ln,
    rt,
    st,
    It,
    vn,
    En,
    Bt,
    kt,
    ye,
    Oe,
    at,
    Xt,
    uo,
    yt;
  s = new Ho({
    props: { valuesArray: li, value: n[1], handleSelectFunction: n[10] },
  });
  function To(F) {
    n[12](F);
  }
  let Ut = { valuesArray: Kl, handleSelectFunction: n[11] };
  n[8].icons[n[1]].shape !== void 0 && (Ut.value = n[8].icons[n[1]].shape),
    (d = new Ho({ props: Ut })),
    te.push(() => oe(d, "value", To));
  function Io(F) {
    n[14](F);
  }
  let zt = { min: 1, max: 200, handleUpdateFunction: n[13] };
  n[8].icons[n[1]].width !== void 0 && (zt.value = n[8].icons[n[1]].width),
    (W = new we({ props: zt })),
    te.push(() => oe(W, "value", Io));
  function yo(F) {
    n[16](F);
  }
  let Lt = { min: 1, max: 200, handleUpdateFunction: n[15] };
  n[8].icons[n[1]].height !== void 0 && (Lt.value = n[8].icons[n[1]].height),
    (M = new we({ props: Lt })),
    te.push(() => oe(M, "value", yo));
  let xe = n[8].icons[n[1]].ringSize != null && cl(n),
    Ue = n[8].icons[n[1]].displayOutline != null && hl(n);
  function $e(F) {
    n[22](F);
  }
  let ze = { min: -20, max: 20, step: 0.25, handleUpdateFunction: n[21] };
  n[8].icons[n[1]].translateX !== void 0 &&
    (ze.value = n[8].icons[n[1]].translateX),
    (K = new we({ props: ze })),
    te.push(() => oe(K, "value", $e));
  function Mo(F) {
    n[24](F);
  }
  let qt = { min: -20, max: 20, step: 0.25, handleUpdateFunction: n[23] };
  n[8].icons[n[1]].translateY !== void 0 &&
    (qt.value = n[8].icons[n[1]].translateY),
    (ve = new we({ props: qt })),
    te.push(() => oe(ve, "value", Mo));
  function Yo(F) {
    n[26](F);
  }
  let Nt = { min: 0, max: 360, handleUpdateFunction: n[25] };
  n[8].icons[n[1]].rotateDegree !== void 0 &&
    (Nt.value = n[8].icons[n[1]].rotateDegree),
    (Se = new we({ props: Nt })),
    te.push(() => oe(Se, "value", Yo));
  function Xo(F) {
    n[28](F);
  }
  let jt = { min: -10, max: 10, step: 0.01, handleUpdateFunction: n[27] };
  n[8].icons[n[1]].iconTranslateX !== void 0 &&
    (jt.value = n[8].icons[n[1]].iconTranslateX),
    (Pe = new we({ props: jt })),
    te.push(() => oe(Pe, "value", Xo));
  function Oo(F) {
    n[30](F);
  }
  let Gt = { min: -10, max: 10, step: 0.01, handleUpdateFunction: n[29] };
  n[8].icons[n[1]].iconTranslateY !== void 0 &&
    (Gt.value = n[8].icons[n[1]].iconTranslateY),
    (Ge = new we({ props: Gt })),
    te.push(() => oe(Ge, "value", Oo));
  function Fo(F) {
    n[32](F);
  }
  let Wt = { min: 0, max: 3, step: 0.01, handleUpdateFunction: n[31] };
  n[8].icons[n[1]].iconScaling !== void 0 &&
    (Wt.value = n[8].icons[n[1]].iconScaling),
    (Qe = new we({ props: Wt })),
    te.push(() => oe(Qe, "value", Fo));
  let en = n[8].icons[n[1]].xAxisRound != null && gl(n),
    Le = n[8].icons[n[1]].yAxisRound != null && dl(n),
    _e = n[3].length > 1 && ml(n);
  Zn = new Kt({
    props: {
      colorString: n[4].icons[n[1]].colorEffects[n[2]].progressColor,
      updateFunction: n[39],
    },
  });
  function Z(F) {
    n[41](F);
  }
  let me = { min: 0, max: 300, handleUpdateFunction: n[40] };
  n[4].icons[n[1]].colorEffects[n[2]].progressContrast !== void 0 &&
    (me.value = n[4].icons[n[1]].colorEffects[n[2]].progressContrast),
    (on = new we({ props: me })),
    te.push(() => oe(on, "value", Z));
  function Qt(F) {
    n[43](F);
  }
  let xt = { min: 0, max: 20, handleUpdateFunction: n[42] };
  n[4].icons[n[1]].colorEffects[n[2]].progressDropShadowAmount !== void 0 &&
    (xt.value = n[4].icons[n[1]].colorEffects[n[2]].progressDropShadowAmount),
    (Un = new we({ props: xt })),
    te.push(() => oe(Un, "value", Qt)),
    (Kn = new Kt({
      props: {
        colorString: n[4].icons[n[1]].colorEffects[n[2]].iconColor,
        updateFunction: n[44],
      },
    }));
  function $t(F) {
    n[46](F);
  }
  let eo = { min: 0, max: 300, handleUpdateFunction: n[45] };
  n[4].icons[n[1]].colorEffects[n[2]].iconContrast !== void 0 &&
    (eo.value = n[4].icons[n[1]].colorEffects[n[2]].iconContrast),
    (Mn = new we({ props: eo })),
    te.push(() => oe(Mn, "value", $t));
  function no(F) {
    n[48](F);
  }
  let to = { min: 0, max: 20, handleUpdateFunction: n[47] };
  n[4].icons[n[1]].colorEffects[n[2]].iconDropShadowAmount !== void 0 &&
    (to.value = n[4].icons[n[1]].colorEffects[n[2]].iconDropShadowAmount),
    (zn = new we({ props: to })),
    te.push(() => oe(zn, "value", no)),
    ($n = new Kt({
      props: {
        colorString: n[4].icons[n[1]].colorEffects[n[2]].outlineColor,
        updateFunction: n[49],
      },
    }));
  function oo(F) {
    n[51](F);
  }
  let io = { min: 0, max: 300, handleUpdateFunction: n[50] };
  n[4].icons[n[1]].colorEffects[n[2]].outlineContrast !== void 0 &&
    (io.value = n[4].icons[n[1]].colorEffects[n[2]].outlineContrast),
    (vn = new we({ props: io })),
    te.push(() => oe(vn, "value", oo));
  function lo(F) {
    n[53](F);
  }
  let ro = { min: 0, max: 20, handleUpdateFunction: n[52] };
  n[4].icons[n[1]].colorEffects[n[2]].outlineDropShadowAmount !== void 0 &&
    (ro.value = n[4].icons[n[1]].colorEffects[n[2]].outlineDropShadowAmount),
    (at = new we({ props: ro })),
    te.push(() => oe(at, "value", lo));
  let qe = n[4].icons[n[1]].editableColors.innerColor && _l(n);
  return {
    c() {
      (e = A("div")),
        (t = A("div")),
        (o = A("div")),
        (i = A("p")),
        (i.textContent = "Icon Status To Edit"),
        (l = y()),
        P(s.$$.fragment),
        (f = y()),
        (u = A("div")),
        (a = A("p")),
        (a.textContent = "Icon Shape"),
        (c = y()),
        P(d.$$.fragment),
        (_ = y()),
        (k = A("div")),
        (b = y()),
        (w = A("div")),
        (w.innerHTML = `<p class="text-xl font-bold">Single Icon Size &amp; Position Section</p> 
    <hr class="mb-6"/>`),
        (g = y()),
        (S = A("div")),
        (D = A("div")),
        (Y = A("p")),
        (Y.textContent = "Width Size"),
        ($ = y()),
        P(W.$$.fragment),
        (j = y()),
        (x = A("div")),
        (V = A("p")),
        (V.textContent = "Height Size"),
        (Q = y()),
        P(M.$$.fragment),
        (p = y()),
        xe && xe.c(),
        (z = y()),
        Ue && Ue.c(),
        (J = y()),
        (v = A("div")),
        (ae = A("p")),
        (ae.textContent = "X-axis Position"),
        (ee = y()),
        P(K.$$.fragment),
        (ke = y()),
        (Ce = A("div")),
        (Ie = A("p")),
        (Ie.textContent = "Y-axis Position"),
        (Xe = y()),
        P(ve.$$.fragment),
        (Tn = y()),
        (je = A("div")),
        (Ee = A("p")),
        (Ee.textContent = "Rotation"),
        (se = y()),
        P(Se.$$.fragment),
        (In = y()),
        (He = A("div")),
        (Re = A("p")),
        (Re.textContent = "Icon X-axis Position"),
        (yn = y()),
        P(Pe.$$.fragment),
        (Nn = y()),
        (tn = A("div")),
        (jn = A("p")),
        (jn.textContent = "Icon Y-axis Position"),
        (L = y()),
        P(Ge.$$.fragment),
        (ht = y()),
        (bn = A("div")),
        (pe = A("p")),
        (pe.textContent = "Icon Size"),
        (tt = y()),
        P(Qe.$$.fragment),
        (Gn = y()),
        en && en.c(),
        (Xn = y()),
        Le && Le.c(),
        (Wn = y()),
        (Jn = A("div")),
        (Jn.innerHTML = `<p class="text-xl font-bold">Single Icon Color Section</p> 
    <hr/>`),
        (On = y()),
        _e && _e.c(),
        (kn = y()),
        (De = A("div")),
        (Sn = A("div")),
        (Rn = A("p")),
        (Rn.textContent = "Progress Color"),
        (Ct = y()),
        P(Zn.$$.fragment),
        (Pn = y()),
        (Bn = A("div")),
        (vt = A("p")),
        (vt.textContent = "Progress Contrast"),
        (Be = y()),
        P(on.$$.fragment),
        (Fn = y()),
        (gt = A("div")),
        (fn = A("p")),
        (fn.textContent = "Progress Shadow"),
        (dt = y()),
        P(Un.$$.fragment),
        (Dt = y()),
        (ot = A("div")),
        (cn = A("p")),
        (cn.textContent = "Icon Color"),
        (mt = y()),
        P(Kn.$$.fragment),
        (an = y()),
        (Qn = A("div")),
        (At = A("p")),
        (At.textContent = "Icon Contrast"),
        (it = y()),
        P(Mn.$$.fragment),
        (xn = y()),
        (Cn = A("div")),
        (hn = A("p")),
        (hn.textContent = "Icon Shadow"),
        (wt = y()),
        P(zn.$$.fragment),
        (Tt = y()),
        (lt = A("div")),
        (gn = A("p")),
        (gn.textContent = "Outline Color"),
        (bt = y()),
        P($n.$$.fragment),
        (Ln = y()),
        (rt = A("div")),
        (st = A("p")),
        (st.textContent = "Outline Contrast"),
        (It = y()),
        P(vn.$$.fragment),
        (Bt = y()),
        (kt = A("div")),
        (ye = A("p")),
        (ye.textContent = "Outline Shadow"),
        (Oe = y()),
        P(at.$$.fragment),
        (uo = y()),
        qe && qe.c(),
        r(i, "class", "text-lg text-center mb-2"),
        r(o, "class", "max-w-50 ml-8"),
        r(t, "class", "flex-1"),
        r(a, "class", "text-lg text-center mb-2"),
        r(u, "class", "w-50"),
        r(k, "class", "flex-1"),
        r(e, "class", "flex flex-row mb-8 mt-4"),
        r(w, "class", "mx-8"),
        r(Y, "class", "text-base text-center mb-2"),
        r(V, "class", "text-base text-center mb-2"),
        r(ae, "class", "text-base text-center mb-2"),
        r(Ie, "class", "text-base text-center mb-2"),
        r(Ee, "class", "text-base text-center mb-2"),
        r(Re, "class", "text-base text-center mb-2"),
        r(jn, "class", "text-base text-center mb-2"),
        r(pe, "class", "text-base text-center mb-2"),
        r(
          S,
          "class",
          "mx-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-end"
        ),
        r(Jn, "class", "mx-8 mt-8"),
        r(Rn, "class", "text-base text-center mb-2"),
        r(Sn, "class", "flex flex-col mx-auto"),
        r(vt, "class", "text-base text-center mb-2"),
        r(fn, "class", "text-base text-center mb-2"),
        r(cn, "class", "text-base text-center mb-2"),
        r(ot, "class", "flex flex-col mx-auto"),
        r(At, "class", "text-base text-center mb-2"),
        r(hn, "class", "text-base text-center mb-2"),
        r(gn, "class", "text-base text-center mb-2"),
        r(lt, "class", "flex flex-col mx-auto"),
        r(st, "class", "text-base text-center mb-2"),
        r(ye, "class", "text-base text-center mb-2"),
        r(
          De,
          "class",
          "mx-4 mt-6 mb-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        );
    },
    m(F, le) {
      H(F, e, le),
        m(e, t),
        m(t, o),
        m(o, i),
        m(o, l),
        B(s, o, null),
        m(e, f),
        m(e, u),
        m(u, a),
        m(u, c),
        B(d, u, null),
        m(e, _),
        m(e, k),
        H(F, b, le),
        H(F, w, le),
        H(F, g, le),
        H(F, S, le),
        m(S, D),
        m(D, Y),
        m(D, $),
        B(W, D, null),
        m(S, j),
        m(S, x),
        m(x, V),
        m(x, Q),
        B(M, x, null),
        m(S, p),
        xe && xe.m(S, null),
        m(S, z),
        Ue && Ue.m(S, null),
        m(S, J),
        m(S, v),
        m(v, ae),
        m(v, ee),
        B(K, v, null),
        m(S, ke),
        m(S, Ce),
        m(Ce, Ie),
        m(Ce, Xe),
        B(ve, Ce, null),
        m(S, Tn),
        m(S, je),
        m(je, Ee),
        m(je, se),
        B(Se, je, null),
        m(S, In),
        m(S, He),
        m(He, Re),
        m(He, yn),
        B(Pe, He, null),
        m(S, Nn),
        m(S, tn),
        m(tn, jn),
        m(tn, L),
        B(Ge, tn, null),
        m(S, ht),
        m(S, bn),
        m(bn, pe),
        m(bn, tt),
        B(Qe, bn, null),
        m(S, Gn),
        en && en.m(S, null),
        m(S, Xn),
        Le && Le.m(S, null),
        H(F, Wn, le),
        H(F, Jn, le),
        H(F, On, le),
        _e && _e.m(F, le),
        H(F, kn, le),
        H(F, De, le),
        m(De, Sn),
        m(Sn, Rn),
        m(Sn, Ct),
        B(Zn, Sn, null),
        m(De, Pn),
        m(De, Bn),
        m(Bn, vt),
        m(Bn, Be),
        B(on, Bn, null),
        m(De, Fn),
        m(De, gt),
        m(gt, fn),
        m(gt, dt),
        B(Un, gt, null),
        m(De, Dt),
        m(De, ot),
        m(ot, cn),
        m(ot, mt),
        B(Kn, ot, null),
        m(De, an),
        m(De, Qn),
        m(Qn, At),
        m(Qn, it),
        B(Mn, Qn, null),
        m(De, xn),
        m(De, Cn),
        m(Cn, hn),
        m(Cn, wt),
        B(zn, Cn, null),
        m(De, Tt),
        m(De, lt),
        m(lt, gn),
        m(lt, bt),
        B($n, lt, null),
        m(De, Ln),
        m(De, rt),
        m(rt, st),
        m(rt, It),
        B(vn, rt, null),
        m(De, Bt),
        m(De, kt),
        m(kt, ye),
        m(kt, Oe),
        B(at, kt, null),
        m(De, uo),
        qe && qe.m(De, null),
        (yt = !0);
    },
    p(F, le) {
      const Jt = {};
      le[0] & 2 && (Jt.value = F[1]),
        le[0] & 38 && (Jt.handleSelectFunction = F[10]),
        s.$set(Jt);
      const Ot = {};
      le[0] & 2 && (Ot.handleSelectFunction = F[11]),
        !h &&
          le[0] & 258 &&
          ((h = !0), (Ot.value = F[8].icons[F[1]].shape), ie(() => (h = !1))),
        d.$set(Ot);
      const Zt = {};
      le[0] & 2 && (Zt.handleUpdateFunction = F[13]),
        !q &&
          le[0] & 258 &&
          ((q = !0), (Zt.value = F[8].icons[F[1]].width), ie(() => (q = !1))),
        W.$set(Zt);
      const Ft = {};
      le[0] & 2 && (Ft.handleUpdateFunction = F[15]),
        !X &&
          le[0] & 258 &&
          ((X = !0), (Ft.value = F[8].icons[F[1]].height), ie(() => (X = !1))),
        M.$set(Ft),
        F[8].icons[F[1]].ringSize != null
          ? xe
            ? (xe.p(F, le), le[0] & 258 && C(xe, 1))
            : ((xe = cl(F)), xe.c(), C(xe, 1), xe.m(S, z))
          : xe &&
            (he(),
            T(xe, 1, 1, () => {
              xe = null;
            }),
            ge()),
        F[8].icons[F[1]].displayOutline != null
          ? Ue
            ? (Ue.p(F, le), le[0] & 258 && C(Ue, 1))
            : ((Ue = hl(F)), Ue.c(), C(Ue, 1), Ue.m(S, J))
          : Ue &&
            (he(),
            T(Ue, 1, 1, () => {
              Ue = null;
            }),
            ge());
      const N = {};
      le[0] & 2 && (N.handleUpdateFunction = F[21]),
        !I &&
          le[0] & 258 &&
          ((I = !0),
          (N.value = F[8].icons[F[1]].translateX),
          ie(() => (I = !1))),
        K.$set(N);
      const Ae = {};
      le[0] & 2 && (Ae.handleUpdateFunction = F[23]),
        !Ne &&
          le[0] & 258 &&
          ((Ne = !0),
          (Ae.value = F[8].icons[F[1]].translateY),
          ie(() => (Ne = !1))),
        ve.$set(Ae);
      const fo = {};
      le[0] & 2 && (fo.handleUpdateFunction = F[25]),
        !Ve &&
          le[0] & 258 &&
          ((Ve = !0),
          (fo.value = F[8].icons[F[1]].rotateDegree),
          ie(() => (Ve = !1))),
        Se.$set(fo);
      const co = {};
      le[0] & 2 && (co.handleUpdateFunction = F[27]),
        !G &&
          le[0] & 258 &&
          ((G = !0),
          (co.value = F[8].icons[F[1]].iconTranslateX),
          ie(() => (G = !1))),
        Pe.$set(co);
      const ho = {};
      le[0] & 2 && (ho.handleUpdateFunction = F[29]),
        !ct &&
          le[0] & 258 &&
          ((ct = !0),
          (ho.value = F[8].icons[F[1]].iconTranslateY),
          ie(() => (ct = !1))),
        Ge.$set(ho);
      const go = {};
      le[0] & 2 && (go.handleUpdateFunction = F[31]),
        !pt &&
          le[0] & 258 &&
          ((pt = !0),
          (go.value = F[8].icons[F[1]].iconScaling),
          ie(() => (pt = !1))),
        Qe.$set(go),
        F[8].icons[F[1]].xAxisRound != null
          ? en
            ? (en.p(F, le), le[0] & 258 && C(en, 1))
            : ((en = gl(F)), en.c(), C(en, 1), en.m(S, Xn))
          : en &&
            (he(),
            T(en, 1, 1, () => {
              en = null;
            }),
            ge()),
        F[8].icons[F[1]].yAxisRound != null
          ? Le
            ? (Le.p(F, le), le[0] & 258 && C(Le, 1))
            : ((Le = dl(F)), Le.c(), C(Le, 1), Le.m(S, null))
          : Le &&
            (he(),
            T(Le, 1, 1, () => {
              Le = null;
            }),
            ge()),
        F[3].length > 1
          ? _e
            ? (_e.p(F, le), le[0] & 8 && C(_e, 1))
            : ((_e = ml(F)), _e.c(), C(_e, 1), _e.m(kn.parentNode, kn))
          : _e &&
            (he(),
            T(_e, 1, 1, () => {
              _e = null;
            }),
            ge());
      const mo = {};
      le[0] & 22 &&
        (mo.colorString = F[4].icons[F[1]].colorEffects[F[2]].progressColor),
        le[0] & 6 && (mo.updateFunction = F[39]),
        Zn.$set(mo);
      const _o = {};
      le[0] & 6 && (_o.handleUpdateFunction = F[40]),
        !Yt &&
          le[0] & 22 &&
          ((Yt = !0),
          (_o.value = F[4].icons[F[1]].colorEffects[F[2]].progressContrast),
          ie(() => (Yt = !1))),
        on.$set(_o);
      const wo = {};
      le[0] & 6 && (wo.handleUpdateFunction = F[42]),
        !ln &&
          le[0] & 22 &&
          ((ln = !0),
          (wo.value =
            F[4].icons[F[1]].colorEffects[F[2]].progressDropShadowAmount),
          ie(() => (ln = !1))),
        Un.$set(wo);
      const bo = {};
      le[0] & 22 &&
        (bo.colorString = F[4].icons[F[1]].colorEffects[F[2]].iconColor),
        le[0] & 6 && (bo.updateFunction = F[44]),
        Kn.$set(bo);
      const ko = {};
      le[0] & 6 && (ko.handleUpdateFunction = F[45]),
        !_t &&
          le[0] & 22 &&
          ((_t = !0),
          (ko.value = F[4].icons[F[1]].colorEffects[F[2]].iconContrast),
          ie(() => (_t = !1))),
        Mn.$set(ko);
      const So = {};
      le[0] & 6 && (So.handleUpdateFunction = F[47]),
        !rn &&
          le[0] & 22 &&
          ((rn = !0),
          (So.value = F[4].icons[F[1]].colorEffects[F[2]].iconDropShadowAmount),
          ie(() => (rn = !1))),
        zn.$set(So);
      const po = {};
      le[0] & 22 &&
        (po.colorString = F[4].icons[F[1]].colorEffects[F[2]].outlineColor),
        le[0] & 6 && (po.updateFunction = F[49]),
        $n.$set(po);
      const Co = {};
      le[0] & 6 && (Co.handleUpdateFunction = F[50]),
        !En &&
          le[0] & 22 &&
          ((En = !0),
          (Co.value = F[4].icons[F[1]].colorEffects[F[2]].outlineContrast),
          ie(() => (En = !1))),
        vn.$set(Co);
      const vo = {};
      le[0] & 6 && (vo.handleUpdateFunction = F[52]),
        !Xt &&
          le[0] & 22 &&
          ((Xt = !0),
          (vo.value =
            F[4].icons[F[1]].colorEffects[F[2]].outlineDropShadowAmount),
          ie(() => (Xt = !1))),
        at.$set(vo),
        F[4].icons[F[1]].editableColors.innerColor
          ? qe
            ? (qe.p(F, le), le[0] & 18 && C(qe, 1))
            : ((qe = _l(F)), qe.c(), C(qe, 1), qe.m(De, null))
          : qe &&
            (he(),
            T(qe, 1, 1, () => {
              qe = null;
            }),
            ge());
    },
    i(F) {
      yt ||
        (C(s.$$.fragment, F),
        C(d.$$.fragment, F),
        C(W.$$.fragment, F),
        C(M.$$.fragment, F),
        C(xe),
        C(Ue),
        C(K.$$.fragment, F),
        C(ve.$$.fragment, F),
        C(Se.$$.fragment, F),
        C(Pe.$$.fragment, F),
        C(Ge.$$.fragment, F),
        C(Qe.$$.fragment, F),
        C(en),
        C(Le),
        C(_e),
        C(Zn.$$.fragment, F),
        C(on.$$.fragment, F),
        C(Un.$$.fragment, F),
        C(Kn.$$.fragment, F),
        C(Mn.$$.fragment, F),
        C(zn.$$.fragment, F),
        C($n.$$.fragment, F),
        C(vn.$$.fragment, F),
        C(at.$$.fragment, F),
        C(qe),
        (yt = !0));
    },
    o(F) {
      T(s.$$.fragment, F),
        T(d.$$.fragment, F),
        T(W.$$.fragment, F),
        T(M.$$.fragment, F),
        T(xe),
        T(Ue),
        T(K.$$.fragment, F),
        T(ve.$$.fragment, F),
        T(Se.$$.fragment, F),
        T(Pe.$$.fragment, F),
        T(Ge.$$.fragment, F),
        T(Qe.$$.fragment, F),
        T(en),
        T(Le),
        T(_e),
        T(Zn.$$.fragment, F),
        T(on.$$.fragment, F),
        T(Un.$$.fragment, F),
        T(Kn.$$.fragment, F),
        T(Mn.$$.fragment, F),
        T(zn.$$.fragment, F),
        T($n.$$.fragment, F),
        T(vn.$$.fragment, F),
        T(at.$$.fragment, F),
        T(qe),
        (yt = !1);
    },
    d(F) {
      F && E(e),
        U(s),
        U(d),
        F && E(b),
        F && E(w),
        F && E(g),
        F && E(S),
        U(W),
        U(M),
        xe && xe.d(),
        Ue && Ue.d(),
        U(K),
        U(ve),
        U(Se),
        U(Pe),
        U(Ge),
        U(Qe),
        en && en.d(),
        Le && Le.d(),
        F && E(Wn),
        F && E(Jn),
        F && E(On),
        _e && _e.d(F),
        F && E(kn),
        F && E(De),
        U(Zn),
        U(on),
        U(Un),
        U(Kn),
        U(Mn),
        U(zn),
        U($n),
        U(vn),
        U(at),
        qe && qe.d();
    },
  };
}
function s0(n) {
  let e, t, o, i, l;
  function s(u) {
    n[55](u);
  }
  let f = {
    name: "Single Status Icon Settings",
    icon: n[8].icons[n[1]].icon,
    color: n[9][n[5]],
    $$slots: { default: [r0] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Po({ props: f })),
    te.push(() => oe(e, "group", s)),
    {
      c() {
        P(e.$$.fragment), (o = y()), (i = A("hr"));
      },
      m(u, a) {
        B(e, u, a), H(u, o, a), H(u, i, a), (l = !0);
      },
      p(u, a) {
        const c = {};
        a[0] & 258 && (c.icon = u[8].icons[u[1]].icon),
          a[0] & 32 && (c.color = u[9][u[5]]),
          (a[0] & 510) | (a[1] & 33554432) &&
            (c.$$scope = { dirty: a, ctx: u }),
          !t && a[0] & 1 && ((t = !0), (c.group = u[0]), ie(() => (t = !1))),
          e.$set(c);
      },
      i(u) {
        l || (C(e.$$.fragment, u), (l = !0));
      },
      o(u) {
        T(e.$$.fragment, u), (l = !1);
      },
      d(u) {
        U(e, u), u && E(o), u && E(i);
      },
    }
  );
}
function a0(n, e, t) {
  let o, i;
  de(n, re, (L) => t(4, (o = L))), de(n, ne, (L) => t(8, (i = L)));
  let { group: l = "" } = e,
    s = 0,
    f = [
      "#FFFFFF",
      "rgb(33, 171, 97)",
      "#326dbf",
      "#dd6e14",
      "#1a7cad",
      "rgb(220, 6, 6)",
      "rgb(138, 168, 189)",
      "rgb(255, 72, 133)",
      "rgb(185, 255, 40)",
      "#3FA554",
      "rgb(182, 72, 255)",
      "rgb(255, 72, 133)",
      "#D64763",
      "rgb(0, 0, 0)",
    ],
    u = "voice",
    a = 0,
    c = o.icons[u].colorEffects,
    d = c.map((L) => L.name),
    h = d[a];
  const _ = (L) => {
      t(1, (u = L)), t(5, (s = li.findIndex((Ge) => Ge == L))), t(2, (a = 0));
    },
    k = (L) => {
      ne.updateIconShape(u, L), re.updateIconShapeEditableColor(u, L);
    };
  function b(L) {
    n.$$.not_equal(i.icons[u].shape, L) && ((i.icons[u].shape = L), ne.set(i));
  }
  const w = (L) => ne.updateIconSetting(u, "width", L);
  function g(L) {
    n.$$.not_equal(i.icons[u].width, L) && ((i.icons[u].width = L), ne.set(i));
  }
  const S = (L) => ne.updateIconSetting(u, "height", L);
  function D(L) {
    n.$$.not_equal(i.icons[u].height, L) &&
      ((i.icons[u].height = L), ne.set(i));
  }
  const Y = (L) => ne.updateIconSetting(u, "ringSize", L);
  function $(L) {
    n.$$.not_equal(i.icons[u].ringSize, L) &&
      ((i.icons[u].ringSize = L), ne.set(i));
  }
  const W = (L) => ne.updateIconSetting(u, "displayOutline", L);
  function q(L) {
    n.$$.not_equal(i.icons[u].displayOutline, L) &&
      ((i.icons[u].displayOutline = L), ne.set(i));
  }
  const j = (L) => ne.updateIconSetting(u, "translateX", L);
  function x(L) {
    n.$$.not_equal(i.icons[u].translateX, L) &&
      ((i.icons[u].translateX = L), ne.set(i));
  }
  const V = (L) => ne.updateIconSetting(u, "translateY", L);
  function Q(L) {
    n.$$.not_equal(i.icons[u].translateY, L) &&
      ((i.icons[u].translateY = L), ne.set(i));
  }
  const M = (L) => ne.updateIconSetting(u, "rotateDegree", L);
  function X(L) {
    n.$$.not_equal(i.icons[u].rotateDegree, L) &&
      ((i.icons[u].rotateDegree = L), ne.set(i));
  }
  const p = (L) => ne.updateIconSetting(u, "iconTranslateX", L);
  function z(L) {
    n.$$.not_equal(i.icons[u].iconTranslateX, L) &&
      ((i.icons[u].iconTranslateX = L), ne.set(i));
  }
  const J = (L) => ne.updateIconSetting(u, "iconTranslateY", L);
  function v(L) {
    n.$$.not_equal(i.icons[u].iconTranslateY, L) &&
      ((i.icons[u].iconTranslateY = L), ne.set(i));
  }
  const ae = (L) => ne.updateIconSetting(u, "iconScaling", L);
  function ee(L) {
    n.$$.not_equal(i.icons[u].iconScaling, L) &&
      ((i.icons[u].iconScaling = L), ne.set(i));
  }
  const K = (L) => ne.updateIconSetting(u, "xAxisRound", L);
  function I(L) {
    n.$$.not_equal(i.icons[u].xAxisRound, L) &&
      ((i.icons[u].xAxisRound = L), ne.set(i));
  }
  const ke = (L) => ne.updateIconSetting(u, "yAxisRound", L);
  function Ce(L) {
    n.$$.not_equal(i.icons[u].yAxisRound, L) &&
      ((i.icons[u].yAxisRound = L), ne.set(i));
  }
  function Ie(L) {
    (h = L), t(7, h);
  }
  function Xe(L) {
    (a = L), t(2, a);
  }
  const ve = (L) => re.updateColorSetting(u, a, "progressColor", L),
    Ne = (L) => re.updateColorSetting(u, a, "progressContrast", L);
  function Tn(L) {
    n.$$.not_equal(o.icons[u].colorEffects[a].progressContrast, L) &&
      ((o.icons[u].colorEffects[a].progressContrast = L), re.set(o));
  }
  const je = (L) => re.updateColorSetting(u, a, "progressDropShadowAmount", L);
  function Ee(L) {
    n.$$.not_equal(o.icons[u].colorEffects[a].progressDropShadowAmount, L) &&
      ((o.icons[u].colorEffects[a].progressDropShadowAmount = L), re.set(o));
  }
  const se = (L) => re.updateColorSetting(u, a, "iconColor", L),
    Se = (L) => re.updateColorSetting(u, a, "iconContrast", L);
  function Ve(L) {
    n.$$.not_equal(o.icons[u].colorEffects[a].iconContrast, L) &&
      ((o.icons[u].colorEffects[a].iconContrast = L), re.set(o));
  }
  const In = (L) => re.updateColorSetting(u, a, "iconDropShadowAmount", L);
  function He(L) {
    n.$$.not_equal(o.icons[u].colorEffects[a].iconDropShadowAmount, L) &&
      ((o.icons[u].colorEffects[a].iconDropShadowAmount = L), re.set(o));
  }
  const Re = (L) => re.updateColorSetting(u, a, "outlineColor", L),
    yn = (L) => re.updateColorSetting(u, a, "outlineContrast", L);
  function Pe(L) {
    n.$$.not_equal(o.icons[u].colorEffects[a].outlineContrast, L) &&
      ((o.icons[u].colorEffects[a].outlineContrast = L), re.set(o));
  }
  const G = (L) => re.updateColorSetting(u, a, "outlineDropShadowAmount", L);
  function Nn(L) {
    n.$$.not_equal(o.icons[u].colorEffects[a].outlineDropShadowAmount, L) &&
      ((o.icons[u].colorEffects[a].outlineDropShadowAmount = L), re.set(o));
  }
  const tn = (L) => re.updateColorSetting(u, a, "innerColor", L);
  function jn(L) {
    (l = L), t(0, l);
  }
  return (
    (n.$$set = (L) => {
      "group" in L && t(0, (l = L.group));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 4 &&
        St(re, (o.globalColorSettings.editSingleIconStage = a), o),
        n.$$.dirty[0] & 2 &&
          St(re, (o.globalColorSettings.editSingleIconName = u), o),
        n.$$.dirty[0] & 26 &&
          (t(3, (c = o.icons[u].colorEffects)),
          t(6, (d = c.map((L) => L.name))));
    }),
    [
      l,
      u,
      a,
      c,
      o,
      s,
      d,
      h,
      i,
      f,
      _,
      k,
      b,
      w,
      g,
      S,
      D,
      Y,
      $,
      W,
      q,
      j,
      x,
      V,
      Q,
      M,
      X,
      p,
      z,
      J,
      v,
      ae,
      ee,
      K,
      I,
      ke,
      Ce,
      Ie,
      Xe,
      ve,
      Ne,
      Tn,
      je,
      Ee,
      se,
      Se,
      Ve,
      In,
      He,
      Re,
      yn,
      Pe,
      G,
      Nn,
      tn,
      jn,
    ]
  );
}
class u0 extends ue {
  constructor(e) {
    super();
    fe(this, e, a0, s0, ce, { group: 0 }, null, [-1, -1]);
  }
}
function wl(n) {
  let e, t, o, i, l, s;
  function f(a) {
    n[6](a);
  }
  let u = {
    min: 1,
    max: 25,
    step: 0.5,
    handleUpdateFunction: ne.updateAllRingSize,
  };
  return (
    n[1].globalIconSettings.ringSize !== void 0 &&
      (u.value = n[1].globalIconSettings.ringSize),
    (i = new we({ props: u })),
    te.push(() => oe(i, "value", f)),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "Ring Size"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2");
      },
      m(a, c) {
        H(a, e, c), m(e, t), m(e, o), B(i, e, null), (s = !0);
      },
      p(a, c) {
        const d = {};
        !l &&
          c[0] & 2 &&
          ((l = !0),
          (d.value = a[1].globalIconSettings.ringSize),
          ie(() => (l = !1))),
          i.$set(d);
      },
      i(a) {
        s || (C(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        T(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && E(e), U(i);
      },
    }
  );
}
function bl(n) {
  let e, t, o, i, l, s;
  function f(a) {
    n[8](a);
  }
  let u = { center: !0, handleUpdateFunction: n[7] };
  return (
    n[1].globalIconSettings.displayOutline !== void 0 &&
      (u.checked = n[1].globalIconSettings.displayOutline),
    (i = new Jo({ props: u })),
    te.push(() => oe(i, "checked", f)),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "Show Progress Outline"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2");
      },
      m(a, c) {
        H(a, e, c), m(e, t), m(e, o), B(i, e, null), (s = !0);
      },
      p(a, c) {
        const d = {};
        !l &&
          c[0] & 2 &&
          ((l = !0),
          (d.checked = a[1].globalIconSettings.displayOutline),
          ie(() => (l = !1))),
          i.$set(d);
      },
      i(a) {
        s || (C(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        T(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && E(e), U(i);
      },
    }
  );
}
function kl(n) {
  let e, t, o, i, l, s;
  function f(a) {
    n[15](a);
  }
  let u = { min: 0, max: 100, handleUpdateFunction: ne.updateAllRoundXAxis };
  return (
    n[1].globalIconSettings.xAxisRound !== void 0 &&
      (u.value = n[1].globalIconSettings.xAxisRound),
    (i = new we({ props: u })),
    te.push(() => oe(i, "value", f)),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "X-axis Curve"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2");
      },
      m(a, c) {
        H(a, e, c), m(e, t), m(e, o), B(i, e, null), (s = !0);
      },
      p(a, c) {
        const d = {};
        !l &&
          c[0] & 2 &&
          ((l = !0),
          (d.value = a[1].globalIconSettings.xAxisRound),
          ie(() => (l = !1))),
          i.$set(d);
      },
      i(a) {
        s || (C(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        T(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && E(e), U(i);
      },
    }
  );
}
function Sl(n) {
  let e, t, o, i, l, s;
  function f(a) {
    n[16](a);
  }
  let u = { min: 0, max: 100, handleUpdateFunction: ne.updateAllRoundYAxis };
  return (
    n[1].globalIconSettings.yAxisRound !== void 0 &&
      (u.value = n[1].globalIconSettings.yAxisRound),
    (i = new we({ props: u })),
    te.push(() => oe(i, "value", f)),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "Y-axis Curve"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2");
      },
      m(a, c) {
        H(a, e, c), m(e, t), m(e, o), B(i, e, null), (s = !0);
      },
      p(a, c) {
        const d = {};
        !l &&
          c[0] & 2 &&
          ((l = !0),
          (d.value = a[1].globalIconSettings.yAxisRound),
          ie(() => (l = !1))),
          i.$set(d);
      },
      i(a) {
        s || (C(i.$$.fragment, a), (s = !0));
      },
      o(a) {
        T(i.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && E(e), U(i);
      },
    }
  );
}
function pl(n) {
  let e, t, o, i, l;
  return (
    (i = new Kt({
      props: {
        colorString: n[2].globalColorSettings.innerColor,
        updateFunction: n[32],
      },
    })),
    {
      c() {
        (e = A("div")),
          (t = A("p")),
          (t.textContent = "Inner Color"),
          (o = y()),
          P(i.$$.fragment),
          r(t, "class", "text-base text-center mb-2"),
          r(e, "class", "flex flex-col mx-auto");
      },
      m(s, f) {
        H(s, e, f), m(e, t), m(e, o), B(i, e, null), (l = !0);
      },
      p(s, f) {
        const u = {};
        f[0] & 4 && (u.colorString = s[2].globalColorSettings.innerColor),
          i.$set(u);
      },
      i(s) {
        l || (C(i.$$.fragment, s), (l = !0));
      },
      o(s) {
        T(i.$$.fragment, s), (l = !1);
      },
      d(s) {
        s && E(e), U(i);
      },
    }
  );
}
function f0(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S,
    D,
    Y,
    $,
    W,
    q,
    j,
    x,
    V,
    Q,
    M,
    X,
    p,
    z,
    J,
    v,
    ae,
    ee,
    K,
    I,
    ke,
    Ce,
    Ie,
    Xe,
    ve,
    Ne,
    Tn,
    je,
    Ee,
    se,
    Se,
    Ve,
    In,
    He,
    Re,
    yn,
    Pe,
    G,
    Nn,
    tn,
    jn,
    L,
    Ge,
    ct,
    ht,
    bn,
    pe,
    tt,
    Qe,
    pt,
    Gn,
    Xn,
    Wn,
    Jn,
    On,
    kn,
    De,
    Sn,
    Rn,
    Ct,
    Zn,
    Pn,
    Bn,
    vt,
    Be,
    on,
    Yt,
    Fn,
    gt,
    fn,
    dt,
    Un,
    ln,
    Dt,
    ot,
    cn,
    mt,
    Kn,
    an,
    Qn,
    At,
    it,
    Mn,
    _t,
    xn,
    Cn,
    hn,
    wt,
    zn,
    rn,
    Tt,
    lt,
    gn,
    bt,
    $n,
    Ln,
    rt,
    st,
    It;
  l = new Ho({
    props: {
      valuesArray: Kl,
      value: n[1].globalIconSettings.shape,
      handleSelectFunction: n[3],
    },
  });
  function vn(Z) {
    n[4](Z);
  }
  let En = { min: 1, max: 200, handleUpdateFunction: ne.updateAllWidth };
  n[1].globalIconSettings.width !== void 0 &&
    (En.value = n[1].globalIconSettings.width),
    (_ = new we({ props: En })),
    te.push(() => oe(_, "value", vn));
  function Bt(Z) {
    n[5](Z);
  }
  let kt = { min: 1, max: 200, handleUpdateFunction: ne.updateAllHeight };
  n[1].globalIconSettings.height !== void 0 &&
    (kt.value = n[1].globalIconSettings.height),
    (D = new we({ props: kt })),
    te.push(() => oe(D, "value", Bt));
  let ye = n[1].globalIconSettings.ringSize != null && wl(n),
    Oe = n[1].globalIconSettings.displayOutline != null && bl(n);
  function at(Z) {
    n[9](Z);
  }
  let Xt = {
    min: -20,
    max: 20,
    step: 0.25,
    handleUpdateFunction: ne.updateAllTranslateX,
  };
  n[1].globalIconSettings.translateX !== void 0 &&
    (Xt.value = n[1].globalIconSettings.translateX),
    (Q = new we({ props: Xt })),
    te.push(() => oe(Q, "value", at));
  function uo(Z) {
    n[10](Z);
  }
  let yt = {
    min: -20,
    max: 20,
    step: 0.25,
    handleUpdateFunction: ne.updateAllTranslateY,
  };
  n[1].globalIconSettings.translateY !== void 0 &&
    (yt.value = n[1].globalIconSettings.translateY),
    (v = new we({ props: yt })),
    te.push(() => oe(v, "value", uo));
  function To(Z) {
    n[11](Z);
  }
  let Ut = { min: 0, max: 360, handleUpdateFunction: ne.updateAllRotateDegree };
  n[1].globalIconSettings.rotateDegree !== void 0 &&
    (Ut.value = n[1].globalIconSettings.rotateDegree),
    (Ce = new we({ props: Ut })),
    te.push(() => oe(Ce, "value", To));
  function Io(Z) {
    n[12](Z);
  }
  let zt = {
    min: -10,
    max: 10,
    step: 0.01,
    handleUpdateFunction: ne.updateAllTranslateIconX,
  };
  n[1].globalIconSettings.iconTranslateX !== void 0 &&
    (zt.value = n[1].globalIconSettings.iconTranslateX),
    (je = new we({ props: zt })),
    te.push(() => oe(je, "value", Io));
  function yo(Z) {
    n[13](Z);
  }
  let Lt = {
    min: -10,
    max: 10,
    step: 0.01,
    handleUpdateFunction: ne.updateAllTranslateIconY,
  };
  n[1].globalIconSettings.iconTranslateY !== void 0 &&
    (Lt.value = n[1].globalIconSettings.iconTranslateY),
    (He = new we({ props: Lt })),
    te.push(() => oe(He, "value", yo));
  function xe(Z) {
    n[14](Z);
  }
  let Ue = {
    min: 0,
    max: 3,
    step: 0.01,
    handleUpdateFunction: ne.updateAllIconScale,
  };
  n[1].globalIconSettings.iconScaling !== void 0 &&
    (Ue.value = n[1].globalIconSettings.iconScaling),
    (tn = new we({ props: Ue })),
    te.push(() => oe(tn, "value", xe));
  let $e = n[1].globalIconSettings.xAxisRound != null && kl(n),
    ze = n[1].globalIconSettings.yAxisRound != null && Sl(n);
  Gn = new Kt({
    props: {
      colorString: n[2].globalColorSettings.progressColor,
      updateFunction: n[17],
    },
  });
  function Mo(Z) {
    n[19](Z);
  }
  let qt = { min: 0, max: 300, handleUpdateFunction: n[18] };
  n[2].globalColorSettings.progressContrast !== void 0 &&
    (qt.value = n[2].globalColorSettings.progressContrast),
    (kn = new we({ props: qt })),
    te.push(() => oe(kn, "value", Mo));
  function Yo(Z) {
    n[21](Z);
  }
  let Nt = { min: 0, max: 20, handleUpdateFunction: n[20] };
  n[2].globalColorSettings.progressDropShadowAmount !== void 0 &&
    (Nt.value = n[2].globalColorSettings.progressDropShadowAmount),
    (Pn = new we({ props: Nt })),
    te.push(() => oe(Pn, "value", Yo)),
    (Fn = new Kt({
      props: {
        colorString: n[2].globalColorSettings.iconColor,
        updateFunction: n[22],
      },
    }));
  function Xo(Z) {
    n[24](Z);
  }
  let jt = { min: 0, max: 300, handleUpdateFunction: n[23] };
  n[2].globalColorSettings.iconContrast !== void 0 &&
    (jt.value = n[2].globalColorSettings.iconContrast),
    (ln = new we({ props: jt })),
    te.push(() => oe(ln, "value", Xo));
  function Oo(Z) {
    n[26](Z);
  }
  let Gt = { min: 0, max: 20, handleUpdateFunction: n[25] };
  n[2].globalColorSettings.iconDropShadowAmount !== void 0 &&
    (Gt.value = n[2].globalColorSettings.iconDropShadowAmount),
    (an = new we({ props: Gt })),
    te.push(() => oe(an, "value", Oo)),
    (xn = new Kt({
      props: {
        colorString: n[2].globalColorSettings.outlineColor,
        updateFunction: n[27],
      },
    }));
  function Fo(Z) {
    n[29](Z);
  }
  let Wt = { min: 0, max: 300, handleUpdateFunction: n[28] };
  n[2].globalColorSettings.outlineContrast !== void 0 &&
    (Wt.value = n[2].globalColorSettings.outlineContrast),
    (rn = new we({ props: Wt })),
    te.push(() => oe(rn, "value", Fo));
  function en(Z) {
    n[31](Z);
  }
  let Le = { min: 0, max: 20, handleUpdateFunction: n[30] };
  n[2].globalColorSettings.outlineDropShadowAmount !== void 0 &&
    (Le.value = n[2].globalColorSettings.outlineDropShadowAmount),
    (Ln = new we({ props: Le })),
    te.push(() => oe(Ln, "value", en));
  let _e = n[2].globalColorSettings.editableColors.innerColor && pl(n);
  return {
    c() {
      (e = A("div")),
        (t = A("div")),
        (o = A("p")),
        (o.textContent = "Icon Shape"),
        (i = y()),
        P(l.$$.fragment),
        (s = y()),
        (f = A("div")),
        (f.innerHTML = `<p class="text-xl font-bold">Global Size &amp; Position Section</p> 
    <hr class="mb-6"/>`),
        (u = y()),
        (a = A("div")),
        (c = A("div")),
        (d = A("p")),
        (d.textContent = "Width Size"),
        (h = y()),
        P(_.$$.fragment),
        (b = y()),
        (w = A("div")),
        (g = A("p")),
        (g.textContent = "Height Size"),
        (S = y()),
        P(D.$$.fragment),
        ($ = y()),
        ye && ye.c(),
        (W = y()),
        Oe && Oe.c(),
        (q = y()),
        (j = A("div")),
        (x = A("p")),
        (x.textContent = "X-axis Position"),
        (V = y()),
        P(Q.$$.fragment),
        (X = y()),
        (p = A("div")),
        (z = A("p")),
        (z.textContent = "Y-axis Position"),
        (J = y()),
        P(v.$$.fragment),
        (ee = y()),
        (K = A("div")),
        (I = A("p")),
        (I.textContent = "Rotation"),
        (ke = y()),
        P(Ce.$$.fragment),
        (Xe = y()),
        (ve = A("div")),
        (Ne = A("p")),
        (Ne.textContent = "Icon X-axis Position"),
        (Tn = y()),
        P(je.$$.fragment),
        (se = y()),
        (Se = A("div")),
        (Ve = A("p")),
        (Ve.textContent = "Icon Y-axis Position"),
        (In = y()),
        P(He.$$.fragment),
        (yn = y()),
        (Pe = A("div")),
        (G = A("p")),
        (G.textContent = "Icon Size"),
        (Nn = y()),
        P(tn.$$.fragment),
        (L = y()),
        $e && $e.c(),
        (Ge = y()),
        ze && ze.c(),
        (ct = y()),
        (ht = A("div")),
        (ht.innerHTML = `<p class="text-xl font-bold">Global Color Section</p> 
    <hr/>`),
        (bn = y()),
        (pe = A("div")),
        (tt = A("div")),
        (Qe = A("p")),
        (Qe.textContent = "Progress Color"),
        (pt = y()),
        P(Gn.$$.fragment),
        (Xn = y()),
        (Wn = A("div")),
        (Jn = A("p")),
        (Jn.textContent = "Progress Contrast"),
        (On = y()),
        P(kn.$$.fragment),
        (Sn = y()),
        (Rn = A("div")),
        (Ct = A("p")),
        (Ct.textContent = "Progress Shadow"),
        (Zn = y()),
        P(Pn.$$.fragment),
        (vt = y()),
        (Be = A("div")),
        (on = A("p")),
        (on.textContent = "Icon Color"),
        (Yt = y()),
        P(Fn.$$.fragment),
        (gt = y()),
        (fn = A("div")),
        (dt = A("p")),
        (dt.textContent = "Icon Contrast"),
        (Un = y()),
        P(ln.$$.fragment),
        (ot = y()),
        (cn = A("div")),
        (mt = A("p")),
        (mt.textContent = "Icon Shadow"),
        (Kn = y()),
        P(an.$$.fragment),
        (At = y()),
        (it = A("div")),
        (Mn = A("p")),
        (Mn.textContent = "Outline Color"),
        (_t = y()),
        P(xn.$$.fragment),
        (Cn = y()),
        (hn = A("div")),
        (wt = A("p")),
        (wt.textContent = "Outline Contrast"),
        (zn = y()),
        P(rn.$$.fragment),
        (lt = y()),
        (gn = A("div")),
        (bt = A("p")),
        (bt.textContent = "Outline Shadow"),
        ($n = y()),
        P(Ln.$$.fragment),
        (st = y()),
        _e && _e.c(),
        r(o, "class", "text-lg text-center mb-2"),
        r(t, "class", "w-50"),
        r(e, "class", "flex justify-center mb-8"),
        r(f, "class", "mx-8"),
        r(d, "class", "text-base text-center mb-2"),
        r(g, "class", "text-base text-center mb-2"),
        r(x, "class", "text-base text-center mb-2"),
        r(z, "class", "text-base text-center mb-2"),
        r(I, "class", "text-base text-center mb-2"),
        r(Ne, "class", "text-base text-center mb-2"),
        r(Ve, "class", "text-base text-center mb-2"),
        r(G, "class", "text-base text-center mb-2"),
        r(
          a,
          "class",
          "mx-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-end"
        ),
        r(ht, "class", "mx-8 mt-8"),
        r(Qe, "class", "text-base text-center mb-2"),
        r(tt, "class", "flex flex-col mx-auto"),
        r(Jn, "class", "text-base text-center mb-2"),
        r(Ct, "class", "text-base text-center mb-2"),
        r(on, "class", "text-base text-center mb-2"),
        r(Be, "class", "flex flex-col mx-auto"),
        r(dt, "class", "text-base text-center mb-2"),
        r(mt, "class", "text-base text-center mb-2"),
        r(Mn, "class", "text-base text-center mb-2"),
        r(it, "class", "flex flex-col mx-auto"),
        r(wt, "class", "text-base text-center mb-2"),
        r(bt, "class", "text-base text-center mb-2"),
        r(
          pe,
          "class",
          "mx-4 mt-6 mb-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        );
    },
    m(Z, me) {
      H(Z, e, me),
        m(e, t),
        m(t, o),
        m(t, i),
        B(l, t, null),
        H(Z, s, me),
        H(Z, f, me),
        H(Z, u, me),
        H(Z, a, me),
        m(a, c),
        m(c, d),
        m(c, h),
        B(_, c, null),
        m(a, b),
        m(a, w),
        m(w, g),
        m(w, S),
        B(D, w, null),
        m(a, $),
        ye && ye.m(a, null),
        m(a, W),
        Oe && Oe.m(a, null),
        m(a, q),
        m(a, j),
        m(j, x),
        m(j, V),
        B(Q, j, null),
        m(a, X),
        m(a, p),
        m(p, z),
        m(p, J),
        B(v, p, null),
        m(a, ee),
        m(a, K),
        m(K, I),
        m(K, ke),
        B(Ce, K, null),
        m(a, Xe),
        m(a, ve),
        m(ve, Ne),
        m(ve, Tn),
        B(je, ve, null),
        m(a, se),
        m(a, Se),
        m(Se, Ve),
        m(Se, In),
        B(He, Se, null),
        m(a, yn),
        m(a, Pe),
        m(Pe, G),
        m(Pe, Nn),
        B(tn, Pe, null),
        m(a, L),
        $e && $e.m(a, null),
        m(a, Ge),
        ze && ze.m(a, null),
        H(Z, ct, me),
        H(Z, ht, me),
        H(Z, bn, me),
        H(Z, pe, me),
        m(pe, tt),
        m(tt, Qe),
        m(tt, pt),
        B(Gn, tt, null),
        m(pe, Xn),
        m(pe, Wn),
        m(Wn, Jn),
        m(Wn, On),
        B(kn, Wn, null),
        m(pe, Sn),
        m(pe, Rn),
        m(Rn, Ct),
        m(Rn, Zn),
        B(Pn, Rn, null),
        m(pe, vt),
        m(pe, Be),
        m(Be, on),
        m(Be, Yt),
        B(Fn, Be, null),
        m(pe, gt),
        m(pe, fn),
        m(fn, dt),
        m(fn, Un),
        B(ln, fn, null),
        m(pe, ot),
        m(pe, cn),
        m(cn, mt),
        m(cn, Kn),
        B(an, cn, null),
        m(pe, At),
        m(pe, it),
        m(it, Mn),
        m(it, _t),
        B(xn, it, null),
        m(pe, Cn),
        m(pe, hn),
        m(hn, wt),
        m(hn, zn),
        B(rn, hn, null),
        m(pe, lt),
        m(pe, gn),
        m(gn, bt),
        m(gn, $n),
        B(Ln, gn, null),
        m(pe, st),
        _e && _e.m(pe, null),
        (It = !0);
    },
    p(Z, me) {
      const Qt = {};
      me[0] & 2 && (Qt.value = Z[1].globalIconSettings.shape), l.$set(Qt);
      const xt = {};
      !k &&
        me[0] & 2 &&
        ((k = !0),
        (xt.value = Z[1].globalIconSettings.width),
        ie(() => (k = !1))),
        _.$set(xt);
      const $t = {};
      !Y &&
        me[0] & 2 &&
        ((Y = !0),
        ($t.value = Z[1].globalIconSettings.height),
        ie(() => (Y = !1))),
        D.$set($t),
        Z[1].globalIconSettings.ringSize != null
          ? ye
            ? (ye.p(Z, me), me[0] & 2 && C(ye, 1))
            : ((ye = wl(Z)), ye.c(), C(ye, 1), ye.m(a, W))
          : ye &&
            (he(),
            T(ye, 1, 1, () => {
              ye = null;
            }),
            ge()),
        Z[1].globalIconSettings.displayOutline != null
          ? Oe
            ? (Oe.p(Z, me), me[0] & 2 && C(Oe, 1))
            : ((Oe = bl(Z)), Oe.c(), C(Oe, 1), Oe.m(a, q))
          : Oe &&
            (he(),
            T(Oe, 1, 1, () => {
              Oe = null;
            }),
            ge());
      const eo = {};
      !M &&
        me[0] & 2 &&
        ((M = !0),
        (eo.value = Z[1].globalIconSettings.translateX),
        ie(() => (M = !1))),
        Q.$set(eo);
      const no = {};
      !ae &&
        me[0] & 2 &&
        ((ae = !0),
        (no.value = Z[1].globalIconSettings.translateY),
        ie(() => (ae = !1))),
        v.$set(no);
      const to = {};
      !Ie &&
        me[0] & 2 &&
        ((Ie = !0),
        (to.value = Z[1].globalIconSettings.rotateDegree),
        ie(() => (Ie = !1))),
        Ce.$set(to);
      const oo = {};
      !Ee &&
        me[0] & 2 &&
        ((Ee = !0),
        (oo.value = Z[1].globalIconSettings.iconTranslateX),
        ie(() => (Ee = !1))),
        je.$set(oo);
      const io = {};
      !Re &&
        me[0] & 2 &&
        ((Re = !0),
        (io.value = Z[1].globalIconSettings.iconTranslateY),
        ie(() => (Re = !1))),
        He.$set(io);
      const lo = {};
      !jn &&
        me[0] & 2 &&
        ((jn = !0),
        (lo.value = Z[1].globalIconSettings.iconScaling),
        ie(() => (jn = !1))),
        tn.$set(lo),
        Z[1].globalIconSettings.xAxisRound != null
          ? $e
            ? ($e.p(Z, me), me[0] & 2 && C($e, 1))
            : (($e = kl(Z)), $e.c(), C($e, 1), $e.m(a, Ge))
          : $e &&
            (he(),
            T($e, 1, 1, () => {
              $e = null;
            }),
            ge()),
        Z[1].globalIconSettings.yAxisRound != null
          ? ze
            ? (ze.p(Z, me), me[0] & 2 && C(ze, 1))
            : ((ze = Sl(Z)), ze.c(), C(ze, 1), ze.m(a, null))
          : ze &&
            (he(),
            T(ze, 1, 1, () => {
              ze = null;
            }),
            ge());
      const ro = {};
      me[0] & 4 && (ro.colorString = Z[2].globalColorSettings.progressColor),
        Gn.$set(ro);
      const qe = {};
      !De &&
        me[0] & 4 &&
        ((De = !0),
        (qe.value = Z[2].globalColorSettings.progressContrast),
        ie(() => (De = !1))),
        kn.$set(qe);
      const F = {};
      !Bn &&
        me[0] & 4 &&
        ((Bn = !0),
        (F.value = Z[2].globalColorSettings.progressDropShadowAmount),
        ie(() => (Bn = !1))),
        Pn.$set(F);
      const le = {};
      me[0] & 4 && (le.colorString = Z[2].globalColorSettings.iconColor),
        Fn.$set(le);
      const Jt = {};
      !Dt &&
        me[0] & 4 &&
        ((Dt = !0),
        (Jt.value = Z[2].globalColorSettings.iconContrast),
        ie(() => (Dt = !1))),
        ln.$set(Jt);
      const Ot = {};
      !Qn &&
        me[0] & 4 &&
        ((Qn = !0),
        (Ot.value = Z[2].globalColorSettings.iconDropShadowAmount),
        ie(() => (Qn = !1))),
        an.$set(Ot);
      const Zt = {};
      me[0] & 4 && (Zt.colorString = Z[2].globalColorSettings.outlineColor),
        xn.$set(Zt);
      const Ft = {};
      !Tt &&
        me[0] & 4 &&
        ((Tt = !0),
        (Ft.value = Z[2].globalColorSettings.outlineContrast),
        ie(() => (Tt = !1))),
        rn.$set(Ft);
      const N = {};
      !rt &&
        me[0] & 4 &&
        ((rt = !0),
        (N.value = Z[2].globalColorSettings.outlineDropShadowAmount),
        ie(() => (rt = !1))),
        Ln.$set(N),
        Z[2].globalColorSettings.editableColors.innerColor
          ? _e
            ? (_e.p(Z, me), me[0] & 4 && C(_e, 1))
            : ((_e = pl(Z)), _e.c(), C(_e, 1), _e.m(pe, null))
          : _e &&
            (he(),
            T(_e, 1, 1, () => {
              _e = null;
            }),
            ge());
    },
    i(Z) {
      It ||
        (C(l.$$.fragment, Z),
        C(_.$$.fragment, Z),
        C(D.$$.fragment, Z),
        C(ye),
        C(Oe),
        C(Q.$$.fragment, Z),
        C(v.$$.fragment, Z),
        C(Ce.$$.fragment, Z),
        C(je.$$.fragment, Z),
        C(He.$$.fragment, Z),
        C(tn.$$.fragment, Z),
        C($e),
        C(ze),
        C(Gn.$$.fragment, Z),
        C(kn.$$.fragment, Z),
        C(Pn.$$.fragment, Z),
        C(Fn.$$.fragment, Z),
        C(ln.$$.fragment, Z),
        C(an.$$.fragment, Z),
        C(xn.$$.fragment, Z),
        C(rn.$$.fragment, Z),
        C(Ln.$$.fragment, Z),
        C(_e),
        (It = !0));
    },
    o(Z) {
      T(l.$$.fragment, Z),
        T(_.$$.fragment, Z),
        T(D.$$.fragment, Z),
        T(ye),
        T(Oe),
        T(Q.$$.fragment, Z),
        T(v.$$.fragment, Z),
        T(Ce.$$.fragment, Z),
        T(je.$$.fragment, Z),
        T(He.$$.fragment, Z),
        T(tn.$$.fragment, Z),
        T($e),
        T(ze),
        T(Gn.$$.fragment, Z),
        T(kn.$$.fragment, Z),
        T(Pn.$$.fragment, Z),
        T(Fn.$$.fragment, Z),
        T(ln.$$.fragment, Z),
        T(an.$$.fragment, Z),
        T(xn.$$.fragment, Z),
        T(rn.$$.fragment, Z),
        T(Ln.$$.fragment, Z),
        T(_e),
        (It = !1);
    },
    d(Z) {
      Z && E(e),
        U(l),
        Z && E(s),
        Z && E(f),
        Z && E(u),
        Z && E(a),
        U(_),
        U(D),
        ye && ye.d(),
        Oe && Oe.d(),
        U(Q),
        U(v),
        U(Ce),
        U(je),
        U(He),
        U(tn),
        $e && $e.d(),
        ze && ze.d(),
        Z && E(ct),
        Z && E(ht),
        Z && E(bn),
        Z && E(pe),
        U(Gn),
        U(kn),
        U(Pn),
        U(Fn),
        U(ln),
        U(an),
        U(xn),
        U(rn),
        U(Ln),
        _e && _e.d();
    },
  };
}
function c0(n) {
  let e, t, o, i, l;
  function s(u) {
    n[33](u);
  }
  let f = {
    name: "Global Status Icons Settings",
    icon: Lr,
    color: "white",
    $$slots: { default: [f0] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Po({ props: f })),
    te.push(() => oe(e, "group", s)),
    {
      c() {
        P(e.$$.fragment), (o = y()), (i = A("hr"));
      },
      m(u, a) {
        B(e, u, a), H(u, o, a), H(u, i, a), (l = !0);
      },
      p(u, a) {
        const c = {};
        (a[0] & 6) | (a[1] & 8) && (c.$$scope = { dirty: a, ctx: u }),
          !t && a[0] & 1 && ((t = !0), (c.group = u[0]), ie(() => (t = !1))),
          e.$set(c);
      },
      i(u) {
        l || (C(e.$$.fragment, u), (l = !0));
      },
      o(u) {
        T(e.$$.fragment, u), (l = !1);
      },
      d(u) {
        U(e, u), u && E(o), u && E(i);
      },
    }
  );
}
function h0(n, e, t) {
  let o, i;
  de(n, ne, (I) => t(1, (o = I))), de(n, re, (I) => t(2, (i = I)));
  let { group: l = "" } = e;
  const s = (I) => {
    ne.updateAllShapes(I), re.updateAllIconShapeEditableColor(I);
  };
  function f(I) {
    n.$$.not_equal(o.globalIconSettings.width, I) &&
      ((o.globalIconSettings.width = I), ne.set(o));
  }
  function u(I) {
    n.$$.not_equal(o.globalIconSettings.height, I) &&
      ((o.globalIconSettings.height = I), ne.set(o));
  }
  function a(I) {
    n.$$.not_equal(o.globalIconSettings.ringSize, I) &&
      ((o.globalIconSettings.ringSize = I), ne.set(o));
  }
  const c = (I) => ne.updateAllDisplayOutline(I);
  function d(I) {
    n.$$.not_equal(o.globalIconSettings.displayOutline, I) &&
      ((o.globalIconSettings.displayOutline = I), ne.set(o));
  }
  function h(I) {
    n.$$.not_equal(o.globalIconSettings.translateX, I) &&
      ((o.globalIconSettings.translateX = I), ne.set(o));
  }
  function _(I) {
    n.$$.not_equal(o.globalIconSettings.translateY, I) &&
      ((o.globalIconSettings.translateY = I), ne.set(o));
  }
  function k(I) {
    n.$$.not_equal(o.globalIconSettings.rotateDegree, I) &&
      ((o.globalIconSettings.rotateDegree = I), ne.set(o));
  }
  function b(I) {
    n.$$.not_equal(o.globalIconSettings.iconTranslateX, I) &&
      ((o.globalIconSettings.iconTranslateX = I), ne.set(o));
  }
  function w(I) {
    n.$$.not_equal(o.globalIconSettings.iconTranslateY, I) &&
      ((o.globalIconSettings.iconTranslateY = I), ne.set(o));
  }
  function g(I) {
    n.$$.not_equal(o.globalIconSettings.iconScaling, I) &&
      ((o.globalIconSettings.iconScaling = I), ne.set(o));
  }
  function S(I) {
    n.$$.not_equal(o.globalIconSettings.xAxisRound, I) &&
      ((o.globalIconSettings.xAxisRound = I), ne.set(o));
  }
  function D(I) {
    n.$$.not_equal(o.globalIconSettings.yAxisRound, I) &&
      ((o.globalIconSettings.yAxisRound = I), ne.set(o));
  }
  const Y = (I) => re.updateAllDefaultEffectColorSetting("progressColor", I),
    $ = (I) => re.updateAllDefaultEffectColorSetting("progressContrast", I);
  function W(I) {
    n.$$.not_equal(i.globalColorSettings.progressContrast, I) &&
      ((i.globalColorSettings.progressContrast = I), re.set(i));
  }
  const q = (I) =>
    re.updateAllDefaultEffectColorSetting("progressDropShadowAmount", I);
  function j(I) {
    n.$$.not_equal(i.globalColorSettings.progressDropShadowAmount, I) &&
      ((i.globalColorSettings.progressDropShadowAmount = I), re.set(i));
  }
  const x = (I) => re.updateAllDefaultEffectColorSetting("iconColor", I),
    V = (I) => re.updateAllDefaultEffectColorSetting("iconContrast", I);
  function Q(I) {
    n.$$.not_equal(i.globalColorSettings.iconContrast, I) &&
      ((i.globalColorSettings.iconContrast = I), re.set(i));
  }
  const M = (I) =>
    re.updateAllDefaultEffectColorSetting("iconDropShadowAmount", I);
  function X(I) {
    n.$$.not_equal(i.globalColorSettings.iconDropShadowAmount, I) &&
      ((i.globalColorSettings.iconDropShadowAmount = I), re.set(i));
  }
  const p = (I) => re.updateAllDefaultEffectColorSetting("outlineColor", I),
    z = (I) => re.updateAllDefaultEffectColorSetting("outlineContrast", I);
  function J(I) {
    n.$$.not_equal(i.globalColorSettings.outlineContrast, I) &&
      ((i.globalColorSettings.outlineContrast = I), re.set(i));
  }
  const v = (I) =>
    re.updateAllDefaultEffectColorSetting("outlineDropShadowAmount", I);
  function ae(I) {
    n.$$.not_equal(i.globalColorSettings.outlineDropShadowAmount, I) &&
      ((i.globalColorSettings.outlineDropShadowAmount = I), re.set(i));
  }
  const ee = (I) => re.updateAllDefaultEffectColorSetting("innerColor", I);
  function K(I) {
    (l = I), t(0, l);
  }
  return (
    (n.$$set = (I) => {
      "group" in I && t(0, (l = I.group));
    }),
    [
      l,
      o,
      i,
      s,
      f,
      u,
      a,
      c,
      d,
      h,
      _,
      k,
      b,
      w,
      g,
      S,
      D,
      Y,
      $,
      W,
      q,
      j,
      x,
      V,
      Q,
      M,
      X,
      p,
      z,
      J,
      v,
      ae,
      ee,
      K,
    ]
  );
}
class g0 extends ue {
  constructor(e) {
    super();
    fe(this, e, h0, c0, ce, { group: 0 }, null, [-1, -1]);
  }
}
function Cl(n) {
  let e, t;
  return (
    (e = new Ht({
      props: {
        name: "Save Changes To Server",
        buttonClass: "my-auto",
        disable: n[1].saveUIState != "ready",
      },
    })),
    e.$on("click", n[5]),
    {
      c() {
        P(e.$$.fragment);
      },
      m(o, i) {
        B(e, o, i), (t = !0);
      },
      p(o, i) {
        const l = {};
        i & 2 && (l.disable = o[1].saveUIState != "ready"), e.$set(l);
      },
      i(o) {
        t || (C(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        T(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        U(e, o);
      },
    }
  );
}
function d0(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S,
    D,
    Y,
    $,
    W,
    q,
    j,
    x,
    V,
    Q,
    M,
    X,
    p,
    z,
    J,
    v;
  function ae(se) {
    n[3](se);
  }
  let ee = { center: !0 };
  n[1].designMode !== void 0 && (ee.checked = n[1].designMode),
    (u = new Jo({ props: ee })),
    te.push(() => oe(u, "checked", ae)),
    (h = new Ht({
      props: {
        name: "Reset Status Icon Settings",
        buttonClass: "mr-5 hover:bg-red-600",
      },
    })),
    h.$on("click", n[4]);
  let K = n[2].adminOnly && n[2].isAdmin && Cl(n);
  function I(se) {
    n[6](se);
  }
  let ke = {};
  n[0] !== void 0 && (ke.group = n[0]),
    (g = new g0({ props: ke })),
    te.push(() => oe(g, "group", I));
  function Ce(se) {
    n[7](se);
  }
  let Ie = {};
  n[0] !== void 0 && (Ie.group = n[0]),
    (Y = new u0({ props: Ie })),
    te.push(() => oe(Y, "group", Ce));
  function Xe(se) {
    n[8](se);
  }
  let ve = {};
  n[0] !== void 0 && (ve.group = n[0]),
    (q = new Uu({ props: ve })),
    te.push(() => oe(q, "group", Xe));
  function Ne(se) {
    n[9](se);
  }
  let Tn = {};
  n[0] !== void 0 && (Tn.group = n[0]),
    (V = new Xu({ props: Tn })),
    te.push(() => oe(V, "group", Ne));
  function je(se) {
    n[10](se);
  }
  let Ee = {};
  return (
    n[0] !== void 0 && (Ee.group = n[0]),
    (X = new Iu({ props: Ee })),
    te.push(() => oe(X, "group", je)),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          (o = A("div")),
          (o.innerHTML =
            '<div><div class="flex flex-row items-center"><p class="ml-3 p-0">Status Icons Settings</p></div></div>'),
          (i = y()),
          (l = A("div")),
          (s = A("p")),
          (s.textContent = "Design Mode"),
          (f = y()),
          P(u.$$.fragment),
          (c = y()),
          (d = A("div")),
          P(h.$$.fragment),
          (_ = y()),
          K && K.c(),
          (k = y()),
          (b = A("hr")),
          (w = y()),
          P(g.$$.fragment),
          (D = y()),
          P(Y.$$.fragment),
          (W = y()),
          P(q.$$.fragment),
          (x = y()),
          P(V.$$.fragment),
          (M = y()),
          P(X.$$.fragment),
          (z = y()),
          (J = A("p")),
          (J.textContent = `${String.fromCharCode(...xl)}`),
          r(o, "class", "flex-1 flex flex-col justify-center min-w-min"),
          r(l, "class", "text-base"),
          r(d, "class", "flex flex-1 min-w-min justify-end"),
          r(t, "class", "my-3 text-2xl text-white flex flex-row"),
          r(e, "class", "text-sm flex flex-col text-[#e8e8e8] select-none"),
          r(
            J,
            "class",
            "mt-auto ml-auto opacity-05 pb-[29px] pr-[16px] text-sm select-none"
          );
      },
      m(se, Se) {
        H(se, e, Se),
          m(e, t),
          m(t, o),
          m(t, i),
          m(t, l),
          m(l, s),
          m(l, f),
          B(u, l, null),
          m(t, c),
          m(t, d),
          B(h, d, null),
          m(d, _),
          K && K.m(d, null),
          m(e, k),
          m(e, b),
          m(e, w),
          B(g, e, null),
          m(e, D),
          B(Y, e, null),
          m(e, W),
          B(q, e, null),
          m(e, x),
          B(V, e, null),
          m(e, M),
          B(X, e, null),
          H(se, z, Se),
          H(se, J, Se),
          (v = !0);
      },
      p(se, [Se]) {
        const Ve = {};
        !a &&
          Se & 2 &&
          ((a = !0), (Ve.checked = se[1].designMode), ie(() => (a = !1))),
          u.$set(Ve),
          se[2].adminOnly && se[2].isAdmin
            ? K
              ? (K.p(se, Se), Se & 4 && C(K, 1))
              : ((K = Cl(se)), K.c(), C(K, 1), K.m(d, null))
            : K &&
              (he(),
              T(K, 1, 1, () => {
                K = null;
              }),
              ge());
        const In = {};
        !S && Se & 1 && ((S = !0), (In.group = se[0]), ie(() => (S = !1))),
          g.$set(In);
        const He = {};
        !$ && Se & 1 && (($ = !0), (He.group = se[0]), ie(() => ($ = !1))),
          Y.$set(He);
        const Re = {};
        !j && Se & 1 && ((j = !0), (Re.group = se[0]), ie(() => (j = !1))),
          q.$set(Re);
        const yn = {};
        !Q && Se & 1 && ((Q = !0), (yn.group = se[0]), ie(() => (Q = !1))),
          V.$set(yn);
        const Pe = {};
        !p && Se & 1 && ((p = !0), (Pe.group = se[0]), ie(() => (p = !1))),
          X.$set(Pe);
      },
      i(se) {
        v ||
          (C(u.$$.fragment, se),
          C(h.$$.fragment, se),
          C(K),
          C(g.$$.fragment, se),
          C(Y.$$.fragment, se),
          C(q.$$.fragment, se),
          C(V.$$.fragment, se),
          C(X.$$.fragment, se),
          (v = !0));
      },
      o(se) {
        T(u.$$.fragment, se),
          T(h.$$.fragment, se),
          T(K),
          T(g.$$.fragment, se),
          T(Y.$$.fragment, se),
          T(q.$$.fragment, se),
          T(V.$$.fragment, se),
          T(X.$$.fragment, se),
          (v = !1);
      },
      d(se) {
        se && E(e),
          U(u),
          U(h),
          K && K.d(),
          U(g),
          U(Y),
          U(q),
          U(V),
          U(X),
          se && E(z),
          se && E(J);
      },
    }
  );
}
function m0(n, e, t) {
  let o, i;
  de(n, ne, (k) => t(1, (o = k))), de(n, Ye, (k) => t(2, (i = k)));
  let l = "";
  function s(k) {
    n.$$.not_equal(o.designMode, k) && ((o.designMode = k), ne.set(o));
  }
  const f = () => {
      ne.resetPlayerStatusIcons(), re.resetColorEffects(), ft.resetLayout();
    },
    u = () => {
      ds(), St(ne, (o.saveUIState = "updating"), o);
    };
  function a(k) {
    (l = k), t(0, l);
  }
  function c(k) {
    (l = k), t(0, l);
  }
  function d(k) {
    (l = k), t(0, l);
  }
  function h(k) {
    (l = k), t(0, l);
  }
  function _(k) {
    (l = k), t(0, l);
  }
  return [l, o, i, s, f, u, a, c, d, h, _];
}
class _0 extends ue {
  constructor(e) {
    super();
    fe(this, e, m0, d0, ce, {});
  }
}
function vl(n, e, t) {
  const o = n.slice();
  return (o[9] = e[t]), o;
}
function Dl(n, e, t) {
  const o = n.slice();
  return (o[9] = e[t]), (o[13] = t), o;
}
function Al(n) {
  let e,
    t,
    o,
    i,
    l = n[9].name + "",
    s,
    f,
    u,
    a,
    c;
  t = new Fe({ props: { icon: n[9].icon, translateY: 0.27 } });
  function d() {
    return n[8](n[13]);
  }
  return {
    c() {
      (e = A("div")),
        P(t.$$.fragment),
        (o = y()),
        (i = A("span")),
        (s = be(l)),
        (f = y()),
        r(
          e,
          "class",
          "bg-[#171717] px-4 py-4 flex flex-row gap-3 cursor-pointer select-none"
        );
    },
    m(h, _) {
      H(h, e, _),
        B(t, e, null),
        m(e, o),
        m(e, i),
        m(i, s),
        m(e, f),
        (u = !0),
        a || ((c = Ke(e, "click", d)), (a = !0));
    },
    p(h, _) {
      n = h;
    },
    i(h) {
      u || (C(t.$$.fragment, h), (u = !0));
    },
    o(h) {
      T(t.$$.fragment, h), (u = !1);
    },
    d(h) {
      h && E(e), U(t), (a = !1), c();
    },
  };
}
function Tl(n) {
  let e,
    t,
    o =
      (!n[9].adminOnly ||
        !n[2].adminOnly ||
        (n[2].adminOnly && n[2].isAdmin)) &&
      Al(n);
  return {
    c() {
      o && o.c(), (e = dn());
    },
    m(i, l) {
      o && o.m(i, l), H(i, e, l), (t = !0);
    },
    p(i, l) {
      !i[9].adminOnly || !i[2].adminOnly || (i[2].adminOnly && i[2].isAdmin)
        ? o
          ? (o.p(i, l), l & 4 && C(o, 1))
          : ((o = Al(i)), o.c(), C(o, 1), o.m(e.parentNode, e))
        : o &&
          (he(),
          T(o, 1, 1, () => {
            o = null;
          }),
          ge());
    },
    i(i) {
      t || (C(o), (t = !0));
    },
    o(i) {
      T(o), (t = !1);
    },
    d(i) {
      o && o.d(i), i && E(e);
    },
  };
}
function Il(n) {
  let e, t, o, i;
  var l = n[9].content;
  function s(f) {
    return {};
  }
  return (
    l && (t = new l(s())),
    {
      c() {
        (e = A("div")),
          t && P(t.$$.fragment),
          (o = y()),
          R(e, "display", n[1].name == n[9].name ? "flex" : "none"),
          r(e, "class", "flex-col w-5/6 px-5 overflow-y-scroll bg-[#171717]");
      },
      m(f, u) {
        H(f, e, u), t && B(t, e, null), m(e, o), (i = !0);
      },
      p(f, u) {
        if (l !== (l = f[9].content)) {
          if (t) {
            he();
            const a = t;
            T(a.$$.fragment, 1, 0, () => {
              U(a, 1);
            }),
              ge();
          }
          l
            ? ((t = new l(s())),
              P(t.$$.fragment),
              C(t.$$.fragment, 1),
              B(t, e, o))
            : (t = null);
        }
        (!i || u & 2) &&
          R(e, "display", f[1].name == f[9].name ? "flex" : "none");
      },
      i(f) {
        i || (t && C(t.$$.fragment, f), (i = !0));
      },
      o(f) {
        t && T(t.$$.fragment, f), (i = !1);
      },
      d(f) {
        f && E(e), t && U(t);
      },
    }
  );
}
function yl(n) {
  let e,
    t,
    o =
      (!n[9].adminOnly ||
        !n[2].adminOnly ||
        (n[2].adminOnly && n[2].isAdmin)) &&
      Il(n);
  return {
    c() {
      o && o.c(), (e = dn());
    },
    m(i, l) {
      o && o.m(i, l), H(i, e, l), (t = !0);
    },
    p(i, l) {
      !i[9].adminOnly || !i[2].adminOnly || (i[2].adminOnly && i[2].isAdmin)
        ? o
          ? (o.p(i, l), l & 4 && C(o, 1))
          : ((o = Il(i)), o.c(), C(o, 1), o.m(e.parentNode, e))
        : o &&
          (he(),
          T(o, 1, 1, () => {
            o = null;
          }),
          ge());
    },
    i(i) {
      t || (C(o), (t = !0));
    },
    o(i) {
      T(o), (t = !1);
    },
    d(i) {
      o && o.d(i), i && E(e);
    },
  };
}
function w0(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d = n[5],
    h = [];
  for (let g = 0; g < d.length; g += 1) h[g] = Tl(Dl(n, d, g));
  const _ = (g) =>
    T(h[g], 1, 1, () => {
      h[g] = null;
    });
  let k = n[5],
    b = [];
  for (let g = 0; g < k.length; g += 1) b[g] = yl(vl(n, k, g));
  const w = (g) =>
    T(b[g], 1, 1, () => {
      b[g] = null;
    });
  return {
    c() {
      (e = A("section")),
        (t = A("div")),
        (t.innerHTML =
          '<svg role="img" aria-label="drag handle" viewBox="0 0 24 24" height="24" width="24" class="mx-auto svelte-u84uy3"><path fill="white" d="M3,15V13H5V15H3M3,11V9H5V11H3M7,15V13H9V15H7M7,11V9H9V11H7M11,15V13H13V15H11M11,11V9H13V11H11M15,15V13H17V15H15M15,11V9H17V11H15M19,15V13H21V15H19M19,11V9H21V11H19Z"></path></svg>'),
        (o = y()),
        (i = A("div")),
        (l = A("div"));
      for (let g = 0; g < h.length; g += 1) h[g].c();
      s = y();
      for (let g = 0; g < b.length; g += 1) b[g].c();
      r(t, "class", "drag-bar bg-dark-900 rounded-t-2xl svelte-u84uy3"),
        r(l, "class", "flex flex-col w-1/6 bg-[#1e1e1e]"),
        r(i, "class", "flex font-semibold"),
        R(i, "height", "calc(100% - 24px)"),
        R(e, "display", n[2].show ? "flex" : "none"),
        r(
          e,
          "class",
          "w-[60vw] h-[60vh] flex-col bg-[#171717] rounded-t-2xl shadow-lg text-white"
        );
    },
    m(g, S) {
      H(g, e, S), m(e, t), n[7](t), m(e, o), m(e, i), m(i, l);
      for (let D = 0; D < h.length; D += 1) h[D].m(l, null);
      m(i, s);
      for (let D = 0; D < b.length; D += 1) b[D].m(i, null);
      (u = !0),
        a ||
          ((c = qr(
            (f = Nr.call(null, e, {
              handle: n[0],
              bounds: "body",
              gpuAcceleration: !1,
              defaultPosition: { x: n[3] / 5, y: n[4] / 5 },
            }))
          )),
          (a = !0));
    },
    p(g, [S]) {
      if (S & 100) {
        d = g[5];
        let D;
        for (D = 0; D < d.length; D += 1) {
          const Y = Dl(g, d, D);
          h[D]
            ? (h[D].p(Y, S), C(h[D], 1))
            : ((h[D] = Tl(Y)), h[D].c(), C(h[D], 1), h[D].m(l, null));
        }
        for (he(), D = d.length; D < h.length; D += 1) _(D);
        ge();
      }
      if (S & 38) {
        k = g[5];
        let D;
        for (D = 0; D < k.length; D += 1) {
          const Y = vl(g, k, D);
          b[D]
            ? (b[D].p(Y, S), C(b[D], 1))
            : ((b[D] = yl(Y)), b[D].c(), C(b[D], 1), b[D].m(i, null));
        }
        for (he(), D = k.length; D < b.length; D += 1) w(D);
        ge();
      }
      (!u || S & 4) && R(e, "display", g[2].show ? "flex" : "none"),
        f &&
          jr(f.update) &&
          S & 1 &&
          f.update.call(null, {
            handle: g[0],
            bounds: "body",
            gpuAcceleration: !1,
            defaultPosition: { x: g[3] / 5, y: g[4] / 5 },
          });
    },
    i(g) {
      if (!u) {
        for (let S = 0; S < d.length; S += 1) C(h[S]);
        for (let S = 0; S < k.length; S += 1) C(b[S]);
        u = !0;
      }
    },
    o(g) {
      h = h.filter(Boolean);
      for (let S = 0; S < h.length; S += 1) T(h[S]);
      b = b.filter(Boolean);
      for (let S = 0; S < b.length; S += 1) T(b[S]);
      u = !1;
    },
    d(g) {
      g && E(e), n[7](null), so(h, g), so(b, g), (a = !1), c();
    },
  };
}
function b0(n, e, t) {
  let o;
  de(n, Ye, (h) => t(2, (o = h)));
  let i;
  const l = screen.width,
    s = screen.height;
  let f = [
      { name: "Hud Settings", icon: Gr, content: mu, adminOnly: !1 },
      { name: "Status Icons", icon: Wr, content: _0, adminOnly: !0 },
    ],
    u = f[0];
  function a(h) {
    t(1, (u = f[h]));
  }
  function c(h) {
    te[h ? "unshift" : "push"](() => {
      (i = h), t(0, i);
    });
  }
  return [i, u, o, l, s, f, a, c, (h) => a(h)];
}
class k0 extends ue {
  constructor(e) {
    super();
    fe(this, e, b0, w0, ce, {});
  }
}
function Ml(n) {
  let e,
    t,
    o = (n[0].showSquareBorder || An) && Yl(),
    i = n[0].showCircleBorder && Xl();
  return {
    c() {
      (e = A("div")),
        o && o.c(),
        (t = y()),
        i && i.c(),
        r(e, "class", "mapborder svelte-fe3cn0");
    },
    m(l, s) {
      H(l, e, s), o && o.m(e, null), m(e, t), i && i.m(e, null);
    },
    p(l, s) {
      l[0].showSquareBorder || An
        ? o || ((o = Yl()), o.c(), o.m(e, t))
        : o && (o.d(1), (o = null)),
        l[0].showCircleBorder
          ? i || ((i = Xl()), i.c(), i.m(e, null))
          : i && (i.d(1), (i = null));
    },
    d(l) {
      l && E(e), o && o.d(), i && i.d();
    },
  };
}
function Yl(n) {
  let e;
  return {
    c() {
      (e = A("div")), r(e, "class", "square svelte-fe3cn0");
    },
    m(t, o) {
      H(t, e, o);
    },
    d(t) {
      t && E(e);
    },
  };
}
function Xl(n) {
  let e;
  return {
    c() {
      (e = A("div")), r(e, "class", "circle svelte-fe3cn0");
    },
    m(t, o) {
      H(t, e, o);
    },
    d(t) {
      t && E(e);
    },
  };
}
function S0(n) {
  let e,
    t = (n[0].show || An) && Ml(n);
  return {
    c() {
      t && t.c(), (e = dn());
    },
    m(o, i) {
      t && t.m(o, i), H(o, e, i);
    },
    p(o, [i]) {
      o[0].show || An
        ? t
          ? t.p(o, i)
          : ((t = Ml(o)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Te,
    o: Te,
    d(o) {
      t && t.d(o), o && E(e);
    },
  };
}
function p0(n, e, t) {
  let o;
  return de(n, Go, (i) => t(0, (o = i))), [o];
}
class C0 extends ue {
  constructor(e) {
    super();
    fe(this, e, p0, S0, ce, {});
  }
}
function Ol(n) {
  let e,
    t,
    o,
    i,
    l,
    s = (n[0].showStreets || An) && Fl(n),
    f = n[0].showPointer && El(),
    u = n[0].showDegress && Vl(),
    a = (n[0].showCompass || An) && Hl(n);
  return {
    c() {
      (e = A("div")),
        s && s.c(),
        (t = y()),
        (o = A("div")),
        f && f.c(),
        (i = y()),
        u && u.c(),
        (l = y()),
        a && a.c(),
        r(o, "class", "baseplate svelte-9vhma4"),
        r(e, "class", "baseplateConainer svelte-9vhma4");
    },
    m(c, d) {
      H(c, e, d),
        s && s.m(e, null),
        m(e, t),
        m(e, o),
        f && f.m(o, null),
        m(o, i),
        u && u.m(o, null),
        m(o, l),
        a && a.m(o, null);
    },
    p(c, d) {
      c[0].showStreets || An
        ? s
          ? s.p(c, d)
          : ((s = Fl(c)), s.c(), s.m(e, t))
        : s && (s.d(1), (s = null)),
        c[0].showPointer
          ? f || ((f = El()), f.c(), f.m(o, i))
          : f && (f.d(1), (f = null)),
        c[0].showDegress
          ? u || ((u = Vl()), u.c(), u.m(o, l))
          : u && (u.d(1), (u = null)),
        c[0].showCompass || An
          ? a
            ? a.p(c, d)
            : ((a = Hl(c)), a.c(), a.m(o, null))
          : a && (a.d(1), (a = null));
    },
    d(c) {
      c && E(e), s && s.d(), f && f.d(), u && u.d(), a && a.d();
    },
  };
}
function Fl(n) {
  let e,
    t,
    o = n[0].street1 + "",
    i,
    l,
    s,
    f = n[0].street2 + "",
    u;
  return {
    c() {
      (e = A("div")),
        (t = A("div")),
        (i = be(o)),
        (l = y()),
        (s = A("div")),
        (u = be(f)),
        r(t, "class", "street1 svelte-9vhma4"),
        r(s, "class", "street2 svelte-9vhma4"),
        r(e, "class", "street-container svelte-9vhma4");
    },
    m(a, c) {
      H(a, e, c), m(e, t), m(t, i), m(e, l), m(e, s), m(s, u);
    },
    p(a, c) {
      c & 1 && o !== (o = a[0].street1 + "") && un(i, o),
        c & 1 && f !== (f = a[0].street2 + "") && un(u, f);
    },
    d(a) {
      a && E(e);
    },
  };
}
function El(n) {
  let e;
  return {
    c() {
      (e = A("div")),
        (e.textContent = "\u02C5"),
        r(e, "class", "pointer svelte-9vhma4");
    },
    m(t, o) {
      H(t, e, o);
    },
    d(t) {
      t && E(e);
    },
  };
}
function Vl(n) {
  let e;
  return {
    c() {
      (e = A("div")), r(e, "class", "degrees svelte-9vhma4");
    },
    m(t, o) {
      H(t, e, o);
    },
    d(t) {
      t && E(e);
    },
  };
}
function Hl(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _,
    k,
    b,
    w,
    g,
    S,
    D,
    Y,
    $,
    W,
    q,
    j,
    x,
    V,
    Q,
    M,
    X,
    p,
    z,
    J,
    v,
    ae,
    ee,
    K,
    I,
    ke,
    Ce,
    Ie;
  return {
    c() {
      (e = O("svg")),
        (t = O("rect")),
        (o = O("rect")),
        (i = O("rect")),
        (l = O("rect")),
        (s = O("rect")),
        (f = O("rect")),
        (u = O("rect")),
        (a = O("rect")),
        (c = O("rect")),
        (d = O("rect")),
        (h = O("rect")),
        (_ = O("rect")),
        (k = O("rect")),
        (w = y()),
        (g = O("svg")),
        (S = O("text")),
        (D = be("N")),
        (Y = O("text")),
        ($ = be("N")),
        (W = O("text")),
        (q = be("NW")),
        (j = O("text")),
        (x = be("NW")),
        (V = O("text")),
        (Q = be("NE")),
        (M = O("text")),
        (X = be("NE")),
        (p = O("text")),
        (z = be("E")),
        (J = O("text")),
        (v = be("SE")),
        (ae = O("text")),
        (ee = be("S")),
        (K = O("text")),
        (I = be("SW")),
        (ke = O("text")),
        (Ce = be("W")),
        r(t, "width", "3"),
        r(t, "stroke", "black"),
        r(t, "fill", "white"),
        r(t, "stroke-width", "0.5"),
        r(t, "stroke-opacity", "0.6"),
        r(t, "height", "20"),
        r(t, "x", "-90"),
        r(o, "width", "3"),
        r(o, "stroke", "black"),
        r(o, "fill", "white"),
        r(o, "stroke-width", "0.5"),
        r(o, "stroke-opacity", "0.6"),
        r(o, "height", "9"),
        r(o, "x", "-45"),
        r(i, "width", "4.5"),
        r(i, "stroke", "black"),
        r(i, "fill", "white"),
        r(i, "stroke-width", "0.5"),
        r(i, "stroke-opacity", "0.6"),
        r(i, "height", "20"),
        r(i, "x", "0"),
        r(l, "width", "3"),
        r(l, "stroke", "black"),
        r(l, "fill", "white"),
        r(l, "stroke-width", "0.5"),
        r(l, "stroke-opacity", "0.6"),
        r(l, "height", "9"),
        r(l, "x", "45"),
        r(s, "width", "4.5"),
        r(s, "stroke", "black"),
        r(s, "fill", "white"),
        r(s, "stroke-width", "0.5"),
        r(s, "stroke-opacity", "0.6"),
        r(s, "height", "20"),
        r(s, "x", "90"),
        r(f, "width", "3"),
        r(f, "stroke", "black"),
        r(f, "fill", "white"),
        r(f, "stroke-width", "0.5"),
        r(f, "stroke-opacity", "0.6"),
        r(f, "height", "9"),
        r(f, "x", "135"),
        r(u, "width", "4.5"),
        r(u, "stroke", "black"),
        r(u, "fill", "white"),
        r(u, "stroke-width", "0.5"),
        r(u, "stroke-opacity", "0.6"),
        r(u, "height", "20"),
        r(u, "x", "180"),
        r(a, "width", "3"),
        r(a, "stroke", "black"),
        r(a, "fill", "white"),
        r(a, "stroke-width", "0.5"),
        r(a, "stroke-opacity", "0.6"),
        r(a, "height", "9"),
        r(a, "x", "225"),
        r(c, "width", "4.5"),
        r(c, "stroke", "black"),
        r(c, "fill", "white"),
        r(c, "stroke-width", "0.5"),
        r(c, "stroke-opacity", "0.6"),
        r(c, "height", "20"),
        r(c, "x", "270"),
        r(d, "width", "3"),
        r(d, "stroke", "black"),
        r(d, "fill", "white"),
        r(d, "stroke-width", "0.5"),
        r(d, "stroke-opacity", "0.6"),
        r(d, "height", "9"),
        r(d, "x", "315"),
        r(h, "width", "4.5"),
        r(h, "stroke", "black"),
        r(h, "fill", "white"),
        r(h, "stroke-width", "0.5"),
        r(h, "stroke-opacity", "0.6"),
        r(h, "height", "20"),
        r(h, "x", "360"),
        r(_, "width", "3"),
        r(_, "stroke", "black"),
        r(_, "fill", "white"),
        r(_, "stroke-width", "0.5"),
        r(_, "stroke-opacity", "0.6"),
        r(_, "height", "9"),
        r(_, "x", "405"),
        r(k, "width", "3"),
        r(k, "stroke", "black"),
        r(k, "fill", "white"),
        r(k, "stroke-width", "0.5"),
        r(k, "stroke-opacity", "0.6"),
        r(k, "height", "20"),
        r(k, "x", "450"),
        r(e, "class", "bezel svelte-9vhma4"),
        r(e, "viewBox", (b = n[1] + " 0 180 5")),
        r(S, "x", "0"),
        r(S, "y", "1.5"),
        r(S, "dominant-baseline", "middle"),
        r(S, "text-anchor", "middle"),
        r(S, "fill", "yellow"),
        r(Y, "x", "360"),
        r(Y, "y", "1.5"),
        r(Y, "dominant-baseline", "middle"),
        r(Y, "text-anchor", "middle"),
        r(Y, "fill", "yellow"),
        r(W, "x", "315"),
        r(W, "y", "-11"),
        r(W, "dominant-baseline", "middle"),
        r(W, "text-anchor", "middle"),
        r(W, "fill", "white"),
        r(W, "class", "bearingText svelte-9vhma4"),
        r(j, "x", "-45"),
        r(j, "y", "-11"),
        r(j, "dominant-baseline", "middle"),
        r(j, "text-anchor", "middle"),
        r(j, "fill", "white"),
        r(j, "class", "bearingText svelte-9vhma4"),
        r(V, "x", "45"),
        r(V, "y", "-11"),
        r(V, "dominant-baseline", "middle"),
        r(V, "text-anchor", "middle"),
        r(V, "fill", "white"),
        r(V, "class", "bearingText svelte-9vhma4"),
        r(M, "x", "405"),
        r(M, "y", "-11"),
        r(M, "dominant-baseline", "middle"),
        r(M, "text-anchor", "middle"),
        r(M, "fill", "white"),
        r(M, "class", "bearingText svelte-9vhma4"),
        r(p, "x", "90"),
        r(p, "y", "1.5"),
        r(p, "dominant-baseline", "middle"),
        r(p, "text-anchor", "middle"),
        r(p, "fill", "white"),
        r(J, "x", "135"),
        r(J, "y", "-11"),
        r(J, "dominant-baseline", "middle"),
        r(J, "text-anchor", "middle"),
        r(J, "fill", "white"),
        r(J, "class", "bearingText svelte-9vhma4"),
        r(ae, "x", "180"),
        r(ae, "y", "1.5"),
        r(ae, "dominant-baseline", "middle"),
        r(ae, "text-anchor", "middle"),
        r(ae, "fill", "white"),
        r(K, "x", "225"),
        r(K, "y", "-11"),
        r(K, "dominant-baseline", "middle"),
        r(K, "text-anchor", "middle"),
        r(K, "fill", "white"),
        r(K, "class", "bearingText svelte-9vhma4"),
        r(ke, "x", "270"),
        r(ke, "y", "1.5"),
        r(ke, "dominant-baseline", "middle"),
        r(ke, "text-anchor", "middle"),
        r(ke, "fill", "white"),
        r(g, "class", "bearing svelte-9vhma4"),
        r(g, "viewBox", (Ie = n[1] + " 0 180 1.5"));
    },
    m(Xe, ve) {
      H(Xe, e, ve),
        m(e, t),
        m(e, o),
        m(e, i),
        m(e, l),
        m(e, s),
        m(e, f),
        m(e, u),
        m(e, a),
        m(e, c),
        m(e, d),
        m(e, h),
        m(e, _),
        m(e, k),
        H(Xe, w, ve),
        H(Xe, g, ve),
        m(g, S),
        m(S, D),
        m(g, Y),
        m(Y, $),
        m(g, W),
        m(W, q),
        m(g, j),
        m(j, x),
        m(g, V),
        m(V, Q),
        m(g, M),
        m(M, X),
        m(g, p),
        m(p, z),
        m(g, J),
        m(J, v),
        m(g, ae),
        m(ae, ee),
        m(g, K),
        m(K, I),
        m(g, ke),
        m(ke, Ce);
    },
    p(Xe, ve) {
      ve & 2 && b !== (b = Xe[1] + " 0 180 5") && r(e, "viewBox", b),
        ve & 2 && Ie !== (Ie = Xe[1] + " 0 180 1.5") && r(g, "viewBox", Ie);
    },
    d(Xe) {
      Xe && E(e), Xe && E(w), Xe && E(g);
    },
  };
}
function v0(n) {
  let e,
    t = (n[0].show || An) && Ol(n);
  return {
    c() {
      t && t.c(), (e = dn());
    },
    m(o, i) {
      t && t.m(o, i), H(o, e, i);
    },
    p(o, [i]) {
      o[0].show || An
        ? t
          ? t.p(o, i)
          : ((t = Ol(o)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Te,
    o: Te,
    d(o) {
      t && t.d(o), o && E(e);
    },
  };
}
function D0(n, e, t) {
  let o, i;
  de(n, Eo, (f) => t(0, (o = f)));
  const l = nn(0, { duration: 600, easing: Ao });
  de(n, l, (f) => t(1, (i = f)));
  let s = o.heading;
  return (
    (n.$$.update = () => {
      n.$$.dirty & 9 &&
        ((s > 230 && o.heading < -50) || (s < -50 && o.heading > 230)
          ? l.set(o.heading, { duration: 0, easing: Ao })
          : l.set(o.heading, { duration: 600, easing: Ao }),
        t(3, (s = o.heading)));
    }),
    [o, i, l, s]
  );
}
class A0 extends ue {
  constructor(e) {
    super();
    fe(this, e, D0, v0, ce, {});
  }
}
function Rl(n) {
  let e,
    t,
    o,
    i,
    l = n[0].cash + "",
    s,
    f,
    u;
  return {
    c() {
      (e = A("div")),
        (t = A("p")),
        (o = A("span")),
        (o.textContent = "$\xA0"),
        (i = A("span")),
        (s = be(l)),
        r(o, "id", "sign"),
        r(o, "class", "svelte-12ge6tb"),
        r(i, "id", "money"),
        r(i, "class", "svelte-12ge6tb");
    },
    m(a, c) {
      H(a, e, c), m(e, t), m(t, o), m(t, i), m(i, s), (u = !0);
    },
    p(a, c) {
      (!u || c & 1) && l !== (l = a[0].cash + "") && un(s, l);
    },
    i(a) {
      u ||
        (a &&
          Mt(() => {
            f || (f = Yn(e, qn, { duration: 1e3 }, !0)), f.run(1);
          }),
        (u = !0));
    },
    o(a) {
      a && (f || (f = Yn(e, qn, { duration: 1e3 }, !1)), f.run(0)), (u = !1);
    },
    d(a) {
      a && E(e), a && f && f.end();
    },
  };
}
function Pl(n) {
  let e,
    t,
    o,
    i,
    l = n[0].bank + "",
    s,
    f,
    u;
  return {
    c() {
      (e = A("div")),
        (t = A("p")),
        (o = A("span")),
        (o.textContent = "$\xA0"),
        (i = A("span")),
        (s = be(l)),
        r(o, "id", "sign"),
        r(o, "class", "svelte-12ge6tb"),
        r(i, "id", "bank"),
        r(i, "class", "svelte-12ge6tb");
    },
    m(a, c) {
      H(a, e, c), m(e, t), m(t, o), m(t, i), m(i, s), (u = !0);
    },
    p(a, c) {
      (!u || c & 1) && l !== (l = a[0].bank + "") && un(s, l);
    },
    i(a) {
      u ||
        (a &&
          Mt(() => {
            f || (f = Yn(e, qn, { duration: 1e3 }, !0)), f.run(1);
          }),
        (u = !0));
    },
    o(a) {
      a && (f || (f = Yn(e, qn, { duration: 1e3 }, !1)), f.run(0)), (u = !1);
    },
    d(a) {
      a && E(e), a && f && f.end();
    },
  };
}
function Bl(n) {
  let e, t, o;
  function i(f, u) {
    if (f[0].plus) return I0;
    if (f[0].minus) return T0;
  }
  let l = i(n),
    s = l && l(n);
  return {
    c() {
      (e = A("div")), s && s.c();
    },
    m(f, u) {
      H(f, e, u), s && s.m(e, null), (o = !0);
    },
    p(f, u) {
      l === (l = i(f)) && s
        ? s.p(f, u)
        : (s && s.d(1), (s = l && l(f)), s && (s.c(), s.m(e, null)));
    },
    i(f) {
      o ||
        (f &&
          Mt(() => {
            t || (t = Yn(e, qn, { duration: 1e3 }, !0)), t.run(1);
          }),
        (o = !0));
    },
    o(f) {
      f && (t || (t = Yn(e, qn, { duration: 1e3 }, !1)), t.run(0)), (o = !1);
    },
    d(f) {
      f && E(e), s && s.d(), f && t && t.end();
    },
  };
}
function T0(n) {
  let e,
    t,
    o,
    i = n[0].amount + "",
    l;
  return {
    c() {
      (e = A("p")),
        (t = A("span")),
        (t.textContent = "-\xA0"),
        (o = A("span")),
        (l = be(i)),
        r(t, "id", "minus"),
        r(t, "class", "svelte-12ge6tb"),
        r(o, "id", "money"),
        r(o, "class", "svelte-12ge6tb"),
        r(e, "id", "minus"),
        r(e, "class", "svelte-12ge6tb");
    },
    m(s, f) {
      H(s, e, f), m(e, t), m(e, o), m(o, l);
    },
    p(s, f) {
      f & 1 && i !== (i = s[0].amount + "") && un(l, i);
    },
    d(s) {
      s && E(e);
    },
  };
}
function I0(n) {
  let e,
    t,
    o,
    i = n[0].amount + "",
    l;
  return {
    c() {
      (e = A("p")),
        (t = A("span")),
        (t.textContent = "+\xA0"),
        (o = A("span")),
        (l = be(i)),
        r(t, "id", "plus"),
        r(t, "class", "svelte-12ge6tb"),
        r(o, "id", "money"),
        r(o, "class", "svelte-12ge6tb"),
        r(e, "id", "money"),
        r(e, "class", "svelte-12ge6tb");
    },
    m(s, f) {
      H(s, e, f), m(e, t), m(e, o), m(o, l);
    },
    p(s, f) {
      f & 1 && i !== (i = s[0].amount + "") && un(l, i);
    },
    d(s) {
      s && E(e);
    },
  };
}
function y0(n) {
  let e,
    t,
    o,
    i = n[0].showCash && Rl(n),
    l = n[0].showBank && Pl(n),
    s = n[0].showUpdate && Bl(n);
  return {
    c() {
      (e = A("div")),
        i && i.c(),
        (t = y()),
        l && l.c(),
        (o = y()),
        s && s.c(),
        r(e, "id", "money-container"),
        r(e, "class", "svelte-12ge6tb");
    },
    m(f, u) {
      H(f, e, u),
        i && i.m(e, null),
        m(e, t),
        l && l.m(e, null),
        m(e, o),
        s && s.m(e, null);
    },
    p(f, [u]) {
      f[0].showCash
        ? i
          ? (i.p(f, u), u & 1 && C(i, 1))
          : ((i = Rl(f)), i.c(), C(i, 1), i.m(e, t))
        : i &&
          (he(),
          T(i, 1, 1, () => {
            i = null;
          }),
          ge()),
        f[0].showBank
          ? l
            ? (l.p(f, u), u & 1 && C(l, 1))
            : ((l = Pl(f)), l.c(), C(l, 1), l.m(e, o))
          : l &&
            (he(),
            T(l, 1, 1, () => {
              l = null;
            }),
            ge()),
        f[0].showUpdate
          ? s
            ? (s.p(f, u), u & 1 && C(s, 1))
            : ((s = Bl(f)), s.c(), C(s, 1), s.m(e, null))
          : s &&
            (he(),
            T(s, 1, 1, () => {
              s = null;
            }),
            ge());
    },
    i(f) {
      C(i), C(l), C(s);
    },
    o(f) {
      T(i), T(l), T(s);
    },
    d(f) {
      f && E(e), i && i.d(), l && l.d(), s && s.d();
    },
  };
}
function M0(n, e, t) {
  let o;
  return de(n, Lo, (i) => t(0, (o = i))), [o];
}
class Y0 extends ue {
  constructor(e) {
    super();
    fe(this, e, M0, y0, ce, {});
  }
}
function Ul(n) {
  let e, t, o, i;
  return {
    c() {
      (e = O("circle")),
        r(e, "opacity", n[9]),
        r(e, "fill", "transparent"),
        r(e, "stroke", n[8]),
        r(e, "stroke-dashoffset", (t = n[20] - (n[15] / 100) * n[20])),
        r(e, "stroke-dasharray", (o = n[20] + " " + n[20])),
        r(e, "stroke-width", n[11]),
        r(e, "r", n[19]),
        r(e, "cx", n[18]),
        r(e, "cy", n[18]),
        r(e, "transform", (i = "rotate(-90, " + n[18] + ", " + n[18] + ")"));
    },
    m(l, s) {
      H(l, e, s);
    },
    p(l, s) {
      s[0] & 512 && r(e, "opacity", l[9]),
        s[0] & 256 && r(e, "stroke", l[8]),
        s[0] & 1081344 &&
          t !== (t = l[20] - (l[15] / 100) * l[20]) &&
          r(e, "stroke-dashoffset", t),
        s[0] & 1048576 &&
          o !== (o = l[20] + " " + l[20]) &&
          r(e, "stroke-dasharray", o),
        s[0] & 2048 && r(e, "stroke-width", l[11]),
        s[0] & 524288 && r(e, "r", l[19]),
        s[0] & 262144 && r(e, "cx", l[18]),
        s[0] & 262144 && r(e, "cy", l[18]),
        s[0] & 262144 &&
          i !== (i = "rotate(-90, " + l[18] + ", " + l[18] + ")") &&
          r(e, "transform", i);
    },
    d(l) {
      l && E(e);
    },
  };
}
function zl(n) {
  let e, t, o, i, l, s;
  return {
    c() {
      (e = O("circle")),
        r(e, "fill", n[6]),
        r(e, "fill-opacity", n[7]),
        r(e, "stroke", "transparent"),
        r(e, "stroke-dashoffset", (t = 0)),
        r(e, "stroke-dasharray", (o = n[20] + " " + n[20])),
        r(e, "stroke-width", (i = n[11] - 0.6)),
        r(e, "r", (l = n[19] - n[11] / 2 + 0.1)),
        r(e, "cx", n[18]),
        r(e, "cy", n[18]),
        r(e, "transform", (s = "rotate(-90, " + n[18] + ", " + n[18] + ")"));
    },
    m(f, u) {
      H(f, e, u);
    },
    p(f, u) {
      u[0] & 64 && r(e, "fill", f[6]),
        u[0] & 128 && r(e, "fill-opacity", f[7]),
        u[0] & 1048576 &&
          o !== (o = f[20] + " " + f[20]) &&
          r(e, "stroke-dasharray", o),
        u[0] & 2048 && i !== (i = f[11] - 0.6) && r(e, "stroke-width", i),
        u[0] & 526336 && l !== (l = f[19] - f[11] / 2 + 0.1) && r(e, "r", l),
        u[0] & 262144 && r(e, "cx", f[18]),
        u[0] & 262144 && r(e, "cy", f[18]),
        u[0] & 262144 &&
          s !== (s = "rotate(-90, " + f[18] + ", " + f[18] + ")") &&
          r(e, "transform", s);
    },
    d(f) {
      f && E(e);
    },
  };
}
function Ll(n) {
  let e,
    t = Math.floor(n[22]) + "",
    o,
    i,
    l;
  return {
    c() {
      (e = O("text")),
        (o = be(t)),
        (i = O("text")),
        (l = be(n[17])),
        r(e, "class", "vehicle-number svelte-1goqjlo"),
        r(e, "fill", "white"),
        r(e, "x", "50%"),
        r(e, "y", "45%"),
        r(e, "dominant-baseline", "middle"),
        r(e, "text-anchor", "middle"),
        r(i, "class", "vehicle-text svelte-1goqjlo"),
        r(i, "fill", "white"),
        r(i, "x", "50%"),
        r(i, "y", "70%"),
        r(i, "dominant-baseline", "middle"),
        r(i, "text-anchor", "middle");
    },
    m(s, f) {
      H(s, e, f), m(e, o), H(s, i, f), m(i, l);
    },
    p(s, f) {
      f[0] & 4194304 && t !== (t = Math.floor(s[22]) + "") && un(o, t),
        f[0] & 131072 && un(l, s[17]);
    },
    d(s) {
      s && E(e), s && E(i);
    },
  };
}
function ql(n) {
  let e, t;
  return (
    (e = new Fe({
      props: {
        icon: n[1],
        scale: n[3],
        translateX: n[4],
        translateY: n[5],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        P(e.$$.fragment);
      },
      m(o, i) {
        B(e, o, i), (t = !0);
      },
      p(o, i) {
        const l = {};
        i[0] & 2 && (l.icon = o[1]),
          i[0] & 8 && (l.scale = o[3]),
          i[0] & 16 && (l.translateX = o[4]),
          i[0] & 32 && (l.translateY = o[5]),
          i[0] & 4 && (l.style = "color:" + o[2]),
          e.$set(l);
      },
      i(o) {
        t || (C(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        T(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        U(e, o);
      },
    }
  );
}
function X0(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    h,
    _ = n[0] && Ul(n),
    k = n[16] && zl(n),
    b = n[17] && Ll(n),
    w = n[1] && ql(n);
  return {
    c() {
      (e = O("svg")),
        (t = O("g")),
        _ && _.c(),
        (o = dn()),
        k && k.c(),
        (i = O("circle")),
        b && b.c(),
        (u = O("g")),
        w && w.c(),
        r(i, "stroke", n[10]),
        r(i, "fill", "transparent"),
        r(i, "stroke-dashoffset", n[21]),
        r(i, "stroke-dasharray", (l = n[20] + " " + n[20])),
        r(i, "stroke-width", n[11]),
        r(i, "r", n[19]),
        r(i, "cx", n[18]),
        r(i, "cy", n[18]),
        r(i, "transform", (s = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
        r(
          t,
          "transform",
          (f =
            `
    ` +
            (n[12] > 0
              ? "rotate(" + n[12] + " " + n[18] + " " + n[18] + ")"
              : "") +
            `
    ` +
            ("translate(" + n[13] + " " + n[14] + ")"))
        ),
        r(e, "width", (a = n[18] * 2)),
        r(e, "height", (c = n[18] * 2)),
        r(e, "viewBox", (d = "0 0 " + n[18] * 2 + " " + n[18] * 2)),
        r(e, "overflow", "visible");
    },
    m(g, S) {
      H(g, e, S),
        m(e, t),
        _ && _.m(t, null),
        m(t, o),
        k && k.m(t, null),
        m(t, i),
        b && b.m(e, null),
        m(e, u),
        w && w.m(u, null),
        (h = !0);
    },
    p(g, S) {
      g[0]
        ? _
          ? _.p(g, S)
          : ((_ = Ul(g)), _.c(), _.m(t, o))
        : _ && (_.d(1), (_ = null)),
        g[16]
          ? k
            ? k.p(g, S)
            : ((k = zl(g)), k.c(), k.m(t, i))
          : k && (k.d(1), (k = null)),
        (!h || S[0] & 1024) && r(i, "stroke", g[10]),
        (!h || S[0] & 2097152) && r(i, "stroke-dashoffset", g[21]),
        (!h || (S[0] & 1048576 && l !== (l = g[20] + " " + g[20]))) &&
          r(i, "stroke-dasharray", l),
        (!h || S[0] & 2048) && r(i, "stroke-width", g[11]),
        (!h || S[0] & 524288) && r(i, "r", g[19]),
        (!h || S[0] & 262144) && r(i, "cx", g[18]),
        (!h || S[0] & 262144) && r(i, "cy", g[18]),
        (!h ||
          (S[0] & 262144 &&
            s !== (s = "rotate(-90, " + g[18] + ", " + g[18] + ")"))) &&
          r(i, "transform", s),
        (!h ||
          (S[0] & 290816 &&
            f !==
              (f =
                `
    ` +
                (g[12] > 0
                  ? "rotate(" + g[12] + " " + g[18] + " " + g[18] + ")"
                  : "") +
                `
    ` +
                ("translate(" + g[13] + " " + g[14] + ")")))) &&
          r(t, "transform", f),
        g[17]
          ? b
            ? b.p(g, S)
            : ((b = Ll(g)), b.c(), b.m(e, u))
          : b && (b.d(1), (b = null)),
        g[1]
          ? w
            ? (w.p(g, S), S[0] & 2 && C(w, 1))
            : ((w = ql(g)), w.c(), C(w, 1), w.m(u, null))
          : w &&
            (he(),
            T(w, 1, 1, () => {
              w = null;
            }),
            ge()),
        (!h || (S[0] & 262144 && a !== (a = g[18] * 2))) && r(e, "width", a),
        (!h || (S[0] & 262144 && c !== (c = g[18] * 2))) && r(e, "height", c),
        (!h ||
          (S[0] & 262144 &&
            d !== (d = "0 0 " + g[18] * 2 + " " + g[18] * 2))) &&
          r(e, "viewBox", d);
    },
    i(g) {
      h || (C(w), (h = !0));
    },
    o(g) {
      T(w), (h = !1);
    },
    d(g) {
      g && E(e), _ && _.d(), k && k.d(), b && b.d(), w && w.d();
    },
  };
}
function O0(n, e, t) {
  let o,
    i,
    { displayOutline: l = !0 } = e,
    { height: s = 50 } = e,
    { icon: f = null } = e,
    { iconColor: u = "red" } = e,
    { iconRotateDegree: a = 0 } = e,
    { iconScaling: c = 0.45 } = e,
    { iconTranslateX: d = 0 } = e,
    { iconTranslateY: h = 0 } = e,
    { innerColor: _ = "#212121" } = e,
    { innerColorOpacity: k = 1 } = e,
    { name: b = "" } = e,
    { outlineColor: w = "red" } = e,
    { outlineColorOpacity: g = 0.4 } = e,
    { progressColor: S = "red" } = e,
    { progressValue: D = 100 } = e,
    { ringSize: Y = 4 } = e,
    { rotateDegree: $ = 0 } = e,
    { translateX: W = 0 } = e,
    { translateY: q = 0 } = e,
    { width: j = 50 } = e,
    { maxLengthDisplay: x = 100 } = e,
    { maxProgressValue: V = 100 } = e,
    { showInnerBG: Q = !1 } = e,
    { displayNumber: M = 0 } = e,
    { text: X = "" } = e,
    p = 25,
    z = (D / V) * 100;
  const J = nn(z, { duration: 600, easing: Ao });
  de(n, J, (I) => t(33, (o = I)));
  const v = nn(M, { duration: 600, easing: Ao });
  de(n, v, (I) => t(22, (i = I)));
  let ae = p - Y / 2,
    ee = ae * 2 * Math.PI,
    K = ee - (o / 100) * ee;
  return (
    (n.$$set = (I) => {
      "displayOutline" in I && t(0, (l = I.displayOutline)),
        "height" in I && t(26, (s = I.height)),
        "icon" in I && t(1, (f = I.icon)),
        "iconColor" in I && t(2, (u = I.iconColor)),
        "iconRotateDegree" in I && t(27, (a = I.iconRotateDegree)),
        "iconScaling" in I && t(3, (c = I.iconScaling)),
        "iconTranslateX" in I && t(4, (d = I.iconTranslateX)),
        "iconTranslateY" in I && t(5, (h = I.iconTranslateY)),
        "innerColor" in I && t(6, (_ = I.innerColor)),
        "innerColorOpacity" in I && t(7, (k = I.innerColorOpacity)),
        "name" in I && t(28, (b = I.name)),
        "outlineColor" in I && t(8, (w = I.outlineColor)),
        "outlineColorOpacity" in I && t(9, (g = I.outlineColorOpacity)),
        "progressColor" in I && t(10, (S = I.progressColor)),
        "progressValue" in I && t(25, (D = I.progressValue)),
        "ringSize" in I && t(11, (Y = I.ringSize)),
        "rotateDegree" in I && t(12, ($ = I.rotateDegree)),
        "translateX" in I && t(13, (W = I.translateX)),
        "translateY" in I && t(14, (q = I.translateY)),
        "width" in I && t(29, (j = I.width)),
        "maxLengthDisplay" in I && t(15, (x = I.maxLengthDisplay)),
        "maxProgressValue" in I && t(30, (V = I.maxProgressValue)),
        "showInnerBG" in I && t(16, (Q = I.showInnerBG)),
        "displayNumber" in I && t(31, (M = I.displayNumber)),
        "text" in I && t(17, (X = I.text));
    }),
    (n.$$.update = () => {
      (n.$$.dirty[0] & 1107296256) | (n.$$.dirty[1] & 2) &&
        (t(25, (D = Math.min(D, V))), t(32, (z = (D / V) * 100)), J.set(z)),
        n.$$.dirty[1] & 1 && v.set(M),
        n.$$.dirty[0] & 603979776 && t(18, (p = s > j ? s / 2 : j / 2)),
        n.$$.dirty[0] & 788480 &&
          (t(19, (ae = p - Y / 2)), t(20, (ee = ae * 2 * Math.PI))),
        (n.$$.dirty[0] & 1081344) | (n.$$.dirty[1] & 4) &&
          t(21, (K = ee - (o / (100 / x) / 100) * ee));
    }),
    [
      l,
      f,
      u,
      c,
      d,
      h,
      _,
      k,
      w,
      g,
      S,
      Y,
      $,
      W,
      q,
      x,
      Q,
      X,
      p,
      ae,
      ee,
      K,
      i,
      J,
      v,
      D,
      s,
      a,
      b,
      j,
      V,
      M,
      z,
      o,
    ]
  );
}
class oi extends ue {
  constructor(e) {
    super();
    fe(
      this,
      e,
      O0,
      X0,
      ce,
      {
        displayOutline: 0,
        height: 26,
        icon: 1,
        iconColor: 2,
        iconRotateDegree: 27,
        iconScaling: 3,
        iconTranslateX: 4,
        iconTranslateY: 5,
        innerColor: 6,
        innerColorOpacity: 7,
        name: 28,
        outlineColor: 8,
        outlineColorOpacity: 9,
        progressColor: 10,
        progressValue: 25,
        ringSize: 11,
        rotateDegree: 12,
        translateX: 13,
        translateY: 14,
        width: 29,
        maxLengthDisplay: 15,
        maxProgressValue: 30,
        showInnerBG: 16,
        displayNumber: 31,
        text: 17,
      },
      null,
      [-1, -1]
    );
  }
}
function Nl(n) {
  let e, t, o, i, l, s, f, u, a, c, d;
  (t = new oi({
    props: {
      maxLengthDisplay: 66,
      rotateDegree: 212,
      ringSize: 5.5,
      progressColor: "white",
      outlineColor: "black",
      outlineColorOpacity: 0.6,
      height: 0,
      width: 0,
      progressValue: n[0].speed,
      text: "MPH",
      displayNumber: n[0].speed,
      maxProgressValue: 180,
    },
  })),
    (l = new oi({
      props: {
        maxLengthDisplay: 69,
        rotateDegree: 235,
        ringSize: 3.5,
        progressColor: n[0].fuelColor,
        outlineColor: "black",
        outlineColorOpacity: 0.6,
        height: 0,
        width: 0,
        progressValue: n[0].fuel,
        icon: Jr,
        iconColor: "white",
        iconScaling: 0.38,
      },
    }));
  let h = n[0].showAltitude && jl(n);
  const _ = [E0, F0],
    k = [];
  // function b(w, g) {
  //   return w[0].showSeatBelt && w[0].showAltitude
  //     ? 0
  //     : w[0].showSeatBelt
  //     ? 1
  //     : -1;
  // }
  return (
    ~(u = b(n)) && (a = k[u] = _[u](n)),
    {
      c() {
        (e = A("div")),
          P(t.$$.fragment),
          (o = y()),
          (i = A("div")),
          P(l.$$.fragment),
          (s = y()),
          h && h.c(),
          (f = y()),
          a && a.c(),
          (c = dn()),
          r(e, "class", "responsive svelte-am3d8l"),
          r(e, "id", "speedometer"),
          r(i, "class", "responsive svelte-am3d8l"),
          r(i, "id", "fuelgauge");
      },
      m(w, g) {
        H(w, e, g),
          B(t, e, null),
          H(w, o, g),
          H(w, i, g),
          B(l, i, null),
          H(w, s, g),
          h && h.m(w, g),
          H(w, f, g),
          ~u && k[u].m(w, g),
          H(w, c, g),
          (d = !0);
      },
      p(w, g) {
        const S = {};
        g & 1 && (S.progressValue = w[0].speed),
          g & 1 && (S.displayNumber = w[0].speed),
          t.$set(S);
        const D = {};
        g & 1 && (D.progressColor = w[0].fuelColor),
          g & 1 && (D.progressValue = w[0].fuel),
          l.$set(D),
          w[0].showAltitude
            ? h
              ? (h.p(w, g), g & 1 && C(h, 1))
              : ((h = jl(w)), h.c(), C(h, 1), h.m(f.parentNode, f))
            : h &&
              (he(),
              T(h, 1, 1, () => {
                h = null;
              }),
              ge());
        let Y = u;
        (u = b(w)),
          u === Y
            ? ~u && k[u].p(w, g)
            : (a &&
                (he(),
                T(k[Y], 1, 1, () => {
                  k[Y] = null;
                }),
                ge()),
              ~u
                ? ((a = k[u]),
                  a ? a.p(w, g) : ((a = k[u] = _[u](w)), a.c()),
                  C(a, 1),
                  a.m(c.parentNode, c))
                : (a = null));
      },
      i(w) {
        d || (C(t.$$.fragment, w), C(l.$$.fragment, w), C(h), C(a), (d = !0));
      },
      o(w) {
        T(t.$$.fragment, w), T(l.$$.fragment, w), T(h), T(a), (d = !1);
      },
      d(w) {
        w && E(e),
          U(t),
          w && E(o),
          w && E(i),
          U(l),
          w && E(s),
          h && h.d(w),
          w && E(f),
          ~u && k[u].d(w),
          w && E(c);
      },
    }
  );
}
function jl(n) {
  let e, t, o;
  return (
    (t = new oi({
      props: {
        maxLengthDisplay: 75,
        rotateDegree: 225,
        ringSize: 5.5,
        progressColor: "white",
        outlineColor: "black",
        outlineColorOpacity: 0.6,
        height: 60,
        width: 60,
        progressValue: n[0].altitude,
        text: "ALT",
        displayNumber: n[0].altitude,
        maxProgressValue: 750,
      },
    })),
    {
      c() {
        (e = A("div")),
          P(t.$$.fragment),
          r(e, "class", "responsive svelte-am3d8l"),
          r(e, "id", "altitudegauge");
      },
      m(i, l) {
        H(i, e, l), B(t, e, null), (o = !0);
      },
      p(i, l) {
        const s = {};
        l & 1 && (s.progressValue = i[0].altitude),
          l & 1 && (s.displayNumber = i[0].altitude),
          t.$set(s);
      },
      i(i) {
        o || (C(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        T(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && E(e), U(t);
      },
    }
  );
}
function F0(n) {
  let e, t, o, i, l;
  return (
    (o = new Fe({
      props: { icon: ii, scale: 1.1, style: "color:" + n[0].seatbeltColor },
    })),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          P(o.$$.fragment),
          r(t, "class", "responsive svelte-am3d8l"),
          r(t, "id", "seatbelt");
      },
      m(s, f) {
        H(s, e, f), m(e, t), B(o, t, null), (l = !0);
      },
      p(s, f) {
        const u = {};
        f & 1 && (u.style = "color:" + s[0].seatbeltColor), o.$set(u);
      },
      i(s) {
        l ||
          (C(o.$$.fragment, s),
          s &&
            Mt(() => {
              i || (i = Yn(e, qn, { duration: 500 }, !0)), i.run(1);
            }),
          (l = !0));
      },
      o(s) {
        T(o.$$.fragment, s),
          s && (i || (i = Yn(e, qn, { duration: 500 }, !1)), i.run(0)),
          (l = !1);
      },
      d(s) {
        s && E(e), U(o), s && i && i.end();
      },
    }
  );
}
function E0(n) {
  let e, t, o, i, l;
  return (
    (o = new Fe({
      props: { icon: ii, scale: 1.1, style: "color:" + n[0].seatbeltColor },
    })),
    {
      c() {
        (e = A("div")),
          (t = A("div")),
          P(o.$$.fragment),
          r(t, "class", "responsive svelte-am3d8l"),
          r(t, "id", "seatbeltAltitude");
      },
      m(s, f) {
        H(s, e, f), m(e, t), B(o, t, null), (l = !0);
      },
      p(s, f) {
        const u = {};
        f & 1 && (u.style = "color:" + s[0].seatbeltColor), o.$set(u);
      },
      i(s) {
        l ||
          (C(o.$$.fragment, s),
          s &&
            Mt(() => {
              i || (i = Yn(e, qn, { duration: 500 }, !0)), i.run(1);
            }),
          (l = !0));
      },
      o(s) {
        T(o.$$.fragment, s),
          s && (i || (i = Yn(e, qn, { duration: 500 }, !1)), i.run(0)),
          (l = !1);
      },
      d(s) {
        s && E(e), U(o), s && i && i.end();
      },
    }
  );
}
function V0(n) {
  let e,
    t,
    o = (n[0].show || An) && Nl(n);
  return {
    c() {
      o && o.c(), (e = dn());
    },
    m(i, l) {
      o && o.m(i, l), H(i, e, l), (t = !0);
    },
    p(i, [l]) {
      i[0].show || An
        ? o
          ? (o.p(i, l), l & 1 && C(o, 1))
          : ((o = Nl(i)), o.c(), C(o, 1), o.m(e.parentNode, e))
        : o &&
          (he(),
          T(o, 1, 1, () => {
            o = null;
          }),
          ge());
    },
    i(i) {
      t || (C(o), (t = !0));
    },
    o(i) {
      T(o), (t = !1);
    },
    d(i) {
      o && o.d(i), i && E(e);
    },
  };
}
function H0(n, e, t) {
  let o;
  return de(n, Go, (i) => t(0, (o = i))), [o];
}
class R0 extends ue {
  constructor(e) {
    super();
    fe(this, e, H0, V0, ce, {});
  }
}
const { document: zo } = Zr;
function Gl(n) {
  let e, t, o, i, l, s, f, u, a, c;
  return (
    (e = new A0({})),
    (o = new Y0({})),
    (l = new xa({})),
    (f = new R0({})),
    (a = new C0({})),
    {
      c() {
        P(e.$$.fragment),
          (t = y()),
          P(o.$$.fragment),
          (i = y()),
          P(l.$$.fragment),
          (s = y()),
          P(f.$$.fragment),
          (u = y()),
          P(a.$$.fragment);
      },
      m(d, h) {
        B(e, d, h),
          H(d, t, h),
          B(o, d, h),
          H(d, i, h),
          B(l, d, h),
          H(d, s, h),
          B(f, d, h),
          H(d, u, h),
          B(a, d, h),
          (c = !0);
      },
      i(d) {
        c ||
          (C(e.$$.fragment, d),
          C(o.$$.fragment, d),
          C(l.$$.fragment, d),
          C(f.$$.fragment, d),
          C(a.$$.fragment, d),
          (c = !0));
      },
      o(d) {
        T(e.$$.fragment, d),
          T(o.$$.fragment, d),
          T(l.$$.fragment, d),
          T(f.$$.fragment, d),
          T(a.$$.fragment, d),
          (c = !1);
      },
      d(d) {
        U(e, d),
          d && E(t),
          U(o, d),
          d && E(i),
          U(l, d),
          d && E(s),
          U(f, d),
          d && E(u),
          U(a, d);
      },
    }
  );
}
function P0(n) {
  let e,
    t,
    o,
    i,
    l,
    s,
    f,
    u,
    a,
    c = !n[0].isCineamticModeChecked && Gl();
  return (
    (u = new k0({})),
    {
      c() {
        (e = A("link")),
          (t = A("link")),
          (o = A("link")),
          (i = A("link")),
          (l = y()),
          (s = A("main")),
          c && c.c(),
          (f = y()),
          P(u.$$.fragment),
          r(
            e,
            "href",
            "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          ),
          r(e, "rel", "stylesheet"),
          r(t, "href", "https://fonts.cdnfonts.com/css/pricedown"),
          r(t, "rel", "stylesheet"),
          r(
            o,
            "href",
            "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          ),
          r(o, "rel", "stylesheet"),
          r(
            i,
            "href",
            "https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap"
          ),
          r(i, "rel", "stylesheet"),
          r(s, "class", "bg-transparent min-h-screen");
      },
      m(d, h) {
        m(zo.head, e),
          m(zo.head, t),
          m(zo.head, o),
          m(zo.head, i),
          H(d, l, h),
          H(d, s, h),
          c && c.m(s, null),
          m(s, f),
          B(u, s, null),
          (a = !0);
      },
      p(d, [h]) {
        d[0].isCineamticModeChecked
          ? c &&
            (he(),
            T(c, 1, 1, () => {
              c = null;
            }),
            ge())
          : c
          ? h & 1 && C(c, 1)
          : ((c = Gl()), c.c(), C(c, 1), c.m(s, f));
      },
      i(d) {
        a || (C(c), C(u.$$.fragment, d), (a = !0));
      },
      o(d) {
        T(c), T(u.$$.fragment, d), (a = !1);
      },
      d(d) {
        E(e), E(t), E(o), E(i), d && E(l), d && E(s), c && c.d(), U(u);
      },
    }
  );
}
function B0(n, e, t) {
  let o, i;
  de(n, ne, (f) => t(2, (o = f))), de(n, Ye, (f) => t(0, (i = f))), cs();
  let l;
  return (
    (() => {
      let f = !0;
      l = setInterval(() => {
        f
          ? (St(ne, (o.designProgress += 15), o),
            o.designProgress > 100 &&
              (St(ne, (o.designProgress = 100), o), (f = !f)))
          : (St(ne, (o.designProgress -= 15), o),
            o.designProgress < 0 &&
              (St(ne, (o.designProgress = 0), o), (f = !f)));
      }, 1400);
    })(),
    Jl(() => clearInterval(l)),
    (document.onkeyup = Ye.handleKeyUp),
    [i]
  );
}
class U0 extends ue {
  constructor(e) {
    super();
    fe(this, e, B0, P0, ce, {});
  }
}
new U0({ target: document.getElementById("app") });
