@extends('temp.path1.template')
@section('content')
<div class="contact-us">
        <img src=" {{ url('_temp/path/assets/images/section-contact.jpg') }}">
        <div class="centered breadcrumbs">
            <h1>Liên hệ</h1>
        <p><a href="{{ url('/') }}">Trang chủ </a> > <a href="#">Liên Hệ</a></p>
        </div>
    </div>
<div class="bl-contact">
        <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="contact-info">
                            <div class="info-us">
                                <h2><i class="fa fa-info"></i>Thông tin liên hệ</h2>
                                <p>
                                    <strong>Trung tâm Corenacca&nbsp;</strong>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                </p>
                            </div>
                            <div class="service-center">
                                <h3>Trụ sở chính</h3>
                                <p class="address"><i class="fa fa-home"></i>260, Đông Phát, phường Đông Vệ thành phố Thanh Hóa, tỉnh Thanh Hóa</p>
                                <p class="phone"><i class="fa fa-phone"></i>+84373 748 377</p>
                            </div>
                            <div class="branch-center">
                                <h3>Chi nhánh</h3>
                                <p class="address"><i class="fa fa-home"></i>260, Đông Phát, phường Đông Vệ thành phố Thanh Hóa, tỉnh Thanh Hóa</p>
                                <p class="phone"><i class="fa fa-phone"></i>+84373 748 377</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="contact-send">
                            <h2><i class="fa fa-send-o"></i>Gửi thông tin</h2>
                            <form method="" action="" class="">
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Họ và tên" type="text" required>
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Địa chỉ email" type="email" required>
                                    </div>
                                    <div class="col-sm-12 form-group">
                                        <input class="form-control" id="phone" name="email" placeholder="Số điện thoại" type="email" required>
                                    </div>
                                    <div class="col-sm-12 form-group">
                                        <input class="form-control" id="address" name="email" placeholder="Địa chỉ" type="email" required>
                                    </div>
                                </div>
                                <textarea class="form-control" id="comments" name="comments" placeholder="Nội dung tin nhắn" rows="5" height="auto"></textarea>
                                <button class="contact-submit" type="submit">Gửi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
</div>


@endsection
