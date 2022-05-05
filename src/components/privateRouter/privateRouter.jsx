import React from 'react';
import { Navigate } from 'react-router-dom';
import Detail from '../detail/detail';

const PrivateRouter = ({ authenticate }) => {
	return authenticate ? <Detail /> : <Navigate replace to='/login' />;
};

export default PrivateRouter;
