import React,{Component} from "react";
import AddSlide from "./components/AddSlide";
import ListSlider from "./components/ListSlider";
class MainSlide extends Component{
    render() {
        return(
         <div>
             <AddSlide/>
             <ListSlider/>
         </div>
        );
    }
}
export default MainSlide;
