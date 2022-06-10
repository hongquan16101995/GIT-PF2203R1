let product1 = new Product("Sony Xperia", 10000000, "Sony", "Đẹp")
let product2 = new Product("Samsung Galaxy", 30000000, "Samsung", "Đẹp")
let product3 = new Product("Nokia 6", 20000000, "Nokia", "Đẹp")
let product4 = new Product("Iphone 11 Pro Max", 40000000, "Apple", "Đẹp")
let products = [product1, product2, product3, product4]

function render() {
    let data = "<table>"
    data += "<tr><td><b>STT</b></td><td><b>Product Name</b></td><td><b>Product Price</b></td>" +
    "<td><b>Product Brand</b></td><td><b>Product Description</b></td><td></td>" +
    "<td><b id='red'>"+ products.length +" products</b></td></tr>"
    for(let i = 0; i < products.length; i++) {
        data += "<tr>"
        data += "<td>" + (i + 1) + "</td>"
        data += "<td>" + products[i].name + "</td>"
        data += "<td>" + products[i].price + "</td>"
        data += "<td>" + products[i].brand + "</td>"
        data += "<td>" + products[i].description + "</td>"
        data += "<td><button onclick='editProduct("+i+")'>Edit</button></td>"
        data += "<td><button onclick='deleteProduct("+i+")'>Delete</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("data").innerHTML = data
}

function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm có tên: " +  products[index].name + " ?")) {
         products.splice(index, 1)
    }
    render()
}

// //edit với hàm prompt
// function editProduct(index) {
//     let updateProduct = prompt("Cập nhật sản phẩm có tên " + products[index] + " :")
//     products[index] = updateProduct
//     render()
// }

let indexEdit;
//edit với ô input
function editProduct(index) {
    indexEdit = index
    document.getElementById("name").value = products[index].name
    document.getElementById("price").value = products[index].price
    document.getElementById("brand").value = products[index].brand
    document.getElementById("description").value = products[index].description
    document.getElementById("add").value = "Edit"
    document.getElementById("add").setAttribute("onclick", "changeValueProductEdit()")
}

function changeValueProductEdit() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let brand = document.getElementById("brand").value
    let description = document.getElementById("description").value
    let product = new Product(name, price, brand, description)
    products[indexEdit] = product
    document.getElementById("add").value = "Add"
    document.getElementById("add").setAttribute("onclick", "addProduct()")
    render()
}

function addProduct(){
        let name = document.getElementById("name").value
        let price = document.getElementById("price").value
        let brand = document.getElementById("brand").value
        let description = document.getElementById("description").value
        let product = new Product(name, price, brand, description)
        products.push(product)
        render()
    }

render()

// //lưu object trong localStorage
// localStorage.setItem("product", JSON.stringify(product1))
// let a = JSON.parse(localStorage.getItem("product"))