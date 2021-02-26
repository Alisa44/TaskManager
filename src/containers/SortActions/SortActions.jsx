import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SortSelect from '../../components/SortSelect/SortSelect';
import styles from './SortActions.module.scss';
import {setSortDirection, setSortField} from '../../store/actions';

const directions = [{name: 'Up', value: 'acs'}, {name: 'Down', value: 'desc'}];
const getFields = obj =>  Object.keys(obj).map(item => ({name: item, value: item}));

const SortActions = () => {
    const {sortDirection, sortField, tasks} = useSelector(state => state.state);
    const [fieldOptions, setFieldOptions] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (tasks.length) {
            const options = getFields(tasks[0]);
            setFieldOptions(options);
        }
    }, [tasks]);

    const onDirectionChange = value => {
        dispatch(setSortDirection(value));
    };
    
    const onSortFieldChange = value => {
        dispatch(setSortField(value));
    };
    
    return <div className={styles.wrapper}>
        <SortSelect value={sortDirection}
                    placeholder={'Choose direction'}
                    options={directions}
                    onChange={onDirectionChange}/>
        <SortSelect value={sortField}
                    placeholder={'Choose field'}
                    onChange={onSortFieldChange}
                    options={fieldOptions}/>
    </div>;
};
export default SortActions;