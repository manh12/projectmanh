import React,{Component} from "react";
import { Link } from "react-router-dom";
import ItemListPage from "./components/items/ItemListPage";
import {connect} from "react-redux";
import {fetchPageRequest,loadPagiPage} from "./execut/action";
import Pagination from "react-js-pagination";
class MainPage extends Component{
    constructor(props){
        super(props);
         this.onChagePagi = this.onChagePagi.bind(this);
    }
    componentDidMount() {
        this.props.getAllPage();
    }
onChagePagi(e){
        this.props.pagi(e);
}
    render() {
        const pre_page = this.props.pagination.per_page;
        const total = this.props.pagination.total;
        const current_page = this.props.pagination.current_page;
        const display_page = Math.ceil(total / pre_page);
        const { pages } = this.props;
        return(

          <div>
              <div className="row">
                  <div className="col-xs-12">
                      <div className="box box-primary">
                          <div className="box-header">
                              <Link to="/panel/page" className="btn btn-primary" >
                                  <i className="fa fa-file-text-o" aria-hidden="true" /> Tạo trang tĩnh
                              </Link>
                              <div className="box-tools">
                                  <Pagination
                                      hideDisabled
                                      hideNavigation
                                      activeClass={""}
                                      innerClass={
                                          "pagination pagination-sm no-margin pull-right"
                                      }
                                      itemsCountPerPage={pre_page}
                                      activePage={current_page}
                                      totalItemsCount={total}
                                      pageRangeDisplayed={display_page}
                                      onChange={this.onChangePagi}
                                  />
                              </div>
                          </div>
                          <div className="box-body table-responsive no-padding">
                              <table className="table table-hover ">
                                  <tbody>
                                  <tr>
                                      <th className="col-lg-1">
                                          STT
                                      </th>
                                      <th className="col-lg-2">
                                          Ảnh đại diện
                                      </th>
                                      <th className="col-lg-2 ">
                                          Ảnh bìa
                                      </th>
                                      <th className="col-md-4 ">
                                          Thông tin
                                      </th>

                                      <th className="col-md-1 ">
                                          Trạng thái
                                      </th>
                                      <th className="col-md-2 ">
                                          Thao tác
                                      </th>
                                  </tr>
                                  {pages.map((page, index) => {
                                      return <ItemListPage page={page} key={index} />;
                                  })}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
const mapStateToProps=(state,props)=>{
    return{
        pages:state.pages.pages,
        pagination:state.pages.pagination
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return{
        getAllPage:()=>{
            dispatch(fetchPageRequest());
        },
        pagi:(num)=>{
            dispatch(loadPagiPage(num));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
