import { render } from '@testing-library/react';

import Testlib3 from './testlib3';

describe('Testlib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testlib3 />);
    expect(baseElement).toBeTruthy();
  });
});
