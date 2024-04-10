const CrewCover = ({name}) => {
    const imagePath = `image-${name.replace(" ", "-").toLowerCase()}.png`;

    return (
        <img src={imagePath} alt="" />
    )
}

export default CrewCover;