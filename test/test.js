var watcher = require("../src")
var sites = ["http://wanghuanming.com", 
			"http://coolshell.cn", 
			"http://ruanyifeng.com",
			"http://baidu.com",
			"http://mail.163.com",
			"http://github.com"]

var options = {
	silent: false
}

watcher.watch(sites, options, function(site) {
});
