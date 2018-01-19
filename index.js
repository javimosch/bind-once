module.exports = function(name,cb){
	window.$once.state = window.$once.state || {
		callbacks:{},
		emitted:{}
	};
	if(!cb){
		if(!!window.$once.state.callbacks[name] && !!!window.$once.state.emitted[name]){
			window.$once.state.callbacks[name]();
		}else{
			window.$once.state.emitted[name]=true;
		}
	}else{
		window.$once.state.callbacks[name] = cb;
		if(window.$once.state.emitted[name]){
			window.$once.state.callbacks[name]();
		}
	}
}