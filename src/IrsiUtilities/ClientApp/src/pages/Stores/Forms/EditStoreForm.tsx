import React from 'react';
import { Formik } from 'formik';
import { IStoreDto } from '../../../utils/api/IrsiUtilities';

interface EditStoreFormProps {
  initialValues: IStoreDto;
  onUpdateStore: (values: any) => void;
}

export function EditStoreForm({ initialValues, onUpdateStore }: EditStoreFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onUpdateStore(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting }) => (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
            {errors.name && touched.name && errors.name}
          </div>
          <div>
            <label htmlFor="costCenter">Cost Center</label>
            <input id="costCenter" type="text" name="costCenter" value={values.costCenter} onChange={handleChange} onBlur={handleBlur} />
            {errors.name && touched.name && errors.name}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
