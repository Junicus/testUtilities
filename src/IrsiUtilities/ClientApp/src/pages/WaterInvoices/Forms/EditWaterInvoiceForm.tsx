import React from 'react';
import { Formik } from 'formik';
import { IWaterInvoiceDto } from '../../../utils/api/IrsiUtilities';

interface EditWaterInvoiceFormProps {
  initialValues: IWaterInvoiceDto;
  onUpdateWaterInvoice: (values: IWaterInvoiceDto) => void;
}

export function EditWaterInvoiceForm({ initialValues, onUpdateWaterInvoice }: EditWaterInvoiceFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onUpdateWaterInvoice(values);
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
