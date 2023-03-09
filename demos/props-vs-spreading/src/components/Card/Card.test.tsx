import React from 'react';
import { render, screen,  } from '@testing-library/react';
import Card from './index';

const setup = (props?: any) => {
  const utils = render(<Card {...props} />)
  return {
    ...utils,
  }
}

describe('Card', () => {
  it('Should display default values if no props', () => {
    setup();
    const title = screen.getByText("Default title");
    expect(title).toBeInTheDocument();

  })

  it('Should use the given data', () => {
    const cardData = {
      title: "J'aime les patates"
    };

    setup(cardData);

    const title = screen.getByText("J'aime les patates");
    expect(title).toBeInTheDocument();
  })
});
