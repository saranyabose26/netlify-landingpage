import { useState } from 'react';

const Masthead = () => {
    // State variables to track form submission status
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here (e.g., sending data to a server)
        // Assume the form submission is successful for demonstration purposes
        // You can replace this with your actual form submission logic
        setIsFormSubmitted(true);
    };

    return (
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
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
            </div>
        </header>
    );
};

export default Masthead;
