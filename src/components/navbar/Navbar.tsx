function Navbar(){
    return(
        <>
         <div className="w-full flex justify-center py-4 bg-green-800 text-white">
            <div className="container flex justify-between text-lg font-mono">
                Blog Pessoal

                <div className="flex gap-4 font-mono">
                    Postagens
                    Temas
                    Cadastrar temas
                    Perfil 
                    Sair 
                </div>
            </div>

         </div>
        </>
    )
}
export default Navbar