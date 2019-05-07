@extends('temp.path1.template')
@section('title')

@section('content')
<div class="contact-us">
    <img src=" {{ url('_temp/path/assets/images/section-contact.jpg') }}">
    <div class="centered breadcrumbs">
    <p><a href="{{ url('/')}}">Trang chủ</a>/ </p>
    </div>
</div>
<div class="bl-detail">
    <div class="container">
        <div class="row">
            <!--Start Content Left-->
            <div class="col-md-8 col-sm-12" id="page-details">
                <article class="single-post">
                    <div class="entry-header">
                        <div class="single-thumb">
                            <img src="" class="post-thumb">
                        </div>
                        <h1 class="single-post-title">ghghfghh</h1>
                        <div class="entry-meta">
                            <div class="tp-meta">
                                <span class="tp-meta-date"><i class="fa fa-calendar"></i>30/11/2018</span>
                                <span class="tp-meta-author"><i class="fa fa-folder"></i> <a href="">
                                       hgfhfgh</a> </span>
                            </div>
                        </div>
                    </div>
                    <div class="entry-content">
                        <p>

                        </p>
                    </div>
                </article>
                <!--Start Relate post-->


                <div class="relate-post">
                    <h2 class="title"><i class="fa fa-file-text" aria-hidden="true"></i> Bài viết liên quan</h2>
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="relate-grid">
                                <div class="relate-thumb">
                                    <a href="">
                                        <img src="">
                                    </a>
                                </div>
                                <div class="relate-content">
                                    <a href="">
                                        <h4>hghfgh</h4>
                                    </a>
                                    <p class="relate-short-content">fghfghfgh</p>
                                    <div class="ft-box">

                                        <a href=""> Đọc thêm</a>
                                        <i class="fa fa-arrow fa-lg primary" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End Relate Post-->
            </div>
            <!--End Content left-->
            <!--Start Siderbar right-->
            <div class="col-md-4 col-sm-12" id="sidebar-page">
                <div class="sidebar">
                    <!--Start New Search-->
                    @include('temp.path1.common.wiget_search')
                    <!--End New Search-->
                    <!--Start New Project-->
                    @include('temp.path1.common.wiget_category')
                    <!--End New Project-->
                    <!--Start New Project-->
                    @include('temp.path1.common.wiget_new_project')
                    <!--End New Project-->
                    <!--Start News-->
                    @include('temp.path1.common.wiget_new_post')
                    <!--End News-->
                    <!--Start Library-->
                    @include('temp.path1.common.wiget_library')
                    <!--End Library-->
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
