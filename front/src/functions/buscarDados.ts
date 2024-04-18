async function buscarDados(url: string) {
    try {
        const res = await fetch(url)
        const jsonData = await res.json()
        return jsonData
    } catch (error) {
        return error
    }
}

export default buscarDados