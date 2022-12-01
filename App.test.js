import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';

describe('Feedback Form', () => {
  test('User is able to submit the form if the score is lower than 5 and additional feedback is provided', () => {
    const score = '3';
    const comment = 'The pizza crust was too thick';
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    /* 
    
    1. The first user interaction that needs to happen is to set the score as 3.

    2. The first line grabs a reference to the range input component by using the global screen object from react-testing-library and the query getByLabelText to find a label that contains the exact text Score:

    3. Then, a fireEvent.change() is simulated on the rangeInput with {target: {value: score}}

    */

    /*  
    
    4. After that, a second user interaction is required to set the additional comment for the textArea and should follow the steps above but change Score: to Comments: and value is comment instead of score

    */

    /* 
    
    5. Last but not least, a submission of the form should be simulated

    6. In this particular instance, the button is referenced by using a different query on the global screen object, getByRole and saved to const submitButton. This query looks for an element whose role attribute is set to “button”, which is inherent in all button HTML tags.

    7. the fireEvent is used with .click instead of change and the param is the 
    submitButton variable

    */

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test('User is able to submit the form if the score is higher than 5, without additional feedback', () => {
    const score = '9';
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    /*

    8. uses the same code as step 2 for the rangeInput 
    9. uses the same code as step 6 and 7 

    */

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: '',
    });
  });
});
