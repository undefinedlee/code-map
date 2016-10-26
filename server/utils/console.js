require("colors");

export default {
	log: function(info){
		this.stopAnimate();

		console.log(info);
	},
	error: function(info){
		this.stopAnimate();

		if(typeof info === "string"){
			console.log(info.red);
		}else{
			console.log("Error:>>>".red);
			console.log(info);
		}
	},
	success: function(info){
		this.stopAnimate();

		console.log(info.green);
	},
	warn: function(info){
		this.stopAnimate();

		console.log(info.yellow);
	},
	info: function(info){
		this.stopAnimate();

		console.log(info.blue);
	},
	title: function(info){
		this.stopAnimate();

		info = "==========" + info + "==========";
		console.log(info.bold);
	},
	animate: function(items, fps, config){
		this.stopAnimate();

		this.animateConfig = config || {};
		if(this.animateConfig.content){
			process.stdout.write(this.animateConfig.content);
		}

		var count = items.length;
		var index = 0;

		this.current = "";
		this.intervalHandler = setInterval(() => {
			var clearString = this.current ? new Array(this.current.length + 1).join("\b") : "";

			this.current = items[(index ++) % count];

			process.stdout.write(clearString + this.current);
		}, fps || 100);
	},
	stopAnimate: function(){
		if(this.intervalHandler){
			clearInterval(this.intervalHandler);
			this.intervalHandler = null;

			if(this.current){
				process.stdout.write("\r");
				if(this.animateConfig.content){
					console.log(this.animateConfig.content + new Array(this.current.length + 1).join(" "));
				}
				this.current = "";
			}
		}
	}
}