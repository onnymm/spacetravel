const ColorDiv = ({container, colorTag, colorRGB, colorHSL}) => (
    <div style={{flexGrow: 1}}>
        <div style={{padding: "3rem 1rem 1rem", border: "1px solid white"}} className={`${container} ff-serif fs-500`}>
            {colorTag}
        </div>
        <p><span className="text-accent">RGB</span> {colorRGB}</p>
        <p><span className="text-accent">HSL</span> {colorHSL}</p>
    </div>
)

export default ColorDiv;