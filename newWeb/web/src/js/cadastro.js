import instace from "./instance";

export function cadastroFree(){
    sessionStorage.removeItem("token")
    const emailinput = document.getElementById('emailFree').value;
    const senhainput = document.getElementById('senhaFree').value;
    const senhainput2 = document.getElementById('senhaFree2').value;
 
    

    if(senhainput == senhainput2){
        
    var dados =
    {
        senha:senhainput,
        email:emailinput,
        papel:"Freelancer"
    }
   
    console.log(dados.papel);
    instace.post("/usuarios",dados)
    .then((response)=>{
        console.log("Login deu certo");
        console.log(response.data);
        console.log(response.token);
        console.log(response.data.token);
        sessionStorage.setItem("token",response.data.token);

        alert("Login realizado com sucesso!")
        // FAZER QUALQUER ACAO REDIRECIONAR BUSCAR DADO ETC
    })
    .catch((error)=>{
        console.log("Deu erro");
        console.log(error);
    })

}else{
    alert("Dados invalidos!!")
}
}

export function cadastroFree2(){
 
    const nomeFre = document.getElementById('nome').value;
    const sobrenomeFre = document.getElementById('sobrenome').value;
    const cpfFre = document.getElementById('cpf').value;
    const telefoneFre = document.getElementById('telefoneFree').value;
    const areaAtuacaoFre = document.getElementById('areaAtuacao').value;
    const linguagemDominioFre = document.getElementById('linguagemDominio').value;
    const formacaoFre = document.getElementById('formacao').value;
    console.log(nomeFre);
    console.log(sobrenomeFre);
    console.log(cpfFre);
    console.log(telefoneFre);
    console.log(areaAtuacaoFre);
    console.log(linguagemDominioFre);
    console.log(formacaoFre);

    if(nomeFre != "" && sobrenomeFre != "" && cpfFre != "" && telefoneFre != "" && areaAtuacaoFre != "" && linguagemDominioFre != "" && formacaoFre != ""){
        
    var dados =
    {
        nome:nomeFre,
        sobrenome:sobrenomeFre,
        cpf:cpfFre,
        telefone: telefoneFre,
        areaAtuacao: areaAtuacaoFre,
        linguagemDominio: linguagemDominioFre,
        formacao: formacaoFre
    }
    instace.post("/freelancer",dados)
    .then((response)=>{
        console.log("Cadastro efetuado com sucesso");
        console.log(response.data);
        console.log(response.token);
        console.log(response.data.token);

        alert("AAAAAAAAAA")
        // FAZER QUALQUER ACAO REDIRECIONAR BUSCAR DADO ETC
    })
    .catch((error)=>{
        console.log("Deu erro");
        console.log(error);
    })

}else{
    alert("Dados invalidos, preencha corretamente as informações para prosseguir!!")
}
}

export function cadastroMicro1(){
    sessionStorage.removeItem("token")
    const emailinput = document.getElementById("emailMicro").value;
    const senhainput = document.getElementById("senhaMicro").value;
    const senhainput2 = document.getElementById("senhaMicro2").value;
    

    console.log(emailinput);
    console.log(senhainput);
    console.log(senhainput2);

    if(senhainput == senhainput2){
        var dados =
        {
            senha:senhainput,
            email:emailinput,
            papel:"Empresa"
        }
       
        instace.post("/usuarios",dados)
        .then((response)=>{
            console.log("Login deu certo");
            console.log(response.data);
            console.log(response.token);
            console.log(response.data.token);
            sessionStorage.setItem("token",response.data.token);
    
            alert("AAAAAAAAAA")
            // FAZER QUALQUER ACAO REDIRECIONAR BUSCAR DADO ETC
        })
        .catch((error)=>{
            console.log("Deu erro");
            console.log(error);
        }) 
    }else{
        alert("Dados invalidos, preencha as informações corretamente para prosseguir!")
    }
}
export function buscarCep(){
    const cepMicro = document.getElementById('cep').value

    console.log(cepMicro);

    // instace.get(`/endereco/cep?cep=${cepMicro}`)
    // .then((response)=>{
    //     // var logradouro = response.data.logradouro;
    //     // FAZER QUALQUER ACAO REDIRECIONAR BUSCAR DADO ETC
    // })
}

export function cadastroMicroFinal(){

    const nomeMicro = document.getElementById('nomeEmpresa').value;
    const cnpjMicro = document.getElementById('cnpj').value;
    const telefoneMicro = document.getElementById('telefone').value;
    const ramoMicro = document.getElementById('ramo').value;
    

    console.log(nomeMicro);
    console.log(cnpjMicro);
    console.log(telefoneMicro);
    console.log(ramoMicro);
    

    if(nomeMicro != "" && cnpjMicro != "" && telefoneMicro != "" && ramoMicro != ""){
        
    var dados =
    {
        nome:nomeMicro,
        cnpj:cnpjMicro,
        ramo:ramoMicro,
        telefone: telefoneMicro
    }
    console.log("dentro do json"+dados.nome);
    instace.post("/empresa",dados)
    .then((response)=>{
        console.log("Cadastro efetuado com sucesso");
        console.log(response.data);
        console.log(response.token);
        console.log(response.data.token);

        alert("AAAAAAAAAA")
        // FAZER QUALQUER ACAO REDIRECIONAR BUSCAR DADO ETC
    })
    .catch((error)=>{
        console.log("Deu erro");
        console.log(error);
    })

}else{
    alert("Dados invalidos, preencha corretamente as informações para prosseguir!!")
}
}