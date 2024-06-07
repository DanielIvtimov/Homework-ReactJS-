

export const Trips = () => {
    const trips = ["London", "Paris", "Tokyo"]

    return (
        <div>
            <h2>Here are our destinatios for the trip:</h2>
            <ul>
                {trips.map((trip, oneTrip) => (<li key={oneTrip}>{trip}</li>) )}
            </ul>
        </div>
    )
} 

