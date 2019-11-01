import React from 'react';
import Header from '../../components/Header';
import DetailsList from './componentes/DetailsList';
import Footer from '../../components/Footer';
import logo from '../../assets/static/logoCow_Colors.svg';
import LayoutPlaceDetail from './LayoutPlaceDetail';
import Reserve from '../../components/reserve';

class PlaceDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reserveVisible: false,
    };
  }

  handleOpenReserve = () => {
    this.setState({
      reserveVisible: true,
    });
  }

  handleCloseReserve = () => {
    this.setState({
      reserveVisible: false,
    });
  };

  render() {
    const { reserveVisible } = this.state;

    return (
      <LayoutPlaceDetail>
        <Header logo={logo} origin='isSearch' />
        <DetailsList handleOpenClick={this.handleOpenReserve} />
        <Footer origin='isSearch' />
        {reserveVisible && (
          <Reserve handleCloseClick={this.handleCloseReserve} />
        )}
      </LayoutPlaceDetail>
    );
  }
}

export default PlaceDetailPage;
