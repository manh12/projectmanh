import swal from "sweetalert";

export default class alert  {
    static warning(message = "Vui lòng kiểm tra thông tin !") {
        swal({
            title: "Có lỗi xảy ra !",
            text: message,
            icon: "warning",
            buttons: {
                cancel: true,
                text: "Tiếp tục"
            },
            dangerMode: true
        });
    }
    static success(response) {
        swal({
            title: response.data.message,
            icon: "success",
            buttons: {
                cancel: true,
                text: "Tiếp tục"
            },
            dangerMode: true
        });
    }

}
