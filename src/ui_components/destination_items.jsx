const DestinationItems = ({useItem, setItem, data}) => {
    const activate = (e) => (
        // console.log(e.target.id)
        setItem(data[e.target.id])
    )


    return (
    <ul className="tab-list flex">
        {data.map(
            (item, index) => (
                <li key={index}
                    className="underline-navigation ff-sans-cond fs-500"
                >
                    <button
                        id={index}
                        style={{backgroundColor: 'transparent'}}
                        className={`${(useItem === item) ? "active" : ""} uppercase text-accent bg-dark`}
                        onClick={activate}
                    >
                        {item.name}
                    </button>
                </li>
            )
        )}
    </ul>
)}

export default DestinationItems;