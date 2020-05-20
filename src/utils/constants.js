export const ROLES = {
  ADMIN: 3,
  EMPLOYER: 2,
  CANDIDATE: 1,
};

export const CLIENT_ROLES_BASE_ROUTES = {
  [ROLES.ADMIN]: 'admin',
  [ROLES.CANDIDATE]: 'candidate',
  [ROLES.EMPLOYER]: 'employer',
};

export const REGISTER_ROLES = {
  CANDIDATE: '/registration/candidate',
  EMPLOYER: '/registration/employer'
}


export const TOKEN = 'token';

export const ROLE = 'role';

export const candidateFilesUrl = 'http://3.83.230.150/uploads/candidate/';

export const employerFilesUrl = 'http://3.83.230.150/uploads/employeer/';

export const eventsFilesUrl = 'http://3.83.230.150/uploads/events/';
