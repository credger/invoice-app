import {isEmpty, isValidDate, isValidState, isValidEmail, isValidZip} from '../functions/utilities'

const getFormErrors = (arg1) => {

  const errors = {
    emptyField: false,
    invalidVendorState: false,
    invalidClientState: false,
    invalidVendorZip: false,
    invalidClientZip: false,
    invalidEmail: false,
    invalidDate: false,
    noItems: false
  }
  
  const inputs = [
    'vendorName', 'vendorStreetAddress', 'vendorCity', 'vendorState', 'vendorZipCode',
    'clientEmail', 'clientStreetAddress', 'clientCity', 'clientState', 'clientZipCode',
    'invoiceDate', 'projectDescription' 
  ]

  for(let i=0; i<inputs.length; i++){

    if(isEmpty(arg1[inputs[i]])){
      errors.emptyField = true
      break
    }
  }

  for(let i=0; i<arg1.items.length; i++){
    if(isEmpty(arg1.items[i].name) ||
        isEmpty(arg1.items[i].quantity) ||
        isEmpty(arg1.items[i].price) ){
        errors.emptyField = true
        break
    }
  }

  if(!isEmpty(arg1.vendorState) && !isValidState(arg1.vendorState)){
    errors.invalidVendorState = true
  } 
  
  if(!isEmpty(arg1.clientState) && !isValidState(arg1.clientState ||
    !isValidState(arg1.clientState && showFormErrors))){
    errors.invalidClientState = true
  } 

  if(!isEmpty(arg1.vendorZipCode) && !isValidZip(arg1.vendorZipCode)){
    errors.invalidVendorZip = true
  } 

  if(!isEmpty(arg1.clientZipCode) && !isValidZip(arg1.clientZipCode)){
    errors.invalidClientZip = true
  } 

  if(!isEmpty(arg1.clientEmail) && !isValidEmail(arg1.clientEmail)){
    errors.invalidEmail = true
  }

  if(!isEmpty(arg1.invoiceDate) && !isValidDate(arg1.invoiceDate)){
    errors.invalidDate = true
  }

  if(arg1.items.length === 0){
    errors.noItems = true
  }

  return errors

}

export default getFormErrors