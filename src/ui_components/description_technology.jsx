const DescriptionTechnology = ({name, description}) => {

    return (
        <article>
            <h2 className="fs-200 ff-serif uppercase text-accent">The terminology</h2>
            <h1 className="fs-700 uppercase ff-serif">{name}</h1>
            <p className="ff-sans-cond">{description}</p>
        </article>
    )
}

export default DescriptionTechnology;