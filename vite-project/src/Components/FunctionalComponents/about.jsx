import '../FunctionalComponents/about.css';
const About = (props) =>{
    return (
        <div>
            <section>
                <h1 id="style">About us</h1>
                <p>This is our new shop.</p>
                <p>We have all types of dresses.</p>
                <p>Shop name : {props.Shop}</p>
                <p>Fantastic offer : {props.Dis1}, {props.Dis2}</p>
            </section>
        </div>
        
    );
}
export default About;