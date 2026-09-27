import { motion } from 'framer-motion'
import { Pin, MoreHorizontal } from 'lucide-react'

export default function NoteCard({ note, index, onOpen, onPin, onMenu }) {
  const date = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(note.updatedAt))
  return <motion.article className={`note-card ${note.color}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .05, type: 'spring', stiffness: 180, damping: 18 }} whileHover={{ y: -5, scale: 1.02 }} onClick={() => onOpen(note)}>
    <div className="card-top"><span className={`tag-dot ${note.tag}`}></span><span>{note.tag}</span><div className="card-actions">
      <button aria-label="Pin note" className={note.pinned ? 'pinned' : ''} onClick={e => { e.stopPropagation(); onPin(note.id) }}><Pin size={15} fill={note.pinned ? 'currentColor' : 'none'} /></button>
      <button aria-label="More actions" onClick={e => { e.stopPropagation(); onMenu(note) }}><MoreHorizontal size={18} /></button>
    </div></div>
    <h3>{note.title || 'Untitled note'}</h3><p>{note.body || 'A little space for your thoughts…'}</p>
    <footer><span>{date}</span><span>♡</span></footer>
  </motion.article>
}
