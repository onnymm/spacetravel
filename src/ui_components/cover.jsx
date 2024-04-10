const Cover = ({name}) => {
    const imageName = name.replace(" ", "-").toLowerCase();

    return (
        <picture>
            <source srcSet={`image-${imageName}.webp`}/>
            <img src={`image-${imageName}.png`} alt={name} />
        </picture>
    )
}

export default Cover;