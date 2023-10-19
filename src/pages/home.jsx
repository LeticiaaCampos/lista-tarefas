import { useState } from "react"
import Tarefa from "../components/tarefa"
import { useLocalStorage } from "@uidotdev/usehooks"

export default function Home() {
    const [lista, setlista] = useLocalStorage("lista", [])
    const [nometarefa, setnometarefa] = useState("")

    function adicionartarefa() {

        if (nometarefa == "") {
            return
        } else {
            setlista([...lista, {
                id: lista.length + 1,
                nome: nometarefa,
                concluida: false
            }])
            setnometarefa("")
        }
    }
    function enter(e){
        if(e.key == "Enter"){
            adicionartarefa()
        }
    }

    return (
        <div className="grid grid-rows-[auto_1fr] h-screen">
           <div className="flex justify-center gap-4 p-4 bg-secondary">
           <input className="input" type="text" placeholder="Digite sua tarefa" id="tarefa" value={nometarefa} onChange={(e) => setnometarefa(e.target.value)} onKeyDown={(e) => enter(e)}/>
            <button  className="btn" onClick={adicionartarefa} >Adicionar</button>
           </div>
            <div className="p-4 gap-4 grid grid-cols-2 h-full ">
                <ul className="p-4 bg-neutral rounded-md  h-full">
                    {lista.filter(tarefa => !tarefa.concluida).map((tarefa, posicao) => (
                        <Tarefa key={posicao} id={tarefa.id} nome={tarefa.nome} concluida={tarefa.concluida} />
                    ))}
                </ul>
                <ul className="p-4 bg-neutral rounded-md  h-full ">
                    {lista.filter(tarefa => tarefa.concluida).map((tarefa, posicao) => (
                        <Tarefa key={posicao} id={tarefa.id} nome={tarefa.nome} concluida={tarefa.concluida} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
