import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      textDecoration: 'none'
    }
  }

  render() {
    const {id, title} = this.props.banner;

    return (
        <div style={this.getStyle()}>
          <p>Placeholder</p>
        </div>
    );
  }
}

const styles = StyleSheet.create({

});

export default Banner
