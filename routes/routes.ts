const apiRoutes = {
  list: '/employees',
  create: '/employees',
  delete: (id: string) => `/employees/${id}`,
  updateState: (id: string) => `/employees/state/${id}`,
  update:(id:string) =>`/employees/${id}`, 
  auth: '/auth/login',
};

export default apiRoutes;
