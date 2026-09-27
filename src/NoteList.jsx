import { AnimatePresence } from 'framer-motion'
import NoteCard from './NoteCard'

export default function NoteList({ notes, onOpen, onPin, onMenu }) {
  if (!notes.length) return <div className="empty"><div className="sprig">❀</div><h2>No notes yet</h2><p>Write your first one 🌿</p></div>
  return <div className="notes-grid"><AnimatePresence>{notes.map((note, i) => <NoteCard key={note.id} note={note} index={i} onOpen={onOpen} onPin={onPin} onMenu={onMenu} />)}</AnimatePresence></div>
}
