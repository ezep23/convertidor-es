import { useForm } from 'react-hook-form';

const SignUpForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleClearClick = () => {
        reset();
    };

    const handleSubmitForm = (data) => {
        console.log(data);
    };

    return(
        <form onSubmit={handleSubmit(handleSubmitForm)} >
            <label>
                Name
                <input {...register('name', {required: true})}/>
            </label>
            <br/>
            <label>
                Age
                <input {...register('age', {required: true})} required />
            </label>
            <br/>
            <label>
                Address
                <input {...register('address', {required: true})} required />
            </label>
            <br/>
            <label>
                Zipcode
                <input {...register('zipcode', {required: true})} required />
            </label>
            <br/>
            <label>
                Phone Number
                <input {...register('phone', {required: true})} required />
            </label>
            <br/>
            <div>
                <button type="button" onClick={handleClearClick} >Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignUpForm;