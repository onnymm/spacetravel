import LargeButton from "../../ui_components/large-button";

const InteractiveElements = () => (
    <section className="flow" id="interactive-elements">
        <h2 className="numbered-title"><span>03</span> Interactive elements</h2>

        {/* navigation */}
        <div>
            <nav style={{margin: 0}}>
                <ul id="primary-navigation" className={`primary-navigation underline-indicators flex`} style={{justifyContent: 'start', paddingLeft: '5rem', width: 'fit-content'}}>
                        <li className={`active uppercase text-white ff-sans-cond letter-spacing-2`} style={{borderColor: 'hsl( var(--clr-white), 1)'}} href="#"><span aria-hidden="true">00</span>Active</li>
                        <li className={`uppercase text-white ff-sans-cond letter-spacing-2`} style={{borderColor: 'hsl( var(--clr-white), 0.5)'}} href="#"><span aria-hidden="true">01</span>Hovered</li>
                        <li className={`uppercase text-white ff-sans-cond letter-spacing-2`} href="#"><span aria-hidden="true">02</span>Idle</li>
                </ul>
            </nav>
        </div>

        <div className="flex">
        <div style={{marginTop: '5em'}}>
            <LargeButton />
        </div>
            <div className="flow" style={{marginBottom: '50vh', '--flow-space': '4rem'}}>
                {/* Tabs */}
                <div className="tab-list underline-navigation flex">
                    <button aria-selected="true" className="active uppercase text-accent bg-dark ff-sans-cond letter-spacing-2">Moon</button>
                    <button aria-selected="false" className="uppercase text-accent bg-dark ff-sans-cond letter-spacing-2" style={{borderColor: 'hsl( var(--clr-white), 0.5)'}}>Mars</button>
                    <button aria-selected="false" className="uppercase text-accent bg-dark ff-sans-cond letter-spacing-2">Europa</button>
                </div>
                {/* Dots */}
                <div className="dot-indicators flex">
                    <button aria-selected="true"><span className="sr-only">Slide title</span></button>
                    <button aria-selected="false" style={{backgroundColor: 'hsl( var(--clr-white), 0.5)'}}><span className="sr-only">Slide title</span></button>
                    <button aria-selected="false"><span className="sr-only">Slide title</span></button>
                </div>
                {/* Numbers */}
                <div className="number-indicators flex">
                    <button aria-selected="true"><span className="">1</span></button>
                    <button aria-selected="false" style={{borderColor: 'hsl( var(--clr-white), 0.5)'}}><span className="">2</span></button>
                    <button aria-selected="false"><span className="">3</span></button>
                </div>
            </div>
        </div>

    </section>
)

export default InteractiveElements;