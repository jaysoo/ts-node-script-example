import { render } from '@testing-library/react';

import Testlib from './testlib';

describe('Testlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testlib />);
    expect(baseElement).toBeTruthy();
  });
});
