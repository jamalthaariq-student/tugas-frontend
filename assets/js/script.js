// 1. Dataset Awal Produk UMKM
let produkDataset = [
    { id: 1, name: "Keripik Pisang", category: "Camilan", price: 15000, stock: 10 },
    { id: 2, name: "Nasi Goreng", category: "Makanan", price: 20000, stock: 20 },
    { id: 3, name: "Nasi Kuning", category: "Makanan", price: 15000, stock: 30 },
    { id: 4, name: "Es Teh", category: "Minuman", price: 5000, stock: 15 },
    { id: 5, name: "Es Jeruk", category: "Minuman", price: 7000, stock: 25 },
    { id: 6, name: "Kue Lumpur", category: "Camilan", price: 10000, stock: 50 },
    { id: 7, name: "Kue Kering", category: "Camilan", price: 25000, stock: 40 },
    { id: 8, name: "Ayam Bakar", category: "Makanan", price: 25000, stock: 12 },
];

// Helper Function untuk format Rupiah menggunakan Template Literals
const formatRupiah = (angka) => `Rp${angka.toLocaleString("id-ID")}`;

// Fungsi untuk menampilkan Banner Notifikasi (Feedback Visual tanpa alert())
function showNotification(message, type) {
    const notif = document.getElementById("notification");
    notif.textContent = message;
    notif.className = ""; // Reset kelas
    
    if (type === "success") {
        notif.classList.add("alert-success");
    } else {
        notif.classList.add("alert-error");
    }

    notif.style.display = "block";

    // Otomatis menghilangkan notifikasi setelah 3.5 detik
    setTimeout(() => {
        notif.style.display = "none";
    }, 3500);
}

// Fungsi untuk merender/memperbarui isi Tabel dan Total Nilai Stok
function renderTable() {
    const tbody = document.querySelector("#productTable tbody");
    tbody.innerHTML = ""; 

    let totalNilaiStokKeseluruhan = 0;

    produkDataset.forEach((p) => {
        const nilaiStokProduk = p.price * p.stock;
        totalNilaiStokKeseluruhan += nilaiStokProduk;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${p.id}</td>
            <td><strong>${p.name}</strong></td>
            <td>${p.category}</td>
            <td>${formatRupiah(p.price)}</td>
            <td>${p.stock}</td>
            <td>${formatRupiah(nilaiStokProduk)}</td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById("totalNilaiStokBox").textContent = 
        `Total Nilai Stok Keseluruhan: ${formatRupiah(totalNilaiStokKeseluruhan)}`;
}

// 2. Event Handling 'input' dan 'change' untuk Live Preview Data
const inputName = document.getElementById("name");
const inputCategory = document.getElementById("category");
const inputPrice = document.getElementById("price");
const inputStock = document.getElementById("stock");

function updateLivePreview() {
    const nameVal = inputName.value.trim();
    const categoryVal = inputCategory.value;
    const priceVal = parseFloat(inputPrice.value) || 0;
    const stockVal = parseInt(inputStock.value) || 0;

    document.getElementById("previewName").textContent = nameVal || "-";
    document.getElementById("previewCategory").textContent = categoryVal || "-";
    document.getElementById("previewPrice").textContent = formatRupiah(priceVal);
    document.getElementById("previewStock").textContent = stockVal;
    
    const estTotal = priceVal * stockVal;
    document.getElementById("previewTotal").textContent = formatRupiah(estTotal);
}

// Menerapkan event listener live preview pada masing-masing elemen input
inputName.addEventListener("input", updateLivePreview);
inputCategory.addEventListener("change", updateLivePreview);
inputPrice.addEventListener("input", updateLivePreview);
inputStock.addEventListener("input", updateLivePreview);


// 3. Event Handling 'submit' pada Form
document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = inputName.value.trim();
    const category = inputCategory.value;
    const priceVal = inputPrice.value;
    const stockVal = inputStock.value;

    // Validasi Error: Cek jika ada kolom yang kosong
    if (!name || !category || priceVal === "" || stockVal === "") {
        showNotification("Error: Semua kolom pada form wajib diisi!", "error");
        return;
    }

    const price = parseFloat(priceVal);
    const stock = parseInt(stockVal);

    // Validasi Error: Cek nilai minus
    if (price < 0 || stock < 0) {
        showNotification("Error: Harga dan stok tidak boleh bernilai negatif!", "error");
        return;
    }

    // Buat ID baru otomatis
    const newId = produkDataset.length > 0 ? produkDataset[produkDataset.length - 1].id + 1 : 1;

    const newProduct = {
        id: newId,
        name: name,
        category: category,
        price: price,
        stock: stock
    };

    // Masukkan ke dataset
    produkDataset.push(newProduct);

    // Notifikasi Sukses menggunakan Template Literals (Feedback Visual)
    showNotification(`Sukses: Produk "${name}" berhasil ditambahkan ke dataset!`, "success");

    // Render ulang tabel & reset form serta bersihkan live preview
    renderTable();
    this.reset();
    updateLivePreview();
});

// Panggil render pertama kali
renderTable();