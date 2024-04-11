const NavigationUnderline = ({useItem, setItem, data}) => {
    const activate = (e) => (
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
                        aria-selected={(useItem === item) ? "true" : "false"}
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

export default NavigationUnderline;