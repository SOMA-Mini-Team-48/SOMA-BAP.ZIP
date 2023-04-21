import React from 'react';
import Lottie from 'lottie-react';
import loadingjson from '../../assets/loading.json';

const Loading = () => {
	return <Lottie animationData={loadingjson} size={10} />;
};

export default Loading;
