import { format, subDays, subHours, subMinutes } from "date-fns"
import { v4 } from "uuid"


type Activity = {
    id?: string
    pet: string
    date: Date
    description: string
    booking: string
    imageUrl: string
}

type ActivityGroup = {
    group: string
    activities: Activity[]
}

const getRandom = (limit: number): number => {
    return Math.floor(Math.random() * limit);
}

const getRecentActivity = (petIds?: string[]) : Promise<Activity[]> => {

    let amountToReturn = getRandom(20);
    let names = ["Bob", "Billy", "Milly", "Bean", "Wombis"]
    let descriptions = ["Ate their food, feeling good", "went to the bathroom", "enjoying life", "Might be getting sick", "Went for a long walk in the park"];
    let images = ["https://th.bing.com/th/id/OIP.WSS1fDNjdY9aujjSPjFxowHaFj?w=272&h=204&c=7&r=0&o=5&dpr=3&pid=1.7", "https://th.bing.com/th/id/OIP.7zbHs2kBQrnXLwI9-6YNQAHaJ5?w=128&h=180&c=7&r=0&o=5&dpr=3&pid=1.7", "https://th.bing.com/th/id/OIP.B4HJWutRbrryJnM4jYg4HwHaJ4?w=132&h=180&c=7&r=0&o=5&dpr=3&pid=1.7", "https://th.bing.com/th/id/OIP.URlmF-iVBp7dF4z5_xZUkQHaJJ?w=154&h=190&c=7&r=0&o=5&dpr=3&pid=1.7"]

    if(petIds && petIds.length > 0){
        amountToReturn /= 2;
        names = ["Billy"];
        images = [images[0]]
    }

    let resp: Activity[] = [];
    for (let i = 0; i <= amountToReturn; i++){
        const b = v4();
        const d = subDays(subHours(subMinutes(new Date(), getRandom(60)), getRandom(12)), getRandom(7));
        resp.push({
            pet: names[getRandom(names.length)],
            date: d,
            description: descriptions[getRandom(descriptions.length)],
            booking: b,
            imageUrl: images[getRandom(images.length)]
        })
    }
    resp = resp.sort((a, b) => b.date.getTime() - a.date.getTime())
    
    return new Promise((Resolve, Reject) => {
        Resolve(resp);
    });
} 

const groupActivity = (activities: Activity[]): ActivityGroup[] => {
    const today = format(new Date(), "PP");
    const grouping = {};
    for( let activity of activities){
        let group = format(activity.date, "PP");
        group = group === today ? "Today": group;
        if( grouping[group]?.length){
            grouping[group].push(activity)
        } else {
            grouping[group] = [activity]
        }
    }

    return Object.keys(grouping).map((key) => {
        return {
            group: key,
            activities: grouping[key]
        }
    });
}


const service = {
    getRecentActivity: getRecentActivity,
    groupActivity: groupActivity
}
export default service