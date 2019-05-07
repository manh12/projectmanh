@extends('temp.path1.template')
@section('content')
<!-- Headding -->

<div class="bl-task d-none d-sm-block">
    <div class="container">
        <ul>
            <li><a href="#">Công Nghệ Mới</a></li>
            <li>
                <a href="#">Bài Học</a>
            </li>
            <li><a href="#">Đăng Bài Viết</a></li>
        </ul>
    </div>
</div>
<!-- /bl-task -->
<div class="bl-slider">
    <div class="owl-carousel owl-theme" id="slider-main">

        <div class="item ">
            <div class="img-slider">
                <img class="d-block w-100" src="" alt="First slide" />
            </div>

            <div class="box-slider">
                <div class="container">
                    <h3>tit</h3>
                    <p>
                      fdgdfg
                    </p>
                    <a href="" class="btn btn-primary border-2 d-none d-sm-inline-block">DONATE</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /bl-slider -->
<div class="bl-intro">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-sm-6 col-12">
                <div class="img-intro">
                    <img src="{{ url('_temp/path/assets/images/meo.jpg')}}" alt="" />
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-sm-6 col-12">
                <div class="text-intro">
                    <h2>Tri Thức Là Sức Mạnh</h2>
                    <p>
                        Nếu ai đã từng nghe đến khi báu của vua Salomon thì đều biết kho báu đó chính là sách và tri thức.
                        Phải chăng vì thế mà Salomon trở thành vị vua thông thái nhất mọi thời đại, khiến hậu thế đều phải kính cẩn cúi đầu?
                        “ Tri thức là sức mạnh” là một lời khẳng định cũng là chân lý vĩnh hằng ngày càng được kiểm chứng chắc chắn theo thời gian
                    </p>
                    <br />
                    <p>
                        Con người mạnh mẽ hơn các loài vật khác là bởi con người có trí tuệ.
                        trí tuệ của con người được bồi dưỡng bởi tri thức. không có tri thức,
                        trí tuệ con người không còn sức mạnh gì nữa.
                        Bởi thế, bàn về vai trò của tri thức,Lê-nin đã tùng nói: “Tri thức là sức mạnh.
                        Ai có tri thức thì người đó có được sức mạnh”.
                    </p>
                    <div class="flex-row pt-3">
                        <ul>
                            <li>
                                <i class="icon_01"></i>
                                <span class="timer" data-from="25" data-to="2375" data-refresh-interval="1"></span>
                                <p>Donation</p>
                            </li>
                            <li>
                                <i class="icon_02"></i>
                                <span class="timer" data-from="25" data-to="2375" data-refresh-interval="1"></span>
                                <p>Helped People</p>
                            </li>
                            <li>
                                <i class="icon_03"></i>
                                <span class="timer" data-from="25" data-to="2375" data-refresh-interval="50"></span>
                                <p>Volunteers</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /bl-intro -->
<div class="bl-project">
    <div class="container">
        <div class="title-content">
            <h3>Nhiệt Huyết và Đam mê</h3>
            <p>
                Dành cả trái tim và sự nhiệt huyết của mình một cách chân thành và tận tụy với đam mê
            </p>
        </div>

        <div class="row">

            <div class="col-xl-4 col-lg-4 col-sm-6 col-12">
                <div class="box-project">
                    <div class="img-box">
                        <a href=""><img src=""
                                alt="" /></a>
                    </div>
                    <div class="title-box">
                        <h4>
                            <a href=""></a>
                        </h4>
                    </div>
                    <div class="text-box">
                        <p>

                        </p>
                    </div>
                    <div class="ft-box"><a href="">Đọc thêm</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /bl-preson -->
<div class="bl-news">
    <div class="container">
        <div class="title-news"><span>tin tức</span></div>
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-sm-12 col-12">
                <div class="news-first">
                    <a href="">
                            <img src="" alt="" />
                    </a>

                    <div class="news-title">
                    <a href=""></a>
                    </div>
                    <div class="news-time">
                        <ul>
                            <li><i class="fa fa-calendar"></i></li>
                            <li><i class="fa fa-user"> </i> manh</li>
                        </ul>
                    </div>
                    <div class="news-text">
                        <p>

                        </p>
                    </div>
                    <div class="news-footer">
                        <i class="fa fa-arrow-circle-o-right fa-lg primary" aria-hidden="true"></i>
                        <a href=""> Chi tiết </a>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-sm-12 col-12">
                <div class="list-news">
                    <ul>

                        <li>
                            <div class="item-news">
                                <div class="item-time">
                                    <span></span>
                                    <p>Tháng</p>
                                </div>
                                <div class="item-title">
                                <a href=""></a>
                                    <i> Tác giả : admin </i>
                                </div>
                            </div>
                        </li>
                        <!-- /detail-list -->

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
