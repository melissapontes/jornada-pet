// **Objetivo:** Busca os pacientes na base de dados e exibe os resultados em uma seção HTML.
  
    // **Encontrar a seção HTML onde os resultados serão exibidos:**
    const section = document.getElementById
    ("resultados-pesquisa");
    // console.log(section); // Linha utilizada para debug, pode ser removida

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;
    //console.log(campoPesquisa);

    //if (campoPesquisa == "") {
    if (!campoPesquisa) {
      // Nada dai em diante será exedcutado após o return
      section.innerHTML = "<p>Nada foi encontrado. Digite o nome de algum pet.</p>";
      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // **Inicializar a string que armazenará o HTML dos resultados:**
    let resultados = "";
    let nomePaciente = "";
    let especiePaciente = "";

    // **Iterar sobre a base de dados de pacientes e construir o HTML:**
    for (const paciente of pacientes) {

      nomePaciente = paciente.nome.toLowerCase();
      especiePaciente = paciente.especie.toLowerCase();

        // Pesquisa se o nome iu espécie digitados no campo do form corresponde a um nome de paciente do banco
        if (nomePaciente.includes(campoPesquisa) || (especiePaciente.includes(campoPesquisa))) {
            // **Iterar sobre a base de dados de pacientes e construir o HTML:**
            resultados += `
            <div class="pet-card">
              <div><p>${paciente.imagem}</p></div>
              <div class="pet-info">
                <div class="header"><h2>${paciente.nome}</h2></div>
                <p class="condition">Idade: <b>${paciente.idade} anos</b></p>
                <p class="condition">Espécie: <b>${paciente.especie}</b></p>
                <p class="condition">Estadiamento: <b>${paciente.estadiamento}</b></p>
                <p class="tutor">Tutor (a): <b>${paciente.tutor}</b></p>
              </div>
            </div>
           `;
        }
    }

    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // **Atualizar o conteúdo da seção HTML com os resultados:**
    section.innerHTML = resultados;
  }



//console.log (pacientes);

//Selecionar um item específico do array, que vai de 0 a N
//console.log (pacientes[2]);

//Selecionar um atributo
//console.log (pacientes[2].nome);
