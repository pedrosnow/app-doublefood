const BASE_URL = ""

export default {
    singIn: async (email:string,password:string) => {
        const req = await fetch(`${BASE_URL}/singIn`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const json = await req.json()
        return json
    }
}