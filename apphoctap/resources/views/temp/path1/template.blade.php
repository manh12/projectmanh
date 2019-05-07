<!DOCTYPE html>
<html lang="vi">
<head>
    @include('temp.path1.inc.head');
</head>
<body>
<div id="wrapper">
    @include('temp.path1.inc.header')
    <main>
        @yield('content')
    </main>
    @include('temp.path1.inc.footer')
</div>
<!-- /wrapper -->
@include('temp.path1.inc.script')
</body>
</html>
