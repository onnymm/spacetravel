import LargeButton from "../../ui_components/large-button";

const InteractiveElements = () => (
    <section className="flow" id="interactive-elements">
        <h2 className="numbered-title"><span>03</span> Interactive elements</h2>

        {/* navigation */}
        <div>
            <nav>
                <ul className="primary-navigation underline-indicators flex">
                    <li className="active"><a className="uppercase text-white letter-spacing-2" href="#"><span>01</span>Active</a></li>
                    <li ><a className="uppercase text-white letter-spacing-2" href="#"><span>02</span>Hovered</a></li>
                    <li ><a className="uppercase text-white letter-spacing-2" href="#"><span>03</span>Idle</a></li>
                </ul>
            </nav>
        </div>

        <div className="flex">
        <div style={{marginTop: '5em'}}>
            <LargeButton />
        </div>
            <div className="flow" style={{marginBottom: '50vh', '--flow-space': '4rem'}}>
                {/* Tabs */}
                <div className="tab-list underline-indicators flex">
                    <button aria-selected="true" className="uppercase text-accent bg-dark ff-sans-cond letter-spacing-2">Moon</button>
                    <button aria-selected="false" className="uppercase text-accent bg-dark ff-sans-cond letter-spacing-2">Mars</button>
                    <button aria-selected="false" className="uppercase text-accent bg-dark ff-sans-cond letter-spacing-2">Europa</button>
                </div>
                {/* Dots */}
                <div className="dot-indicators flex">
                    <button aria-selected="true"><span className="sr-only">Slide title</span></button>
                    <button aria-selected="false"><span className="sr-only">Slide title</span></button>
                    <button aria-selected="false"><span className="sr-only">Slide title</span></button>
                </div>
                {/* Numbers */}
                <div className="number-indicators flex">
                    <button aria-selected="true"><span className="">1</span></button>
                    <button aria-selected="false"><span className="">2</span></button>
                    <button aria-selected="false"><span className="">3</span></button>
                </div>
            </div>
        </div>

    </section>
)

export default InteractiveElements;