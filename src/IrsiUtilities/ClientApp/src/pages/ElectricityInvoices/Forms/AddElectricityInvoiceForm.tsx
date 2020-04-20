import React, { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { IElectricityInvoiceDto, IStoreDto } from '../../../utils/api/IrsiUtilities';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, KnownActions } from '../../../store/types';
import { Dispatch } from 'redux';
import { StoreActionTypes } from '../../../store/Stores/types';

interface AddElecticityInvoiceFormProps {
  onAddElectricityInvoice: (values: IElectricityInvoiceDto) => void;
}

export function AddElectricityInvoiceForm({ onAddElectricityInvoice }: AddElecticityInvoiceFormProps) {
  const stores = useSelector<AppState, IStoreDto[]>((state) => state.stores.allIds.map((key) => state.stores.byId[key]));
  const dispatch = useDispatch<Dispatch<KnownActions>>();
  const initialValues: IElectricityInvoiceDto = { id: '' };

  useEffect(() => {
    dispatch({
      type: StoreActionTypes.GET_STORES,
    });
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        //onAddElectricityInvoice(values);
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting }) => (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="invoiceDate">Invoice Date</label>
            <Field type="date" name="invoiceDate" />
            <ErrorMessage name="invoiceDate" />
          </div>
          <div>
            <label htmlFor="invoiceNumber">Invoice Number</label>
            <Field type="text" name="invoiceNumber" />
            <ErrorMessage name="invoiceNumber" />
          </div>
          <div>
            <label htmlFor="storeId">Store</label>
            <Field as="select" name="storeId">
              <option />
              {stores.map((store) => (
                <option key={store.id} value={store.id}>
                  {store.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="storeId" />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <Field type="text" name="amount" placeholder="Amount" />
            <ErrorMessage name="amount" />
          </div>
          <div>
            <label htmlFor="previousRead">Previous Read</label>
            <Field type="date" name="previousRead" />
            <ErrorMessage name="previousRead" />
          </div>
          <div>
            <label htmlFor="currentRead">Current Read</label>
            <Field type="date" name="currentRead" />
            <ErrorMessage name="currentRead" />
          </div>
          <div>
            <label htmlFor="usageDays">Usage Days</label>
            <Field type="text" name="usageDays" />
            <ErrorMessage name="usageDays" />
          </div>
          <div>
            <label htmlFor="usagekVA">Usage kVA</label>
            <Field type="text" name="usagekVA" />
            <ErrorMessage name="usagekVA" />
          </div>
          <div>
            <label htmlFor="usagekVA">Usage kVA</label>
            <Field type="text" name="usagekVA" />
            <ErrorMessage name="usagekVA" />
          </div>
          <fieldset>
            <div>
              <label htmlFor="fixedCharge">Cargo por Cliente</label>
              <Field type="text" name="fixedCharge" />
              <ErrorMessage name="fixedCharge" />
            </div>
            <div>
              <div>
                <label htmlFor="usagekWh">Cargo por Consumo (Uso)</label>
                <Field type="text" name="usagekWh" />
                <ErrorMessage name="usagekWh" />
              </div>
              <div>
                <label htmlFor="ratekWh">Cargo por Consumo (Rate)</label>
                <Field type="text" name="ratekWh" />
                <ErrorMessage name="ratekWh" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="additionalUsagekWh">Cargo por Consumo Adicional (Uso)</label>
                <Field type="text" name="additionalUsagekWh" />
                <ErrorMessage name="additionalUsagekWh" />
              </div>
              <div>
                <label htmlFor="rateAdditionalUsagekWh">Cargo por Consumo Adicional (Rate)</label>
                <Field type="text" name="rateAdditionalUsagekWh" />
                <ErrorMessage name="rateAdditionalUsagekWh" />
              </div>
            </div>
            <div>
              <label htmlFor="demandCharge">Cargo por Demanda</label>
              <Field type="text" name="demandCharge" />
              <ErrorMessage name="demandCharge" />
            </div>
            <div>
              <label htmlFor="additionalDemandCharge">Cargo Adicional por Demanda</label>
              <Field type="text" name="additionalDemandCharge" />
              <ErrorMessage name="additionalDemandCharge" />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <div>
                <label htmlFor="combustiblePurchased">Ajuste Cargo de Combustible (Uso)</label>
                <Field type="text" name="combustiblePurchased" />
                <ErrorMessage name="combustiblePurchased" />
              </div>
              <div>
                <label htmlFor="rateCombustible">Ajuste Cargo de Combustible (Rate)</label>
                <Field type="text" name="rateCombustible" />
                <ErrorMessage name="rateCombustible" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="provisionalTarif">Tarifa Provisional (Uso)</label>
                <Field type="text" name="provisionalTarif" />
                <ErrorMessage name="provisionalTarif" />
              </div>
              <div>
                <label htmlFor="rateProvisionalTarif">Tarifa Provisional (Rate)</label>
                <Field type="text" name="rateProvisionalTarif" />
                <ErrorMessage name="rateProvisionalTarif" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="energyPurchased">Ajuste por Compra de Energia (Uso)</label>
                <Field type="text" name="energyPurchased" />
                <ErrorMessage name="energyPurchased" />
              </div>
              <div>
                <label htmlFor="rateEnergy">Ajuste por Compra de Energia (Rate)</label>
                <Field type="text" name="rateEnergy" />
                <ErrorMessage name="rateEnergy" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="celiUse">CELI (Uso)</label>
                <Field type="text" name="celiUse" />
                <ErrorMessage name="celiUse" />
              </div>
              <div>
                <label htmlFor="celiRate">CELI (Rate)</label>
                <Field type="text" name="celiRate" />
                <ErrorMessage name="celiRate" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="subsidioHHUse">Subsidios HH (Uso)</label>
                <Field type="text" name="subsidioHHUse" />
                <ErrorMessage name="subsidioHHUse" />
              </div>
              <div>
                <label htmlFor="subsidioHHRate">Subsidios HH (Rate)</label>
                <Field type="text" name="subsidioHHRate" />
                <ErrorMessage name="subsidioHHRate" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="subsidioNHHUse">Subsidios NHH (Uso)</label>
                <Field type="text" name="subsidioNHHUse" />
                <ErrorMessage name="subsidioNHHUse" />
              </div>
              <div>
                <label htmlFor="subsidioNHHRate">Subsidios NHH (Rate)</label>
                <Field type="text" name="subsidioNHHRate" />
                <ErrorMessage name="subsidioNHHRate" />
              </div>
            </div>
            <div>
              <label htmlFor="otherCharges">Otros Cargos</label>
              <Field type="text" name="otherCharges" />
              <ErrorMessage name="otherCharges" />
            </div>
          </fieldset>
          <div>
            <label htmlFor="readingType">Reading Type</label>
            <Field as="select" name="readingType">
              <option />
              <option value="0">Read</option>
              <option value="1">Estimated</option>
              <option value="2">Adjusted</option>
            </Field>
            <ErrorMessage name="readingType" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { renderTextField, renderSelectField } from "../formUtils";
// import { Button, InputLabel, Typography } from "@material-ui/core";

// let CreateElectricityInvoiceForm = props => {
//   const {
//     handleSubmit,
//     stores: { stores }
//   } = props;
//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ margin: "10px", display: "flex", flexDirection: "column" }}
//     >
//       <Field
//         name="invoiceDate"
//         component={renderTextField}
//         type="date"
//         label="Invoice Date"
//         InputLabelProps={{
//           shrink: true
//         }}
//       />

//       <Field
//         name="invoiceNumber"
//         component={renderTextField}
//         label="Invoice Number"
//       />
//       <Field name="storeId" component={renderSelectField} label="Store">
//         <option />
//         {stores.map(store => {
//           return (
//             <option key={store.id} value={store.id}>
//               {store.name}
//             </option>
//           );
//         })}
//       </Field>
//       <Field name="amount" component={renderTextField} label="Amount" />
//       <Field
//         name="previousRead"
//         component={renderTextField}
//         type="date"
//         label="Previous Read"
//         InputLabelProps={{
//           shrink: true
//         }}
//       />
//       <Field
//         name="currentRead"
//         component={renderTextField}
//         type="date"
//         label="Current Read"
//         InputLabelProps={{
//           shrink: true
//         }}
//       />
//       <Field name="usageDays" component={renderTextField} label="Usage Days" />
//       <Field name="usagekVA" component={renderTextField} label="Usage kVA" />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           border: "1px solid black",
//           padding: "10px",
//           marginBottom: "5px"
//         }}
//       >
//         <Typography variant="h3" gutterBottom>
//           Cargos por Servicio
//         </Typography>
//         <Field
//           name="fixedCharge"
//           component={renderTextField}
//           label="Cargo por Cliente"
//         />
//         <InputLabel>Cargo por Consumo</InputLabel>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Field name="usagekWh" component={renderTextField} label="Uso" />
//           <Field name="ratekWh" component={renderTextField} label="Rate" />
//         </div>
//         <InputLabel>Cargo por Consumo Adicional</InputLabel>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Field
//             name="additionalUsagekWh"
//             component={renderTextField}
//             label="Uso"
//           />
//           <Field
//             name="rateAdditionalUsagekWh"
//             component={renderTextField}
//             label="Rate"
//           />
//         </div>
//         <Field
//           name="demandCharge"
//           component={renderTextField}
//           label="Cargo por Demanda"
//         />
//         <Field
//           name="additionalDemandCharge"
//           component={renderTextField}
//           label="Cargo Adicional por Demanda"
//         />
//       </div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           border: "1px solid black",
//           padding: "10px"
//         }}
//       >
//         <Typography variant="h3" gutterBottom>
//           Clausulas de Reconciliacion
//         </Typography>
//         <InputLabel>Ajuste Cargo de Combustible</InputLabel>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Field
//             name="combustiblePurchased"
//             component={renderTextField}
//             label="Uso"
//           />
//           <Field
//             name="rateCombustible"
//             component={renderTextField}
//             label="Rate"
//           />
//         </div>
//         <InputLabel>Tarifa Provisional</InputLabel>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Field
//             name="provisionalTarif"
//             component={renderTextField}
//             label="Uso"
//           />
//           <Field
//             name="rateProvisionalTarif"
//             component={renderTextField}
//             label="Rate"
//           />
//         </div>
//         <InputLabel>Ajuste por Compra de Energia</InputLabel>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Field
//             name="energyPurchased"
//             component={renderTextField}
//             label="Uso"
//           />
//           <Field name="rateEnergy" component={renderTextField} label="Rate" />
//         </div>
//         <InputLabel>CELI</InputLabel>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Field name="celiUse" component={renderTextField} label="Uso" />
//           <Field
//             name="celiRate"
//             component={renderTextField}
//             label="Rate"
//           />
//         </div>
//         <InputLabel>Subsidios HH</InputLabel>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Field name="subsidioHHUse" component={renderTextField} label="Uso" />
//           <Field
//             name="subsidioHHRate"
//             component={renderTextField}
//             label="Rate"
//           />
//         </div>
//         <InputLabel>Subsidios NHH</InputLabel>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Field
//             name="subsidioNHHUse"
//             component={renderTextField}
//             label="Uso"
//           />
//           <Field
//             name="subsidioNHHRate"
//             component={renderTextField}
//             label="Rate"
//           />
//         </div>
//         <Field
//           name="otherCharges"
//           component={renderTextField}
//           label="Otros Cargos"
//         />
//       </div>
//       <Field
//         name="readingType"
//         component={renderSelectField}
//         label="Reading Type"
//       >
//         <option />
//         <option value="0">Read</option>
//         <option value="1">Estimated</option>
//         <option value="2">Adjusted</option>
//       </Field>
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// {
//   "id": "3edb7170-342f-47bb-a716-08d71cff8491",
//   "invoiceDate": "2019-08-01",
//   "invoiceNumber": "123",
//   "storeId": "3edb7170-342f-47bb-a716-08d71cff849f",
//   "amount": 1,
//   "previousRead": "2019-08-01",
//   "currentRead": "2019-08-01",
//   "usageDays": 1,
//   "usagekVA": 1,
//   "fixedCharge": 1,
//   "usagekWh": 1,
//   "ratekWh": 1,
//   "additionalUsagekWh": 1,
//   "rateAdditionalUsagekWh": 1,
//   "demandCharge": 1,
//   "additionalDemandCharge": 1,
//   "combustiblePurchased": 1,
//   "rateCombustible": 1,
//   "provisionalTarif": 1,
//   "rateProvisionalTarif": 1,
//   "energyPurchased": 1,
//   "rateEnergy": 1,
//   "celiUse": 1,
//   "celiRate": 1,
//   "subsidioHHUse": 1,
//   "subsidioHHRate": 1,
//   "subsidioNHHUse": 1,
//   "subsidioNHHRate": 1,
//   "otherCharges": 1,
//   "readingType": 1
// }
