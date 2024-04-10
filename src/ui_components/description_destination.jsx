
const DescriptionDestination = ({useItem}) => {

    return (
        <article className="destination-info flow">
            <h2 className="ff-serif fs-800 uppercase">{useItem.name}</h2>
            <p>{useItem.description}</p>
            <div className="destination-meta flex">
                <div>
                    <h3 className="text-accent fs-200 uppercase">Avg. distance: </h3>
                    <p className="ff-serif uppercase">{useItem.distance}</p>
                </div>
                <div>
                    <h3 className="text-accent fs-200 uppercase">Est. travel time: </h3>
                    <p className="ff-serif uppercase">{useItem.travel}</p>
                </div>
            </div>
        </article>
    )
}

export default DescriptionDestination;