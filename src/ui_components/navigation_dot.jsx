const NavigationDot = ({useItem, setItem, data}) => {

    const activate = (e) => {
        setItem(data[e.target.id])
    }

    return (
        <ul className="flex dots-navigation">
            {
                data.map(
                    (item, index) => (
                        <li
                            className={`${(useItem === item)? "active" : ""} dot-indicators`} 
                            key={index}
                        >
                            <button
                            aria-selected={(useItem === item)? "true" : "false"}
                            onClick={activate}
                            id={index}>
                                <span className="sr-only">
                                    {useItem.name}
                                </span>
                            </button>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default NavigationDot;