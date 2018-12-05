import React from 'react';
import { Link } from "react-router-dom";

export const DaftarPasienRow = (props) => {
    return (
        <tbody>
            {props.listPasien.map(pasien => {
                return (
                    <tr key={pasien.id}>
                        <td>{pasien.nama}</td>
                        <td>{pasien.statusPasien.jenis}</td>
                        <td>
                            <Link to={`/update-pasien/${pasien.id}`} className="btn btn-info">Update</Link>
                        </td>
                        <td>
                            <Link to={`/add-lab-result/${pasien.id}`} className="btn btn-info">Add Lab Result</Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}