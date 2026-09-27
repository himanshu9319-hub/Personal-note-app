import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, Copy, Check, Download } from 'lucide-react'
import { tags } from './data'
export default function NoteEditor({ note, onChange, onClose, onDelete, onDuplicate, onSave, isTrash }) {
 if (!note) return null
 const chars = note.body?.length || 0, words = (note.body?.trim().match(/\S+/g) || []).length
 const update = (key, value) => onChange({ ...note, [key]: value, updatedAt: new Date().toISOString() })
 const copy = () => navigator.clipboard?.writeText(`${note.title}\n\n${note.body}`)
 const download = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([`${note.title}\n\n${note.body}`], { type: 'text/plain' })); a.download = `${note.title || 'note'}.txt`; a.click() }
 return <AnimatePresence><motion.div className="editor-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.section className="editor" initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96 }} transition={{ type: 'spring', damping: 22 }}>
  <header><div><span className="saved"><Check size={14}/> Saved</span><span className="editor-date">Last touched {new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric' }).format(new Date(note.updatedAt))}</span></div><button onClick={onClose} aria-label="Close editor"><X /></button></header>
  <div className="paper"><input value={note.title} onChange={e => update('title', e.target.value)} placeholder="Title your little thought…" autoFocus /><textarea value={note.body} onChange={e => update('body', e.target.value)} placeholder="Dear little journal…" /></div>
  <footer className="editor-footer"><div className="tag-select">{tags.map(t => <button key={t} className={note.tag === t ? 'chosen' : ''} onClick={() => update('tag', t)}>{t}</button>)}</div><span>{words} words · {chars} characters</span></footer>
  <div className="editor-actions"><button onClick={copy}><Copy size={16}/> Copy</button><button onClick={download}><Download size={16}/> Export</button><button onClick={onDuplicate}><Copy size={16}/> Duplicate</button>{!isTrash && <button className="delete" onClick={onDelete}><Trash2 size={16}/> Delete</button>}<button className="seal" onClick={onSave}>Save</button></div>
 </motion.section></motion.div></AnimatePresence>
}
