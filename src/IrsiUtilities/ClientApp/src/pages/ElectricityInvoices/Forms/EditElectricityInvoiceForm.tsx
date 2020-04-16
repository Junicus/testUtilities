import React from 'react';
import { Formik } from 'formik';
import { IElectricityInvoiceDto } from '../../../utils/api/IrsiUtilities';

interface EditElectricityInvoiceFormProps {
  initialValues: IElectricityInvoiceDto;
  onUpdateElectricityInvoice: (values: IElectricityInvoiceDto) => void;
}

export function EditElectricityInvoiceForm({ initialValues, onUpdateElectricityInvoice }: EditElectricityInvoiceFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onUpdateElectricityInvoice(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting }) => (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
