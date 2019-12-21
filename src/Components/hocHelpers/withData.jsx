import React, { Component } from 'react';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const withData = View => {
  return class extends Component {
    state = {
      data: null,
      loading: false,
      error: false,
    };

    componentDidMount() {
      this.setState({ loading: true, error: false });
      this.props
        .getData()
        .then(data => this.setState({ data, loading: false }))
        .catch(() => {
          this.setState({ error: true });
        });
    }

    render() {
      const { data, loading, error } = this.state;
      if (!data || loading) return <Spinner />;
      if (error) return <ErrorIndicator />;
      return <View data={data} {...this.props} />;
    }
  };
};

export default withData;
