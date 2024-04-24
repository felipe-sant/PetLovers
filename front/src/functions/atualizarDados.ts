async function atualizarDados(url: string, dados: any) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            console.log('Dados atualizados com sucesso!');
        } else {
            console.error('Falha ao atualizar dados:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
    }
}

export default atualizarDados