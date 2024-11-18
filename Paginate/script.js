document.addEventListener('DOMContentLoaded', function () {
  // Dữ liệu sản phẩm hardcoded (có hình ảnh và thông tin giá)
  const products = [
      { name: "Sản phẩm 1", price: "100,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 2", price: "200,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 3", price: "150,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 4", price: "300,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 5", price: "250,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 6", price: "120,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 7", price: "180,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 8", price: "220,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 9", price: "350,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 10", price: "90,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 11", price: "400,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 12", price: "500,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 13", price: "600,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 14", price: "700,000 VND", img: "https://via.placeholder.com/220x150" },
      { name: "Sản phẩm 15", price: "800,000 VND", img: "https://via.placeholder.com/220x150" }
  ];

  // Các biến để theo dõi trang hiện tại và số sản phẩm mỗi trang
  let currentPage = 1;
  const productsPerPage = [4, 4, 4]; // Trang 1 và 2 có 4 sản phẩm, trang 3 có 2 sản phẩm

// Hàm hiển thị sản phẩm theo trang
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Xóa danh sách cũ trước khi vẽ lại

    const startIndex = (currentPage - 1) * productsPerPage[0];  // Lấy phần tử bắt đầu theo trang
    const endIndex = startIndex + productsPerPage[currentPage - 1];  // Lấy phần tử kết thúc

    const productsToDisplay = products.slice(startIndex, endIndex);  // Cắt mảng sản phẩm từ startIndex đến endIndex
    
    // Thêm từng sản phẩm vào danh sách hiển thị
    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price}</div>
        `;
        productList.appendChild(productElement);
    });
}


  // Hàm cập nhật trạng thái của các nút phân trang
  function updatePagination() {
      document.querySelectorAll('.page-btn').forEach(button => {
          button.classList.remove('active');
      });
      document.getElementById(`page-${currentPage}`).classList.add('active');
  }

  // Sự kiện khi bấm vào các nút phân trang
  document.getElementById('first-page').addEventListener('click', () => {
      currentPage = 1;
      renderProducts();
      updatePagination();
  });

  document.getElementById('prev-page').addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          renderProducts();
          updatePagination();
      }
  });

  document.getElementById('next-page').addEventListener('click', () => {
      if (currentPage < productsPerPage.length) {
          currentPage++;
          renderProducts();
          updatePagination();
      }
  });

  document.getElementById('last-page').addEventListener('click', () => {
      currentPage = productsPerPage.length;
      renderProducts();
      updatePagination();
  });

  // Sự kiện khi bấm vào số trang cụ thể
  document.querySelectorAll('.page-btn').forEach(button => {
      button.addEventListener('click', (event) => {
          const page = parseInt(event.target.id.replace('page-', ''));
          if (page !== currentPage) {
              currentPage = page;
              renderProducts();
              updatePagination();
          }
      });
  });

  // Gọi hàm để hiển thị trang đầu tiên khi load trang
  renderProducts();
  updatePagination();
});
