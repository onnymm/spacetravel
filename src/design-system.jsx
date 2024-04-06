import Colors from "./design_system/sections/01_colors";
import Typography from "./design_system/sections/02_typography";
import InteractiveElements from "./design_system/sections/03_interactive-emenets";

const DesignSystem = () => (
    <>
        <div className="container">
            <h1>Design system</h1>
            <Colors />
            <Typography />
            <InteractiveElements />
        </div>
    </>
)

export default DesignSystem;