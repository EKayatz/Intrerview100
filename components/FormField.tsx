type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  required?: boolean;
  setState: (value: string) => void;
};

const FormField = ({
  type,
  title,
  state,
  placeholder,
  setState,
  required,
}: Props) => {
  return (
    <div className="flexStart flex-col w-full">
      <label className="w-full text-gray-100">{title}</label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        required={required}
        value={state}
        className="form_field-input bg-primary-blue-600 text-primary-blue"
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default FormField;
