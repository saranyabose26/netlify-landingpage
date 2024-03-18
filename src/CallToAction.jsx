import { useState } from 'react';

const CallToAction = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your form submission logic, such as sending data to an API
        // For demonstration purposes, let's assume the form submission is successful
        setIsFormSubmitted(true);
    };

    return (
        <section className="call-to-action text-white text-center" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>

                        <form className="form-subscribe" id="contactFormFooter" onSubmit={handleSubmit}>

                            <div className="row">
                                <div className="col">
                                    <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                                </div>
                            </div>

                            {isFormSubmitted && (
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    <p>To activate this form, sign up at</p>
                                    <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            )}

                            {/* Error message display logic can be added similarly */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
