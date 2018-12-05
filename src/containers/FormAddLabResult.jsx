import React from 'react';

export const FormAddLabResult = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Lab Result</h2>
            <input type="hidden" name="pasien.id" value={props.labResult.pasien.id} />
            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis"  />
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan" />
            </div>
            <div className="form-group">
                <label>Hasil</label>
                <input type="text" className="form-control" name="hasil" />
            </div>

            <button className="btn btn-success" value="submit">Add</button>
        </form>
    )
}