import '../FunctionalComponents/home.css'
var Home = ()=>{
    var styling = {
        fontSize:"30px",
        color:"red",
    }

    return(
        <header>
            <p className="box-model">Kongu Clothings</p>
            <h2 style = {styling}>To look unique and beautiful!</h2>
            <h2 id="para">To the world of prettiest cloths!</h2>
            <h1>Welcome all :)</h1>
        </header>
        
    );
}
export default Home;