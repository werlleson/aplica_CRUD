var dados = []

function PopulaTabela(){

    if(Array.isArray(dados)){

        $("#tbDados tbody").html("")
        
         dados.forEach(function(item){
             // Template string
             $("tbDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Formação}</td> 
             
             `)
        })
    }
}

    $(function (){
        // Execulta ao carregar a pagina
        dados = JSON.parse(localStorage.getItem("__dados__"))
        
        if (dados){
            PopulaTabela()
        }
    })
