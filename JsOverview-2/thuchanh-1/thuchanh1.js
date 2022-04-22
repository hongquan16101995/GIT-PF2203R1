function showMessage() {
    // alert('Xin chào!')
    let demoConfirm = confirm("Đây là confirm?")
    if (demoConfirm === true) {
        alert("giá trị của confirm là true")
    } else {
        alert("giá trị của confirm là false")
    }
}