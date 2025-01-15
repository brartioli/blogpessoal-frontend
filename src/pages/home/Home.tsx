function Home(){
    return(
        <>
            <div className= "bg-green-700 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-thin">
                            Seja bem-Vinde!!
                        </h2>
                        <p className="text-xl font-thin">
                             Expresse aqui seus pensamentos e opniões
                        </p>
                        <div className="flex justify-around gap-4">
                            <div className="rounded text-white border-white border-solid border-2 py-2 px-4 font-thin">
                                Nova postagem
                            </div>

                        </div>

                    </div>
                    <div className="flex justify-center">
                        <img src="https://i.imgur.com/fyfri1v.png" alt="Imagem Página Home" className='w-2/3'/>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Home