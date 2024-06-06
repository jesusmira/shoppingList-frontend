import { useField } from "formik";

interface TextAreaElementProps {
    name: string;
    id: string;
    placeholder: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
export const TextAreaElement = ({label, ...props }: TextAreaElementProps) => {
  const [ field ] = useField(props);
  return (
    <div className=" flex flex-col relative gap-y-2 focus-within:text-orange-company">
        <label  className=" text-sm font-medium  " htmlFor={ props.id || props.name }>{label}   </label>
        <textarea {...field} {...props}  rows={5} aria-label="Enter a description" className="py-3 px-4 block w-full border-2 rounded-lg text-sm focus:border-2 leading-tight focus:border-orange-company  border-gray-300 text-gray-400 focus:outline-none resize-none"  autoComplete="off"></textarea>
    </div>
  )
}
