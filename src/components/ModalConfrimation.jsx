import React from 'react'
import BiodataView from './BiodataView'

export default function ModalConfrimation({data, handleClickOk, peruntukan}) {



    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Konfimasi {peruntukan}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            peruntukan === "zakat" ? 
                            (<BiodataView data={data} />) 
                            : 
                            (<></>)

                        }
                   

                       
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={handleClickOk} type="button" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
