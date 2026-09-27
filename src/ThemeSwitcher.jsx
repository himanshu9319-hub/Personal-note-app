import { Sun, Moon, Palette } from 'lucide-react'
const presets = [{ name: 'blush', value: '#EBD3CE' }, { name: 'sage', value: '#A9C0AE' }, { name: 'ivory', value: '#F5EDE4' }, { name: 'rose', value: '#D9A8A0' }, { name: 'wood', value: '#A47B52' }]
export default function ThemeSwitcher({ theme, setTheme, cool, setCool }) {
  return <section className="theme-box"><div className="theme-title"><Palette size={16} /> Little palette</div><p>Choose the mood of your nook.</p><div className="swatches">{presets.map(p => <button key={p.name} aria-label={p.name} className={theme === p.value ? 'selected' : ''} style={{ background: p.value }} onClick={() => setTheme(p.value)} />)}<label className="custom-swatch">+<input aria-label="Custom color" type="color" value={theme} onChange={e => setTheme(e.target.value)} /></label></div><button className="light-toggle" onClick={() => setCool(!cool)}>{cool ? <Moon size={15} /> : <Sun size={15} />}{cool ? 'Cool & muted' : 'Warm & soft'}</button></section>
}
