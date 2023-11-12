export function emBreve(){
    return(
        <>
            <h2>Em breve nosso sistema!!</h2>
            <button onClick={()=> {
                sessionStorage.setItem("token","");
                window.location("/")
            }}>Sair</button>
        </>
    )
}