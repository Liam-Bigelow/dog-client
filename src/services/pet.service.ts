import { v4 } from "uuid"


type sex = "male" | "female"
type Pet = {
    id: string
    ownerId: string
    name: string
    sex?: sex
    breed?: string
    notes?: string
    imageUrl?: string
    
}

const getPet = async (petId: string): Promise<Pet> => {
    return {
        ownerId: v4(),
        id: v4(),
        name: "Billy",
        sex: "male",
        breed: "Poodle",
        imageUrl: "https://th.bing.com/th/id/OIP.WSS1fDNjdY9aujjSPjFxowHaFj?w=272&h=204&c=7&r=0&o=5&dpr=3&pid=1.7"
    };
}

const listPets = async (ownerId: string): Promise<Pet[]> => {
    return [
        {
            ownerId: ownerId,
            id: v4(),
            name: "Billy",
            sex: "male",
            breed: "Poodle",
            imageUrl: "https://th.bing.com/th/id/OIP.WSS1fDNjdY9aujjSPjFxowHaFj?w=272&h=204&c=7&r=0&o=5&dpr=3&pid=1.7"
        },
        {
            ownerId: ownerId,
            id: v4(),
            name: "Bean",
            sex: "female",
            breed: "Bulldog",
            imageUrl: "https://th.bing.com/th/id/OIP.7zbHs2kBQrnXLwI9-6YNQAHaJ5?w=128&h=180&c=7&r=0&o=5&dpr=3&pid=1.7"
        },
        {
            ownerId: ownerId,
            id: v4(),
            name: "Wombus",
            imageUrl: "https://th.bing.com/th/id/OIP.URlmF-iVBp7dF4z5_xZUkQHaJJ?w=154&h=190&c=7&r=0&o=5&dpr=3&pid=1.7"
        }
    ]
}


const service = {
    getPet: getPet,
    listPets: listPets,
}
export default service