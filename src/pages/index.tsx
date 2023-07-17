import { Code2, Image, PlayCircle, Music, PlusCircle, Send, Wand2 } from "lucide-react";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10 w-[76rem] p-14 rounded-[2rem] border-2 border-slate-700 bg-slate-950 opacity-80">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center items-center w-16 h-16 rounded-2xl border-2 border-slate-800 bg-slate-900">
              <Wand2 className="w-10 h-10 flex shrink-0 text-slate-200" />
            </div>

            <h1 className="self-stretch text-slate-50 text-center text-[2rem] font-semibold leading-normal">Experimente o poder da Inteligência Artificial</h1>
          </div>

          <div className="flex flex-col items-start gap-4 w-[38rem]">
            <Card text="Gerador de códigos" icon={Code2} />
            <Card text="Edição de foto" icon={Image} />
            <Card text="Geração de vídeos" icon={PlayCircle} />
            <Card text="Criador de áudios e musicas" icon={Music} />
          </div>
        </div>

        <hr className="w-[68.5rem] h-[0.0625rem] border-slate-700" />

        <div className="flex items-start self-stretch">
          <div className="flex items-center p-4 gap-4 flex-[1_0_0]">
            <PlusCircle className="w-8 h-8 text-slate-400 flex items-center ml-4 absolute" />

            <input type="text" className="flex items-center flex-[1_0_0] gap-4 p-4 rounded-2xl border-2 border-slate-800 bg-slate-900 placeholder:pl-6 placeholder:text-slate-200 text-slate-200" placeholder="Envie uma mensagem ou digite “/” para exibir os comandos" />

            <button className="flex items-start p-4 gap-2 rounded-2xl border border-slate-700 bg-slate-900 hover:bg-slate-950">
              <Send className="text-slate-50" />
            </button>
          </div>
        </div>
      </div>

    </main>
  )
}
