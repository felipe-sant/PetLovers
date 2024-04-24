async function deletarDados(url:string, id:number | undefined) {
    try {
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        });
    } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
    }
}

export default deletarDados