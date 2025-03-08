const host = import.meta.env.VITE_HOST
export const INSERT_ZAKAT_API = `${host}/input-zakat/input/`
export const GET_ALL_ZAKAT_PAGINATTION_API = (page,itemsPerPage) => {
    
    return `${host}/input-zakat/search/pagination/?page=${page}&itemsPerPage=${itemsPerPage}`
}


