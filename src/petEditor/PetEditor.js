
import { useEffect, useState } from "react";
import "./PetEditor.css"
import service from "../services/pet.service.ts"

const PetEditor = ({petId, open}) => {
    const [pet, setPet] = useState();

    useEffect(() => {
        setPet(undefined)
        if( petId ){
            service.getPet(petId).then((p) => setPet(p));
        }
    }, [petId])


    return <md-dialog class="contacts" {...(open && {"open": true})}>
        <span slot="headline">
            <md-icon-button form="form" value="close" aria-label="Close dialog">
                <md-icon>close</md-icon>
            </md-icon-button>
            <span class="headline">Pet editor</span>
        </span>
        <form id="form" slot="content" method="dialog">
            <div className="pet-detals-row">
                <img className="pet-image" src={pet?.imageUrl} alt={pet?.name} />
                <div>
                    <md-outlined-text-field 
                        label="Name"
                        value={pet?.name} />
                    <md-outlined-text-field 
                        label="Breed"
                        value={pet?.breed} />
                </div>
            </div>
            <md-outlined-text-field
                type="textarea"
                label="Notes"
                rows="3"
                style={{display: "flex"}}>
                {pet?.notes}
            </md-outlined-text-field>
        </form>
        <div slot="actions">
            <div style={{flex: 1}}></div>
            <md-text-button form="form" value="cancel">Cancel</md-text-button>
            <md-text-button form="form" value="save">Save</md-text-button>
        </div>
    </md-dialog>
}

export default PetEditor;