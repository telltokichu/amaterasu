import React from "react";
import { Field } from "formik";
import { Input, Form } from "antd";
import _isEmpty from "lodash/isEmpty";
const { TextArea } = Input;
const generateComponent = (data) => {
    let {
        disabled,
        label,
        placeholder,
        form: { touched, errors },
        form,
        field: { name },
        field,
        onChange,
        value,
        handleOnBlur,
        handleOnChange,
        required,
        type,
        rows,
    } = data;
    if (onChange)
        field = {
            ...field,
            onChange,
        };
    else onChange = null;

    if (value)
        field = {
            ...field,
            value,
        };
    else value = null;

    let error = errors[name] && touched[name];
    let errorStatus = error && errors[name];
    const validateErrorStatus = () => {
        return errorStatus ? "error" : "success";
    };
    if (type === "textarea") {
        return (
            <Form.Item
                label={label}
                validateStatus={validateErrorStatus()}
                required={required}
                help={error && errors[name]}
            >
                <TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    name={field.name}
                    value={field.value}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={async ({ target: { value } }) => {
                        console.log("value: ", value);
                        await form.setFieldValue(field.name, value);
                        handleOnChange && handleOnChange(value);
                    }}
                    onBlur={async ({ target: { value } }) => {
                        // Added trim function for empty space removal
                        let inputVal = value.trim();
                        await form.setFieldTouched(name, true);
                        await form.setFieldValue(field.name, inputVal);
                        handleOnBlur && handleOnBlur(inputVal);
                    }}
                    allowClear
                />
            </Form.Item>
        );
    }
    return (
        <Form.Item
            label={label}
            validateStatus={validateErrorStatus()}
            required={required}
            help={error && errors[name]}
        >
            <Input
                name={field.name}
                value={field.value}
                autoCorrect="off"
                autoComplete="new-password"
                type="text"
                placeholder={placeholder}
                disabled={disabled}
                onChange={async ({ target: { value } }) => {
                    await form.setFieldValue(field.name, value);
                    handleOnChange && handleOnChange(value);
                }}
                onBlur={async ({ target: { value } }) => {
                    // Added trim function for empty space removal
                    let inputVal = value.trim();
                    await form.setFieldTouched(name, true);
                    await form.setFieldValue(field.name, inputVal);
                    handleOnBlur && handleOnBlur(inputVal);
                }}
                allowClear
            />
        </Form.Item>
    );
};
const FormField = (props) => {
    return <Field {...props} component={generateComponent} />;
};

export default FormField;
