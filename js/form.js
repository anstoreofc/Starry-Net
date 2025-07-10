function member() {
    document.getElementById("username").setAttribute("placeholder", "Nama Lengkap");
    document.getElementById("password").setAttribute("placeholder", "Nomor Telepon");

document.getElementById("inputPaket").style.display = "none";
    document.getElementById("paketText").value = ""; 

    document.getElementById("member").innerHTML = `
        <div class="btn-group">
            <button type="button" onclick="registMember()" class="btn btn-primary"><i class="ion ion-person-add"></i> REGISTRASI MEMBER</button>
        </div>`;
    document.getElementById("member").style.display = "block";
    document.getElementById("voucher").style.display = "none";
}


function voucher() {
    document.getElementById("username").setAttribute("placeholder", "Nama Lengkap");
    document.getElementById("password").setAttribute("placeholder", "Nomor Telepon");

document.getElementById("inputPaket").style.display = "table";

    document.getElementById("voucher").innerHTML = `
        <div class="btn-group">
            <button type="button" onclick="voucherWa()" class="btn btn-primary"><i class="ion ion-chatbox-working"></i> BELI VOUCHER</button>
        </div>`;
    document.getElementById("voucher").style.display = "block";
    document.getElementById("member").style.display = "none";
}


function registMember() {
    const nama = document.getElementById("username").value.trim();
    const telp = document.getElementById("password").value.trim();

    if (!nama || !telp) {
        alert("Nama dan Nomor Telepon wajib diisi!");
        return;
    }

    const pesan = `*REGISTRASI MEMBER BARU*\n\nNama Lengkap : ${nama}\nNomor Telepon : ${telp}\n\n_©2025 Starry Net_. All Rights Reserved.`;
    const noWa = '6285977370778';
    window.open(`https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`, '_blank');
}

function voucherWa() {
    const nama = document.getElementById("username").value.trim();
    const telp = document.getElementById("password").value.trim();
    const paket = document.getElementById("paketText").value.trim();

    if (!nama || !telp || !paket) {
        alert("Nama, Nomor Telepon, dan Paket wajib diisi!");
        return;
    }
    const pesan = `*PEMBELIAN VOUCHER BARU*\n\nNama Lengkap : ${nama}\nNomor Telepon : ${telp}\nPaket : ${paket}\n\n_©2025 Starry Net_. All Rights Reserved.`;
    const noWa = '6285977370778';
    window.open(`https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`, '_blank');
}
