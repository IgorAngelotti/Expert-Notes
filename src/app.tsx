import Logo from './assets/Logo-nlw-expert.svg'
import { NewNoteCard } from './components/Newnote-card'
import { NoteCard } from './components/note-card'

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-10 space-y-6" >
      <img src={Logo} alt="NLW-Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder='Busque em suas notas...'
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500" />
      </form>

      <div className="h-px bg bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">

        <NewNoteCard />
        <NoteCard note={{
          data: new Date(),
          content: "Lembrar de terminar este desenvolvimento para garantir que eu possa evoluir no react e tailwind"
        }} />

        <NoteCard note={{
          data: new Date(),
          content: "Lembrar de terminar este desenvolvimento para garantir que eu possa evoluir no react e tailwind"
        }} />
        <NoteCard note={{
          data: new Date(),
          content: "Lembrar de terminar este desenvolvimento para garantir que eu possa evoluir no react e tailwind"
        }} />

      </div>
    </div>
  )
}


