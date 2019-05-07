import React,{Component} from "react";
import AddUser from "./components/AddUser";
import ListUser from "./components/ListUser";
import {connect} from "react-redux";

class MainUser extends Component{
    render() {
        return(
          <div>
              <AddUser/>
              <ListUser/>
          </div>
        );
    }
}
export default MainUser;
