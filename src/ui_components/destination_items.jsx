const DestinationItems = ({setItem, data}) => (
    <div>
        {data.destinations.map(
            (destination, index) => (
                <button
                    key={index}
                    onClick={
                        () => (
                            setItem(destination.name)
                        )
                    }
                >
                    {destination.name}
                </button>
            )
        )}
    </div>
)

export default DestinationItems;