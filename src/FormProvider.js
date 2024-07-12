import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    propertyFor: '',
    propertyType: '',
    propertyDescription: '',
    BuildingName: '',
    propertyAddress: '',
    nonVeg: '',
    petsAllowed: '',
    Electricity: '',
    Rent: '',
    Security: '',
    maintenanceCharges: '',
    extramaintenanceCharges: '',
    extramaintenanceCharges1: '',
    Additional: '',
    photo: []
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
