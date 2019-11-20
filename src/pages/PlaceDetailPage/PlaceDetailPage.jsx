import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import DetailsList from './componentes/DetailsList';
import Footer from '../../components/Footer';
import logo from '../../assets/static/logoCow_Colors.svg';
import LayoutPlaceDetail from './LayoutPlaceDetail';
import Modal from '../../containers/Modal';
import Reserve from '../../components/Reserve';
import SuccessMessage from '../../components/SuccessMessage';
import { setSelectedCow } from '../../actions';

class PlaceDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reserveVisible: false,
      successMsgVisible: false,
      selectedCow: props.selectedCow,
      costDetail: props.costDetail,
    };
  }

  componentDidUpdate(prevProps) {
    const { reserve } = this.props;
    if (reserve && (prevProps.reserve !== reserve)) {
      this.handleCloseReserve();
      this.handleOpenSuccessMsg();
    }
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

  handleOpenSuccessMsg = () => {
    this.setState({
      successMsgVisible: true,
    });
  }

  handleCloseSuccessMsg = () => {
    this.setState({
      successMsgVisible: false,
    });
  };

  render() {
    const { reserveVisible, successMsgVisible, selectedCow, costDetail } = this.state;
    const { user } = this.props;

    return (
      <LayoutPlaceDetail>
        <Header logo={logo} origin='isSearch' />
        <DetailsList handleOpenClick={this.handleOpenReserve} selectedCow={selectedCow} costDetail={costDetail} />
        <Footer origin='isSearch' />
        <Modal>
          {reserveVisible && (
            <Reserve handleCloseClick={this.handleCloseReserve} detail={selectedCow} costDetail={costDetail} user={user} />
          )}
          {successMsgVisible &&
            <SuccessMessage handleCloseClick={this.handleCloseSuccessMsg} />}
        </Modal>
      </LayoutPlaceDetail>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    selectedCow: state.selectedCow,
    filterList: state.filterList,
    costDetail: state.costDetail,
    reserve: state.reserve,
  };
};

const mapDispatchToProps = {
  setSelectedCow,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailPage);
