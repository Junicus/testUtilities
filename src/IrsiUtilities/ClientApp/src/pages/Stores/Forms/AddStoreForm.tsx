import React from 'react';
import { Formik } from 'formik';
import { IStoreDto } from '../../../utils/api/IrsiUtilities';

interface AddStoreFormProps {
  onAddStore: (values: any) => void;
}

export function AddStoreForm({ onAddStore }: AddStoreFormProps) {
  const initialValues: IStoreDto = { id: '', name: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onAddStore(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting }) => (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
          {errors.name && touched.name && errors.name}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
