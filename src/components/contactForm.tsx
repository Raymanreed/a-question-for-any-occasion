
const ContactForm = () => {
    return (
        <div className="contact-form-container container">
            <details>
                <summary className="contact-form-widget">
                    Submit your own question!
                </summary>
                <form className="submit-question-container container" autoComplete="off" action={"mailto"}>
                    <div className="submit-question-data">
                        <div className="submit-question-name">
                            <label htmlFor="name">Enter your name:</label>
                            <input className="name-entry-input input" type="text" name="name" />
                        </div>
                        <div className="submit-question-email">
                            <label htmlFor="email">Enter your email:</label>
                            <input className="email-entry-input input" type="email" name="email" />
                        </div>
                        <div className="submit-question-question">
                            <label htmlFor="question">Submit your question:</label>
                            <input className="question-entry-input input" type="text" name="question" />
                        </div>
                        <div className="submit-question-reference">
                            <label htmlFor="reference">Would you like us to contact you if your question is added?</label>
                            <input className="reference-checkbox-input" type="checkbox" name="reference" />
                        </div>
                    </div>
                    <input className="submit-question-button" type="submit" value="Submit your question" />
                </form>
            </details>
        </div>
    )
}

