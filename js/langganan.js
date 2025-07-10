  function generateTicketNumber() {
    const random = Math.floor(10000 + Math.random() * 90000);
    return "SN" + random;
  }

  $('#paket .btn-custom').click(function () {
    const paket = $(this).data('paket');
    $('#paketDipilih').val(paket);
    $('#nomorTiket').val(generateTicketNumber());
  });

  $('#formBerlangganan').submit(function (e) {
    e.preventDefault();
    const nama = $('#nama').val();
    const alamat = $('#alamat').val();
    const paket = $('#paketDipilih').val();
    const tiket = $('#nomorTiket').val();
	const patokan = $('#patokan').val();


    const pesan = `*REGISTRASI LANGGANAN BARU*\n\nNomor Tiket : ${tiket}${paket}\nNama Lengkap : ${nama}\nAlamat Lengkap : ${alamat}, ${patokan}\n\n_©2025 Starry Net_. All Rights Reserved.`;
    const noWa = '6285977370778'; 
    const linkWa = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`;
    
    window.open(linkWa, '_blank');
  });
