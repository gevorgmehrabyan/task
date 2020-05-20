export const API_URL = 'http://3.83.230.150:8000/api/';

export const api = {
  /** Auth Urls*/
  loginUrl: `${API_URL}auth/login`,
  loginAdminUrl: `${API_URL}auth/adminLogin`,
  candidateRegisterUrl: `${API_URL}auth/candidateRegister`,
  employerRegisterUrl: `${API_URL}auth/employeeRegister`,
  resetPasswordUrl: `${API_URL}auth/resetPassword`,
  resetPassEmailUrl: `${API_URL}auth/resetPassEmail`,
  changePasswordUrl: `${API_URL}auth/changePassword`,
  activationUrl: `${API_URL}auth/activation`,

  /** Employer Urls*/
  employerProfileUrl: `${API_URL}employee/profile`,
  employerSettingsUrl: `${API_URL}employee/settings`,
  employerGetSettingsUrl: `${API_URL}employee/getSettings`,
  employerUpdateSettingsUrl: `${API_URL}employee/updateSettings`,
  employerGetLoggedInUserUrl: `${API_URL}employee/getLoggedInUser`,
  employerGetAttachedFilesUrl: `${API_URL}employee/getAttachedFiles`,
  employerGetInterviewsUrl: `${API_URL}employee/getInterviews/`,

  /** Candidate Urls*/
  candidateProfileUrl: `${API_URL}candidate/profile`,
  candidateGetLoggedInUserUrl: `${API_URL}candidate/getLoggedInUser`,
  candidateGetSingleEmployeeUrl: `${API_URL}candidate/getSingleEmployee/`,
  candidateGetInterviewsUrl: `${API_URL}candidate/getInterviews/`,
  candidateGetCompaniesUrl: `${API_URL}candidate/getCompanies`,
  candidateGetTimesForDayUrl: `${API_URL}candidate/getTimesForDay/`,
  candidateAddFavorite: `${API_URL}candidate/addFavorite`,
  candidateDeleteFavorite: `${API_URL}candidate/deleteFavorite/`,
  candidateGetFavorite: `${API_URL}candidate/getFavorite`,

  /** Admin Urls*/
  adminUpdateEventUrl: `${API_URL}admin/updateEvent`,
  adminCreateEventUrl: `${API_URL}admin/createEvent`,
  adminGetLoggedInAdminUrl: `${API_URL}admin/getLoggedInAdmin`,
  adminGetCompaniesUrl: `${API_URL}admin/getCompanies`,
  adminArchiveCompanyUrl: `${API_URL}admin/archiveCompany`,
  adminDeleteCompanyUrl: `${API_URL}admin/deleteCompany`,
  adminGetArchivedCompaniesUrl: `${API_URL}admin/getArchivedCompanies`,
  adminGetCandidatesUrl: `${API_URL}admin/getCandidates`,
  adminGetArchivedCandidatesUrl: `${API_URL}admin/getArchivedCandidates`,
  adminArchiveCandidateUrl: `${API_URL}admin/archiveCandidate`,
  adminRevertCandidateUrl: `${API_URL}admin/revertCandidate`,
  adminDeleteCandidateUrl: `${API_URL}admin/deleteCandidate/`,
  adminActivitiesUrl: `${API_URL}admin/activities/`,
  adminGetOnlyCompaniesUrl: `${API_URL}admin/getOnlyCompanies`,
  adminGetEventsUrl: `${API_URL}admin/getEvents`,
  adminGetEventUrl: `${API_URL}admin/getEvent/`,

  /**Interviews Urls*/
  interviewCreateUrl: `${API_URL}interview/create`,
  interviewChangeStatus: `${API_URL}interview/changeStatus`,
  interviewChangeNotes: `${API_URL}interview/changeNotes`,

  /** Events url*/
  eventGetUrl: `${API_URL}event/get`
}
































