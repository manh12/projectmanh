<!DOCTYPE html>
<html lang="{{ app()->getLocale('en') }}">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>app|học tập</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href=" {{ asset('_admin/bower_components/bootstrap/dist/css/bootstrap.min.css')}} " />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('_admin/bower_components/font-awesome/css/font-awesome.min.css')}}" />
    <link rel="stylesheet" href="{{ asset('_admin/dist/css/AdminLTE.min.css')}}" />
    <link rel="stylesheet" href="{{ asset('_admin/dist/css/skins/skin-blue-light.min.css')}}" />
    <link href="{{ asset('css/app.css')}}">
    <!-- Google Font -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic" />
    {{-- css --}}
    <style>
        .sub-main {
            padding-left:20px;
        }
        .pr-1{
            padding-right: 3px;
        }
        .box-menu {
            border-top:none;
            margin-bottom: none;
            box-shadow: none;
        }

    </style>


</head>

<body class="hold-transition skin-blue-light sidebar-mini">
<div id="root">

</div>
<!-- ./wrapper -->

<!-- jQuery 3 -->
<script src=" {{ asset('_admin/bower_components/jquery/dist/jquery.min.js')}}"></script>
<!-- Bootstrap 3.3.7 -->
<script src="{{ asset('_admin/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<!-- FastClick -->
<script src="{{ asset('_admin/bower_components/fastclick/lib/fastclick.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('_admin/dist/js/adminlte.min.js')}}"></script>
<!-- Sparkline -->
<script src="{{ asset('_admin/bower_components/jquery-slimscroll/jquery.slimscroll.min.js')}}"></script>
<script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
