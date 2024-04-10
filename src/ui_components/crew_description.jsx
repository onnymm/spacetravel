const CrewDescription = ({name, role, bio}) => (
    <article className="crew-details">
        <h2 className="fs-600 ff-serif uppercase">{role}</h2>
        <h1 className="fs-700 uppercase ff-serif">{name}</h1>
        <p>{bio}</p>
    </article>
);

export default CrewDescription;