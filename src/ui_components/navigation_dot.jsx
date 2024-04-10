const NavigationDot = ({useItem, setItem, data}) => {

    const activate = (e) => {
        setItem(data[e.target.id])
    }

    return (
        <div className="flex dots-navigation">
            {
                data.map(
                    (item, index) => (
                        <div
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
                        </div>
                    )
                )
            }
        </div>
    )
}

export default NavigationDot;