import "./ProductSection.css";

function ProductSection() {
    return (
        <section className="productGrid">
            <article className="productCard">
                <img alt={"Salat"} src={require("../../assets/Bilder/salat.jpeg").default} />
                <h2 className="productName">Salat - mit allem</h2>
                <p className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?.</p>
                <p className="productPrice">$45 / $55</p>
            </article>
            <article className="productCard">
                <img alt={"Pizza"} src={require("../../assets/Bilder/pizza.jpeg").default} />
                <h2 className="productName">Pizza - mit allem</h2>
                <p className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?.</p>
                <p className="productPrice">$45 / $55</p>
            </article>
            <article className="productCard">
                <img alt={"Frikadellen"} src={require("../../assets/Bilder/frikadellen.jpeg").default} />
                <h2 className="productName">Frikadellen - mit allem</h2>
                <p className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?.</p>
                <p className="productPrice">$45 / $55</p>
            </article>
            <article className="productCard">
                <img alt={"Getränk"} src={require("../../assets/Bilder/glass.jpeg").default} />
                <h2 className="productName">Gin Tonic - mit allem</h2>
                <p className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?.</p>
                <p className="productPrice">$45 / $55</p>
            </article>
            <article className="productCard">
                <img alt={"Pizza mit Salami"} src={require("../../assets/Bilder/pizza2.jpeg").default} />
                <h2 className="productName">Salami Pizza - mit allem</h2>
                <p className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?.</p>
                <p className="productPrice">$45 / $55</p>
            </article>
            <article className="productCard">
                <img alt={"Scampi"} src={require("../../assets/Bilder/scampi.jpeg").default} />
                <h2 className="productName">Scampi - mit allem</h2>
                <p className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?.</p>
                <p className="productPrice">$45 / $55</p>
            </article>
            <article className="productCard">
                <img alt={"Spagetthi"} src={require("../../assets/Bilder/spagetthi.jpeg").default} />
                <h2 className="productName">Spagetthi - mit allem</h2>
                <p className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?.</p>
                <p className="productPrice">$45 / $55</p>
            </article>
            <article className="productCard">
                <img alt={"Teller"} src={require("../../assets/Bilder/teller.jpeg").default} />
                <h2 className="productName">Gericht - mit allem</h2>
                <p className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nihil?.</p>
                <p className="productPrice">$45 / $55</p>
            </article>
        </section>
    );
}

export default ProductSection;