import DATA from "../data";

const DestinationDescription = ({useItem}) => {
    const destination = DATA.destinations.find(item => item.name === useItem);

    return (
        <div>
            <div>{destination.name}</div>
            <div>{destination.description}</div>
        </div>
    )
}

export default DestinationDescription;