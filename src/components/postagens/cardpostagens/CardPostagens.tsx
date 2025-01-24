import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagens({ postagem }: CardPostagensProps) {
    return (
        <div className='border-green-900 border
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-green-700 py-2 px-4 items-center gap-4">
                    <img src={postagem.usuario?.foto}
                        className='h-12 rounded-full' alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-thin text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-thin uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, { dateStyle: 'full', timeStyle: 'medium', }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-slate-100 bg-green-400 hover:bg-green-800 flex items-center justify-center py-2'>
                    <button>Editar ♻</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`}
                    className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar ❌</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagens