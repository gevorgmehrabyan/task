import React from 'react';
import './companies.scss';

const AdminCompanies  = () => {
  const [show, setShow] = useState(false);
  const { data, companiesColumns, flipTableColumns } = useAdminCompanies();
  return (
    <div className='companies_page'>
      {
        show
          ?
          <CompaniesArchived/>
          :
          <>
            <div className='global_delete'>
              <div className='left_part'>
                <img src={th_company} alt='company'/>
                <p>Companies</p>
              </div>
              <div className='right_part'>
                <div onClick={() => {setShow(!show)}} className='links'>View archive files
                </div>
                <button className='archivate'>
                  Archive Selected
                  <img src={copy} alt='copy'/>
                </button>
              </div>
            </div>
            <TableAdmin data={data} columns={companiesColumns} flipTableColumns={flipTableColumns}/>
          </>
      }
    </div>
  );
}

export default AdminCompanies;