import { Link } from "react-router-dom";
import Tema from '../../../models/Tema'


interface CardTemasProps{
    tema: Tema
}

function CardTema({tema}: CardTemasProps){
    return(
        <div className="border flex flex-col rounded-2x1 overflow-hidden justify-between">
            <header className="py-2 px-6 bg-green-800 text-white font-thin text-2x1">
                Tema
            </header>
            <p className="p-8 text-3xl bg-gray-100 h-full font-thin">{tema.descricao}</p>

            <div className="flex">
                 <Link to={`/editartema/${tema.id}`}
	                 className='w-full text-gray-100 bg-green-400 hover:bg-green-800 
                            flex items-center justify-center py-2'>
	                  <button>Editar ♻</button>
                 </Link>

                <Link to={`/deletartema/${tema.id}`} 
                      className='text-gray-100 bg-rose-400 hover:bg-rose-700 w-full flex items-center justify-center font-thin'>
                      <button>Deletar ❌</button>
                </Link>

            </div>

        </div>
    )
}

export default CardTema;