import { useLocalStorage } from "@uidotdev/usehooks"

export default function Tarefa({ id, nome, concluida }) {
    const [lista, setlista] = useLocalStorage("lista")
    function check() {
        const temporario = lista.map((tarefa) => {
            if (tarefa.id == id) {
                tarefa.concluida = !tarefa.concluida
            }
            return tarefa
        })
        setlista(temporario)
    }
    function excluir() {
        const temporario = lista.filter((tarefa) => {
            if (tarefa.id == id) {
                return false
            }
            return true
        })
        setlista(temporario)
    }
    return (
        <div>
            <li className="text-3xl text-accent">{nome}</li>
            <input className="toggle" checked={concluida} type="checkbox" onChange={check} />
            <button onClick={excluir}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg></button>
        </div>

    )
}
