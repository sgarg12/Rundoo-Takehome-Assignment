import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, FieldError } from 'react-hook-form';
import { Supplier } from '../models/SupplierModel';
import { SupplierService } from '../services/SupplierService';


export function SupplierForm() {
const supplierService = new SupplierService();
  const [picture, setPicture] = useState("");
  const onChangePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files as FileList;
    setPicture(URL.createObjectURL(selectedFiles?.[0]));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Supplier>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });
  const navigate = useNavigate();
  function onSubmit(data: Supplier) {
    supplierService.createTask(data).then(_response => {
      navigate(`/thank-you`);
    });
  }
  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'form-control is-invalid' : 'form-control';
  }

  return (
    <div className="container-fluid p-5">
        <h1>Add Supplier</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-md-4 mb-3">
                <label>First name</label>
                <input 
                    id="firstname" 
                    type="text"
                    {...register("firstname", {
                        required: 'You must enter your first name',
                    })}
                    className={getEditorStyle(errors.firstname)} 
                    placeholder="John"/>
                <div className="invalid-feedback">
                    {errors.firstname?.message}
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <label>Last name</label>
                <input 
                    id="lastname" 
                    type="text"
                    {...register('lastname', {
                        required: 'You must enter your last name',
                    })}
                    className={getEditorStyle(errors.lastname)} 
                    placeholder="Doe"/>
                <div className="invalid-feedback">
                    {errors.lastname?.message}
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <label>Address</label>
                <input
                type="text"
                id="address"
                {...register('address', {
                required: 'You must enter your address',
                })}
                className={getEditorStyle(errors.address)}
                placeholder="123 Here St."/>
            <div className="invalid-feedback">
                    {errors.address?.message}
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col mb-3">
            <label>City</label>
            <input
            type="text"
            id="city"
            {...register('city', {
            required: 'You must enter a city',
          })}
          className={getEditorStyle(errors.city)}
          placeholder="Heretown"/>
          <div className="invalid-feedback">
                {errors.city?.message}
          </div>
        </div>
        <div className="col mb-3">
            <label>State</label>
            <input
            type="text"
            id="state"
            {...register('state', {
            required: 'You must enter a state',
          })}
          className={getEditorStyle(errors.state)}
          placeholder="California"/>
          <div className="invalid-feedback">
                {errors.state?.message}
          </div>
        </div>
        <div className="col mb-3">
            <label>Country</label>
            <input
            type="text"
            id="country"
            {...register('country', {
            required: 'You must enter a country',
          })}
          className={getEditorStyle(errors.city)}
          placeholder="US"/>
          <div className="invalid-feedback">
                {errors.country?.message}
          </div>
        </div>
        <div className="col mb-3">
            <label>Zip/Postal Code</label>
            <input
            type="text"
            id="zip"
            {...register('zip', {
            required: 'You must enter a zip/postal code',
          })}
          className={getEditorStyle(errors.zip)}
          placeholder="L1Y7R0"/>
          <div className="invalid-feedback">
                {errors.zip?.message}
          </div>
        </div>
        </div>
        <div className="col-md-4">
            <h6>Upload a Logo</h6>
            <input 
            type="file"
            accept='image/*'
            className={getEditorStyle(errors.logo)}
            id="logo"
            {...register('logo', {
                required: 'You must upload a logo',
            })}
            onChange={onChangePicture}/>
            <div className="invalid-feedback">
                {errors.logo?.message}
          </div>
          {picture && (
            <div>
            <img className="img-thumbnail" src={picture} alt="" />
            </div>
        )}
        </div>
        <div className='mt-4'>
            <button type="submit" className="btn btn-dark btn-lg">
          Submit
        </button>
        </div>
    </form>
    </div>
    
  );
}