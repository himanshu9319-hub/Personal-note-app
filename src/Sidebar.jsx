import { BookOpen, FileText, Trash2, Plus, Menu, X } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'
export default function Sidebar({ view, setView, onNew, theme, setTheme, cool, setCool, trashed, open, setOpen }) {
 const nav = [{ id: 'notes', label: 'All notes', icon: FileText }, { id: 'pinned', label: 'Favorites', icon: BookOpen }, { id: 'trash', label: 'Recently deleted', icon: Trash2, count: trashed }]
 return <><button className="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><aside className={`sidebar ${open ? 'open' : ''}`}><div className="brand"><span>✦</span><div><b>little notes</b><small>kept with care</small></div></div><MotionButton onClick={onNew}><Plus size={17} /> New note</MotionButton><nav>{nav.map(item => { const Icon = item.icon; return <button key={item.id} onClick={() => { setView(item.id); setOpen(false) }} className={view === item.id ? 'active' : ''}><Icon size={17} />{item.label}{item.count ? <i>{item.count}</i> : null}</button> })}</nav><ThemeSwitcher theme={theme} setTheme={setTheme} cool={cool} setCool={setCool}/><div className="sidebar-footer">Made for slow thoughts ☼</div></aside>{open && <div className="scrim" onClick={() => setOpen(false)} />}</>
}
function MotionButton({ children, ...props }) { return <button className="new-note" {...props}>{children}</button> }
