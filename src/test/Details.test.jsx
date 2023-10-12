import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from '../redux/details/detailsSlice';
import Details from '../routes/Details';

describe('test details route', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        details: detailsReducer,
      },
    });
  });

  it('should render without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
  });
});
