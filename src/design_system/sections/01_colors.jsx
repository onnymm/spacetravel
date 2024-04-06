import ColorDiv from "../color-div";

const Colors = () => (
        <section id="colors" style={{margin: "4rem 0"}}>
        <h2 className="numbered-title">
            <span>01</span>colors
        </h2>

        <div className="flex">
            <ColorDiv container={"bg-dark text-white"} colorTag={"#0B0D17"} colorRGB={"11, 13, 23"} colorHSL={"230° 35% 7%"}/>
            <ColorDiv container={"bg-accent text-dark"} colorTag={"#D0D6F9"} colorRGB={"208 214 249"} colorHSL={"231° 77% 90%"}/>
            <ColorDiv container={"bg-white text-dark"} colorTag={"#FFFFFF"} colorRGB={"255 255 255"} colorHSL={"0° 0% 100%"}/>
        </div>

    </section>
)

export default Colors;