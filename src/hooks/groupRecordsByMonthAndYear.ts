import moment from 'moment';
import { useAppDispatch, useAppSelector } from './dbstore';
import { useEffect, useState } from 'react';
import { getListProducts } from '../store/slices/listProducts/thunks';

interface Record {
  _id: string;
  nameList: string;
  dateCreation: string;
  completed: boolean;
  products: unknown[];
}

interface GroupedRecords {
  [key: string]: Record[];
}

const groupRecordsByMonthAndYear = (records: Record[]): GroupedRecords => {
  return records.reduce((acc: GroupedRecords, record: Record) => {
    const date = moment(record.dateCreation, 'DD.MM.YYYY');
    const key = date.format('MMMM YYYY');
    
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(record);
    return acc;
  }, {});
};

export const useGroupedProducts = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.items);

  const [lista, setLista] = useState<GroupedRecords>({});

  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch]);

  useEffect(() => {
    const groupedItems = groupRecordsByMonthAndYear(items);
    setLista(groupedItems);
  }, [items]);

  return lista;
};