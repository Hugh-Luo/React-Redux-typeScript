import React from "react";
import { fetchState } from "../redux/reducers/jsondata";
import { getApiInfo } from "../redux/actions/jsondata";
import { connect } from "react-redux";
import { useEffect } from "react";

interface fetch {
  fetchApiState: fetchState;
  fetchApi: Function;
}

export const FetchContainer: React.FC<fetch> = ({
  fetchApiState,
  fetchApi,
}) => {
  useEffect((): void => {
    fetchApi();
  }, []);

  return <div>haha</div>;
};

const mapToPropsState = (state: any) => {
  return {
    fetchApiState: state.fetchUsers,
  };
};

const mapDispatchProps = (dispatch: any) => {
  return {
    fetchApi: () => dispatch(getApiInfo()),
  };
};

export default connect(mapToPropsState, mapDispatchProps)(FetchContainer);
