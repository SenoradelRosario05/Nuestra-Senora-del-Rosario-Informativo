import React from 'react'
import { useQuery } from 'react-query';
import { getButtonText } from '../Services/ServiceInformative';

const useButtons = (buttonId: number) => {

    const { data, isLoading, isError } = useQuery(['button', buttonId], () => getButtonText(buttonId));

    return {
      data,
      isLoading, 
      isError
    }
}

export default useButtons