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
  const initialValues: IElectricityInvoiceDto = { id: '', storeId: '' };

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
      {({ handleSubmit, isSubmitting }) => (
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
