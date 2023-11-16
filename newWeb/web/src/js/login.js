import instace from "./instance";

function LoginJS(){
    sessionStorage.setItem("token","")
    const emailinput = document.getElementById('nomeEmail').value;
    const senhainput = document.getElementById('senha').value;

    console.log(emailinput);
    console.log(senhainput);
    var dados =
    {
        senha:senhainput,
        email:emailinput
    }
   
    instace.post("/usuarios/login",dados)
    .then((response)=>{
        console.log(response);
        console.log("Login deu certo");
        console.log(response.data);
        console.log(response.token);
        console.log(response.data.token);
        sessionStorage.setItem("token",response.data.token);

        alert("AAAAAAAAAA")
        // FAZER QUALQUER ACAO REDIRECIONAR BUSCAR DADO ETC
        window.location("/workspace")
    })
    .catch((error)=>{
        console.log("Deu erro");
        console.log(error);
        console.log("blabalanjdfnsldf")
    })
}

export default LoginJS;