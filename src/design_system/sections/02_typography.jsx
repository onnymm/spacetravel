const Typography = () => (
    <section id="typography">
        <h2 className="numbered-title">
            <span>02</span>Typography
        </h2>

        <div className="flex">
            <div className="flow" style={{flexBasis: "100%", "--flow-space": "3rem"}}>
                <div>
                    <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
                    <p className="fs-900 ff-serif uppercase">Earth</p>
                </div>
                <div>
                    <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
                    <p className="fs-800 ff-serif uppercase">Venus</p>
                </div>
                <div>
                    <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
                    <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
                </div>
                <div>
                    <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
                    <p className="fs-600 ff-serif uppercase">Uranus, Neptune & Pluto</p>
                </div>
                <div>
                    <p className="text-accent">Heading 5 - Barlow Condensed - 28px - 4.75 Character Space</p>
                    <p className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to space</p>
                </div>
            </div>

            <div className="flow" style={{flexBasis: "100%", "--flow-space": "3rem"}}>
                <div>
                    <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                    <p className="fs-500 ff-serif uppercase">384,400 km</p>
                </div>
                <div>
                    <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                    <p className="fs-200 ff-sans-cond uppercase letter-spacing-3">Avg. Distance</p>
                </div>
                <div>
                    <p className="text-accent">Nav Text - Barlow Condensed Regular - 16 - 2.7 Character Space</p>
                    <p className="fs-300 ff-sans-cond uppercase letter-spacing-2">Europa</p>
                </div>
                <div>
                    <p className="text-accent">Body Text</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </section>
)

export default Typography;