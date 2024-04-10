const DotNavigation = ({useItem, setItem, data}) => {

    const activate = (e) => {
        setItem(data[e.target.id])
    }

    return (
        <div>
            {
                data.map(
                    (item, index) => (
                        <div
                            className={`${(useItem === item)? "active" : ""} dot-indicators`} 
                            key={index}
                        >
                            <button
                            onClick={activate}
                            id={index}>
                                
                            </button>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default DotNavigation;