import React, { Component } from 'react';
import Car from './Car';
import Title from './Title';
import Wrapper from './Wrapper';

export class MyCars extends Component {
  state = {
    cars: [
      { name: 'Ford', color: 'green' },
      { name: 'Mercedes', color: 'red' },
      { name: 'Peugeot', color: '' },
    ],
  };

  render() {
    const { title, color } = this.props;

    return (
      <div>
        <Wrapper>
          <Title color={color}>{title}</Title>
        </Wrapper>

        {this.state.cars &&
          this.state.cars.map((car, index) => {
            return (
              <Car key={index} color={car.color}>
                {car.name}
              </Car>
            );
          })}
      </div>
    );
  }
}
