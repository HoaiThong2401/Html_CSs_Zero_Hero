// Mở Modal khi nhấn nút
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('ticketModal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Đóng Modal khi nhấn nút "x"
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Đóng Modal khi nhấn bên ngoài modal
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
