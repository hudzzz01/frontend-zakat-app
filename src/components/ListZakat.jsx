import React, { useEffect, useState } from 'react';
import { ZakatService } from '../services/zakat.service';
import ZakatItem from './ZakatItem';

export default function ListZakat() {
    const [dataZakats, setDataZakats] = useState([]);
    const itemsPerPage = 2; // Jumlah item per halaman
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch data zakat berdasarkan halaman
    useEffect(() => {
        fetchZakat(currentPage, itemsPerPage);
    }, [currentPage]);

    const fetchZakat = async (page, totalItemPerPage) => {
        try {
            const service = ZakatService;
            const result = await service.listAllZakatPagination(page, totalItemPerPage);

            setDataZakats(result.data.data.zakats);
            setTotalPages(Math.ceil(result.data.data.totalData / totalItemPerPage));

            console.log(result.data.data );
            
            
        } catch (error) {
            console.error('Error fetching zakat data:', error);
        }
    };

    // Fungsi untuk tombol Previous
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Fungsi untuk tombol Next
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='d-flex flex-column justify-content-between'>
            <div>
                <h3>List Zakat</h3>
            </div>

            <div>
                {dataZakats.length > 0 ? (
                    dataZakats.map((zakat, index) => <ZakatItem key={index} zakat={zakat} />)
                ) : (
                    <p>Tidak ada data zakat.</p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-controls">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}
