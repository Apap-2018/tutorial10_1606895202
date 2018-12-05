import React from 'react';

const poliRujukan = {
    1: 'Poli Penyakit Dalam',
    2: 'Poli Mata',
    3: 'Poli Saraf',
    4: 'Poli THT',
    5: 'Poli Gigi dan Mulut',
    6: 'Poli Konsultasi Gizi',
    7: 'Poli Fisioterapi',
    8: 'Poli Penyakit Dalam'
}

const statusPasien = {
    1: 'Mendaftar di IGD',
    2: 'Berada di IGD',
    3: 'Selesai di IGD',
    4: 'Mendaftar di Rawat Inap',
    5: 'Berada di Rawat Inap',
    6: 'Selesai di Rawat Inap',
    7: 'Mendaftar di Rawat Jalan',
    8: 'Berada di Rawat Jalan',
    9: 'Selesai di Rawat Jalan'
}

export const FormUpdatePasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Update Status Pasien</h2>
            <input type="hidden" name="id" value={props.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Tanggal Rujukan</label>
                <input type="date" className="form-control" name="tanggalRujukan" defaultValue={!props.pasien.tanggalRujukan ? "" : props.pasien.tanggalRujukan}/>
            </div>
            <div className="form-group">
                <label>Poli Rujukan</label>
                <select className="form-control" name="poliRujukan.id" defaultValue={!props.pasien.poliRujukan ? "" : props.pasien.poliRujukan.id}>
                    <option value="">Pilih poli rujukan</option>
                    {Object.keys(poliRujukan).map(key => {
                        return (
                            <option key={key} value={key}>{poliRujukan[key]}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-group">
                <label>Status Pasien<span style={{ color: 'red' }}>*</span></label>
                <select className="form-control" name="statusPasien.id" defaultValue={!props.pasien.statusPasien ? "" : props.pasien.statusPasien.id} required>
                    <option value="" disabled>Pilih status pasien</option>
                    {Object.keys(statusPasien).map(key => {
                        return (
                            <option key={key} value={key}>{statusPasien[key]}</option>
                        )
                    })}
                </select>
            </div>
            <button className="btn btn-success" value="submit">Update</button>
        </form>
    )
}