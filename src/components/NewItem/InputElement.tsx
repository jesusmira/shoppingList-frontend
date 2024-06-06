import { ErrorMessage, useField } from 'formik';

interface Props {
    name: string,    
    label: string,
    placeholder:string,
    required?:boolean,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;

}
export const InputElement = ({ label, ...props}: Props) => {
  const [ field ] = useField(props);
  return (
    <div className="flex flex-col relative gap-y-2 focus-within:text-orange-company">
      <label className="text-sm font-medium" htmlFor={ props.name }>{label}</label>
      <input
        type="text"
        {...field}
        {...props}
        className="py-3 px-4 block w-full border-2 rounded-lg text-sm focus:border-2 leading-tight focus:border-orange-company border-gray-300 text-gray-400 focus:outline-none"
        autoComplete="off"
      />
      <ErrorMessage name={props.name} component="div" className="error text-red-500" />
    </div>
  );
};
