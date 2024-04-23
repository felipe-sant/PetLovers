async function cadastrarDados(url:string, dados:any) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            console.log('Dados cadastrados com sucesso!');
        } else {
            console.error('Falha ao cadastrar dados:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
    }
}

export default cadastrarDados