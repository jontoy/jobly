import {useContext} from 'react';
import UserContext from '../userContext';
import JoblyApi from '../JoblyApi';

const useApply = () => {
    const {setAppliedIds} = useContext(UserContext);
    const apply = async (id) => {
        await JoblyApi.applyToJob(id);
        setAppliedIds(ids => [...ids, id]);
      }
      const unapply = async (id) => {
        await JoblyApi.unApplyToJob(id);
        setAppliedIds(ids => ids.filter(num => num !== id));
      }  
    return [apply, unapply]
}

export default useApply;