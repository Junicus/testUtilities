import React from 'react';
import { Formik } from 'formik';
import { IElectricityInvoiceDto } from '../../../utils/api/IrsiUtilities';

interface AddElecticityInvoiceFormProps {
  onAddElectricityInvoice: (values: IElectricityInvoiceDto) => void;
}

export function AddElectricityInvoiceForm({ onAddElectricityInvoice }: AddElecticityInvoiceFormProps) {
  const initialValues: IElectricityInvoiceDto = { id: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onAddElectricityInvoice(values);
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
