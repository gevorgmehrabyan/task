import React from 'react';
import './company.scss';

const CandidateCompany  = () => {
  const { visibilityFilter } = useCompaniesCard();

  const handleChoose = (value) => {
    visibilityFilter(value);
  };

  return (
    <div className='companies_page'>
      <div className='global_delete'>
        <div className='left_part'>
          <img src={th_company} alt='company'/>
          <p>Companies</p>
        </div>
        <div className='right_part'>
          <img src={filter} alt='filter'/>
          <h2 className='filt'>Filter By</h2>
          <Select defaultValue="All" style={{ width: 100 }}   onChange={(value) => handleChoose(value)}>
            <Option value="">All</Option>
            <Option value="Like">Like</Option>
            <Option value="No Like">No Like</Option>
          </Select>
        </div>
      </div>
      <div className='companies_list'>
        <CompanyList/>
      </div>
    </div>
  );
}

export default CandidateCompany;