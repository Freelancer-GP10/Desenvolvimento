import instace from "./instance";


export function ServicoJS(){
    instace.get("/servico/1")
        .then((response) =>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log("Deu erro");
            console.log(error);
        })
}