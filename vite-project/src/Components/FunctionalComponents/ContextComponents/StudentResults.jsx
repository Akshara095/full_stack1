import {ThemeProvider} from "../usecontext";
import { useContext } from "react";
var StudentResults = ()=>{
    var result = useContext(ThemeProvider);
    return (
        <section>
            <h3>CGPA result is {result.cgpa} and SGPA result is {result.sgpa}</h3>
        </section>
    )
}
export default StudentResults;