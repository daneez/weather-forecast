import React from 'react';
import styles from './OtherCities.module.css';
import City from './components/City';
import getWeathers from '../../apis/getWeathers';
import classNames from 'classnames/bind';
import setCity from '../../store/city/actions/setCity';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IOtherCitiesProps, IOtherCitiesState, IOtherCitiesDispatchProps, IOtherCitiesStateProps } from '../interfaces/otherCities.interface';
import { ISettingState } from '../../types/stateAndAction';

const cx = classNames.bind(styles);

export const CITIES = [{
  name: 'Melbourne',
  id: '2158177',
}, {
  name: 'Sydney',
  id: '2147714',
}, {
  name: 'Brisbane',
  id: '2174003',
}, {
  name: 'Perth',
  id: '2063523',
}];

class OtherCities extends React.Component<IOtherCitiesProps, IOtherCitiesState> {
  constructor(props: IOtherCitiesProps) {
    super(props);

    this.state = {
      data: {
        list: []
      },
      loading: true,
      toggle: false,
    }
  }

  componentDidMount() {
    this.getWeathers();
  }

  async getWeathers() {
    const ids = CITIES.map((c) => c.id);

    const { data } = await getWeathers(ids);

    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    const { data, loading, toggle } = this.state;
    const { currentCity, onCityClick } = this.props; 

    return (
      <div data-testid="OTHER_CITIES" className={styles.otherCities}>
        {!toggle && (
          <button 
            className={styles.toggle} 
            onClick={() => this.setState((s) => ({ toggle: !s.toggle }))}
          >
            View More Cities ...
          </button>
        )}
        <div className={cx('container', { active: toggle })}>
          <h2 className={styles.header}>Other Cities</h2>
          {loading ? (
            <div className={styles.loading}>Loading...</div>
          ) : (
            <div className={styles.cities}>
              {data.list.map((item: any) => {
                if (item.id === currentCity.id) {
                  return null;
                }

                return (
                  <City 
                    key={item.id}
                    name={item.name} 
                    temperature={parseInt(item.main.temp)}
                    weather={{ 
                      icon: item.weather[0].icon, 
                      description: item.weather[0].main,
                    }} 
                    onClick={() => onCityClick({
                      id: item.id,
                      name: item.name,
                    })}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ISettingState): IOtherCitiesStateProps => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch: Dispatch): IOtherCitiesDispatchProps => ({
  onCityClick: (city) => dispatch(setCity(city)),
});

const OtherCitiesContainer = connect(
  mapStateToProps, 
  mapDispatchToProps,
)(OtherCities)

export default OtherCitiesContainer;