import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

export function NewNoteCard() {

  const [ShouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [content, setContent] = useState('')

  function HandleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function HandleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)

    if (event.target.value === '') {
      setShouldShowOnboarding(true)
    }
  }

  function HandleSaveNote(event: FormEvent) {
    event.preventDefault()

    console.log(content)

    toast.success("Nota criada com sucesso")
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col text-left bg-slate-700 p-5 gap-3 overflow-hidden outline-none hover:ring-1 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 duration-100">
        <span className="text-sm font-medium text-slate-200" >
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">

          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 outline-none hover:text-slate-100">
            <X className="size-5"></X>
          </Dialog.Close>

          <form onSubmit={HandleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300" >
                Adicionar nota
              </span>

              {ShouldShowOnboarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece <button className="font-medium text-lime-400 hover:underline">gravando uma nota</button> em áudio se preferir ou <button onClick={HandleStartEditor} className="font-medium text-lime-400 hover:underline"> utilize apenas texto</button>.
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={HandleContentChange}>
                </textarea>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400  py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>

    </Dialog.Root>
  )
}