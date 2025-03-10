import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'nainital', label: 'Nainital' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'jaipur', label: 'Jaipur' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'shimla', label: 'Shimla' },
  { value: 'ooty', label: 'Ooty' },
  { value: 'varanasi', label: 'Varanasi' },
  { value: 'agra', label: 'Agra' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'mussoorie', label: 'Mussoorie' },
  { value: 'manali', label: 'Manali' },
  { value: 'jodhpur', label: 'Jodhpur' },
  { value: 'rishikesh', label: 'Rishikesh' },
  { value: 'panaji', label: 'Panaji' },
  { value: 'kochi', label: 'Kochi' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    marginTop: '10px',
    marginLeft: '30px',
    fontSize: '14px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

class Searchbar extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="search-bar">
        <div className="select-city-large">
          <div className="select-div">
            <Select
              styles={customStyles}
              placeholder="Select City"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="select-experience-large" />
        <button id="go">Let's Go</button>
      </div>
    );
  }
}

export default Searchbar;
