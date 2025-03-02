import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { deleteImportList, fetchImportLists, fetchRootFolders } from 'Store/Actions/settingsActions';
import createSortedSectionSelector from 'Store/Selectors/createSortedSectionSelector';
import sortByProp from 'Utilities/Array/sortByProp';
import ImportLists from './ImportLists';

function createMapStateToProps() {
  return createSelector(
    createSortedSectionSelector('settings.importLists', sortByProp('name')),
    (importLists) => importLists
  );
}

const mapDispatchToProps = {
  fetchImportLists,
  deleteImportList,
  fetchRootFolders
};

class ListsConnector extends Component {

  //
  // Lifecycle

  componentDidMount() {
    this.props.fetchImportLists();
    this.props.fetchRootFolders();
  }

  //
  // Listeners

  onConfirmDeleteImportList = (id) => {
    this.props.deleteImportList({ id });
  };

  //
  // Render

  render() {
    return (
      <ImportLists
        {...this.props}
        onConfirmDeleteImportList={this.onConfirmDeleteImportList}
      />
    );
  }
}

ListsConnector.propTypes = {
  fetchImportLists: PropTypes.func.isRequired,
  deleteImportList: PropTypes.func.isRequired,
  fetchRootFolders: PropTypes.func.isRequired
};

export default connect(createMapStateToProps, mapDispatchToProps)(ListsConnector);
