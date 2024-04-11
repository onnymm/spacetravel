const Cover = ({name, type}) => {
    const imageName = name.replace(" ", "-").toLowerCase();
    
    if (type === 'png') {
        return (
            <picture>
                <source srcSet={`image-${imageName}.webp`}/>
                <img src={`image-${imageName}.png`} alt={name} />
                
            </picture>
        )
    } else if (type === 'jpg') {
        return (
            <img src={`image-${imageName}.jpg`} alt={name} />
        )
    }
}

export default Cover;