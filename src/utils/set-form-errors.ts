import {UseFormSetError, FieldValues, Path} from 'react-hook-form';

function setFormErrors<T extends FieldValues>(
    setError: UseFormSetError<T>,
    fields: Record<string, string>
): void {
    Object.entries(fields).forEach(([field, message]) => {
        setError(field as Path<T>, {
            type: 'server',
            message,
        });
    });
}

export default setFormErrors
