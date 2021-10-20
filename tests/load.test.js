// required page and functionality
import render from '@testing-library/react';
import Header from '../src/components/Header/Header.js';


test('expect root div to be present', () =>  {
    render(<AppBar />);
    
    expect(component).toHaveTextContent('Material Kit React');
}); 