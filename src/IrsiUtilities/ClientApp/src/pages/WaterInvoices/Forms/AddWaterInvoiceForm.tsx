import React from 'react';
import { Formik } from 'formik';
import { IWaterInvoiceDto } from '../../../utils/api/IrsiUtilities';

interface AddWaterInvoiceFormProps {
  onAddWaterInvoice: (values: IWaterInvoiceDto) => void;
}

export function AddWaterInvoiceForm({ onAddWaterInvoice }: AddWaterInvoiceFormProps) {
  const initialValues: IWaterInvoiceDto = { id: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onAddWaterInvoice(values);
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
