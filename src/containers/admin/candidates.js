import React from 'react';
import './candidates.scss';

const AdminCandidates  = () => {
  const [show, setShow] = useState(false);
  const { data, candidatesColumns, flipTableColumns } = useAdminCandidates();
  return (
    <div className='candidate_page'>
      {
        show
          ?
          <CandidateArchived/>
          :
          <>
            <div className='global_delete'>
              <div className='left_part'>
                <img src={th_company} alt='company'/>
                <p>Candidates</p>
              </div>
              <div className='right_part'>
                <div onClick={() => {setShow(!show)}} className='links'>View archive files
                </div>
                <button className='archivate'>
                  Archive
                  <img src={copy} alt='copy'/>
                </button>
              </div>
            </div>
            <TableAdmin data={data} columns={candidatesColumns} flipTableColumns={flipTableColumns}/>
          </>
      }
    </div>
  );
}

export default AdminCandidates;