
import { useEffect, useState } from "react";
import "./Activity.css"
import { format } from "date-fns";

import service from "./Activity.service.ts"
import petService from "../services/pet.service.ts"

const Activty = () => {
    const [activities, setActivities] = useState([]);
    const [viewActivity, setViewActivity] = useState();
    const [pets, setPets] = useState([])
    const [filterByPets, setFilterByPets] = useState([])

    useEffect(() => {
        petService.listPets("ownerId").then((v) => {
            setPets(v);
        })
    }, [])
    useEffect(() => {
        console.log(filterByPets);
        service.getRecentActivity(filterByPets).then((v) => {
            setActivities(service.groupActivity(v));
        });
    }, [filterByPets])

    const formatTime = (date) => {
        return format(date, "p")
    }

    const formatDate = (date) => {
        return format(date, "PPp")
    }

    const handleClickActivity = (activity) => {
        setViewActivity(activity);
    }

    const handleFilterClick = (filterId) => {
        filterId = filterId.toLowerCase();
        switch (filterId) {
            case "all":
                setFilterByPets([])
                break;
            default:
                setFilterByPets(
                    filterByPets.includes(filterId) ?
                    filterByPets.filter((p) => p !== filterId) :
                    filterByPets.concat([filterId])
                )

        }
    }


    return (
        <div>
            <md-chip-set>
                <md-filter-chip 
                    label="All" 
                    selected={filterByPets.length <= 0 || undefined}
                    onClick={() => handleFilterClick("all")}>
                </md-filter-chip>
                {pets.map((pet) => 
                    <md-filter-chip 
                        label={pet.name} 
                        selected={filterByPets.includes(pet.id) || undefined}
                        onClick={() => handleFilterClick(pet.id)}
                        avatar
                    >
                        <img 
                            slot="icon" 
                            src={pet.imageUrl} 
                            alt={pet.name} 
                        />
                    </md-filter-chip>
                )}
            </md-chip-set>
            <md-list>
                {activities.map((group) => 
                    <>
                        <div className="title">{group.group}</div>
                        <md-divider></md-divider>
                        {group.activities.map((activity) => 
                            <md-list-item type="button" onClick={() => handleClickActivity(activity)}>
                                <img className="avatar" slot="start" alt={activity.pet} src={activity.imageUrl} />
                                <div slot="headline"> {activity.pet} - {formatTime(activity.date)}</div>
                                <div slot="supporting-text">{activity.description}</div>
                            </md-list-item>
                        )}
                    </>
                )}
            </md-list>
            {viewActivity && 
                <md-dialog open>
                    <span slot="headline">
                        <span style={{flex: 1}}>
                            {viewActivity.pet} - {formatDate(viewActivity.date)}
                        </span>
                        <md-icon-button onClick={() => setViewActivity(null)}>
                            <md-icon>close</md-icon>
                        </md-icon-button>
                    </span>
                    <div className="view-pet-details" slot="content" method="dialog">
                        <img alt={viewActivity.pet} src={viewActivity.imageUrl} />
                        <span>
                            {viewActivity.description}
                        </span>
                    </div>
                </md-dialog>
            }
        </div>
    )
}

export default Activty