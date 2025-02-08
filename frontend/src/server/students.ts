export async function getStudnets() {
    const res = await fetch("http://127.0.0.1:5000/students")
    return await res.json()
}

