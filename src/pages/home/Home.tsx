import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home(){
    return(
        <>
            <div className= "bg-lime-100 flex justify-center">
                <div className="container grid grid-cols-2 text-green-800">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-thin">
                            Seja bem-Vinde!!
                        </h2>
                        <p className="text-xl font-thin">
                             Expresse aqui seus pensamentos e opniões
                        </p>
                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                 <ModalPostagem />
                            </div>

                        </div>

                    </div>
                    <div  id="imagem" className="flex justify-center">
                        <img src="https://i.imgur.com/fyfri1v.png" alt="Imagem Página Home" className='w-2/3'/>

                    </div>

                </div>

            </div>

             <ListaPostagens />
        </>
    )
}
export default Home