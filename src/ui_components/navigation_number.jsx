const NavigationNumber = ({useItem, setItem, data}) => {
    const activate = (e) => (
        setItem(data[e.target.id])
    )

    return (
        <div className="number-indicators flex">
            {
                data.map(
                    (item, index) => (
                        <button
                            id={index}
                            key={index}
                            aria-selected={(useItem === item) ? "true": "false"}
                            onClick={activate}
                            >
                                {index + 1}
                            </button>
                    )
                )
            }
        </div>
    )
}

export default NavigationNumber;