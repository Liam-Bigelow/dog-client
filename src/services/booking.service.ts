

type Status = "active" | "pending" | "denied";
type Booking = {
    id: string
    ownerId: string
    sitterId: string
    start: Date
    end: Date
    notes: string
    status: Status
}

const getUpcomingBookings = async (): Promise<Booking[]> => {
    return [];
}

const bookingService = {
    getUpcomingBookings: getUpcomingBookings
}
export default bookingService;