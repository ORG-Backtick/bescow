import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import DetailsList from './componentes/DetailsList';
import Footer from '../../components/Footer';
import logo from '../../assets/static/logoCow_Colors.svg';
import LayoutPlaceDetail from './LayoutPlaceDetail';
import Reserve from '../../components/Reserve';
import { setSelectedCow } from '../../actions';

class PlaceDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reserveVisible: false,
      selectedCow: props.selectedCow || props.location.state.cow,
      costDetail: props.costDetail,
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
    const { reserveVisible, selectedCow, costDetail } = this.state;

    return (
      <LayoutPlaceDetail>
        <Header logo={logo} origin='isSearch' />
        <DetailsList handleOpenClick={this.handleOpenReserve} selectedCow={selectedCow} costDetail={costDetail} />
        <Footer origin='isSearch' />
        {reserveVisible && (
          <Reserve handleCloseClick={this.handleCloseReserve} detail={selectedCow} costDetail={costDetail} />
        )}
      </LayoutPlaceDetail>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCow: state.selectedCow,
    filterList: state.filterList,
    costDetail: state.costDetail,
  };
};

const mapDispatchToProps = {
  setSelectedCow,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailPage);
