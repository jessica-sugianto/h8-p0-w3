function dataHandling2(datas){
    datas.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    datas.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(datas)

    var pisah_tanggal = datas[3].split('/')
    switch(pisah_tanggal[1]){
        case '01': console.log('Januari')
        break;
        case '02': console.log('Februari')
        break;
        case '03': console.log('Maret')
        break;
        case '04': console.log('April')
        break;
        case '05': console.log('Mei')
        break;
        case '06': console.log('Juni')
        break;
        case '07': console.log('Juli')
        break;
        case '08': console.log('Agustus')
        break;
        case '09': console.log('September')
        break;
        case '10': console.log('Oktober')
        break;
        case '11': console.log('November')
        break;
        case '12': console.log('Desember')
        break;
        default:
        break;
    }

    var desc =[]
    if(parseInt(pisah_tanggal[0]) > parseInt(pisah_tanggal[1]) && parseInt(pisah_tanggal[0]) > parseInt(pisah_tanggal[2])){
        desc.push(pisah_tanggal[0])
        if(parseInt(pisah_tanggal[1]) > parseInt(pisah_tanggal[2])){
            desc.push(pisah_tanggal[1])
            desc.push(pisah_tanggal[2])
        }else{
            desc.push(pisah_tanggal[2])
            desc.push(pisah_tanggal[1])
        }
    }else if(parseInt(pisah_tanggal[1]) > parseInt(pisah_tanggal[0]) && parseInt(pisah_tanggal[1]) > parseInt(pisah_tanggal[2])){
        desc.push(pisah_tanggal[1])
        if(parseInt(pisah_tanggal[0]) > parseInt(pisah_tanggal[2])){
            desc.push(pisah_tanggal[0])
            desc.push(pisah_tanggal[2])
        }else{
            desc.push(pisah_tanggal[2])
            desc.push(pisah_tanggal[0])
        }
    }else if(parseInt(pisah_tanggal[2]) > parseInt(pisah_tanggal[1]) && parseInt(pisah_tanggal[2]) > parseInt(pisah_tanggal[0])){
        desc.push(pisah_tanggal[2])
        if(parseInt(pisah_tanggal[1]) > parseInt(pisah_tanggal[0])){
            desc.push(pisah_tanggal[1])
            desc.push(pisah_tanggal[0])
        }else{
            desc.push(pisah_tanggal[0])
            desc.push(pisah_tanggal[1])
        }
    }
    console.log(desc)

    console.log(pisah_tanggal.join('-'))

    var name = datas[1]
    console.log(name.slice(0,15))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */