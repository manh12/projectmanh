import React, { Component } from "react";
import Logo from "../Assets/images/avatar.png";
import {Link} from "react-router-dom";
class Aside extends Component {

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src={Logo} className="img-circle" alt="PTC" />
                        </div>
                        <div className="pull-left info">
                            <p>Admintrator</p>
                            <a href="#">
                                <i className="fa fa-circle text-success" /> Trực
                                tuyến
                            </a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input
                                type="text"
                                name="q"
                                className="form-control"
                                placeholder="Tìm kiếm..."
                            />
                            <span className="input-group-btn">
                                <button
                                    type="submit"
                                    name="search"
                                    id="search-btn"
                                    className="btn btn-flat"
                                >
                                    <i className="fa fa-search" />
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li>
                            <a href="">
                                <i className="fa fa-dashboard" />
                                <span>Bảng điều khiển</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a>
                                <i className="fa fa-cogs" />
                                <span>Cài đặt</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>

                            <ul className="treeview-menu">
                                <li>
                                   <Link to="/panel/user">
                                       <i className="fa fa-users" /> Thành viên
                                   </Link>
                                </li>
                                <li>
                                    <Link to="/panel/slider">
                                        <i className="fa fa-sliders" />{" "}
                                        <span>Slider</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-bars" />{" "}
                                        <span>Menu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-adjust" />
                                        <span>cấu hình</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li >
                            <a href="">
                                <i className="fa fa-folder-o" />
                                <span>Chuyên mục</span>
                                <span className="pull-right-container" />
                            </a>
                        </li>
                        <li>
                            <Link to="/panel/main-page">
                                <i
                                    className="fa fa-file-o"
                                    aria-hidden="true"
                                />
                                <span>Trang tĩnh</span>
                                <span className="pull-right-container" />
                            </Link>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-edit"/>{" "}
                                <span>Bài viết mới</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li>
                                    <a href="">
                                        <i className="fa fa-circle-o" /> Thêm
                                        bài viết
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-circle-o" /> Danh
                                        sách
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Aside;
