import React from 'react';
import './calendar.scss'

const CandidateCalendar  = () => {
  const {
    date,
    companyName,
    note,
    fileNames,
    resume,
    selectedTime,
    shareResume,
    attachedFiles,
    attachedLink,
    slotList,
    sentValues,
    handleDrop,
    handleDelete,
    handelChangeNote,
    onChange,
    handleSetResume,
    knowColor,
    handleSelect,
  } = useScheduleInfo(id);

  return (
    <div className='calendar_page'>
      <div className='company_information_list'>
        <div className='general_title'>
          <h2>Schedule Your Interview</h2>
          <p>Sed et vehicula urna. Duis dignissim arcu a laoreet posuere. Vivamus viverra lorem nec volutpat
            ultricies.</p>
        </div>
        <div className='company_name_wrap'>
          <h3>Company :<span>{companyName}</span></h3>
          <button className='add_to_like_list'>
            <img src={heart} alt='heart'/>
            ADD TO FAVORITE LIST
          </button>
        </div>
        <div className='attached_files_list'>
          <h3>Attached Files</h3>
          <div className='files_list'>
            {
              attachedFiles?.map((item, id) => {
                return <div key={id} className='simple_file'>
                  <img src={file} alt='file'/>
                  <div className='name_wrap'>
                    <label>{item?.docName}</label>
                    <span>{item?.fileSize}KB</span>
                  </div>
                  <div>
                    {console.log(employerFilesUrl + item?.docName)}
                    <a href={`/${employerFilesUrl + item?.docName}`} target="_blank" download><img src={download} alt='download'/></a>
                  </div>
                </div>;
              })
            }
          </div>
        </div>
        <div className='attached_files_list'>
          <h3>Attached Link</h3>
          <p>{attachedLink}</p>
        </div>
      </div>
      <CalendarCandidate date={date} onChange={onChange}/>
      <div className='schedule_an_interviews'>
        <div className='time_slots'>
          <h3>TIME SLOTS</h3>
          <div className='colors_info'>
            <div>
              <hr style={{ background: '#4184CB' }}/>
              Selected
            </div>
            <div>
              <hr style={{ background: '#FFFFFF' }}/>
              Available
            </div>
            <div>
              <hr style={{ background: '#D4E2F2' }}/>
              Unavailable
            </div>
          </div>
        </div>
        {/*<div className='slot_list'>*/}
        {/*  {*/}
        {/*    slotList.map((item, id) =>*/}
        {/*      <button disabled={(item.status === 'Unavailable') ? true : false} onClick={() => handleSelect(id)}*/}
        {/*              key={id} className={knowColor(item.status, id)}>{item.from} - {item.to}</button>,*/}
        {/*    )*/}
        {/*  }*/}
        {/*</div>*/}
        <div className='write_note_form'>
          <div className='selected_time'>
            <h4>You are about to schedule interview on selected time slot :</h4>
            {/*<h5>{slotList[selectedTime].from}-{slotList[selectedTime].to}</h5>*/}
          </div>
          <div className='text_area'>
            <div className='files__resume'>
              <Checkbox onChange={() => handleSetResume()} checked={shareResume}>Share resume with employer</Checkbox>
              <div className='resume_candidate'>
                <img src={resumeLogo} alt='resume'/>
                {resume}
              </div>
            </div>
            <div className='write_a_note'>
              <p>Write a Note :</p>
              <div className='form_textarea'>
                <TextArea value={note} onChange={(e) => handelChangeNote(e)}/>
                <div className='choose_file'>
                  <Dropzone onDrop={handleDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <button><img src={paperclip} alt='paper_clip'/> Choose File</button>
                      </div>
                    )}
                  </Dropzone>
                  {
                    fileNames.map((item, id) => (
                      <div key={id} className='file-Form'>
                        <img src={file} alt='file'/>
                        <div className='name_wrap'>
                          <label>{item.name}</label>
                          <span>{item.size}KB</span>
                        </div>
                        <div onClick={() => handleDelete(id)}><img src={close} alt='delete'/></div>
                      </div>
                    ))}
                </div>
                <button onClick={sentValues} className='create_interview'>SCHEDULE AN INTERVIEW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateCalendar;