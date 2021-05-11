import React from 'react';
import City from './components/City';
import { render } from '@testing-library/react';
import OtherCities, { CITIES } from './OtherCities';
import axios from 'axios';

// jest.mock('./components/City', () => jest.fn(() => '<City />'));
// jest.mock('../../apis/getWeathers', () => jest.fn());
jest.mock('axios');
const mockCity = jest.fn() as jest.MockedFunction<typeof City>;
const mockGetWeathers = axios as jest.Mocked<typeof axios>;

describe('<OtherCities />', () => {
  describe('On loading', () => {
    let renderResult;

    beforeEach(() => {
      mockCity.mockClear();
      renderResult = render(<OtherCities />);
    });

    it('should call getWeathers with city ids', () => {
      expect(mockGetWeathers).toBeCalledWith(CITIES.map((c) => c.id));
    });

    it('should renders loading', () => {
      const { getByText } = renderResult;

      expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('should not call <City />', () => {
      expect(mockCity).not.toBeCalled();
    });
  });

  describe('On loaded', () => {
    let renderResult;

    const weathers = {
      list: [{
        id: 'ID',
        name: 'Melbourne',
        main: { temp: 10 },
        weather: [{
          icon: '01d',
          main: 'Clouds',
        }],
      }],
    };
    
    beforeEach(() => {
      mockCity.mockClear();

      mockGetWeathers.get.mockResolvedValue({ data: weathers } as any);

      renderResult = render(<OtherCities />);
    });

    it('should call getWeathers with city ids', () => {
      expect(mockGetWeathers).toBeCalledWith(CITIES.map((c) => c.id));
    });

    it('should not render loading', () => {
      const { queryByText } = renderResult;

      expect(queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('should render <City />', () => {
      weathers.list.forEach((item) => {
        expect(mockCity).toBeCalledWith({
          name: item.name,
          temperature: item.main.temp,
          weather: {
            icon: item.weather[0].icon,
            description: item.weather[0].main,
          }
        }, expect.anything());
      });
    });
  });
});