
const Upcoming = (props) => {


    return <md-list>
        <md-list-item>
            <div slot="headline">Eggs</div>
            <md-icon slot="start">egg</md-icon>
            <md-icon slot="end">recommend</md-icon>
        </md-list-item>
        <md-list-item class="unhealthy">
            <div slot="headline">Ice Cream</div>
            <md-icon slot="start">icecream</md-icon>
            <md-icon slot="end">dangerous</md-icon>
        </md-list-item>
        <md-list-item>
            <div slot="headline">Orange</div>
            <md-icon slot="start">nutrition</md-icon>
            <md-icon slot="end">recommend</md-icon>
        </md-list-item>
    </md-list>
}

export default Upcoming