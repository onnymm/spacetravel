import DATA from "../data";

const DestinationDescription = ({useItem}) => {
    const destination = DATA.destinations.find(item => item.name === useItem);

    return (
        <article>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <div className="flex">
                <div>
                    <h3>Avg. distance: </h3>
                    <p>{destination.distance}</p>
                </div>
                <div>
                    <h3>Est. travel time: </h3>
                    <p>{destination.travel}</p>
                </div>
            </div>
        </article>
    )
}

export default DestinationDescription;