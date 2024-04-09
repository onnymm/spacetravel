import DATA from "../data";

const DestinationDescription = ({useItem}) => {
    const destination = DATA.destinations.find(item => item.name === useItem);

    return (
        <article className="destination-info">
            <h2 className="ff-serif fs-800 uppercase">{destination.name}</h2>
            <p>{destination.description}</p>
            <div className="destination-meta flex">
                <div>
                    <h3 className="text-accent fs-200 uppercase">Avg. distance: </h3>
                    <p className="ff-serif uppercase">{destination.distance}</p>
                </div>
                <div>
                    <h3 className="text-accent fs-200 uppercase">Est. travel time: </h3>
                    <p className="ff-serif uppercase">{destination.travel}</p>
                </div>
            </div>
        </article>
    )
}

export default DestinationDescription;