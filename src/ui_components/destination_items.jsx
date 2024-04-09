const DestinationItems = ({setItem, data}) => (
    <ul className="flex">
        {data.destinations.map(
            (destination, index) => (
                <li key={index}
                    className="underline-indicators ff-sans-cond fs-500"
                >
                    <button
                        style={{backgroundColor: 'transparent'}}
                        className="uppercase text-accent bg-dark"
                        onClick={
                            () => (
                                setItem(destination.name)
                            )
                        }
                    >
                        {destination.name}
                    </button>
                </li>
            )
        )}
    </ul>
)

export default DestinationItems;