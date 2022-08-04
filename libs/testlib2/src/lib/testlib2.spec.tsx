import { render } from '@testing-library/react';

import Testlib2 from './testlib2';

describe('Testlib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testlib2 />);
    expect(baseElement).toBeTruthy();
  });
});
