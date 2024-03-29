
import "./Pets.css"

import service from "../services/pet.service.ts"
import { useState, useEffect } from "react";
import PetEditor from "../petEditor/PetEditor.js";

const Pets = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [pets, setPets] = useState([])
    const [selectedPet, selectPet] = useState();

    useEffect(() => {
        service.listPets("ownerID").then((value) => {
            setPets(value);
        });
    }, [])

    const editPet = (pet) => {
        selectPet(pet);
        openEditor();
    }
    const openEditor = () => {
        setIsOpen(true)
    }

    return <div className="pets">
        {pets.map((pet) => (
            <md-outlined-icon-button onClick={() => editPet(pet)}>
                <img src={pet.imageUrl} alt={pet.name} />
            </md-outlined-icon-button>
        ))}
        <md-icon-button onClick={openEditor}>
            <md-icon>add</md-icon>
        </md-icon-button>
        <PetEditor petId={selectedPet?.id} open={isOpen} />
    </div>
}

export default Pets;