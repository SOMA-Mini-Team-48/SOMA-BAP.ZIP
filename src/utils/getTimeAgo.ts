const getTimeAgo = (date: Date): string => {
	const now = new Date();
	const diff = (now.getTime() - date.getTime()) / 1000;

	if (diff < 60) {
		return '방금 전';
	} else if (diff < 3600) {
		const minutes = Math.floor(diff / 60);
		return `${minutes}분 전`;
	} else if (diff < 86400) {
		const hours = Math.floor(diff / 3600);
		return `${hours}시간 전`;
	} else if (diff < 604800) {
		const days = Math.floor(diff / 86400);
		return `${days}일 전`;
	} else if (diff < 2592000) {
		const weeks = Math.floor(diff / 604800);
		return `${weeks}주 전`;
	} else if (diff < 31536000) {
		const months = Math.floor(diff / 2592000);
		return `${months}달 전`;
	} else {
		const years = Math.floor(diff / 31536000);
		return `${years}년 전`;
	}
};

export default getTimeAgo;
