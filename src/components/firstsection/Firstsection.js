import "./Firstsection.css";
// import Bilder from "./assets/Bilder";

function Firstsection() {
    return (
        <main>
            <p>What We Do</p>
            <h2>We've got everything you need to launch and grow your business</h2>
            <section>
                <article>
                    <div className="flex-container">
                        <img alt={"brush"} src={require("../../assets/Bilder/brush.svg").default} />
                        <div className="text-container">
                            <h3>Brand Identity</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi vero, facilis quas, in dolor labore, quo blanditiis sed mollitia explicabo atque consectetur quam magni repellat perspiciatis fuga cumque dolores hic.</p>
                        </div>
                    </div>

                    <div className="flex-container">
                        <img alt={"megaphone"} src={require("../../assets/Bilder/megaphone.svg").default} />
                        <div className="text-container">
                            <h3>Marketing</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi vero, facilis quas, in dolor labore, quo blanditiis sed mollitia explicabo atque consectetur quam magni repellat perspiciatis fuga cumque dolores hic.</p>
                        </div>
                    </div>

                </article>
                <article>
                    <div className="flex-container">
                        <img alt={"object-select"} src={require("../../assets/Bilder/object-select.svg").default} />
                        <div className="text-container">
                            <h3>Illustration</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi vero, facilis quas, in dolor labore, quo blanditiis sed mollitia explicabo atque consectetur quam magni repellat perspiciatis fuga cumque dolores hic.</p>
                        </div>
                    </div>
                    <div className="flex-container">
                        <img alt={"globe"} src={require("../../assets/Bilder/globe-line.svg").default} />
                        <div className="text-container">
                            <h3>Web Design</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi vero, facilis quas, in dolor labore, quo blanditiis sed mollitia explicabo atque consectetur quam magni repellat perspiciatis fuga cumque dolores hic.</p>
                        </div>
                    </div>
                </article>
            </section>
        </main>

    );
}

export default Firstsection;