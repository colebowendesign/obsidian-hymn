// Obsidian Hymn — main app components
const { useState, useEffect, useRef, useMemo } = React;
const S = window.Sigil;

// ============== DATA ==============
const PRODUCTS = [
  { id: 'p1', name: 'CROWN OF STATIC', cat: 'THE ORACLE', price: 1840, sigil: 'Cloak', desc: 'Hand-cut wool ritual cloak. Raw seams, oxidized hardware, silk-lined hood. Each piece numbered in arterial ink.' },
  { id: 'p2', name: 'MARTYR’S VEIL', cat: 'THE MARTYR', price: 920, sigil: 'Mask', desc: 'Lambskin half-mask with hand-forged thorn brow. Adjustable leather harness. Sealed with the maker’s sigil.' },
  { id: 'p3', name: 'SHADOW LITANY 07', cat: 'THE VESSEL', price: 1240, sigil: 'Boot', desc: 'Calfskin combat boot. 7 eyelets, oxidized buckle, vulcanized rubber sole. Hand-burnished, no two alike.' },
  { id: 'p4', name: 'ORACLE ROBE', cat: 'THE ORACLE', price: 2280, sigil: 'Robe', desc: 'Floor-sweeping ritual robe in obsidian wool-silk. Inverted seam construction. Sigil embroidered at heart.' },
  { id: 'p5', name: 'RELIC CHAIN', cat: 'THE RELIC', price: 480, sigil: 'Chain', desc: 'Forged iron chain pendant with cast brass sigil. Patinated finish. Limited to 33 pieces per ritual.' },
  { id: 'p6', name: 'CLAW GAUNTLET', cat: 'THE RELIC', price: 760, sigil: 'Glove', desc: 'Lambskin gauntlet with bone-cast claw tips. Fully articulated. Sized to the wearer’s dominant hand.' },
];

const ARCHETYPES = [
  { name: 'THE ORACLE', sub: 'I — ROBES & RITUAL DRESS', emblem: 'OracleEmblem', desc: 'Garments for the one who sees. Floor-sweeping silhouettes, inverted construction, silk lining the inside of darkness.' },
  { name: 'THE MARTYR', sub: 'II — TOPS & OUTERWEAR', emblem: 'MartyrEmblem', desc: 'Cut, scarred, sutured. Each piece carries the wound it was forged from. Worn close to the heart.' },
  { name: 'THE RELIC', sub: 'III — OBJECT & ORNAMENT', emblem: 'RelicEmblem', desc: 'Chains, claws, sigils, hardware. Small artifacts that anchor the wearer to the cult of the unmade.' },
  { name: 'THE VESSEL', sub: 'IV — FOOTWEAR', emblem: 'VesselEmblem', desc: 'The body’s contact with the earth. Heavy soles, hand-burnished leather, built to outlast the wearer.' },
];

const LOOKBOOK = [
  { ch: 'I', title: 'THE CROWNING', tone: ['#1a0606', '#3a0a0a', '#0a0a0a'] },
  { ch: 'II', title: 'STATIC PSALM', tone: ['#0a0a0a', '#1f1f1f', '#0a0a0a'] },
  { ch: 'III', title: 'BLOODLET / BLACK SUN', tone: ['#2a0808', '#0a0a0a', '#1a0a0a'] },
  { ch: 'IV', title: 'THE LITANY', tone: ['#0a0a0a', '#141414', '#1a0606'] },
  { ch: 'V', title: 'WAKE / WAKE / WAKE', tone: ['#1a1a1a', '#0a0a0a', '#2a0808'] },
  { ch: 'VI', title: 'THE UNMAKING', tone: ['#0a0a0a', '#1a0606', '#0a0a0a'] },
];

// ============== HELPERS ==============
function useScrambleOnHover(text, active) {
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!active) { setOut(text); return; }
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let frame = 0;
    const dur = 18;
    const id = setInterval(() => {
      frame++;
      const t = frame / dur;
      const next = text.split('').map((c, i) => {
        if (c === ' ') return ' ';
        if (i / text.length < t) return c;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      setOut(next);
      if (frame >= dur) { setOut(text); clearInterval(id); }
    }, 28);
    return () => clearInterval(id);
  }, [active, text]);
  return out;
}

// ============== NAV ==============
function Nav({ cartCount, onCartClick, onNav }) {
  const items = ['SHOP', 'LOOKBOOK', 'MANIFESTO', 'JOURNAL', 'CONTACT'];
  return (
    <nav className="oh-nav">
      <button className="oh-logo" onClick={() => onNav('top')}>
        <S.Mark size={32} stroke={1.2} />
        <span className="oh-wordmark">OBSIDIAN<span className="oh-amp">†</span>HYMN</span>
      </button>
      <ul className="oh-navlinks">
        {items.map(x => (
          <li key={x}><a href={`#${x.toLowerCase()}`} onClick={(e) => { e.preventDefault(); onNav(x.toLowerCase()); }}>{x}</a></li>
        ))}
      </ul>
      <button className="oh-cart" onClick={onCartClick} aria-label="Cart">
        <S.BarbedCross size={20} stroke={1.2} />
        <span className="oh-cart-label">CART</span>
        {cartCount > 0 && <span className="oh-cart-badge">{cartCount}</span>}
      </button>
    </nav>
  );
}

// ============== HERO ==============
function Hero({ headline, sub }) {
  const words = headline.split(' ');
  return (
    <section id="top" className="oh-hero">
      {/* Background plate — image WITHOUT the figure (figure column dimmed) */}
      <div className="oh-hero-image oh-hero-image--bg">
        <img src="assets/hero-crown.png" alt="" />
        <div className="oh-hero-vignette" />
      </div>
      <div className="oh-hero-watermark">
        <S.RitualCircle size={1100} stroke={0.4} color="#5a1010" />
      </div>
      {/* Figure cutout — same image, masked to only show the central subject, sits ABOVE the headline */}
      <div className="oh-hero-image oh-hero-image--figure" aria-hidden="true">
        <img src="assets/hero-crown.png" alt="" />
      </div>
      <div className="oh-hero-grid">
        <div className="oh-hero-meta-l">
          <div className="oh-meta-stack">
            <span className="oh-meta-tick">° N 51.5074</span>
            <span className="oh-meta-tick">° W 00.1278</span>
            <span className="oh-meta-tick">RITE / 04 — V</span>
          </div>
        </div>
        <div className="oh-hero-meta-r">
          <div className="oh-meta-stack oh-right">
            <span className="oh-meta-tick">SS / 26</span>
            <span className="oh-meta-tick">CHAPTER IV</span>
            <span className="oh-meta-tick">N° 0007 / 0666</span>
          </div>
        </div>
        <div className="oh-hero-headline">
          <div className="oh-eyebrow">
            <span className="oh-line" />
            <span>OBSIDIAN HYMN — SS / 26 — THE CROWNING</span>
            <span className="oh-line" />
          </div>
          {words.length === 2 ? (
            <h1 className="oh-display oh-split">
              <span className="oh-word oh-word-tl" data-text={words[0]}>{words[0]}</span>
              <span className="oh-word oh-word-br" data-text={words[1]}>{words[1]}</span>
            </h1>
          ) : (
            <h1 className="oh-display">
              {words.map((w, i) => <span key={i} className="oh-word" data-text={w}>{w}{i < words.length - 1 ? ' ' : ''}</span>)}
            </h1>
          )}
          <p className="oh-hero-sub">{sub}</p>
          <div className="oh-cta-row">
            <a className="oh-btn oh-btn-primary" href="#drop" onClick={(e) => { e.preventDefault(); document.getElementById('drop')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>ENTER THE COLLECTION</span>
              <S.BarbedCross size={14} stroke={1.4} color="currentColor" />
            </a>
            <a className="oh-btn oh-btn-ghost" href="#manifesto" onClick={(e) => { e.preventDefault(); document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>READ THE MANIFESTO</span>
            </a>
          </div>
        </div>
        <div className="oh-hero-foot">
          <span className="oh-meta-tick">SCROLL ↓ / DESCEND</span>
          <span className="oh-meta-tick oh-right-text">06.05.26 / 03:33</span>
        </div>
      </div>
    </section>
  );
}

// ============== MANIFESTO ==============
function Manifesto() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setRevealed(true); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const stanzas = [
    'In the static between psalms, we found a god / and dressed it in leather, in bone, in code.',
    'The crown is a wound. The crown is a circuit. The crown is what remains when the head is forgotten.',
    'We do not make clothing. We forge reliquaries for the body — vessels for the cult of the unmade.',
    'Each stitch is a sentence. Each garment, a coded incantation. Each wearer, a witness.',
    'Memento mori. Memento code. All things return to dust, to data, to the long dark.',
  ];
  return (
    <section id="manifesto" className="oh-manifesto" ref={ref}>
      <div className="oh-section-head">
        <span className="oh-section-roman">II</span>
        <span className="oh-section-mark"><S.Mark size={28} stroke={1} color="#5a1010" /></span>
        <span className="oh-section-title">THE MANIFESTO</span>
        <span className="oh-section-sub">A CODED INCANTATION</span>
      </div>
      <div className="oh-manifesto-watermark" aria-hidden="true">
        <S.RitualCircle size={900} stroke={0.4} color="#3a0a0a" />
      </div>
      <div className="oh-manifesto-corners" aria-hidden="true">
        <span className="oh-mc-tl"><S.BarbedCross size={36} stroke={1} color="#3a3a3a" /></span>
        <span className="oh-mc-tr"><S.BarbedCross size={36} stroke={1} color="#3a3a3a" /></span>
        <span className="oh-mc-bl"><S.BarbedCross size={36} stroke={1} color="#3a3a3a" /></span>
        <span className="oh-mc-br"><S.BarbedCross size={36} stroke={1} color="#3a3a3a" /></span>
      </div>
      <div className={`oh-manifesto-body ${revealed ? 'is-revealed' : ''}`}>
        {stanzas.map((s, i) => (
          <React.Fragment key={i}>
            <p className="oh-stanza" style={{ transitionDelay: `${i * 220}ms` }}>
              <span className="oh-stanza-glitch" data-text={s}>{s}</span>
            </p>
            {i < stanzas.length - 1 && (
              <div className="oh-stanza-divider" style={{ transitionDelay: `${i * 220 + 110}ms` }}>
                <S.ThornDivider width={300} color="#5a1010" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// ============== PRODUCT CARDS ==============
function ProductCard({ p, onOpen, onAdd }) {
  const [hover, setHover] = useState(false);
  const SigilGarment = S[p.sigil];
  const scrambled = useScrambleOnHover(p.name, hover);
  return (
    <article className="oh-card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => onOpen(p)}>
      <div className="oh-card-media">
        <div className="oh-card-bg" />
        <div className="oh-card-sigilbg">
          <S.RitualCircle size={420} stroke={0.4} color="#3a0a0a" />
        </div>
        <div className="oh-card-garment">
          <SigilGarment size={180} color="#e8e4dd" />
        </div>
        <div className="oh-card-overlay">
          <S.Mark size={140} stroke={1} color="#ff2d2d" />
        </div>
        <div className="oh-card-meta">
          <span>{p.cat}</span>
          <span>N° {p.id.replace('p', '00')}</span>
        </div>
      </div>
      <div className="oh-card-foot">
        <div className="oh-card-info">
          <h3 className="oh-card-name">{scrambled}</h3>
          <span className="oh-card-price">£ {p.price.toLocaleString()}</span>
        </div>
        <button className="oh-acquire" onClick={(e) => { e.stopPropagation(); onAdd(p); }}>
          <span>ACQUIRE</span>
          <S.BarbedCross size={12} stroke={1.4} color="currentColor" />
        </button>
      </div>
    </article>
  );
}

function Drop({ onOpen, onAdd }) {
  return (
    <section id="drop" className="oh-drop">
      <div className="oh-section-head">
        <span className="oh-section-roman">III</span>
        <span className="oh-section-mark"><S.Mark size={28} stroke={1} color="#5a1010" /></span>
        <span className="oh-section-title">CURRENT RITUAL</span>
        <span className="oh-section-sub">SS / 26 — THE CROWNING — LIMITED TO 666 PIECES</span>
      </div>
      <div className="oh-drop-grid">
        {PRODUCTS.map(p => <ProductCard key={p.id} p={p} onOpen={onOpen} onAdd={onAdd} />)}
      </div>
    </section>
  );
}

// ============== ARCHETYPES ==============
function Archetypes({ onOpen }) {
  return (
    <section id="archetypes" className="oh-archetypes">
      <div className="oh-section-head">
        <span className="oh-section-roman">IV</span>
        <span className="oh-section-mark"><S.BarbedCross size={28} stroke={1} color="#5a1010" /></span>
        <span className="oh-section-title">SHOP BY ARCHETYPE</span>
        <span className="oh-section-sub">FOUR ROLES IN THE RITUAL</span>
      </div>
      <div className="oh-arch-grid">
        {ARCHETYPES.map((a, i) => {
          const Emblem = S[a.emblem];
          return (
            <button key={a.name} className="oh-arch-card" onClick={() => onOpen(a.name)}>
              <span className="oh-arch-roman">{['I', 'II', 'III', 'IV'][i]}</span>
              <div className="oh-arch-emblem"><Emblem size={180} color="#e8e4dd" /></div>
              <div className="oh-arch-foot">
                <h3>{a.name}</h3>
                <span className="oh-arch-sub">{a.sub}</span>
                <p>{a.desc}</p>
                <span className="oh-arch-cta">ENTER →</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ============== LOOKBOOK ==============
function LookbookTile({ idx, item, onOpen, span }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={`oh-look-tile ${span}`}
      style={{ background: `linear-gradient(${135 + idx * 30}deg, ${item.tone[0]} 0%, ${item.tone[1]} 50%, ${item.tone[2]} 100%)` }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(idx)}
    >
      <div className="oh-look-sigil">
        {idx % 3 === 0 && <S.RitualCircle size={400} stroke={0.5} color="#5a1010" />}
        {idx % 3 === 1 && <S.CrownThorn size={300} stroke={1.2} color="#8B0000" />}
        {idx % 3 === 2 && <S.Mark size={260} stroke={1} color="#5a1010" />}
      </div>
      <div className="oh-look-noise" />
      <div className="oh-look-meta">
        <span className="oh-look-ch">CHAPTER {item.ch}</span>
        <span className="oh-look-num">0{idx + 1} / 0{LOOKBOOK.length}</span>
      </div>
      <div className={`oh-look-cap ${hover ? 'is-hover' : ''}`}>
        <h3>{item.title}</h3>
        <span>VIEW EDITORIAL →</span>
      </div>
    </button>
  );
}

function Lookbook({ onOpen }) {
  const spans = ['span-2x2', 'span-1x1', 'span-1x2', 'span-2x1', 'span-1x1', 'span-1x1'];
  return (
    <section id="lookbook" className="oh-lookbook">
      <div className="oh-section-head">
        <span className="oh-section-roman">V</span>
        <span className="oh-section-mark"><S.Eye size={28} color="#5a1010" /></span>
        <span className="oh-section-title">LOOKBOOK</span>
        <span className="oh-section-sub">EDITORIAL — SS / 26 — SIX CHAPTERS</span>
      </div>
      <div className="oh-look-grid">
        {LOOKBOOK.map((l, i) => <LookbookTile key={i} idx={i} item={l} onOpen={onOpen} span={spans[i]} />)}
      </div>
    </section>
  );
}

// ============== NEWSLETTER ==============
function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | done | err
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setState('err'); return; }
    setState('sending');
    setTimeout(() => setState('done'), 900);
  };
  return (
    <section id="contact" className="oh-newsletter">
      <div className="oh-news-bg">
        <S.RitualCircle size={900} stroke={0.4} color="#3a0a0a" className="oh-pulse" />
      </div>
      <div className="oh-news-inner">
        <span className="oh-section-roman">VI</span>
        <h2 className="oh-news-title">JOIN THE COVEN</h2>
        <p className="oh-news-sub">Drops are announced once. Pieces are released without warning. Initiates receive the sigil first.</p>
        {state !== 'done' ? (
          <form className="oh-news-form" onSubmit={submit}>
            <input
              type="email" placeholder="ENTER YOUR SIGIL / EMAIL"
              value={email} onChange={(e) => { setEmail(e.target.value); if (state === 'err') setState('idle'); }}
              className={state === 'err' ? 'is-err' : ''}
            />
            <button type="submit" className="oh-btn oh-btn-primary" disabled={state === 'sending'}>
              <span>{state === 'sending' ? 'BINDING…' : 'INITIATE'}</span>
              <S.BarbedCross size={14} stroke={1.4} />
            </button>
          </form>
        ) : (
          <div className="oh-news-done">
            <S.Mark size={48} color="#FF2D2D" />
            <span>THE BOND IS SEALED. WATCH YOUR INBOX FOR THE FIRST RITE.</span>
          </div>
        )}
        {state === 'err' && <span className="oh-news-err">† INVALID SIGIL — ENTER A VALID EMAIL</span>}
      </div>
    </section>
  );
}

// ============== FOOTER ==============
function Footer() {
  const cols = [
    { h: 'SHOP', items: ['NEW ARRIVALS', 'THE ORACLE', 'THE MARTYR', 'THE RELIC', 'THE VESSEL', 'ARCHIVE'] },
    { h: 'ABOUT', items: ['MANIFESTO', 'PROCESS', 'ATELIER', 'JOURNAL', 'PRESS'] },
    { h: 'SUPPORT', items: ['CONTACT', 'SHIPPING', 'CARE', 'RETURNS', 'SIZE GUIDE'] },
    { h: 'LEGAL', items: ['TERMS', 'PRIVACY', 'COOKIES', 'IMPRINT'] },
  ];
  return (
    <footer className="oh-footer">
      <div className="oh-footer-top">
        <div className="oh-footer-brand">
          <div className="oh-footer-mark"><S.Mark size={64} stroke={1} /></div>
          <span className="oh-footer-word">OBSIDIAN HYMN</span>
          <span className="oh-footer-tag">LONDON — EST. MMXXIV</span>
        </div>
        {cols.map(c => (
          <div className="oh-footer-col" key={c.h}>
            <h4>{c.h}</h4>
            <ul>{c.items.map(i => <li key={i}><a href="#" onClick={(e) => e.preventDefault()}>{i}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="oh-footer-divider"><S.ThornDivider width={1400} color="#3a3a3a" /></div>
      <div className="oh-footer-sigils" aria-hidden="true">
        <S.RitualCircle size={120} stroke={0.5} color="#3a0a0a" />
        <S.BarbedCross size={32} stroke={1} color="#3a3a3a" />
        <S.Mark size={48} stroke={0.8} color="#5a1010" />
        <S.BarbedCross size={32} stroke={1} color="#3a3a3a" />
        <S.RitualCircle size={120} stroke={0.5} color="#3a0a0a" />
      </div>
      <div className="oh-footer-bottom">
        <span>© MMXXVI OBSIDIAN HYMN — ALL RITES RESERVED</span>
        <span className="oh-footer-tagline">MEMENTO MORI — ALL THINGS RETURN TO DUST</span>
        <div className="oh-footer-socials">
          <a href="#" onClick={(e) => e.preventDefault()}><S.Mark size={20} stroke={1} /></a>
          <a href="#" onClick={(e) => e.preventDefault()}><S.BarbedCross size={20} stroke={1} /></a>
          <a href="#" onClick={(e) => e.preventDefault()}><S.Eye size={20} color="currentColor" /></a>
        </div>
      </div>
    </footer>
  );
}

// ============== CART DRAWER ==============
function CartDrawer({ open, items, onClose, onRemove, onCheckout }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div className={`oh-drawer ${open ? 'is-open' : ''}`} onClick={onClose}>
      <aside className="oh-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="oh-drawer-head">
          <span className="oh-section-roman">†</span>
          <h3>THE OFFERING</h3>
          <button onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="oh-drawer-body">
          {items.length === 0 ? (
            <div className="oh-drawer-empty">
              <S.Mark size={80} stroke={0.8} color="#3a3a3a" />
              <p>NO RITES BOUND. THE VESSEL IS EMPTY.</p>
            </div>
          ) : (
            items.map(i => (
              <div className="oh-drawer-item" key={i.id}>
                <div className="oh-drawer-item-thumb">
                  {S[i.sigil] && React.createElement(S[i.sigil], { size: 60, color: '#e8e4dd' })}
                </div>
                <div className="oh-drawer-item-info">
                  <span className="oh-drawer-cat">{i.cat}</span>
                  <h4>{i.name}</h4>
                  <span className="oh-drawer-price">£ {i.price.toLocaleString()} × {i.qty}</span>
                </div>
                <button className="oh-drawer-remove" onClick={() => onRemove(i.id)}>REMOVE</button>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="oh-drawer-foot">
            <div className="oh-drawer-total">
              <span>TOTAL OFFERING</span>
              <span className="oh-drawer-totalv">£ {total.toLocaleString()}</span>
            </div>
            <button className="oh-btn oh-btn-primary oh-btn-full" onClick={onCheckout}>
              <span>SEAL THE PACT</span>
              <S.BarbedCross size={14} stroke={1.4} />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

// ============== PRODUCT MODAL ==============
function ProductModal({ p, onClose, onAdd }) {
  if (!p) return null;
  const SigilGarment = S[p.sigil];
  return (
    <div className="oh-modal" onClick={onClose}>
      <div className="oh-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="oh-modal-close" onClick={onClose}>×</button>
        <div className="oh-modal-media">
          <div className="oh-modal-sigilbg"><S.RitualCircle size={500} stroke={0.5} color="#5a1010" /></div>
          <div className="oh-modal-garment"><SigilGarment size={280} color="#e8e4dd" /></div>
        </div>
        <div className="oh-modal-info">
          <span className="oh-modal-cat">{p.cat} — N° {p.id.replace('p', '00')}</span>
          <h2>{p.name}</h2>
          <span className="oh-modal-price">£ {p.price.toLocaleString()}</span>
          <p className="oh-modal-desc">{p.desc}</p>
          <div className="oh-modal-spec">
            <div><span>MATERIAL</span><span>WOOL / SILK / IRON</span></div>
            <div><span>FORGED</span><span>LONDON — BY HAND</span></div>
            <div><span>RITUAL</span><span>SS / 26 — THE CROWNING</span></div>
            <div><span>EDITION</span><span>33 / 666</span></div>
          </div>
          <div className="oh-modal-sizes">
            {['XS', 'S', 'M', 'L', 'XL'].map(s => <button key={s} className="oh-size">{s}</button>)}
          </div>
          <button className="oh-btn oh-btn-primary oh-btn-full" onClick={() => { onAdd(p); onClose(); }}>
            <span>ACQUIRE — £ {p.price.toLocaleString()}</span>
            <S.BarbedCross size={14} stroke={1.4} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============== LOOKBOOK VIEWER ==============
function LookbookViewer({ idx, onClose, onNav }) {
  if (idx == null) return null;
  const item = LOOKBOOK[idx];
  useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav((idx + 1) % LOOKBOOK.length);
      if (e.key === 'ArrowLeft') onNav((idx - 1 + LOOKBOOK.length) % LOOKBOOK.length);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [idx]);
  return (
    <div className="oh-viewer" onClick={onClose}>
      <div className="oh-viewer-panel" onClick={(e) => e.stopPropagation()} style={{ background: `linear-gradient(135deg, ${item.tone[0]}, ${item.tone[1]}, ${item.tone[2]})` }}>
        <button className="oh-viewer-close" onClick={onClose}>×</button>
        <button className="oh-viewer-nav oh-viewer-prev" onClick={() => onNav((idx - 1 + LOOKBOOK.length) % LOOKBOOK.length)}>←</button>
        <button className="oh-viewer-nav oh-viewer-next" onClick={() => onNav((idx + 1) % LOOKBOOK.length)}>→</button>
        <div className="oh-viewer-sigil">
          <S.RitualCircle size={700} stroke={0.5} color="#5a1010" />
        </div>
        <div className="oh-viewer-noise" />
        <div className="oh-viewer-meta">
          <span>CHAPTER {item.ch} / {LOOKBOOK.length}</span>
          <h2>{item.title}</h2>
          <span>SS / 26 — OBSIDIAN HYMN</span>
        </div>
      </div>
    </div>
  );
}

// ============== CHECKOUT ==============
function Checkout({ open, items, onClose }) {
  const [step, setStep] = useState(0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  useEffect(() => { if (open) setStep(0); }, [open]);
  if (!open) return null;
  const steps = [
    { title: 'SPEAK YOUR NAME', sub: 'The vessel must be named before it can be filled.' },
    { title: 'SIGN IN BLOOD', sub: 'Your offering, sealed in oxidized silver.' },
    { title: 'THE PACT IS SEALED', sub: 'Your rite has been received. The garments will be forged.' },
  ];
  return (
    <div className="oh-modal" onClick={onClose}>
      <div className="oh-checkout" onClick={(e) => e.stopPropagation()}>
        <button className="oh-modal-close" onClick={onClose}>×</button>
        <div className="oh-checkout-progress">
          {steps.map((s, i) => (
            <div key={i} className={`oh-checkout-step ${i === step ? 'is-active' : ''} ${i < step ? 'is-done' : ''}`}>
              <span>{i + 1}</span>
              <span>{s.title}</span>
            </div>
          ))}
        </div>
        <div className="oh-checkout-body">
          <span className="oh-section-roman">†</span>
          <h2>{steps[step].title}</h2>
          <p>{steps[step].sub}</p>
          {step === 0 && (
            <div className="oh-checkout-form">
              <label><span>TRUE NAME</span><input defaultValue="" placeholder="Your name" /></label>
              <label><span>SIGIL ADDRESS</span><input defaultValue="" placeholder="Address" /></label>
              <label><span>COVEN CITY</span><input defaultValue="" placeholder="City" /></label>
              <button className="oh-btn oh-btn-primary oh-btn-full" onClick={() => setStep(1)}>
                <span>PROCEED →</span>
              </button>
            </div>
          )}
          {step === 1 && (
            <div className="oh-checkout-form">
              <label><span>CARD</span><input defaultValue="" placeholder="0000 † 0000 † 0000 † 0000" /></label>
              <div className="oh-checkout-row">
                <label><span>EXP</span><input defaultValue="" placeholder="06 / 28" /></label>
                <label><span>CVC</span><input defaultValue="" placeholder="666" /></label>
              </div>
              <div className="oh-checkout-total">
                <span>TOTAL OFFERING</span>
                <span>£ {total.toLocaleString()}</span>
              </div>
              <button className="oh-btn oh-btn-primary oh-btn-full" onClick={() => setStep(2)}>
                <span>SEAL THE PACT — £ {total.toLocaleString()}</span>
                <S.BarbedCross size={14} stroke={1.4} />
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="oh-checkout-done">
              <S.Mark size={120} stroke={0.8} color="#FF2D2D" />
              <span className="oh-checkout-num">PACT N° {Math.floor(Math.random() * 666)} / 666</span>
              <p>Your garments will be forged within 21 days. You will receive a coded sigil by message.</p>
              <button className="oh-btn oh-btn-ghost" onClick={onClose}>RETURN TO THE WAKE</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============== CUSTOM CURSOR ==============
function CustomCursor({ enabled }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(${hover ? 2.4 : 1})`;
      }
      const t = e.target;
      const isInteractive = t.closest('button, a, .oh-card, .oh-arch-card, .oh-look-tile, input, label');
      setHover(!!isInteractive);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [enabled, hover]);
  if (!enabled) return null;
  return (
    <div className="oh-cursor" ref={ref}>
      <S.Mark size={28} stroke={1.2} color="#FF2D2D" />
    </div>
  );
}

// Export
Object.assign(window, {
  Nav, Hero, Manifesto, Drop, Archetypes, Lookbook, Newsletter, Footer,
  CartDrawer, ProductModal, LookbookViewer, Checkout, CustomCursor, PRODUCTS, LOOKBOOK
});
