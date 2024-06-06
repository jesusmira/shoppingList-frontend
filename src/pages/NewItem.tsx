import { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../hooks/dbstore';
import { getCategories, postItem, showShoppingList } from '../store';
import { InputElement, SelectElement, TextAreaElement } from '../components/NewItem';
import { ButtonsAddDel } from '../components/ShowItem';
import { capitalize } from '../utils/capitalize';

interface FormValues {
  name: string;
  note: string;
  image: string;
  category: string;
}

export const NewItem: React.FC = () => {
  const { categorias } = useAppSelector((state) => state.Elements);

  const dispatch = useAppDispatch();
   useEffect(() => {
    dispatch( getCategories() );    
  }, [dispatch])

  const handleCancel = () => {
      dispatch( showShoppingList())
  }

  const initialValues: FormValues = {
    name: '',
    note: '',
    image: '',
    category: ''
  };

  const validationSchema = Yup.object().shape({

    name: Yup.string().required('El nombre es requerido'),
    note: Yup.string(),
    image: Yup.string().url('Debe ser una URL válida'),
    category: Yup.string().required('La categoría es requerida'),
  });

  const handleSubmit = (values: FormValues, { resetForm }: { resetForm: () => void } ) => {

     const newValues = { ...values, name: capitalize(values.name), category: capitalize(values.category) };
    dispatch( postItem(newValues) );
    resetForm();
    dispatch( showShoppingList())
  };

  return (
  <> 
   
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >{
      () => (
          
          <Form noValidate className="flex flex-col fixed h-screen right-0 w-[80%] md:w-[30%] bg-white px-4 md:px-14 pt-5 gap-4 scrollbar-thin  scrollbar-thumb-orange-company scrollbar-track-slate-100  overflow-y-scroll" >

            <h5 className="text-xl font-bold">Add a new Item</h5>  
            <InputElement name="name" id="name" label="Name" placeholder="Enter a name" required />
            <TextAreaElement name="note" id="note" label="Note (optional)" placeholder="Enter a note"/>  
            <InputElement name="image" id="image" label="image (optional)" placeholder="Enter a url"/>
            <SelectElement name="category" id="category" placeholder="Enter a category" label='Category' categories={categorias} required />
            <ButtonsAddDel option={2}  button1="cancel" button2="Save" onClick1={handleCancel} onClick2={() => {}}/>

          </Form>
        )
      }
    </Formik>
    </>
  );
};
