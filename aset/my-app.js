var app = new Framework7({
  el: '#app',
  name: 'My App',
  id: 'com.myapp.test',
  panel: {
    swipe: true,
  },

  view: {
    stackPages: true,
  },

  routes: [
    {
      path: '/mapel/',
      pageName: 'mapel',
    },
    {
      path: '/home/',
      pageName: 'home',
    },
    {
      path: '/update/',
      pageName: 'update',
    },
  ],
});

var mainView = app.views.create('.view-main');
var $$ = Dom7;
lihat();

$$('#tambah').click(function () {
  var kode = $$('#kode_mapel').val();
  var nama = $$('#nama_mapel').val();
  app.request({
    url: 'http://localhost/CRUD_PEMROGRAMAN_MOBILE/tambah.php',
    type: 'POST',
    data: {
      kode: kode,
      nama: nama,
    },
    success: function (data) {
      app.dialog.alert('Berhasil Tambah Jadwal');
      $$('#kode_mapel').val('');
      $$('#nama_mapel').val('');
    },
  });
});

function lihat() {
  app.request.json('http://localhost/CRUD_PEMROGRAMAN_MOBILE/lihat.php', function (data) {
    var jlh = data.length;
    var i = '';
    console.log(data);
    var buatTabel = '';
    for (i = 0; i < jlh; i++) {
      buatTabel +=
        '<tr>' +
        '<td>' +
        (i + 1) +
        '</td>' +
        '<td>' +
        data[i].kd_mapel +
        '</td>' +
        '<td>' +
        data[i].nama_mapel +
        '</td> ' +
        "<td><a href='#' id='update' data-id='" +
        data[i].id_mapel +
        "'>Update</a>&nbsp|<a href='#' id='hapus' data-id='" +
        data[i].id_mapel +
        "'>Delete</a><td>" +
        '</tr>';
    }
    $$('#tampil').html(buatTabel);
  });
}

$$('#tampil').on('click', '#hapus', function () {
  var id = $$(this).data('id');
  app.request.post(
    'http://localhost/CRUD_PEMROGRAMAN_MOBILE/hapus.php',
    {
      id: id,
    },
    function (data) {
      app.dialog.alert('Berhasil dihapus!');
      app.views.main.router.navigate('/home/');
      lihat();
    }
  );
});

$$('#tampil').on('click', '#update', function () {
  app.views.main.router.navigate('/update/');
  var id = $$(this).data('id');
  app.request.json(
    'http://localhost/CRUD_PEMROGRAMAN_MOBILE/get_mapel.php',
    {
      id: id,
    },
    function (data) {
      $$('#id_mapel').val(data[0].id_mapel);
      $$('#kd_mapel_e').val(data[0].kd_mapel);
      $$('#nama_mapel_e').val(data[0].nama_mapel);
    }
  );
});

$$('#update').click(function () {
  var id = $$('#id_mapel').val();
  var kd = $$('#kd_mapel_e').val();
  var nama = $$('#nama_mapel_e').val();
  if (id == '' || kd == '' || nama == '') {
    app.dialog.alert('Harap Lengkapi semua Form Diatas!', 'Error');
    return;
  }
  app.request({
    url: 'http://localhost/CRUD_PEMROGRAMAN_MOBILE/update.php',
    type: 'POST',
    data: {
      id: id,
      kode: kd,
      nama: nama,
    },
    success: function (data) {
      app.dialog.alert('Data berhasil di Update,!', 'Sukses');
      app.views.main.router.navigate('/home/');
      lihat();
    },
  });
});
