const initialState = {
	iframeHref: '',
}

const iframeHref = (state=initialState,action) => {
	switch (action.type) {
		case 'CHANGE_IFRAME':
			return Object.assign({},state,{
				iframeHref: action.href
			});
		default:
			return state;
	}
}

export default iframeHref;
