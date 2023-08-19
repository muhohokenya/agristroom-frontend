import React, { useContext, useEffect } from 'react'
import { useAppDispatch } from '../hooks/react-redux-hooks';
import { getCurrentUser } from '../redux/actions/auth.action';
import { AuthStateContext } from './auth';

const useGetCurrentUser = () => {
    const dispatch = useAppDispatch();
    const { user, setUser } = useContext(AuthStateContext);

    useEffect(() => {
        const getUser = async () => {
            let res: any = await dispatch(getCurrentUser());
            if (res?.payload?.success) {
                setUser(res?.payload?.user)
            }
        };
        getUser();
    }, [dispatch]);

    return null
}

export default useGetCurrentUser