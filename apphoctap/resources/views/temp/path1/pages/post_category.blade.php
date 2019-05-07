@extends('temp.path1.template')
@section('content')
<div class="contact-us">
    <img src="{{ url('_temp/path/assets/images/section-contact.jpg')}}">
    <div class="centered breadcrumbs">
        <h1>category</h1>
        <p><a href="#">Home</a> > <a href="#">Liên Hệ</a></p>
    </div>
</div>
<div class="bl-category-post">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-12" id="page-details">
                <div class="fgc-blog-single">



                    <div class="blog-single-list">
                        <div class="blog-thumb">
                            <img src="">
                        </div>
                        <div class="blog-content">
                            <h3 class="blog-title"><a href="#"></a></h3>
                            <div class="meta">
                                <span class="meta-date"><i class="fa fa-calendar"></i>30/11/2018</span>
                                <span class="meta-author"><i class="fa fa-user"></i>admin</span>
                            </div>
                            <p class="short-content">


                            </p>
                            <a class="read-more" href="3">Xem thêm</a>
                        </div>
                    </div>

                </div>
            </div>
            <!--Start Siderbar right-->
            <div class="col-md-4 col-sm-12" id="sidebar-page">
                <div class="sidebar">
                    <!--Start New Search-->
                    @include('temp.path1.common.wiget_search')
                    <!--End New Search-->
                    <!--Start New Project-->
                    @include('temp.path1.common.wiget_new_project')
                    <!--End New Project-->
                    <!--Start News-->
                    @include('temp.path1.common.wiget_new_post')
                    <!--End News-->
                    <!--Start Tag-->
                    @include('temp.path1.common.wiget_tag')
                    <!--End Tag-->
                </div>
            </div>
            <!--End Siderbar Right-->
        </div>
    </div>
</div>
@endsection
